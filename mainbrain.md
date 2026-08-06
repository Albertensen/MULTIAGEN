# 🧠 MAINBRAIN - HERMES MASTER ENTRYPOINT

> Jika kamu (AI) baru memulai sesi atau lupa konteks, BACA FILE-FILE BERIKUT SESUAI URUTAN:

1. **SYSTEM & ENVIRONMENT CORE**: Baca `HERMES_SYSTEM_CORE.md` (Aturan terminal, venv, PYTHONPATH, fix PIL/SQLite).
2. **RUNBOOK & TROUBLESHOOTING**: Baca `HERMES_RUNBOOK.md` (Perintah kill zombie process 8080/8088 & uvicorn startup).
3. **PROJECT PROGRESS**: Baca `PROJECT_ROADMAP.md` (Fase 0-2 Lunas [x], Fase 3-4 Mendatang [ ]).
4. **LOG SESI TERAKHIR**: Buka folder `SESSION_LOGS/` dan baca log paling baru.

## ⚡ QUICK HEALTH CHECK COMMAND (JALANKAN DULUAN)

```bash
curl -s http://127.0.0.1:8080/health
curl -s -o /dev/null -w "%{http_code}\n" http://127.0.0.1:8088
```

**Harapan:** `health` (backend) = 200, frontend status code = 200.

---

## 🚀 STATUS TERKINI: FASE 3 BERJALAN (item 1-5 lunas)

> **Fase 0-2:** Lunas & teruji 100% runtime. **Fase 3:** item 1 (Event Bus), item 2 ([CALL: agent] parser), item 3 (auto-trigger generasi via Ollama), item 4 (Inter-Agent File Sharing) selesai & teruji end-to-end di /utest. Item 5 (backend CRUD+ws) juga selesai. Item 6: Sandboxed Workspace File Storage: Menyediakan ruang penyimpanan file terisolasi (workspace drive/shared volume) khusus tempat file disimpan dan dikelola penuh oleh para agen, tanpa memerlukan akses kontrol penuh ke OS/PC pengguna (siap untuk rilis publik/SaaS). Item 7-10 roadmap masih [ ].

> **📌 RULES WAJIB:** (1) Triple-Sync Zero-Drift: roadmap + vault + git push serentak tiap item selesai; (2) Auto-Checkmark: `[ ]`→`[x]` di PROJECT_ROADMAP.md + mainbrain.md via file operations SEBELUM nyatakan selesai; (3) Zero unpushed commits; (4) verifikasi `git status` up-to-date dgn origin/master sebelum balasan akhir.

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