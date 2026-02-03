---
title: Implementation context requirements (for agents)
phase: implementation
status: approved
owner: solutions-engineering
last_updated: 2026-02-03
related_docs: [03-implementation/03-tickets/TASK-TEMPLATE.md]
tags: [implementation, workstreams, agents, context]
---

# Implementation context requirements (for agents)

**Purpose:** Every workstream and ticket must provide **strict, self-contained context** so an agent (or developer) can implement without guessing. Read this doc first when picking up any implementation task.

## Required context checklist

Before starting implementation, the ticket (and its workstream) must contain:

| # | Required | Where | What |
|---|----------|--------|------|
| 1 | **Allowed paths** | Ticket header + workstream | Exact dirs/files that may be created or edited (e.g. `packages/service-dato/src/handlers/`, `apps/website/src/components/modules/`). Nothing outside these paths. |
| 2 | **Blocking dependencies** | Ticket | Other ticket IDs or workstream steps that must be done first. No “assume X exists” without a ticket. |
| 3 | **Unblocks** | Ticket | Which tickets/steps are unlocked when this is done. |
| 4 | **Contract / API** | Ticket or linked solution doc | What to build: function names, export surface, types, props, or file names. Enough to implement without inferring. |
| 5 | **Data source & shape** | Ticket or linked doc | Where data comes from (getter, query, prop) and expected shape (type name or key fields). |
| 6 | **Out of scope / Don’t do** | Ticket | Explicit list of what is not in scope (e.g. “No CMS imports in modules”, “Do not export gql”). |
| 7 | **Acceptance criteria** | Ticket | Numbered, testable criteria; each must be verifiable (e.g. “Getters match list in solution doc”, “No gql in package index”). |
| 8 | **Validation** | Ticket | How to verify: command(s) (e.g. `pnpm codegen`, `pnpm test`), manual step, or link to test. |
| 9 | **Solution / reference link** | Ticket `related_docs` | At least one solution or discovery doc that defines the approach and contracts. |

## Workstreams

- Each workstream doc in `02-workstreams/` must state **allowed paths**, **steps in order**, and **done criteria**.
- Workstream steps should align with ticket IDs so an agent can map “do step 3” → “implement ticket X”.

## Tickets

- Use `03-implementation/03-tickets/TASK-TEMPLATE.md`; fill every section.
- If a ticket is too vague for an agent to implement, add: exact paths, contract (names/signatures/exports), data shape, out-of-scope, and validation steps.

## Agent behaviour

- **Before implementing:** Confirm the ticket satisfies the checklist above. If something is missing, add it to the ticket (or ask) before coding.
- **During implementation:** Stay within allowed paths; follow the stated contract; do not do anything listed under “Out of scope”.
- **After implementation:** Run the validation steps and tick acceptance criteria.
