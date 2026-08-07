import { derived, get, readonly, writable } from 'svelte/store';

// =====================================================================
// workspaceStore.ts — Multi-Tenant Workspace & Virtual Team (Fase 3, item 8)
// Runtime-first (PROJECT_RULES.md).
//
// Konsep:
//   - Workspace = unit tenancy: punya owner (user id) + daftar agent (tim virtual).
//   - Isolasi data: transkrip/agent dipisah per workspace via namespace chatId
//     (`ws:<workspaceId>:<chatId>`), sehingga tiap tenant punya memori sendiri.
//   - Virtual Team: tiap workspace bisa merakit tim sendiri dari kumpulan agen
//     global (agentStore) — spesialisasi per workspace.
// =====================================================================

export type WorkspaceMember = {
	userId: string; // owner / tenant
	role: 'owner' | 'member';
	joinedAt: number;
};

export type Workspace = {
	id: string;
	name: string;
	description: string;
	ownerId: string; // tenant owner
	// agent roster: id agen (dari agentStore) yang jadi tim workspace ini
	agentIds: string[];
	// Fase 4 item 17: roster peran — 1 Cloud Leader + beberapa Local Worker
	roster: Record<string, 'leader' | 'worker'>; // agentId -> role
	members: WorkspaceMember[];
	createdAt: number;
	updatedAt: number;
};

const STORAGE_KEY = 'multiagent.workspaces.v1';

function loadInitial(): Record<string, Workspace> {
	if (typeof localStorage === 'undefined') return {};
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		if (!raw) return {};
		const parsed = JSON.parse(raw);
		return parsed && typeof parsed === 'object' ? parsed : {};
	} catch (e) {
		console.warn('[workspaceStore] gagal hydrate localStorage:', e);
		return {};
	}
}

const workspacesStore = writable<Record<string, Workspace>>(loadInitial());

workspacesStore.subscribe((state) => {
	if (typeof localStorage === 'undefined') return;
	try {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
	} catch (e) {
		console.warn('[workspaceStore] gagal simpan localStorage:', e);
	}
});

export const workspaces = readonly(workspacesStore);
export const workspaceList = derived(workspacesStore, (m) => Object.values(m));

// ==================== tenant aktif ====================

// owner aktif (tenant) — default 'local' (single-user dev); multi-user nanti
export const activeTenantId = writable<string>('local');
export const activeWorkspaceId = writable<string | null>(null);
// channel routing (UX Overhaul): 'task-stream' | 'leader-builder'
// hierarkis (Swarm Planning): 'create-leader' | `leader:<id>` | `stream:<id>`
export const activeChannel = writable<string>('stream:default');
export const activeLeaderId = writable<string | null>(null);

// workspace yang sedang dibuka (reactive)
export const activeWorkspace = derived(
	[workspacesStore, activeWorkspaceId],
	([$m, $id]) => ($id ? ($m[$id] ?? null) : null)
);

// ==================== helpers ====================

