---
title: Task A2 — service-dato gql + fragments
phase: implementation
status: in-review
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
All required queries/fragments are defined for getters.

**Value (user / business):**
Provides consistent query layer for CMS access.

## 2. Context & Scope (what/where)

**Scope:** `packages/service-dato/src/gql/` only

**Dependencies:** A1

**Unblocks:** A4

## 3. Delivery Plan (how)

**Steps:**
1. Migrate fragments (meta, link, structured-text, content blocks).
2. Add queries for homepage, page, routes, navigation, globals, categories, redirects.

**Acceptance criteria:**

| # | Criterion | Done |
|---|---|---|
| AC1 | All required fragments exist and are referenced in queries. | |
| AC2 | Queries compile with fragments and are exported internally. | |


## 4. Validation & Testing

Run a sample query compile to ensure fragments resolve.

## 5. References

- 02-solution/cms-service-pattern-and-dato-centralisation.md


## 6. Notes

Keep gql internal; export only through getters.
