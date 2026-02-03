---
title: Task E — Dynamic routes + getStaticPaths
phase: implementation
status: in-review
owner: solutions-engineering
last_updated: 2026-02-03
depends_on: []
related_docs: []
tags: [implementation, ticket]
---

# Task E — Dynamic routes + getStaticPaths

**Ticket:** E  
**Phase:** 2  
**Scope (files/dirs you may edit):** `apps/website/src/pages/` (new dynamic pages, getStaticPaths). Optionally `apps/website/src/containers/` and `apps/website/src/components/` for page-level containers/modules. No edits to `packages/service-dato/` or 2022-site.

**Dependencies (blocking):** A (a-service-dato) — getRoutes(), getPageBySlug, getCategoryBySlug, getCategoryCards. B (b-app-container) — container/module pattern. C (c-discovery) — migration-map.md for route → page mapping.  
**Unblocks:** G (sitemap from getRoutes); J (deployment/QA runs against full route set).


## 1. Outcome & Business Value (why)

### Description
Add Astro dynamic routes for category landing, article/project ([category]/[slug]), and info (or slug-based) pages. Use **getRoutes()** (and optionally getRedirects) to drive **getStaticPaths** so every route is generated at build. In scope: pages under `[category]`, `[category]/[slug]`, info; getStaticPaths from getRoutes(); containers that call getPageBySlug, getCategoryBySlug, getCategoryCards. Out of scope: content blocks (Task F), SEO meta in layout (Task G), 2022-site code edits.

### Outcome we expect
All dynamic routes from 2022-site have Astro equivalents; getStaticPaths is driven by getRoutes(); category landing and article pages render with data from service-dato getters. Migration-map (C) defines route → file mapping; this task implements it.

### Value (user / business)
Completes the page skeleton so every URL from the old site has a generated page. Required for sitemap (G) and pre-launch (J). Aligns with [implementation-coverage-checklist.md](../implementation-coverage-checklist.md) §2 (getStaticPaths from getRoutes).

### Acceptance criteria

| # | Criterion | Done |
|---|-----------|------|
| AC1 | getStaticPaths for dynamic routes uses getRoutes() (and getRedirects if needed at build) | |
| AC2 | Pages exist for [category], [category]/[slug], and info (or slug from Dato) per migration-map | |
| AC3 | Category landing uses getCategoryBySlug + getCategoryCards; article/project uses getPageBySlug | |
| AC4 | Containers are server-only and call getters only; modules receive props only | |
| AC5 | Styleguide route decision documented (migrate or drop) in migration-map or task notes | |


## 2. Context & Scope (what/where)

**Scope:** `apps/website/src/pages/` (new dynamic pages, getStaticPaths). Optionally `apps/website/src/containers/` and `apps/website/src/components/` for page-level containers/modules. No edits to `packages/service-dato/` or 2022-site.

**Dependencies:** A (a-service-dato) — getRoutes(), getPageBySlug, getCategoryBySlug, getCategoryCards. B (b-app-container) — container/module pattern. C (c-discovery) — migration-map.md for route → page mapping.

**Unblocks:** G (sitemap from getRoutes); J (deployment/QA runs against full route set).

## 3. Delivery Plan (how)

**Steps:**
1. 
2. 
3. 

**Acceptance criteria:**

**Confirm as a team:**  
Achievable. Depends on A (getters), B (pattern), C (route map). No blockers if A, B, C are complete.

**Timelines / assumptions:**  
Assume A4, B1–B4, and C1–C4 are done. Migration-map defines which routes exist.

**Dependencies (upstream):**  
A (getRoutes, getPageBySlug, getCategoryBySlug, getCategoryCards); B (container/module pattern); C (migration-map.md).

**Blockers (if any):**  
None if A, B, C are complete. If getRoutes() shape changes, update pages accordingly.

**Downstream impact:**  
G (sitemap) uses same getRoutes() output. J (Playwright/pre-launch) runs against full route set.


## 3. Analytics & Measurement

**Success metrics:**  
Build succeeds; all paths from getRoutes() generate a page; no 404s for expected routes. No user analytics in this task.

**Testing hypothesis:**  
Using getRoutes() for getStaticPaths and getPageBySlug/getCategoryBySlug/getCategoryCards in containers will produce the same route coverage as 2022-site.

**Rollout method:**  
N/A — deliver when ACs are met. Rollout is part of J (deployment).


## 4. Testing

**In scope for this task:**

| Type | Scope | Notes |
|------|--------|--------|
| Unit | Optional: getStaticPaths return shape | 80/20: focus on path generation |
| Integration | Build; ensure all routes generate | Count paths vs getRoutes() |
| E2E | N/A in this task | J adds Playwright for key routes |

## 4. Validation & Testing

**Success metrics:**  
Build succeeds; all paths from getRoutes() generate a page; no 404s for expected routes. No user analytics in this task.

**Testing hypothesis:**  
Using getRoutes() for getStaticPaths and getPageBySlug/getCategoryBySlug/getCategoryCards in containers will produce the same route coverage as 2022-site.

**Rollout method:**  
N/A — deliver when ACs are met. Rollout is part of J (deployment).


**In scope for this task:**

| Type | Scope | Notes |
|------|--------|--------|
| Unit | Optional: getStaticPaths return shape | 80/20: focus on path generation |
| Integration | Build; ensure all routes generate | Count paths vs getRoutes() |
| E2E | N/A in this task | J adds Playwright for key routes |

**Code coverage:**  
Align with project. 80/20: getStaticPaths and container data flow.

**80/20 focus:**  
Paths generation and one category + one article flow; styleguide optional.


## 5. References

**Product / design handover:**  
Per migration-map and existing layout (D, B). Link design when available.

**Reference docs / artwork:**  
- [vue-to-astro-migration.md](../vue-to-astro-migration.md) §7 (dynamic routes)  
- [implementation-coverage-checklist.md](../implementation-coverage-checklist.md) §2  
- migration-map.md (C) — route → page mapping  
- [.cursor/rules/architecture.mdc](../../../.cursor/rules/architecture.mdc)


## 6. Notes

- getStaticPaths: call getRoutes() at build; return { paths, fallback } as per Astro. Optionally filter or merge with getRedirects() if redirects affect path list.
- Info page: route from getRoutes/infoPage or slug from Dato; ensure page exists per migration-map.
- Do not add new getters in service-dato; use only public API (getRoutes, getPageBySlug, getCategoryBySlug, getCategoryCards).

