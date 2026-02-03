---
title: Workstream — Routing and pages
phase: implementation
status: in-review
owner: solutions-engineering
last_updated: 2026-02-03
depends_on:
  - 02-solution/cms-service-pattern-and-dato-centralisation.md
related_docs:
  - 03-implementation/03-tickets/b-app-container.md
  - 03-implementation/03-tickets/e-dynamic-routes.md
tags: [implementation, workstream, routing]
---

# Workstream — Routing and pages

## Scope
- Allowed paths: `apps/website/src/pages/`, `apps/website/src/containers/`

## Dependencies
- CMS getters must exist (homepage + routes).

## Steps
1. Wire homepage container and page.
2. Implement dynamic routes using getRoutes() for getStaticPaths.

## Done criteria
- All required routes are generated and render without errors.

## Risks / gotchas
- Ensure route list matches legacy site.

