import type { CdaStructuredTextValue } from '@datocms/astro/StructuredText'

import type { PageContentBlock } from '@/lib/page-content-block'

export type TextLeadFormatted = {
	pretitle: string | null
	size: string | null
	copy: CdaStructuredTextValue | null | undefined
}

type TextLeadFields = {
	pretitle?: string | null
	size?: string | null
	copy?: CdaStructuredTextValue | null | undefined
}

export function formatTextLeadBlock(block: PageContentBlock): TextLeadFormatted | null {
	if (block.type !== 'text_lead') return null
	const b = block as TextLeadFields
	return {
		pretitle: b.pretitle ?? null,
		size: b.size ?? null,
		copy: b.copy ?? null,
	}
}
