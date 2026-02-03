---
title: Inline Block — Thinking
phase: implementation
status: in-review
owner: solutions-engineering
last_updated: 2026-02-03
depends_on: [A4, F2]
related_docs: [02-solution/content-blocks-and-inline-blocks-plan.md]
tags: [implementation, ticket, content-blocks]
---

# Inline Block — Thinking

**Ticket:** IB4
**Phase:** 3
**Scope (files/dirs you may edit):** `apps/website/src/components/modules/` (StructuredText inline)

**Dependencies (blocking):** A4, F2
**Unblocks:** —

## 1. Outcome & Business Value (why)

**Description:**
Implement the `ThinkingRecord` block module mapped by `_modelApiKey`.

**Outcome we expect:**
The `ThinkingRecord` block renders with props only and matches design intent.

**Value (user / business):**
Ensures CMS-driven pages render all required blocks consistently.

## 2. Context & Scope (what/where)

**Scope:** `apps/website/src/components/modules/` (StructuredText inline)

**Legacy component:** `2022-site/gql/fragments/inline-blocks.gql.js (onThinkingRecord)`

**Design system:** Use `@rotate/design-system` tokens for typography, spacing, and layout.

**Figma:** TODO — add Figma URL for `Inline Block — Thinking`.

## 3. Delivery Plan (how)

**Steps:**
1. Create module component for `ThinkingRecord`.
2. Map props to match legacy behavior.
3. Ensure module is used via block mapping by `_modelApiKey`.

**Acceptance criteria:**

| # | Criterion | Done |
|---|---|---|
| AC1 | `ThinkingRecord` module renders without data fetching. | |
| AC2 | Props align with legacy component behavior. | |
| AC3 | Module uses design-system tokens (no ad-hoc styling). | |

## 4. Validation & Testing

- Render the block in a page with mock CMS data.
- Compare output to legacy component and Figma design.

## 5. References

- `02-solution/content-blocks-and-inline-blocks-plan.md`
- Legacy: `2022-site/gql/fragments/inline-blocks.gql.js (onThinkingRecord)`

## 6. Notes

- Inline link to thinking record (slug + title).
