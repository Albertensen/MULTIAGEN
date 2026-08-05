# Architecture — Multi-Agent Svelte Store State Management

Konvensi Open WebUI existing (Wajib dipakai, bukan invent baru):
- Store flat `writable()` di `src/lib/stores/index.ts`, atau module store hidden + `readonly` export (pola `chatList.ts`).
- Sinkronisasi via `socket` (realtime) + REST `$lib/apis`.
- Concurrency guard pakai generasi token (pola `requestGeneration` di `chatList.ts`).
- Queue per-chat sudah ada: `chatRequestQueues: Record<string, {id,prompt,files}[]>`.

## Prinsip (selaras PROJECT_RULES.md)
- **Uji dulu, commit belakangan.** Store baru diverifikasi build+run di :8088 sebelum masuk git.
- **Ruas kecil, satu tanggung jawab.** Tambah modul store agents terpisah, jangan benam ke `index.ts`.

## Layer Design

### 1. agentStore — status tiap AI Agent (per-agent key)
`src/lib/stores/agents/agentStore.ts`

```ts
import { writable, readonly, get } from 'svelte/store';
import type { AgentMeta } from '$lib/types';

export type AgentRunState =
  | { phase: 'idle' }
  | { phase: 'queued' }
  | { phase: 'thinking'; startedAt: number }
  | { phase: 'streaming'; chunk: string }
  | { phase: 'done'; at: number }
  | { phase: 'error'; message: string };

export type AgentRuntime = AgentMeta & {
  run: AgentRunState;
  model: string;
};

const agentsStore = writable<Record<string, AgentRuntime>>({});

export const agents = readonly(agentsStore);

export const agentsInChat = (chatId: string) => ...;   // derived: pilih agent milik chat
export const upsertAgent = (a: AgentRuntime) => agentsStore.update(m => ({ ...m, [a.id]: a }));
```

### 2. transcriptStore — riwayat percakapan, ringkas per agent
Bukan duplikat `chats` global: ini view spesifik multi-agent di satu chat.

```ts
export type AgentTurn = {
  turnId: string; agentId: string; seq: number;
  role: 'user'|'assistant'; content: string; ts: number;
};
// key: chatId
const transcripts = writable<Record<string, AgentTurn[]>>({});
export const turnsFor = (chatId: string) => derived(transcripts, m => m[chatId] ?? []);
```

### 3. orchestrationBus — queue + dispatcher (rumah concurrency)
```
Inti masalah: banyak agent jalan bersamaan. Solusi = queue per-chat + generation guard + sinkronisasi socket.
```
```ts
export type DispatchRequest = {
  chatId: string;
  agents: string[];           // kandidat agent utk task ini
  strat: 'parallel' | 'round-robin' | 'single';  // orchestrasi yang dipilih user
  prompt: string;
  files?: any[];
};
const dispatchPending = writable<Record<string, DispatchRequest[]>>({}); // per chat
export const dispatch = (req) => { enqueue, lalu panggil socket emit 'chat:dispatch' };
```

### 4. streamRegistry — jalur SSE/WS per agent
```
Satu WebSocket (socket.io existing). Kunci per agentId → buka n token stream request.
- subscribeAgentStream(agentId) → konsumsi 'chat:completion' event, update agentStore.phase='streaming' → append transcriptStore.
- abortAgentStream(agentId) → emit 'chat:abort', token guard invalidate.
```

## Concurrency Guarantee (kunci desain)
Sama `chatList`:
```ts
let requestGeneration = 0;
function stream(agentId: string) {
  const gen = ++requestGeneration;            // satu versi per agent stream
  // ... async lanjut tanpa await di tengah yang jangan tanggung
  if (gen !== requestGeneration) return;       // stale abort — abaikan
  transcripts[agentId].push(delta);
}
```
Pasalnya: message keluar urut; request baru abort yang lama; UI tak reorder.

## Dependency Graph (arah satu-arah, tidak circular)
```
src/lib/stores/agent/agentStore.ts     → AgentRuntime per id
src/lib/stores/agent/transcriptStore  → turn per chat+agent
src/lib/stores/agent/orchestration   → dispatch / queue / strategy
src/lib/stores/agent/streamRegistry  → ws wiring ke socket
  ↑ ketigabelas independen, tidak import satu sama lain; hanya `$lib/apis` + `$lib/types`.
```

## Integrasi dengan Existing
- `index.ts` terpakai: `chatId`, `chatRequestStream`, `socket`, `activeUserIds`.
- UI render: Chat.svelte subscribe `transcriptsFor(chatId)` → tab per agent.
- Model default `hermes3:latest` dari `models` store.

## Catatan Simpul (ponytail)
- store baru `src/lib/stores/agent/` — bisa dipindah ke `$lib/stores/agents/exports.ts` kelak kalau baris >300.
- tanam `strat` (parallel/round-robin) hanya bayangkan sekarang; implement yg `single` dulu mask.
  skipped: parallel false-diagram; add ketika agent padat (10+).