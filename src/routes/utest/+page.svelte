<script lang="ts">
	// Throwaway harness: uji agentStore + transcriptStore runtime di browser.
	// Hapus file ini setelah integrasi selesai.
	import {
		agents,
		agentList,
		activeAgentId,
		activeAgent,
		addAgent,
		updateAgent,
		assignAgent,
		clearActiveAgent,
		resetAgents
	} from '$lib/stores/agent/agentStore';

	import {
		transcriptsStore,
		chatTranscript,
		agentTranscript,
		addMessage,
		getHistoryByAgent,
		clearTranscript,
		clearPersistedTranscripts
	} from '$lib/stores/transcript/transcriptStore';
	import type { Attachment } from '$lib/stores/transcript/transcriptStore';

	import {
		busHistory,
		calls,
		parseCalls,
		resolveAgentId,
		processMessage,
		watchTranscript,
		generateAgentResponse,
		sendMessageToAgent,
		getAttachmentsByAgent,
		delegateTask,
		delegations,
		requestLeaderFeedback,
		buildIsolatedPayload,
		estimateTokens,
		structuralGuard,
		criticReview,
		generateWithGuardrail,
		critiques,
		on,
		clearBus
	} from '$lib/stores/orchestration/orchestration';

	import {
		workspaces,
		workspaceList,
		activeWorkspace,
		activeWorkspaceId,
		activeTenantId,
		createWorkspace,
		updateWorkspace,
		removeWorkspace,
		addAgentToWorkspace,
		removeAgentFromWorkspace,
		addMemberToWorkspace,
		removeMemberFromWorkspace,
		workspaceChatId,
		clearPersistedWorkspaces
	} from '$lib/stores/workspace/workspaceStore';

	import {
		providers,
		providerList,
		setApiKey,
		setProviderConfig,
		toggleProvider,
		resolveProviderFor
	} from '$lib/stores/provider/providerStore';
	import type { ProviderId } from '$lib/stores/agent/agentStore';
	import { costAudit, resetAudit } from '$lib/stores/costAudit/costAuditStore';

	import { get } from 'svelte/store';

	let log: string[] = [];

	// seed IDEMPOTENT: hanya tambah agen kalau belum ada (amankah persistensi/reload)
	function seed() {
		// pakai $agents secara reaktif — jika sudah ada a1,a2,a3 -> skip
		addAgent({ id: 'a1', name: 'Hermes', systemPrompt: 'assistant utama', model: 'gemma4:e4b' });
		addAgent({ id: 'a2', name: 'Planner', systemPrompt: 'perencana', model: 'hermes3:latest' });
		addAgent({ id: 'a3', name: 'Critic', systemPrompt: 'penyunting', model: 'gemma4:e4b' });
	}

	// reactive: seed 1x saat agent belum lengkap, lalu berhenti
	$: if ($agentList.length === 0) seed();

	$: summary = {
		total: $agentList.length,
		names: $agentList.map((a) => a.name).join(', '),
		active: $activeAgent ? $activeAgent.name : null,
		activeId: $activeAgentId
	};

	// transcript: demo state awal — HANYA bila chat ini belum punya pesan (idempoten utk reload)
	const CHAT = 'chat-demo-1';
	$: if ($agentList.length === 3 && getHistoryByAgent(CHAT, 'a2').length === 0) {
		addMessage(CHAT, 'a2', { role: 'user', content: 'Rencanakan fitur X' });
		addMessage(CHAT, 'a2', { role: 'assistant', content: 'Rencana: 1) API 2) UI' });
		addMessage(CHAT, 'a3', { role: 'assistant', content: 'Kritik: API perlu auth' });
		addMessage(CHAT, 'a1', { role: 'assistant', content: 'Final: API + auth + UI' });
	}

	// derived store func -> subscribe SEKALI di top-level (bukan dalam $: block,
