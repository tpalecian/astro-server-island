---
title: Workstream B — app alias and one page + module (homepage)
phase: implementation
status: completed
owner: solutions-engineering
last_updated: 2026-03-21
depends_on: []
related_docs:
  - 02-solution/cms-service-pattern-and-dato-centralisation.md
tags: [implementation, workstream, app-shell]
---

# Workstream B — app alias and one page + module (homepage)

**Ticket:** `03-tickets/b-app-container.md` (linear; all context here)

## 0. Exact implementation idea

- **Approach (one sentence):** Wire the app to the CMS by resolving `@rotate/cms` to the service-dato package, add one page (`index.astro`) that composes a `hero-container` (getter + `format-hero.ts`) and renders core UI from `packages/ui` (`hero/hero.astro`) with props only — no fetch in UI.
- **Exact file name(s) and paths:** Edit `apps/website/astro.config.mjs` and/or `apps/website/tsconfig.json` (alias); create `apps/website/src/pages/index.astro`; create `apps/website/src/components/hero-container/` (`index.astro`, `format-hero.ts`); hero markup in `packages/ui/src/hero/`.
- **Exact props/API/types:** Page: `await getHomepage({ token: import.meta.env.DATOCMS_API_KEY })`; pass full homepage result (or selected fields) to module. Module: props only, e.g. `title`, `heroWords`, `heroVideo`, `content` (or whatever the getter returns); type from `HomeQuery['homepage']` or equivalent from @rotate/cms.
- **Exact mapping/key:** Alias `@rotate/cms` → `packages/service-dato/src/index.ts` (or main entry). Single route: `/` (index).
- **Legacy/reference behaviour:** 2022-site layout and homepage pattern; no direct file copy. Page fetches; module receives props only.

## 1. Allowed paths

- `apps/website/` only. No edits to `packages/service-dato/` or 2022-site.

## 2. Blocking dependencies

- A4 (getHomepage exported from @rotate/cms).

## 3. Unblocks

- E, F1, F2, F3 and all page-level work.

## 4. Contract / API

- **Alias:** App resolves `@rotate/cms` to packages/service-dato (Vite/TS). Import only getHomepage, GetterOptions, types from `@rotate/cms`. **Page:** `src/pages/index.astro` — composes `hero-container`. **Container:** `src/components/hero-container/` — getter + `formatHero`; **core UI:** `packages/ui/src/hero/hero.astro` — props only; no CMS. Token from `import.meta.env.DATOCMS_API_KEY` in page.

## 5. Data source & shape

- getHomepage(options) from @rotate/cms; return type HomeQuery['homepage']. Key fields: slug, title, heroWords, heroVideo, content (blocks).

## 6. Out of scope / Don't do

- Do not add/change getters in service-dato. Do not import from packages/service-dato internals in app. Do not put data fetching in module. Do not implement multiple pages, content blocks, or design-system tokens here.

## 7. Steps (ordered)

1. Add @rotate/cms alias in app (if not done in A4); ensure DATOCMS_API_KEY in env.
2. Add `hero-container` + `format-hero.ts` and `packages/ui` Hero — UI props only.
3. Create index.astro — compose `HeroContainer` with token.

## 8. Done criteria

- Homepage loads with content from getHomepage(); page → getter, module → props only; no CMS imports in module.

## 9. Acceptance criteria

| #   | Criterion                                                                              |
| --- | -------------------------------------------------------------------------------------- |
| AC1 | @rotate/cms resolves; no direct service-dato path imports in app.                      |
| AC2 | index.astro calls getHomepage() in frontmatter and passes props to module(s).          |
| AC3 | One module receives homepage props only; no data fetch in module.                      |
| AC4 | No imports of client/gql/handlers in app; only getHomepage and types from @rotate/cms. |

## 10. Validation

- `pnpm build` in apps/website succeeds; `pnpm dev`, open `/` — page loads with getHomepage data.

## 11. Solution / discovery links

- Solution: `documentation/02-solution/cms-service-pattern-and-dato-centralisation.md`

## 12. Old code (2022-site)

- 2022-site layout and homepage pattern; no direct file copy.
