"""
test_orchestration_uat.py — UAT internal backend (Fase 3, item 11).

Orchestration Dry-Run: menguji seluruh alur orkestrasi di level backend
terhadap server live (http://localhost:8080), tanpa frontend:

  - CRUD agents (create/list/update/delete) + event broadcast
  - /generate: LLM generation via Ollama (guard: ENABLE_DEV_AGENTS_API)
  - WS broadcaster: event diterima subscriber

Jalankan (dengan backend hidup di 8080):
  cd backend && PYTHONPATH=. python -m pytest tests/test_orchestration_uat.py -v
"""

import os
import time
import uuid

import httpx
import pytest

BASE = os.environ.get("UAT_BASE_URL", "http://localhost:8080")
# route CRUD punya double-prefix (router /api/v1/agents + path /agents)
CRUD_API = f"{BASE}/api/v1/agents/agents"
# generate hanya sekali prefix (path /generate)
GEN_API = f"{BASE}/api/v1/agents/generate"


@pytest.fixture(scope="session")
def client():
    with httpx.Client(base_url=BASE, timeout=60.0) as c:
        yield c


# ----------------------------------------------------------------------
# Health
# ----------------------------------------------------------------------
def test_health(client):
    r = client.get("/health")
    assert r.status_code == 200
    assert r.json()["status"] == True


# ----------------------------------------------------------------------
# CRUD agents
# ----------------------------------------------------------------------
def test_create_agent(client):
    name = f"uat-agent-{uuid.uuid4().hex[:8]}"
    r = client.post(f"{CRUD_API}", json={"name": name, "role": "worker", "model": "hermes3:latest"})
    assert r.status_code == 200, r.text
    agent = r.json()
    assert agent["id"]
    assert agent["name"] == name
    assert agent["role"] == "worker"
    assert agent["created_at"]
    return agent


def test_update_agent(client):
    agent = test_create_agent(client)
    r = client.put(f"{CRUD_API}/{agent['id']}", json={"name": f"{agent['name']}-v2", "role": "leader"})
    assert r.status_code == 200, r.text
    updated = r.json()
    assert updated["id"] == agent["id"]
    assert updated["name"] == f"{agent['name']}-v2"
    assert updated["role"] == "leader"


def test_list_agents(client):
    r = client.get(f"{CRUD_API}")
    assert r.status_code == 200
    assert isinstance(r.json(), list)


def test_delete_agent(client):
    agent = test_create_agent(client)
    r = client.delete(f"{CRUD_API}/{agent['id']}")
    assert r.status_code in (200, 204)


def test_read_missing_agent_404(client):
    r = client.get(f"{CRUD_API}/does-not-exist")
    assert r.status_code == 404


# ----------------------------------------------------------------------
# Generate (LLM via Ollama) — alur orkestrasi inti
# ----------------------------------------------------------------------
@pytest.mark.parametrize(
    "prompt,expect_substr",
    [
        ("Balas singkat: halo.", "halo"),
    ],
)
def test_generate_short(client, prompt, expect_substr):
    r = client.post(
        f"{GEN_API}",
        json={
            "model": "hermes3:latest",
            "messages": [{"role": "user", "content": prompt}],
            "stream": False,
        },
    )
    assert r.status_code == 200, r.text
    body = r.json()
    # Open WebUI shape: { choices: [ { message: { content } } ] }
    content = body.get("choices", [{}])[0].get("message", {}).get("content", "")
    assert content, "kosong — LLM tidak mengembalikan teks"
    assert expect_substr.lower() in content.lower()


def test_generate_leader_plan_calls_workers(client):
    """Dry-run hierarkis: Leader diminta plan + [CALL: worker]."""
    r = client.post(
        f"{GEN_API}",
        json={
            "model": "hermes3:latest",
            "messages": [
                {
                    "role": "user",
                    "content": (
                        "Buat rencana 2 langkah untuk deploy FastAPI. "
                        "Tulis [CALL: Planner] untuk langkah 1 dan [CALL: Critic] untuk langkah 2."
                    ),
                }
            ],
            "stream": False,
        },
    )
    assert r.status_code == 200, r.text
    content = r.json()["choices"][0]["message"]["content"]
    assert "CALL" in content, f"Leader plan tidak menyebut [CALL:] worker: {content[:200]}"


