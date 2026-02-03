---
title: Workstream — Content blocks
phase: implementation
status: in-review
owner: solutions-engineering
last_updated: 2026-02-03
depends_on:
  - 02-solution/content-blocks-and-inline-blocks-plan.md
related_docs:
  - 03-implementation/03-tickets/f-content-blocks-content-island.md
tags: [implementation, workstream, content-blocks]
---

# Workstream — Content blocks

## Scope
- Allowed paths: `apps/website/src/components/modules/`, `apps/website/src/components/islands/`, `packages/service-dato/`

## Dependencies
- CMS getters and block gql/models exist.

## Steps
1. Implement block modules.
2. Implement ContentIsland for below‑fold blocks.

## Done criteria
- First block server‑renders; remaining blocks load via ContentIsland.

## Risks / gotchas
- Ensure module mapping uses `_modelApiKey`.

