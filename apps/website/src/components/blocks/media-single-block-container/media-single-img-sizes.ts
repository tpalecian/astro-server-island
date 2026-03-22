import type { MediaSingleLayout } from '@rotate/ui/blocks/media-single/media-single-types'

import {
	GRID_BREAKPOINT_DESKTOP_PX,
	GRID_BREAKPOINT_TABLET_PX,
	GRID_MARGIN_NARROW_PX,
	GRID_MARGIN_WIDE_PX,
	gridContentWidthPaddingTotalPx,
} from '@rotate/utilities/ui'

/**
 * `sizes` for `<img>` in the article media block — matches article shell margins (`grid-layout-tokens`)
 * and half-width for `right_half`. Uses numeric px (not `var()` in `sizes` — better support).
 */
export function mediaSingleImgSizes(variant: MediaSingleLayout): string {
	const bpT = GRID_BREAKPOINT_TABLET_PX
	const bpD = GRID_BREAKPOINT_DESKTOP_PX
	const mSmall = gridContentWidthPaddingTotalPx(GRID_MARGIN_NARROW_PX)
	const mLarge = gridContentWidthPaddingTotalPx(GRID_MARGIN_WIDE_PX)

	switch (variant) {
		case 'full_bleed':
			return '100vw'
		case 'right_half':
			return `(min-width: ${bpD}px) calc((100vw - ${mLarge}px) / 2), (min-width: ${bpT}px) calc((100vw - ${mSmall}px) / 2), calc(100vw - ${mSmall}px)`
		case 'default':
		default:
			return `(min-width: ${bpD}px) calc(100vw - ${mLarge}px), calc(100vw - ${mSmall}px)`
	}
}
