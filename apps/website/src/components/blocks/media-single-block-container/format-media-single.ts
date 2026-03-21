import type { PageContentBlock } from '@/lib/page-content-block'

export type MediaSingleUiProps = {
	url: string
	alt?: string | null
	caption?: string | null
	ratio?: string | null
	displayType?: string | null
	isFullscreen?: boolean | null
}

type MediaSingleFields = {
	caption?: string | null
	ratio?: string | null
	displayType?: string | null
	isFullscreen?: boolean | null
	media?: {
		url?: string | null
		alt?: string | null
	} | null
}

export function formatMediaSingleBlock(block: PageContentBlock): MediaSingleUiProps | null {
	if (block.type !== 'media_single') return null
	const b = block as MediaSingleFields
	const url = b.media?.url
	if (url == null || url === '') return null
	return {
		url,
		alt: b.media?.alt ?? null,
		caption: b.caption ?? null,
		ratio: b.ratio ?? null,
		displayType: b.displayType ?? null,
		isFullscreen: b.isFullscreen ?? null,
	}
}
