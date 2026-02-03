---
title: Task F3 — ContentIsland and below-fold fetch
phase: implementation
status: in-review
owner: solutions-engineering
last_updated: 2026-02-03
depends_on: [A4, B, F1]
related_docs: [02-solution/content-blocks-and-inline-blocks-plan.md]
tags: [implementation, ticket, content-blocks]
---

# Task F3 — ContentIsland and below-fold fetch

**Ticket:** F3
**Phase:** 3
**Scope (files/dirs you may edit):** `apps/website/src/components/islands/`

**Dependencies (blocking):** A4, B, F1
**Unblocks:** G, H

## 1. Outcome & Business Value (why)

**Description:**
Implement ContentIsland to fetch and render below-fold blocks.

**Outcome we expect:**
Below-fold blocks load client-side with a separate fetch.

**Value (user / business):**
Enables streaming-like behavior and performance gains.

## 2. Context & Scope (what/where)

**Scope:** `apps/website/src/components/islands/`

**Dependencies:** A4, B, F1

**Unblocks:** G, H

## 3. Delivery Plan (how)

**Steps:**
1. Implement ContentIsland.
2. Add endpoint or API for below-fold content.

**Acceptance criteria:**

| # | Criterion | Done |
|---|---|---|
| AC1 | Below-fold blocks render after client fetch. | |
| AC2 | First block remains server-rendered. | |


## 4. Validation & Testing

Verify network call and rendered output in browser.

## 5. References

- 02-solution/content-blocks-and-inline-blocks-plan.md


## 6. Notes

Ensure island fetch only requests below-fold blocks.
