---
title: Workstream A4 — service-dato getters + exports
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

# Workstream A4 — service-dato getters + exports

**Ticket:** `03-tickets/a4-service-dato-getters-exports.md` (linear; all context here)

## 0. Exact implementation idea

- **Approach (one sentence):** Implement one handler per getter in `packages/service-dato/src/handlers/`, each calling the client and GQL and returning typed result from types-dato; export only getters and types from `src/index.ts`; wire app alias `@rotate/cms` in apps/website to the package.
- **Exact file name(s) and paths:** Create/edit `packages/service-dato/src/handlers/*.ts` (one per getter, e.g. getHomepage.ts, getPageBySlug.ts); edit `packages/service-dato/src/index.ts` (export getters + types only). Edit `apps/website/astro.config.mjs` and `apps/website/tsconfig.json` for alias.
- **Exact props/API/types:** Getters: getHomepage, getPageBySlug(category, slug), getRoutes, getNavigation, getNavigationHeader, getNavigationFooter, getGlobals, getCategoryBySlug, getAllCategories, getCategoryCards, getRedirects, getInfo. Each accepts `GetterOptions { preview?: boolean }`; returns typed result from types-dato (e.g. HomeQuery['homepage']). Index exports: only these getters and types; no client, gql, or handlers.
- **Exact mapping/key:** Alias `@rotate/cms` → `packages/service-dato/src/index.ts`. No block mapping.
- **Legacy/reference behaviour:** Getter behaviour and data shape from `2022-site/services/routes.js`, `2022-site/gql/`, `2022-site/pages/`; app must never import client/gql/handlers.

## 1. Allowed paths
- `packages/service-dato/` only. App alias: `apps/website/astro.config.mjs`, `apps/website/tsconfig.json` (wire `@rotate/cms` → `packages/service-dato/src/index.ts`).

## 2. Blocking dependencies
- A1, A2.

## 3. Unblocks
- B, E, F1, F2, F3, G, H.

## 4. Contract / API
- **Getters (from solution):** getHomepage, getPageBySlug(category, slug), getRoutes, getNavigation, getNavigationHeader, getNavigationFooter, getGlobals, getCategoryBySlug, getAllCategories, getCategoryCards, getRedirects, getInfo. Each accepts `GetterOptions` (`preview?: boolean`). One handler per getter in `src/handlers/`; each calls executeQuery, returns typed result from types-dato. **Package index:** Export only getters and types from `src/index.ts`; no client, gql, or handlers exported.

## 5. Data source & shape
- Client + GQL from A1/A2; query result types from `types-dato.ts`.

## 6. Out of scope / Don't do
- Do not export gql, client, or handlers from package index. No app imports from service-dato internals; app uses `@rotate/cms` only.

## 7. Steps (ordered)
1. Implement one handler per getter in `src/handlers/`; use client + gql; return typed result.
2. Export only getters and types from `src/index.ts`.
3. Wire app alias `@rotate/cms` in apps/website (astro.config.mjs, tsconfig.json).

## 8. Done criteria
- All getters from solution doc implemented and exported; app can import from `@rotate/cms` only.

## 9. Acceptance criteria
| # | Criterion |
|---|-----------|
| AC1 | Getters list matches solution doc; all work in app. |
| AC2 | No gql/client exported; only getters and types from index. |

## 10. Validation
- App imports only from `@rotate/cms`; no direct service-dato path imports. `pnpm build` in apps/website succeeds.

## 11. Solution / discovery links
- Discovery: `documentation/01-discovery/01-cms-and-data.md`
- Solution: `documentation/02-solution/cms-service-pattern-and-dato-centralisation.md`

## 12. Old code (2022-site)
- `2022-site/services/routes.js`, `2022-site/gql/`, `2022-site/pages/` — getter behaviour and data shape reference.
