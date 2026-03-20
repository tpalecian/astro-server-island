export type DatoPrimitiveLinkField = {
	url?: string | null
	record?:
		| { slug?: string | null }
		| { slug?: string | null; category?: { slug?: string | null } | null }
		| null
}

export function buildSitePathFromDatoRecord(
	record: NonNullable<DatoPrimitiveLinkField['record']>
): string {
	const category = 'category' in record ? record.category?.slug : null
	const slug = 'slug' in record ? record.slug : null

	if (category != null && category !== '' && slug != null && slug !== '') {
		return `/${category}/${slug}`
	}
	if (slug != null && slug !== '') {
		return `/${slug}`
	}
	return '/'
}

export function buildSiteHrefFromDatoLink(
	link: DatoPrimitiveLinkField | null | undefined
): string | null {
	if (link == null) return null

	const trimmedUrl = link.url?.trim()
	if (trimmedUrl) return trimmedUrl

	const record = link.record
	if (record == null) return null

	return buildSitePathFromDatoRecord(record)
}
