# 🧠 MAINBRAIN - HERMES MASTER ENTRYPOINT

> **SYSTEM CONTEXT FOR AI AGENTS:**
> Working Root: C:/Users/Administrator/Documents/MY-WORKSPACE/open-webui-main
> Git Repository: @url:`https://github.com/Albertensen/MULTIAGEN.git`

> Jika kamu (AI) baru memulai sesi atau lupa konteks, BACA FILE-FILE BERIKUT SESUAI URUTAN:

1. **SYSTEM & ENVIRONMENT CORE**: Baca `HERMES_SYSTEM_CORE.md` (Aturan terminal, venv, PYTHONPATH, fix PIL/SQLite).
2. **RUNBOOK & TROUBLESHOOTING**: Baca `HERMES_RUNBOOK.md` (Perintah kill zombie process 8080/8088 & uvicorn startup).
3. **PROJECT PROGRESS**: Baca `PROJECT_ROADMAP.md` (Fase 0-2 Lunas [x], Fase 3-4 Mendatang [ ]).
4. **LOG SESI TERAKHIR**: Buka folder `SESSION_LOGS/` dan baca log paling baru.

## ⚡ QUICK HEALTH CHECK COMMAND (JALANKAN DULUAN)

```bash
curl -s [http://127.0.0.1:8080/health](http://127.0.0.1:8080/health)
curl -s -o /dev/null -w "%{http_code}\n" [http://127.0.1:8088](http://127.0.1:8088)

**Harapan:** `health` (backend) = 200, frontend status code = 200.

---

## 🚀 STATUS TERKINI: FASE 3 BERJALAN (item 1-5 lunas)

> **Fase 0-2:** Lunas & teruji 100% runtime. **Fase 3:** item 1 (Event Bus), item 2 ([CALL: agent] parser), item 3 (auto-trigger generasi via Ollama), item 4 (Inter-Agent File Sharing), item 5 (Backend CRUD & WebSocket Broadcaster) selesai & teruji end-to-end di /utest. Item 6-10 roadmap masih [ ] — lanjut item 6 (Svelte Store WebSocket & /utest UI Integration).

> **📌 RULES WAJIB:** 
> 1. **Triple-Sync Zero-Drift:** roadmap + vault + git push serentak tiap item selesai.
> 2. **Auto-Checkmark:** `[ ]`→`[x]` di `PROJECT_ROADMAP.md` + `mainbrain.md` via file operations SEBELUM nyatakan selesai.
> 3. **Auto-Push & Fallback Alert Rule:** Setelah tes runtime berhasil 100%, jalankan `git add .`, `git commit -m "..."`, dan `git push origin master`. JIKA `git push` GAGAL / BUTUH OTORISASI USER, Hermes WAJIB memanggil Notifikasi Pop-up Windows lewat PowerShell:
>    `powershell -Command "Add-Type -AssemblyName System.Windows.Forms; [System.Windows.Forms.MessageBox]::Show('Git Push membutuhkan verifikasi/intervensi Anda di terminal!', 'Hermes Git Alert', 'OK', 'Warning')"`
> 4. **Zero Unpushed Commits:** Verifikasi `git status` up-to-date dgn origin/master sebelum balasan akhir.


## 📁 INDEX FILE PROYEK

| File | Lokasi Vault | Isi |
|------|-------------|-----|
| SYSTEM CORE | `SECONDBRAIN/HERMES_SYSTEM_CORE.md` | Aturan sistem, env fixes, boot protocol |
| ROADMAP | `PROJECT_MULTIAGENT/PROJECT_ROADMAP.md` | Status fase, ground truth |
| RULES | `PROJECT_MULTIAGENT/PROJECT_RULES.md` | Kebijakan commit, verifikasi, keamanan |
| CHANGELOG | `PROJECT_MULTIAGENT/CHANGELOG.md` | Riwayat perubahan |
| RUNBOOK | `PROJECT_MULTIAGENT/HERMES_RUNBOOK.md` | Troubleshooting & boot |
| SESSION LOG | `PROJECT_MULTIAGENT/SESSION_LOGS/` | Log sesi terbaru |

## 🔗 LINK CEPAT (OBSIDIAN WIKILINKS)

- [[HERMES_SYSTEM_CORE]]
- [[PROJECT_MULTIAGENT/PROJECT_ROADMAP|PROJECT_ROADMAP]]
- [[PROJECT_MULTIAGENT/PROJECT_RULES|PROJECT_RULES]]
- [[AGENTS]]
- [[CHANGELOG]]
- [[PROJECT_MULTIAGENT/HERMES_RUNBOOK|HERMES_RUNBOOK]]
- [[PROJECT_MULTIAGENT/SESSION_LOGS/SESSION_2026-08-06|SESSION_2026-08-06]]

## 🔗 Linked System Files
- [[AGENTS]]
- [[CHANGELOG]]
- [[PROJECT_RULES]]


## 🤖 HERMES AGENT PRIVILEGES & PC WORKSPACE CONTROL
- **Full System & CLI Authority:** Hermes adalah Agen Sistem Utama dengan wewenang penuh untuk membaca, membuat, mengedit file lokal, serta mengeksekusi perintah terminal (Git, CLI, Python, Uvicorn, Vite) di workspace `C:\Users\Administrator\Documents\MY-WORKSPACE\open-webui-main`.
- **Autonomous Execution:** Hermes wajib mengeksekusi perintah sistem secara mandiri untuk pengujian runtime, koding, dan git operations tanpa bersikap pasif.
- **New Session Hydration:** Saat new session dimulai, Hermes harus langsung mengaktifkan mode otonom ini secara otomatis.
