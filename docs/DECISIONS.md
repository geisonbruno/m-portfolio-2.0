# Project Decisions

This file records decisions that should not be re-litigated during implementation.

## Confirmed product decisions

- The portfolio is a **single-page personal homepage**.
- It should be short, direct and low-maintenance.
- It is not a blog and does not contain a feed.
- There are **two real projects only** in V1:
  1. ReturnFlow
  2. Oz Radar
- Do not add "Personal Utilities" or any invented third project, even if an older visual reference contains it.
- Project rows/cards link directly to GitHub. There are no internal project detail pages.
- Main sections:
  - Hero
  - Selected Projects
  - Experience
  - About
  - Footer/social links
- English is the default language.
- PT-BR is available through a language switch.
- Dark mode is the default theme.
- Light mode is available through a theme switch.
- Language and theme preferences persist locally.
- The visual direction is minimalist, editorial and developer-focused.
- The visual reference is stored at `/references/portfolio-design.png`.
- Visible text must come from `CONTENT.md`, not be inferred from the visual reference.

## Confirmed typography direction

- Primary sans-serif direction: Geist / Geist-like clean sans-serif.
- Secondary mono direction: Departure Mono / a restrained monospace fallback.
- The implementation may use safe fallbacks when a font cannot be legally or reliably bundled.
- Do not commit font binaries just to imitate the mockup.

## Autonomous-development decisions

- Hermes is the executor, not the product designer.
- Requirements live in the repository.
- Hermes should continue task-to-task without repeated prompts.
- Work is reviewed through Git commits and a final Pull Request.
- The agent must not merge its own Pull Request.
- Deployment happens from the repository after human review/merge.

## V1 technical execution defaults

These defaults are adopted for the first autonomous portfolio experiment so Hermes can execute without stopping for routine stack decisions.

- Framework: Next.js with App Router
- Language: TypeScript, strict mode
- Styling: Tailwind CSS
- Package manager: npm
- Site shape: static/client-rendered portfolio; no server API required
- Tests: Vitest + React Testing Library for meaningful UI behaviour
- CI: GitHub Actions
- Deployment target: Vercel through Git integration after merge to `main`
- Working branch: `hermes/portfolio-v1`

Do not pin arbitrary old framework versions. Use mutually compatible stable versions available when the project is scaffolded and commit the lockfile.

## Not in scope for V1

- Backend/API
- Database
- CMS
- Authentication
- Admin panel
- Blog
- Analytics dashboard
- Contact form backend
- Project case-study pages
- Complex animation framework
- Theme beyond dark/light
- Languages beyond EN and PT-BR

## Change policy

If the human later changes a confirmed decision, update this file first and then update any affected source-of-truth documents before implementation continues.
