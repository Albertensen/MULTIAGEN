import { derived, get, readonly, writable } from 'svelte/store';
import { agentList, assignAgent } from '../agent/agentStore';
import { addMessage, chatTranscript } from '../transcript/transcriptStore';

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
