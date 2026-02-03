---
title: Task G4 — 404/500 + robots.txt
phase: implementation
status: in-review
owner: solutions-engineering
last_updated: 2026-02-03
depends_on: []
related_docs: [02-solution/seo-sitemap-redirects-error-pages-plan.md]
tags: [implementation, ticket, seo]
---

# Task G4 — 404/500 + robots.txt

**Ticket:** G4
**Phase:** 4
**Scope (files/dirs you may edit):** `apps/website/src/pages/` and `public/`

**Dependencies (blocking):** None.
**Unblocks:** —

## 1. Outcome & Business Value (why)

**Description:**
Add custom error pages and robots.txt.

**Outcome we expect:**
Error pages and robots.txt are present and styled.

**Value (user / business):**
Completes SEO baseline and UX.

## 2. Context & Scope (what/where)

**Scope:** `apps/website/src/pages/` and `public/`

**Dependencies:** None.

**Unblocks:** —

## 3. Delivery Plan (how)

**Steps:**
1. Add 404 and 500 pages.
2. Add robots.txt referencing sitemap.

**Acceptance criteria:**

| # | Criterion | Done |
|---|---|---|
| AC1 | 404 and 500 pages render with styling. | |
| AC2 | robots.txt references sitemap. | |


## 4. Validation & Testing

Verify error pages in dev/staging.

## 5. References

- 02-solution/seo-sitemap-redirects-error-pages-plan.md


## 6. Notes

Align error page styling with layout shell.
