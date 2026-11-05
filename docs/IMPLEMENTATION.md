# Implementation notes

## Discovery baseline

- Started from clean `main` at `444ba47` (documentation and visual reference only).
- Created `hermes/portfolio-v1` before implementation; no existing application to preserve or migrate.
- Read `AGENTS.md` and every referenced source-of-truth document; inspected the reference image.
- The reference contains obsolete copy and a third project. Runtime copy follows `CONTENT.md`; only ReturnFlow and Oz Radar are permitted.
- GitHub remote is `geisonbruno/m-portfolio-2.0`; authenticated access is available. No existing PR for this branch was found.
- Local toolchain: Node 22.23.2 and npm 10.9.8. Dependencies will be selected from compatible stable registry releases, with a committed lockfile.
- All five external destinations are unresolved: ReturnFlow repository, Oz Radar repository, GitHub profile, LinkedIn profile and email. Do not infer these from repository ownership. Keep them centrally nullable and non-navigable until explicitly supplied.
- Use a small frontend-only Next.js App Router application, typed bilingual content, Tailwind/CSS variables, native controls and Vitest/React Testing Library. No backend, tracking, custom font binaries or hosting credentials.
- Production remains a human-review boundary: PR and CI, then human merge, then Vercel Git integration. No manual deployment.

## Engineering baseline

- Next.js 16.3.8, React 19.3.0, Tailwind 4.3.3 and Vitest 5 selected from stable registry releases.
- TypeScript 6.0.x respects typescript-eslint's `<6.1` peer constraint. Registry peer checks support ESLint 10.12.0 with `@eslint/js` 10.0.1, typescript-eslint 8.71.0 and eslint-plugin-react-hooks 7.1.1; globals 17.13.0 supplies browser and Node globals.
- The minimal flat ESLint configuration uses the JavaScript, TypeScript and React Hooks recommended presets instead of `eslint-config-next`; Next-specific preset rules are no longer included. eslint-plugin-jsx-a11y 6.10.2 declares support only through ESLint 9, so accessibility lint rules are not enabled with ESLint 10. Accessibility requirements still apply and must be verified through tests and review; no incompatible plugin is forced into the dependency tree.
- A fresh `npm ci --strict-peer-deps` and `npm run verify` passed: lint with zero warnings, strict typecheck, one Vitest landmark test and static production build. The landmark test was observed failing before implementation. In-memory lint probes also confirmed JavaScript and TypeScript errors, hook-order/dependency violations, valid JSX/TSX and generated-output ignores.
- Both full `npm audit` and `npm audit --omit=dev` report zero vulnerabilities after removing the `eslint-config-next` → `@next/eslint-plugin-next` → `fast-glob` → `micromatch` → `braces` chain for `GHSA-vfj7-8cjw-p6xm`. Next.js remains at 16.3.8; no overrides, package aliases, forced installs, legacy peer resolution or Next downgrade were used. Recheck the audit during delivery as advisories can change.

## Final quality and dependency hardening

- Delivery uses Next.js 16.4.5 and Vite 8.3.5 with the committed lockfile. These supersede the scaffold versions above.
- `GHSA-g3hv-75wg-m249` affected development-only `minimatch@10.2.6`. The exact installed ESLint, config-array and typescript-estree consumers do not enable the affected `optimizationLevel >= 2`, but the advisory is removed rather than suppressed.
- Narrow overrides install `minimatch@11.0.4` only for `eslint@10.14.0`, `@eslint/config-array@0.23.5` and `@typescript-eslint/typescript-estree@8.72.1`. An independent consumer/API review found these usages compatible; this is not a blanket assertion that v11 replaces v10 for all consumers. ESLint is pinned to `10.14.0` so its direct-dependency spec matches the override, as npm requires. Re-evaluate/remove these overrides when upgrading their exact consumers; do not widen them without another compatibility review.
- `npm ci --strict-peer-deps`, full `npm run verify`, all 27 production-browser tests, `npm audit` and `npm audit --omit=dev` pass. Both audits report zero vulnerabilities. Four real ESLint API regression tests confirm the JavaScript, TypeScript and Hooks rules still reject violations, valid TSX passes and generated files are ignored. The shared unit-test setup applies DOM initialization/cleanup only in DOM environments.
- No force flags, legacy peer resolution, audit suppression or production hosting credentials are used. See `docs/QA.md` for browser coverage, review findings and maintenance limitations.
