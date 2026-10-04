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
- [ ] Commit the baseline separately.

## Phase 2 — Content/data foundation

- [ ] Create a typed central content model from `docs/CONTENT.md`.
- [ ] Represent EN and PT-BR content centrally.
- [ ] Represent exactly two projects: ReturnFlow and Oz Radar.
- [ ] Handle unresolved external URLs safely without fake links.
- [ ] Add tests for content/project count where useful.
- [ ] Commit content/data foundation separately.

## Phase 3 — Visual foundation

- [ ] Implement global dark/light design tokens.
- [ ] Implement typography direction from `docs/DESIGN.md`.
- [ ] Implement page container, spacing and divider system.
- [ ] Implement responsive base styles.
- [ ] Confirm no default template styling remains.
- [ ] Commit visual foundation separately.

## Phase 4 — Header and controls

- [ ] Build minimal header.
- [ ] Add EN/PT language switch.
- [ ] English is default with no saved preference.
- [ ] Persist language selection locally.
- [ ] Add dark/light theme switch.
- [ ] Dark is default with no saved preference.
- [ ] Persist theme selection locally.
- [ ] Add accessible names and keyboard behaviour.
- [ ] Add/update interaction tests.
- [ ] Commit header/controls separately.

## Phase 5 — Hero

- [ ] Implement approved intro.
- [ ] Implement approved main phrase.
- [ ] Implement location line.
- [ ] Match reference hierarchy without copying obsolete copy.
- [ ] Verify EN and PT-BR.
- [ ] Commit hero separately.

## Phase 6 — Selected Projects

- [ ] Implement section title.
- [ ] Implement ReturnFlow row.
- [ ] Implement Oz Radar row.
- [ ] Render technology labels/tags.
- [ ] Render years and external-link affordances.
- [ ] Open valid project GitHub URLs in new tabs.
- [ ] Never render placeholder URLs as links.
- [ ] Confirm there are exactly two projects.
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
