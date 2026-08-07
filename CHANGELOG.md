# CHANGELOG.md

## [2026-08-07] feat(phase3) — Item 13 Dynamic Provider Selector for Leader: providerStore.ts (5 provider: ollama/openai/anthropic/deepseek/gemini, API key + baseUrl + model, persist localStorage); Agent.provider field; backend GET/PUT /api/v1/agents/providers (Config store `multiagent.providers`, apiKey mask `***` saat read); harness /utest (load config, jadikan Leader, save key); E2E verified (a1 -> deepseek, backend sync) + 15/15 pytest

## [2026-08-07] feat(phase3) — Item 12 Sandboxed Workspace File Storage: backend/open_webui/routers/workspace_files.py (upload/list/read/delete per workspace di storage/workspaces/{ws_id}/, path-traversal guard `_SAFE` regex + realpath prefix check); register di main.py `/api/v1/workspaces`; test 4 baru (upload/list, read/delete, isolasi A≠B, traversal) → 13/13 passed

## [2026-08-07] feat(phase3) — Item 11 Orchestration Dry-Run & Backend API Testing: backend/tests/test_orchestration_uat.py (9 test: health, CRUD agents, generate LLM, generate leader plan [CALL:], WS broadcaster); fix 3 bug backend di agents.py (get_db async-generator `async for`, `await set.add()`, `await set.discard()`); semua 9 passed

## [2026-08-07] feat(phase3) — Item 10 Worker-to-Leader Feedback Loop: requestLeaderFeedback() di orchestration.ts (worker [CALL: leader] -> pertanyaan ke transkrip Leader -> jawaban Leader -> balik ke worker utk lanjut flow); auto-detect mention Leader di output worker dalam delegateTask -> 1 round tanya-jawab -> worker generate ulang; LeaderFeedback[] di DelegationPlan + event worker-feedback/leader-response; harness /utest (tombol minta approval a2->a1 + riwayat feedback delegasi)

## [2026-08-07] feat(phase3) — Item 9 Anti-Hallucination Guardrails & Critic Agent: structuralGuard() deterministik (deteksi [CALL:] menggantung, [error], [trigger], undefined/NaN, placeholder, panjang output) + criticReview() (LLM critic menilai output via PASSED/ISSUES) + generateWithGuardrail() (generate → structural → critic); store critiques + event orchestration:critique; harness /utest (structural good/bad sample, critic review a3→a1, generate+guardrail)

## [2026-08-07] feat(phase3) — Item 8 Multi-Tenant & Custom Team Workspaces: workspaceStore.ts (CRUD workspace, owner/member tenant, Virtual Team roster per workspace via agentIds, isolasi data via namespace workspaceChatId `ws:<wsId>:<chatId>`, persist localStorage); harness /utest (create workspace, demo 2 tenant isolasi, add/remove agent & member); backend groups API (users/groups CRUD) siap utk sync opsional

## [2026-08-07] feat(phase3) — Item 7 Hierarchical Task Delegation: delegateTask() + delegations store di orchestration.ts (Leader analisis prompt -> plan + [CALL: worker] -> eksekusi worker sequential -> agregasi hasil -> feedback loop ke Leader utk sintesis final); harness /utest Leader-Worker (a1 Leader delegate ke planner+critic); fix import ENABLE_DEV_AGENTS_API (env.py) + get_async_session (internal.db) + preload MODELS di /generate

## [2026-08-07] feat(phase3): connect svelte orchestration store & /utest UI to websocket broadcaster: added wsStatus store, WebSocket listener in orchestration.ts, updated /utest UI to show connection status and live agent list, verified end-to-end with backend WebSocket endpoint.

## [2026-08-06] feat(phase3) — Inter-Agent File Sharing & Attachment Payload: tipe Attachment (script/json/image/text) + field attachments di TranscriptMessage; sendMessageToAgent() + getAttachmentsByAgent() di orchestration.ts (kirim file antar agen via bus, event agent:file-shared, auto-process [CALL:]); harness /utest 3 skenario (a1→a2 script, a2→a3 json, a1→a3 image) terverifikasi runtime + persist localStorage
## [2026-08-06] docs — Strict GitHub & Vault Sync Protocol (Zero-Drift Policy): triple-sync wajib (roadmap + vault mainbrain/system-core + git push), zero unpushed commits, verifikasi remote; Fase 3 item 1-3 ditandai [x] lunas
## [2026-08-06] feat — Fase 3 item 3: auto-trigger generasi via Ollama. Backend routers/agents.py (/api/v1/agents/generate + /models, guard ENABLE_DEV_AGENTS_API), generateAgentResponse() di orchestration.ts, proxy /api di vite.config.ts, launcher relaunch_backend.sh/frontend.sh (PYTHONPATH=backend;site-packages fix), end-to-end terverifikasi di /utest
## [2026-08-06] wip — orchestration.ts (event bus + parser [CALL: agent], watchTranscript) + harness /utest; PROJECT_RULES SOP WIP commit; log sesi pause
## [2026-08-06] feat — Verifikasi Event Bus/Parser di Svelte store: emit/on, parseCalls, resolveAgentId, processMessage, watchTranscript sudah berjalan di /utest; arsitektur frontend-only dikonfirmasi Runtime-First
## [2026-08-06] feat — Persistensi localStorage untuk agentStore + transcriptStore (auto-save subscribe, hydrate boot, clearPersisted*), harness /utest idempoten + tombol clear
## [2026-08-06] docs — Dev_Log_Session_01.md (journal sesi) + roadmap tick persistensi
## [2026-08-06] docs — Perluas PROJECT_ROADMAP.md: tambah Fase 0 Fondasi (selesai), tick item selesai, tambah backlog (persistensi, endpoint agents, harness cleanup)
## [2026-08-06] docs — Tambah PROJECT_ROADMAP.md: roadmap 5 fase Discord-style multi-agent (Fase 1 selesai, Fase 2 aktif, Fase 3-5 mendatang)
## [2026-08-06] feat — Multi-agent stores: agentStore.ts (CRUD + active tracking) dan transcriptStore.ts (memori per chat+agent), plus harness uji /utest + docs arsitektur
## [2026-08-06] fix — Menambal parser CHANGELOG di env.py untuk mencegah IndexError saat startup server
## [2026-08-05] fix — Added WEBUI_SECRET_KEY to .env with secure random value for authentication compliance
## [2026-08-05] docs — Updated PROJECT_RULES.md: frontend verification exception (Deployed Foundation), LLM model rules (Ollama local), .env security hardening