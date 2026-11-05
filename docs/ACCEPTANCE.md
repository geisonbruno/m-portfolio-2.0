# Acceptance Criteria

The implementation is complete only when all applicable criteria below are true.

## Scope

- [x] The product is one page.
- [x] The page contains Hero, Selected Projects, Experience, About and Footer.
- [x] No blog exists.
- [x] No skills section exists.
- [x] No internal project detail pages exist.
- [x] No fake portfolio content exists.

## Content

- [x] Visible copy matches `docs/CONTENT.md`.
- [x] ReturnFlow is present.
- [x] Oz Radar is present.
- [x] Exactly two projects render.
- [x] `Personal Utilities` does not render.
- [x] Flux Tecnologia experience matches approved content.
- [x] About copy matches approved content.
- [x] No visible `[ADD ...]` or other placeholder token is rendered.

## Language

- [x] First visit defaults to English when there is no stored preference.
- [x] User can switch to PT-BR.
- [x] All translated portfolio copy updates coherently.
- [x] Language preference persists across reloads.
- [x] The control is keyboard accessible.

## Theme

- [x] First visit defaults to dark when there is no stored preference.
- [x] User can switch to light.
- [x] Theme preference persists across reloads.
- [x] Both themes preserve visual hierarchy and readability.
- [x] The control is keyboard accessible.

## Design

- [x] Overall composition follows `references/portfolio-design.png`.
- [x] The site is minimal and typographic.
- [x] Spacing is generous rather than cramped.
- [x] Thin/subtle dividers are used consistently.
- [x] Project treatment matches the intended list/row aesthetic.
- [x] No gradients, glassmorphism or heavy shadows were introduced.
- [x] No dashboard-style decorative UI was introduced.

## Responsive behaviour

- [x] No horizontal overflow at mobile widths.
- [x] Hero typography remains readable on mobile.
- [x] Project metadata stacks/reflows without clipping.
- [x] Controls remain usable on small screens.
- [x] Desktop layout uses available width deliberately.
- [x] Important content does not depend on hover.

## External links

- [x] Resolved project links open GitHub in a new tab.
- [x] Resolved external links use safe `rel` attributes.
- [x] Unresolved placeholders never become clickable fake URLs.
- [ ] Missing external links are listed clearly in the final PR/report.

## Accessibility

- [x] Semantic heading hierarchy is sensible.
- [x] Main page landmarks are semantic.
- [x] Interactive controls have accessible names.
- [x] Keyboard focus is visible.
- [x] Text/background contrast is reasonable in both themes.
- [x] Reduced-motion preference is respected when motion exists.

## Engineering

- [x] TypeScript strict mode is enabled.
- [x] Content is centralised rather than duplicated through components.
- [x] Dependencies are restrained.
- [x] No secrets are committed.
- [x] `package-lock.json` is committed.
- [x] `npm run lint` passes.
- [x] `npm run typecheck` passes.
- [x] `npm run test` passes.
- [x] `npm run build` passes.
- [x] `npm run verify` passes.

## CI / Delivery

- [x] GitHub Actions CI exists.
- [x] CI runs `npm ci`.
- [x] CI runs `npm run verify`.
- [x] Work is on `hermes/portfolio-v1`.
- [x] Changes are split into small, understandable commits.
- [ ] Branch is pushed when remote access is available.
- [ ] Pull Request to `main` is opened when GitHub access is available.
- [ ] Agent does not merge its own Pull Request.

## Human review boundary

Production is intentionally outside the autonomous-agent completion boundary.

The expected final state is:

```text
implementation complete
        ↓
verification passes
        ↓
Pull Request ready
        ↓
human review
        ↓
human merge
        ↓
production deployment through Git integration
```
