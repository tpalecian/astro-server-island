---
title: Task G3 — build-time redirects
phase: implementation
status: in-review
owner: solutions-engineering
last_updated: 2026-02-03
depends_on: [A4]
related_docs: [02-solution/seo-sitemap-redirects-error-pages-plan.md]
tags: [implementation, ticket, seo]
---

# Task G3 — build-time redirects

**Ticket:** G3
**Phase:** 4
**Scope (files/dirs you may edit):** Host config + build scripts

**Dependencies (blocking):** A4
**Unblocks:** G4

## 1. Outcome & Business Value (why)

**Description:**
Generate redirect config from getRedirects() at build.

**Outcome we expect:**
Redirects applied by host during runtime.

**Value (user / business):**
Preserves legacy URL behavior.

## 2. Context & Scope (what/where)

**Scope:** Host config + build scripts

**Dependencies:** A4

**Unblocks:** G4

## 3. Delivery Plan (how)

**Steps:**
1. Fetch redirects at build.
2. Output host config.

**Acceptance criteria:**

| # | Criterion | Done |
|---|---|---|
| AC1 | Redirect config includes all CMS redirects. | |
| AC2 | Redirects work for legacy URLs. | |


## 4. Validation & Testing

Test a sample of legacy redirects.

## 5. References

- 02-solution/seo-sitemap-redirects-error-pages-plan.md


## 6. Notes

Confirm redirectType mapping during implementation.
