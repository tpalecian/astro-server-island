---
title: Task I — Tracking + CookieBanner (external services)
phase: implementation
status: in-review
owner: solutions-engineering
last_updated: 2026-02-03
depends_on: []
related_docs: []
tags: [implementation, ticket]
---

# Task I — Tracking + CookieBanner (external services)

**Ticket:** I  
**Phase:** 5  
**Scope (files/dirs you may edit):** `apps/website/` — layout (Base.astro or equivalent) for tracking scripts; CookieBanner component (client island); footer/layout for Typeform embed and CTA; .env.example with Dato + PUBLIC_* + ENABLE_TRACKING. No edits to packages/service-dato/ or 2022-site.

**Dependencies (blocking):** B or D (b-app-container or d-design-system-layout) — layout (Base.astro) and footer exist so scripts and CookieBanner can be added.  
**Unblocks:** J (pre-launch checklist includes tracking fires, conversion fires, .env.example complete).


## 1. Outcome & Business Value (why)

### Description
Implement all tracking scripts, CookieBanner, and conversion behaviour so the Astro app matches 2022-site. **Layout** loads HubSpot, gtag, Meta, LinkedIn, Lead Feeder, Apollo; **ENABLE_TRACKING** env toggles scripts. **CookieBanner** (like 2022-site) gates scripts until consent. Typeform embed + “Get in touch” CTA; gtag conversion on CTA click. .env.example with Dato + all PUBLIC_* + ENABLE_TRACKING. In scope: scripts in layout, CookieBanner, gate until consent, Typeform, CTA conversion, env. Out of scope: changing which services we use; backend functions (Asana/Harvest).

### Outcome we expect
Every page gets tracking scripts from layout (when ENABLE_TRACKING is on); CookieBanner shows and gates scripts until Accept; Typeform popup and “Get in touch” CTA work; gtag conversion fires on CTA click. .env.example documents Dato + PUBLIC_* + ENABLE_TRACKING. Aligns with [external-services-and-tracking-plan.md](../external-services-and-tracking-plan.md) and [01-discovery/00-index.md](../01-discovery/00-index.md) §3.

### Value (user / business)
Marketing and conversion behaviour preserved after migration; consent-compliant; single .env.example so other the team and CI have context.

### Acceptance criteria

| # | Criterion | Done |
|---|-----------|------|
| AC1 | All tracking scripts in layout (HubSpot, gtag, Meta, LinkedIn, Lead Feeder, Apollo); IDs from env (PUBLIC_* or equivalent) | |
| AC2 | ENABLE_TRACKING env toggles scripts (omit or disable when false) | |
| AC3 | CookieBanner component (like 2022-site: heading, body, policy link, Accept); gates tracking until consent | |
| AC4 | Typeform embed + “Get in touch” CTA (data-tf-popup from env); gtag conversion on CTA click (send_to from env) | |
| AC5 | Noscript fallbacks for Meta, LinkedIn | |
| AC6 | .env.example in apps/website with Dato + all PUBLIC_* + ENABLE_TRACKING | |


## 2. Context & Scope (what/where)

**Scope:** `apps/website/` — layout (Base.astro or equivalent) for tracking scripts; CookieBanner component (client island); footer/layout for Typeform embed and CTA; .env.example with Dato + PUBLIC_* + ENABLE_TRACKING. No edits to packages/service-dato/ or 2022-site.

**Dependencies:** B or D (b-app-container or d-design-system-layout) — layout (Base.astro) and footer exist so scripts and CookieBanner can be added.

**Unblocks:** J (pre-launch checklist includes tracking fires, conversion fires, .env.example complete).

## 3. Delivery Plan (how)

**Steps:**
1. 
2. 
3. 

**Acceptance criteria:**

**Confirm as a team:**  
Achievable. Depends on layout and footer (B or D). No blockers if Base.astro and footer exist.

**Timelines / assumptions:**  
Assume B/D are done (layout, footer). All service IDs from external-services plan; replicate 2022-site CookieBanner behaviour.

**Dependencies (upstream):**  
B or D (Base.astro, footer). Scripts go in layout; CookieBanner and CTA in layout or footer.

**Blockers (if any):**  
None if layout exists. If layout is edited by G (SEO) concurrently, coordinate (I adds scripts; G adds meta).

**Downstream impact:**  
J (pre-launch) checks tracking fires, conversion fires, .env.example.


## 3. Analytics & Measurement

**Success metrics:**  
When ENABLE_TRACKING is on and consent given: scripts load; gtag conversion fires on CTA click. .env.example is complete. Pre-launch (J) validates.

**Testing hypothesis:**  
Gating scripts behind CookieBanner and ENABLE_TRACKING will preserve behaviour while staying consent-compliant.

**Rollout method:**  
N/A — deliver when ACs are met. Rollout is part of J; can use ENABLE_TRACKING=false in non-prod until go-live.


## 4. Testing

**In scope for this task:**

| Type | Scope | Notes |
|------|--------|--------|
| Unit | Optional: CookieBanner visibility / gate logic | 80/20: focus on consent gate |
| Integration | ENABLE_TRACKING false → scripts omitted | |
| E2E | Optional: CTA click → conversion (J may cover) | J adds pre-launch checks |

## 4. Validation & Testing

**Success metrics:**  
When ENABLE_TRACKING is on and consent given: scripts load; gtag conversion fires on CTA click. .env.example is complete. Pre-launch (J) validates.

**Testing hypothesis:**  
Gating scripts behind CookieBanner and ENABLE_TRACKING will preserve behaviour while staying consent-compliant.

**Rollout method:**  
N/A — deliver when ACs are met. Rollout is part of J; can use ENABLE_TRACKING=false in non-prod until go-live.


**In scope for this task:**

| Type | Scope | Notes |
|------|--------|--------|
| Unit | Optional: CookieBanner visibility / gate logic | 80/20: focus on consent gate |
| Integration | ENABLE_TRACKING false → scripts omitted | |
| E2E | Optional: CTA click → conversion (J may cover) | J adds pre-launch checks |

**Code coverage:**  
Align with project. 80/20: CookieBanner and script gating.

**80/20 focus:**  
Consent gate and CTA conversion; skip exhaustive script load checks.


## 5. References

**Product / design handover:**  
Replicate 2022-site CookieBanner (heading, body, link, Accept). Link design if updated.

**Reference docs / artwork:**  
- [external-services-and-tracking-plan.md](../external-services-and-tracking-plan.md)  
- [01-discovery/00-index.md](../01-discovery/00-index.md) §3  
- [implementation-coverage-checklist.md](../implementation-coverage-checklist.md) §7, §8  
- 2022-site: CookieBanner.vue, scripts inventory  


## 6. Notes

- CookieBanner: replicate 2022-site (cookie name `cookies`, Accept button, policy link). Gate all tracking scripts until consent.
- Single .env.example: Dato vars + all PUBLIC_* (or equivalent) for HubSpot, gtag, Meta, LinkedIn, Lead Feeder, Apollo, Typeform, conversion + ENABLE_TRACKING. Document in README.

