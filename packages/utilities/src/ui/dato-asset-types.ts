/** Dato CDA file-field shape for responsive images / video in UI. */
export type DatoAssetMedia = {
	url: string
	alt?: string | null
	width?: number | null
	height?: number | null
	/** CDA `mimeType` (e.g. `image/jpeg`, `video/mp4`) */
	mimeType?: string | null
	/** CDA FileField `format` — fallback when `mimeType` is missing */
	format?: string | null
}
