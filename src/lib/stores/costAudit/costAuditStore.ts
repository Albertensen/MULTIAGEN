import { get, readonly, writable } from 'svelte/store';

// =====================================================================
// costAuditStore.ts — Token Savings & Cost Audit (Fase 3, item 15)
// ---------------------------------------------------------------------
// Mencatat akumulasi pemakaian token & estimasi biaya ($) yang dihemat
// dari Worker Lokal (Ollama, gratis) vs Cloud API (OpenAI/Anthropic/...).
// =====================================================================

// estimasi token lokal (~4 char/token) — hindari circular import
const estTokens = (chars: number): number => Math.ceil(chars / 4);

// Harga referensi per 1M token input (USD, per-2026 pasar):
// - Ollama lokal: 0 (gratis, tanpa biaya API)
// - Cloud: rata-rata harga input model hemat (gpt-4o-mini class)
export const CLOUD_PRICE_PER_1M = 0.15; // USD
export const LOCAL_PRICE_PER_1M = 0; // gratis

export type AuditEntry = {
	ts: number;
	agentId: string;
	role: 'leader' | 'worker';
	provider: string; // 'ollama' | 'openai' | ...
	beforeTokens: number;
	afterTokens: number;
	savedTokens: number; // before - after
	savedCostUsd: number; // savedTokens * cloudPrice (seandainya ke cloud)
	pruneRatioPct: number; // savedTokens / beforeTokens * 100
};

type CostAuditState = {
	entries: AuditEntry[];
	totalTokensSaved: number;
	totalCostSavedUsd: number;
	lastPruneRatioPct: number;
};

const { set, update, subscribe } = writable<CostAuditState>({
	entries: [],
	totalTokensSaved: 0,
	totalCostSavedUsd: 0,
	lastPruneRatioPct: 0
});

// ---- actions ----

// Catat satu payload pruning (dari buildIsolatedPayload stats)
export const recordPruning = (opts: {
	agentId: string;
	role?: 'leader' | 'worker';
	provider?: string;
	beforeChars: number;
	afterChars: number;
}): AuditEntry => {
	const { agentId, role = 'worker', provider = 'ollama', beforeChars, afterChars } = opts;

	const beforeTokens = estTokens(beforeChars);
	const afterTokens = estTokens(afterChars);
	const savedTokens = Math.max(0, beforeTokens - afterTokens);
	const savedCostUsd = (savedTokens / 1_000_000) * CLOUD_PRICE_PER_1M;
	const pruneRatioPct = beforeTokens > 0 ? Math.round((savedTokens / beforeTokens) * 100) : 0;

	const entry: AuditEntry = {
		ts: Date.now(),
		agentId,
		role,
		provider,
		beforeTokens,
		afterTokens,
		savedTokens,
		savedCostUsd: Number(savedCostUsd.toFixed(6)),
		pruneRatioPct
	};

	update((s) => ({
		entries: [...s.entries, entry],
		totalTokensSaved: s.totalTokensSaved + savedTokens,
		totalCostSavedUsd: Number((s.totalCostSavedUsd + savedCostUsd).toFixed(6)),
		lastPruneRatioPct: pruneRatioPct
	}));

	return entry;
};

// Reset audit (utk demo/test)
export const resetAudit = (): void => {
	set({ entries: [], totalTokensSaved: 0, totalCostSavedUsd: 0, lastPruneRatioPct: 0 });
};

// ---- store public ----
export const costAudit = { subscribe };

// re-export getter helpers
export const totalTokensSaved = () => get(costAudit).totalTokensSaved;
export const totalCostSavedUsd = () => get(costAudit).totalCostSavedUsd;
export const lastPruneRatioPct = () => get(costAudit).lastPruneRatioPct;
