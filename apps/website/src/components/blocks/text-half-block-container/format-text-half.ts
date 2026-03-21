import type { CdaStructuredTextValue } from '@datocms/astro/StructuredText'

import type { PageContentBlock } from '@/lib/page-content-block'

export type TextHalfFormatted = {
	copy: CdaStructuredTextValue | null | undefined
}

type TextHalfFields = {
	copy?: CdaStructuredTextValue | null | undefined
}

export function formatTextHalfBlock(block: PageContentBlock): TextHalfFormatted | null {
	if (block.type !== 'text_half') return null
	const b = block as TextHalfFields
	return { copy: b.copy ?? null }
}
