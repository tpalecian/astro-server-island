---
title: Solution — Deployment and QA
phase: solution-design
status: in-review
owner: solutions-engineering
last_updated: 2026-02-03
depends_on:
  - 01-discovery/06-deployment-and-qa.md
related_docs:
  - 02-solution/seo-sitemap-redirects-error-pages-plan.md
  - 02-solution/external-services-and-tracking-plan.md
  - 03-implementation/vue-to-astro-migration.md
tags: [solution, deployment, qa, vercel, testing]
---

# Solution — Deployment and QA

## 1. Outcome & Business Value (why)

**Source:** Decisions and outcomes are defined in `01-discovery/06-deployment-and-qa.md`.

**This doc focuses on:** the **solution approach** and delivery shape for deployment and QA.

## 2. Context & Scope (what/where)

**Discovery reference:** `01-discovery/06-deployment-and-qa.md` (scope, constraints, decisions).

**In scope here:** deployment approach, QA strategy, and validation plan.

## 3. Solution Design (how, at a high level)

**Success criteria:**
- Deployment host is Vercel with documented env requirements.
- Pre‑launch checklist is defined and used.
- Playwright e2e and visual checks are part of release validation.


**Proposed approach:**
- **Host:** Vercel.
- **Validation:** Pre‑launch checklist + automated tests.
- **Testing:** Playwright e2e and visual comparison against old site.
- **Env:** Single `.env.example` including Dato and all tracking vars.

**Interfaces & data:**
- Vercel build uses environment variables and build‑time outputs (sitemap, redirects).

**Alternatives considered:**
- Hosting elsewhere. Rejected in discovery; recorded here for context.

**Non‑goals:**
- Changing CI provider or build system beyond what Vercel requires.

## 4. Delivery Plan (how, at a practical level)

**Phases / steps:**
1. Document Vercel build and env requirements.
2. Define pre‑launch checklist.
3. Implement Playwright e2e and visual checks.

**Deliverables:**
- Deployment notes (host, env, build).
- QA checklist and automated test plan.

**Validation:**
- Tests pass; checklist completed prior to cutover.

**Open questions / TBD:**
- None.
