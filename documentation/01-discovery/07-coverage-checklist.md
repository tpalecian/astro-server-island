---
title: Discovery — Coverage checklist by feature
phase: discovery
status: in-review
owner: solutions-engineering
last_updated: 2026-02-04
depends_on:
  - 01-discovery/01-cms-and-data.md
  - 01-discovery/02-content-blocks-and-rendering.md
  - 01-discovery/03-tracking-and-consent.md
  - 01-discovery/04-seo-and-routing.md
  - 01-discovery/05-images-and-media.md
  - 01-discovery/06-deployment-and-qa.md
related_docs: []
tags: [coverage, discovery, feature-map]
---

# Discovery — Coverage checklist by feature

## 1. Outcome & Business Value (why)

**Purpose:** Confirm every discovery decision maps to a solution doc.

**Value:** Reduces re‑work before Implementation.

**Success criteria:**
- Each feature area has a solution doc reference.

## 2. Context & Scope (what/where)

**Current state:** Discovery is split by feature; implementation is active and driven from `03-implementation/`.

**In scope:** Mapping discovery decisions to solution docs.

**Out of scope:** Task‑level mapping (kept in `99-archive/`).

**Assumptions:** Discovery docs are final unless updated.

**Risks & mitigations:**
- Risk: solution doc missing for a feature. Mitigation: flag as a gap below.

## 3. Ideas, options & references

**Ideas / options explored:**
- Single coverage table (this doc) vs. task-level mapping (out of scope; kept in archive).
- Keeping this table updated when discovery or solution docs change.

**References & further reading:**
- All discovery docs in `01-discovery/` (01–06); solution docs in `02-solution/` (solution references discovery via `depends_on`).
- Legacy source: 2022-site (each discovery doc 01–06 lists **Old code (2022-site)** paths for that feature).

**Key information:**
- Feature list derived from discovery scope; solution doc names and paths.

**Coverage map (discovery → solution):**

| Feature | Discovery doc | Solution doc | Covered? | Gap / action |
|---|---|---|---|---|
| CMS and data | `01-discovery/01-cms-and-data.md` | `02-solution/cms-service-pattern-and-dato-centralisation.md` | ✅ | — |
| Content blocks | `01-discovery/02-content-blocks-and-rendering.md` | `02-solution/content-blocks-and-inline-blocks-plan.md` | ✅ | — |
| Tracking and consent | `01-discovery/03-tracking-and-consent.md` | `02-solution/external-services-and-tracking-plan.md` | ✅ | — |
| SEO and routing | `01-discovery/04-seo-and-routing.md` | `02-solution/seo-sitemap-redirects-error-pages-plan.md` | ✅ | — |
| Images and media | `01-discovery/05-images-and-media.md` | `02-solution/images-and-media.md` | ✅ | — |
| Deployment and QA | `01-discovery/06-deployment-and-qa.md` | `02-solution/deployment-and-qa.md` | ✅ | — |
