---
title: Solution — External services and tracking
phase: solution-design
status: in-review
owner: solutions-engineering
last_updated: 2026-02-04
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

**Vendor scope:** Lead Feeder, Apollo (and any others from discovery). Document exact script IDs and env var names in `apps/website/.env.example` when implemented.

**Alternatives considered:**

- Always‑on tracking. Rejected in discovery; recorded here for context.

**Non‑goals:**

- Expanding vendor list beyond current requirements.

### References (exact)

**Informational (read before / during implementation):**

| What                           | Path or URL                                                                                                                                                            |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Discovery (scope, constraints) | `documentation/01-discovery/03-tracking-and-consent.md`                                                                                                                |
| Implementation tickets         | `documentation/03-implementation/03-tickets/` (e.g. `i-tracking-cookie-banner.md`)                                                                                     |
| Vercel env vars                | [Vercel: Environment Variables](https://vercel.com/docs/projects/environment-variables)                                                                                |
| GDPR / consent (reference)     | [ICO Cookie guidance](https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guide-to-pecr/cookies-and-similar-technologies/) |

**Planned locations (where to implement):**

| What                                  | Path                                                                 |
| ------------------------------------- | -------------------------------------------------------------------- |
| Env template (add tracking vars here) | `apps/website/.env.example`                                          |
| Layout (gate scripts in head)         | `apps/website/src/layouts/` (e.g. `base-layout.astro`)               |
| CookieBanner component                | `apps/website/src/components/` (e.g. `CookieBanner.astro` or island) |

### Code examples (contract to implement)

**Implement in `apps/website/.env.example` — required vars:**

```env
# Dato (existing)
DATOCMS_API_KEY="YOUR_DATO_API_KEY"

# Tracking gate — set to "true" only in production when consent is required
ENABLE_TRACKING="false"

# Vendor IDs (PUBLIC_* so they are available in client code after consent)
PUBLIC_GTM_ID=""
PUBLIC_GA_ID=""
# Add others as needed: Lead Feeder, Apollo, etc.
```

**Gating pattern — implement in layout or island so that:**

```ts
// Only load tracking scripts when consent given AND ENABLE_TRACKING is true
const enableTracking = import.meta.env.PUBLIC_ENABLE_TRACKING === 'true'
if (consentGiven && enableTracking) {
  // Load GTM, GA, or other scripts
}
```

**Validation:** No analytics/tracking script may run until consent is stored and `ENABLE_TRACKING=true` in env.

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
