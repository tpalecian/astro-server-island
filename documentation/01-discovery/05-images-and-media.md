---
title: Discovery — Images and media
phase: discovery
status: approved
owner: solutions-engineering
last_updated: 2026-02-03
depends_on: []
related_docs:
  - 02-solution/content-blocks-and-inline-blocks-plan.md
tags: [discovery, images, media, cdn]
---

# Discovery — Images and media

## 1. Outcome & Business Value (why)

**Purpose:** Define the media delivery strategy for performance and consistency.

**Value:** Faster delivery and predictable image handling across modules.

**Success criteria:**
- All media URLs follow a single strategy.

## 2. Context & Scope (what/where)

**Current state:** 2022-site uses Dato media URLs.

**In scope:** CDN strategy and URL construction approach.

**Out of scope:** Specific image component implementation.

**Assumptions:**
- Media is served via Dato CDN.

**Dependencies:** `02-solution/content-blocks-and-inline-blocks-plan.md`.

**Risks & mitigations:**
- Risk: inconsistent URL params. Mitigation: single utility function in implementation.

## 3. Solution Design (final decisions)

- Use **Dato CDN + query params**, with **Bunny CDN** in front.
- Do not use imgix or Cloudinary.

**Alternatives considered:**
- Imgix/Cloudinary. Rejected due to current infrastructure decision.

**Non‑goals:**
- Building a new media pipeline.

## 4. Delivery Plan (how)

- Ensure the solution doc calls out URL generation and CDN placement.

**Open questions / TBD:**
- None.
