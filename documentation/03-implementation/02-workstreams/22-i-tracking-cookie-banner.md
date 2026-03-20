---
title: Workstream I — Tracking and CookieBanner
phase: implementation
status: in-review
owner: solutions-engineering
last_updated: 2026-02-04
depends_on: []
related_docs:
  - 01-discovery/03-tracking-and-consent.md
  - 02-solution/external-services-and-tracking-plan.md
tags: [implementation, workstream, tracking]
---

# Workstream I — Tracking and CookieBanner

**Ticket:** `03-tickets/i-tracking-cookie-banner.md` (linear; all context here)

## 0. Exact implementation idea

- **Approach (one sentence):** Add a CookieBanner component (heading, body, policy link, Accept button) that sets a consent cookie/storage on Accept; in layout, load tracking scripts (HubSpot, gtag, Meta, LinkedIn, Lead Feeder, Apollo) only when consent is given AND ENABLE*TRACKING=true; add ENABLE_TRACKING and all PUBLIC*\* vars to .env.example; no script runs before consent.
- **Exact file name(s) and paths:** Create `apps/website/src/components/CookieBanner.astro` (or client island). Edit `apps/website/src/layouts/` to gate scripts. Edit `apps/website/.env.example`. No other paths.
- **Exact props/API/types:** CookieBanner: no required props or config for heading/body/policy link (or accept from CMS). Cookie name e.g. `cookies`. Layout: check consent + ENABLE_TRACKING; inject scripts only when both true. Env: ENABLE_TRACKING, PUBLIC_HUBSPOT, PUBLIC_GTAG, etc. per solution.
- **Exact mapping/key:** N/A. Single banner; single gating logic in layout.
- **Legacy/reference behaviour:** 2022-site CookieBanner.vue; cookie name `cookies`; Accept; policy link; scripts gated.

## 1. Allowed paths

- `apps/website/src/layouts/` (script gating); `apps/website/src/components/` (CookieBanner); `apps/website/.env.example`

## 2. Blocking dependencies

- B (layout in place).

## 3. Unblocks

- J (deployment/QA: .env.example complete; tracking validated).

## 4. Contract / API

- **CookieBanner:** Component (or client island). Heading, body, policy link, Accept button. Cookie name e.g. `cookies`; on Accept set consent cookie/storage. **Gating:** Layout loads tracking scripts (HubSpot, gtag, Meta, LinkedIn, Lead Feeder, Apollo) only when consent given AND ENABLE*TRACKING=true. **Env:** ENABLE_TRACKING, PUBLIC*\* for each vendor in .env.example. No script runs before consent.

## 5. Data source & shape

- Consent: cookie or client storage. Env: import.meta.env.PUBLIC\_\*, ENABLE_TRACKING.

## 6. Out of scope / Don't do

- New vendors beyond discovery list. Server-side tracking. Do not load scripts before consent.

## 7. Steps (ordered)

1. Add ENABLE*TRACKING and all PUBLIC*\* tracking vars to .env.example.
2. Implement CookieBanner (heading, body, policy link, Accept); set consent on Accept.
3. In layout: load tracking scripts only when consent + ENABLE_TRACKING=true.

## 8. Done criteria

- CookieBanner renders; consent gates all scripts; .env.example complete; scripts load only after consent and when enabled.

## 9. Acceptance criteria

| #   | Criterion                                                              |
| --- | ---------------------------------------------------------------------- |
| AC1 | CookieBanner shows; Accept sets consent; policy link works.            |
| AC2 | No tracking script runs before consent.                                |
| AC3 | When consent + ENABLE_TRACKING=true, scripts load.                     |
| AC4 | .env.example includes ENABLE*TRACKING and all PUBLIC*\* tracking vars. |

## 10. Validation

- Load site; no tracking until Accept; after Accept and ENABLE_TRACKING=true, scripts load. Network tab check.

## 11. Solution / discovery links

- Discovery: `documentation/01-discovery/03-tracking-and-consent.md`
- Solution: `documentation/02-solution/external-services-and-tracking-plan.md`

## 12. Old code (2022-site)

- `2022-site/components/CookieBanner.vue`; layout scripts; cookie name `cookies`, Accept, policy link.
