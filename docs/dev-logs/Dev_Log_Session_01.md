# Dev Log — Session 01

## 1. Meta Data

| | |
|---|---|
| **Tanggal Sesi** | 2026-08-05 → 2026-08-06 |
| **Durasi** | Multi-jam (dari setup infra sampai store multi-agent) |
| **Fokus Utama** | Fase 1 (Agent State Management) + Awal Fase 2 (Relational Memory System) |
| **Lokasi Kode** | `C:\Users\Administrator\Downloads\open-webui-main` |
| **Repo** | `https://github.com/Albertensen/MULTIAGEN.git` (branch `master`) |
| **Stack** | Open WebUI 0.11.0 — FastAPI backend (8080) + SvelteKit frontend (8088) + Ollama lokal |

---

## 2. Executive Summary

Hari ini proyek Multi-Agent AI berubah dari **tumpukan kode Open WebUI mentah** menjadi **fondasi aplikasi multi-agen yang terverifikasi berjalan**:

- ✅ **Infrastruktur dua-servis hidup**: Backend uvicorn `127.0.0.1:8080` (health 200) + Frontend Vite `localhost:8088` (render `<title>Open WebUI</title>`), keduanya `LISTENING` terverifikasi via `netstat`.
- ✅ **Integrasi Ollama**: Model lokal terverifikasi — `gemma4:e4b` (9.6GB, responsif), `gemma4:12b`, `hermes3:latest`, `nomic-embed-text:latest` (embedding).
- ✅ **`agentStore.ts`** — otak manajemen agen: CRUD, status aktif, system prompt, penugasan model. Teruji runtime di `/utest` (pergantian agen aktif reaktif, 0 JS error).
- ✅ **`transcriptStore.ts`** — layer memori: pesan relasional per `chatId → agentId`, role + timestamp, filter global/per-agen, derived reactive. Teruji di `/utest` (addMessage reaktif, riwayat Planner 2→3 msg).
- ✅ **Governance proyek**: `PROJECT_RULES.md`, `CHANGELOG.md`, `RELEASE_NOTES.md`, `PROJECT_ROADMAP.md` (5 fase), `.gitignore` standar, semuanya sudah di-commit & push ke GitHub.

**Tiga bug blocker diatasi:**
1. `IndexError` di `env.py` (parser CHANGELOG tidak kenal format em-dash custom) → ditambal try/except.
2. `ImportError: PIL` — `PYTHONPATH` global Hermes menimpa venv project → di-unset saat startup.
3. Build OOM — heap Node 4GB default → `NODE_OPTIONS=--max-old-space-size=8192`.

---

## 3. Architectural Decisions

### 3.1 Svelte store murni, tanpa framework tambahan
Store multi-agent dibangun **hanya dari `svelte/store`** (`writable`, `readonly`, `derived`). Tidak ada dependency baru, tidak ada state library eksternal. Alasan: Open WebUI sudah punya konvensi store flat `writable()` di `src/lib/stores/index.ts` + pola module-store dengan `readonly` export (lihat `chatList.ts`). Mengikuti konvensi existing = dipahami seluruh codebase.

### 3.2 Runtime-first, TypeScript fleksibel (PROJECT_RULES.md)
- Kriteria "works" = **build success + uji runtime fungsional di browser**, bukan `svelte-check`/strict type-checking.
- 8,323 error TypeScript di codebase upstream (RichTextInput, routes/auth, i18n store) = **technical debt upstream**, bukan kesalahan kita, dan **tidak memblokir iterasi**.
- Verifikasi store dilakukan lewat **harness `/utest`** di browser (render + klik + cek DOM), bukan lewat type-checker.

### 3.3 Struktur data relasional untuk "ingatan"
```
transcript: chatId → agentId → TranscriptMessage[]
TranscriptMessage = { id, role: 'user'|'assistant'|'system', content, ts }
```
Konteks multi-agen muncul dari **key `agentId`**: Planner (internal), Critic (internal), Hermes (final ke user) — sistem tahu asal setiap pesan, bukan cuma "siapa yang bicara terakhir".

