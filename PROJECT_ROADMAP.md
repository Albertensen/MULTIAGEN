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
- [x] Item 18: Casual Event-to-Chat Mapping — **DONE 2026-08-07: MainChat.svelte (template "Alright! 🚀", "Beres bosku! ✨", "Wait 🤔"), listener 6 event orkestrasi, E2E verified**
- [x] Item 19: Discord-style Message Replies & Typing Indicators — **DONE 2026-08-07: typing "{name} is typing... 💬" real-time dari worker-started/feedback, E2E verified live saat delegasi**
- [x] Main Chat (Threads, Avatars, File/Code attachments rendering) — **DONE 2026-08-07: MainChat.svelte avatar inisial, code block ```lang → hljs highlight, E2E verified**
- [x] Real-time UX (Typing indicators, Buzz/Ping trigger) — **DONE 2026-08-07: typing "{name} is typing... 💬" live + avatar ping shake (delegation-done → .msg-avatar.ping)**
- [x] Agent Observability & Error Logging UI — **DONE 2026-08-07: drawer ⚠️ toggle (raw error orchestration:delegation-error, max 50, auto-open), E2E verified buka-tutup**
- [x] Item 20: Channel Routing & Dynamic Center Panel — **DONE 2026-08-07: activeChannel store, klik #🧠 leader-builder / #⚡ task-stream → swap panel tengah (MainChat ⇄ LeaderBuilderPanel), E2E verified**
- [x] Item 21: Local Bots Roster & Role Badges — **DONE 2026-08-07: panel kanan "🤖 Local Bots", badge 🤖 Local (Ollama) + role badge 👑 LEADER / ⚙️ WORKER, E2E verified**
- [x] Workspace UI Fix (Sidebar Cleanup) — **DONE 2026-08-07: hapus form ADD SERVER inline, tombol + pakai prompt() "Development Team", ikon bulat inisial "DT", header nama workspace dinamis (fix "Server NaN"), seed workspace idempoten aktif pertama**
- [x] Item 22: Create Leader UI & Configuration Panel — **DONE 2026-08-07: form "🛠️ Create / Setup Leader Agent" di # create-leader (Input Nama, Textarea Master Plan, Dropdown LLM Provider, API Key password, Save Configuration), routing hierarkis channel create-leader / 🧠 [leader] / ⚡ stream-[leader], E2E verified**
- [ ] Item 23: Native Hermes Dashboard Integration — **Opsi memilih 'Hermes' sebagai Leader, pengalaman komunikasi interaktif persis native dashboard Hermes di dalam workspace untuk merumuskan tugas sebelum didelegasikan ke worker**
- [ ] Item 35: Workspace Directory UI — **Panel manajer file dengan struktur Global dan Isolated per-Leader (📁 DIRECTORIES: # 📂 global-shared + # 📂 dir-[leader])**
- [x] 4-Tier Channel Hierarchy (Management, Leaders, Streams, Directories) — **DONE 2026-08-07: 4 kategori terpisah 🛠️ MANAGEMENT / 👑 ACTIVE LEADERS / ⚡ TASK STREAMS / 📁 DIRECTORIES, strict separation, E2E verified**
- [x] Dynamic Center Panel & Auto-Routing — **DONE 2026-08-07: routing activeChannel → create-leader/leader:<id>/stream:<id>/dir:*; header tengah & panel dinamis (stream-Hermes, nama leader); auto-route ke leader:<id> setelah save, E2E verified**
- [x] Auto-Generate Leader Channels — **DONE 2026-08-07: save create-leader → 3 channel otomatis (# 🧠 [leader], # ⚡ stream-[leader], # 📂 dir-[leader]) + roster leader, E2E verified (Commander)**

## 🔒 FASE 5: SECURITY, AUTH & TENANT ISOLATION
- [ ] Item 24: Secure API Key Storage & Encryption — **AES-256 di backend database untuk menyimpan API Key Provider LLM Cloud**
- [ ] Item 25: JWT Authentication & User Sessions — **Sistem login user dan perlindungan endpoint API berbasis token**
- [ ] Item 26: Tenant Data Isolation — **Workspace A terisolasi total dari Workspace B pada level database dan file system. Penegasan: mengisolasi akses file/RAG agar Leader A tidak bisa membaca folder direktori milik Leader B, kecuali folder global**
- [ ] Item 27: WebSocket Authentication — **Mengamankan koneksi stream real-time WS agar tidak bisa dibajak**
- [ ] Item 28: Prompt Injection Guardrails — **Validasi dan sanitasi input user sebelum dikirim ke Leader Agent**
- [ ] Item 29: Cost Control & Rate Limiting — **Membatasi jumlah request API berbayar per Workspace untuk mencegah tagihan bengkak**
- [ ] Item 30: File Upload Sanitization — **Pembatasan ekstensi file pada workspace_files untuk mencegah eksekusi script berbahaya**

## 🤝 FASE 6: CROSS-LEADER COLLABORATION & SWARM INTELLIGENCE
- [ ] Item 31: Cross-Leader "War Rooms" — **Kolaborasi antar Leader 🤝 dalam satu ruang terpisah untuk proyek lintas-bidang**
- [ ] Item 32: Inter-Leader Brainstorming — **Sesi brainstorming multi-Leader: ide saling direspon, disaring, lalu didelegasikan ke worker**
- [ ] Item 33: Shared Worker Pools — **Pool worker bersama yang bisa dipanggil leader mana pun (bukan terikat satu leader)**
- [ ] Item 34: Conflict Resolution Guardrails — **Aturan penyelesaian konflik saat 2+ leader mengklaim worker/task yang sama (prioritas, queue, arbiter)**