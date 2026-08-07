# 📜 PROJECT_RULES.md - PROJECT POLICY & SYNC PROTOCOL

## ⚡ STATIC CONTEXT (CACHE OPTIMIZATION)
- **Purpose:** Aturan wajib commit, testing gate, SOP WIP, keamanan .env, & Zero-Drift Triple-Sync.
- **Read-on-Demand:** BACA HANYA saat melakukan commit, update roadmap, atau sebelum menutup sesi kerja.

---

## 1. TESTING GATE & RUNTIME RULES
- **Test Before Commit:** DILARANG commit kode yang belum diuji secara lokal. Codebase WAJIB 100% works.
- **Quality Gate:** Build Success + Uji Runtime Fungsional berjalan normal di `localhost:8080` / `8088`.
- **Frontend Bypass (Upstream Debt):** ABAIKAN 8,323 svelte-check / strict TS errors bawaan upstream Open-WebUI. Kriteria lulus: build success & aplikasi berjalan normal dengan engine LLM terhubung.
- **LLM Engine:** Gunakan model LLM lokal Ollama yang terbukti terhubung (mis. `hermes3`, `gemma4`). Dilarang memakai API eksternal tak relevan.
- **Security .env:** DILARANG commit, menimpa, atau mengubah `.env` secara otonom. Wajib masuk `.gitignore`.

---

## 2. CHANGELOG & RELEASE NOTES FORMAT
Setiap commit WAJIB menyertakan file kode + update `CHANGELOG.md` sekaligus.
- **CHANGELOG Format:** `## [YYYY-MM-DD] <jenis> — <pesan>`
- **RELEASE_NOTES Format:** `## v<MAJOR>.<MINOR>.<PATCH> — YYYY-MM-DD`

---

## 3. SOP WIP COMMIT (BERLAKU SAAT SESI DIHENTIKAN)
- Jika sesi dihentikan (istirahat/off) saat progres setengah jalan/belum teruji, WAJIB `git add .` -> `git commit -m "WIP: <pesan>"` -> `git push`.
- Saat sesi dilanjutkan: selesaikan verifikasi, lalu commit ulang tanpa penanda `WIP:` (status works).

---

## 4. ⛔ ZERO-DRIFT TRIPLE-SYNC PROTOCOL
Saat item/sub-task selesai & teruji runtime PASSED:
1. **Auto-Checkmark:** Langsung ubah `[ ]` -> `[x]` di `PROJECT_ROADMAP.md` DAN `mainbrain.md` (file fisik di disk) SEBELUM menyatakan "Selesai".
2. **Mandatory Triple-Sync:** Update serentak: (a) `PROJECT_ROADMAP.md`, (b) `mainbrain.md` & Session Log di Vault (`SECONDBRAIN`), dan (c) Git Push ke GitHub.
3. **Zero Unpushed Commits:** Wajib `git status` memastikan branch local up-to-date dengan `origin/master` sebelum balasan akhir.