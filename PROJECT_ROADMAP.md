## 🚀 Fase 3: Orchestration, Message Bus & File Sharing (Mendatang)

- [x] Rancang arsitektur Event Bus/Router (di Svelte atau FastAPI).
- [x] Implementasi sistem Mention/Call melalui System Prompt (misal: pengenalan token [CALL: a2]).
- [x] Buat trigger otomatis: Jika Agen A menyebut Agen B, sistem akan secara otomatis memicu generasi teks dari Agen B.
- [x] Inter-Agent File Sharing: Tambahkan dukungan payload attachment pada pesan sehingga agen dapat mengirim file ke agen lain.
- [x] Koneksi ke backend: endpoint FastAPI /api/v1/agents/* (CRUD agen + broadcast ke semua klien via websocket).
- [ ] Hierarchical Task Delegation (Leader-Worker): Pengguna hanya perlu berinteraksi dengan satu agen Leader di dalam obrolan. Agen Leader ini bertugas secara otonom menganalisis permintaan, menyusun execution plan, dan mendelegasikan sub-tugas ke agen spesialis lainnya tanpa campur tangan manual.
- [ ] Multi-Tenant & Custom Team Workspaces: Platform ini didesain agar multi-user. Setiap pengguna dapat membuat ruang kerja mereka sendiri dan merakit 'Tim Virtual' yang terdiri dari berbagai agen spesialis sesuai dengan kebutuhan proyek mereka.
- [ ] Anti-Hallucination Guardrails & Critic Agent: Implementasi sistem validasi otonom. Output dari agen Leader akan dievaluasi secara otomatis oleh agen khusus (Critic/Reviewer) secara internal sebelum ditampilkan ke UI. Sistem juga akan memanfaatkan parameter deterministik (temperature rendah) dan validasi backend (seperti Pydantic untuk JSON) untuk mencegah dan mengoreksi halusinasi LLM secara real-time.
- [ ] Worker-to-Leader Feedback Loop: Sub-agen memiliki kemampuan otonom untuk menggunakan sistem Mention/Call guna meminta klarifikasi, melaporkan hambatan, atau memohon persetujuan (approval) kembali kepada agen Leader sebelum melanjutkan eksekusi tugas.
- [ ] Orchestration Dry-Run & API Testing: Melakukan pengujian menyeluruh (UAT internal) terhadap seluruh alur orkestrasi agen murni di level backend. Langkah ini wajib dilakukan sebelum masuk ke Fase 4 untuk memastikan logika otonom berjalan stabil tanpa potensi bug frontend.
- [ ] Sandboxed Workspace File Storage: Menyediakan ruang penyimpanan file terisolasi (workspace drive/shared volume) khusus tempat file disimpan dan dikelola penuh oleh para agen, tanpa memerlukan akses kontrol penuh ke OS/PC pengguna (siap untuk rilis publik/SaaS).