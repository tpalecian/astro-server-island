---
title: Discovery — Tracking and consent
phase: discovery
status: approved
owner: solutions-engineering
last_updated: 2026-02-03
depends_on: []
related_docs:
  - 02-solution/external-services-and-tracking-plan.md
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

**Dependencies:** `02-solution/external-services-and-tracking-plan.md`.

**Risks & mitigations:**
- Risk: scripts firing before consent. Mitigation: gate in layout and use ENABLE_TRACKING.

## 3. Solution Design (final decisions)

- Replicate CookieBanner behavior from 2022-site.
- Gate scripts until consent is given.
- Use `ENABLE_TRACKING` env to toggle tracking in dev/prod.
- Include Lead Feeder and Apollo for now.

**Alternatives considered:**
- Always-on tracking in production. Rejected due to consent requirements.

**Non‑goals:**
- Vendor selection changes beyond current list.

## 4. Delivery Plan (how)

- Document vendor list and consent gating in the solution doc.
- Ensure `PUBLIC_*` env vars and `ENABLE_TRACKING` are defined in `.env.example` during implementation.

**Open questions / TBD:**
- None.