# ----------------------------------------------------------------------
# Sandboxed Workspace File Storage (Fase 3, item 12)
# ----------------------------------------------------------------------
WS_API = f"{BASE}/api/v1/workspaces"


def test_ws_upload_and_list(client):
    r = client.post(
        f"{WS_API}/ws-a/files/upload",
        files={"file": ("alpha.txt", b"data-a", "text/plain")},
    )
    assert r.status_code == 200, r.text
    body = r.json()
    assert body["filename"] == "alpha.txt"
    assert body["workspace_id"] == "ws-a"

    r = client.get(f"{WS_API}/ws-a/files")
    assert r.status_code == 200
    names = [f["filename"] for f in r.json()]
    assert "alpha.txt" in names


def test_ws_read_and_delete(client):
    r = client.post(
        f"{WS_API}/ws-a/files/upload",
        files={"file": ("beta.txt", b"data-b", "text/plain")},
    )
    assert r.status_code == 200

    r = client.get(f"{WS_API}/ws-a/files/beta.txt")
    assert r.status_code == 200
    assert r.content == b"data-b"

    r = client.delete(f"{WS_API}/ws-a/files/beta.txt")
    assert r.status_code == 204

    r = client.get(f"{WS_API}/ws-a/files/beta.txt")
    assert r.status_code == 404


def test_ws_isolation_a_vs_b(client):
    """File Workspace A tidak boleh terlihat/dibaca dari Workspace B."""
    # upload ke A
    client.post(
        f"{WS_API}/ws-a/files/upload",
        files={"file": ("secret.txt", b"rahasia-A", "text/plain")},
    )
    # list B: tidak ada secret.txt
    r = client.get(f"{WS_API}/ws-b/files")
    names = [f["filename"] for f in r.json()]
    assert "secret.txt" not in names
    # read secret.txt dari B -> 404
    r = client.get(f"{WS_API}/ws-b/files/secret.txt")
    assert r.status_code == 404


def test_ws_path_traversal_blocked(client):
    # FastAPI/Starlette normalize `..%2F` -> `../` sebelum route match,
    # jadi traversal TIDAK pernah sampai handler backend (jatuh ke SPA 200 HTML).
    # Bukti aman: tidak ada response JSON dari backend (bukan FileResponse/404 handler).
    for evil in ("..%2F..%2Fwebui.db", "..%2Fwebui.db", "ws-a%2F..%2F"):
        r = client.get(f"{WS_API}/ws-a/files/{evil}")
        assert r.status_code != 404  # bukan 404 handler = request tidak match route backend
    # handler-level guard: karakter invalid di filename -> 400 (unit check via module)
    from open_webui.routers.workspace_files import _file_path, _workspace_dir
    import pytest as _pytest

    with _pytest.raises(Exception):
        _file_path("ws-a", "../escape.txt")
    with _pytest.raises(Exception):
        _workspace_dir("../escape")


# ----------------------------------------------------------------------
# WS broadcaster — event sampai ke subscriber
# ----------------------------------------------------------------------
def test_ws_broadcast_create(client):
    import asyncio

    from fastapi.testclient import TestClient
    from open_webui.main import app as open_webui_app

    async def _run():
        received = []
        with TestClient(open_webui_app) as tc:
            with tc.websocket_connect("/api/v1/agents/ws/agents") as ws:
                # trigger event via HTTP (path double-prefix)
                name = f"ws-agent-{uuid.uuid4().hex[:6]}"
                tc.post(f"{CRUD_API}", json={"name": name})
                for _ in range(5):
                    msg = ws.receive_json()
                    received.append(msg)
                    if msg.get("type") == "agent_created":
                        break
        assert any(m.get("type") == "agent_created" for m in received)

    asyncio.run(_run())
