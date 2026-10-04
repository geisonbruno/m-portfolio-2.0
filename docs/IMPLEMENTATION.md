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
