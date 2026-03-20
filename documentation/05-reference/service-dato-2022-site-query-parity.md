---
title: service-dato vs 2022-site query parity
phase: reference
status: approved
owner: solutions-engineering
last_updated: 2026-02-24
depends_on: []
related_docs:
  - 03-implementation/02-workstreams/02-a2-gql-fragments.md
  - 03-implementation/03-tickets/a2-service-dato-gql-fragments.md
tags: [reference, cms, dato, migration, 2022-site]
---

# service-dato vs 2022-site query parity

Reference document for validating that `packages/service-dato` GQL queries match the legacy `2022-site/gql/` queries.

## 1. Query mapping

| 2022-site                       | service-dato                                                                                                                      | Status    |
| ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------- |
| `gql/pages/home.gql.js`         | `gql/home.gql.ts`                                                                                                                 | ✅ Parity |
| `gql/pages/info.gql.js`         | `gql/info.gql.ts`                                                                                                                 | ✅ Parity |
| `gql/pages/work.gql.js`         | `gql/work-by-slug.gql.ts`                                                                                                         | ✅ Parity |
| `gql/pages/thinking.gql.js`     | `gql/thinking-by-slug.gql.ts`                                                                                                     | ✅ Parity |
| `gql/pages/studio.gql.js`       | `gql/studio-by-slug.gql.ts`                                                                                                       | ✅ Parity |
| `gql/routes.gql.js`             | `gql/routes.gql.ts`                                                                                                               | ✅ Parity |
| `gql/globals.gql.js`            | `gql/globals.gql.ts`                                                                                                              | ✅ Parity |
| `gql/navigation/header.gql.js`  | `gql/navigation-header.gql.ts`                                                                                                    | ✅ Parity |
| `gql/navigation/footer.gql.js`  | `gql/navigation-footer.gql.ts`                                                                                                    | ✅ Parity |
| `gql/categories.gql.js`         | `gql/all-categories.gql.ts`, `gql/category-by-slug.gql.ts`                                                                        | ✅ Parity |
| `gql/categoryCards.gql.js`      | `gql/all-works-cards.gql.ts`, `gql/all-thinkings-cards.gql.ts`, `gql/all-studios-cards.gql.ts`, `gql/homepage-card-slider.gql.ts` | ✅ Parity |
| `services/redirects.js` (query) | `gql/redirects.gql.ts`                                                                                                            | ✅ Parity |

## 2. Field parity (per query)

### Homepage

- slug, title, backgroundColor, heroWords, heroVideo, heroCursor
- heroVideoLink (text, url, record)
- heroLink (structured text: links Work/Thinking/Studio, value)
- seo (title, description, image), seoMetaTags
- content (all block types: Quote, TextHalf, TextLead, MediaSingle, MediaMultiple, CardSlider, Stats)

### Info page

- title, slug
- seo (title, description, image), seoMetaTags
- heroTitle (links OnEmojiRecord, value)
- content (all block types)

### Work / Thinking / Studio pages

- type (\_modelApiKey), title, slug
- publishDate (Work/Studio: \_publishedAt; Thinking: publishDate)
- introduction (structured text with emoji) — Work, Studio only
- client { name, site } — Work, Studio only
- author { name } — Thinking only
- heroTitle (structured text with emoji)
- heroImage — Work, Studio only
- tags { name, cards { ...Card } }
- seo (title, description, image), seoMetaTags
- content (all block types)

### Category by slug

- id, slug, filterText
- seo (title, description, image), seoMetaTags

## 3. Fragment parity

| 2022-site                                                                           | service-dato                                              |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------- |
| `meta/type`, `meta/media`, `meta/seo`                                               | `TypeFragment`, `MediaFragment`, `SeoHomepageFragment`    |
| `link.gql`                                                                          | Inlined in queries (text, url, record)                    |
| `models/card`, `models/tag`                                                         | `CardFragment`, `TagFragment`                             |
| `inline-blocks` (onTagRecord, onEmojiRecord, etc.)                                  | `OnTagRecordFragment`, `OnEmojiRecordFragment`, etc.      |
| `blocks` (onQuoteRecord, onTextHalfRecord, etc.)                                    | `OnQuoteRecordFragment`, `OnTextHalfRecordFragment`, etc. |
| `structured-text.gql` (structuredTextAll, structuredTextEmoji, structuredTextLinks) | Inlined in queries (links + value)                        |

## 4. Validation

Run `pnpm codegen` from root and `pnpm check:types` in `packages/service-dato` to verify.

Last validated: 2026-02-24 — all queries updated to match 2022-site field coverage.
