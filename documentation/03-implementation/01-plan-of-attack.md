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

1. **CMS service layer**
2. **App shell and layout**
3. **Routing and page wiring**
4. **Content blocks and ContentIsland**
5. **SEO + redirects + error pages**
6. **Tracking and consent**
7. **Images and media**
8. **Deployment + QA**

## 3. Dependencies

- CMS service layer unblocks most downstream work.
- SEO/redirects require `getRoutes()` and `getRedirects()` from CMS.
- Content blocks require CMS models + gql.

## 4. Done definition

Implementation is done when:
- All workstreams are completed.
- QA checklist passes.
- Deployment notes are documented.

