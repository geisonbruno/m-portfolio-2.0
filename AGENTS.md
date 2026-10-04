# Portfolio — Agent Operating Contract

This repository is an autonomous-build experiment for Geison Bruno's personal portfolio.

Your job is to execute the project defined in this repository, not to redesign the product, invent content, or wait for repeated prompts.

## Mission

Build a production-ready, responsive, bilingual personal portfolio that satisfies all requirements in `/docs`.

Work autonomously through `/docs/TASKS.md` until the project is complete.

The human should review the final Pull Request, not coordinate every implementation step.

## Source of truth

Read these files before implementation:

1. `/docs/DECISIONS.md`
2. `/docs/PRODUCT.md`
3. `/docs/CONTENT.md`
4. `/docs/DESIGN.md`
5. `/docs/ARCHITECTURE.md`
6. `/docs/TASKS.md`
7. `/docs/ACCEPTANCE.md`

Visual reference:

- `/references/portfolio-design.png`

### Conflict precedence

If sources disagree, use this precedence:

1. `AGENTS.md`
2. `docs/DECISIONS.md`
3. `docs/CONTENT.md` for all visible copy, project names, project count, dates and labels
4. `docs/DESIGN.md` for visual behaviour
5. `docs/ARCHITECTURE.md` for technical implementation
6. `docs/PRODUCT.md` for product scope
7. the reference image

The reference image is a visual reference only. Never copy obsolete content from the image when `CONTENT.md` says otherwise.

## Autonomous workflow

Do not stop after completing one task.

For each coherent unit of work:

1. Read the relevant project documentation.
2. Inspect the current repository state.
3. Select the next unfinished task in `docs/TASKS.md`.
4. Implement that task.
5. Run the relevant checks.
6. Fix failures before continuing.
7. Update tests when behaviour changes.
8. Mark the task complete in `docs/TASKS.md`.
9. Create one small, reviewable Git commit.
10. Continue immediately to the next unfinished task.

Repeat until the completion criteria are satisfied.

## Verification

The repository must expose this command before the implementation is considered complete:

```bash
npm run verify
```

`npm run verify` must run, at minimum:

- lint
- TypeScript type checking
- automated tests
- production build

Do not claim completion if `npm run verify` fails.

If a check fails, diagnose and fix it before moving on.

## Git workflow

- Work on branch: `hermes/portfolio-v1`
- Never implement directly on `main`.
- Keep commits small and coherent.
- Use concise conventional commit messages where practical.
- Never commit secrets, local credentials, `.env` values or generated private data.
- Push the branch when the work is complete.
- Open a Pull Request into `main` if GitHub access is available.
- Do not merge the Pull Request.
- Do not deploy by logging into a hosting dashboard.
- Production deployment must happen through the repository/CI after human review and merge.

If the current branch is not `hermes/portfolio-v1`, create or switch to it before implementation.

## Product discipline

Do not:

- add a blog;
- add a feed;
- add a skills section;
- add progress bars;
- add fake projects;
- add fake metrics;
- add testimonials;
- add internal project detail pages;
- add a CMS;
- add a database;
- add authentication;
- add a backend;
- add unnecessary dependencies;
- add features just because they are common on portfolio websites;
- rewrite approved copy unless explicitly required by `CONTENT.md`.

Keep the product intentionally small.

## Design discipline

- The site is one page.
- Dark theme is the default.
- A light theme is available through a theme control.
- English is the default language.
- PT-BR is available through a language control.
- Theme and language selections persist locally.
- Projects open their GitHub repository directly in a new tab.
- Keep the visual system minimal, editorial and developer-focused.
- Preserve generous whitespace and strong typography.
- Avoid gradients, glassmorphism, heavy shadows and decorative dashboard UI.
- The layout must work from small mobile screens through large desktop screens.
- No horizontal overflow.

## Missing external links

`docs/CONTENT.md` contains explicit placeholders for external links that were not yet supplied.

Do not invent URLs, usernames or email addresses.

Continue all implementation work even if those values are missing. Centralise unresolved external links so they are easy to replace.

At final verification:

- never render a broken or fake URL to users;
- if a required external URL is still unresolved, keep the UI safe and clearly report the unresolved placeholder in the Pull Request;
- do not let missing external profile URLs block unrelated implementation.

## When to ask the human

Do not ask for routine implementation decisions.

Use the architecture and design documents and make the simplest compliant engineering choice.

Stop and ask only when:

- two source-of-truth documents genuinely conflict and precedence does not resolve it;
- a required product decision is absent and cannot be implemented safely without inventing it;
- credentials or permissions are required;
- an external service requires human account action;
- the repository is in a state where continuing could destroy existing work.

Otherwise, continue autonomously.

## Completion definition

You are done only when:

- every non-blocked checkbox in `docs/TASKS.md` is complete;
- every applicable requirement in `docs/ACCEPTANCE.md` is satisfied;
- `npm run verify` exits successfully;
- there are no visible placeholder strings in the rendered website;
- the production build succeeds;
- the branch is pushed if remote access exists;
- a Pull Request is opened if GitHub access exists;
- the final report lists commits, checks run, any unresolved external-link placeholders, and the Pull Request URL when available.

Do not treat a partial implementation as completion.
