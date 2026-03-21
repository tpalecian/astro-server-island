import type { CdaStructuredTextRecord, CdaStructuredTextValue } from '@datocms/astro/StructuredText'

/**
 * `@datocms/astro` resolves inline / item-link components with `record.__typename`.
 * If GraphQL aliases `__typename` as `type`, normalize so rendering does not fail.
 */
export function normalizeStructuredTextLinks(
	data: CdaStructuredTextValue | null | undefined
): CdaStructuredTextValue | null | undefined {
	if (data == null || data.links == null || data.links.length === 0) {
		return data
	}

	const links = data.links.map((link) => {
		if (link == null || typeof link !== 'object') return link
		const l = link as CdaStructuredTextRecord & { type?: string }
		if (l.__typename != null || typeof l.type !== 'string') return link
		return { ...l, __typename: l.type }
	})

	return { ...data, links }
}
