import { derived, get, readonly, writable } from 'svelte/store';
import { agentList, assignAgent } from '../agent/agentStore';
import { addMessage, chatTranscript, getHistoryByAgent } from '../transcript/transcriptStore';
import type { Attachment } from '../transcript/transcriptStore';

// =====================================================================
// orchestration.ts — Event Bus + parser [CALL: agent] (Fase 3, item 1)
// Runtime-first (PROJECT_RULES.md).
//
// Tugas:
//   1. Event bus sederhana: publish/subscribe antar komponen/agen.
//   2. Monitor transkrip chat: deteksi token [CALL: namaAgen] pada pesan
//      baru, trigger agent yang dipanggil (set aktif + catat ke transkrip).
//   3. Murni frontend, tanpa backend — bisa diuji langsung di /utest.
// =====================================================================

// ==================== Event Bus ====================

export type BusEvent = {
	type: string;
	payload: Record<string, unknown>;
	ts: number;
};

const eventLog = writable<BusEvent[]>([]);
export const busHistory = readonly(eventLog);

const listeners = new Map<string, Set<(payload: Record<string, unknown>) => void>>();

// publish event (log + panggil listener type tsb)
export const emit = (type: string, payload: Record<string, unknown> = {}) => {
	const ev: BusEvent = { type, payload, ts: Date.now() };
	eventLog.update((l) => [...l.slice(-49), ev]); // simpan max 50
	listeners.get(type)?.forEach((fn) => fn(payload));
};

// subscribe ke satu type. Return unsubscriber.
export const on = (type: string, fn: (payload: Record<string, unknown>) => void) => {
	if (!listeners.has(type)) listeners.set(type, new Set());
	listeners.get(type)!.add(fn);
	return () => listeners.get(type)?.delete(fn);
};

// ==================== Parser [CALL: agent] ====================

const CALL_RE = /\[CALL:\s*([a-zA-Z0-9_\- ]+)\]/g;

// deteksi semua target yang dipanggil dalam teks
export const parseCalls = (text: string): string[] => {
	const found: string[] = [];
	CALL_RE.lastIndex = 0;
	let m: RegExpExecArray | null;
	while ((m = CALL_RE.exec(text)) !== null) {
		found.push(m[1].trim());
	}
	return found;
};

// resolve nama/id → id agent (case-insensitive)
export const resolveAgentId = (target: string): string | null => {
	const normalized = target.toLowerCase();
	const agents = get(agentList);
	const hit =
		agents.find((a) => a.id.toLowerCase() === normalized) ??
		agents.find((a) => a.name.toLowerCase() === normalized);
	return hit ? hit.id : null;
};

// ==================== Orchestrator ====================

export type CallEvent = {
	chatId: string;
	fromAgentId: string | null; // null = user
	targetAgentId: string;
	ts: number;
};

const callLog = writable<CallEvent[]>([]);
export const calls = readonly(callLog);

// proses satu pesan: cek [CALL: ...], trigger agent target
export const processMessage = (chatId: string, fromAgentId: string, content: string) => {
	const targets = parseCalls(content);
	if (targets.length === 0) return;

	for (const target of targets) {
		const targetId = resolveAgentId(target);
		if (!targetId) {
			emit('orchestration:unknown-call', { chatId, fromAgentId, target, content });
			continue;
		}
		if (targetId === fromAgentId) continue; // jangan panggil diri sendiri

		callLog.update((l) => [
			...l,
			{ chatId, fromAgentId, targetAgentId: targetId, ts: Date.now() }
		]);

		// trigger: tugaskan agent target + catat trigger ke transkripnya
		assignAgent(targetId);
		addMessage(chatId, targetId, {
			role: 'system',
			content: `[trigger] dipanggil oleh ${fromAgentId ?? 'user'}`
		});
		emit('orchestration:call', { chatId, fromAgentId, targetAgentId: targetId });
	}
};

// ==================== File Sharing (Fase 3, item 4) ====================

