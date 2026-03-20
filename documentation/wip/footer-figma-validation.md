# Footer Component — Figma Validation Report

---

title: Footer Figma Validation
phase: implementation
status: approved
last_updated: 2026-03-19
tags: [footer, figma, validation, design-system]

---

**Implementation:** Signed off 2026-03-19 (`packages/ui/src/footer.astro` + footer-container). Move this doc out of `documentation/wip` when you consolidate approved validation reports.

**Figma sources:**

- Main footer: [Rotate-Library-WebsiteModules](https://www.figma.com/design/AoKFGaJDETjoU1TRLSufQv/Rotate-Library-WebsiteModules?node-id=48-754)
- CTA block: [DWfUHaVMjp8pMg4Dhj5lgb](https://www.figma.com/design/DWfUHaVMjp8pMg4Dhj5lgb?node-id=59-1383)

## Summary

| Area              | Status                      | Notes                                                                                                                                                                                                                                                                                       |
| ----------------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CTA section       | ✅                          | Copy + primary button; gap-500, title-style1-700, btn-size-200                                                                                                                                                                                                                              |
| Desktop nav       | ✅                          | justify-between, primary pills left, secondary links right                                                                                                                                                                                                                                  |
| Mobile nav        | ✅ **Intentional override** | Figma / library (`48:828`) stacks primary then secondary in one column. **Product decision:** that layout is wrong for the design system; code keeps **`flex-row justify-between`** on small viewports and secondary **`items-end`** so pills and links read as two columns (left / right). |
| Primary buttons   | ✅                          | btn-secondary btn-size-100 title-style1-300 (size-600 per Figma)                                                                                                                                                                                                                            |
| Secondary links   | ✅                          | link link-underline title-style1-300                                                                                                                                                                                                                                                        |
| Spacing / padding | ✅                          | grid-default-margin, gap-300/500                                                                                                                                                                                                                                                            |
| Link resolution   | ✅                          | `buildSiteHrefFromDatoLink` for all links                                                                                                                                                                                                                                                   |

---

## 1. CTA Section (when present)

**Figma (59:1383):**

- Copy: "Want to talk about a project?" — title-style1-700, 48px, center
- Button: "Get in touch" — btn-primary, h-48 (btn-size-200)
- Layout: flex-col, items-center, gap-500 (48px)
- Padding: px grid margin (responsive)

**Implementation:** Matches. `title-style1-700`, `btn btn-primary btn-size-200 title-style1-300`, `gap-500`, `px-[var(--grid-default-margin)]` ✅

---

## 2. Desktop Nav Section

**Figma (48:755):**

- Container: h-1000 (160px), flex row, justify-between, px 80px
- Primary: pills (Work, Thinking, Studio) — border, h-32, gap-200
- Secondary: text links — gap-300, no border

**Implementation:** `tablet:flex-row tablet:h-1000 tablet:justify-between`, `tablet:gap-200` primary, `tablet:gap-300` secondary ✅

---

## 3. Mobile Nav Section

**Figma / design library (48:828)** documents:

- Outer container: `flex-col`, `gap-500`, stacked primary then secondary
- Both groups: `items-start`

**Implementation (source of truth for layout):** Does **not** follow that structure. The nav row uses **`flex-row justify-between`** from the smallest breakpoint (same as pre-tablet), with **`gap-500`** between the two tracks, primary pills **`items-start`**, secondary links **`items-end`**. Tablet+ keeps the desktop row pattern (`tablet:h-1000`, `tablet:gap-200`, etc.).

**Rationale:** The stacked layout in the Figma design system is **incorrect for this product**; the two-column mobile footer is the approved behaviour. Tokens (spacing, typography, buttons, links) still align with the system; only the **mobile composition** diverges.

---

## 4. Primary Buttons (footer nav pills)

**Figma:** Border (white), h-32, rounded-full, title-style1/300

**Implementation:** `btn btn-secondary btn-size-100 title-style1-300` — border, 32px height, pill shape, size-600 (16px) per Figma ✅

---

## 5. Secondary Links (social / legal)

**Figma:** Plain text, underline on hover, title-style1-300

**Implementation:** `link link-underline title-style1-300 text-content-default-primary` ✅

---

## 6. Spacing & Padding

| Token         | Figma                | Implementation                    |
| ------------- | -------------------- | --------------------------------- |
| CTA gap       | dimension-500 (48px) | gap-500 ✅                        |
| CTA pt/pb     | pt-800, pb-500       | Same ✅                           |
| Nav pb        | dimension-600 (64px) | pb-600 ✅                         |
| Primary gap   | dimension-200/300    | gap-200 tablet, gap-300 mobile ✅ |
| Secondary gap | dimension-300        | gap-300 ✅                        |
| Horizontal    | grid/default/margin  | var(--grid-default-margin) ✅     |

---

## 7. Link Resolution

All footer links use `buildSiteHrefFromDatoLink` in `format-footer-nav.ts` — ctaLink, footerNavigationLinks, socialLinks ✅

---

## 8. Potential Refinements

- **CTA padding:** Figma CTA uses px 80px (desktop). Implementation uses `var(--grid-default-margin)` which is 21px mobile, 80px desktop — correct responsive behaviour ✅
- **Nav pt when no CTA:** pt-800 — matches Figma mobile footer ✅

---

## 9. Re-review notes

**Figma MCP:** node `48:754` (nav block), CTA reference `59:1383` in file `DWfUHaVMjp8pMg4Dhj5lgb`.

**Mobile nav — deliberate mismatch:** MCP/export still describes **`48:828`** as a single-column stack. **Current code is correct:** **`flex-row justify-between`** + secondary **`items-end`** on small viewports. Treat Figma’s mobile footer layout as **out of date / wrong** for this repo; do not “fix” the implementation to match that frame without an explicit design-system update.

**CTA:** Copy `title-style1-700`, primary button `btn-primary btn-size-200 title-style1-300` — matches Figma `size-1100` headline + `size-600` button. `TypeformPopup` reuses the same trigger classes as the anchor CTA ✅

**Desktop:** Row height, `justify-between`, primary `gap-200`, secondary `gap-300` — aligned with export ✅
