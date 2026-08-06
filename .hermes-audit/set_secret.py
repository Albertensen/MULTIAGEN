import os, secrets
key = secrets.token_hex(16)
lines = [
    "OLLAMA_BASE_URL='http://localhost:11434'",
    f"WEBUI_SECRET_KEY='{key}'",
]
with open(r'C:\Users\Administrator\Downloads\open-webui-main\.env', 'w', encoding='utf-8') as f:
    f.write('\n'.join(lines))
print('.env updated with secret')