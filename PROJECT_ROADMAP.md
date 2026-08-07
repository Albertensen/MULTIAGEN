# 🗺️ PROJECT_ROADMAP.md - MULTI-AGENT ROADMAP & GROUND TRUTH

## ⚡ STATIC CONTEXT (CACHE OPTIMIZATION)
- **Purpose:** Single source of truth untuk progres fase, fitur [x] / [ ], & visi arsitektur proyek.
- **Read-on-Demand:** BACA HANYA saat mengecek milestone, transisi fase, atau melakukan auto-checkmark.

---

## 🎯 VISI & STACK PROYEK
- **Visi:** Platform Multi-Agent AI lokal gaya Discord (Leader-Worker Delegation, Multi-Tenant Workspaces, Real-time Chat & File Sharing).
- **Stack Utama:** Python/FastAPI Backend (Port 8080) + SvelteKit Frontend (Port 8088) + Ollama Local LLMs (`hermes3`, `gemma4`, `nomic-embed-text`).

---

## ✅ FASE 0-2: FONDASI, AGENT STATE & RELATIONAL MEMORY (100% LUNAS)
- [x] **Fase 0 (Fondasi):** Git setup, `.env` security, fix CHANGELOG parser & global `PYTHONPATH`, dual server 8080/8088 listening, Ollama models verified.
- [x] **Fase 1 (Agent State):** FastAPI + SvelteKit infra, `agentStore.ts` CRUD & active status, `/utest` harness.
- [x] **Fase 2 (Relational Memory):** `transcriptStore.ts` (`senderId` filtering), `localStorage` persistence survive reload.

---

## ⚙️ FASE 3: ORCHESTRATION, MESSAGE BUS & FILE SHARING
- [x] Item 1: Event Bus/Router Architecture (Svelte & FastAPI)
- [x] Item 2: System Prompt Mention/Call parser (`[CALL: agent]`)
- [x] Item 3: Auto-trigger inter-agent text generation
- [x] Item 4: Inter-Agent File Sharing (Payload attachments)
- [x] Item 5: Backend FastAPI `/api/v1/agents/*` CRUD + WebSocket Broadcaster
- [x] Item 6: Svelte Store WS integration & `/utest` UI live stream
- [x] Item 7: Hierarchical Task Delegation (Leader-Worker autonomous plan) — **DONE 2026-08-07: delegateTask() di orchestration.ts, E2E verified di /utest (a1 Leader → planner+critic → agregasi → feedback final)**
- [x] Item 8: Multi-Tenant & Custom Team Workspaces — **DONE 2026-08-07: workspaceStore.ts (tenant owner/member, Virtual Team roster, isolasi namespace ws:<id>:<chat>), E2E verified di /utest (2 tenant Dev/Content Team, add member tenant-c)**
- [x] Item 9: Anti-Hallucination Guardrails & Critic Agent — **DONE 2026-08-07: structuralGuard() deterministik + criticReview() LLM (PASSED/ISSUES) + generateWithGuardrail(), E2E verified di /utest (bad sample FAIL, critic a3→a1 FAIL, generate+guardrail PASS)**
- [x] Item 10: Worker-to-Leader Feedback Loop — **DONE 2026-08-07: requestLeaderFeedback() + auto-detect [CALL: leader] di delegateTask (1 round tanya-jawab), E2E verified di /utest (a2 minta approval → a1 jawab)**
- [x] Item 11: Orchestration Dry-Run & Backend API Testing — **DONE 2026-08-07: backend/tests/test_orchestration_uat.py 9/9 passed (CRUD, generate LLM, leader plan [CALL:], WS broadcast); fix get_db async-for + set.add/discard await**
- [x] Item 12: Sandboxed Workspace File Storage — **DONE 2026-08-07: workspace_files.py (upload/list/read/delete per ws, traversal guard), isolasi A≠B verified, 13/13 pytest passed**

### 🚀 FASE 3 (OPTIMASI HEMAT TOKEN)
- [x] Item 13: Dynamic Provider Selector for Leader — **DONE 2026-08-07: providerStore.ts (5 provider + API key) + backend /agents/providers (mask ***), E2E verified (a1 → deepseek, sync), 15/15 pytest**
- [x] Item 14: Isolated Sub-task Payload & Context Pruning — **DONE 2026-08-07: pruneContext() + buildIsolatedPayload() di delegateTask (worker terima instruksi steril saja), E2E HEMAT 93% (54.6K→3.6K chars)**
- [x] Item 15: Token Savings & Cost Audit Dashboard Widget — **DONE 2026-08-07: costAuditStore.ts (token/cost saved, ratio) + widget /utest, hook di delegateTask, math verified 12753 tok=$0.001913**

---

## 🎨 FASE 4: DISCORD-LIKE UI IMPLEMENTATION
- [x] Item 16: Discord-style Bot Mention System — **DONE 2026-08-07: parseMentions() + triggerMention() (@bot_id → assign+emit), E2E @planner→a2 verified**
- [x] Item 17: Workspace/Channel Custom Roster — **DONE 2026-08-07: Workspace.roster + setRosterRole() (1 leader rule, demote otomatis), E2E verified a1:leader→a2:leader demote a1**
- [x] Clean up `/utest` harness — **DONE 2026-08-07: komponen dipisah (LeftSidebar.svelte, AgentRosterPanel.svelte), layout 3-kolom flex**
- [x] Left Sidebar (Servers / Workspace Categories) — **DONE 2026-08-07: Discord-style workspace nav (list, active indicator, add form, collapse), E2E verified**
- [x] Right Sidebar (Online Agents Panel & Status) — **DONE 2026-08-07: roster scoped workspace aktif, status Online/Idle/Busy/Thinking real-time, role 👑Leader/⚙Worker, E2E verified**
- [ ] Main Chat (Threads, Avatars, File/Code attachments rendering)
- [ ] Real-time UX (Typing indicators, Buzz/Ping trigger)
- [ ] Agent Observability & Error Logging UI