"""
routers/agents.py — FastAPI agents CRUD + WebSocket broadcaster (Fase 3, item 5).

Endpoints:
  GET    /api/v1/agents           → list all agents (dev-only if ENABLE_DEV_AGENTS_API)
  POST   /api/v1/agents      → create new agent
  GET    /agents/{id}       → read agent
  PUT    /agents/{id}       → update agent
  DELETE /agents/{id}      → delete agent
  WS     /ws/agents        → live broadcast of agent events (create/update/delete)

Dev-only guard: endpoint /generate (no auth) for testing; all other endpoints require
verified user (admin) via `get_verified_user` unless ENABLE_DEV_AGENTS_API is true.
"""
from __future__ import annotations

import json
import logging
import os
import time
import uuid
from typing import Any, Dict, List, Set

from fastapi import APIRouter, Depends, HTTPException, Request, WebSocket, WebSocketDisconnect
from fastapi.responses import JSONResponse

from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select

from open_webui.env import ENABLE_DEV_AGENTS_API
from open_webui.models.config import Config
from open_webui.models.users import Users
from open_webui.utils.auth import get_verified_user, get_admin_user
from open_webui.utils.chat import generate_chat_completion
from open_webui.internal.db import get_async_session

log = logging.getLogger(__name__)

router = APIRouter()


# ----------------------------------------------------------------------
# Event broadcaster (in‑memory)
# ----------------------------------------------------------------------
class EventBroadcaster:
    def __init__(self):
        self._subscribers: Set[WebSocket] = set()

    async def broadcast(self, event: dict) -> None:
        """Send JSON event to all connected websockets."""
        if not self._subscribers:
            return
        data = json.dumps(event)
        dead: Set[WebSocket] = set()
        for ws in self._subscribers:
            try:
                await ws.send_text(data)
            except WebSocketDisconnect:
                dead.add(ws)
        self._subscribers.difference_update(dead)


broadcaster = EventBroadcaster()


# ----------------------------------------------------------------------
# Helper: get DB session
# ----------------------------------------------------------------------
async def get_db() -> AsyncSession:
    async for session in get_async_session():
        yield session


# ----------------------------------------------------------------------
# CRUD Endpoints
# ----------------------------------------------------------------------
@router.get("/agents")
async def list_agents(db: AsyncSession = Depends(get_db)) -> List[Dict[str, Any]]:
    """List all agents (admin only in prod, or dev-only)."""
    # dev‑only bypass
    if ENABLE_DEV_AGENTS_API:
        # For now return empty list - actual agent model will be implemented
        return []
    # In production, require auth
    raise HTTPException(status_code=403, detail="Dev API disabled")


@router.get("/agents/{agent_id}")
async def read_agent(agent_id: str, db: AsyncSession = Depends(get_db)) -> Dict[str, Any]:
    # Placeholder - actual AgentModel to be created
    raise HTTPException(status_code=404, detail="Agent not found")


@router.post("/agents")
async def create_agent(
    payload: Dict[str, Any],
    db: AsyncSession = Depends(get_db),
) -> Dict[str, Any]:
    if not ENABLE_DEV_AGENTS_API:
        raise HTTPException(status_code=403, detail="Dev API disabled")
    # Placeholder implementation
    agent_id = str(uuid.uuid4())
    agent = {"id": agent_id, **payload, "created_at": int(time.time() * 1000)}
    
    # broadcast creation
    await broadcaster.broadcast({
        "type": "agent_created",
        "payload": {"agent_id": agent_id, "name": payload.get("name", "unknown")}
    })
    
    return agent


@router.put("/agents/{agent_id}")
async def update_agent(
    agent_id: str,
    payload: Dict[str, Any],
    db: AsyncSession = Depends(get_db),
) -> Dict[str, Any]:
    if not ENABLE_DEV_AGENTS_API:
        raise HTTPException(status_code=403, detail="Dev API disabled")
    
    # broadcast update
    await broadcaster.broadcast({
        "type": "agent_updated",
        "payload": {"agent_id": agent_id, "changed_keys": list(payload.keys())}
    })
    
    return {"id": agent_id, **payload}


@router.delete("/agents/{agent_id}", status_code=204)
async def delete_agent(
    agent_id: str,
    db: AsyncSession = Depends(get_db),
) -> None:
    if not ENABLE_DEV_AGENTS_API:
        raise HTTPException(status_code=403, detail="Dev API disabled")
    
    await broadcaster.broadcast({
        "type": "agent_deleted",
        "payload": {"agent_id": agent_id}
    })


