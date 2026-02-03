---
title: Task G1 — SEO meta + JSON-LD utilities
phase: implementation
status: in-review
owner: solutions-engineering
last_updated: 2026-02-03
depends_on: [A4]
related_docs: [02-solution/seo-sitemap-redirects-error-pages-plan.md]
tags: [implementation, ticket, seo]
---

# Task G1 — SEO meta + JSON-LD utilities

**Ticket:** G1
**Phase:** 4
**Scope (files/dirs you may edit):** `apps/website/src/` (layouts, lib)

**Dependencies (blocking):** A4
**Unblocks:** G2, G3, G4

## 1. Outcome & Business Value (why)

**Description:**
Implement meta and structured-data utilities and layout injection.

**Outcome we expect:**
Meta and JSON-LD render from page data.

**Value (user / business):**
Preserves SEO and rich snippets.

## 2. Context & Scope (what/where)

**Scope:** `apps/website/src/` (layouts, lib)

**Dependencies:** A4

**Unblocks:** G2, G3, G4

## 3. Delivery Plan (how)

**Steps:**
1. Add utilities for meta + JSON-LD.
2. Render in layout.

**Acceptance criteria:**

| # | Criterion | Done |
|---|---|---|
| AC1 | Meta tags render on key pages. | |
| AC2 | JSON-LD scripts render with correct data. | |


## 4. Validation & Testing

Inspect rendered head for meta and JSON-LD.

## 5. References

- 02-solution/seo-sitemap-redirects-error-pages-plan.md


## 6. Notes

Keep utilities in lib; pages supply data.
