import type { DatoAssetMedia } from '@rotate/utilities/ui'

/** Layout variant for the article `media_single` block (Dato display modes → grid + `sizes`). */
export type MediaSingleLayout = 'default' | 'right_half' | 'full_bleed'

/** Presentation props only — CMS mapping lives in `apps/website` formatters. */
export type MediaSingleProps = {
	asset: DatoAssetMedia
	caption?: string | null
	layout: MediaSingleLayout
	imgSizes: string
	/** CSS `aspect-ratio` value (e.g. `16 / 9`), or `null` for natural image height. */
	aspectRatio: string | null
}
