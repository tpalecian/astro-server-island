---
title: Discovery — Tracking and consent
phase: discovery
status: approved
owner: solutions-engineering
last_updated: 2026-02-04
depends_on: []
related_docs: []
tags: [discovery, tracking, consent, analytics]
---

# Discovery — Tracking and consent

## 1. Outcome & Business Value (why)

**Purpose:** Define tracking requirements and consent behavior to satisfy compliance and analytics needs.

**Value:** Ensures data collection is compliant and consistent across environments.

**Success criteria:**

- Tracking is disabled without consent.
- Tracking can be toggled per environment.

## 2. Context & Scope (what/where)

**Current state:** 2022-site uses a CookieBanner and gates scripts.

**In scope:** Consent gating, env toggles, and vendor inclusion.

**Out of scope:** Implementation of individual scripts.

**Assumptions:**

- Consent precedes any analytics script execution.

**Risks & mitigations:**

- Risk: scripts firing before consent. Mitigation: gate in layout and use ENABLE_TRACKING.

## 3. Ideas, options & references

**Ideas / options explored:**

- Always-on tracking in production vs. consent-gated (consent required for compliance).
- CookieBanner behaviour from 2022-site as reference for UX and gating.

**References & further reading:**

- 2022-site CookieBanner and script gating; env toggles for tracking.
- GDPR / consent best practices; vendor docs (Lead Feeder, Apollo if applicable).

**Old code (2022-site) — current state / prior art:**

| What                   | Path (2022-site)                                                                                           |
| ---------------------- | ---------------------------------------------------------------------------------------------------------- |
| CookieBanner component | `2022-site/components/CookieBanner.vue` (or equivalent; cookie name `cookies`, Accept button, policy link) |
| Layout / scripts gate  | 2022-site layout that loads HubSpot, gtag, Meta, LinkedIn, Lead Feeder, Apollo; gate until consent         |
| Scripts inventory      | Audit 2022-site layout and any plugin for tracking script inclusion                                        |

Use these paths when replicating consent behaviour and script gating in the new app.

**Key information:**

- Current vendors and script inclusion; `ENABLE_TRACKING` and `PUBLIC_*` env usage.

---

For the exact approach, vendor list, and delivery → see `02-solution/external-services-and-tracking-plan.md`.
