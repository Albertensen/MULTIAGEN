# CHANGELOG.md

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
