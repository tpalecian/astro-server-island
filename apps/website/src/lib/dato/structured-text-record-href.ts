import { buildSiteHrefFromDatoLink, type DatoPrimitiveLinkField } from './link-to-site-href'

type CategorySlug = { slug?: string | null }

type ArticleLike = {
	slug?: string | null
	category?: CategorySlug | null
}

type EmojiLike = {
	link?: DatoPrimitiveLinkField | null
}

/**
 * Resolves an in-site href for records embedded in Dato Structured Text (`links`).
 */
export function buildHrefForStructuredTextRecord(record: unknown): string | null {
	if (record == null || typeof record !== 'object') return null

	const r = record as { __typename?: string; type?: string } & ArticleLike & EmojiLike
	const kind = r.__typename ?? r.type

	switch (kind) {
		case 'WorkRecord':
		case 'ThinkingRecord':
		case 'StudioRecord': {
			const cat = r.category?.slug
			const slug = r.slug
			if (cat != null && cat !== '' && slug != null && slug !== '') {
				return `/${cat}/${slug}`
			}
			if (slug != null && slug !== '') {
				return `/${slug}`
			}
			return null
		}
		case 'EmojiRecord':
			return buildSiteHrefFromDatoLink(r.link ?? null)
		case 'TagRecord':
		case 'MegaHeadingRecord':
			return null
		default:
			return null
	}
}
