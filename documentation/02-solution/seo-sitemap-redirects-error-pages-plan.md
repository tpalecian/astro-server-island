---
title: Solution — SEO, sitemap, redirects, error pages
phase: solution-design
status: in-review
owner: solutions-engineering
last_updated: 2026-02-03
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
