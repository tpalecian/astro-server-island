---
title: Solution — CMS service pattern and Dato centralisation
phase: solution-design
status: in-review
owner: solutions-engineering
last_updated: 2026-02-03
depends_on:
  - 01-discovery/01-cms-and-data.md
related_docs:
  - 05-reference/dato-vue-to-service-review.md
  - 03-implementation/vue-to-astro-migration.md
tags: [solution, cms, dato, service-layer, getters]
---

# Solution — CMS service pattern and Dato centralisation

## 1. Outcome & Business Value (why)

**Source:** Decisions and outcomes are defined in `01-discovery/01-cms-and-data.md`.

**This doc focuses on:** the concrete **solution approach** and delivery shape for the CMS layer.

## 2. Context & Scope (what/where)

**Discovery reference:** `01-discovery/01-cms-and-data.md` (scope, constraints, decisions).

**In scope here:** package boundaries, interfaces, and delivery plan.

## 3. Solution Design (how, at a high level)

**Success criteria:**
- App imports CMS via `@rotate/cms` only.
- Direct getters are the only public CMS API.
- CMS implementation is isolated to `packages/service-dato`.


**Proposed approach:**
- Implement a single CMS package: `packages/service-dato`.
- Export **direct getters** only (no `cms` object).
- Alias `@rotate/cms` to `packages/service-dato` in the app.

**System boundaries:**
- **service-dato:** client, gql, models, getters, types.
- **app:** containers call getters only; modules accept props only.

**Interfaces & data:**
- Getters surface area is defined in discovery; this doc describes **where and how** they are implemented (service package, direct exports).
- Client follows DatoCMS Astro pattern: `@datocms/cda-client` + `executeQuery`.

**Alternatives considered:**
- Direct CMS access in app. Rejected in discovery; kept here as a boundary reminder.

**Non‑goals:**
- CMS migration beyond aliasing.

## 4. Delivery Plan (how, at a practical level)

**Phases / steps:**
1. Define types, gql, and models in `packages/service-dato`.
2. Implement direct getters and export only types + getters.
3. Wire app alias to `@rotate/cms`.

**Deliverables:**
- `packages/service-dato` with client, gql, models, and getters.
- App uses `@rotate/cms` only.

**Validation:**
- Static check: no app imports from service‑dato internals.
- Getter calls used in containers only.

**Open questions / TBD:**
- None.
