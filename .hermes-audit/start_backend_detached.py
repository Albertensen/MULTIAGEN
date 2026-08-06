import os, subprocess, sys

proj_python = r'C:\Users\Administrator\Downloads\open-webui-main\.venv\Scripts\python.exe'
cwd = r'C:\Users\Administrator\Downloads\open-webui-main'

env = os.environ.copy()
env['PYTHONPATH'] = r'C:\Users\Administrator\Downloads\open-webui-main\.venv\Lib\site-packages'
env['WEBUI_SECRET_KEY'] = '31ac8ee59192a8b490004e7d011e4ad3'
env['OLLAMA_BASE_URL'] = 'http://localhost:11434'

# DETACHED_PROCESS + CREATE_NEW_PROCESS_GROUP: survives parent shell exit
DETACHED = 0x00000008 | 0x00000200

p = subprocess.Popen(
    [proj_python, '-m', 'uvicorn', 'open_webui.main:app',
     '--host', '127.0.0.1', '--port', '8080'],
    cwd=cwd, env=env,
    stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL,
    creationflags=DETACHED,
    close_fds=True,
)
print(f'launched pid={p.pid}')
sys.stdout.flush()