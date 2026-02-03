---
title: Task A3 — service-dato models (normalisers)
phase: implementation
status: approved
owner: solutions-engineering
last_updated: 2026-02-03
depends_on: [A1, A2]
related_docs: [02-solution/cms-service-pattern-and-dato-centralisation.md]
tags: [implementation, ticket, cms]
---

# Task A3 — service-dato models (normalisers)

**Ticket:** A3
**Phase:** 1
**Status:** **Superseded** — we are not implementing a normaliser layer.

**Scope (files/dirs you may edit):** N/A (task cancelled)

**Dependencies (blocking):** A1, A2
**Unblocks:** A4 (A4 proceeds without models)

## 1. Outcome & Business Value (why)

**Original description:**
Migrate normaliser functions to convert raw Dato data into typed shapes.

**Decision:**
We do **not** use a normaliser layer. Getters return typed query results directly; types (from A1) and GQL (from A2) define the contract. This keeps the package simpler and avoids maintaining a separate validation layer.

## 2. Context & Scope (what/where)

**In scope:** Document the decision; no code in `packages/service-dato/src/models/`.

**Out of scope:** Normaliser functions, runtime validation of raw Dato responses.

## 3. Delivery Plan (how)

**Steps:**
1. ~~Migrate models from 2022-site.~~ **Skipped.**
2. ~~Validate required fields and throw on invalid data.~~ **Skipped.**

**Acceptance criteria:**

| # | Criterion | Done |
|---|---|---|
| AC1 | Decision documented; A4 getters use raw typed results. | ✓ |
| AC2 | N/A (no normalisers). | — |

## 4. Validation & Testing

N/A.

## 5. References

- 02-solution/cms-service-pattern-and-dato-centralisation.md

## 6. Notes

Getters (A4) call `executeQuery` with GQL and return the result typed via the base types / query response types. No intermediate normaliser layer.
