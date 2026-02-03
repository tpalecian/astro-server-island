---
title: Task F1 — content block core modules
phase: implementation
status: in-review
owner: solutions-engineering
last_updated: 2026-02-03
depends_on: [A4, B]
related_docs: [02-solution/content-blocks-and-inline-blocks-plan.md]
tags: [implementation, ticket, content-blocks]
---

# Task F1 — content block core modules

**Ticket:** F1
**Phase:** 3
**Scope (files/dirs you may edit):** `apps/website/src/components/modules/`

**Dependencies (blocking):** A4, B
**Unblocks:** F2, F3

## 1. Outcome & Business Value (why)

**Description:**
Implement core content block modules (Text, Quote, Media).

**Outcome we expect:**
Core blocks render with props only.

**Value (user / business):**
Enables pages to render above-fold and basic content.

## 2. Context & Scope (what/where)

**Scope:** `apps/website/src/components/modules/`

**Dependencies:** A4, B

**Unblocks:** F2, F3

## 3. Delivery Plan (how)

**Steps:**
1. Implement core module components.
2. Wire props from containers.

**Acceptance criteria:**

| # | Criterion | Done |
|---|---|---|
| AC1 | Core modules exist and render without data fetching. | |
| AC2 | Modules match block mapping by _modelApiKey. | |


## 4. Validation & Testing

Render sample blocks locally and verify no data fetch in modules.

## 5. References

- 02-solution/content-blocks-and-inline-blocks-plan.md


## 6. Notes

Keep modules pure; no CMS imports.
