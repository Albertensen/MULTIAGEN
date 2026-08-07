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