# PROJECT ROADMAP: Discord-Style Multi-Agent System

## �� 🎯 Visi Proyek
Membangun platform Multi-Agent AI lokal berkinerja tinggi menggunakan arsitektur Open WebUI (Python/FastAPI Backend + SvelteKit Frontend). Platform ini akan berevolusi menjadi antarmuka komunikasi bergaya Discord, memungkinkan interaksi kompleks, *real-time*, eksekusi file, dan manajemen pengetahuan antar-agen AI.

- **Hierarchical Task Delegation (Sistem Leader-Worker):** Agen Leader otonom yang menyusun plan dan mendelegasikan tugas ke spesialis.
- **Multi-Tenant & Custom Team Workspaces:** Pengguna dapat membuat akun mandiri dan merakit 'Tim Virtual' mereka sendiri.

## �� 🛠 Aturan Dasar (Sesuai `PROJECT_RULES.md`)
- **Runtime-First:** Prioritaskan fungsionalitas dan reaktivitas di browser.
- **Fleksibilitas Type:** Hindari *strict* TypeScript/static type-checking yang menghambat kecepatan iterasi.
- **Modularitas:** Gunakan *store* Svelte murni tanpa dependensi internal yang rumit.
- **Uji Dulu, Commit Belakangan:** Kode masuk Git hanya setelah verified working (build + runtime). 
- **Keamanan .env:** Secret key tidak pernah di-commit.

--

## �� 🏗 Fase 0: Fondasi & Deployment (Selesai)
Fokus pada infrastruktur yang membuat proyek bisa jalan & aman di Git.
- [x] Setup `PROJECT_RULES.md` + `CHANGELOG.md` + `RELEASE_NOTES.md` (kebijakan commit/push, changelog wajib).
- [x] `.gitignore` standar (venv, cache, `.env`, `.svelte-kit/`).
- [x] Inisialisasi repo Git + push awal ke GitHub (`Albertensen/MULTIAGEN`).
- [x] Pengecualian verifikasi frontend: build + runtime fungsional, bukan svelte-check strict upstream (8,323 error TS = technical debt upstream, disetujui).
- [x] `.env` di-set (env aman, tidak di-commit).
- [x] Fix parser CHANGELOG di `backend/open_webui/env.py` (IndexError saat startup — format custom em-dash).
- [x] Fix `PYTHONPATH` global Hermes yang menimpa venv project (PIL/uvicorn dari venv salah).
- [x] Startup backend (uvicorn, port 8080) & frontend (vite, port 8088) terverifikasi `LISTENING` + health 200.
- [x] Model lokal Ollama terverifikasi: `gemma4:e4b` (9.6GB), `gemma4:12b` (7.6GB), `hermes3:latest` (4.7GB), `nomic-embed-text:latest` (embedding).

## �� 🚀 Fase 1: Agent State Management (Selesai)
Fokus pada pembuatan \"otak\" dan manajemen identitas agen.
- [x] Setup Infrastruktur Backend (FastAPI - Port 8080) & Frontend (SvelteKit - Port 8088).
- [x] Konfigurasi integrasi model lokal (Ollama / gemma4:e4b).
- [x] Implementasi `agentStore.ts` (CRUD, status aktif, ID, prompt sistem, penugasan model).
- [x] Pembuatan `/utest` harness untuk pengujian *runtime* di browser.
- [x] Verifikasi reaktivitas *store* (pergantian agen aktif berjalan sempurna).

## �� 🧠 Fase 2: Relational Memory System (Selesai)
Fokus pada pembuatan \"ingatan\" yang memisahkan percakapan berdasarkan identitas pengirim (User vs Agen).
- [x] Buat `transcriptStore.ts` menggunakan Svelte store.
- [x] Definisikan struktur pesan relasional: `id`, `senderId` (user/a1/a2), `role`, `content`, `timestamp`.
- [x] Buat fungsi untuk memfilter riwayat obrolan secara global (*main channel*) dan spesifik per agen.
- [x] Integrasikan dan uji `transcriptStore` berdampingan dengan `agentStore` di `/utest`.
- [x] **Persistensi lokal:** simpan agen + transkrip ke `localStorage` (auto-save via subscribe, hydrate saat boot, `clearPersisted*` untuk reset). Teruji: tambah pesan → reload → data bertahan.

## �� ⚙��️ Fase 3: Orchestration, Message Bus & File Sharing (Mendatang)
Fokus pada pembangunan mesin komunikasi dan pertukaran aset agar agen bisa saling berkolaborasi.
- [ ] Rancang arsitektur Event Bus/Router (di Svelte atau FastAPI).
- [ ] Implementasi sistem *Mention/Call* melalui *System Prompt* (misal: pengenalan token `[CALL: a2]`).
- [ ] Buat *trigger* otomatis: Jika Agen A menyebut Agen B, sistem akan secara otomatis memicu generasi teks dari Agen B.
- [ ] **Inter-Agent File Sharing:**  Tambahkan dukungan payload *attachment* pada pesan sehingga agen dapat mengirim file (contoh: *script* Python, JSON, gambar) ke agen lain untuk dianalisis atau dieksekusi.
- [ ] Koneksi ke backend: endpoint FastAPI `/api/v1/agents/*` (CRUD agen + broadcast ke semua klien via websocket).
- [ ] **Hierarchical Task Delegation (Leader-Worker):** Pengguna hanya perlu berinteraksi dengan satu agen Leader di dalam obrolan. Agen Leader ini bertugas secara otonom menganalisis permintaan, menyusun execution plan, dan mendelegasikan sub-tugas ke agen spesialis lainnya tanpa campur tangan manual.
- [ ] **Multi-Tenant & Custom Team Workspaces:** Platform ini didesain agar multi-user. Setiap pengguna dapat membuat ruang kerja mereka sendiri dan merakit 'Tim Virtual' yang terdiri dari berbagai agen spesialis sesuai dengan kebutuhan proyek mereka.
- [ ] **Anti-Hallucination Guardrails & Critic Agent:** Implementasi sistem validasi otonom. Output dari agen Leader akan dievaluasi secara otomatis oleh agen khusus (Critic/Reviewer) secara internal sebelum ditampilkan ke UI. Sistem juga akan memanfaatkan parameter deterministik (temperature rendah) dan validasi backend (seperti Pydantic untuk JSON) untuk mencegah dan mengoreksi halusinasi LLM secara real-time.

---

## �� 🎨 Fase 4: Discord-like UI Implementation (Mendatang)
- [ ] Hapus *harness* `/utest` yang sudah tidak terpakai.
- [ ] **Sidebar Kiri (Kategori):**  Implementasi pemisah untuk berbagai ruang kerja atau grup agen (mirip *Servers* atau *Channels*).
- [ ] **Sidebar Kanan (Online Agents):**  Buat panel yang menampilkan status aktif dari agen di `agentStore` (misal: �� 🟢 *Planner*, �� 🔴 *Critic*).
- [ ] **Main Chat (Tengah):**  Rancang alur pesan bersarang (utas/ *threads*) lengkap dengan nama pengirim, *avatar*, dan *rendering* UI untuk *attachment* file/kode.
- [ ] **Real-time UX:**  Tambahkan *Typing Indicators* saat Ollama memproses data, dan tombol \"Buzz/Ping\" untuk memaksa agen merespons.