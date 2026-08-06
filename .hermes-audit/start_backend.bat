@echo off
cd /d C:\Users\Administrator\Downloads\open-webui-main
for /f "delims=" %%x in (.env) do set "%%x"
.venv\Scripts\python.exe -m uvicorn open_webui.main:app --host 127.0.0.1 --port 8080 >> .hermes-audit\backend.log 2>&1