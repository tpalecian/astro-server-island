---
title: Ticket A4 — service-dato getters + exports
phase: implementation
status: completed
owner: solutions-engineering
last_updated: 2026-03-20
depends_on: [CMS client + base types, GQL fragments + codegen]
tags: [implementation, ticket, cms]
---

# Ticket A4 — service-dato getters + exports

---

## Description, Value & ACs

**Scope:** Implement getters in `packages/service-dato/` and export only getters + types from the package. Wire app alias `@rotate/cms` in `apps/website` (astro.config.mjs, tsconfig.json) to `packages/service-dato/src/index.ts`. **Getters:** getHomepage, getPageBySlug(category, slug), getRoutes, getNavigation, getNavigationHeader, getNavigationFooter, getGlobals, getCategoryBySlug, getAllCategories, getCategoryCards, getRedirects, getInfo. Each accepts `GetterOptions` (e.g. `preview?: boolean`). One handler per getter in `src/handlers/`; each calls executeQuery, returns typed result from types-dato. **Package index:** Export only getters and types from `src/index.ts`; do not export client, gql, or handlers.

**Outcome:** All getters implemented and exported; app can import only from `@rotate/cms`; no app imports from service-dato internals.

**Value:** Single CMS API for the app; type-safe; no leakage of internals.

**Acceptance criteria:**

| #   | Criterion                                                  | Done |
| --- | ---------------------------------------------------------- | ---- |
| AC1 | Getters list implemented; all work when called from app.   | ✅   |
| AC2 | No gql/client exported; only getters and types from index. | ✅   |

---

## Feasibility & Dependencies

**Blocking:** CMS client + base types; GQL fragments + codegen.  
**Unblocks:** App container (homepage + module); dynamic routes; core content block modules; structured text; SEO (meta, sitemap, redirects, errors); images/media.

**Dependencies / risks:** Do not export gql, client, or handlers from package index. App must use `@rotate/cms` only.

---

## Analytics & Measurement

N/A — implementation task. Success = ACs met.

---

## Testing

Verify app imports only from `@rotate/cms`; no direct service-dato path imports. Run `pnpm build` in apps/website.

---

## Design & References

**Figma / design:** N/A

---

## Notes

**Implementation (completed):** Getters in `packages/service-dato/src/handlers/`; public API in `src/index.ts` exports getters and types only (no client/gql/handlers). App alias `@rotate/cms` → `packages/service-dato/src/index.ts` in `apps/website`. Workstream `02-workstreams/04-a4-getters-exports.md` already completed.
