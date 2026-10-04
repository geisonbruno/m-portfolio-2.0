# Hermes Start Command

Run Hermes from the repository root.

Then set the persistent goal:

```text
/goal Build the complete production-ready portfolio defined by AGENTS.md and /docs. Read all source-of-truth files and inspect the visual reference before implementation. Work autonomously through docs/TASKS.md from top to bottom. For every coherent unit of work, implement it, verify it, update tests when needed, mark its task complete, create a small Git commit, and continue immediately. Do not stop after individual tasks. The goal is complete only when docs/ACCEPTANCE.md is satisfied and npm run verify passes. Work only on hermes/portfolio-v1. Push the branch and open a Pull Request to main when GitHub access is available, but do not merge it. Ask me only for a genuinely missing product decision, credentials/permissions, or a destructive-state blocker; otherwise make the simplest compliant engineering decision and continue.
```

After the project scaffold creates a working `npm run verify` script, add:

```text
/goal gate add npm run verify
```

Useful controls:

```text
/goal status
/goal pause
/goal resume
```
