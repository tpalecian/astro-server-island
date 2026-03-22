import type { MediaSingleLayout } from '@rotate/ui/blocks/media-single/media-single-types'

/** CMS display strings → layout variant (Rotate / Dato `media_single` block only). */
export function resolveMediaSingleLayout(
	displayType: string | null | undefined,
	isFullscreen: boolean | null | undefined
): MediaSingleLayout {
	const dt = displayType?.trim() ?? ''
	if (dt === 'Full Bleed' || isFullscreen === true) return 'full_bleed'
	if (dt === 'Right Half') return 'right_half'
	return 'default'
}
