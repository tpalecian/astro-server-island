---
title: Implementation plan of attack
phase: implementation
status: in-review
owner: solutions-engineering
last_updated: 2026-02-03
depends_on:
  - 01-discovery/00-index.md
  - 02-solution/00-index.md
related_docs:
  - 03-implementation/00-index.md
  - 03-implementation/02-workstreams/
tags: [implementation, plan, sequencing]
---

# Implementation plan of attack

## 1. Outcome & Business Value (why)

Deliver the approved solution design in a predictable sequence with clear ownership and minimal rework.

## 2. Sequence (recommended)

1. **CMS service layer** (A1–A4)
2. **App shell and layout** (B — homepage; C — Header, Footer, Navigation + subcomponents)
3. **Routing and page wiring** (E)
4. **Content blocks and ContentIsland** (F1–F3, FB1–FB7)
5. **SEO + redirects + error pages** (G1–G4)
6. **Tracking and consent** (I)
7. **Images and media** (H)
8. **Deployment + QA** (J)

## 3. Dependencies

- CMS service layer unblocks most downstream work.
- SEO/redirects require `getRoutes()` and `getRedirects()` from CMS.
- Content blocks require CMS models + gql.

## 4. Done definition

Implementation is done when:
- All workstreams are completed.
- QA checklist passes.
- Deployment notes are documented.

