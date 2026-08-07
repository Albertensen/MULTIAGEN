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
- [ ] Item 7: Hierarchical Task Delegation (Leader-Worker autonomous plan) — **IN-PROGRESS**
- [ ] Item 8: Multi-Tenant & Custom Team Workspaces
- [ ] Item 9: Anti-Hallucination Guardrails & Critic Agent
- [ ] Item 10: Worker-to-Leader Feedback Loop
- [ ] Item 11: Orchestration Dry-Run & Backend API Testing
- [ ] Item 12: Sandboxed Workspace File Storage

---

## 🎨 FASE 4: DISCORD-LIKE UI IMPLEMENTATION
- [ ] Clean up `/utest` harness
- [ ] Left Sidebar (Servers / Workspace Categories)
- [ ] Right Sidebar (Online Agents Panel & Status)
- [ ] Main Chat (Threads, Avatars, File/Code attachments rendering)
- [ ] Real-time UX (Typing indicators, Buzz/Ping trigger)
- [ ] Agent Observability & Error Logging UI