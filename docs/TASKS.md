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
- [ ] Commit projects separately.

## Phase 7 — Experience

- [ ] Implement Flux Tecnologia experience.
- [ ] Implement role, period and translated description.
- [ ] Match the restrained visual treatment.
- [ ] Commit experience separately.

## Phase 8 — About and footer

- [ ] Implement About section in EN/PT-BR.
- [ ] Implement social/contact labels.
- [ ] Render only resolved social/contact destinations as active links.
- [ ] Implement copyright from a central/current-year value.
- [ ] Commit About/footer separately.

## Phase 9 — Responsive and accessibility pass

- [ ] Verify small mobile layout.
- [ ] Verify tablet layout.
- [ ] Verify desktop layout.
- [ ] Remove horizontal overflow.
- [ ] Verify readable type sizing.
- [ ] Verify keyboard navigation.
- [ ] Verify visible focus states.
- [ ] Verify semantic heading/landmark structure.
- [ ] Respect reduced-motion preferences.
- [ ] Commit responsive/accessibility fixes separately.

## Phase 10 — Automated quality

- [ ] Ensure language tests pass.
- [ ] Ensure theme tests pass.
- [ ] Ensure project-count test passes.
- [ ] Ensure unresolved-link safety test passes.
- [ ] Ensure lint passes.
- [ ] Ensure typecheck passes.
- [ ] Ensure tests pass.
- [ ] Ensure production build passes.
- [ ] Ensure `npm run verify` passes from a clean install state where practical.

## Phase 11 — CI

- [ ] Add GitHub Actions CI workflow.
- [ ] CI uses `npm ci`.
- [ ] CI runs `npm run verify`.
- [ ] CI triggers on PRs to `main` and pushes to `main`.
- [ ] Commit CI separately.

## Phase 12 — Final design QA

- [ ] Compare implementation against `/references/portfolio-design.png`.
- [ ] Confirm layout and typography preserve the intended visual direction.
- [ ] Confirm `CONTENT.md` overrides obsolete text visible in the reference.
- [ ] Confirm no third project exists.
- [ ] Confirm dark theme is the default.
- [ ] Confirm light theme works.
- [ ] Confirm EN is the default.
- [ ] Confirm PT-BR works.
- [ ] Confirm no visible placeholder strings exist.
- [ ] Confirm no secrets were added.

If browser/screenshot tooling is available, use it for the visual pass. If it is unavailable, do not invent results; document that limitation in the PR.

## Phase 13 — Delivery

- [ ] Run final `npm run verify`.
- [ ] Review `git diff` and working tree.
- [ ] Ensure all intended work is committed.
- [ ] Push `hermes/portfolio-v1` if remote access is available.
- [ ] Open a Pull Request to `main` if GitHub access is available.
- [ ] PR describes implementation, commits/checks, and unresolved external-link placeholders.
- [ ] Do not merge the PR.
- [ ] Produce final completion report for the human reviewer.