export type SendPayload = {
	chatId: string;
	fromAgentId: string; // pengirim (null = user)
	toAgentId: string; // penerima
	content: string; // teks pesan
	attachments?: Attachment[]; // payload file
};

// Kirim pesan + attachment dari satu agen ke agen lain via bus.
// - Pesan masuk ke transkrip penerima (role user, menandakan "diterima utk diproses")
// - Emit event 'agent:file-shared' utk traceability
// - Auto-process [CALL: ...] bila ada dalam content
export const sendMessageToAgent = (p: SendPayload) => {
	const { chatId, fromAgentId, toAgentId, content, attachments } = p;

	addMessage(chatId, toAgentId, {
		role: 'user',
		content,
		...(attachments && attachments.length > 0 ? { attachments } : {})
	});

	emit('agent:file-shared', {
		chatId,
		fromAgentId,
		toAgentId,
		content,
		attachmentCount: attachments?.length ?? 0
	});

	// Auto-trigger: pesan bisa mengandung [CALL: agen lain] — biarkan parser jalan
	processMessage(chatId, fromAgentId, content);
};

// Ambil semua attachment dalam riwayat satu agen (utk UI/analisis)
export const getAttachmentsByAgent = (chatId: string, agentId: string): Attachment[] => {
	const history = get(chatTranscript(chatId));
	return history
		.filter((m) => m.agentId === agentId && m.attachments && m.attachments.length > 0)
		.flatMap((m) => m.attachments!);
};

// ==================== Generator (Fase 3, item 3) ====================

export type GenerateOptions = {
	chatId: string;
	agentId: string;
	model: string;
	systemPrompt?: string;
	history: { role: string; content: string }[];
	onStream?: (text: string) => void; // opsional, utk UI live
};

// Minta backend generate respons agen via Ollama. Menambah pesan assistant
// ke transkrip agent tsb + emit event bus 'agent:generated'.
export const generateAgentResponse = async (opts: GenerateOptions): Promise<string> => {
	emit('agent:generating', { chatId: opts.chatId, agentId: opts.agentId, model: opts.model });

	const messages: { role: string; content: string }[] = [];
	if (opts.systemPrompt) messages.push({ role: 'system', content: opts.systemPrompt });
	messages.push(...opts.history);

	let res: Response;
	try {
		res = await fetch('/api/v1/agents/generate', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ model: opts.model, messages, stream: false })
		});
	} catch (e) {
		const msg = `[error] gagal hubungi backend: ${String(e)}`;
		addMessage(opts.chatId, opts.agentId, { role: 'system', content: msg });
		emit('agent:error', { chatId: opts.chatId, agentId: opts.agentId, error: String(e) });
		return msg;
	}

	if (!res.ok) {
		let detail = '';
		try {
			detail = (await res.json()).detail ?? '';
		} catch {
			/* ignore */
		}
		const msg = `[error] backend ${res.status}: ${detail}`;
		addMessage(opts.chatId, opts.agentId, { role: 'system', content: msg });
		emit('agent:error', { chatId: opts.chatId, agentId: opts.agentId, status: res.status, detail });
		return msg;
	}

	let text = '';
	try {
		const data = await res.json();
		text = data?.choices?.[0]?.message?.content ?? '';
	} catch (e) {
		const msg = `[error] respons backend tak valid: ${String(e)}`;
		addMessage(opts.chatId, opts.agentId, { role: 'system', content: msg });
		emit('agent:error', { chatId: opts.chatId, agentId: opts.agentId, error: String(e) });
		return msg;
	}

	// auto-trigger: pesan baru mungkin mengandung [CALL: agent lain]
	processMessage(opts.chatId, opts.agentId, text);

	opts.onStream?.(text);
	addMessage(opts.chatId, opts.agentId, { role: 'assistant', content: text });
	emit('agent:generated', { chatId: opts.chatId, agentId: opts.agentId, model: opts.model });
	return text;
};

