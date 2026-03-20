---
title: Ticket I — tracking and CookieBanner
phase: implementation
status: approved
owner: solutions-engineering
last_updated: 2026-02-04
depends_on: [app container (homepage + module)]
tags: [implementation, ticket, tracking]
---

# Ticket I — tracking and CookieBanner

---

## Description, Value & ACs

**Scope:** Edit `apps/website/src/layouts/` (script gating); `apps/website/src/components/` (CookieBanner); `apps/website/.env.example`. **CookieBanner:** Component (or client island). Heading, body, policy link, Accept button. Cookie name e.g. `cookies`; on Accept set consent cookie/storage. **Gating:** Layout loads tracking scripts (HubSpot, gtag, Meta, LinkedIn, Lead Feeder, Apollo) only when consent given AND ENABLE*TRACKING=true. **Env:** ENABLE_TRACKING, PUBLIC*\* for each vendor in .env.example. No script runs before consent. Out of scope: new vendors beyond discovery list; server-side tracking.

**Outcome:** CookieBanner renders; consent gates all scripts; .env.example complete; scripts load only after consent and when enabled.

**Value:** Consent-compliant tracking; scripts only after user acceptance.

**Acceptance criteria:**

| #   | Criterion                                                              | Done |
| --- | ---------------------------------------------------------------------- | ---- |
| AC1 | CookieBanner shows; Accept sets consent; policy link works.            |      |
| AC2 | No tracking script runs before consent.                                |      |
| AC3 | When consent + ENABLE_TRACKING=true, scripts load.                     |      |
| AC4 | .env.example includes ENABLE*TRACKING and all PUBLIC*\* tracking vars. |      |

---

## Feasibility & Dependencies

**Blocking:** App container (layout in place).  
**Unblocks:** Deployment + QA (.env.example complete; tracking validated).

**Dependencies / risks:** Do not load scripts before consent.

---

## Analytics & Measurement

N/A — implementation task. Success = ACs met; tracking fires only after consent when enabled.

---

## Testing

Load site; no tracking until Accept; after Accept and ENABLE_TRACKING=true, scripts load. Network tab check.

---

## Design & References

**Figma / design:** [Add when available for CookieBanner]

---

## Notes

Steps: (1) Add ENABLE*TRACKING and all PUBLIC*\* tracking vars to .env.example. (2) Implement CookieBanner (heading, body, policy link, Accept); set consent on Accept. (3) In layout: load tracking scripts only when consent + ENABLE_TRACKING=true.
