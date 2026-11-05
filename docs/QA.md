# Portfolio quality assurance

## Scope and method

Test the production build (`next build` / `next start`), not the development server. The core gate is `npm run verify`. Run browser checks with `npx playwright install chromium` followed by `npm run test:e2e` after a build.

Hermes's built-in browser adapter could not locate its browser even after installation. Direct Playwright Chromium automation worked and produced real screenshots and assertions; no visual checks were simulated.

## Verified browser matrix

- Viewports: 320, 390, 768, 1440 and 1920 CSS pixels wide.
- Every viewport tested with English and PT-BR, in dark and light themes: 20 combinations.
- Seven additional checks cover keyboard skip navigation, keyboard controls/focus/persistence, saved-theme application before hydration, invalid saved preferences, denied browser storage, and reduced motion with 200% text sizing at both 320px and 390px.
- Result: 27 passed, zero failed/skipped/flaky tests.
- No horizontal overflow at the tested widths or during the enlarged-text check.
- Exactly two project entries; approved hero, experience and section structure; no obsolete third project or visible placeholder tokens.
- Header controls have at least 44 × 44 CSS-pixel hit areas. Visible focus and keyboard operation verified.
- Axe WCAG 2 A/AA, 2.1 A/AA and 2.2 AA checks report no violations in every matrix combination. This is automated evidence, not a claim of exhaustive accessibility certification.
- Normal navigation and interactions produced no captured browser console errors or page exceptions.
- The stored light theme applies before external client scripts execute; English/dark defaults do not follow the browser's light system preference.
- Language and theme persist through reloads; blocked storage does not disable controls.

## Visual inspection

Full-page screenshots are generated in `.qa/screenshots/`; `.qa/browser-results.json` records machine-readable results. These generated local artifacts are ignored by Git. CI uploads them as review artifacts.

Inspected representative desktop English/dark, desktop PT-BR/light, tablet PT-BR/dark and small-mobile PT-BR/light captures against `references/portfolio-design.png`. The implementation retains the left-aligned typographic hierarchy, generous spacing, thin dividers, indexed project rows and minimal header/footer. Small-screen controls and metadata wrap without clipping. Light mode preserves the dark-mode layout, as required by `DESIGN.md` rather than the older alternative composition in the image.

Only `CONTENT.md` supplies editorial copy: ReturnFlow and Oz Radar, correct technologies, approved experience dates and short About text. System sans/mono fallbacks avoid remote font dependencies and committed font binaries.

## Findings resolved

- **Accessibility — language labels:** browser axe checks caught that accessible names did not include visible `EN`/`PT` labels. Names now include the abbreviation and full language name; all matrix accessibility checks pass.
- **Test isolation:** the skip-link scenario preserves a `#content` fragment on reload. Separated it from the fresh-page tab-order test rather than changing correct browser focus behaviour.
- **Enlarged text:** the independent reviewer reproduced project metadata overflow at 320px with 200% PT-BR text (381px document width). The regression test failed before the fix. Allowing the project title/metadata flex group to wrap resolves the overflow without clipping or shrinking text; both enlarged-text cases now pass.

## Automated quality gate

`npm ci --strict-peer-deps`, `npm run verify`, `npm run test:e2e`, `npm audit` and `npm audit --omit=dev` pass. The verification gate includes zero-warning ESLint, strict TypeScript, 42 Vitest tests and a static production build. Full and production-only audits report zero vulnerabilities. The lint-toolchain tests also prove invalid JavaScript, TypeScript and React Hooks code is rejected after the narrowly scoped dependency overrides.

## External destinations still awaiting owner input

The repository URLs for ReturnFlow and Oz Radar, GitHub profile, LinkedIn profile and email address remain `null` in `src/content/portfolio.ts`. They are rendered as non-interactive text/indicators, not fabricated URLs. Unit tests supply isolated fixture destinations to verify safe new-tab attributes and mailto handling. No fixture URL is runtime portfolio content.

## Limitations

Browser automation uses Chromium; Firefox, WebKit, real touch hardware and screen-reader speech output were not independently tested. Production hosting integration and deployment require human review/merge and are outside the autonomous delivery boundary.

Copyright is calculated centrally during static prerendering in `src/app/page.tsx`. Rebuild after a calendar-year rollover to refresh it; there is no scheduled server-side revalidation or timer.
