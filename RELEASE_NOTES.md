# RELEASE_NOTES.md

## v0.1.0 — 2026-08-05

Deployed Foundation: Multi-Agent UI (Open WebUI 0.11.0) running at localhost:8080.

- Initial commit: multi-agent UI + agent code pushed to GitHub (Albertensen/MULTIAGEN).
- PROJECT_RULES.md + CHANGELOG.md enforced (changelog wajib sebelum push, uji dulu commit belakangan, .env aman).
- Frontend verification exception: build success + runtime functional test, bukan svelte-check/strict TS upstream (8,323 errors = technical debt upstream, bukan runtime).
- Engine LLM: Ollama lokal (gemma4 / hermes3), tanpa API eksternal.
