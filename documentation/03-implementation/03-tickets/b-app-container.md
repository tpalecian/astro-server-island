---
title: Ticket B — app alias and one page + module (homepage)
phase: implementation
status: completed
owner: solutions-engineering
last_updated: 2026-02-04
depends_on: [CMS getters + exports]
tags: [implementation, ticket, app-shell]
---

# Ticket B — app alias and one page + module (homepage)

---

## Description, Value & ACs

**Scope:** Edit `apps/website/` only. (1) **Alias:** Resolve `@rotate/cms` to packages/service-dato (Vite/TS). Import only getHomepage, GetterOptions, and types from `@rotate/cms`. (2) **Page:** `src/pages/index.astro` — composes `hero-container` with token from `import.meta.env.DATOCMS_API_KEY` (or equivalent). (3) **Container + UI:** `src/components/hero-container/` (getter + `format-hero.ts`); core hero UI in `packages/ui/src/hero/` — props only, no CMS. Do not add/change getters in service-dato; do not import from packages/service-dato internals in app; do not put data fetching in presentational UI.

**Outcome:** Homepage loads with content from getHomepage(); page calls getter, module receives props only; no CMS imports in module.

**Value:** Establishes app–CMS boundary and page–module pattern for all routes.

**Acceptance criteria:**

| #   | Criterion                                                                              | Done |
| --- | -------------------------------------------------------------------------------------- | ---- |
| AC1 | @rotate/cms resolves; no direct service-dato path imports in app.                      | ✓    |
| AC2 | index.astro calls getHomepage() in frontmatter and passes props to module(s).          | ✓    |
| AC3 | One module receives homepage props only; no data fetch in module.                      | ✓    |
| AC4 | No imports of client/gql/handlers in app; only getHomepage and types from @rotate/cms. | ✓    |

---

## Feasibility & Dependencies

**Blocking:** CMS getters + exports (getHomepage from @rotate/cms).  
**Unblocks:** Dynamic routes; core content block modules; structured text; ContentIsland (below-fold).

**Dependencies / risks:** None.

---

## Analytics & Measurement

N/A — implementation task. Success = ACs met.

---

## Testing

Run `pnpm build` in apps/website; run `pnpm dev`, open `/` — page loads with getHomepage data.

---

## Design & References

**Figma / design:** [Add when available]

---

## Notes

Steps: (1) Add @rotate/cms alias in app (if not already done when wiring the app); ensure token in env. (2) Add `hero-container` + `format-hero.ts` and `packages/ui` Hero — props only in UI. (3) Create index.astro — compose `HeroContainer` with token.
