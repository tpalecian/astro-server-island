---
title: Task A3 — service-dato models (normalisers)
phase: implementation
status: in-review
owner: solutions-engineering
last_updated: 2026-02-03
depends_on: [A1, A2]
related_docs: [02-solution/cms-service-pattern-and-dato-centralisation.md]
tags: [implementation, ticket, cms]
---

# Task A3 — service-dato models (normalisers)

**Ticket:** A3
**Phase:** 1
**Scope (files/dirs you may edit):** `packages/service-dato/src/models/` only

**Dependencies (blocking):** A1, A2
**Unblocks:** A4

## 1. Outcome & Business Value (why)

**Description:**
Migrate normaliser functions to convert raw Dato data into typed shapes.

**Outcome we expect:**
Models validate raw data and return CMS-agnostic shapes.

**Value (user / business):**
Ensures consistent data contracts for app usage.

## 2. Context & Scope (what/where)

**Scope:** `packages/service-dato/src/models/` only

**Dependencies:** A1, A2

**Unblocks:** A4

## 3. Delivery Plan (how)

**Steps:**
1. Migrate models from 2022-site.
2. Validate required fields and throw on invalid data.

**Acceptance criteria:**

| # | Criterion | Done |
|---|---|---|
| AC1 | Models exist for all getter outputs. | |
| AC2 | Invalid data causes explicit errors. | |


## 4. Validation & Testing

Run model unit tests or simple validation fixtures.

## 5. References

- 02-solution/cms-service-pattern-and-dato-centralisation.md


## 6. Notes

Keep models internal to service-dato.
