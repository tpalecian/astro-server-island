/**
 * Numeric mirrors of CSS custom properties in `packages/design-system/src/base.css`
 * (`--breakpoint-*`) and `packages/design-system/src/grid.css` (`--grid-default-margin`).
 * Used for `<img sizes>` and other JS where `var()` is unreliable or unsupported.
 * Update here when those files change.
 */
export const GRID_BREAKPOINT_TABLET_PX = 768
export const GRID_BREAKPOINT_DESKTOP_PX = 1024

/** `--grid-default-margin` below the desktop breakpoint (mobile + tablet shell). */
export const GRID_MARGIN_NARROW_PX = 21

/** `--grid-default-margin` at the desktop breakpoint and above. */
export const GRID_MARGIN_WIDE_PX = 80

/** Total horizontal padding for `100vw - …` math: `2 * margin` (both sides). */
export function gridContentWidthPaddingTotalPx(marginPerSidePx: number): number {
	return marginPerSidePx * 2
}
