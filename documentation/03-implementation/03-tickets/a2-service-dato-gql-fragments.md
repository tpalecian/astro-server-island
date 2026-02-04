---
title: Ticket A2 — service-dato GQL + fragments
phase: implementation
status: approved
owner: solutions-engineering
last_updated: 2026-02-04
depends_on: [CMS client + base types]
tags: [implementation, ticket, cms]
---

# Ticket A2 — service-dato GQL + fragments

---

## Description, Value & ACs

**Scope:** Migrate GQL queries and fragments into `packages/service-dato`; run codegen to generate `types-dato.ts`. Edit only `packages/service-dato/src/gql/`; codegen output: `packages/service-dato/src/types-dato.ts`. Queries and fragments live in `*.gql.ts` (no `.graphql` files). Use `print(fragment)` from `graphql` when composing. Dato schema uses per-model field types; link and structured-text selections must be **inlined** in queries/fragments (no generic LinkField/StructuredTextField fragment). Codegen: documents `src/gql/**/*.gql.ts`, output `src/types-dato.ts`. Run via `pnpm codegen` from root or package.

**Outcome:** All required queries/fragments for getters exist; codegen generates `types-dato.ts`; no type errors. Do not add a normaliser layer; do not export gql from package index.

**Value:** Type-safe GraphQL layer for all getters; single place for queries/fragments.

**Acceptance criteria:**

| # | Criterion | Done |
|---|-----------|------|
| AC1 | Queries/fragments exist for all getters; codegen runs. | |
| AC2 | types-dato.ts generated; types match query shapes. | |

---

## Feasibility & Dependencies

**Blocking:** CMS client + base types.  
**Unblocks:** CMS getters + exports.

**Dependencies / risks:** None.

---

## Analytics & Measurement

N/A — implementation task. Success = ACs met.

---

## Testing

Run `pnpm codegen` from root; run `pnpm check:types` in package.

---

## Design & References

**Figma / design:** N/A

---

## Notes

Migrate fragments (meta, content blocks, inline-blocks, models) from 2022-site; link/structured-text inlined. Add queries for homepage, page, routes, navigation, globals, categories, redirects, info.
