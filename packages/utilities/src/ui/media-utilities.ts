import type { DatoAssetMedia } from './dato-asset-types'
import { isVideoAsset } from './is-video-asset'

/**
 * Maps CMS `ratio` values (legacy Vue + Dato) to CSS `aspect-ratio`.
 * Unknown values fall back to natural dimensions in `resolveMediaFrameAspectRatio`.
 */
export function ratioToAspectRatioString(ratio: string | null | undefined): string | undefined {
	if (ratio == null || ratio === '') return undefined
	switch (ratio.trim().toLowerCase()) {
		case 'landscape':
			return '4 / 3'
		case 'square':
			return '1 / 1'
		case 'widescreen':
			return '16 / 9'
		case 'portrait':
			return '3 / 4'
		default:
			return undefined
	}
}

/**
 * Resolves CSS `aspect-ratio` for a media frame, or `null` for natural image height.
 * Uses CMS ratio labels when present; widescreen default for video without ratio.
 */
export function resolveMediaFrameAspectRatio(
	asset: Pick<DatoAssetMedia, 'url' | 'mimeType' | 'format' | 'width' | 'height'>,
	ratio: string | null | undefined
): string | null {
	const ratioForFrame =
		isVideoAsset(asset) && (ratio == null || ratio === '') ? 'widescreen' : ratio

	const fromCms = ratioToAspectRatioString(ratioForFrame)
	if (fromCms != null) return fromCms

	const w = asset.width
	const h = asset.height
	if (w != null && h != null && h > 0) return `${w} / ${h}`

	return null
}
