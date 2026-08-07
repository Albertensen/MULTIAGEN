# 📚 Panduan Pengguna: Multi-Agent AI Orchestration Platform

Selamat datang di **Multi-Agent AI Orchestration Platform**, sebuah ruang kerja virtual revolusioner yang menggabungkan antarmuka intuitif bergaya Discord dengan kekuatan kecerdasan buatan terdistribusi (Swarm Intelligence). 

Aplikasi ini memungkinkan Anda bertindak sebagai "CEO" dari perusahaan virtual, di mana Anda dapat merekrut AI cerdas sebagai Manajer (Leader) dan mengawasi agen pekerja lokal (Worker) yang mengeksekusi tugas secara otomatis.

---

## 🌟 Keunggulan Utama (Why This Platform?)

1. **Efisiensi Biaya Maksimal (Hybrid AI Architecture):**
   Gunakan AI berbayar (OpenAI/Claude/Gemini via API Key) HANYA untuk "Otak Utama/Leader", sementara eksekusi tugas kasar, analisis, dan perbaikan kode dilakukan oleh **🤖 Local Bots (Ollama)** yang 100% gratis.
2. **Antarmuka Familiar (Discord-Like UI):**
   Kelola tim AI Anda dengan sistem Workspace, Channel, dan War Room yang terstruktur rapi.
3. **Privasi & Isolasi File (Enterprise-Grade):**
   Setiap Leader memiliki **Direktori Terisolasi** sendiri. File dokumen marketing tidak akan terbaca oleh Leader Developer, menjaga fokus dan keamanan data (RAG Context Isolation).
4. **Swarm Intelligence (Masa Depan):**
   Bawa beberapa Leader ke dalam satu ruang kolaborasi (War Room) untuk memecahkan masalah kompleks secara lintas-divisi.

---

## 🏗️ Konsep Dasar (Arsitektur Sistem)

Di dalam platform ini, terdapat dua kasta AI:
*   👑 **LEADER (Manajer):** AI dengan model cerdas yang Anda rancang khusus. Tugasnya adalah menerima visi/ide dari Anda, memecahnya menjadi langkah-langkah teknis, dan mendelegasikannya.
*   ⚙️ **WORKER (Kuli/Pekerja):** Kumpulan bot AI Lokal (seperti Hermes, Planner, Critic) yang siaga di panel kanan. Mereka bekerja mengeksekusi perintah Leader tanpa memakan biaya token server Anda.

---

## 🚀 Cara Penggunaan (Step-by-Step Guide)

### 1. Membuat Workspace (Ruang Kerja)
Di panel paling kiri, klik tombol **`+`**. Masukkan nama tim/proyek Anda. Workspace baru akan terbentuk dan terisolasi penuh dari proyek lain.

### 2. Merekrut Leader (`# ➕ create-leader`)
1. Buka channel **`# create-leader`** di bawah kategori **🛠️ MANAGEMENT**.
2. Masukkan Nama, Master Plan (System Prompt), pilih Provider LLM, dan masukkan API Key Anda.
3. Klik Save. Sistem akan otomatis membuatkan 3 channel khusus untuk Leader tersebut.

### 3. Brainstorming (`# 🧠 active-leaders`)
1. Klik nama Leader yang baru dibuat di bawah kategori **👑 ACTIVE LEADERS**.
2. Layar tengah akan menjadi ruang diskusi 1-on-1. Ketikkan ide kasar Anda di sini agar Leader merumuskan rencana eksekusi.

### 4. Memantau Eksekusi Pekerja (`# ⚡ task-streams`)
1. Pindah ke channel stream Leader Anda di bawah kategori **⚡ TASK STREAMS**.
2. Pantau **🤖 Local Bots** di panel kanan saling berkomunikasi dan menyelesaikan tugas yang didelegasikan oleh Leader.

### 5. Mengelola File & Dokumen (`# 📁 directories`)
1. Buka kategori **📁 DIRECTORIES**.
2. Gunakan `# 📂 global-shared` untuk mengunggah file yang boleh dibaca oleh SEMUA Leader (misal: Visi Misi Perusahaan).
3. Gunakan `# 📂 dir-[nama-leader]` untuk mengunggah file spesifik yang hanya boleh dibaca oleh Leader bersangkutan.
