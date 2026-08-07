// chatStore.ts — persistent history chat per leader (anti-amnesia saat pindah channel)
import { derived, writable } from 'svelte/store';

export type LeaderChatMsg = { id: number; kind: 'user' | 'leader' | 'system'; author: string; text: string; ts: number };

const STORAGE_KEY = 'multiagent.leaderchat.v1';

type State = { byLeader: Record<string, LeaderChatMsg[]>; seq: number };

function loadInitial(): State {
	if (typeof localStorage === 'undefined') return { byLeader: {}, seq: 0 };
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		if (!raw) return { byLeader: {}, seq: 0 };
		const parsed = JSON.parse(raw);
		return parsed && typeof parsed === 'object' ? parsed : { byLeader: {}, seq: 0 };
	} catch {
		return { byLeader: {}, seq: 0 };
	}
}

const store = writable<State>(loadInitial());

store.subscribe((s) => {
	if (typeof localStorage === 'undefined') return;
	try {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
	} catch {
		/* ignore */
	}
});

// history satu leader (reactive utk render)
export const leaderChatHistory = (leaderId: string) =>
	derived(store, (s) => s.byLeader[leaderId] ?? []);

export const pushLeaderMsg = (leaderId: string, msg: Omit<LeaderChatMsg, 'id' | 'ts'>) => {
	store.update((s) => {
		const id = ++s.seq;
		const full: LeaderChatMsg = { ...msg, id, ts: Date.now() };
		return { ...s, byLeader: { ...s.byLeader, [leaderId]: [...(s.byLeader[leaderId] ?? []), full] } };
	});
};

export const resetLeaderChat = (leaderId: string) => {
	store.update((s) => ({ ...s, byLeader: { ...s.byLeader, [leaderId]: [] } }));
};
