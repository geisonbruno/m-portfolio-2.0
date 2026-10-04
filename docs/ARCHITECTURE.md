# Technical Architecture

## V1 architecture

Use a small frontend-only architecture.

### Stack

- Next.js — App Router
- React
- TypeScript with strict mode
- Tailwind CSS
- npm

Use mutually compatible stable versions at scaffold time and commit `package-lock.json`.

## Runtime shape

No backend is needed.

The portfolio should be deployable as a normal Next.js site on Vercel.

Avoid server-only features unless there is a concrete requirement.

## Suggested repository structure

The exact implementation may vary slightly when justified, but keep it simple.

```text
.
├── AGENTS.md
├── docs/
├── references/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   ├── About.tsx
│   │   └── Footer.tsx
│   ├── content/
│   │   └── portfolio.ts
│   └── lib/
│       ├── locale.ts
│       └── theme.ts
├── tests/
├── .github/
│   └── workflows/
│       └── ci.yml
├── package.json
└── package-lock.json
```

Do not create abstraction layers without a real need.

## Content model

All user-facing portfolio content should be centralised in a typed structure.

Example direction:

```ts
type Locale = "en" | "pt-BR";

type LocalizedText = Record<Locale, string>;

type Project = {
  number: string;
  name: string;
  year: string;
  description: LocalizedText;
  technologies: string[];
  githubUrl: string | null;
};
```

`docs/CONTENT.md` remains the editorial source of truth.

The TypeScript content model is its runtime representation.

## Language state

Requirements:

- default `en`;
- allow `pt-BR`;
- persist user selection locally;
- update all translatable copy consistently.

A small React context/hook or similarly simple state solution is sufficient.

Do not add a large i18n dependency for this V1 unless a concrete implementation problem justifies it.

## Theme state

Requirements:

- default `dark`;
- allow `light`;
- persist explicit selection;
- apply theme at document/root level;
- avoid an obvious theme flash where practical.

Use CSS custom properties and/or Tailwind dark-mode support.

## External links

Open project GitHub links in a new tab using safe external-link attributes.

Unresolved URLs from `CONTENT.md` must be represented centrally as `null`/empty configuration, not fake links.

The UI must not navigate to placeholder strings.

## Testing

Use Vitest + React Testing Library for meaningful behaviour.

At minimum test:

- English is the default language;
- language switch changes representative visible text;
- language choice can be persisted/restored;
- dark is the default theme;
- theme switch changes theme;
- theme choice can be persisted/restored;
- exactly two project entries render;
- unresolved external links do not render fake navigable URLs.

Do not chase superficial coverage percentages.

## Quality scripts

`package.json` must expose:

```json
{
  "scripts": {
    "lint": "...",
    "typecheck": "...",
    "test": "...",
    "build": "...",
    "verify": "..."
  }
}
```

`npm run verify` must execute all four checks in a fail-fast sequence.

## CI

Create `.github/workflows/ci.yml`.

Trigger on:

- pull requests targeting `main`;
- pushes to `main`.

CI should:

1. checkout;
2. set up supported Node;
3. `npm ci`;
4. `npm run verify`.

Use dependency caching when straightforward.

## Deployment

Target Vercel through Git integration.

The repository should not contain hosting credentials.

Expected production flow:

```text
Hermes branch
  -> Pull Request
  -> CI passes
  -> human review
  -> merge to main
  -> hosting integration deploys production
```

Do not build custom deployment scripts for V1 unless repository/hosting setup later requires them.

## Security

- No secrets in Git.
- No `.env` values are required for core V1 functionality.
- External links must use safe attributes.
- Avoid unnecessary third-party scripts.
- Do not introduce analytics/tracking by default.

## Performance

Keep the site lightweight.

- No unnecessary client-side libraries.
- No large image assets beyond what is actually required.
- No animation library unless justified.
- Avoid hydration of purely static sections when a simpler implementation is available.

## Accessibility

Use semantic landmarks and headings.

Controls must have accessible names.

Theme/language switches must be keyboard operable.

External-link behaviour should be understandable.

Ensure visible focus states and sufficient contrast.
