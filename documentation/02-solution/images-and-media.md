---
title: Solution — Images and media
phase: solution-design
status: in-review
owner: solutions-engineering
last_updated: 2026-02-03
depends_on:
  - 01-discovery/05-images-and-media.md
related_docs:
  - 02-solution/content-blocks-and-inline-blocks-plan.md
tags: [solution, images, media, cdn]
---

# Solution — Images and media

## 1. Outcome & Business Value (why)

**Source:** Decisions and outcomes are defined in `01-discovery/05-images-and-media.md`.

**This doc focuses on:** the **solution approach** and delivery shape for media handling.

## 2. Context & Scope (what/where)

**Discovery reference:** `01-discovery/05-images-and-media.md` (scope, constraints, decisions).

**In scope here:** CDN usage pattern and URL construction approach.

## 3. Solution Design (how, at a high level)

**Success criteria:**

- All media URLs use Dato CDN with standard params.
- Bunny CDN fronts all media delivery.
- Media modules rely on a shared URL helper.


**Proposed approach:**

- Use **Dato CDN + query params**, with **Bunny CDN** in front.
- Provide a single URL helper used by all media modules.

**Interfaces & data:**

- Media URL builder accepts Dato asset and returns optimized URL with standard params.

**Alternatives considered:**

- Imgix/Cloudinary. Rejected in discovery; recorded here for context.

**Non‑goals:**

- Building a new media pipeline or custom CDN stack.

## 4. Delivery Plan (how, at a practical level)

**Phases / steps:**

1. Define URL helper in app (e.g. `src/lib/images.ts`).
2. Update media modules to use the helper.

**Deliverables:**

- Shared URL builder and module usage documented.

**Validation:**

- Sample media renders with correct params and loads via Bunny CDN.

**Open questions / TBD:**

- None.
