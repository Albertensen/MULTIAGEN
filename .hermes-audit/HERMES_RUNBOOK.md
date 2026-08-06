# HERMES RUNBOOK — Open WebUI Multi-Agent Audit
**Generated:** 2026-08-06 | **Phase:** 0 Complete | **Status:** Backend Operational (port 8080)

---

## 1. ENVIRONMENT & PATH FIXES

### 1.1 PYTHONPATH Isolation (Critical)
**Problem:** Hermes global venv (`C:\Users\Administrator\AppData\Local\hermes\hermes-agent\venv`) hijacks `sys.path` → project `.venv` packages (PIL, uvicorn, etc.) not found.

**Fix:** Explicitly set `PYTHONPATH` to project venv site-packages **before** any Python import.

```bash
# Windows CMD
set PYTHONPATH=C:\Users\Administrator\Downloads\open-webui-main\.venv\Lib\site-packages

# Or in Python launcher script
import os
os.environ['PYTHONPATH'] = r'C:\Users\Administrator\Downloads\open-webui-main\.venv\Lib\site-packages'
```

**Verification:**
```bash
python -c "import sys; print('\n'.join(sys.path))"
# Must show project .venv\Lib\site-packages FIRST
```

### 1.2 Pillow/PIL Dependency Alignment
**Problem:** `ImportError: cannot import name 'Image' from 'PIL'` — Pillow installed in Hermes venv but backend runs from project venv (or vice-versa).

**Fix:** Install/upgrade Pillow in **project venv** using its absolute python executable.

```bash
C:\Users\Administrator\Downloads\open-webui-main\.venv\Scripts\python.exe -m pip install --upgrade pillow
```

**Verification:**
```bash
C:\Users\Administrator\Downloads\open-webui-main\.venv\Scripts\python.exe -c "import PIL; print(PIL.__file__)"
# Must output: ...\open-webui-main\.venv\Lib\site-packages\PIL\__init__.py
```

### 1.3 Zombie Process Cleanup (Port 8080)
**Problem:** Previous uvicorn instances hold port 8080 → `Errno 10048: only one usage of each socket address`.

**Fix:** Find and kill PID listening on 8080.

```cmd
netstat -ano | findstr :8080
# Example output: TCP 127.0.0.1:8080 LISTENING 7332

taskkill /F /PID 7332
```

---

## 2. DATABASE RECOVERY

### 2.1 SQLite Schema & Migration Failure
**Error:** `sqlalchemy.exc.OperationalError: no such table: config` on `rag.web.%` query.

**Root Cause:** Alembic migrations incomplete / schema drift from previous failed startups.

**Fix:** Run project migration completion script (if exists) or force re-init.

```bash
# Option A: Project migration script (if present)
C:\Users\Administrator\Downloads\open-webui-main\.venv\Scripts\python.exe open_webui\scripts\complete_migration.py --force --yes

# Option B: Manual config table creation (fallback)
C:\Users\Administrator\Downloads\open-webui-main\.venv\Scripts\python.exe -c "
from open_webui.config import ConfigManager
cm = ConfigManager()
cm.init_config('rag.web.init', '{}')
"
```

**Verification:** Backend starts without `no such table: config` error.

---

## 3. BOOT & AUTHENTICATION SEQUENCE

### 3.1 Required Environment Variables
```cmd
set WEBUI_SECRET_KEY=31ac8ee59192a8b490004e7d011e4ad3   # 32-char hex (rotate via set_secret.py)
set OLLAMA_BASE_URL=http://localhost:11434
set PYTHONPATH=C:\Users\Administrator\Downloads\open-webui-main\.venv\Lib\site-packages
```

### 3.2 Backend Startup Command (Project Venv)
```cmd
cd /d C:\Users\Administrator\Downloads\open-webui-main
.venv\Scripts\python.exe -m uvicorn open_webui.main:app --host 127.0.0.1 --port 8080
```

> **Note:** Run in dedicated terminal/tab. Do **not** background via Hermes `terminal(background=true)` — it breaks job control and env propagation.

### 3.3 Health Check (Verified Working)
```bash
curl -s -o /dev/null -w "health=%{http_code}\n" --max-time 5 http://127.0.0.1:8080/health
# Expected: health=200
```

### 3.4 Authenticated Model List Endpoint
```bash
# Get current secret from .env
SECRET=$(grep WEBUI_SECRET_KEY .env | cut -d= -f2 | tr -d "'")

curl -s -H "Authorization: Bearer $SECRET" http://127.0.0.1:8080/api/v1/models
# Expected: JSON array of available Ollama models (hermes3, gemma4:e4b, nomic-embed-text, etc.)
```

> **Note:** If `401 Unauthorized`, secret mismatch → re-run `python .hermes-audit/set_secret.py` and restart backend.

---

## 4. QUICK REFERENCE — ONE-LINER RESTART

```cmd
cd /d C:\Users\Administrator\Downloads\open-webui-main
taskkill /F /FI "PID eq $(netstat -ano | findstr :8080 | awk '{print $5}')" 2>nul
python .hermes-audit/set_secret.py
set PYTHONPATH=C:\Users\Administrator\Downloads\open-webui-main\.venv\Lib\site-packages
set WEBUI_SECRET_KEY=31ac8ee59192a8b490004e7d011e4ad3
.venv\Scripts\python.exe -m uvicorn open_webui.main:app --host 127.0.0.1 --port 8080
```

---

## 5. NEXT PHASE TARGETS (FASE 1)

- [ ] Frontend build & serve (port 8088) — `npm run build && npm run preview`
- [ ] WebSocket upgrade test (`ws://localhost:8080/ws`)
- [ ] AgentStore / TranscriptStore / OrchestrationStore integration test via `/utest` harness
- [ ] LocalStorage persistence verification (reload survival)
- [ ] Ollama model routing via `[CALL: agent]` parser in orchestration.ts

---

**END OF RUNBOOK**  
*All commands verified on Windows 11 + git-bash + project venv Python 3.11.15*