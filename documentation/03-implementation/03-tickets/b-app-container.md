---
title: Task B — app alias and one container + module (homepage)
phase: implementation
status: in-review
owner: solutions-engineering
last_updated: 2026-02-03
depends_on: []
related_docs: []
tags: [implementation, ticket]
---

# Task B — app alias and one container + module (homepage)

**Ticket:** B  
**Phase:** 1  
**Scope (files/dirs you may edit):** `apps/website/` only. No edits to packages/service-dato or 2022-site.

**Dependencies (blocking):** A (a-service-dato) — A4 complete: getHomepage exported. B1 can start when service-dato exists; B2–B4 need getHomepage.  
**Unblocks:** All page-level work (dynamic routes, content blocks) that reuse container + module pattern.


## 1. Outcome & Business Value (why)

**Description:**  
Wire the website app to the CMS via the `@rotate/cms` alias and prove the data flow with one page. In scope: add alias in apps/website, one container that fetches homepage data via getHomepage(), one module that receives props (no fetch), and one page (e.g. index.astro) that uses the container. Out of scope: multiple pages, content blocks, design-system tokens, 2022-site edits.

**Outcome we expect:**  
Visiting the homepage (or index) shows content driven by getHomepage(). Container is server-only, calls getHomepage(), passes props to modules. Module is props-only, no CMS/API imports. App uses service-dato public API only (getHomepage, etc.).

**Value (user / business):**  
Proves the architecture (container → getter, module → props) and unblocks all future pages that follow the same pattern. Delivers first user-visible page backed by Dato.


## 2. Context & Scope (what/where)

**Scope:** `apps/website/` only. No edits to packages/service-dato or 2022-site.

**Dependencies:** A (a-service-dato) — A4 complete: getHomepage exported. B1 can start when service-dato exists; B2–B4 need getHomepage.

**Unblocks:** All page-level work (dynamic routes, content blocks) that reuse container + module pattern.

## 3. Delivery Plan (how)

**Steps:**
1. 
2. 
3. 

**Acceptance criteria:**

| # | Criterion | Done |
|---|-----------|------|
| AC1 | apps/website depends on @rotate/cms (workspace alias to service-dato) | |
| AC2 | One container exists that calls getHomepage() and passes props to modules | |
| AC3 | One module exists that receives homepage props only; no data fetch in module | |
| AC4 | One page (e.g. index.astro) uses the container; container uses the module | |
| AC5 | No imports of client/gql/models in app; only getHomepage (and types) from @rotate/cms | |

## 4. Validation & Testing

**Success metrics:**  
Homepage loads without error; data shown comes from getHomepage(). No user analytics events in this task (add in tracking ticket).

**Testing hypothesis:**  
Wiring getHomepage() in a container and passing props to a module will render the first server-driven page correctly.

**Rollout method:**  
N/A — single page; deliver when ACs are met. Rollout is part of later deployment task.


**In scope for this task:**

| Type | Scope | Notes |
|------|--------|--------|
| Unit | N/A for app shell (container/module are integration points) | Optional: snapshot or simple render test for module |
| Integration | Page build and optional dev server load | Ensure index builds and getHomepage is called |
| E2E | N/A in this task | E2E will be added in deployment/QA ticket |

**Code coverage:**  
Align with project. 80/20: focus on container data flow; module can be thin.

**80/20 focus:**  
Verify container calls getHomepage and passes props; module renders without fetch.


## 5. References

**Product / design handover:**  
Link design when available. For B, minimal shell is acceptable (header/footer from D if present).

**Reference docs / artwork:**  
- [02-solution/cms-service-pattern-and-dato-centralisation.md](../../02-solution/cms-service-pattern-and-dato-centralisation.md)  
- [.cursor/rules/architecture.mdc](../../../.cursor/rules/architecture.mdc) — containers compose existing functions only; modules props only


## 6. Notes

- Container: e.g. `apps/website/src/containers/HomePage.container.astro` — import getHomepage from '@rotate/cms'; await getHomepage(); pass to modules.
- Module: e.g. `apps/website/src/components/modules/HomeHero.astro` — props only, no CMS/API imports.
- Do not add new getters or change service-dato; use only the public API.

