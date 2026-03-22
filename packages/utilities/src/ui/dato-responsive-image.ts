/** Default widths for Dato CDN `w=` param (see Dato image API). */
export const DEFAULT_DATO_SRCSET_WIDTHS = [
	400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000, 2400, 2800, 3200,
] as const

/**
 * Appends or replaces `w` on a Dato asset URL for responsive images.
 * Expects absolute `https` URLs from the CDA.
 */
export function datoImageUrlWithWidth(src: string, width: number): string {
	try {
		const u = new URL(src)
		u.searchParams.set('w', String(Math.round(width)))
		return u.toString()
	} catch {
		return src
	}
}

export function buildDatoSrcset(
	src: string,
	widths: readonly number[] = DEFAULT_DATO_SRCSET_WIDTHS
): string {
	return widths.map((w) => `${datoImageUrlWithWidth(src, w)} ${w}w`).join(', ')
}
