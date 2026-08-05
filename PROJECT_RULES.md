# PROJECT_RULES.md

## Changelog Wajib

Setiap perubahan kode harus dicatat di CHANGELOG.md sebelum commit dan push.

**Format:**
## [YYYY-MM-DD] <jenis> — <pesan>

Commit harus selalu berisi file kode yang diubah + CHANGELOG.md sekaligus.


## Commit Wajib

- Dilarang melakukan commit pada kode yang belum diuji secara lokal.
- Pastikan kode sudah works 100% sebelum masuk ke Git.

## Release Notes

Setiap rilis harus diperbarui di RELEASE_NOTES.md.

**Format:**
## v<MAJOR>.<MINOR>.<PATCH> — YYYY-MM-DD


## Uji Dulu, Commit Belakangan

- Uji aplikasi secara local sebelum commit.
- Pastikan semua test lolos (status: works).
- Gate kualitas commit: kode harus lolos build success DAN uji runtime fungsional (berjalan normal di localhost:8080).

## SOP WIP Commit (Penting — Berlaku Saat Sesi Dihentikan)

- Jika sesi berakhir (istirahat, matikan komputer, pergi) dan ada progres setengah jalan / belum teruji / pending, **WAJIB commit + push ke GitHub** sebelum menutup.
- Gunakan penanda **`WIP:`** atau **`PENDING:`** pada pesan commit supaya jelas kode belum diverifikasi penuh.
- Tujuan: tidak pernah kehilangan progres; sesi berikutnya lanjut dari titik yang jelas.
- Saat sesi dilanjutkan: cari commit berpenanda `WIP:`/`PENDING:` terakhir, selesaikan verifikasi, lalu commit ulang tanpa penanda (status works).

## Pengecualian Verifikasi Frontend (Deployed Foundation)

- Tahap verifikasi frontend TIDAK menggunakan svelte-check / strict TypeScript linting dari codebase upstream Open WebUI.
- Error typing bawaan upstream (8,323 svelte-check errors di file seperti RichTextInput/, routes/auth/, i18n store) adalah technical debt upstream, bukan kesalahan runtime pada fungsionalitas Multi-Agent.
- Kriteria works: build success + uji runtime fungsional — aplikasi berjalan normal di localhost:8080 dengan engine LLM terhubung (Ollama lokal).
- Status: 'Deployed Foundation' disetujui.
- Integrasi UI Multi-Agent dan agennya boleh lanjut tanpa terblokir error typing bawaan upstream.

## Aturan Model LLM

- Gunakan engine LLM lokal (Ollama, mis. gemma4 / hermes3) yang sudah terbukti terhubung.
- Jangan gunakan panggilan API eksternal yang tidak relevan.

## Keamanan .env

- File .env JANGAN pernah di-commit, ditimpa, atau dimodifikasi secara otonom.
- Tidak ada backup git untuk .env.
- Pastikan .env sudah masuk ke dalam .gitignore.