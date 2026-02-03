---
title: Solution — External services and tracking
phase: solution-design
status: in-review
owner: solutions-engineering
last_updated: 2026-02-03
depends_on:
  - 01-discovery/03-tracking-and-consent.md
related_docs:
  - 02-solution/cms-service-pattern-and-dato-centralisation.md
  - 03-implementation/vue-to-astro-migration.md
tags: [solution, tracking, consent, analytics, external-services]
---

# Solution — External services and tracking

## 1. Outcome & Business Value (why)

**Source:** Decisions and outcomes are defined in `01-discovery/03-tracking-and-consent.md`.

**This doc focuses on:** the **solution approach** and delivery shape for tracking and consent.

## 2. Context & Scope (what/where)

**Discovery reference:** `01-discovery/03-tracking-and-consent.md` (scope, constraints, decisions).

**In scope here:** consent gating approach, vendor integration pattern, and delivery plan.

## 3. Solution Design (how, at a high level)

**Success criteria:**
- Tracking scripts load only after consent.
- `ENABLE_TRACKING` gates all tracking in non‑prod.
- All required vendor IDs are configured via env.


**Proposed approach:**
- Implement a CookieBanner and gate scripts until consent.
- Use `ENABLE_TRACKING` to toggle tracking per environment.

**Interfaces & data:**
- Required env vars: `PUBLIC_*` for vendor IDs plus `ENABLE_TRACKING`.

**Vendor scope:**
- HubSpot, GTM/gtag, Meta, LinkedIn, Lead Feeder, Apollo, Typeform.

**Alternatives considered:**
- Always‑on tracking. Rejected in discovery; recorded here for context.

**Non‑goals:**
- Expanding vendor list beyond current requirements.

## 4. Delivery Plan (how, at a practical level)

**Phases / steps:**
1. Define vendor list and env vars.
2. Implement CookieBanner and gating in layout.
3. Add conversion tracking for CTA events.

**Deliverables:**
- Consent‑gated scripts.
- `.env.example` includes all tracking vars.

**Validation:**
- Scripts load only after consent and when `ENABLE_TRACKING=true`.

**Open questions / TBD:**
- None.