// karena reactive block bikin derived baru tiap run & leak memory)
	let chronoMsgs = [];
	let plannerMsgsList = [];
	let criticMsgsList = [];
	chatTranscript(CHAT).subscribe((v) => (chronoMsgs = v));
	agentTranscript(CHAT, 'a2').subscribe((v) => (plannerMsgsList = v));
	agentTranscript(CHAT, 'a3').subscribe((v) => (criticMsgsList = v));

	// ===== Orchestration test =====
	// start monitor pada chat demo — deteksi [CALL: nama] di pesan baru
	watchTranscript(CHAT);

	// reactive: render jumlah calls & bus
	let callCount = 0;
	calls.subscribe((c) => (callCount = c.length));
	let busCount = 0;
	busHistory.subscribe((b) => (busCount = b.length));

	// ===== Workspace (Fase 3, item 8) =====
	let wsLog: string[] = [];
	let wsName = '';
	let wsDesc = '';
	let wsTeam: string[] = [];
	let wsMemberAdd = '';

	const createWs = () => {
		if (!wsName.trim()) return;
		const ws = createWorkspace({ name: wsName.trim(), description: wsDesc, agentIds: wsTeam });
		wsLog = [...wsLog, `[ws] created ${ws.name} (${ws.id}) team=[${ws.agentIds.join(',')}]`];
		wsName = '';
		wsDesc = '';
		wsTeam = [];
		activeWorkspaceId.set(ws.id);
	};

	const demoWorkspaces = () => {
		// buat 2 workspace tenant berbeda utk bukti isolasi
		const ws1 = createWorkspace({
			name: 'Dev Team',
			description: 'Workspace tenant A',
			agentIds: ['a1', 'a2'],
			ownerId: 'tenant-a'
		});
		const ws2 = createWorkspace({
			name: 'Content Team',
			description: 'Workspace tenant B',
			agentIds: ['a1', 'a3'],
			ownerId: 'tenant-b'
		});
		wsLog = [
			...wsLog,
			`[ws] demo: ${ws1.name} (${ws1.ownerId}) + ${ws2.name} (${ws2.ownerId})`,
			`[ws] isolasi: chat1 ws1 -> ${workspaceChatId(ws1.id, 'chat-1')}`,
			`[ws] isolasi: chat1 ws2 -> ${workspaceChatId(ws2.id, 'chat-1')}`
		];
		activeWorkspaceId.set(ws1.id);
	};

	// ===== Guardrails & Critic (Fase 3, item 9) =====
	let guardLog: string[] = [];
	let guardSample = 'Analisis singkat: sistem perlu auth sebelum API dipanggil.';
	let guardBadSample = 'Hasil: [CALL: planner] undefined TODO lorem ipsum';

	const runStructuralGuard = () => {
		const issues = structuralGuard(guardSample);
		guardLog = [...guardLog, `[guard] structural "${guardSample.slice(0, 40)}..." -> ${issues.length ? 'FAIL: ' + issues.join('; ') : 'PASS'}`];
	};

	const runStructuralGuardBad = () => {
		const issues = structuralGuard(guardBadSample);
		guardLog = [...guardLog, `[guard] structural "${guardBadSample.slice(0, 40)}..." -> ${issues.length ? 'FAIL: ' + issues.join('; ') : 'PASS'}`];
	};

	const runCriticReview = async () => {
		guardLog = [...guardLog, '[guard] critic review dimulai (a3 menilai output a1)...'];
		const c = await criticReview({
			chatId: CHAT,
			agentId: 'a1',
			text: 'Saya menganalisis kebutuhan sistem. Rekomendasi: gunakan FastAPI + auth JWT. Arsitektur modular dengan 3 layer.',
			task: 'analisis arsitektur'
		});
		guardLog = [...guardLog, `[guard] critic a1 -> ${c.criticId}: ${c.passed ? 'PASS' : 'FAIL'} issues=[${c.issues.join(', ')}]`];
	};

	const runGenerateWithGuardrail = async () => {
		guardLog = [...guardLog, '[guard] generateWithGuardrail (a1 generate, a3 critic)...'];
		const r = await generateWithGuardrail({
			chatId: CHAT,
			agentId: 'a1',
			model: 'gemma4:e4b',
			systemPrompt: 'assistant utama',
			history: [{ role: 'user', content: 'Jelaskan singkat 2 langkah deploy FastAPI.' }]
		});
		guardLog = [...guardLog, `[guard] generate a1 -> ${r.critique ? (r.critique.passed ? 'PASS' : 'FAIL: ' + r.critique.issues.join('; ')) : 'no-critique'} | ${r.text.slice(0, 80)}...`];
	};

	// ===== Feedback loop Worker->Leader (Fase 3, item 10) =====
	let fbStatus = 'idle';
	let fbLog: string[] = [];
	let fbQuestion = '';

	const runFeedbackTest = async () => {
		const q =
			fbQuestion ||
			'[CALL: Hermes] Butuh approval: apakah boleh lanjut pakai pendekatan API-only untuk rencana ini?';
		fbStatus = 'running';
		fbLog = [...fbLog, `[fb] worker a2 -> leader a1: ${q.slice(0, 80)}...`];
		try {
			const answer = await requestLeaderFeedback({
				chatId: CHAT,
				leaderId: 'a1',
				workerId: 'a2',
				question: q
			});
			fbLog = [...fbLog, `[fb] leader a1 jawab: ${answer.slice(0, 120)}...`];
			fbStatus = 'done';
		} catch (e) {
			fbLog = [...fbLog, `[fb] ERROR: ${String(e)}`];
			fbStatus = 'error';
		}
	};

	// ===== Dynamic Provider Selector (Fase 3, item 13) =====
	let provLog: string[] = [];
	let provStatus = 'idle';
	let provKeyInput: Record<string, string> = {};

	const loadProviders = async () => {
		try {
			const r = await fetch('/api/v1/agents/providers');
			const data = await r.json();
			// providers readonly — set per-provider via setProviderConfig
			const loaded = data.providers || {};
			for (const pid of Object.keys(loaded)) {
				setProviderConfig(pid as ProviderId, {
					apiKey: loaded[pid].apiKey === '***' ? '' : loaded[pid].apiKey,
					model: loaded[pid].model,
					enabled: loaded[pid].enabled
				});
			}
			provLog = [...provLog, `[prov] loaded ${Object.keys(loaded).length} provider`];
			provStatus = 'loaded';
		} catch (e) {
			provLog = [...provLog, `[prov] ERROR load: ${String(e)}`];
			provStatus = 'error';
		}
	};

	const setLeaderProvider = async (pid: string, model: string) => {
		// set provider + model utk Leader (a1)
		const cfg = get(providers)[pid as ProviderId];
		if (!cfg) return;
		updateAgent('a1', { provider: pid as ProviderId, model: model || cfg.model });
		provLog = [...provLog, `[prov] Leader a1 -> ${pid} (${model || cfg.model})`];
		// sync ke backend
		try {
			await fetch('/api/v1/agents/providers', {
				method: 'PUT',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ providers: { [pid]: { model: model || cfg.model, enabled: true } } })
			});
			provLog = [...provLog, `[prov] backend synced ${pid}`];
		} catch (e) {
			provLog = [...provLog, `[prov] backend sync ERROR: ${String(e)}`];
		}
	};

	const saveApiKey = async (pid: string) => {
		const key = (provKeyInput[pid] || '').trim();
		if (!key) return;
		setApiKey(pid as ProviderId, key);
		try {
			await fetch('/api/v1/agents/providers', {
				method: 'PUT',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ providers: { [pid]: { apiKey: key, enabled: true } } })
			});
			provLog = [...provLog, `[prov] apiKey ${pid} saved (${key.length} chars)`];
		} catch (e) {
			provLog = [...provLog, `[prov] apiKey ERROR: ${String(e)}`];
		}
		provKeyInput[pid] = '';
	};

	// ===== Isolated Sub-task Payload & Context Pruning (Fase 3, item 14) =====
	let pruneLog: string[] = [];
	let pruneStatus = 'idle';

	const runPruneTest = () => {
		// simulasi history panjang worker (banyak pesan + 1 dengan keyword file)
		const longHistory: { role: string; content: string }[] = [];
		for (let i = 0; i < 40; i++) {
			longHistory.push({
				role: i % 2 === 0 ? 'user' : 'assistant',
				content: `pesan lama #${i}: pembahasan umum yang panjang. `.repeat(30)
			});
		}
		// sisipkan pesan relevan (file/kode) jauh di awal
		longHistory[2] = {
			role: 'assistant',
			content: 'file analyze.py berisi kode python untuk parsing log. '.repeat(20)
		};

		const before = longHistory.reduce((a, m) => a + m.content.length, 0);
		const beforeTok = estimateTokens(longHistory.map((m) => m.content).join(''));

		const payload = buildIsolatedPayload({
			task: 'Analisis log dan laporkan error.',
			leaderName: 'Hermes',
			planText: 'Langkah 1: baca log. Langkah 2: laporkan.',
			history: longHistory
		});

		const { stats } = payload;
		pruneLog = [
			...pruneLog,
			`[prune] before: ${before} chars (~${beforeTok} tok) -> after: ${stats.afterChars} chars (${stats.afterMsgs} msgs dari ${stats.beforeMsgs})`,
			`[prune] HEMAT ${stats.savedPct}% input token (target 70-90%)`,
			`[prune] payload worker: ${payload.messages.length} pesan, pesan#0 = instruksi sub-tugas (${payload.messages[0].content.slice(0, 40)}...)`
		];
		pruneStatus = stats.savedPct >= 70 ? 'PASS (≥70%)' : `FAIL (${stats.savedPct}%)`;
	};

	// ===== Generate agent response via Ollama (Fase 3, item 3) =====
	let genStatus = 'idle'; // idle | running | done | error
	let genResult = '';
	let genLog: string[] = [];

	const generateFor = async (agentId: string, prompt: string) => {
		const chatId = CHAT;
		// catat prompt user ke transkrip agent tsb (biar ada konteks)
		addMessage(chatId, agentId, { role: 'user', content: prompt });
		genStatus = 'running';
		genLog = [...genLog, `[${agentId}] generate: ${prompt}`];
		const agent = $agents[agentId];
		const history = getHistoryByAgent(chatId, agentId).map((m) => ({
			role: m.role === 'system' ? 'system' : m.role,
			content: m.content
		}));
		try {
			const text = await generateAgentResponse({
				chatId,
				agentId,
				model: agent.model,
				systemPrompt: agent.systemPrompt,
				history
			});
			genResult = text;
			genStatus = 'done';
			genLog = [...genLog, `[${agentId}] result: ${text.slice(0, 120)}...`];
		} catch (e) {
			genStatus = 'error';
			genLog = [...genLog, `[${agentId}] ERROR: ${String(e)}`];
		}
	};

	// auto-trigger: saat pesan dari agent mengandung [CALL: x], generate juga
	// (simulasi Leader-Worker: Hermes mendelegasikan ke Planner/Critic)
	const handleGenerated = (p: Record<string, unknown>) => {
		const agentId = p.agentId as string;
		const chatId = p.chatId as string;
		// bila hasilnya memanggil agen lain, generate agen itu juga (1 level)
		const targetIds = parseCalls(genResult);
		if (targetIds.length > 0) {
			for (const t of targetIds) {
				const tid = resolveAgentId(t);
				if (tid && tid !== agentId) {
					const prompt = `(auto dari ${agentId}) ${genResult}`;
					genLog = [...genLog, `[auto] ${agentId} -> ${tid}: ${prompt.slice(0, 80)}...`];
					addMessage(chatId, tid, { role: 'user', content: prompt });
					const tagent = $agents[tid];
					const thistory = getHistoryByAgent(chatId, tid).map((m) => ({
						role: m.role,
						content: m.content
					}));
					generateAgentResponse({
						chatId,
						agentId: tid,
						model: tagent.model,
						systemPrompt: tagent.systemPrompt,
						history: thistory
					}).then((t) => {
						genLog = [...genLog, `[${tid}] result: ${t.slice(0, 120)}...`];
					});
				}
			}
		}
	};
	on('agent:generated', handleGenerated);

	// ===== File Sharing test (Fase 3, item 4) =====
	let fileLog: string[] = [];
	let fileAttachments = 0;

	// a1 (Hermes) kirim script Python ke a2 (Planner)
	const shareScript = () => {
		const att: Attachment = {
			id: `att-${Date.now()}`,
			name: 'analyze.py',
			type: 'script',
			content: 'def analyze(data):\n    return { "count": len(data), "sum": sum(data) }\n'
		};
		sendMessageToAgent({
			chatId: CHAT,
			fromAgentId: 'a1',
			toAgentId: 'a2',
			content: 'Planner, ini script analisis — [CALL: planner] review',
			attachments: [att]
		});
		fileLog = [...fileLog, `[share] a1 -> a2 script: ${att.name} (${att.content.length} chars)`];
		fileAttachments = getAttachmentsByAgent(CHAT, 'a2').length;
	};

	// a2 (Planner) kirim JSON ke a3 (Critic)
	const shareJson = () => {
		const att: Attachment = {
			id: `att-${Date.now()}`,
			name: 'plan.json',
			type: 'json',
			content: '{"steps": ["API", "UI", "Auth"], "owner": "planner"}'
		};
		sendMessageToAgent({
			chatId: CHAT,
			fromAgentId: 'a2',
			toAgentId: 'a3',
			content: 'Critic, ini rencana JSON — [CALL: critic] cek',
			attachments: [att]
		});
		fileLog = [...fileLog, `[share] a2 -> a3 json: ${att.name}`];
		fileAttachments = getAttachmentsByAgent(CHAT, 'a3').length;
	};

	// a1 kirim image payload (base64 kecil) ke a3
	const shareImage = () => {
		const att: Attachment = {
			id: `att-${Date.now()}`,
			name: 'diagram.png',
			type: 'image',
			content: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=='
		};
		sendMessageToAgent({
			chatId: CHAT,
			fromAgentId: 'a1',
			toAgentId: 'a3',
			content: 'Critic, ini diagram arsitektur — [CALL: critic] evaluasi',
			attachments: [att]
		});
		fileLog = [...fileLog, `[share] a1 -> a3 image: ${att.name} (base64)`];
		fileAttachments = getAttachmentsByAgent(CHAT, 'a3').length;
	};
