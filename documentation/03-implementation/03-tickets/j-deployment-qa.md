---
title: Ticket J — deployment and QA
phase: implementation
status: approved
owner: solutions-engineering
last_updated: 2026-02-04
depends_on: [app container, dynamic routes, core content block modules, SEO (meta/sitemap/redirects/errors), images/media, tracking + CookieBanner]
tags: [implementation, ticket, deployment, qa]
---

# Ticket J — deployment and QA

---

## Description, Value & ACs

**Scope:** Edit `apps/website/` (Vercel config, build, env); repo root or apps/website for Playwright; documentation/ (DEPLOYMENT, pre-launch checklist). No edits to packages/service-dato beyond existing; 2022-site read-only. **Vercel:** Build and env documented; @astrojs/vercel adapter; getRedirects at build → Vercel config (redirects ticket). **Pre-launch checklist:** Doc covering: all routes 200, meta/JSON-LD present, tracking fires, conversion fires, sitemap valid, redirects tested, 404 and 500 work. **Playwright:** E2e for key flows (homepage, category, article, 404). **Design-matching:** Optional screenshot diff vs 2022-site or designs. Out of scope: change host; migrate Netlify functions; 2022-site code edits.

**Outcome:** Deployment documented; pre-launch checklist exists and is completed before cutover; Playwright e2e runnable; optional design-matching documented.

**Value:** Repeatable deploy and QA; confidence before cutover.

**Acceptance criteria:**

| # | Criterion | Done |
|---|-----------|------|
| AC1 | Deployment to Vercel documented (build, env, redirect/sitemap). | |
| AC2 | Pre-launch checklist exists and covers routes, meta, tracking, sitemap, redirects, 404/500. | |
| AC3 | Playwright e2e for key flows. | |
| AC4 | Design-matching tests (optional) documented and runnable. | |
| AC5 | getRedirects at build → Vercel config documented. | |

---

## Feasibility & Dependencies

**Blocking:** App container; dynamic routes; core content block modules; SEO (meta, sitemap, redirects, errors); images/media; tracking + CookieBanner. Ideally all feature work done.  
**Unblocks:** Cutover; no further task dependency.

**Dependencies / risks:** Env from .env.example; Vercel project config.

---

## Analytics & Measurement

N/A — deployment/QA task. Success = ACs met; checklist completed before cutover.

---

## Testing

Deploy to staging; run e2e; complete checklist; validate redirects and sitemap.

---

## Design & References

**Figma / design:** [Add when available for design-matching]

---

## Notes

Steps: (1) Document Vercel deployment (build command, env in CI, redirect/sitemap handling). (2) Define pre-launch checklist; document in documentation/. (3) Add Playwright e2e; document how to run and what “pass” means. (4) Optional: design-matching tests (screenshot diff vs 2022-site or Figma).
