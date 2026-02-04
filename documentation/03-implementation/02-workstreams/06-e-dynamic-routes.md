---
title: Workstream E — Dynamic routes
phase: implementation
status: in-review
owner: solutions-engineering
last_updated: 2026-02-04
depends_on: []
related_docs:
  - 01-discovery/migration-map.md
  - 02-solution/cms-service-pattern-and-dato-centralisation.md
tags: [implementation, workstream, routing]
---

# Workstream E — Dynamic routes

**Ticket:** `03-tickets/e-dynamic-routes.md` (linear; all context here)

## 0. Exact implementation idea

- **Approach (one sentence):** Add Astro pages for dynamic routes per migration map: `[category]/index.astro` (category landing), `[category]/[slug].astro` (article/project), `info.astro`; server-rendered; pages/containers call getters only and pass props to modules; no getStaticPaths; categories: work | thinking | studio.
- **Exact file name(s) and paths:** Create `apps/website/src/pages/[category]/index.astro`, `apps/website/src/pages/[category]/[slug].astro`, `apps/website/src/pages/info.astro` (or as per migration map). Optionally `apps/website/src/containers/` or `components/`. No packages/service-dato or 2022-site.
- **Exact props/API/types:** Category landing: call getCategoryBySlug(category), getCategoryCards(category); pass result to modules. Article: getPageBySlug(category, slug); pass page to modules. Info: getInfo(); path from getRoutes().infoPage if needed. Types from types-dato (Category, Page, etc.). No getters inside modules.
- **Exact mapping/key:** Route paths from migration map: `/[category]`, `/[category]/[slug]`, `/info` (or path from getRoutes()). Category param: work | thinking | studio.
- **Legacy/reference behaviour:** Migration map `01-discovery/migration-map.md`; 2022-site pages (index.vue, info.vue, _category/index.vue, _category/_slug.vue); document styleguide route decision.

## 1. Allowed paths
- `apps/website/src/pages/`, optionally `apps/website/src/containers/`, `apps/website/src/components/`. No edits to packages/service-dato or 2022-site.

## 2. Blocking dependencies
- A4 (getters), B (container/module pattern). Migration-map: `01-discovery/migration-map.md`.

## 3. Unblocks
- G2 (sitemap from getRoutes); J (deployment/QA).

## 4. Contract / API
- **Routes (from migration map):** [category]/index.astro → category landing (getCategoryBySlug, getCategoryCards); [category]/[slug].astro → article/project (getPageBySlug); info.astro → getInfo(). Server-rendered; no getStaticPaths. Category: work | thinking | studio. Pages/containers call getters only; modules receive props only.

## 5. Data source & shape
- getRoutes(), getPageBySlug(category, slug), getCategoryBySlug(category), getCategoryCards(category), getInfo(). Shape from types-dato.

## 6. Out of scope / Don't do
- Content blocks (F); SEO meta in layout (G). No 2022-site edits.

## 7. Steps (ordered)
1. Add [category]/index.astro — getCategoryBySlug, getCategoryCards.
2. Add [category]/[slug].astro — getPageBySlug(category, slug).
3. Add or update info.astro — getInfo(); path from getRoutes().infoPage if needed.
4. Document styleguide route (migrate or drop) per migration-map.

## 8. Done criteria
- All dynamic routes from migration map exist; server-rendered; data from getters; no getters in modules.

## 9. Acceptance criteria
| # | Criterion |
|---|-----------|
| AC1 | Dynamic routes [category], [category]/[slug], info exist per migration-map; server-rendered. |
| AC2 | Category landing uses getCategoryBySlug + getCategoryCards; article uses getPageBySlug. |
| AC3 | Containers/server call getters only; modules receive props only. |
| AC4 | Styleguide route decision documented. |

## 10. Validation
- Navigate each route; data renders. Use getRoutes() to sanity-check paths.

## 11. Solution / discovery links
- Discovery: `documentation/01-discovery/migration-map.md`
- Solution: `documentation/02-solution/cms-service-pattern-and-dato-centralisation.md`

## 12. Old code (2022-site)
- `2022-site/pages/` (index.vue, info.vue, _category/index.vue, _category/_slug.vue); `2022-site/services/routes.js`.
