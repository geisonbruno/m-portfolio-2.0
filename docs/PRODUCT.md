# Product Specification

## Product

Personal software-engineering portfolio for Geison Bruno.

## Goal

Create a minimal personal website that communicates who Geison is, shows selected real projects and experience, and gives visitors direct paths to GitHub, LinkedIn and email.

The site should feel intentional and complete without requiring continuous content updates.

## Primary audience

- Software engineering recruiters
- Engineering managers
- Developers and technical collaborators
- People arriving from GitHub or LinkedIn

## Product principles

1. Short beats exhaustive.
2. Real work beats generic portfolio filler.
3. Clear typography beats decorative UI.
4. Direct GitHub links beat internal case-study pages.
5. The portfolio should be maintainable by editing central content, not by rewriting components.
6. Responsive behaviour is part of the product, not a later enhancement.
7. Accessibility and performance are baseline requirements.

## Information architecture

Single page, in this order:

1. Header
2. Hero
3. Selected Projects
4. Experience
5. About
6. Footer/social links

## Header

Should identify the owner and expose compact controls for:

- EN / PT-BR
- dark / light theme

Do not create a large navigation system for a one-page site.

## Hero

Communicates:

- short introduction;
- main phrase;
- Sydney location.

Exact wording is defined in `CONTENT.md`.

## Selected Projects

Contains exactly two projects:

- ReturnFlow
- Oz Radar

Each project should expose:

- sequence number;
- project name;
- year;
- short description;
- technology list;
- external GitHub action.

The whole project row/card may be clickable when accessible, but the destination must be the repository itself and open in a new tab.

## Experience

One concise experience entry:

- Flux Tecnologia
- Software Engineer
- Oct 2023 — Nov 2025

Exact description is defined in `CONTENT.md`.

## About

Short copy only. Do not turn this into a long biography.

Exact text is defined in `CONTENT.md`.

## Footer

Contains social/contact actions whose values are defined in `CONTENT.md`.

## Internationalisation

Languages:

- `en` — default
- `pt-BR`

The switch should update all user-facing content represented in `CONTENT.md`.

Do not introduce a heavy internationalisation framework unless the implementation genuinely needs it. This is a small two-language one-page site.

## Theme

- Default: dark
- Alternative: light
- Persist the explicit user choice locally.
- Do not default to system theme when there is no saved preference; default to dark.

## Maintenance expectation

Future content changes should be possible through a small central content/data layer.

Avoid scattering literal portfolio copy through many components.

## Success

A visitor should be able to understand the owner, see the two selected projects, read the experience/about copy and reach external profiles in under a minute.
