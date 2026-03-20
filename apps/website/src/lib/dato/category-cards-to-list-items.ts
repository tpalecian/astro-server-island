type CardLinkRecord = {
	slug?: string | null
	category?: { slug?: string | null } | null
}

type CardRow = {
	card?: {
		copy?: string | null
		link?: {
			record?: CardLinkRecord | null
		} | null
	} | null
}

export type CategoryListItem = { href: string; label: string }

/**
 * Builds in-app links for category landing lists from `getCategoryCards` array payloads
 * (`works` | `thinkings` | `studios`). Non-array results (e.g. homepage slider) yield [].
 */
export function categoryCardsToListItems(
	siteCategory: string,
	payload: unknown
): CategoryListItem[] {
	if (payload == null || !Array.isArray(payload)) {
		return []
	}

	return payload.flatMap((row: CardRow) => {
		const card = row.card
		const record = card?.link?.record
		const slug = record?.slug
		if (slug == null || slug === '') {
			return []
		}
		const pathCategory = record.category?.slug ?? siteCategory
		const label = card.copy?.trim() || slug
		return [{ href: `/${pathCategory}/${slug}`, label }]
	})
}
