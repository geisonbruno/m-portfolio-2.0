# Design Specification

## Reference

Primary visual reference:

`/references/portfolio-design.png`

Use the image for visual hierarchy, spacing, composition, typography balance, dividers, project-row treatment and overall mood.

Do **not** use the image as a source of truth for copy or number of projects. `CONTENT.md` overrides all visible text in the image.

## Direction

The portfolio should feel:

- minimal;
- dark-first;
- typographic;
- editorial;
- technical without looking like a terminal gimmick;
- spacious;
- restrained.

Avoid a generic SaaS/dashboard aesthetic.

## Theme

### Dark

Default.

Use:

- near-black/off-black page background;
- high-contrast primary text;
- muted secondary text;
- subtle borders/dividers.

### Light

Must preserve the same hierarchy and layout rather than becoming a separate redesign.

Use:

- warm/neutral near-white background;
- near-black primary text;
- muted secondary text;
- subtle borders/dividers.

### Theme switch

- Compact control in the header.
- Dark on first visit when no saved preference exists.
- Persist explicit user choice in local storage.
- Prevent an obvious incorrect-theme flash where reasonably possible.

## Typography

Direction:

- Clean sans-serif for large statements and body copy.
- Restrained monospace for labels, metadata, indexes and small interface elements.

Preferred family direction:

- Sans: Geist / compatible clean fallback
- Mono: Departure Mono / compatible monospace fallback

Do not commit custom font binary files just to force the mockup. Use legally/reliably available loading methods or fallbacks.

## Layout

### Desktop

- Wide content area with generous outer margins.
- Strong left alignment.
- Large hero statement.
- Thin section dividers.
- Project rows use horizontal space deliberately.
- Dates/actions can align toward the right edge.
- Avoid card grids unless responsive constraints require a simple stacked interpretation.

### Mobile

- Preserve hierarchy, not exact desktop geometry.
- Stack metadata naturally.
- Keep project title, description and technologies easy to scan.
- Controls must remain easy to tap.
- No clipped text.
- No horizontal scrolling.
- Do not shrink typography to unreadable sizes just to preserve desktop lines.

## Header

Left:

- `GEISON BRUNO` or the approved name treatment derived from `CONTENT.md`.

Right:

- language control;
- theme control.

Keep it light. Do not add a hamburger menu unless implementation genuinely requires one; the one-page V1 should not require it.

## Hero

- Small intro above the main phrase.
- Main phrase is the dominant visual element.
- Location is secondary/muted.
- Preserve deliberate line breaks where they improve the composition, but allow responsive wrapping.

## Section labels

Use small uppercase/mono labels with clear separation from content.

Required sections:

- SELECTED PROJECTS / PROJETOS SELECIONADOS
- EXPERIENCE / EXPERIÊNCIA
- ABOUT / SOBRE

## Project rows

For each of the two projects:

- number on the left or leading edge;
- project name prominent;
- concise description;
- technology tags or restrained inline labels;
- year and external-link affordance;
- thin separator.

Do not visually add a third placeholder project.

Project links must clearly behave as external links.

## Experience

Simple typographic row/block.

Do not turn experience into a timeline with decorative nodes.

## About

Short readable paragraphs.

Do not add portrait photography unless a future product decision explicitly adds one.

## Footer

Minimal social/contact row and copyright.

## Motion

Motion is optional and must be subtle.

Allowed:

- short opacity/transform feedback;
- understated hover transitions;
- theme transition if it does not cause visual noise.

Avoid:

- page-load spectacle;
- parallax;
- cursor effects;
- large motion libraries for trivial effects.

Respect reduced-motion preferences.

## Visual anti-patterns

Do not add:

- gradients;
- glassmorphism;
- neon glow;
- heavy shadows;
- giant rounded cards everywhere;
- decorative charts;
- fake terminal commands;
- excessive icons;
- stock imagery;
- skill meters;
- animated background particles.
