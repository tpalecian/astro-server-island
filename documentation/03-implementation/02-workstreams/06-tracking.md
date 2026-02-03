---
title: Workstream — Tracking and consent
phase: implementation
status: in-review
owner: solutions-engineering
last_updated: 2026-02-03
depends_on:
  - 02-solution/external-services-and-tracking-plan.md
related_docs:
  - 03-implementation/03-tickets/i-tracking-cookie-banner.md
tags: [implementation, workstream, tracking]
---

# Workstream — Tracking and consent

## Scope
- Allowed paths: `apps/website/src/` (layouts, components), `.env.example`

## Dependencies
- Layout shell in place.

## Steps
1. Add CookieBanner and consent gating in layout.
2. Wire tracking scripts and vendor IDs.
3. Add ENABLE_TRACKING env toggle.

## Done criteria
- Tracking only runs after consent and when enabled.

## Risks / gotchas
- Ensure scripts are blocked prior to consent.

