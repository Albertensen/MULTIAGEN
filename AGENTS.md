====================================================================
# MULTI-WORKSPACE PATH & WORKFLOW RULES
## 📍 ABSOLUTE PATHS & REPOSITORY
- WORKSPACE ROOT: C:\Users\Administrator\Documents\MY-WORKSPACE
- SECONDBRAIN VAULT (DOCS): C:\Users\Administrator\Documents\MY-WORKSPACE\SECONDBRAIN
- OPEN-WEBUI MAIN (GIT REPO & CODE): C:\Users\Administrator\Documents\MY-WORKSPACE\open-webui-main
- GITHUB REMOTE URL: @url:`https://github.com/Albertensen/MULTIAGEN.git`

## ⚙️ MANDATORY WORKFLOW RULES (STRICT)
1. WORKING DIRECTORY: All git commands MUST be executed inside `C:\Users\Administrator\Documents\MY-WORKSPACE\open-webui-main`.
2. REMOTE VERIFICATION: Ensure `git remote -v` points to `@url:`https://github.com/Albertensen/MULTIAGEN.git`.
2. TESTING GATE: NEVER push code to GitHub without testing. Every feature MUST be tested and verified functional first.
3. AUTO-DOCS SYNC: Upon passing tests, automatically mark tasks as completed `[x]` in `PROJECT_ROADMAP.md` and `mainbrain.md`.
4. AUTONOMOUS GIT PUSH: Execute `git add .`, `git commit -m "..."`, and `git push origin master` AUTOMATOUSLY without waiting for manual user commands.

====================================================================
"""