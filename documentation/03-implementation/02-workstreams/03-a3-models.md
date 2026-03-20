---
title: Workstream A3 — service-dato models (superseded)
phase: implementation
status: superseded
owner: solutions-engineering
last_updated: 2026-02-04
depends_on: []
related_docs:
  - 02-solution/cms-service-pattern-and-dato-centralisation.md
tags: [implementation, workstream, cms]
---

# Workstream A3 — service-dato models (superseded)

**Ticket:** `03-tickets/a3-service-dato-models.md` (linear; all context here)

## 0. Exact implementation idea

- **Approach (one sentence):** This workstream is superseded: do not implement a normaliser or models layer; getters return typed query results directly from `types-dato.ts`; no separate models file or mapping.
- **Exact file name(s) and paths:** N/A — no implementation.
- **Exact props/API/types:** N/A.
- **Exact mapping/key:** N/A.
- **Legacy/reference behaviour:** N/A. Decision: A2 codegen + A4 getters are sufficient; no models layer.

## 1. Allowed paths

- N/A — ticket superseded.

## 2. Blocking dependencies

- None.

## 3. Unblocks

- None (skipped).

## 4. Contract / API

- **Decision:** No normaliser layer. Getters return typed query results directly from `types-dato.ts`. No separate "models" layer.

## 5. Data source & shape

- N/A.

## 6. Out of scope / Don't do

- Do not implement a normaliser or models layer. A2 codegen + A4 getters are sufficient.

## 7. Steps (ordered)

1. **Skipped.** Migrate models from 2022-site was original scope; superseded by "no normaliser" decision.

## 8. Done criteria

- N/A — workstream skipped.

## 9. Acceptance criteria

- N/A.

## 10. Validation

- N/A.

## 11. Solution / discovery links

- Solution: `documentation/02-solution/cms-service-pattern-and-dato-centralisation.md` (no normaliser; getters return query results directly).

## 12. Old code (2022-site)

- N/A.
