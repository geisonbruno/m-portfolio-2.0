# Autonomous Implementation Tasks

Hermes owns this checklist during implementation.

Mark an item complete only after the implementation exists and relevant checks pass.

## Phase 0 — Repository discovery

- [x] Inspect the repository and preserve any legitimate existing work.
- [x] Confirm/create branch `hermes/portfolio-v1`.
- [x] Read every source-of-truth file referenced by `AGENTS.md`.
- [x] Inspect `/references/portfolio-design.png`.
- [x] Record any pre-existing implementation constraints before changing code.

## Phase 1 — Scaffold and engineering baseline

- [x] Scaffold the Next.js + TypeScript + Tailwind application if it does not already exist.
- [x] Enable/confirm TypeScript strict mode.
- [x] Configure linting.
- [x] Configure Vitest + React Testing Library.
- [x] Add `lint`, `typecheck`, `test`, `build` and `verify` npm scripts.
- [x] Confirm `npm run verify` is operational.
- [x] Commit the baseline separately.

## Phase 2 — Content/data foundation

- [x] Create a typed central content model from `docs/CONTENT.md`.
- [x] Represent EN and PT-BR content centrally.
- [x] Represent exactly two projects: ReturnFlow and Oz Radar.
- [x] Handle unresolved external URLs safely without fake links.
- [x] Add tests for content/project count where useful.
- [x] Commit content/data foundation separately.

## Phase 3 — Visual foundation

- [x] Implement global dark/light design tokens.
- [x] Implement typography direction from `docs/DESIGN.md`.
- [x] Implement page container, spacing and divider system.
- [x] Implement responsive base styles.
- [x] Confirm no default template styling remains.
- [x] Commit visual foundation separately.

## Phase 4 — Header and controls

- [x] Build minimal header.
- [x] Add EN/PT language switch.
- [x] English is default with no saved preference.
- [x] Persist language selection locally.
- [x] Add dark/light theme switch.
- [x] Dark is default with no saved preference.
- [x] Persist theme selection locally.
- [x] Add accessible names and keyboard behaviour.
- [x] Add/update interaction tests.
- [x] Commit header/controls separately.

## Phase 5 — Hero

- [x] Implement approved intro.
- [x] Implement approved main phrase.
- [x] Implement location line.
- [x] Match reference hierarchy without copying obsolete copy.
- [x] Verify EN and PT-BR.
- [x] Commit hero separately.

## Phase 6 — Selected Projects

- [x] Implement section title.
- [x] Implement ReturnFlow row.
- [x] Implement Oz Radar row.
- [x] Render technology labels/tags.
- [x] Render years and external-link affordances.
- [x] Open valid project GitHub URLs in new tabs.
- [x] Never render placeholder URLs as links.
- [x] Confirm there are exactly two projects.
- [x] Commit projects separately.

## Phase 7 — Experience

- [x] Implement Flux Tecnologia experience.
- [x] Implement role, period and translated description.
- [x] Match the restrained visual treatment.
- [x] Commit experience separately.

## Phase 8 — About and footer

- [x] Implement About section in EN/PT-BR.
- [x] Implement social/contact labels.
- [x] Render only resolved social/contact destinations as active links.
- [x] Implement copyright from a central/current-year value.
- [x] Commit About/footer separately.

## Phase 9 — Responsive and accessibility pass

- [x] Verify small mobile layout.
- [x] Verify tablet layout.
- [x] Verify desktop layout.
- [x] Remove horizontal overflow.
- [x] Verify readable type sizing.
- [x] Verify keyboard navigation.
- [x] Verify visible focus states.
- [x] Verify semantic heading/landmark structure.
- [x] Respect reduced-motion preferences.
- [x] Commit responsive/accessibility fixes separately.

## Phase 10 — Automated quality

- [x] Ensure language tests pass.
- [x] Ensure theme tests pass.
- [x] Ensure project-count test passes.
- [x] Ensure unresolved-link safety test passes.
- [x] Ensure lint passes.
- [x] Ensure typecheck passes.
- [x] Ensure tests pass.
- [x] Ensure production build passes.
- [x] Ensure `npm run verify` passes from a clean install state where practical.

## Phase 11 — CI

- [x] Add GitHub Actions CI workflow.
- [x] CI uses `npm ci`.
- [x] CI runs `npm run verify`.
- [x] CI triggers on PRs to `main` and pushes to `main`.
- [x] Commit CI separately.

## Phase 12 — Final design QA

- [x] Compare implementation against `/references/portfolio-design.png`.
- [x] Confirm layout and typography preserve the intended visual direction.
- [x] Confirm `CONTENT.md` overrides obsolete text visible in the reference.
- [x] Confirm no third project exists.
- [x] Confirm dark theme is the default.
- [x] Confirm light theme works.
- [x] Confirm EN is the default.
- [x] Confirm PT-BR works.
- [x] Confirm no visible placeholder strings exist.
- [x] Confirm no secrets were added.

If browser/screenshot tooling is available, use it for the visual pass. If it is unavailable, do not invent results; document that limitation in the PR.

## Phase 13 — Delivery

- [x] Run final `npm run verify`.
- [x] Review `git diff` and working tree.
- [x] Ensure all intended work is committed.
- [x] Push `hermes/portfolio-v1` if remote access is available.
- [x] Open a Pull Request to `main` if GitHub access is available.
- [x] PR describes implementation, commits/checks, and unresolved external-link placeholders.
- [x] Do not merge the PR.
- [x] Produce final completion report for the human reviewer.
