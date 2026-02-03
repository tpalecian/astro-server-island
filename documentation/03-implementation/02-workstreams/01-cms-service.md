---
title: Workstream — CMS service layer
phase: implementation
status: in-review
owner: solutions-engineering
last_updated: 2026-02-03
depends_on:
  - 02-solution/cms-service-pattern-and-dato-centralisation.md
related_docs:
  - 03-implementation/03-tickets/a-service-dato.md
tags: [implementation, workstream, cms]
---

# Workstream — CMS service layer

## Scope
- Allowed paths: `packages/service-dato/`

## Dependencies
- None

## Steps
1. Implement client, gql, models, and getters.
2. Export only types + getters from the package index.

## Done criteria
- Getters listed in solution doc are implemented and exported.
- App can import from `@rotate/cms` without touching internals.

## Risks / gotchas
- Keep app imports alias‑only.

