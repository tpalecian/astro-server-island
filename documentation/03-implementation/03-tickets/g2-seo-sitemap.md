---
title: Task G2 — sitemap generation
phase: implementation
status: in-review
owner: solutions-engineering
last_updated: 2026-02-03
depends_on: [A4]
related_docs: [02-solution/seo-sitemap-redirects-error-pages-plan.md]
tags: [implementation, ticket, seo]
---

# Task G2 — sitemap generation

**Ticket:** G2
**Phase:** 4
**Scope (files/dirs you may edit):** `apps/website/src/` (sitemap generation)

**Dependencies (blocking):** A4
**Unblocks:** G3, G4

## 1. Outcome & Business Value (why)

**Description:**
Generate sitemap.xml from getRoutes().

**Outcome we expect:**
Sitemap includes all routes from CMS.

**Value (user / business):**
Maintains indexing coverage.

## 2. Context & Scope (what/where)

**Scope:** `apps/website/src/` (sitemap generation)

**Dependencies:** A4

**Unblocks:** G3, G4

## 3. Delivery Plan (how)

**Steps:**
1. Generate sitemap at build time.
2. Validate sitemap output.

**Acceptance criteria:**

| # | Criterion | Done |
|---|---|---|
| AC1 | Sitemap contains all CMS routes. | |
| AC2 | Sitemap passes validation. | |


## 4. Validation & Testing

Validate sitemap with standard tools.

## 5. References

- 02-solution/seo-sitemap-redirects-error-pages-plan.md


## 6. Notes

Use base URL from config/env.
