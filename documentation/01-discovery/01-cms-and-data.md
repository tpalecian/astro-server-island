---
title: Discovery — CMS and data access
phase: discovery
status: approved
owner: solutions-engineering
last_updated: 2026-02-03
depends_on: []
related_docs:
  - 02-solution/cms-service-pattern-and-dato-centralisation.md
  - 05-reference/dato-vue-to-service-review.md
tags: [discovery, cms, dato, data-access, getters]
---

# Discovery — CMS and data access

## 1. Outcome & Business Value (why)

**Purpose:** Define how content is sourced so solution design is stable and implementation can proceed without CMS coupling.

**Value:** Enables future CMS swaps, reduces app complexity, and keeps data access consistent across pages.

**Success criteria:**
- CMS access is centralized and abstracted for the app.
- Getter API is explicit and stable.

## 2. Context & Scope (what/where)

**Current state:** 2022-site uses DatoCMS directly; we are consolidating into a service layer.

**In scope:** CMS access pattern, package boundaries, and getter naming.

**Out of scope:** Actual implementation details and task sequencing.

**Assumptions:**
- App consumes CMS via alias only (`@rotate/cms`).
- Containers call getters; modules receive props only.

**Dependencies:** `02-solution/cms-service-pattern-and-dato-centralisation.md`.

**Risks & mitigations:**
- Risk: direct CMS usage in app. Mitigation: enforce alias-only usage in solution docs.

## 3. Solution Design (final decisions)

- All Dato implementation lives in `packages/service-dato`.
- The app imports from `@rotate/cms` (alias) and calls **direct getters** only (no cms object).
- Getter API includes: `getHomepage`, `getPageBySlug(category, slug)`, `getRoutes`, `getNavigation`, `getGlobals`, `getCategoryBySlug`, `getCategoryCards`, `getRedirects`.
- Optional `preview?: boolean` supported on getters for draft content.

**Alternatives considered:**
- App importing Dato directly. Rejected due to coupling and future CMS swap risk.

**Non‑goals:**
- CMS migration beyond aliasing.

## 4. Delivery Plan (how)

- Finalize getter list and surface in solution design.
- Ensure alias and getter‑only contract is documented and enforced in future implementation.

**Open questions / TBD:**
- None.