// ==================== Monitor transkrip ====================

// watch satu chat: proses pesan user/assistant yang BELUM terlihat.
// Dedup pakai set id pesan (robust thd re-entrancy saat addMessage trigger).
const seen = new Set<string>();
const watchers = new Map<string, () => void>();

export const watchTranscript = (chatId: string): (() => void) => {
	// snapshot pesan yang SUDAH ada sebelum subscribe — hanya proses yang
	// datang SETELAH ini (hindari reprocess lama saat reload + persist).
	const existing = get(chatTranscript(chatId));
	for (const m of existing) seen.add(`${chatId}:${m.id}`);

	// subscribe baru; helper mengolah pesan baru per id
	const unsub = chatTranscript(chatId).subscribe((msgs) => {
		for (const m of msgs) {
			const key = `${chatId}:${m.id}`;
			if (seen.has(key)) continue;
			seen.add(key);
			if (m.role === 'user' || m.role === 'assistant') {
				processMessage(chatId, m.agentId, m.content);
			}
		}
	});
	watchers.set(chatId, () => {
		unsub();
		watchers.delete(chatId);
	});
	return () => {
		const stop = watchers.get(chatId);
		if (stop) {
			stop();
			watchers.delete(chatId);
		}
	};
};

// reset event/call log + seen-set (utk test & clear)
export const clearBus = () => {
	eventLog.set([]);
	callLog.set([]);
	seen.clear();
};

// ==================== Leader-Worker Delegation (Fase 3, item 7) ====================

// ==================== Guardrails & Critic Agent (Fase 3, item 9) ====================

export type Critique = {
	agentId: string; // agent yang dikritik
	criticId: string; // kritikus (default: agent berperan critic)
	text: string;
	passed: boolean; // lulus guardrail?
	issues: string[]; // daftar masalah yang ditemukan
	ts: number;
};

const critiqueLog = writable<Critique[]>([]);
export const critiques = readonly(critiqueLog);

// ---- Structural guardrails (deterministik, tanpa LLM) ----
// Mendeteksi pola output yang mencurigakan / indikasi hallucination.

const HALLUCINATION_PATTERNS: { re: RegExp; issue: string }[] = [
	{ re: /\[CALL:\s*[^\]]+\]/g, issue: 'output mengandung [CALL:] tak terselesaikan (delegasi menggantung)' },
	{ re: /\[error\]/g, issue: 'output mengandung penanda error backend' },
	{ re: /\[trigger\]/g, issue: 'output mengandung token trigger sistem' },
	{ re: /undefined|NaN|null(?!\s*[)}])/g, issue: 'output mengandung nilai tak terdefinisi' },
	{ re: /lorem ipsum|TODO|FIXME|placeholder/gi, issue: 'output mengandung teks placeholder/template' }
];

// ---- deterministik: periksa struktur output ----
export const structuralGuard = (text: string): string[] => {
	const issues: string[] = [];
	for (const { re, issue } of HALLUCINATION_PATTERNS) {
		if (re.test(text)) issues.push(issue);
	}
	if (text.length < 20) issues.push('output terlalu pendek (<20 char) — kemungkinan generasi gagal');
	if (text.length > 4000) issues.push('output terlalu panjang (>4000 char) — potensi repetisi/loop');
	return issues;
};

