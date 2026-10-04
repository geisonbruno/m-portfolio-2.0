# Acceptance Criteria

The implementation is complete only when all applicable criteria below are true.

## Scope

- [ ] The product is one page.
- [ ] The page contains Hero, Selected Projects, Experience, About and Footer.
- [ ] No blog exists.
- [ ] No skills section exists.
- [ ] No internal project detail pages exist.
- [ ] No fake portfolio content exists.

## Content

- [ ] Visible copy matches `docs/CONTENT.md`.
- [ ] ReturnFlow is present.
- [ ] Oz Radar is present.
- [ ] Exactly two projects render.
- [ ] `Personal Utilities` does not render.
- [ ] Flux Tecnologia experience matches approved content.
- [ ] About copy matches approved content.
- [ ] No visible `[ADD ...]` or other placeholder token is rendered.

## Language

- [ ] First visit defaults to English when there is no stored preference.
- [ ] User can switch to PT-BR.
- [ ] All translated portfolio copy updates coherently.
- [ ] Language preference persists across reloads.
- [ ] The control is keyboard accessible.

## Theme

- [ ] First visit defaults to dark when there is no stored preference.
- [ ] User can switch to light.
- [ ] Theme preference persists across reloads.
- [ ] Both themes preserve visual hierarchy and readability.
- [ ] The control is keyboard accessible.

## Design

- [ ] Overall composition follows `references/portfolio-design.png`.
- [ ] The site is minimal and typographic.
- [ ] Spacing is generous rather than cramped.
- [ ] Thin/subtle dividers are used consistently.
- [ ] Project treatment matches the intended list/row aesthetic.
- [ ] No gradients, glassmorphism or heavy shadows were introduced.
- [ ] No dashboard-style decorative UI was introduced.

## Responsive behaviour

- [ ] No horizontal overflow at mobile widths.
- [ ] Hero typography remains readable on mobile.
- [ ] Project metadata stacks/reflows without clipping.
- [ ] Controls remain usable on small screens.
- [ ] Desktop layout uses available width deliberately.
- [ ] Important content does not depend on hover.

## External links

- [ ] Resolved project links open GitHub in a new tab.
- [ ] Resolved external links use safe `rel` attributes.
- [ ] Unresolved placeholders never become clickable fake URLs.
- [ ] Missing external links are listed clearly in the final PR/report.

## Accessibility

- [ ] Semantic heading hierarchy is sensible.
- [ ] Main page landmarks are semantic.
- [ ] Interactive controls have accessible names.
- [ ] Keyboard focus is visible.
- [ ] Text/background contrast is reasonable in both themes.
- [ ] Reduced-motion preference is respected when motion exists.

## Engineering

- [ ] TypeScript strict mode is enabled.
- [ ] Content is centralised rather than duplicated through components.
- [ ] Dependencies are restrained.
- [ ] No secrets are committed.
- [ ] `package-lock.json` is committed.
- [ ] `npm run lint` passes.
- [ ] `npm run typecheck` passes.
- [ ] `npm run test` passes.
- [ ] `npm run build` passes.
- [ ] `npm run verify` passes.

## CI / Delivery

- [ ] GitHub Actions CI exists.
- [ ] CI runs `npm ci`.
- [ ] CI runs `npm run verify`.
- [ ] Work is on `hermes/portfolio-v1`.
- [ ] Changes are split into small, understandable commits.
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
