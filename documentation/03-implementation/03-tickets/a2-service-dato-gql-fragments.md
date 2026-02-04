---
title: Task A2 — service-dato gql + fragments
phase: implementation
status: approved
owner: solutions-engineering
last_updated: 2026-02-03
depends_on: [A1]
related_docs: [02-solution/cms-service-pattern-and-dato-centralisation.md]
tags: [implementation, ticket, cms]
---

# Task A2 — service-dato gql + fragments

**Ticket:** A2
**Phase:** 1
**Scope (files/dirs you may edit):** `packages/service-dato/src/gql/` only

**Dependencies (blocking):** A1
**Unblocks:** A4

## 1. Outcome & Business Value (why)

**Description:**
Migrate GraphQL queries and fragments from 2022-site into service-dato.

**Outcome we expect:**
All required queries/fragments are defined for getters; codegen generates types to `types-dato.ts`.

**Value (user / business):**
Provides consistent query layer for CMS access and type-safe results.

## 2. Context & Scope (what/where)

**Scope:** `packages/service-dato/src/gql/` and codegen in package (output `src/types-dato.ts`).

**Dependencies:** A1

**Unblocks:** A4

**Constraint:** Dato schema uses per-model field types (e.g. `HomepageModelHeroLinkField`). There is no generic `LinkField` or `StructuredTextField`; link and structured-text selections are inlined in queries/fragments where used.

## 3. Delivery Plan (how)

**Steps:**

1. Migrate fragments (meta, content blocks, inline-blocks, models). Link and structured-text selections inlined (no fragment on generic type).
2. Add queries for homepage, page, routes, navigation, globals, categories, redirects.
3. GraphQL codegen in package: generates `src/types-dato.ts` (next to `src/types.ts`). Run via `pnpm codegen` from root or package.

**Acceptance criteria:**

| # | Criterion | Done |
|---|---|---|
| AC1 | All required fragments exist and are referenced in queries; link/structured-text inlined. | ✓ |
| AC2 | Queries compile with fragments; codegen produces `types-dato.ts`. | ✓ |

## 4. Implementation (current)

**File layout:**

- **Queries:** `src/gql/*.gql.ts` — one file per operation (e.g. `home.gql.ts`, `homepage-card-slider.gql.ts`, `all-studios-cards.gql.ts`). Each exports a `gql`-tagged document (from `graphql-tag`). Re-exported from `src/gql/index.ts`.
- **Fragments:** `src/gql/fragments/*.gql.ts` — `meta.gql.ts` (Type, Media, SeoHomepage), `models.gql.ts` (Card, Tag), `inline-blocks.gql.ts` (OnTagRecord, OnEmojiRecord, etc.), `blocks.gql.ts` (OnCardSliderRecord, OnQuoteRecord, etc.). Re-exported from `src/gql/fragments/index.ts`.
- **Codegen:** `codegen.ts` uses `documents: ['src/gql/**/*.gql.ts']`; output `src/types-dato.ts`. No `.graphql` files; all operations and fragments live in `.gql.ts`.

**Fragment usage in queries:**

- Queries that use fragments import the fragment DocumentNode(s) from `./fragments` and interpolate them into the query template using **`print(fragment)`** from `graphql`. Example: `` gql`query Home { homepage { ...SeoHomepage ... } } ${print(MediaFragment)} ${print(SeoHomepageFragment)}` ``.
- **Do not** interpolate a fragment DocumentNode directly (e.g. `${MediaFragment}`). That stringifies to `"[object Object]"` and causes GraphQL parse errors (e.g. "Unexpected [").
- Any query that spreads a fragment must include that fragment’s definition in the same document (and any fragment it depends on, e.g. Card requires Type + Media). List all required fragments and interpolate each with `print(...)`.

**Handlers:** Import query DocumentNodes from `../gql` and pass them to `executeQuery`. Getters remain the only public API; gql is internal.

## 5. Validation & Testing

Run codegen and a sample query to ensure fragments resolve and types are generated.

## 6. References

- 02-solution/cms-service-pattern-and-dato-centralisation.md

## 7. Notes

Keep gql internal; export only through getters. Types from `types-dato.ts` are exported with getters.