// ---- semantic: minta Critic agent (LLM) menilai output ----
export const criticReview = async (opts: {
	chatId: string;
	agentId: string; // agent yang menghasilkan output
	text: string; // output yang dinilai
	task?: string; // konteks tugas (opsional)
}): Promise<Critique> => {
	const { chatId, agentId, text } = opts;
	const agents = get(agentList);
	// cari agent berperan critic (systemPrompt mengandung 'critic' / id 'critic')
	const critic =
		agents.find(
			(a) =>
				(a.id.toLowerCase().includes('critic') ||
					a.name.toLowerCase().includes('critic') ||
					(a.systemPrompt || '').toLowerCase().includes('critic')) &&
				a.id !== agentId
		) ?? agents.find((a) => a.id !== agentId); // fallback: agent lain

	const structural = structuralGuard(text);
	const critique: Critique = {
		agentId,
		criticId: critic?.id ?? 'system',
		text,
		passed: structural.length === 0,
		issues: [...structural],
		ts: Date.now()
	};

	// jalankan review LLM hanya bila ada critic agent & output layak dinilai
	if (critic && text.length > 20) {
		const prompt = `Review output berikut dari agent ${agentId} untuk masalah: (1) hallucination / fakta tak berdasar, (2) kontradiksi internal, (3) instruksi tak terselesaikan, (4) kualitas buruk. Jawab format:\nPASSED: true/false\nISSUES: daftar singkat (kosongkan jika tidak ada)\n\nOutput:\n${text.slice(0, 2000)}`;
		try {
			const review = await generateAgentResponse({
				chatId,
				agentId: critic.id,
				model: critic.model,
				systemPrompt: critic.systemPrompt,
				history: [{ role: 'user', content: prompt }]
			});
			const passed = !/PASSED:\s*false/i.test(review);
			const issuesMatch = review.match(/ISSUES:\s*(.*)/i);
			const llmIssues = issuesMatch
				? issuesMatch[1]
						.split(/[,\n]/)
						.map((s) => s.trim())
						.filter(Boolean)
				: [];
			critique.passed = passed && structural.length === 0;
			critique.issues = [...structural, ...llmIssues];
		} catch (e) {
			critique.issues.push(`[critic error] ${String(e)}`);
		}
	}

	critiqueLog.update((l) => [...l.slice(-49), critique]);
	emit('orchestration:critique', {
		chatId,
		agentId,
		criticId: critique.criticId,
		passed: critique.passed,
		issues: critique.issues
	});
	return critique;
};

// ---- wrapper: generate + guardrail + critic otomatis ----
// Menghasilkan output agent, jalankan structural guard, lalu critic review
// bila output lulus structural. Mengembalikan output + status guardrail.
export const generateWithGuardrail = async (opts: {
	chatId: string;
	agentId: string;
	model: string;
	systemPrompt?: string;
	history: { role: string; content: string }[];
	task?: string; // konteks tugas utk critic
}): Promise<{ text: string; critique: Critique | null }> => {
	const text = await generateAgentResponse(opts);

	// structural guard dulu (deterministik, cepat)
	const structural = structuralGuard(text);
	if (structural.length > 0) {
		const critique: Critique = {
			agentId: opts.agentId,
			criticId: 'system',
			text,
			passed: false,
			issues: structural,
			ts: Date.now()
		};
		critiqueLog.update((l) => [...l.slice(-49), critique]);
		emit('orchestration:critique', {
			chatId: opts.chatId,
			agentId: opts.agentId,
			criticId: 'system',
			passed: false,
			issues: structural
		});
		return { text, critique };
	}

	// lulus structural -> critic LLM review
	const critique = await criticReview({
		chatId: opts.chatId,
		agentId: opts.agentId,
		text,
		task: opts.task
	});
	return { text, critique };
};

// Item 10: feedback loop Worker -> Leader (minta klarifikasi / blocker / approval)
export type LeaderFeedback = {
	workerId: string;
	question: string; // permintaan worker (dari output [CALL: leader])
	leaderResponse: string; // jawaban Leader
	ts: number;
};

