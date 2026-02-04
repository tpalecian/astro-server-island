---
name: solution-engineer-playbook
description: Create and maintain a Solutions Engineering project playbook: generate the standard discovery → solution → implementation documentation structure, ask the core project questions, and update docs with the answers.
---

# Solution Engineer Playbook

Use this skill when starting a new project or resetting documentation structure. The workflow is **generate first, then ask questions, then update docs**.

## Workflow

1. **Generate the standard structure** (if missing) under `/documentation`:
   - `00-start-here/`
   - `01-discovery/` (feature-based)
   - `02-solution/` (feature-based)
   - `03-implementation/` (workstreams + ticket templates)
   - `05-reference/`
   - `wip/`
   - `99-archive/`

2. **Create starter docs** using the SEL format and front‑matter.
3. **Ask the core questions** below.
4. **Update the docs** with the answers, keeping Discovery = decisions/constraints and Solution = approach/delivery.
5. **Ensure the index docs** are up to date.

## Core Questions (generic)

Ask these in order and keep them concise:

1. **Project overview**
   - Goal in one sentence
   - Primary user/customer
   - Success criteria

2. **Scope & constraints**
   - In scope / out of scope
   - Hard constraints (timeline, budget, platforms, compliance)
   - Key risks/unknowns

3. **Systems & integrations**
   - Dependencies (CMS, APIs, auth, analytics, third‑party services)
   - Data sources

4. **Delivery & ownership**
   - Target timeline or milestones
   - Decision owner(s)
   - Implementation team/roles

5. **Design & UX**
   - Design system location (if any)
   - Figma or design source links (if any)

6. **Implementation preferences**
   - Preferred stack / repo constraints
   - Must‑follow architecture rules

## Document Rules

- **Discovery** = why (outcome & business value), what/where (context & scope), and **ideas, options & references** (alternatives considered, further reading, key information). No solution design or delivery plan — those live in `02-solution/`. Discovery gathers information; solution locks the exact how.
- **Solution** = the exact how: approach, interfaces, delivery plan, success criteria. Solution docs reference discovery via `depends_on`. They must include **References (exact)** only to **informational** sources (discovery, external docs, implementation tickets) and **planned** locations (where to implement); do **not** reference already-implemented code. **Code examples** define the **contract to implement**, not the current codebase.
- **Implementation** = workstreams + tickets; split large tickets into smaller subtasks. Every ticket must satisfy **strict implementation context** (see below).

## Agent coordination

**Another agent may be working on this.** Before starting implementation on a ticket:

- Check whether the ticket (or its workstream) is already assigned or in progress elsewhere.
- If using Linear (or similar), confirm the ticket is not in progress by another agent before claiming it.
- Do not start the same ticket in parallel; pick a different ticket or wait until the other work is done.

When creating or assigning work, make it clear which ticket/workstream is in progress so other agents avoid conflicts.

## Strict implementation context (for agents)

Implementation context must be **strict and self-contained** so an agent or developer can implement without guessing.

- **Standard:** `documentation/03-implementation/02-workstreams/00-implementation-context-requirements.md`
- **Workstreams** must contain **all** information needed to implement: allowed paths, contract, steps, validation, out-of-scope, and the full checklist in the context-requirements doc. Every workstream must include an **Exact implementation idea** section (approach in one sentence, exact file names/paths, exact props/API/types, exact mapping/key, legacy reference) so the AI is **not guessing**. The workstream is the single source of truth for that ticket.
- When creating or updating **workstreams**, ensure they satisfy the full checklist (allowed paths, blocking/unblocks, contract/API, data source & shape, out of scope, steps, done criteria, acceptance criteria, validation, solution/discovery links, old code).
- **Ticket scoping:** Scope tickets so they **do not conflict** with others: strict allowed paths (exact dirs/files), explicit out-of-scope, and no overlapping edit areas. Two agents on two different tickets must not touch the same files or responsibilities.
- **Linear tickets (no ticket IDs):** Do **not** reference other tickets by ID **anywhere** in the ticket — not in description, scope, notes, **Blocking**, **Unblocks**, or **depends_on**. Use **descriptive names** instead (e.g. "CMS getters + exports", "core content block modules", "structured text"). Linear tickets are self-contained; no internal ticket IDs.
- If a ticket is vague or overlaps another, tighten scope and add the missing context before implementation starts.

## SEL Format (required)

Every plan doc should include:

1. Outcome & Business Value (why)
2. Context & Scope (what/where)
3. Solution Design (how, high level)
4. Delivery Plan (how, practical)

## Front‑matter (required)

```yaml
---
title: ...
phase: discovery | solution-design | implementation | operations | archived
status: draft | in-review | approved | superseded
owner: ...
last_updated: YYYY-MM-DD
depends_on: [...]
related_docs: [...]
tags: [...]
---
```

## Index Updates

Always update:

- `documentation/README.md`
- `documentation/00-start-here/handover-next-steps.md`
- `documentation/01-discovery/00-index.md`
- `documentation/02-solution/00-index.md`
- `documentation/03-implementation/00-index.md`
