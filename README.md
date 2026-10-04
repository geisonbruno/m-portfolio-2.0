# Geison Bruno Portfolio — Agent-Ready Project

This repository is designed to be executable by Hermes as an autonomous software-engineering task.

The project requirements live in Git, not in a long chat prompt.

## Before starting Hermes

The repository should contain:

```text
AGENTS.md
docs/
  ACCEPTANCE.md
  ARCHITECTURE.md
  CONTENT.md
  DECISIONS.md
  DESIGN.md
  PRODUCT.md
  TASKS.md
references/
  portfolio-design.png
```

Review `docs/CONTENT.md` for unresolved external-link placeholders.

They do not need to block the build, but Hermes must never invent them.

## Start from the repository root

Open Hermes with its working directory set to this repository root so `AGENTS.md` is loaded as project context.

Hermes supports `AGENTS.md` as project context, so the operational contract is available to the agent automatically when started from the repo.

## Initial goal

Use:

```text
/goal Build the complete production-ready portfolio defined by AGENTS.md and /docs. Read all source-of-truth files and inspect the visual reference before implementation. Work autonomously through docs/TASKS.md from top to bottom. For every coherent unit of work, implement it, verify it, update tests when needed, mark its task complete, create a small Git commit, and continue immediately. Do not stop after individual tasks. The goal is complete only when docs/ACCEPTANCE.md is satisfied and npm run verify passes. Work only on hermes/portfolio-v1. Push the branch and open a Pull Request to main when GitHub access is available, but do not merge it. Ask me only for a genuinely missing product decision, credentials/permissions, or a destructive-state blocker; otherwise make the simplest compliant engineering decision and continue.
```

That should be the main execution instruction. The repository carries the detail.

## Quality gate

Once the scaffold has created `package.json` and the `verify` script exists, add a deterministic Hermes goal gate:

```text
/goal gate add npm run verify
```

This prevents the active goal from completing while the verification command is failing.

You can inspect the active goal with:

```text
/goal status
```

## Expected workflow

```text
AGENTS.md + docs + design reference
                ↓
             /goal
                ↓
      Hermes reads the project
                ↓
          creates branch
                ↓
       implements task 1
                ↓
       tests + small commit
                ↓
       implements task 2
                ↓
       tests + small commit
                ↓
              ...
                ↓
        npm run verify
                ↓
             push
                ↓
         Pull Request
                ↓
          human review
                ↓
             merge
                ↓
          production
```

## Important

Do not add a second competing project-context file such as `.hermes.md` unless you intentionally want it to override `AGENTS.md`.

Keep product changes in `/docs` so future agent sessions inherit the same contract.
