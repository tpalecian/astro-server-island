# Agent guide

Quick reference for AI agents. **Full rule index:** `.cursor/rules/README.md` (same table, paths under `.cursor/rules/*.mdc`).

## Cursor rules

| Rule file | When it applies | Purpose |
|-----------|-----------------|---------|
| `project-overview.mdc` | Always | Monorepo structure, packages, docs layout, `*-container` convention |
| `planning.mdc` | Always | Documentation & planning (SEL format) |
| `repo-tooling.mdc` | Config globs + agent-requested | pnpm, Turbo, Prettier, ESLint, Husky, codegen |
| `functional-style.mdc` | `packages/**/*.ts`, `apps/**/*.ts`, `apps/**/*.astro` | Pure functions, immutability, composition |
| `design-system.mdc` | Website + ui + devtools `*.astro`, `packages/design-system/**/*.css` | Tokens, Tailwind class grouping, breakpoints |
| `service-dato.mdc` | `packages/service-dato/**` | Dato getters, GQL, codegen, `@rotate/cms` API |
| `website-architecture.mdc` | `apps/website/src/**/*.astro` | `*-container`, wrappers, `packages/ui` boundaries |
| `website-behaviour.mdc` | `apps/website/src/**/*.astro`, `packages/ui/**/*.astro` | Server → islands → minimal JS → Alpine |
| `components.mdc` | Website + ui + devtools `*.astro` | UI patterns, Figma, how to add scripts |

## Start here

- **Implementation handover:** `documentation/00-start-here/handover-next-steps.md`
- **Current tickets:** `documentation/03-implementation/03-tickets/`
- **Solution design:** `documentation/02-solution/`

## Key constraints

- **File names:** Lowercase, kebab-case (e.g. `my-component.astro`).
- **CMS:** Import from `@rotate/cms` only. All Dato logic in `packages/service-dato` (`service-dato.mdc`).
- **Website aliases:** `@/`, `@rotate/cms`, `@rotate/ui/`, `@rotate/utilities/`, `@rotate/devtools/`, `@rotate/design-system/` — keep `apps/website/tsconfig.json` and `astro.config.mjs` in sync (`project-overview.mdc`).
- **Data binding:** Use **`*-container`** folders under `apps/website/src/components/` (`website-architecture.mdc`). Containers fetch; `packages/ui` renders.
- **Behaviour:** Escalate server → Server Island → minimal JS → Alpine (`website-behaviour.mdc`). Do not add client JS before server options are exhausted.
- **Code style:** Functional — pure functions, immutability, composition (`functional-style.mdc`). No mutation, no classes.
- **Comments:** Prefer clear code; **JSDoc on heavy / non-obvious functions only** — see **Comments** in `functional-style.mdc` (avoid noisy inline comments).
- **Styling:** Design-system tokens; **breakpoints:** `tablet:` and `desktop:` — never `md:` or `lg:`. **Tailwind:** `design-system.mdc` **Class grouping** for `class` / `class:list` (especially 6+ utilities).
- **Tooling:** pnpm + Turbo + shared `@build/*` configs — `repo-tooling.mdc`.
- **Figma:** Fetch component variables; use provided SVGs — do not hand-trace.
- **packages/ui vs website:** Core UI in `packages/ui`. Website = layout, `*-container`, thin wrappers, binding only.
