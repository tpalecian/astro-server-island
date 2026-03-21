import type { CdaStructuredTextValue } from '@datocms/astro/StructuredText'

import type { PageContentBlock } from '@/lib/page-content-block'

export type QuoteBlockFormatted = {
	name: string | null
	info: string | null
	copy: CdaStructuredTextValue | null | undefined
}

type QuoteFields = {
	name?: string | null
	info?: string | null
	copy?: CdaStructuredTextValue | null | undefined
}

export function formatQuoteBlock(block: PageContentBlock): QuoteBlockFormatted | null {
	if (block.type !== 'quote') return null
	const b = block as QuoteFields
	return {
		name: b.name ?? null,
		info: b.info ?? null,
		copy: b.copy ?? null,
	}
}
