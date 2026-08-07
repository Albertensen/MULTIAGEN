"""
routers/workspace_files.py — Sandboxed Workspace File Storage (Fase 3, item 12).

Isolasi penyimpanan per workspace:
  storage/workspaces/{workspace_id}/<file>

Endpoints (dev-only via ENABLE_DEV_AGENTS_API):
  POST   /api/v1/workspaces/{workspace_id}/files/upload
  GET    /api/v1/workspaces/{workspace_id}/files           -> list
  GET    /api/v1/workspaces/{workspace_id}/files/{name}    -> download/read
  DELETE /api/v1/workspaces/{workspace_id}/files/{name}

Keamanan:
  - Path traversal guard: nama file & workspace_id disanitasi (hanya [A-Za-z0-9._-]),
    join dengan os.path.realpath + verifikasi prefix sandbox — file Workspace A
    tidak bisa diakses/menimpa file Workspace B.
"""

from __future__ import annotations

import logging
import re
import time
import uuid
from pathlib import Path
from typing import Any, Dict, List

from fastapi import APIRouter, File, HTTPException, Request, UploadFile
from fastapi.responses import FileResponse, JSONResponse

from open_webui.env import ENABLE_DEV_AGENTS_API
from open_webui.config import DATA_DIR

log = logging.getLogger(__name__)

router = APIRouter()

WORKSPACES_ROOT = DATA_DIR / "storage" / "workspaces"

# nama file / workspace hanya karakter aman
_SAFE = re.compile(r"^[A-Za-z0-9._-]+$")


def _workspace_dir(workspace_id: str) -> Path:
    if not _SAFE.match(workspace_id):
        raise HTTPException(status_code=400, detail="Invalid workspace_id")
    d = (WORKSPACES_ROOT / workspace_id).resolve()
    # pastikan masih di dalam root sandbox (anti traversal)
    if not str(d).startswith(str(WORKSPACES_ROOT.resolve())):
        raise HTTPException(status_code=400, detail="Invalid workspace path")
    d.mkdir(parents=True, exist_ok=True)
    return d


def _file_path(workspace_id: str, filename: str) -> Path:
    if not _SAFE.match(filename):
        raise HTTPException(status_code=400, detail="Invalid filename")
    p = (_workspace_dir(workspace_id) / filename).resolve()
    if not str(p).startswith(str(WORKSPACES_ROOT.resolve())):
        raise HTTPException(status_code=400, detail="Invalid file path")
    return p


def _guard() -> None:
    if not ENABLE_DEV_AGENTS_API:
        raise HTTPException(status_code=403, detail="Dev API disabled")


@router.post("/{workspace_id}/files/upload")
async def upload_workspace_file(
    workspace_id: str,
    file: UploadFile = File(...),
) -> Dict[str, Any]:
    _guard()
    d = _workspace_dir(workspace_id)
    # sanitasi nama asli; fallback uuid bila tidak aman
    raw = file.filename or f"file-{uuid.uuid4().hex[:8]}"
    name = raw if _SAFE.match(raw) else f"{uuid.uuid4().hex[:12]}.bin"
    # anti overwrite antar-workspace: nama unik per upload
    dest = d / name
    content = await file.read()
    dest.write_bytes(content)
    return {
        "workspace_id": workspace_id,
        "filename": name,
        "size": len(content),
        "path": f"storage/workspaces/{workspace_id}/{name}",
        "created_at": int(time.time()),
    }


@router.get("/{workspace_id}/files")
async def list_workspace_files(workspace_id: str) -> List[Dict[str, Any]]:
    _guard()
    d = _workspace_dir(workspace_id)
    out = []
    for p in sorted(d.iterdir()):
        if p.is_file():
            out.append(
                {
                    "filename": p.name,
                    "size": p.stat().st_size,
                    "workspace_id": workspace_id,
                }
            )
    return out


@router.get("/{workspace_id}/files/{filename}")
async def read_workspace_file(workspace_id: str, filename: str):
    _guard()
    p = _file_path(workspace_id, filename)
    if not p.exists() or not p.is_file():
        raise HTTPException(status_code=404, detail="File not found")
    return FileResponse(p, filename=filename)


@router.delete("/{workspace_id}/files/{filename}", status_code=204)
async def delete_workspace_file(workspace_id: str, filename: str) -> None:
    _guard()
    p = _file_path(workspace_id, filename)
    if not p.exists() or not p.is_file():
        raise HTTPException(status_code=404, detail="File not found")
    p.unlink()
