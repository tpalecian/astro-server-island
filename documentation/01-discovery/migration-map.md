---
title: Route migration map (Nuxt → Astro)
phase: discovery
status: in-review
owner: solutions-engineering
last_updated: 2026-02-04
depends_on: []
related_docs:
  - 01-discovery/04-seo-and-routing.md
tags: [discovery, routes, migration, 2022-site, nuxt]
---

# Route migration map (Nuxt → Astro)

## 1. Outcome & Business Value (why)

**Purpose:** Single source of truth for which legacy Nuxt routes map to which Astro pages, so implementation (Task E, getStaticPaths, sitemap) can proceed without guessing.

**Value:** Reduces re-work and keeps route behaviour consistent during migration.

**Success criteria:** Map is accurate and referenced by implementation docs.

## 2. Context & Scope (what/where)

**Current state:** Derived from the 2022-site (Nuxt 2) `pages/` structure and `services/routes.js`. This repo has no 2022-site code; the map is the handover.

**In scope:** Route mapping only. Out of scope: redirects (see G3), sitemap generation (see G2), content blocks (Task F).

**Risks & mitigations:** Map drift if 2022-site or Dato routes change — refresh using steps below.

## 3. Ideas, options & references

**Ideas / options explored:**
- Single handover map (this doc) vs. embedding route list in implementation only (map preferred for discoverability and sitemap/SEO alignment).
- Path list from `getRoutes()` (from `@rotate/cms`) for sitemap (G2) and getStaticPaths.

**References & further reading:**
- Nuxt 2 [directory structure](https://v2.nuxt.com/docs/directory-structure/pages); 2022-site `pages/` and `services/routes.js`.
- `01-discovery/04-seo-and-routing.md` for SEO/routing scope; Task E and G2 for implementation.

**Key information:**
- Legacy route → Astro file mapping; `getRoutes()` output (`allCategories`, `allThinkings`, `allWorks`, `allStudios`, `infoPage`).

**Old code (2022-site) — current state / prior art:**

| What | Path (2022-site) |
|------|-------------------|
| Nuxt file-based routing | `2022-site/pages/` (e.g. `index.vue`, `info.vue`, `_category/index.vue`, `_category/_slug.vue`, `styleguide/*.vue`) — [Nuxt 2 directory structure](https://v2.nuxt.com/docs/directory-structure/pages) |
| Dynamic route list from Dato | `2022-site/services/routes.js` — used at build/generate time |
| This repo | No 2022-site code lives here; this map is the handover. When in doubt, audit the legacy repo. |

### Source of truth: legacy project (2022-site)

Routes are retrieved from the **legacy Nuxt project (2022-site)** using the paths in the table above.

## How to refresh this map

1. **Open the legacy project** (2022-site) at its repo root.
2. **List all routes from Nuxt pages:**
   - `pages/index.vue` → `/`
   - `pages/info.vue` → `/info`
   - `pages/_category/index.vue` → `/[category]` (category landing)
   - `pages/_category/_slug.vue` → `/[category]/[slug]` (article/project)
   - `pages/styleguide/*.vue` → `/styleguide/*`
3. **Optionally inspect** `services/routes.js` (or equivalent) for the exact list of paths fed to the static generator.
4. **Update the table below** and the Astro file paths so Task E and getStaticPaths stay in sync.

## Route → Astro page mapping

| Legacy (Nuxt) route | Astro file | Data source (getters) |
|--------------------|------------|------------------------|
| `/` | `apps/website/src/pages/index.astro` | `getHomepage()` |
| `/info` | `apps/website/src/pages/info.astro` (or slug-based) | `getRoutes().infoPage` for path; page content via `getInfo()` |
| `/[category]` | `apps/website/src/pages/[category]/index.astro` | `getCategoryBySlug(category)`, `getCategoryCards(category)` |
| `/[category]/[slug]` | `apps/website/src/pages/[category]/[slug].astro` | `getPageBySlug(category, slug)` — category is `work` \| `thinking` \| `studio` (handler switch) |
| `/styleguide/*` | TBD (migrate or drop) | — |

**Note:** Styleguide reflects the new design-system; decision to migrate or drop is documented in [vue-to-astro-migration.md](../03-implementation/vue-to-astro-migration.md). If dropped, exclude from getStaticPaths.

**Implementation notes:** `getCategoryCards(slug)` expects `slug` in `{ thinkings, works, studios }` or `everything` (see `packages/service-dato/src/handlers/category.ts`). If Dato category slugs differ (e.g. singular), the page/container must map. `getPageBySlug(category, slug)` expects `category` to be one of `work`, `thinking`, `studio`.

## Path list (sitemap, G2)

**Rendering:** Pages are server-rendered; no getStaticPaths. Caching is at Bunny CDN. The path list for sitemap (Task G2) comes from **getRoutes()** called directly when generating the sitemap.

**getRoutes()** from `@rotate/cms` returns:

- `allCategories` → paths for `/[category]`
- `allThinkings`, `allWorks`, `allStudios` → paths for `/[category]/[slug]` (use `category.slug` + `slug`)
- `infoPage` → path for info page (e.g. `/info` or slug-based)

This map defines which Astro file handles each pattern. Task E implements the pages; G2 uses getRoutes() for sitemap.xml.

## Out of scope for this doc

- Redirects (see G3 / getRedirects)
- Sitemap (see G2; uses same getRoutes() output)
- Content blocks and page content (Task F)
