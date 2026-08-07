import asyncio, sys
sys.path.insert(0, 'backend')
from fastapi import Request
from open_webui.main import app
from open_webui.utils.models import get_all_models

async def main():
    scope = {
        'type': 'http', 'asgi.version': '3.0', 'asgi.spec_version': '2.0',
        'method': 'GET', 'path': '/internal', 'query_string': b'',
        'headers': [], 'client': ('127.0.0.1', 1), 'server': ('127.0.0.1', 80),
        'scheme': 'http', 'app': app
    }
    req = Request(scope)
    req._state = {}
    app.state.MODELS = {}
    try:
        models = await get_all_models(req, refresh=True)
        print('models count:', len(models))
        for m in models[:5]:
            print(' -', m['id'])
    except Exception as e:
        import traceback; traceback.print_exc()

asyncio.run(main())
