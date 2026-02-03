---
title: Start here — implementation handover
phase: implementation
status: in-review
owner: solutions-engineering
last_updated: 2026-02-03
depends_on: []
related_docs:
  - 03-implementation/00-index.md
  - 01-discovery/00-index.md
  - 01-discovery/01-cms-and-data.md
  - 01-discovery/02-content-blocks-and-rendering.md
  - 01-discovery/03-tracking-and-consent.md
  - 01-discovery/04-seo-and-routing.md
  - 01-discovery/05-images-and-media.md
  - 01-discovery/06-deployment-and-qa.md
  - 01-discovery/07-coverage-checklist.md
  - 02-solution/cms-service-pattern-and-dato-centralisation.md
  - 02-solution/content-blocks-and-inline-blocks-plan.md
  - 02-solution/external-services-and-tracking-plan.md
  - 02-solution/seo-sitemap-redirects-error-pages-plan.md
  - 05-reference/dato-vue-to-service-review.md
tags: [start-here, implementation, handover, index]
---

# Start here — implementation handover

**Purpose:** This is the entry point for Solutions Engineers and agents. It explains **why** we are doing this, where the current truth lives, and how to navigate the docs.

## 1. Current phase

We are in **Implementation**. The source of truth is:

- `03-implementation/` for tasks and delivery plans
- `02-solution/` for architecture and integration plans
- `01-discovery/` for final decisions


## 2. Why we are doing this (outcome & value)

We are executing the approved solution design. The outcome is a working implementation that matches discovery decisions and solution constraints.

## 3. Fixed decisions (do not change)

- **CMS:** All Dato implementation lives in `packages/service-dato`. The app imports from `@rotate/cms` (alias). Use DatoCMS Astro: `@datocms/cda-client` + `executeQuery`.
- **Content blocks:** First content block above the fold (server); the rest loaded via ContentIsland (client) from a separate fetch. Map blocks by `_modelApiKey`.
- **Tracking:** Cookie consent gate. `ENABLE_TRACKING` env toggle. Lead Feeder + Apollo included for now.
- **SEO/redirects:** Meta + JSON-LD in layout; redirects via `getRedirects()` at build. Custom 404 + 500.
- **Images:** Dato CDN + query params, Bunny CDN in front (no imgix/Cloudinary).
- **Styleguide:** New design-system; components may differ from 2022-site.

## 4. What to do in implementation (checklist)

- Validate that tasks align with discovery decisions in `01-discovery/00-index.md`.
- Confirm scope boundaries and assumptions in the solution docs under `02-solution/`.
- Ensure work follows `.cursor/rules/architecture.mdc`.
- Keep new implementation notes linked back to solution docs.

## 5. Where to find things (index)

| Topic | Document |
|---|---|
| Discovery index | `01-discovery/00-index.md` |
| CMS and data | `01-discovery/01-cms-and-data.md` |
| Content blocks and rendering | `01-discovery/02-content-blocks-and-rendering.md` |
| Tracking and consent | `01-discovery/03-tracking-and-consent.md` |
| SEO and routing | `01-discovery/04-seo-and-routing.md` |
| Images and media | `01-discovery/05-images-and-media.md` |
| Deployment and QA | `01-discovery/06-deployment-and-qa.md` |
| Coverage checklist | `01-discovery/07-coverage-checklist.md` |
| Solution design index | `02-solution/00-index.md` |
| Implementation index | `03-implementation/00-index.md` |
| Workstreams | `03-implementation/02-workstreams/` |
| Ticket templates | `03-implementation/03-tickets/` |
| Migration plan | `03-implementation/vue-to-astro-migration.md` |
| CMS service pattern and alias | `02-solution/cms-service-pattern-and-dato-centralisation.md` |
| Content blocks + ContentIsland | `02-solution/content-blocks-and-inline-blocks-plan.md` |
| External services + tracking | `02-solution/external-services-and-tracking-plan.md` |
| SEO, sitemap, redirects, error pages | `02-solution/seo-sitemap-redirects-error-pages-plan.md` |
| Background review (reference) | `05-reference/dato-vue-to-service-review.md` |

## 6. Out of phase (archive)

Out-of-phase or superseded material belongs in `99-archive/`.