</script>

<h1>Agent Store Harness</h1>

<p>
	<strong>agents:</strong> {$agents ? Object.entries($agents).length : 0} agen
</p>
<ul>
	{#each $agentList as a (a.id)}
		<li>{a.id} — {a.name} ({a.model}) [active: {a.active ? '✓' : '✗'}]</li>
	{/each}
</ul>

<p><strong>activeAgentId:</strong> {$activeAgentId ?? 'null'}</p>
<p><strong>activeAgent:</strong> {$activeAgent ? $activeAgent.name : 'null'}</p>

<button on:click={() => assignAgent('a2')}>assign a2</button>
<button on:click={() => clearActiveAgent()}>clear</button>
<button on:click={() => resetAgents()}>reset</button>
<button on:click={() => updateAgent('a3', { systemPrompt: 'penyunting baru' })}>update a3 prompt</button>

<hr />
<h2>Transcript</h2>
<p><strong>Kronologis (semua agen, urut ts):</strong></p>
<ul>
	{#each chronoMsgs as m (m.id)}
		<li>
			[{m.agentId}]{m.role} <em>{new Date(m.ts).toLocaleTimeString()}</em> — {m.content}
		</li>
	{/each}
</ul>

<p><strong>Planner (a2) history — {plannerMsgsList.length} msg:</strong></p>
<ul>
	{#each plannerMsgsList as m (m.id)}
		<li>[{m.role}] {m.content}</li>
	{/each}
</ul>

<p><strong>Critic (a3) history — {criticMsgsList.length} msg:</strong></p>
<ul>
	{#each criticMsgsList as m (m.id)}
		<li>[{m.role}] {m.content}</li>
	{/each}
</ul>

<p><strong>getHistoryByAgent (sync, sinkron) — {getHistoryByAgent(CHAT, 'a2').length} msg:</strong>
	{getHistoryByAgent(CHAT, 'a2')
		.map((m) => `${m.role}:${m.content}`)
		.join(' | ')}
</p>

<button on:click={() => addMessage(CHAT, 'a2', { role: 'assistant', content: 'Rencana v2' })}>
	add planner msg
</button>
<button on:click={() => clearTranscript(CHAT)}>clear chat transcript</button>
<button on:click={() => clearPersistedTranscripts()}>clear ALL persisted transcripts</button>
<button on:click={() => { localStorage.clear(); location.reload(); }}>nuke localStorage + reload</button>

<hr />
<h2>Orchestration</h2>
<p><strong>parseCalls('[CALL: Planner]') =</strong> {JSON.stringify(parseCalls('[CALL: Planner]'))}</p>
<p><strong>parseCalls('hai [CALL: critic] dan [CALL: Hermes]') =</strong>
	{JSON.stringify(parseCalls('hai [CALL: critic] dan [CALL: Hermes]'))}</p>
<p><strong>resolveAgentId('planner') =</strong> {resolveAgentId('planner') ?? 'null'}</p>
<p><strong>calls (log panggilan) — {callCount} event:</strong></p>
<ul>
	{#each $calls as c (c.ts + c.targetAgentId + c.chatId)}
		<li>
			{new Date(c.ts).toLocaleTimeString()} — {c.fromAgentId ?? 'user'} → {c.targetAgentId}
			(chat: {c.chatId})
		</li>
	{/each}
</ul>
<p><strong>bus events — {busCount}:</strong> {$busHistory.map((e) => e.type).join(', ') || 'none'}</p>

<button on:click={() => addMessage(CHAT, 'a1', { role: 'assistant', content: 'Analisis: butuh [CALL: critic] dan [CALL: Planner]' })}>
	send CALL from Hermes
</button>
<button on:click={() => addMessage(CHAT, 'user', { role: 'user', content: 'tolong [CALL: planner] review ini' })}>
	send CALL from user
</button>
<button on:click={() => clearBus()}>clear bus/calls</button>

<hr />
<h2>Generate via Ollama (Fase 3)</h2>
<p><strong>status:</strong> {genStatus}</p>
{#if genResult}
	<p><strong>hasil:</strong> <em>{genResult}</em></p>
{/if}
<ul>
	{#each genLog as l, i (i)}
		<li>{l}</li>
	{/each}
</ul>
<p>Trigger agent & auto-delegasi:</p>
<button on:click={() => generateFor('a1', 'Rencanakan langkah & [CALL: planner] dan [CALL: critic] untuk artikel kecil')}>
	Hermes -> generate & CALL planner+critic
</button>
<button on:click={() => generateFor('a2', 'Buat rencana 3 langkah [CALL: critic] review')}>
	Planner -> generate & CALL critic
</button>
<button on:click={() => generateFor('a3', 'Review kualitas [CALL: planner]')}>
	Critic -> generate & CALL planner
</button>

<hr />
<h2>Leader-Worker Delegation (Fase 3 item 7)</h2>
<p><strong>status delegasi:</strong></p>
<ul>
	{#each $delegations as d (d.leaderId + d.task + d.status)}
		<li>
			Leader <strong>{d.leaderId}</strong> → task: <em>{d.task.slice(0, 60)}</em>
			[status: {d.status}] workers: {d.workerIds.join(', ')}
			{#if Object.keys(d.results).length > 0}
				<ul>
					{#each Object.entries(d.results) as [wid, txt]}
						<li>{wid}: {txt.slice(0, 80)}</li>
					{/each}
				</ul>
			{/if}
			{#if d.finalText}<p><strong>final:</strong> {d.finalText.slice(0, 200)}</p>{/if}
		</li>
	{/each}
</ul>
<button
	on:click={() =>
		delegateTask({ chatId: CHAT, leaderId: 'a1', task: 'Rencanakan & delegasikan analisis ke worker [CALL: planner] [CALL: critic]', workerIds: ['a2', 'a3'] })}
>
	Leader a1 (Hermes) → delegate ke planner+critic
</button>

<hr />
<h2>Token Savings & Cost Audit Widget (Fase 3 item 15)</h2>
<p><strong>Total Tokens Saved:</strong> {$costAudit.totalTokensSaved.toLocaleString()} tok</p>
<p><strong>Estimated Cost Saved ($):</strong> ${$costAudit.totalCostSavedUsd.toFixed(6)} (vs cloud @$0.15/1M tok)</p>
<p><strong>Pruning Efficiency Ratio:</strong> {$costAudit.lastPruneRatioPct}%</p>
<p><strong>Entries:</strong> {$costAudit.entries.length} delegasi tercatat</p>
<button on:click={resetAudit}>reset audit</button>
<ul>
	{#each $costAudit.entries as e, i (i)}
		<li>{e.agentId} ({e.provider}): saved {e.savedTokens.toLocaleString()} tok / ${e.savedCostUsd.toFixed(6)} ({e.pruneRatioPct}%)</li>
	{/each}
</ul>

<hr />
<h2>Isolated Payload & Context Pruning (Fase 3 item 14)</h2>
<p><strong>status:</strong> {pruneStatus}</p>
<button on:click={runPruneTest}>uji pruning (40 pesan → payload)</button>
<ul>
	{#each pruneLog as l, i (i)}
		<li>{l}</li>
	{/each}
</ul>

<hr />
<h2>Dynamic Provider Selector for Leader (Fase 3 item 13)</h2>
<p><strong>status:</strong> {provStatus} — Leader a1 provider: {$agents['a1']?.provider ?? 'ollama'}</p>
<button on:click={loadProviders}>load provider config</button>
<ul>
	{#each $providerList as p (p.id)}
		<li>
			<strong>{p.label}</strong> [{p.id}] — {p.model} — {p.enabled ? 'ON' : 'OFF'}
			{#if p.id !== 'ollama'}
				<input value={provKeyInput[p.id] ?? ''} placeholder="API key" type="password"
					on:input={(e) => (provKeyInput[p.id] = e.currentTarget.value)} />
				<button on:click={() => saveApiKey(p.id)}>save key</button>
			{/if}
			<button on:click={() => setLeaderProvider(p.id, p.model)}>jadikan Leader</button>
			<button on:click={() => toggleProvider(p.id, !p.enabled)}>toggle</button>
		</li>
	{/each}
</ul>
<ul>
	{#each provLog as l, i (i)}
		<li>{l}</li>
	{/each}
</ul>

<hr />
<h2>Worker-to-Leader Feedback Loop (Fase 3 item 10)</h2>
<p><strong>status:</strong> {fbStatus}</p>
<input bind:value={fbQuestion} placeholder="pertanyaan worker (opsional, default approval)" />
<button on:click={runFeedbackTest}>worker a2 -> [CALL: Hermes] minta approval</button>
<ul>
	{#each fbLog as l, i (i)}
		<li>{l}</li>
	{/each}
</ul>
{#if $delegations.length > 0}
	<p><strong>feedback riwayat delegasi:</strong></p>
	<ul>
		{#each $delegations as d (d.leaderId + d.task + d.status)}
			{#if d.feedback && d.feedback.length > 0}
				<li>
					Leader {d.leaderId} — {d.feedback.length} feedback:
					<ul>
						{#each d.feedback as f (f.ts)}
							<li>{f.workerId}: {f.question.slice(0, 60)} → {f.leaderResponse.slice(0, 60)}</li>
						{/each}
					</ul>
				</li>
			{/if}
		{/each}
	</ul>
{/if}

<hr />
<h2>Multi-Tenant Workspaces & Virtual Team (Fase 3 item 8)</h2>
<p><strong>tenant aktif:</strong> {$activeTenantId} — <strong>workspace aktif:</strong> {$activeWorkspaceId ?? 'null'}
	({$activeWorkspace ? $activeWorkspace.name : 'none'})</p>
<p><strong>daftar workspace ({$workspaceList.length}):</strong></p>
<ul>
	{#each $workspaceList as ws (ws.id)}
		<li>
			<strong>{ws.name}</strong> (owner: {ws.ownerId}) — {ws.description}
			<br />
			<small>team: {ws.agentIds.join(', ') || 'empty'} | members: {ws.members.map((mm) => `${mm.userId}(${mm.role})`).join(', ')}</small>
			<br />
			<button on:click={() => activeWorkspaceId.set(ws.id)}>buka</button>
			<button on:click={() => addAgentToWorkspace(ws.id, 'a2')}>+ a2</button>
			<button on:click={() => removeAgentFromWorkspace(ws.id, 'a2')}>- a2</button>
			<button on:click={() => addMemberToWorkspace(ws.id, 'tenant-c')}>+ member c</button>
			<button on:click={() => removeWorkspace(ws.id)}>hapus</button>
		</li>
	{/each}
</ul>
<p><strong>buat workspace baru:</strong></p>
<input bind:value={wsName} placeholder="nama workspace" />
<input bind:value={wsDesc} placeholder="deskripsi" />
<label><input type="checkbox" bind:group={wsTeam} value="a1" /> a1</label>
<label><input type="checkbox" bind:group={wsTeam} value="a2" /> a2</label>
<label><input type="checkbox" bind:group={wsTeam} value="a3" /> a3</label>
<button on:click={createWs}>create</button>
<button on:click={demoWorkspaces}>demo 2 tenant (isolasi)</button>
<button on:click={() => clearPersistedWorkspaces()}>clear workspaces</button>
<ul>
	{#each wsLog as l, i (i)}
		<li>{l}</li>
	{/each}
</ul>

<hr />
<h2>Guardrails & Critic Agent (Fase 3 item 9)</h2>
<p><strong>kritik tersimpan ({$critiques.length}):</strong></p>
<ul>
	{#each $critiques.slice(-5).reverse() as c (c.ts + c.agentId)}
		<li>
			<strong>{c.agentId}</strong> → critic {c.criticId}: {c.passed ? '✅ PASS' : '⛔ FAIL'}
			{#if c.issues.length > 0}<small> issues: {c.issues.join('; ')}</small>{/if}
		</li>
	{/each}
</ul>
<label for="guard-sample">sample output:</label>
<input id="guard-sample" bind:value={guardSample} size="50" />
<button on:click={runStructuralGuard}>structural guard (sample)</button>
<button on:click={runStructuralGuardBad}>structural guard (bad sample)</button>
<button on:click={runCriticReview}>critic review (a3 → a1)</button>
<button on:click={runGenerateWithGuardrail}>generate + guardrail (a1, critic a3)</button>
<ul>
	{#each guardLog as l, i (i)}
		<li>{l}</li>
	{/each}
</ul>

<hr />
<h2>Inter-Agent File Sharing (Fase 3 item 4)</h2>
<p><strong>total attachment diterima:</strong> {fileAttachments}</p>
<ul>
	{#each fileLog as l, i (i)}
		<li>{l}</li>
	{/each}
</ul>
<button on:click={shareScript}>a1 -> a2: kirim script Python (analyze.py)</button>
<button on:click={shareJson}>a2 -> a3: kirim JSON (plan.json)</button>
<button on:click={shareImage}>a1 -> a3: kirim image (diagram.png)</button>

<pre>{JSON.stringify(summary)}</pre>