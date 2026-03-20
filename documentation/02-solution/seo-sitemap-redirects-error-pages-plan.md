---
title: Solution — SEO, sitemap, redirects, error pages
phase: solution-design
status: in-review
owner: solutions-engineering
last_updated: 2026-02-04
depends_on:
  - 01-discovery/04-seo-and-routing.md
related_docs:
  - 02-solution/cms-service-pattern-and-dato-centralisation.md
  - 03-implementation/vue-to-astro-migration.md
tags: [solution, seo, routing, redirects, sitemap, errors]
---

# Solution — SEO, sitemap, redirects, error pages

## 1. Outcome & Business Value (why)

**Source:** Decisions and outcomes are defined in `01-discovery/04-seo-and-routing.md`.

**This doc focuses on:** the **solution approach** and delivery shape for SEO and routing.

## 2. Context & Scope (what/where)

**Discovery reference:** `01-discovery/04-seo-and-routing.md` (scope, constraints, decisions).

**In scope here:** head rendering approach, sitemap and redirect strategy, and delivery plan.

## 3. Solution Design (how, at a high level)

**Success criteria:**

- Meta and JSON‑LD render in the layout for key pages.
- Sitemap is generated from `getRoutes()`.
- Redirects are sourced from `getRedirects()` and applied at build time.
- Custom 404 and 500 pages are available.

**Proposed approach:**

- **Meta + JSON‑LD:** Render in layout; pages provide data via utilities.
- **Sitemap:** Generate from `getRoutes()` at build time.
- **Redirects:** Fetch from `getRedirects()` and output build‑time host config.
- **Error pages:** Custom 404 and 500.
- **robots.txt:** Provide in public/ and reference sitemap.

**Interfaces & data:**

- Requires getters: `getRoutes()` and `getRedirects()`.

**Alternatives considered:**

- Runtime redirects only. Rejected in discovery; recorded here for context.

**Non‑goals:**

- Changing URL structure beyond defined redirects.

### References (exact)

**Informational (read before / during implementation):**

| What                                                 | Path or URL                                                                                                                                     |
| ---------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Discovery (scope, constraints)                       | `documentation/01-discovery/04-seo-and-routing.md`                                                                                              |
| Route migration map (path list shape from getRoutes) | `documentation/01-discovery/migration-map.md`                                                                                                   |
| Implementation tickets                               | `documentation/03-implementation/03-tickets/g1-seo-meta-jsonld.md`, `g2-seo-sitemap.md`, `g3-seo-redirects-build.md`, `g4-seo-errors-robots.md` |
| Astro metadata                                       | [Astro: Metadata API](https://docs.astro.build/en/guides/integrations-guide/astro/)                                                             |
| Vercel redirects                                     | [Vercel: Redirects](https://vercel.com/docs/projects/configuration#redirects)                                                                   |

**Planned locations (where to implement):**

| What                                                    | Path                                                                                                                          |
| ------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| getRoutes() / getRedirects() (implement in CMS package) | `packages/service-dato/src/handlers/` (routes, redirects), `packages/service-dato/src/gql/` (routes.gql.ts, redirects.gql.ts) |
| Layout (meta, JSON-LD in head)                          | `apps/website/src/layouts/` (e.g. `base-layout.astro`)                                                                        |
| Meta/JSON-LD utilities                                  | `apps/website/src/lib/` or `src/utils/` (e.g. `meta.ts`, `jsonld.ts`)                                                         |
| Sitemap (generate from getRoutes())                     | `apps/website/public/sitemap.xml` or Astro endpoint                                                                           |
| Redirect config for host                                | `apps/website/vercel.json`                                                                                                    |
| Error pages                                             | `apps/website/src/pages/404.astro`, `500.astro`                                                                               |
| robots.txt                                              | `apps/website/public/robots.txt`                                                                                              |

### Code examples (contract to implement)

**Sitemap:** Call `getRoutes()` at build time; use its output (`allCategories`, `allThinkings`, `allWorks`, `allStudios`, `infoPage`) to build the path list. Output shape described in `documentation/01-discovery/migration-map.md`.

**Redirects — implement in `apps/website/vercel.json` (or host equivalent).** Call `getRedirects()` at build; output in host format. Vercel example:

```json
{
  "redirects": [{ "source": "/old-path", "destination": "/new-path", "permanent": true }]
}
```

Map Dato `redirectType` (301, 302) to `permanent: true/false`. Document exact field name and host syntax in implementation ticket `g3-seo-redirects-build.md`.

**Meta and JSON-LD:** Page passes title, description, og to layout; layout renders `<title>`, `<meta name="description">`, `<meta property="og:...">`. JSON-LD in `<script type="application/ld+json">` in head.

## 4. Delivery Plan (how, at a practical level)

**Phases / steps:**

1. Define meta and structured‑data utilities.
2. Implement sitemap generation from `getRoutes()`.
3. Implement build‑time redirect output from `getRedirects()`.
4. Add 404/500 pages and robots.txt.

**Deliverables:**

- Layout head rendering logic.
- sitemap.xml generation.
- Redirect config output for host.

**Validation:**

- Meta and JSON‑LD present on key pages.
- Redirects tested against legacy URLs.
- Sitemap passes validation.

**Open questions / TBD:**

- Redirect `redirectType` mapping details (301/302 and host syntax).
