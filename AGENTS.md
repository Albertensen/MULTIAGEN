## ⚙️ MANDATORY WORKFLOW RULES (STRICT)
1. WORKING DIRECTORY: All git commands MUST be executed inside `C:\Users\Administrator\Documents\MY-WORKSPACE\open-webui-main`.
2. REMOTE VERIFICATION: Ensure `git remote -v` points to `@url:`https://github.com/Albertensen/MULTIAGEN.git`.
3. TESTING GATE: NEVER push code to GitHub without testing. Every feature MUST be tested and verified functional first.
4. AUTONOMOUS GIT PUSH: Execute `git add .`, `git commit -m \"...\"`, and `git push origin master` AUTOMATOUSLY without waiting for manual user commands.
6. ZERO-LAG REMOTE SYNC: Setiap kali perbaikan/fitur selesai dies, terbukti bebas error (no trouble), dan working tree clean, Git lokal WAJIB LANGSUNG di-push ke GitHub remote (`git push origin master`). Dilarang membiarkan commit lokal tertinggal dari remote.
====================================================================