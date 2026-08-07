import { derived, get, readonly, writable } from 'svelte/store';
import type { ProviderId } from '../agent/agentStore';

// =====================================================================
// providerStore.ts — Dynamic Provider Selector for Leader (Fase 3, item 13)
// Runtime-first (PROJECT_RULES.md).
//
// Skema config provider LLM:
//   - ollama   : baseUrl (lokal)
//   - openai   : apiKey + baseUrl + model
//   - anthropic: apiKey + baseUrl + model
//   - deepseek : apiKey + baseUrl + model
//   - gemini   : apiKey + baseUrl + model
//
// API Key disimpan di localStorage (dev-only). Leader Agent memilih
// provider dinamis via `provider` field di Agent + store ini.
// =====================================================================

export type ProviderConfig = {
	id: ProviderId;
	label: string;
	apiKey: string; // empty utk ollama lokal
	baseUrl: string;
	model: string; // default model provider ini
	enabled: boolean;
};

export const PROVIDER_PRESETS: Record<ProviderId, Omit<ProviderConfig, 'apiKey'>> = {
	ollama: {
		id: 'ollama',
		label: 'Ollama (Lokal)',
		baseUrl: 'http://127.0.0.1:11434/v1',
		model: 'gemma4:e4b',
		enabled: true
	},
	openai: {
		id: 'openai',
		label: 'OpenAI (Cloud)',
		baseUrl: 'https://api.openai.com/v1',
		model: 'gpt-4o-mini',
		enabled: false
	},
	anthropic: {
		id: 'anthropic',
		label: 'Anthropic (Cloud)',
		baseUrl: 'https://api.anthropic.com/v1',
		model: 'claude-3-5-haiku-latest',
		enabled: false
	},
	deepseek: {
		id: 'deepseek',
		label: 'DeepSeek (Cloud)',
		baseUrl: 'https://api.deepseek.com/v1',
		model: 'deepseek-chat',
		enabled: false
	},
	gemini: {
		id: 'gemini',
		label: 'Gemini (Cloud)',
		baseUrl: 'https://generativelanguage.googleapis.com/v1beta',
		model: 'gemini-2.0-flash',
		enabled: false
	}
};

const STORAGE_KEY = 'multiagent.providers.v1';

function loadInitial(): Record<ProviderId, ProviderConfig> {
	const base: Record<ProviderId, ProviderConfig> = {} as Record<ProviderId, ProviderConfig>;
	for (const id of Object.keys(PROVIDER_PRESETS) as ProviderId[]) {
		base[id] = { ...PROVIDER_PRESETS[id], apiKey: '' };
	}
	if (typeof localStorage === 'undefined') return base;
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		if (!raw) return base;
		const parsed = JSON.parse(raw);
		for (const id of Object.keys(base) as ProviderId[]) {
			if (parsed?.[id]) base[id] = { ...base[id], ...parsed[id] };
		}
		return base;
	} catch (e) {
		console.warn('[providerStore] gagal hydrate localStorage:', e);
		return base;
	}
}

const providersStore = writable<Record<ProviderId, ProviderConfig>>(loadInitial());

providersStore.subscribe((state) => {
	if (typeof localStorage === 'undefined') return;
	try {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
	} catch (e) {
		console.warn('[providerStore] gagal simpan localStorage:', e);
	}
});

export const providers = readonly(providersStore);
export const providerList = derived(providersStore, (m) => Object.values(m));

// ==================== aksi ====================

export const setProviderConfig = (
	id: ProviderId,
	patch: Partial<Omit<ProviderConfig, 'id'>>
) =>
	providersStore.update((m) =>
		m[id] ? { ...m, [id]: { ...m[id], ...patch } } : m
	);

export const setApiKey = (id: ProviderId, apiKey: string) =>
	setProviderConfig(id, { apiKey });

export const toggleProvider = (id: ProviderId, enabled: boolean) =>
	setProviderConfig(id, { enabled });

// model yang dipakai agent tertentu — cek provider agent, fallback ke model agent
export const resolveProviderFor = (providerId: ProviderId, model?: string) => {
	const cfg = get(providersStore);
	const c = cfg[providerId];
	if (!c) return { provider: null, model: model ?? '' };
	return { provider: c, model: model || c.model };
};
