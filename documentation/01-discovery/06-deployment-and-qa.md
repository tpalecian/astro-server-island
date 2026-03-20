---
title: Discovery — Deployment and QA expectations
phase: discovery
status: approved
owner: solutions-engineering
last_updated: 2026-02-04
depends_on: []
related_docs: []
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

**Risks & mitigations:**

- Risk: insufficient QA prior to cutover. Mitigation: pre‑launch checklist + automated tests.

## 3. Ideas, options & references

**Ideas / options explored:**

- Vercel vs. other hosts (Vercel retained for current infrastructure).
- Pre‑launch checklist + Playwright e2e and design/visual checks vs. manual-only QA.
- Single `.env.example` for Dato and tracking vars (documented in app README).

**References & further reading:**

- Vercel deployment and env docs; Playwright e2e patterns.
- 2022-site deployment and QA process.

**Old code (2022-site) — current state / prior art:**

| What          | Path (2022-site)                                                              |
| ------------- | ----------------------------------------------------------------------------- |
| Deploy config | 2022-site `vercel.json`, `netlify.toml`, or host-specific config at repo root |
| Env / build   | 2022-site `.env.example`, build scripts, and env var usage                    |
| QA / tests    | Any 2022-site e2e or visual test setup (if present)                           |

Use these paths when aligning deployment and QA with current 2022-site behaviour; the new app deploys to Vercel with a single `.env.example` and Playwright e2e + pre-launch checklist.

**Key information:**

- Env var requirements (Dato, tracking); QA expectations and test coverage.

---

For the exact approach, host choice, QA checklist, and delivery → see `02-solution/deployment-and-qa.md`.
