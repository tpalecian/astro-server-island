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

**Constraint:** Dato schema uses per-model field types (e.g. `HomepageModelHeroLinkField`). There is no generic `LinkField` or `StructuredTextField`; link and structured-text selections are inlined in queries/fragments where used. Fragment files `link.graphql` and `structured-text.graphql` are comment-only; selections live inline.

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


## 4. Validation & Testing

Run codegen and a sample query to ensure fragments resolve and types are generated.

## 5. References

- 02-solution/cms-service-pattern-and-dato-centralisation.md


## 6. Notes

Keep gql internal; export only through getters. Types from `types-dato.ts` are exported with getters.
