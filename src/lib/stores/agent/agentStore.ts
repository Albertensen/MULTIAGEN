import { derived, get, readonly, writable } from 'svelte/store';

// =====================================================================
// Multi-Agent store — runtime-first (PROJECT_RULES.md: uji runtime dulu,
// jangan terblokir type-checking rumit).
//
// Otak sistem multi-agen:
//   agentsStore  → semua agen (key = id)
//   activeAgentId → siapa yang sedang bicara/ditugaskan
// =====================================================================

export type Agent = {
	id: string;
	name: string;
	systemPrompt: string; // peran
	model: string; // 'gemma4:e4b' | 'hermes3:latest' | ...
	active: boolean; // sedang bicara/ditugaskan
};

const agentsStore = writable<Record<string, Agent>>({});

// readonly — komponen tidak boleh mutasi langsung, pakai aksi di bawah
export const agents = readonly(agentsStore);

// daftar agen urut insertion (buat render loop)
export const agentList = derived(agentsStore, (m) => Object.values(m));

// ==================== status aktif ====================

export const activeAgentId = writable<string | null>(null);

// derived: objek agent yang sedang aktif (atau null)
export const activeAgent = derived(
	[agentsStore, activeAgentId],
	([$m, $id]) => ($id ? ($m[$id] ?? null) : null)
);

// ==================== aksi ====================

export const addAgent = (a: Omit<Agent, 'active'>) =>
	agentsStore.update((m) => ({ ...m, [a.id]: { ...a, active: false } }));

export const updateAgent = (id: string, patch: Partial<Omit<Agent, 'id'>>) =>
	agentsStore.update((m) => (m[id] ? { ...m, [id]: { ...m[id], ...patch } } : m));

export const removeAgent = (id: string) =>
	agentsStore.update((m) => {
		const next = { ...m };
		delete next[id];
		if (get(activeAgentId) === id) activeAgentId.set(null);
		return next;
	});

// tugaskan agen merespons — dia aktif, sisanya nonaktif
export const assignAgent = (id: string) => {
	activeAgentId.set(id);
	agentsStore.update((m) => {
		const next: Record<string, Agent> = {};
		for (const k of Object.keys(m)) next[k] = { ...m[k], active: k === id };
		return next;
	});
};

export const clearActiveAgent = () => {
	activeAgentId.set(null);
	agentsStore.update((m) => {
		const next: Record<string, Agent> = {};
		for (const k of Object.keys(m)) next[k] = { ...m[k], active: false };
		return next;
	});
};

export const resetAgents = () => {
	agentsStore.set({});
	activeAgentId.set(null);
};
