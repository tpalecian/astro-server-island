---
title: Discovery — Deployment and QA expectations
phase: discovery
status: approved
owner: solutions-engineering
last_updated: 2026-02-03
depends_on: []
related_docs:
  - 02-solution/seo-sitemap-redirects-error-pages-plan.md
  - 02-solution/external-services-and-tracking-plan.md
  - 03-implementation/vue-to-astro-migration.md
tags: [discovery, deployment, qa, vercel]
---

# Discovery — Deployment and QA expectations

## 1. Outcome & Business Value (why)

**Purpose:** Align on where we deploy and how we validate readiness.

**Value:** Minimizes launch risk and ensures consistent release quality.

**Success criteria:**

- Deployment target is explicit.
- QA expectations are documented.

## 2. Context & Scope (what/where)

**Current state:** 2022-site is deployed independently; new app will replace it.

**In scope:** Host choice, QA expectations, env requirements.

**Out of scope:** Exact CI/CD steps and scripts.

**Assumptions:**

- Vercel remains the target host.

**Dependencies:** `03-implementation/vue-to-astro-migration.md` for later implementation details.

**Risks & mitigations:**

- Risk: insufficient QA prior to cutover. Mitigation: pre‑launch checklist + automated tests.

## 3. Solution Design (final decisions)

- **Deployment host:** Vercel.
- **QA:** Pre‑launch checklist required.
- **Testing:** Playwright e2e tests and design‑matching (visual) checks.
- **Env:** Single `.env.example` including Dato and all tracking vars.

**Alternatives considered:**

- Hosting elsewhere. Rejected due to current infrastructure alignment.

**Non‑goals:**

- Migrating CI/CD tooling beyond what’s needed for Vercel.

## 4. Delivery Plan (how)

- Define checklist items during implementation planning.
- Ensure env var requirements are documented in the app README when implementation starts.

**Open questions / TBD:**

- None.
