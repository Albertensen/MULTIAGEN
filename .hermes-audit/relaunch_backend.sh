#!/usr/bin/env bash
# Relaunch backend Open WebUI with dev agents API flag.
set -e
cd /c/Users/Administrator/Documents/MY-WORKSPACE/open-webui-main
export PYTHONPATH="C:\\Users\\Administrator\\Documents\\MY-WORKSPACE\\open-webui-main\\backend;C:\\Users\\Administrator\\Documents\\MY-WORKSPACE\\open-webui-main\\.venv\\Lib\\site-packages"
export WEBUI_SECRET_KEY="$(python -c "import re;print(re.search(r'^WEBUI_SECRET_KEY=(.*)$', open('.env').read(), re.M).group(1).strip().strip(chr(39)))")"
export OLLAMA_BASE_URL="http://localhost:11434"
export ENABLE_DEV_AGENTS_API="true"
exec .venv/Scripts/python.exe -m uvicorn open_webui.main:app --host 127.0.0.1 --port 8080
