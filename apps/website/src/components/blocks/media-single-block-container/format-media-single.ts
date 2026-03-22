import type { MediaSingleProps } from '@rotate/ui/blocks/media-single/media-single-types'

import { resolveMediaFrameAspectRatio } from '@rotate/utilities/ui'

import type { PageContentBlock } from '@/lib/page-content-block'

import { mediaSingleImgSizes } from './media-single-img-sizes'
import { resolveMediaSingleLayout } from './resolve-media-single-layout'

export type MediaSingleUiProps = MediaSingleProps

type MediaSingleFields = {
	caption?: string | null
	ratio?: string | null
	displayType?: string | null
	isFullscreen?: boolean | null
	media?: {
		url?: string | null
		alt?: string | null
		width?: number | null
		height?: number | null
		format?: string | null
		/** CDA FileField `mimeType` (fragment field name `type`) */
		type?: string | null
	} | null
}

export function formatMediaSingleBlock(block: PageContentBlock): MediaSingleUiProps | null {
	if (block.type !== 'media_single') return null
	const b = block as MediaSingleFields
	const url = b.media?.url
	if (url == null || url === '') return null

	const asset = {
		url,
		alt: b.media?.alt ?? null,
		width: b.media?.width ?? null,
		height: b.media?.height ?? null,
		mimeType: b.media?.type ?? null,
		format: b.media?.format ?? null,
	}

	const layout = resolveMediaSingleLayout(b.displayType, b.isFullscreen)
	const imgSizes = mediaSingleImgSizes(layout)
	const aspectRatio = resolveMediaFrameAspectRatio(asset, b.ratio ?? null)

	return {
		asset,
		caption: b.caption ?? null,
		layout,
		imgSizes,
		aspectRatio,
	}
}
