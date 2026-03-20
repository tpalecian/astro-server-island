---
title: Discovery — CMS and data access
phase: discovery
status: approved
owner: solutions-engineering
last_updated: 2026-02-04
depends_on: []
related_docs:
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

**Risks & mitigations:**

- Risk: direct CMS usage in app. Mitigation: enforce alias-only usage in solution docs.

## 3. Ideas, options & references

**Ideas / options explored:**

- Centralised service layer vs. app importing CMS directly (latter rejected for coupling and future CMS swap risk).
- Getter-based API vs. exposing a CMS client object (getters preferred for explicit, stable contract).

**References & further reading:**

- `05-reference/dato-vue-to-service-review.md` — prior Dato/Vue usage and service consolidation notes.
- DatoCMS GraphQL API and project schema (source of truth for models and fields).

**Old code (2022-site) — current state / prior art:**

Discovery can point to the legacy codebase for context. Relevant paths in the `2022-site/` folder:

| What                                      | Path (2022-site)                                             |
| ----------------------------------------- | ------------------------------------------------------------ |
| Dynamic route list from Dato              | `2022-site/services/routes.js`                               |
| GraphQL fragments (blocks, inline blocks) | `2022-site/gql/fragments/` (e.g. `inline-blocks.gql.js`)     |
| GQL / Dato usage                          | `2022-site/gql/`                                             |
| Pages that fetch from Dato                | `2022-site/pages/` (e.g. `index.vue`, `_category/_slug.vue`) |

Use these paths when auditing how the 2022-site sources content; the new solution centralises this in `packages/service-dato` and exposes getters only.

**Key information:**

- 2022-site data access patterns; alias `@rotate/cms` and package boundaries.

---

For the exact approach, getter API, and delivery → see `02-solution/cms-service-pattern-and-dato-centralisation.md`.
