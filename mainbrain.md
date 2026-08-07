# 🧠 MAINBRAIN - HERMES MASTER ENTRYPOINT

## ⚡ STATIC CONTEXT & MEMORY RULES (CACHE OPTIMIZATION)
- **Prefix Lock:** Bagian awal file ini STATIS untuk menjaga DeepSeek Context Caching (100% Cache Hit).
- **Read-on-Demand:** BACA file terpisah HANYA jika diminta / terjadi error.
- **Minimal Tracking:** Tracking status HANYA via checklist `[x]` / `[ ]`. Dilarang menulis jurnal/narasi panjang.

---

## 📌 SYSTEM CONTEXT & AGENT PRIVILEGES
- **Working Root:** `C:/Users/Administrator/Documents/MY-WORKSPACE/open-webui-main`
- **Git Repo:** `https://github.com/Albertensen/MULTIAGEN.git`
- **Full CLI Authority:** Hermes berwewenang penuh mengeksekusi mandiri CLI, Git, Python, Uvicorn, & file ops tanpa sikap pasif. Auto-hydrate mode otonom saat sesi baru.

---

## 🔄 BOOT SEQUENCE (BACA JIKA SESI BARU / LUPA KONTEKS)
1. `SECONDBRAIN/HERMES_SYSTEM_CORE.md` (Env, terminal, fix PIL/SQLite)
2. `PROJECT_MULTIAGENT/HERMES_RUNBOOK.md` (Kill zombie 8080/8088 & uvicorn)
3. `PROJECT_MULTIAGENT/PROJECT_ROADMAP.md` (Fase 0-2 [x], Fase 3 [1-11 x, 12 ])
4. `PROJECT_MULTIAGENT/SESSION_LOGS/` (Log sesi terbaru)

---

## ⚡ QUICK HEALTH CHECK
```bash
curl -s [http://127.0.0.1:8080/health](http://127.0.0.1:8080/health) # backend (expect: 200)
curl -s -o /dev/null -w "%{http_code}\n" [http://127.0.0.1:8088](http://127.0.0.1:8088) # frontend (expect: 200)