// Item 10: Worker -> Leader feedback loop (minta klarifikasi / blocker / approval).
// Worker output yang mengandung [CALL: <leader>] otomatis mengirim pertanyaan ke
// Leader; jawaban Leader ditambahkan ke transkrip worker utk melanjutkan flow.
export const requestLeaderFeedback = async (opts: {
	chatId: string;
	leaderId: string;
	workerId: string;
	question: string;
}): Promise<string> => {
	const { chatId, leaderId, workerId, question } = opts;
	const agents = get(agentList);
	const leader = agents.find((a) => a.id === leaderId);
	if (!leader) {
		emit('orchestration:feedback-error', { chatId, leaderId, workerId, error: 'Leader not found' });
		return `[error] Leader ${leaderId} tidak ditemukan`;
	}

	// pertanyaan worker -> transkrip Leader (role user = minta jawaban)
	addMessage(chatId, leaderId, {
		role: 'user',
		content: `[feedback dari worker ${workerId}] ${question}`
	});
	emit('orchestration:worker-feedback', { chatId, leaderId, workerId, question });

	const leaderHistory = getHistoryByAgent(chatId, leaderId).map((m) => ({
		role: m.role,
		content: m.content
	}));

	let leaderAnswer: string;
	try {
		leaderAnswer = await generateAgentResponse({
			chatId,
			agentId: leaderId,
			model: leader.model,
			systemPrompt: leader.systemPrompt,
			history: leaderHistory
		});
	} catch (e) {
		leaderAnswer = `[error] Leader gagal menjawab: ${String(e)}`;
	}

	// jawaban Leader -> transkrip worker (role user = lanjutkan kerja)
	addMessage(chatId, workerId, {
		role: 'user',
		content: `[jawaban Leader] ${leaderAnswer}`
	});
	emit('orchestration:leader-response', { chatId, leaderId, workerId, answer: leaderAnswer });
	return leaderAnswer;
};

export type DelegationPlan = {
	leaderId: string;
	task: string;
	workerIds: string[]; // worker yang dipanggil (urutan eksekusi)
	// hasil agregat: workerId -> respons text
	results: Record<string, string>;
	status: 'planning' | 'running' | 'done' | 'error';
	finalText?: string; // sintesis Leader setelah feedback
	feedback?: LeaderFeedback[]; // Item 10: riwayat tanya-jawab worker->leader
};

const delegationLog = writable<DelegationPlan[]>([]);
export const delegations = readonly(delegationLog);

// update delegasi aktif (create/finish)
const upsertDelegation = (d: DelegationPlan) =>
	delegationLog.update((l) => {
		const idx = l.findIndex((x) => x.leaderId === d.leaderId && x.task === d.task);
		if (idx === -1) return [...l, d];
		const next = [...l];
		next[idx] = d;
		return next;
	});

