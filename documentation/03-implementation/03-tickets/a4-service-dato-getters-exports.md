---
title: Task A4 — service-dato getters + exports
phase: implementation
status: in-review
owner: solutions-engineering
last_updated: 2026-02-03
depends_on: [A1, A2, A3]
related_docs: [02-solution/cms-service-pattern-and-dato-centralisation.md]
tags: [implementation, ticket, cms]
---

# Task A4 — service-dato getters + exports

**Ticket:** A4
**Phase:** 1
**Scope (files/dirs you may edit):** `packages/service-dato/` only

**Dependencies (blocking):** A1, A2, A3
**Unblocks:** B, E, F, G, H

## 1. Outcome & Business Value (why)

**Description:**
Implement high-level getters and export only functions + types.

**Outcome we expect:**
All getters are available via @rotate/cms.

**Value (user / business):**
Unlocks app integration and page building.

## 2. Context & Scope (what/where)

**Scope:** `packages/service-dato/` only

**Dependencies:** A1, A2, A3

**Unblocks:** B, E, F, G, H

## 3. Delivery Plan (how)

**Steps:**
1. Implement getters using client + gql + models.
2. Export only getters and types from package index.

**Acceptance criteria:**

| # | Criterion | Done |
|---|---|---|
| AC1 | Getters list matches solution doc and work in app. | |
| AC2 | No gql/models/client exported. | |


## 4. Validation & Testing

Smoke test getter usage from app or unit test.

## 5. References

- 02-solution/cms-service-pattern-and-dato-centralisation.md


## 6. Notes

Include optional preview param where specified.
