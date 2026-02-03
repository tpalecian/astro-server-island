---
title: Task F2 — structured text + inline blocks
phase: implementation
status: in-review
owner: solutions-engineering
last_updated: 2026-02-03
depends_on: [A4, F1]
related_docs: [02-solution/content-blocks-and-inline-blocks-plan.md]
tags: [implementation, ticket, content-blocks]
---

# Task F2 — structured text + inline blocks

**Ticket:** F2
**Phase:** 3
**Scope (files/dirs you may edit):** `apps/website/src/components/modules/`

**Dependencies (blocking):** A4, F1
**Unblocks:** F3

## 1. Outcome & Business Value (why)

**Description:**
Implement structured text rendering and inline blocks.

**Outcome we expect:**
Structured text supports inline block components.

**Value (user / business):**
Completes rich-text rendering for CMS content.

## 2. Context & Scope (what/where)

**Scope:** `apps/website/src/components/modules/`

**Dependencies:** A4, F1

**Unblocks:** F3

## 3. Delivery Plan (how)

**Steps:**
1. Implement StructuredText module.
2. Map inline blocks to components.

**Acceptance criteria:**

| # | Criterion | Done |
|---|---|---|
| AC1 | Structured text renders with inline blocks. | |
| AC2 | Inline block mapping matches CMS schema. | |


## 4. Validation & Testing

Render sample structured text from CMS data.

## 5. References

- 02-solution/content-blocks-and-inline-blocks-plan.md


## 6. Notes

Keep inline blocks within StructuredText module.
