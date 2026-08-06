#!/usr/bin/env bash
# Relaunch backend Open WebUI with dev agents API flag.
set -e
cd /c/Users/Administrator/Downloads/open-webui-main
export PYTHONPATH="C:\\Users\\Administrator\\Downloads\\open-webui-main\\backend;C:\\Users\\Administrator\\Downloads\\open-webui-main\\.venv\\Lib\\site-packages"
export WEBUI_SECRET_KEY="c20ff7b02756c5bce6c7856d528b1f4c"
export OLLAMA_BASE_URL="http://localhost:11434"
export ENABLE_DEV_AGENTS_API="true"
exec .venv/Scripts/python.exe -m uvicorn open_webui.main:app --host 127.0.0.1 --port 8080
