# PROJECT_RULES.md

## Changelog Wajib

Setiap perubahan kode harus dicatat di CHANGELOG.md sebelum commit dan push.

**Format:**
## [YYYY-MM-DD] <jenis> — <pesan>

Commit harus selalu berisi file kode yang diubah + CHANGELOG.md sekaligus.


## Commit Wajib

- Dilarang彦 claws commit kode yang belum diuji secara lokal.
- Pastikan kode sudah works 100% sebelum masuk ke Git.

## Release Notes

Setiap rilis harus diperbarui di RELEASE_NOTES.md.

**Format:**
## v<MAJOR>.<MINOR>.<PATCH> — YYYY-MM-DD


## Uji Dulu, Commit Belakangan

- Uji aplikasi secara local sebelum commit.
- Pastikan semua test lolos (status: works).

## Keamanan .env

- File .env JANGAN pernikah, ditimpa, atau dimodifikasi.
- .env WAKTU DIHUPUS dari versi Git.
- Pastikan .env sudah masuk .gitignore.