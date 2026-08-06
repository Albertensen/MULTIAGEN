"""
routers/agents.py — Multi-Agent orchestration backend (Fase 3, item 3 & 5).

Endpoints:
  POST /api/v1/agents/generate   — generate agent response via Ollama (local LLM),
                                   auto-triggered by frontend [CALL: agent] bus.
  GET  /api/v1/agents/models     — list available Ollama models.

Dev-only guard: endpoint generate tanpa auth HANYA aktif bila env
ENABLE_DEV_AGENTS_API=true (default false). Untuk produksi pakai Depends(get_verified_user).
"""
from __future__ import annotations

import logging
from typing import Any

from fastapi import APIRouter, HTTPException, Request

from open_webui.env import ENABLE_DEV_AGENTS_API
from open_webui.models.users import Users
from open_webui.utils.chat import generate_chat_completion
from open_webui.utils.models import get_all_models

log = logging.getLogger(__name__)

router = APIRouter()


async def _resolve_user() -> Any:
    """Dev helper: pick admin user (usually super-admin)."""
    user = await Users.get_super_admin_user()
    if user is None:
        raise HTTPException(status_code=500, detail="No admin user found")
    return user


@router.get('/models')
async def list_agent_models(request: Request):
    """List available LLM models (ollama) for the multi-agent bus."""
    user = await _resolve_user()
    try:
        models = await get_all_models(request, user=user)
    except Exception as exc:
        log.exception('agents/models failed')
        raise HTTPException(status_code=500, detail=str(exc))
    return {'models': models}


@router.post('/generate')
async def generate_agent_response(request: Request, form_data: dict):
    """
    Generate text from an agent's configured model (ollama native),
    mirroring the chat-completion payload. Dev-only unless authed.
    """
    if not ENABLE_DEV_AGENTS_API:
        raise HTTPException(status_code=403, detail='Dev API disabled')
    user = await _resolve_user()
    try:
        result = await generate_chat_completion(
            request=request,
            form_data=form_data,
            user=user,
        )
        return result
    except HTTPException:
        raise
    except Exception as exc:
        log.error(f'agents/generate failed: {exc}')
        raise HTTPException(status_code=500, detail=str(exc))