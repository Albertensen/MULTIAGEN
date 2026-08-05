# PROJECT ROADMAP: Discord-Style Multi-Agent System

## 🎯 Visi Proyek
Membangun platform Multi-Agent AI lokal berkinerja tinggi menggunakan arsitektur Open WebUI (Python/FastAPI Backend + SvelteKit Frontend). Platform ini akan berevolusi menjadi antarmuka komunikasi bergaya Discord, memungkinkan interaksi kompleks, *real-time*, eksekusi file, dan manajemen pengetahuan antar-agen AI.

## 🛠 Aturan Dasar (Sesuai `PROJECT_RULES.md`)
- **Runtime-First:** Prioritaskan fungsionalitas dan reaktivitas di browser.
- **Fleksibilitas Type:** Hindari *strict* TypeScript/static type-checking yang menghambat kecepatan iterasi.
- **Modularitas:** Gunakan *store* Svelte murni tanpa dependensi internal yang rumit.

---

## 🚀 Fase 1: Agent State Management (Selesai)
Fokus pada pembuatan "otak" dan manajemen identitas agen.
- [x] Setup Infrastruktur Backend (FastAPI - Port 8080) & Frontend (SvelteKit - Port 8088).
- [x] Konfigurasi integrasi model lokal (Ollama / gemma4:e4b).
- [x] Implementasi `agentStore.ts` (CRUD, status aktif, ID, prompt sistem, penugasan model).
- [x] Pembuatan `/utest` harness untuk pengujian *runtime* di browser.
- [x] Verifikasi reaktivitas *store* (pergantian agen aktif berjalan sempurna).

## 🧠 Fase 2: Relational Memory System (Aktif)
Fokus pada pembuatan "ingatan" yang memisahkan percakapan berdasarkan identitas pengirim (User vs Agen).
- [x] Buat `transcriptStore.ts` menggunakan Svelte store.
- [x] Definisikan struktur pesan relasional: `id`, `senderId` (user/a1/a2), `role`, `content`, `timestamp`.
- [x] Buat fungsi untuk memfilter riwayat obrolan secara global (*main channel*) dan spesifik per agen.
- [x] Integrasikan dan uji `transcriptStore` berdampingan dengan `agentStore` di `/utest`.

## ⚙️ Fase 3: Orchestration, Message Bus & File Sharing (Mendatang)
Fokus pada pembangunan mesin komunikasi dan pertukaran aset agar agen bisa saling berkolaborasi.
- [ ] Rancang arsitektur Event Bus/Router (di Svelte atau FastAPI).
- [ ] Implementasi sistem *Mention/Call* melalui *System Prompt* (misal: pengenalan token `[CALL: a2]`).
- [ ] Buat *trigger* otomatis: Jika Agen A menyebut Agen B, sistem akan secara otomatis memicu generasi teks dari Agen B.
- [ ] **Inter-Agent File Sharing:**  Tambahkan dukungan payload *attachment* pada pesan sehingga agen dapat mengirim file (contoh: *script* Python, JSON, gambar) ke agen lain untuk dianalisis atau dieksekusi.

## 🎨 Fase 4: Discord-like UI Implementation (Mendatang)
Fokus pada perombakan antarmuka pengguna menjadi tata letak aplikasi obrolan modern.
- [ ] Hapus *harness* `/utest` yang sudah tidak terpakai.
- [ ] **Sidebar Kiri (Kategori):**  Implementasi pemisah untuk berbagai ruang kerja atau grup agen (mirip *Servers* atau *Channels*).
- [ ] **Sidebar Kanan (Online Agents):**  Buat panel yang menampilkan status aktif dari agen di `agentStore` (misal: 🟢 *Planner*, 🔴 *Critic*).
- [ ] **Main Chat (Tengah):**  Rancang alur pesan bersarang (utas/ *threads*) lengkap dengan nama pengirim, *avatar*, dan *rendering* UI untuk *attachment* file/kode.
- [ ] **Real-time UX:**  Tambahkan *Typing Indicators* saat Ollama memproses data, dan tombol "Buzz/Ping" untuk memaksa agen merespons.

## 🔗 Fase 5: Ekosistem & Integrasi Obsidian (Mendatang)
Fokus pada perluasan akses agen ke alat eksternal dan memori jangka panjang permanen.
- [ ] **Obsidian Knowledge Base:** Bangun konektor API (FastAPI) ke *vault* Obsidian lokal.
- [ ] **RAG (Retrieval-Augmented Generation):** Berikan kemampuan bagi agen untuk mencari, membaca, dan menulis catatan langsung ke dalam Obsidian menggunakan format Markdown.
- [ ] **Code Execution Environment:** Sandbox khusus di backend agar skrip Python yang dibagikan antar-agen dapat dieksekusi dengan aman dan hasilnya dikembalikan ke obrolan.

---
*Roadmap agar bisa terus diperbarui. Centang kotak seiring berjalannya progres.*