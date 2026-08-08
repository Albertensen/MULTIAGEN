// fileStore.ts — file artifact per direktori (dir:global / dir:<leaderId>)
import { writable } from 'svelte/store';

export type ArtifactFile = {
	id: string;
	name: string;
	content: string;
	ext: string;
	dir: string; // 'global' | '<agentId>'
	ts: number;
};

const STORAGE_KEY = 'multiagent.files.v1';

type State = { byDir: Record<string, ArtifactFile[]> };

function loadInitial(): State {
	if (typeof localStorage === 'undefined') return { byDir: {} };
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		if (!raw) return { byDir: {} };
		const parsed = JSON.parse(raw);
		return parsed && typeof parsed === 'object' && parsed.byDir ? parsed : { byDir: {} };
	} catch {
		return { byDir: {} };
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

export const filesByDir = (dir: string) => {
	let out: ArtifactFile[] = [];
	store.subscribe((s) => (out = s.byDir[dir] ?? []))();
	return out;
};

export const filesByDirStore = (dir: string) => {
	// reactive: derived-like via subscribe
	const { subscribe } = store;
	return {
		subscribe(run: (v: ArtifactFile[]) => void) {
			return subscribe((s) => run(s.byDir[dir] ?? []));
		}
	};
};

export const saveArtifact = (dir: string, name: string, content: string) => {
	store.update((s) => {
		const ext = name.includes('.') ? name.split('.').pop() ?? 'txt' : 'txt';
		const file: ArtifactFile = {
			id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
			name,
			content,
			ext,
			dir,
			ts: Date.now()
		};
		return { ...s, byDir: { ...s.byDir, [dir]: [...(s.byDir[dir] ?? []), file] } };
	});
};
