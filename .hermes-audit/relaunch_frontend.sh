#!/usr/bin/env bash
# Vite dev server for Open WebUI frontend (port 8088), proxy /api -> 8080.
set -e
cd /c/Users/Administrator/Downloads/open-webui-main
export NODE_OPTIONS="--max-old-space-size=8192"
exec node node_modules/vite/bin/vite.js dev --host --port 8088