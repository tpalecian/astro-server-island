# Cursor rules index

Suggested reading order: overview → tooling → TS style → design system → CMS → website architecture → behaviour → components.

| File | Always / globs | Topic |
|------|----------------|--------|
| `project-overview.mdc` | Always | Monorepo, packages, aliases, docs layout |
| `planning.mdc` | Always | Documentation SEL format |
| `repo-tooling.mdc` | Config globs + agent-requested | pnpm, Turbo, Prettier, ESLint, Husky |
| `functional-style.mdc` | `packages/**/*.ts`, `apps/**/*.ts`, `apps/**/*.astro` | Pure functions, immutability |
| `design-system.mdc` | Astro + design-system CSS globs | Tokens, Tailwind, class grouping |
| `service-dato.mdc` | `packages/service-dato/**` | Dato CMS, getters, codegen |
| `website-architecture.mdc` | `apps/website/src/**/*.astro` | Containers, wrappers, core UI boundaries |
| `website-behaviour.mdc` | Website + `packages/ui` `*.astro` | Server → islands → JS → Alpine |
| `components.mdc` | Website + ui + devtools Astro | UI patterns, Figma, scripts |

Companion: root **`AGENTS.md`** (quick table + key constraints).
