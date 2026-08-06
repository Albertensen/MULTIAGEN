import { derived, get, readonly, writable } from 'svelte/store';

// =====================================================================
// transcriptStore.ts — "ingatan" multi-agen (layer memori)
// Runtime-first (PROJECT_RULES.md).
//
// Struktur: per chat → per agentId → daftar pesan urut waktu.
// Pesan punya role (user/assistant/system) + timestamp.
//
// Konteks multi-agen: agentId membedakan asal pesan —
//   Planner (internal), Critic (internal), Hermes (final ke user).
// =====================================================================

export type MessageRole = 'user' | 'assistant' | 'system';

// ===== Attachment (Fase 3, item 4: Inter-Agent File Sharing) =====
export type Attachment = {
	id: string;
	name: string;
	type: 'script' | 'json' | 'image' | 'text';
	content: string; // inline payload (script source / JSON / base64 image / teks)
	mime?: string;
};

export type TranscriptMessage = {
	id: string;
	role: MessageRole;
	content: string;
	ts: number; // Date.now()
	attachments?: Attachment[]; // opsional — payload file antar agen
};

// key: chatId -> agentId -> messages[]
type TranscriptShape = Record<string, Record<string, TranscriptMessage[]>>;

const STORAGE_KEY = 'multiagent.transcripts.v1';

// hydrate dari localStorage saat boot
function loadInitial(): TranscriptShape {
	if (typeof localStorage === 'undefined') return {};
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		if (!raw) return {};
		const parsed = JSON.parse(raw);
		return parsed && typeof parsed === 'object' ? parsed : {};
	} catch (e) {
		console.warn('[transcriptStore] gagal hydrate localStorage:', e);
		return {};
	}
}

const transcripts = writable<TranscriptShape>(loadInitial());

// auto-save setiap perubahan
transcripts.subscribe((state) => {
	if (typeof localStorage === 'undefined') return;
	try {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
	} catch (e) {
		console.warn('[transcriptStore] gagal simpan localStorage:', e);
	}
});

// readonly — komponen tidak mutasi langsung
export const transcriptsStore = readonly(transcripts);

// ==================== helpers ====================

const ensure = (m: TranscriptShape, chatId: string, agentId: string): TranscriptShape => {
	if (!m[chatId]) m = { ...m, [chatId]: {} };
	if (!m[chatId][agentId]) m = { ...m, [chatId]: { ...m[chatId], [agentId]: [] } };
	return m;
};

// ==================== aksi ====================

// Tambah pesan ke transkrip (chat, agent)
export const addMessage = (
	chatId: string,
	agentId: string,
	msg: Omit<TranscriptMessage, 'id' | 'ts'>
) => {
	const id = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
	const full: TranscriptMessage = { ...msg, id, ts: Date.now() };
	transcripts.update((m) => {
		m = ensure(m, chatId, agentId);
		return { ...m, [chatId]: { ...m[chatId], [agentId]: [...m[chatId][agentId], full] } };
	});
};

// Riwayat per agen (sinkron — untuk dipakai di logika, bukan UI)
export const getHistoryByAgent = (chatId: string, agentId: string): TranscriptMessage[] =>
	get(transcripts)[chatId]?.[agentId] ?? [];

// Reset transkrip (satu chat, atau semua)
export const clearTranscript = (chatId?: string, agentId?: string) => {
	transcripts.update((m) => {
		if (!chatId) return {};
		if (!agentId) {
			const next = { ...m };
			delete next[chatId];
			return next;
		}
		if (!m[chatId]) return m;
		const nextChat = { ...m[chatId] };
		delete nextChat[agentId];
		return { ...m, [chatId]: nextChat };
	});
};

// hapus juga data persisted
export const clearPersistedTranscripts = () => {
	try {
		localStorage.removeItem(STORAGE_KEY);
	} catch (e) {
		console.warn('[transcriptStore] gagal hapus localStorage:', e);
	}
	transcripts.set({});
};

// ==================== derived (UI) ====================

// Semua pesan satu chat (diurutkan antar agent by ts) — utk render kronologis
export const chatTranscript = (chatId: string) =>
	derived(transcripts, (m) => {
		const byAgent = m[chatId] ?? {};
		const all: (TranscriptMessage & { agentId: string })[] = [];
		for (const [agentId, msgs] of Object.entries(byAgent)) {
			for (const msg of msgs) all.push({ ...msg, agentId });
		}
		return all.sort((a, b) => a.ts - b.ts);
	});

// Pesan satu agen (reactive) — utk tab per agent
export const agentTranscript = (chatId: string, agentId: string) =>
	derived(transcripts, (m) => m[chatId]?.[agentId] ?? []);
