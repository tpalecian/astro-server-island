---
title: Workstream J — Deployment and QA
phase: implementation
status: in-review
owner: solutions-engineering
last_updated: 2026-02-04
depends_on: []
related_docs:
  - 01-discovery/06-deployment-and-qa.md
  - 02-solution/deployment-and-qa.md
  - 02-solution/external-services-and-tracking-plan.md
tags: [implementation, workstream, deployment, qa]
---

# Workstream J — Deployment and QA

**Ticket:** `03-tickets/j-deployment-qa.md` (linear; all context here)

## 0. Exact implementation idea

- **Approach (one sentence):** Document Vercel deployment (build command, env in CI, redirect/sitemap handling); define a pre-launch checklist (routes 200, meta/JSON-LD, tracking, sitemap, redirects, 404/500); add Playwright e2e for key flows (homepage, category, article, 404); optionally design-matching tests; document getRedirects at build → Vercel config; no code changes to service-dato or 2022-site beyond config/docs.
- **Exact file name(s) and paths:** Edit `apps/website/` (Vercel config, env docs); add Playwright tests under repo root or apps/website; add or edit docs in `documentation/` (DEPLOYMENT, pre-launch checklist). No packages/service-dato edits beyond existing; 2022-site read-only.
- **Exact props/API/types:** Vercel: build command, env vars, redirects from getRedirects at build. Checklist: list of checks (routes, meta, tracking, sitemap, redirects, 404/500). Playwright: spec files for homepage, category, article, 404. No new app API.
- **Exact mapping/key:** N/A. Documentation and e2e only.
- **Legacy/reference behaviour:** 2022-site vercel.json/netlify.toml, .env.example, e2e if any; read-only for comparison.

## 1. Allowed paths

- `apps/website/` (Vercel config, build, env); repo root or apps/website for Playwright; documentation/ (DEPLOYMENT, pre-launch checklist). No edits to packages/service-dato beyond existing; 2022-site read-only.

## 2. Blocking dependencies

- B (homepage). E (dynamic routes). F (content blocks). G1–G4 (SEO). H (images). I (tracking, .env.example). Ideally all feature workstreams done.

## 3. Unblocks

- Cutover; no further task dependency.

## 4. Contract / API

- **Vercel:** Build and env documented; @astrojs/vercel adapter; getRedirects at build → Vercel config (G3). **Pre-launch checklist:** Doc covering: all routes 200, meta/JSON-LD present, tracking fires, conversion fires, sitemap valid, redirects tested, 404 and 500 work. **Playwright:** E2e for key flows (homepage, category, article, 404). **Design-matching:** Optional screenshot diff vs 2022-site or designs.

## 5. Data source & shape

- Env from .env.example; Vercel project config.

## 6. Out of scope / Don't do

- Change host; migrate Netlify functions. No 2022-site code edits.

## 7. Steps (ordered)

1. Document Vercel deployment (build command, env in CI, redirect/sitemap handling).
2. Define pre-launch checklist; document in documentation/.
3. Add Playwright e2e; document how to run and what “pass” means.
4. Optional: design-matching tests (screenshot diff vs 2022-site or Figma).

## 8. Done criteria

- Deployment documented; pre-launch checklist exists and is completed before cutover; Playwright e2e runnable; optional design-matching documented.

## 9. Acceptance criteria

| #   | Criterion                                                                                   |
| --- | ------------------------------------------------------------------------------------------- |
| AC1 | Deployment to Vercel documented (build, env, redirect/sitemap).                             |
| AC2 | Pre-launch checklist exists and covers routes, meta, tracking, sitemap, redirects, 404/500. |
| AC3 | Playwright e2e for key flows.                                                               |
| AC4 | Design-matching tests (optional) documented and runnable.                                   |
| AC5 | getRedirects at build → Vercel config documented.                                           |

## 10. Validation

- Deploy to staging; run e2e; complete checklist; validate redirects and sitemap.

## 11. Solution / discovery links

- Discovery: `documentation/01-discovery/06-deployment-and-qa.md`
- Solution: `documentation/02-solution/deployment-and-qa.md`, `documentation/02-solution/external-services-and-tracking-plan.md`

## 12. Old code (2022-site)

- 2022-site vercel.json/netlify.toml; .env.example; any e2e or visual test setup. Read-only for comparison.