// Analisis prompt user: Leader (LLM) menghasilkan plan + [CALL: worker],
// lalu tiap worker dipanggil, respons dikumpulkan, feedback di-stream ke
// Leader utk sintesis jawaban final. Event bus dipakai utk traceability.
export const delegateTask = async (opts: {
	chatId: string;
	leaderId: string; // id agent Leader
	task: string; // prompt user
	workerIds: string[]; // daftar worker yang boleh dipanggil (urutan prioritas)
}): Promise<DelegationPlan> => {
	const { chatId, leaderId, task, workerIds } = opts;
	const agents = get(agentList);
	const leader = agents.find((a) => a.id === leaderId);
	if (!leader) {
		emit('orchestration:delegation-error', { chatId, leaderId, error: 'Leader not found' });
		throw new Error('Leader not found');
	}

	// 1) Leader generate plan (LLM diminta menyebut worker via [CALL:])
	const plan: DelegationPlan = {
		leaderId,
		task,
		workerIds,
		results: {},
		status: 'planning'
	};
	upsertDelegation(plan);
	emit('orchestration:delegation', { chatId, leaderId, task, workerIds });

	const leaderHistory = getHistoryByAgent(chatId, leaderId).map((m) => ({
		role: m.role,
		content: m.content
	}));
	addMessage(chatId, leaderId, { role: 'user', content: task });

	let planText: string;
	try {
		planText = await generateAgentResponse({
			chatId,
			agentId: leaderId,
			model: leader.model,
			systemPrompt: leader.systemPrompt,
			history: leaderHistory
		});
	} catch (e) {
		plan.status = 'error';
		upsertDelegation(plan);
		emit('orchestration:delegation-error', { chatId, leaderId, error: String(e) });
		throw e;
	}

	// 2) Parse [CALL:] dari plan Leader — tentukan worker yang dipanggil
	const called = parseCalls(planText)
		.map((t) => resolveAgentId(t))
		.filter((id): id is string => !!id);
	const targets = called.length > 0 ? called : workerIds; // fallback: workerIds

	plan.status = 'running';
	plan.workerIds = targets;
	upsertDelegation(plan);

	// 3) Jalankan tiap worker SEQUENTIAL (UI stream jelas, hindari race)
	for (const workerId of targets) {
		const worker = agents.find((a) => a.id === workerId);
		if (!worker || workerId === leaderId) continue;

		const workerHistory = getHistoryByAgent(chatId, workerId).map((m) => ({
			role: m.role,
			content: m.content
		}));
		const prompt = `(dari ${leader.name}) ${planText}`;
		addMessage(chatId, workerId, { role: 'user', content: prompt });
		emit('orchestration:worker-started', { chatId, leaderId, workerId, task });

		let workerText: string;
		try {
			workerText = await generateAgentResponse({
				chatId,
				agentId: workerId,
				model: worker.model,
				systemPrompt: worker.systemPrompt,
				history: workerHistory
			});
		} catch (e) {
			workerText = `[error] ${String(e)}`;
		}

		// Item 10: worker bisa meminta klarifikasi/approval ke Leader via [CALL: leader].
		// Deteksi mention Leader -> Leader jawab -> worker generate ulang (1 round).
		const leaderMentioned = parseCalls(workerText).some(
			(t) => resolveAgentId(t) === leaderId
		);
		if (leaderMentioned) {
			const question = workerText.slice(0, 500);
			const fb: LeaderFeedback = {
				workerId,
				question,
				leaderResponse: '',
				ts: Date.now()
			};
			plan.feedback = [...(plan.feedback ?? []), fb];
			upsertDelegation(plan);

			const leaderAnswer = await requestLeaderFeedback({ chatId, leaderId, workerId, question });
			fb.leaderResponse = leaderAnswer;
			upsertDelegation(plan);

			// worker lanjut generate dengan jawaban Leader di history
			const workerHistory2 = getHistoryByAgent(chatId, workerId).map((m) => ({
				role: m.role,
				content: m.content
			}));
			try {
				workerText = await generateAgentResponse({
					chatId,
					agentId: workerId,
					model: worker.model,
					systemPrompt: worker.systemPrompt,
					history: workerHistory2
				});
			} catch (e) {
				workerText = `[error] ${String(e)}`;
			}
		}

		plan.results[workerId] = workerText;
		upsertDelegation(plan);
		emit('orchestration:worker-done', { chatId, leaderId, workerId, text: workerText });
	}

	// 4) Feedback loop: agregat respons worker -> Leader utk sintesis
	const workerSummary = targets
		.map((w) => `${w}: ${(plan.results[w] || '').slice(0, 500)}`)
		.join('\n---\n');

	const feedbackPrompt = `Ringkas hasil pekerjaan worker berikut menjadi jawaban final untuk user:\n${workerSummary}`;
	addMessage(chatId, leaderId, { role: 'user', content: feedbackPrompt });
	emit('orchestration:feedback', { chatId, leaderId, workerSummary });

	const leaderHistory2 = getHistoryByAgent(chatId, leaderId).map((m) => ({
		role: m.role,
		content: m.content
	}));
	let finalText = '';
	try {
		finalText = await generateAgentResponse({
			chatId,
			agentId: leaderId,
			model: leader.model,
			systemPrompt: leader.systemPrompt,
			history: leaderHistory2
		});
	} catch (e) {
		finalText = `[error] feedback: ${String(e)}`;
	}

	plan.status = 'done';
	plan.finalText = finalText;
	upsertDelegation(plan);
	emit('orchestration:delegation-done', { chatId, leaderId, task, finalText });
	return plan;
};