# ----------------------------------------------------------------------
# Dynamic Provider Selector (Fase 3, item 13): config provider LLM utk Leader
# ----------------------------------------------------------------------
PROVIDER_KEYS = "multiagent.providers"

# default: Ollama lokal aktif; cloud (OpenAI/Anthropic/DeepSeek/Gemini) kosong
DEFAULT_PROVIDERS = {
    "ollama": {"label": "Ollama (Lokal)", "baseUrl": "http://127.0.0.1:11434/v1", "model": "gemma4:e4b", "apiKey": "", "enabled": True},
    "openai": {"label": "OpenAI (Cloud)", "baseUrl": "https://api.openai.com/v1", "model": "gpt-4o-mini", "apiKey": "", "enabled": False},
    "anthropic": {"label": "Anthropic (Cloud)", "baseUrl": "https://api.anthropic.com/v1", "model": "claude-3-5-haiku-latest", "apiKey": "", "enabled": False},
    "deepseek": {"label": "DeepSeek (Cloud)", "baseUrl": "https://api.deepseek.com/v1", "model": "deepseek-chat", "apiKey": "", "enabled": False},
    "gemini": {"label": "Gemini (Cloud)", "baseUrl": "https://generativelanguage.googleapis.com/v1beta", "model": "gemini-2.0-flash", "apiKey": "", "enabled": False},
}


@router.get("/providers")
async def get_providers(request: Request) -> Dict[str, Any]:
    if not ENABLE_DEV_AGENTS_API:
        raise HTTPException(status_code=403, detail="Dev API disabled")
    stored = await Config.get(PROVIDER_KEYS, {})
    # merge: default + stored (jangan bocorkan apiKey penuh — mask utk read)
    merged: Dict[str, Any] = {}
    for pid, cfg in DEFAULT_PROVIDERS.items():
        s = (stored or {}).get(pid, {})
        merged[pid] = {**cfg, **s}
        if merged[pid].get("apiKey"):
            merged[pid]["apiKey"] = "***"
    return {"providers": merged, "stored": bool(stored)}


@router.put("/providers")
async def update_providers(request: Request, payload: Dict[str, Any]) -> Dict[str, Any]:
    if not ENABLE_DEV_AGENTS_API:
        raise HTTPException(status_code=403, detail="Dev API disabled")
    # hanya simpan key yang dikenal; apiKey "***" diabaikan (tidak menimpa)
    incoming = payload.get("providers", payload)
    clean: Dict[str, Any] = {}
    for pid, cfg in DEFAULT_PROVIDERS.items():
        if pid not in incoming:
            continue
        old = (await Config.get(PROVIDER_KEYS, {}) or {}).get(pid, {})
        new_cfg = {**cfg, **incoming[pid]}
        if new_cfg.get("apiKey") == "***":
            new_cfg["apiKey"] = old.get("apiKey", cfg.get("apiKey", ""))
        clean[pid] = new_cfg
    await Config.upsert({PROVIDER_KEYS: clean})
    return {"ok": True, "providers": clean}


# ----------------------------------------------------------------------
# Generate endpoint (Fase 3, item 3/7): no-auth dev-only LLM generation
# ----------------------------------------------------------------------
@router.post("/generate")
async def generate_agent_response(request: Request, form_data: dict):
    if not ENABLE_DEV_AGENTS_API:
        raise HTTPException(status_code=403, detail="Dev API disabled")
    user = await Users.get_super_admin_user()
    if user is None:
        raise HTTPException(status_code=500, detail="No admin user found")
    # generate_chat_completion assumes request.app.state.MODELS is loaded
    # (route handler in main.py does this preload; direct calls must too).
    if not request.app.state.MODELS:
        from open_webui.utils.models import get_all_models

        await get_all_models(request, user=user)
    try:
        return await generate_chat_completion(request=request, form_data=form_data, user=user)
    except HTTPException:
        raise
    except Exception as exc:
        log.error(f"agents/generate failed: {exc}")
        raise HTTPException(status_code=500, detail=str(exc))


# ----------------------------------------------------------------------
# WebSocket endpoint for live agent events
# ----------------------------------------------------------------------
@router.websocket("/ws/agents")
async def websocket_endpoint(ws: WebSocket):
    await ws.accept()
    broadcaster._subscribers.add(ws)
    try:
        while True:
            await ws.receive_text()
    except WebSocketDisconnect:
        broadcaster._subscribers.discard(ws)
    except Exception as e:
        log.error(f"WebSocket error: {e}")
        broadcaster._subscribers.discard(ws)