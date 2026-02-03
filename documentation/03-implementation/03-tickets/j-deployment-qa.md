---
title: Task J — Vercel deployment + pre-launch + Playwright + design-matching
phase: implementation
status: in-review
owner: solutions-engineering
last_updated: 2026-02-03
depends_on: []
related_docs: []
tags: [implementation, ticket]
---

# Task J — Vercel deployment + pre-launch + Playwright + design-matching

**Ticket:** J  
**Phase:** 6  
**Scope (files/dirs you may edit):** `apps/website/` (config for Vercel, build, env); repo root or apps/website for Playwright config and e2e tests; documentation (e.g. DEPLOYMENT or pre-launch checklist). No edits to packages/service-dato/ beyond what’s already there; 2022-site read-only for comparison.

**Dependencies (blocking):** B (b-app-container) — at least homepage exists. E (dynamic routes) — full route set. F (content blocks) — content behaviour. G (SEO, sitemap, redirects, 404/500). H (images/media). I (tracking, CookieBanner, .env.example).  
**Unblocks:** Cutover; no further task dependency.


## 1. Outcome & Business Value (why)

### Description
Document and enable deployment to **Vercel**; add **pre-launch checklist**; implement **Playwright e2e tests** for key flows; add **design-matching tests** (e.g. screenshot diff vs old site). In scope: Vercel config (build, env in CI), redirect/sitemap handling in deploy; pre-launch checklist doc; Playwright e2e; design-matching tests. Out of scope: changing host; migrating Netlify functions.

### Outcome we expect
App deploys to Vercel; build and env are documented; pre-launch checklist exists (all routes 200, meta/JSON-LD present, tracking fires, conversion fires, sitemap valid, redirects tested, 404 and 500 work); Playwright e2e covers key flows; design-matching tests (e.g. screenshot diff) run. Aligns with [vue-to-astro-migration.md](../vue-to-astro-migration.md) §7 and [01-discovery/00-index.md](../01-discovery/00-index.md) §7.

### Value (user / business)
Safe cutover; regression coverage; design parity check before go-live. Required for launch.

### Acceptance criteria

| # | Criterion | Done |
|---|-----------|------|
| AC1 | Deployment to Vercel documented (build command, env in CI, redirect/sitemap handling) | e.g. DEPLOYMENT.md or README |
| AC2 | Pre-launch checklist exists and covers: all routes 200, meta/JSON-LD present, tracking fires, conversion fires, sitemap valid, redirects tested, 404 and 500 work | |
| AC3 | Playwright e2e tests for key flows (e.g. homepage, one category, one article, 404) | |
| AC4 | Design-matching tests (e.g. screenshot diff vs 2022-site or designs) using Playwright or similar | |
| AC5 | getRedirects() at build → Vercel config (or already done in G); documented in deployment doc | |


## 2. Context & Scope (what/where)

**Scope:** `apps/website/` (config for Vercel, build, env); repo root or apps/website for Playwright config and e2e tests; documentation (e.g. DEPLOYMENT or pre-launch checklist). No edits to packages/service-dato/ beyond what’s already there; 2022-site read-only for comparison.

**Dependencies:** B (b-app-container) — at least homepage exists. E (dynamic routes) — full route set. F (content blocks) — content behaviour. G (SEO, sitemap, redirects, 404/500). H (images/media). I (tracking, CookieBanner, .env.example).

**Unblocks:** Cutover; no further task dependency.

## 3. Delivery Plan (how)

**Steps:**
1. 
2. 
3. 

**Acceptance criteria:**

**Confirm as a team:**  
Achievable. Depends on B, E, F, G, H, I being complete so the app is full-featured for e2e and pre-launch.

**Timelines / assumptions:**  
Assume all previous tasks (B, E, F, G, H, I) are done. Vercel project exists or is created; env in CI per .env.example.

**Dependencies (upstream):**  
B (homepage); E (dynamic routes); F (content blocks); G (SEO, redirects, 404/500); H (media); I (tracking, .env.example).

**Blockers (if any):**  
None if B, E, F, G, H, I are complete. If any is missing, pre-launch checklist will show gaps.

**Downstream impact:**  
None — this is the final implementation task before cutover.


## 3. Analytics & Measurement

**Success metrics:**  
Pre-launch checklist passed; e2e green; design-matching tests run (and any failures documented or fixed). Deployment doc and checklist are the “measurement” for go/no-go.

**Testing hypothesis:**  
Playwright e2e and design-matching tests will catch regressions and design drift before cutover.

**Rollout method:**  
Deploy to Vercel (staging/preview); run checklist and tests; then production cutover per product process.


## 4. Testing

**In scope for this task:**

| Type | Scope | Notes |
|------|--------|--------|
| Unit | N/A (deployment/QA task) | |
| Integration | Build and deploy pipeline | Ensure build + env work in CI |
| E2E | Playwright e2e for key flows | Homepage, category, article, 404 |
| Design-matching | Screenshot or visual diff vs 2022-site/designs | 80/20: key pages |

## 4. Validation & Testing

**Success metrics:**  
Pre-launch checklist passed; e2e green; design-matching tests run (and any failures documented or fixed). Deployment doc and checklist are the “measurement” for go/no-go.

**Testing hypothesis:**  
Playwright e2e and design-matching tests will catch regressions and design drift before cutover.

**Rollout method:**  
Deploy to Vercel (staging/preview); run checklist and tests; then production cutover per product process.


**In scope for this task:**

| Type | Scope | Notes |
|------|--------|--------|
| Unit | N/A (deployment/QA task) | |
| Integration | Build and deploy pipeline | Ensure build + env work in CI |
| E2E | Playwright e2e for key flows | Homepage, category, article, 404 |
| Design-matching | Screenshot or visual diff vs 2022-site/designs | 80/20: key pages |

**Code coverage:**  
E2E and design-matching coverage per project standard. 80/20: critical paths and key pages.

**80/20 focus:**  
Critical user flows and key page visuals; not every route in e2e.


## 5. References

**Product / design handover:**  
Design-matching tests compare to 2022-site or approved designs. Link design assets if needed.

**Reference docs / artwork:**  
- [vue-to-astro-migration.md](../vue-to-astro-migration.md) §7  
- [01-discovery/00-index.md](../01-discovery/00-index.md) §7.2, §7.3  
- [implementation-coverage-checklist.md](../implementation-coverage-checklist.md) §10  
- [seo-sitemap-redirects-error-pages-plan.md](../seo-sitemap-redirects-error-pages-plan.md) (redirects at build)  


## 6. Notes

- Vercel: build command, env in CI (Dato, PUBLIC_*, ENABLE_TRACKING); redirect config from getRedirects() at build (G). Document in DEPLOYMENT.md or apps/website README.
- Pre-launch checklist: all routes 200, meta/JSON-LD present, tracking fires, conversion fires, sitemap valid, redirects tested, 404 and 500 work.
- Design-matching: e.g. Playwright screenshot comparison to 2022-site or Figma; document how to run and what “pass” means.

