---
title: Task H — Images and media (Dato CDN + Bunny CDN)
phase: implementation
status: in-review
owner: solutions-engineering
last_updated: 2026-02-03
depends_on: []
related_docs: []
tags: [implementation, ticket]
---

# Task H — Images and media (Dato CDN + Bunny CDN)

**Ticket:** H  
**Phase:** 4  
**Scope (files/dirs you may edit):** `apps/website/src/lib/` (e.g. images.ts or similar for building image/video URLs). Components/modules that use images or video (Media, Picture, Video modules). No edits to packages/service-dato/ beyond consuming existing Dato URLs; no 2022-site edits.

**Dependencies (blocking):** A (a-service-dato) — getters return Dato CDN URLs for media. B or F (containers/modules that render media).  
**Unblocks:** F (Media/Picture/Video modules can use URL builder); J (pre-launch checks media).


## 1. Outcome & Business Value (why)

### Description
Implement image and video URL building so the app uses **Dato CDN + query params** with **Bunny CDN in front** (no imgix/Cloudinary). In scope: app utility (e.g. `src/lib/images.ts`) that builds image/video URLs; Media, Picture, Video modules use this utility. Out of scope: changing Dato schema; alternative CDNs.

### Outcome we expect
One place in the app (e.g. `src/lib/images.ts`) that builds image and video URLs from Dato CDN with query params; Bunny CDN in front. Media/Picture/Video modules use this utility. Aligns with [01-discovery/00-index.md](../01-discovery/00-index.md) §6 and [implementation-coverage-checklist.md](../implementation-coverage-checklist.md) §6.

### Value (user / business)
Consistent, optimised media delivery; same behaviour as 2022-site (Dato + Bunny). Required for content blocks (F) that render images/video and for pre-launch (J).

### Acceptance criteria

| # | Criterion | Done |
|---|-----------|------|
| AC1 | App utility exists (e.g. src/lib/images.ts) that builds image URLs from Dato CDN + query params | |
| AC2 | Bunny CDN in front of Dato CDN (config or URL shape documented) | |
| AC3 | Video URLs built the same way (Dato CDN + params; Bunny in front) | |
| AC4 | Media, Picture, Video modules use this utility (no raw Dato URLs in modules) | |
| AC5 | No imgix/Cloudinary in front of Dato (per decision) | |


## 2. Context & Scope (what/where)

**Scope:** `apps/website/src/lib/` (e.g. images.ts or similar for building image/video URLs). Components/modules that use images or video (Media, Picture, Video modules). No edits to packages/service-dato/ beyond consuming existing Dato URLs; no 2022-site edits.

**Dependencies:** A (a-service-dato) — getters return Dato CDN URLs for media. B or F (containers/modules that render media).

**Unblocks:** F (Media/Picture/Video modules can use URL builder); J (pre-launch checks media).

## 3. Delivery Plan (how)

**Steps:**
1. 
2. 
3. 

**Acceptance criteria:**

**Confirm as a team:**  
Achievable. Depends on A (getters return Dato media URLs) and on containers/modules that render media (B or F). No blockers if A is done.

**Timelines / assumptions:**  
Assume Dato CDN URLs are available from getters. Bunny CDN config (domain, query params) from env or app config.

**Dependencies (upstream):**  
A (getters return media URLs). B or F (modules that need image/video URLs).

**Blockers (if any):**  
None if A is complete. If F defines Media modules first, H can provide the utility and F uses it.

**Downstream impact:**  
F (content blocks) uses this for Media/Picture/Video. J (pre-launch) checks media loads.


## 3. Analytics & Measurement

**Success metrics:**  
All media on key pages loads from correct CDN; no broken images/video. No user analytics in this task.

**Testing hypothesis:**  
Using Dato CDN + query params with Bunny in front will deliver media correctly and match 2022-site behaviour.

**Rollout method:**  
N/A — deliver when ACs are met. Rollout is part of J (deployment).


## 4. Testing

**In scope for this task:**

| Type | Scope | Notes |
|------|--------|--------|
| Unit | URL builder (inputs → output URL shape) | 80/20: focus on builder and CDN params |
| Integration | Optional: one Media module using builder | |
| E2E | N/A in this task | J adds media checks if needed |

## 4. Validation & Testing

**Success metrics:**  
All media on key pages loads from correct CDN; no broken images/video. No user analytics in this task.

**Testing hypothesis:**  
Using Dato CDN + query params with Bunny in front will deliver media correctly and match 2022-site behaviour.

**Rollout method:**  
N/A — deliver when ACs are met. Rollout is part of J (deployment).


**In scope for this task:**

| Type | Scope | Notes |
|------|--------|--------|
| Unit | URL builder (inputs → output URL shape) | 80/20: focus on builder and CDN params |
| Integration | Optional: one Media module using builder | |
| E2E | N/A in this task | J adds media checks if needed |

**Code coverage:**  
Align with project. 80/20: URL builder and one module integration.

**80/20 focus:**  
Builder logic and CDN params; skip exhaustive asset coverage.


## 5. References

**Product / design handover:**  
Per migration-map and 2022-site media behaviour. Link design when available.

**Reference docs / artwork:**  
- [vue-to-astro-migration.md](../vue-to-astro-migration.md) §8  
- [implementation-coverage-checklist.md](../implementation-coverage-checklist.md) §6  
- [01-discovery/00-index.md](../01-discovery/00-index.md) §6.1  


## 6. Notes

- Decided: Dato CDN + query params; Bunny CDN in front (no imgix/Cloudinary). Document URL shape and env (e.g. Bunny domain) in README or .env.example if needed.
- If F (content blocks) is done first, Media modules may use placeholder URLs until H is done; then switch to H utility.

