---
title: Workstream — SEO, sitemap, redirects, error pages
phase: implementation
status: in-review
owner: solutions-engineering
last_updated: 2026-02-03
depends_on:
  - 02-solution/seo-sitemap-redirects-error-pages-plan.md
related_docs:
  - 03-implementation/03-tickets/g-seo-sitemap-redirects-errors.md
tags: [implementation, workstream, seo]
---

# Workstream — SEO, sitemap, redirects, error pages

## Scope
- Allowed paths: `apps/website/src/` (layouts, lib, pages), config for redirects

## Dependencies
- getRoutes() and getRedirects() available from CMS.

## Steps
1. Implement meta + JSON‑LD utilities and layout rendering.
2. Generate sitemap from getRoutes().
3. Build‑time redirects from getRedirects().
4. Add 404/500 and robots.txt.

## Done criteria
- Meta/JSON‑LD render correctly.
- Sitemap and redirects are generated and validated.

## Risks / gotchas
- Confirm redirectType mapping during implementation.

