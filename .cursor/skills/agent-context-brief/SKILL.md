---
name: agent-context-brief
description: Provide a fast, context-free onboarding brief for new agents by summarizing what to do next from project documentation and pointing to the right starting docs.
---

# Agent Context Brief

Use this skill when a new agent has no context and needs to understand what job to do next based on documentation.

## Workflow

1. Open `documentation/00-start-here/handover-next-steps.md`.
2. Read the indexes:
   - `documentation/01-discovery/00-index.md`
   - `documentation/02-solution/00-index.md`
   - `documentation/03-implementation/00-index.md`
3. Identify the current phase and the next actionable tickets from `03-implementation/03-tickets/`.
4. **Coordination:** Before recommending a ticket, note that **another agent may already be working on it**. In the brief, tell the agent to confirm the ticket (or its workstream) is not in progress elsewhere before starting — e.g. check assignment or status in Linear — and to pick a different ticket if it is.
5. Output a **brief** with:
   - Current phase
   - What is in scope now
   - Top 3 next tickets to pick up
   - Reminder to confirm no other agent is on the chosen ticket before starting
   - Links to the exact docs to read first (workstream for full context)

## Output format

- Use a short heading: **Quick Start**
- Provide 3–6 bullets only
- Include file paths in backticks

## Do not

- Do not reformat or rewrite docs
- Do not invent tasks not listed in tickets
- Do not expand beyond the brief unless asked
