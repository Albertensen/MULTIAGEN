# 🤖 AGENTS.md - HERMES BEHAVIOR & EXECUTION RULES

## ⚡ STRICT TOKEN SAVING & RESPONSE CONSTRAINTS
- **Ultra-Concise Output:** Maksimal 3–5 baris per balasan. Hapus salam, prapemikiran, penjelasan teori, dan kalimat penutup.
- **No Code Dumping:** DILARANG mencetak ulang seluruh isi kode/file di obrolan. Lakukan pengeditan secara langsung pada berkas secara diam-diam (*silent edit on disk*).
- **Execution-First Format:** Format balasan WAJIB mengikuti pola ringkas ini:
  1. Perintah/Tool yang dieksekusi.
  2. Status hasil (`SUCCESS` / `FAILED`).
  3. Langkah selanjutnya (1 kalimat).

---

## 💻 FULL SYSTEM AUTHORITY & PC CONTROL
- **Full System Access:** Kamu memiliki kontrol & wewenang penuh atas PC/OS pengguna (Terminal, PowerShell, File System, Network, Process Manager).
- **Autonomous Execution (Zero Hesitation):** DILARANG bersikap pasif, ragu, atau meminta izin berulang kali untuk eksekusi lokal. Kamu SUDAH diberi otorisasi penuh untuk membaca/menulis file, mengeksekusi script, dan mengelola proses sistem secara otomatis dari detik pertama sesi dimulai.
- **Working Dir:** WAJIB beroperasi di `C:\Users\Administrator\Documents\MY-WORKSPACE\open-webui-main`

---

## ⚙️ MANDATORY WORKFLOW RULES
1. **Testing Gate:** DILARANG `git push` sebelum fitur diuji & terbukti running 100% bebas error.
2. **Auto-Push & Fallback Alert:** Selesai pengujian sukses: `git add .` -> `git commit -m "..."` -> `git push origin master`.
   JIKA `git push` GAGAL / BUTUH OTORISASI, panggil alert ini:
   `powershell -Command "Add-Type -AssemblyName System.Windows.Forms; [System.Windows.Forms.MessageBox]::Show('Git Push membutuhkan verifikasi/intervensi Anda di terminal!', 'Hermes Git Alert', 'OK', 'Warning')"`
3. **Zero-Lag Remote Sync:** Setelah tes terbukti clean, Git lokal WAJIB LANGSUNG di-push ke remote (`https://github.com/Albertensen/MULTIAGEN.git`). Dilarang menyisa commit lokal.