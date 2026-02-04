---
title: Workstream A1 — service-dato client + base types
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

# Workstream A1 — service-dato client + base types

**Ticket:** `03-tickets/a1-service-dato-client-types.md` (linear; all context here)

## 0. Exact implementation idea

- **Approach (one sentence):** Add a Dato client wrapper in `packages/service-dato` that executes GraphQL via `@datocms/cda-client`, and define CMS-agnostic base types in `types.ts`; no query result types here (those come from codegen in A2).
- **Exact file name(s) and paths:** Create or edit `packages/service-dato/src/client.ts` (wrapper with `executeQuery`), `packages/service-dato/src/types.ts` (GetterOptions, base types). No other files in this package for this workstream.
- **Exact props/API/types:** Client: `executeQuery(query, variables?)`; read `process.env.DATOCMS_API_KEY` or equivalent. Types: `GetterOptions { preview?: boolean }`; any CMS-agnostic types (e.g. for getter options). Do **not** define HomeQuery/PageQuery-style types here — those live in `types-dato.ts` (codegen).
- **Exact mapping/key:** N/A (no block or route mapping).
- **Legacy/reference behaviour:** Match how 2022-site used Dato (token, execute query); no direct file copy. Client is internal only; not exported from package index.

## 1. Allowed paths
- `packages/service-dato/` only (`src/client.ts`, `src/types.ts`).

## 2. Blocking dependencies
- None.

## 3. Unblocks
- A2, A3, A4.

## 4. Contract / API
- **Client:** Dato client wrapper in `src/client.ts`; `executeQuery`; reads `DATOCMS_API_KEY` from env. Use `@datocms/cda-client`.
- **Base types:** `src/types.ts` — e.g. `GetterOptions` (`preview?: boolean`), CMS-agnostic types (Homepage, Page, Navigation, RouteList, Globals) as needed. No query result types here (those go in `types-dato.ts` via codegen in A2).

## 5. Data source & shape
- DatoCMS GraphQL API; token from env. Base types define structure; query shapes from codegen (A2).

## 6. Out of scope / Don't do
- Do not export client from package index (A4 exports getters only). Do not add query result types in types.ts (codegen in A2).

## 7. Steps (ordered)
1. Add Dato client wrapper (executeQuery) in `src/client.ts`.
2. Define base types in `src/types.ts` (GetterOptions, and any CMS-agnostic types). Export internally only.

## 8. Done criteria
- Client wrapper exists and reads token from env; base types compile and are used internally.

## 9. Acceptance criteria
| # | Criterion |
|---|-----------|
| AC1 | Client wrapper exists and reads token from env. |
| AC2 | Base types compile and are exported internally. |

## 10. Validation
- Validate client can execute a basic query with mock or real env. `pnpm check:types` in package.

## 11. Solution / discovery links
- Discovery: `documentation/01-discovery/01-cms-and-data.md`
- Solution: `documentation/02-solution/cms-service-pattern-and-dato-centralisation.md`

## 12. Old code (2022-site)
- `2022-site/gql/`, `2022-site/services/routes.js` — how Dato was used; no direct file copy.
