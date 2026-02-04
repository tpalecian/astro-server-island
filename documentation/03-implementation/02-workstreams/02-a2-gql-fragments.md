---
title: Workstream A2 — service-dato GQL + fragments
phase: implementation
status: in-review
owner: solutions-engineering
last_updated: 2026-02-04
depends_on: []
related_docs:
  - 01-discovery/01-cms-and-data.md
  - 02-solution/cms-service-pattern-and-dato-centralisation.md
tags: [implementation, workstream, cms]
---

# Workstream A2 — service-dato GQL + fragments

**Ticket:** `03-tickets/a2-service-dato-gql-fragments.md` (linear; all context here)

## 0. Exact implementation idea

- **Approach (one sentence):** Migrate all GQL queries and fragments from 2022-site into `packages/service-dato/src/gql/*.gql.ts`, with link/structured-text inlined per model; run GraphQL codegen to output `types-dato.ts`; no `.graphql` files; use `print(fragment)` when composing.
- **Exact file name(s) and paths:** Create/edit only under `packages/service-dato/src/gql/` (e.g. `fragments/blocks.gql.ts`, `queries/homepage.gql.ts`, etc.). Codegen writes to `packages/service-dato/src/types-dato.ts`. No other paths.
- **Exact props/API/types:** Fragments and queries export gql documents; codegen reads `src/gql/**/*.gql.ts` and emits types (HomeQuery, RoutesQuery, OnQuoteRecordFragment, etc.) in `types-dato.ts`. No generic LinkField/StructuredTextField fragment; inline per model.
- **Exact mapping/key:** N/A (no block mapping). Queries must cover: homepage, page, routes, navigation, globals, categories, redirects, info; fragments for all block and inline record types used by getters.
- **Legacy/reference behaviour:** Migrate from `2022-site/gql/`, `2022-site/gql/fragments/`; link/structured-text inlined; no normaliser.

## 1. Allowed paths
- `packages/service-dato/src/gql/` only. Codegen output: `packages/service-dato/src/types-dato.ts`.

## 2. Blocking dependencies
- A1 (client).

## 3. Unblocks
- A4.

## 4. Contract / API
- Queries and fragments in `*.gql.ts`; no `.graphql` files. Use `print(fragment)` from `graphql` when composing. Dato schema uses per-model field types; link and structured-text selections **inlined** in queries/fragments (no generic LinkField/StructuredTextField fragment). Codegen: documents `src/gql/**/*.gql.ts`, output `src/types-dato.ts`. Run via `pnpm codegen` from root or package.

## 5. Data source & shape
- Dato GraphQL API. Shape: generated types in `types-dato.ts` (HomeQuery, RoutesQuery, etc.).

## 6. Out of scope / Don't do
- No normaliser layer. No generic fragment types for link/structured-text; inline per model. Do not export gql from package index.

## 7. Steps (ordered)
1. Migrate fragments (meta, content blocks, inline-blocks, models) from 2022-site; link/structured-text inlined.
2. Add queries for homepage, page, routes, navigation, globals, categories, redirects, info.
3. GraphQL codegen in package; output `src/types-dato.ts`. Root `pnpm codegen` runs package codegen.

## 8. Done criteria
- All required queries/fragments defined; codegen generates `types-dato.ts`; no type errors.

## 9. Acceptance criteria
| # | Criterion |
|---|-----------|
| AC1 | Queries/fragments exist for all getters; codegen runs. |
| AC2 | types-dato.ts generated; types match query shapes. |

## 10. Validation
- `pnpm codegen` from root; `pnpm check:types` in package.

## 11. Solution / discovery links
- Discovery: `documentation/01-discovery/01-cms-and-data.md`
- Solution: `documentation/02-solution/cms-service-pattern-and-dato-centralisation.md`

## 12. Old code (2022-site)
- `2022-site/gql/`, `2022-site/gql/fragments/` (e.g. inline-blocks.gql.js) — migrate into service-dato.