export const uid = () =>
	`ws-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;

// namespace chatId per workspace — ISOLASI data tenant
export const workspaceChatId = (workspaceId: string, chatId: string) =>
	`ws:${workspaceId}:${chatId}`;

// ==================== aksi ====================

export const createWorkspace = (input: {
	name: string;
	description?: string;
	agentIds?: string[]; // virtual team roster
	ownerId?: string;
}): Workspace => {
	const now = Date.now();
	const ws: Workspace = {
		id: uid(),
		name: input.name,
		description: input.description ?? '',
		ownerId: input.ownerId ?? get(activeTenantId),
		agentIds: input.agentIds ?? [],
		// Fase 4 item 17: default roster — agent pertama = leader, sisanya worker
		roster: Object.fromEntries((input.agentIds ?? []).map((id, i) => [id, i === 0 ? 'leader' : 'worker'])),
		members: [
			{
				userId: input.ownerId ?? get(activeTenantId),
				role: 'owner',
				joinedAt: now
			}
		],
		createdAt: now,
		updatedAt: now
	};
	workspacesStore.update((m) => ({ ...m, [ws.id]: ws }));
	return ws;
};

export const updateWorkspace = (id: string, patch: Partial<Omit<Workspace, 'id' | 'createdAt'>>) =>
	workspacesStore.update((m) =>
		m[id]
			? {
					...m,
					[id]: { ...m[id], ...patch, updatedAt: Date.now() }
				}
			: m
	);

export const removeWorkspace = (id: string) =>
	workspacesStore.update((m) => {
		const next = { ...m };
		delete next[id];
		if (get(activeWorkspaceId) === id) activeWorkspaceId.set(null);
		return next;
	});

// ==================== Virtual Team (roster per workspace) ====================

// tambah agen ke tim workspace (dari agentStore global)
export const addAgentToWorkspace = (workspaceId: string, agentId: string) =>
	workspacesStore.update((m) => {
		if (!m[workspaceId]) return m;
		const ws = m[workspaceId];
		if (ws.agentIds.includes(agentId)) return m;
		const hasLeader = ws.agentIds.some((id) => ws.roster?.[id] === 'leader');
		return {
			...m,
			[workspaceId]: {
				...ws,
				agentIds: [...ws.agentIds, agentId],
				// agent baru default worker; leader hanya jika belum ada
				roster: { ...(ws.roster ?? {}), [agentId]: hasLeader ? 'worker' : 'leader' },
				updatedAt: Date.now()
			}
		};
	});

// Fase 4 item 17: tetapkan peran roster (1 leader + N worker) per workspace
export const setRosterRole = (workspaceId: string, agentId: string, role: 'leader' | 'worker') =>
	workspacesStore.update((m) => {
		if (!m[workspaceId]) return m;
		const ws = m[workspaceId];
		// hanya 1 leader: menetapkan leader baru → demote leader lama ke worker
		let roster = { ...(ws.roster ?? {}), [agentId]: role };
		if (role === 'leader') {
			for (const id of Object.keys(roster)) {
				if (id !== agentId && roster[id] === 'leader') roster[id] = 'worker';
			}
		}
		return { ...m, [workspaceId]: { ...ws, roster, updatedAt: Date.now() } };
	});

export const removeAgentFromWorkspace = (workspaceId: string, agentId: string) =>
	workspacesStore.update((m) => {
		if (!m[workspaceId]) return m;
		const ws = m[workspaceId];
		return {
			...m,
			[workspaceId]: {
				...ws,
				agentIds: ws.agentIds.filter((a) => a !== agentId),
				updatedAt: Date.now()
			}
		};
	});

// tambah member (tenant lain) — multi-user support
export const addMemberToWorkspace = (
	workspaceId: string,
	userId: string,
	role: WorkspaceMember['role'] = 'member'
) =>
	workspacesStore.update((m) => {
		if (!m[workspaceId]) return m;
		const ws = m[workspaceId];
		if (ws.members.some((mm) => mm.userId === userId)) return m;
		return {
			...m,
			[workspaceId]: {
				...ws,
				members: [...ws.members, { userId, role, joinedAt: Date.now() }],
				updatedAt: Date.now()
			}
		};
	});

export const removeMemberFromWorkspace = (workspaceId: string, userId: string) =>
	workspacesStore.update((m) => {
		if (!m[workspaceId]) return m;
		const ws = m[workspaceId];
		return {
			...m,
			[workspaceId]: {
				...ws,
				members: ws.members.filter((mm) => mm.userId !== userId),
				updatedAt: Date.now()
			}
		};
	});

export const resetWorkspaces = () => {
	workspacesStore.set({});
	activeWorkspaceId.set(null);
};

export const clearPersistedWorkspaces = () => {
	try {
		localStorage.removeItem(STORAGE_KEY);
	} catch (e) {
		console.warn('[workspaceStore] gagal hapus localStorage:', e);
	}
	resetWorkspaces();
};