### 3.4 Prinsip akses: `readonly` export + aksi eksplisit
Komponen tidak boleh mutasi store langsung. Semua perubahan lewat fungsi aksi (`addAgent`, `assignAgent`, `addMessage`, `clearTranscript`) — single source of truth, traceable.

### 3.5 Gotcha yang direkam: derived-store-function di Svelte 4
`$: x = $chatTranscript(CHAT)` **tidak** auto-track store yang dikembalikan fungsi. Solusi: `.subscribe()` manual sekali di top-level (bukan dalam reactive block — itu bikin derived baru tiap run → memory leak). Penting untuk integrasi Chat.svelte nanti.

---

## 4. Current State

| Area | Status |
|---|---|
| Backend 8080 / Frontend 8088 | 🟢 Hidup, health 200 |
| Fase 1 (agentStore) | ✅ Selesai, teruji |
| Fase 2 (transcriptStore) | 🟡 Struktur + uji selesai; **persistensi belum ada** |
| `localStorage` persistence | ❌ Belum — agen & transkrip hilang saat reload |
| Harness `/utest` | ⚠️ Masih ada (throwaway, akan dihapus Fase 4) |
| Event Bus / Orchestration (Fase 3) | ❌ Belum dimulai |
| Chat.svelte integrasi | ❌ Belum — store belum tersambung ke UI utama |
| Git | ✅ `810bbde` — semua work committed, branch `master` sinkron GitHub |

**Commit trail sesi ini:**
```
Initial commit (master) → 419ebca (docs foundation) → d33d2a8 (fix env.py)
→ 1c7cfb4 (agentStore + utest) → ef5ad6a (transcriptStore + docs)
→ 4b806c3 (roadmap) → 810bbde (roadmap expand Fase 0)
```

---

## 5. Next Steps

1. **Persistensi memori** (Fase 2, pending): simpan `agentStore` + `transcriptStore` ke `localStorage` — agen & percakapan bertahan setelah reload. Auto-save via `store.subscribe`, hydrate saat boot.
2. **Arsitektur Event Bus / Router** (Fase 3, item 1): desain jalur komunikasi antar-agen — Svelte-side bus atau FastAPI websocket broadcast; keputusan: mulai dari Svelte store bus (cepat, runtime-first), migrasi ke backend saat butuh multi-klien.
3. **Endpoint FastAPI `/api/v1/agents/*`**: CRUD agen + broadcast state ke semua klien.
4. **Integrasi Chat.svelte**: sambungkan `agentList` + `activeAgent` + `chatTranscript` ke UI utama, tab per agen.
5. **Discord-like UI** (Fase 4): sidebar kiri kategori, sidebar kanan online agents, main chat threads, typing indicators.

---

## 6. SOP & Komitmen Log Otomatis

> **KOMITMEN HERMES (mulai berlaku sekarang):**
>
> Setiap kali proyek mencapai **milestone penting**, membuat **keputusan arsitektur**, atau menyelesaikan **fitur krusial**, saya (Hermes) akan **secara proaktif**:
> 1. Mengulang/merangkum poin-poin penting dari pekerjaan tersebut;
> 2. Otomatis membuatkan **draf catatan Markdown siap-Obsidian** (format `Dev_Log_Session_XX.md`);
> 3. Menawarkan penyimpanan ke vault Obsidian (`SECONDBRAIN/`) dan/atau repo (`docs/dev-logs/`);
> 4. Melakukannya **tanpa diminta** — logging adalah bagian dari definisi "selesai".
>
> Log ini (Session 01) adalah komitmen pertama dari kebiasaan itu.

---

*Ditulis oleh Hermes (agent) — sesi kolaborasi dengan Albert. Runtime-verified, tidak ada pernyataan tanpa bukti.*