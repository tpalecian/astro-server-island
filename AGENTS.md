# Agent Guide

Quick reference for AI agents working on this codebase.

## Cursor Rules

| Rule | When it applies | Purpose |
|------|-----------------|---------|
| `project-overview.mdc` | Always | Monorepo structure, packages, docs layout |
| `planning.mdc` | Always | Documentation & planning (SEL format) |
| `architecture.mdc` | `apps/website/src/**/*.astro` | Strict rules: containers, modules, base components |
| `behaviour-escalation.mdc` | `apps/website/src/**/*.astro` | When to use server, islands, JS, or Alpine |
| `components.mdc` | `apps/website/src/**/*.astro`, `packages/devtools/src/**/*.astro` | Design system, styling, component patterns |
| `functional-style.mdc` | `packages/**/*.ts`, `apps/**/*.ts`, `apps/**/*.astro` | Pure functions, immutability, composition |

## Start here

- **Implementation handover:** `documentation/00-start-here/handover-next-steps.md`
- **Current tickets:** `documentation/03-implementation/03-tickets/`
- **Solution design:** `documentation/02-solution/`

## Key constraints

- **CMS:** Import from `@rotate/cms` only. All Dato logic in `packages/service-dato`.
- **Components:** Module components receive props only; containers fetch data. Zero-JS by default.
- **Behaviour:** Escalate server → Server Island → minimal JS → Alpine. Never introduce JS before server approaches are exhausted.
- **Code style:** Functional — pure functions, immutability, composition. No mutation, no classes.
- **Styling:** Use design-system tokens (`var(--color-*)`, typography utilities, spacing). No arbitrary values for design tokens.
- **Figma:** Fetch all component variables; ask for SVGs from Figma, never recreate them.
- **packages/ui vs website:** Core UI (buttons, NavLink, cards, etc.) in `packages/ui`. Website = layout, containers, modules, logic binding only. Follow behaviour-escalation.
