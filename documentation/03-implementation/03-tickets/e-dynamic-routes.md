---
title: Task E — Dynamic routes
phase: implementation
status: approved
owner: solutions-engineering
last_updated: 2026-02-03
depends_on: []
related_docs:
  - 01-discovery/migration-map.md
  - 03-implementation/vue-to-astro-migration.md
tags: [implementation, ticket]
---

# Task E — Dynamic routes

**Ticket:** E  
**Phase:** 2  
**Scope (files/dirs you may edit):** `apps/website/src/pages/` (new dynamic pages). Optionally `apps/website/src/containers/` and `apps/website/src/components/` for page-level containers/modules. No edits to `packages/service-dato/` or 2022-site.

**Dependencies (blocking):** A (a-service-dato) — getRoutes(), getPageBySlug, getCategoryBySlug, getCategoryCards. B (b-app-container) — container/module pattern. C (c-discovery) — migration-map.md for route → page mapping.  
**Unblocks:** G (sitemap from getRoutes); J (deployment/QA runs against full route set).


## 1. Outcome & Business Value (why)

### Description
Add Astro dynamic routes for category landing, article/project ([category]/[slug]), and info (or slug-based) pages. Pages are **server-rendered**; caching is at **Bunny CDN**. No getStaticPaths (sitemap G2 calls getRoutes() directly). In scope: pages under `[category]`, `[category]/[slug]`, info; containers that call getPageBySlug, getCategoryBySlug, getCategoryCards. Out of scope: content blocks (Task F), SEO meta in layout (Task G), 2022-site code edits.

### Outcome we expect
All dynamic routes from 2022-site have Astro equivalents; category landing and article pages render with data from service-dato getters on request and are cached at Bunny. Migration-map (C) defines route → file mapping; this task implements it.

### Value (user / business)
Completes the page skeleton so every URL from the old site has a server-rendered page (cached at Bunny). Required for sitemap (G) and pre-launch (J). Aligns with [implementation-coverage-checklist.md](../implementation-coverage-checklist.md) §2 (routes from getRoutes; sitemap G2).

### Acceptance criteria

| # | Criterion | Done |
|---|-----------|------|
| AC1 | Dynamic routes [category], [category]/[slug], and info exist per migration-map; server-rendered, cache at Bunny | ✓ |
| AC2 | Pages exist for [category], [category]/[slug], and info (or slug from Dato) per migration-map | ✓ |
| AC3 | Category landing uses getCategoryBySlug + getCategoryCards; article/project uses getPageBySlug | ✓ |
| AC4 | Containers are server-only and call getters only; modules receive props only | ✓ |
| AC5 | Styleguide route decision documented (migrate or drop) in migration-map or task notes | ✓ |


## 2. Context & Scope (what/where)

**Scope:** `apps/website/src/pages/` (new dynamic pages). Optionally `apps/website/src/containers/` and `apps/website/src/components/` for page-level containers/modules. No edits to `packages/service-dato/` or 2022-site.

**Dependencies:** A (a-service-dato) — getRoutes(), getPageBySlug, getCategoryBySlug, getCategoryCards. B (b-app-container) — container/module pattern. C (c-discovery) — migration-map.md for route → page mapping.

**Unblocks:** G (sitemap from getRoutes); J (deployment/QA runs against full route set).

## 3. Delivery Plan (how)

**Steps (implemented):**

1. **`apps/website/src/pages/[category]/index.astro`** — Category landing. `export const prerender = false`. In frontmatter: read `Astro.params.category`, call `getCategoryBySlug(category, { token })` and `getCategoryCards(cardsSlug, { token })` (map category to `work`→`works`, `thinking`→`thinkings`, `studio`→`studios`). Token from `import.meta.env.DATOCMS_API_KEY`. Render title from `categoryData?.filterText`; show “Not found” if no category.
2. **`apps/website/src/pages/[category]/[slug].astro`** — Article/project page. `export const prerender = false`. Call `getPageBySlug(category, slug, { token })`. Render article shell; “Not found” if no page. Content blocks (Task F) will fill body later.
3. **`apps/website/src/pages/info.astro`** — Info page. `export const prerender = false`. Call `getInfo({ token })`. Render info shell; “Not found” if no info. Content blocks (Task F) will fill body later.

**No getStaticPaths:** Pages are server-rendered; path list for sitemap (G2) comes from `getRoutes()` called when generating sitemap.

**Dependencies (upstream):** A (getRoutes, getPageBySlug, getCategoryBySlug, getCategoryCards); B (container/module pattern); C (migration-map.md).

**Downstream impact:** G (sitemap) uses same getRoutes() output. J (Playwright/pre-launch) runs against full route set.

## 4. Validation & Testing

**Success metrics:** Build succeeds; server-rendered routes respond; no 404s for expected routes (from getRoutes()).

**In scope for this task:**

| Type | Scope | Notes |
|------|--------|--------|
| Unit | Optional: route params and getter calls | 80/20: focus on data flow |
| Integration | Server responds for expected routes | Hit key routes; compare to getRoutes() |
| E2E | N/A in this task | J adds Playwright for key routes |


## 5. References

**Product / design handover:**  
Per migration-map and existing layout (D, B). Link design when available.

**Reference docs / artwork:**  
- [vue-to-astro-migration.md](../vue-to-astro-migration.md) §7 (dynamic routes)  
- [implementation-coverage-checklist.md](../implementation-coverage-checklist.md) §2  
- [01-discovery/migration-map.md](../../01-discovery/migration-map.md) — route → page mapping; refresh from legacy 2022-site `pages/` and `services/routes.js`  
- [.cursor/rules/architecture.mdc](../../../.cursor/rules/architecture.mdc)


## 6. Notes

- **Rendering:** Server-rendered; no getStaticPaths. Caching is at Bunny CDN. Sitemap (G2) calls getRoutes() directly.
- **Migration map:** Route → Astro page mapping is in [01-discovery/migration-map.md](../../01-discovery/migration-map.md). If the map is missing routes, audit the legacy Nuxt project (2022-site): list `pages/` and inspect `services/routes.js`, then update the migration map.
- Info page: single route /info; data via getInfo(). Ensure page exists per migration-map.
- Do not add new getters in service-dato; use only public API (getRoutes, getPageBySlug, getCategoryBySlug, getCategoryCards).

