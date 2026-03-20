/** Allowed first path segments for `pages/[category]/…` (not the same as CMS “category” records). */
export const SITE_CATEGORIES = ['work', 'thinking', 'studio'] as const

export type SiteCategory = (typeof SITE_CATEGORIES)[number]

export function isSiteCategory(value: string): value is SiteCategory {
	return (SITE_CATEGORIES as readonly string[]).includes(value)
}

/** Maps URL segment to `getCategoryCards` slug (see migration-map + service-dato category handler). */
export function siteCategoryToCardsSlug(category: SiteCategory): 'works' | 'thinkings' | 'studios' {
	const map = {
		work: 'works',
		thinking: 'thinkings',
		studio: 'studios',
	} as const
	return map[category]
}
