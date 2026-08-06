import os, subprocess
base = r'C:\Users\Administrator\Downloads\open-webui-main'
v = os.path.join(base, '.venv', 'Scripts', 'python.exe')
print('venv exists:', os.path.exists(v))
if os.path.exists(v):
    r = subprocess.run([v, '--version'], capture_output=True, text=True)
    print('venv version:', (r.stdout or r.stderr).strip())
# key backend deps in venv
r = subprocess.run([v, '-m', 'pip', 'list'], capture_output=True, text=True)
pkgs = (r.stdout or '').lower()
for mod in ['fastapi', 'uvicorn', 'pydantic', 'aiohttp', 'sse-starlette', 'ollama', 'openai']:
    # crude: check name appears in pip list output
    line = [p for p in pkgs.splitlines() if p.strip().startswith(mod)]
    print('dep', mod, ':', 'OK' if line else 'MISSING')