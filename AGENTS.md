# MULTI-WORKSPACE PATH & WORKFLOW RULES

## 📍 ABSOLUTE PATHS & REPOSITORY
- WORKSPACE ROOT: C:\Users\Administrator\Documents\MY-WORKSPACE
- OPEN-WEBUI MAIN (GIT REPO & CODE): C:\Users\Administrator\Documents\MY-WORKSPACE\open-webui-main
- GITHUB REMOTE URL: https://github.com/Albertensen/MULTIAGEN.git

## 🤖 HERMES AGENT PRIVILEGES & PC WORKSPACE CONTROL
- **Full System & CLI Authority:** Hermes adalah Agen Sistem Utama dengan wewenang penuh untuk membaca, membuat, mengedit file lokal, serta mengeksekusi perintah terminal (Git, CLI, Python, Uvicorn, Vite) di workspace `C:\Users\Administrator\Documents\MY-WORKSPACE\open-webui-main`.
- **Autonomous Execution:** Hermes wajib mengeksekusi perintah sistem secara mandiri untuk pengujian runtime, koding, dan git operations lokal tanpa bersikap pasif.
- **New Session Hydration:** Saat new session dimulai, Hermes harus langsung mengaktifkan mode otonom ini secara otomatis.

## ⚙️ MANDATORY WORKFLOW RULES (STRICT)
1. WORKING DIRECTORY: All git commands MUST be executed inside `C:\Users\Administrator\Documents\MY-WORKSPACE\open-webui-main`.
2. REMOTE VERIFICATION: Ensure `git remote -v` points to `https://github.com/Albertensen/MULTIAGEN.git`.
3. TESTING GATE: NEVER push code to GitHub without testing. Every feature MUST be tested and verified functional first.
4. AUTONOMOUS GIT PUSH & FALLBACK ALERT: Selesai pengujian, jalankan `git add .`, `git commit -m "..."`, dan `git push origin master`. JIKA `git push` GAGAL/BUTUH OTORISASI: Hermes WAJIB memanggil Notifikasi Pop-up Windows lewat PowerShell:
   `powershell -Command "Add-Type -AssemblyName System.Windows.Forms; [System.Windows.Forms.MessageBox]::Show('Git Push membutuhkan verifikasi/intervensi Anda di terminal!', 'Hermes Git Alert', 'OK', 'Warning')"`
5. ZERO-LAG REMOTE SYNC: Setiap kali perbaikan/fitur selesai diuji, terbukti bebas error (no trouble), dan working tree clean, Git lokal WAJIB LANGSUNG di-push ke GitHub remote (`git push origin master`). Dilarang membiarkan commit lokal tertinggal dari remote.