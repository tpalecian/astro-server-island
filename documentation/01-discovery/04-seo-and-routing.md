---
title: Discovery — SEO and routing
phase: discovery
status: approved
owner: solutions-engineering
last_updated: 2026-02-03
depends_on: []
related_docs:
  - 02-solution/seo-sitemap-redirects-error-pages-plan.md
tags: [discovery, seo, routing, redirects]
---

# Discovery — SEO and routing

## 1. Outcome & Business Value (why)

**Purpose:** Preserve SEO equity and routing behavior during migration.

**Value:** Prevents traffic loss, maintains indexing, and ensures user experience continuity.

**Success criteria:**
- Meta and structured data render correctly.
- Redirects are applied from Dato.
- 404/500 pages are styled.

## 2. Context & Scope (what/where)

**Current state:** 2022-site provides meta, JSON‑LD, redirects, and error pages.

**In scope:** Meta/JSON‑LD placement, redirects source, error pages, sitemap and robots strategy.

**Out of scope:** Exact build tooling or host configuration implementation.

**Assumptions:**
- Redirect data comes from Dato.

**Dependencies:** `02-solution/seo-sitemap-redirects-error-pages-plan.md`.

**Risks & mitigations:**
- Risk: SEO regressions. Mitigation: keep meta and JSON‑LD in layout and verify in QA.

## 3. Solution Design (final decisions)

- **Meta + JSON‑LD:** Rendered in the layout; page provides data via utilities.
- **Redirects:** Build‑time redirect config sourced from `getRedirects()`.
- **Error pages:** Custom 404 and 500.

**Alternatives considered:**
- Runtime redirects only. Rejected due to platform constraints and caching.

**Non‑goals:**
- Changing URL structure beyond required redirects.

## 4. Delivery Plan (how)

- Document meta and JSON‑LD utilities in solution doc.
- Define build‑time redirect output format for host.
- Add 404/500 design expectations during implementation.

**Open questions / TBD:**
- Redirect `redirectType` mapping details (301/302 and host syntax).
