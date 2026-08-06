import os, subprocess

# project venv python explicitly
proj_python = r'C:\Users\Administrator\Downloads\open-webui-main\.venv\Scripts\python.exe'

env = os.environ.copy()
env['PYTHONPATH'] = r'C:\Users\Administrator\Downloads\open-webui-main\.venv\Lib\site-packages'
env['WEBUI_SECRET_KEY'] = 'c20ff7b02756c5bce6c7856d528b1f4c'
env['OLLAMA_BASE_URL'] = 'http://localhost:11434'

result = subprocess.run([
    proj_python, '-m', 'uvicorn', 'open_webui.main:app',
    '--host', '127.0.0.1', '--port', '8080'
], cwd=r'C:\Users\Administrator\Downloads\open-webui-main',
   capture_output=True, text=True, env=env)

print('stdout:', result.stdout[-1500:] if result.stdout else '(empty)')
print('stderr:', result.stderr[-1500:] if result.stderr else '(empty)')
print('exit:', result.returncode)