---
title: Workstream — CMS service layer
phase: implementation
status: in-review
owner: solutions-engineering
last_updated: 2026-02-03
depends_on:
  - 02-solution/cms-service-pattern-and-dato-centralisation.md
related_docs:
  - 03-implementation/03-tickets/a1-service-dato-client-types.md
  - 03-implementation/03-tickets/a2-service-dato-gql-fragments.md
  - 03-implementation/03-tickets/a3-service-dato-models.md
  - 03-implementation/03-tickets/a4-service-dato-getters-exports.md
tags: [implementation, workstream, cms]
---

# Workstream — CMS service layer

## Scope
- Allowed paths: `packages/service-dato/`
- No normaliser layer; getters return typed query results directly (A3 superseded).

## Dependencies
- None

## Steps
1. **Client + base types (A1):** Dato client wrapper, base CMS-agnostic types in `src/types.ts`.
2. **GQL + fragments (A2):** Queries and fragments in `src/gql/`. Dato schema uses per-model field types (no generic `LinkField`/`StructuredTextField`); link and structured-text selections are inlined in queries/fragments where used.
3. **Codegen:** GraphQL codegen lives in the package (`codegen.ts`); generates `src/types-dato.ts` (next to `src/types.ts`). Root script `pnpm codegen` runs package codegen. Types from `types-dato.ts` are exported with getters.
4. **Getters + exports (A4):** One handler per getter in `src/handlers/`; export only getters and types from package index. No gql/client/models exported.

## Done criteria
- Getters listed in solution doc are implemented and exported.
- App can import from `@rotate/cms` (or `@rotate/service-dato`) without touching internals.
- Query result types come from `types-dato.ts`; codegen runnable via `pnpm codegen` from root or package.

## Risks / gotchas
- Keep app imports alias‑only.
- Dato schema is per-model: link/structured-text cannot use a single fragment; selections are inlined.

