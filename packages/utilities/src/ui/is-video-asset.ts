/** Minimal file-field shape (e.g. Dato `FileField`) for video vs image routing. */
export type VideoAssetLike = {
	url: string
	mimeType?: string | null
	format?: string | null
}

/** True when this asset should render as `<video>`, not `<img>`. */
export function isVideoAsset(asset: VideoAssetLike): boolean {
	const m = (asset.mimeType ?? '').toLowerCase()
	if (m.startsWith('video/')) return true
	if (m.startsWith('image/')) return false

	const f = (asset.format ?? '').toLowerCase()
	if (['mp4', 'webm', 'mov', 'ogv', 'm4v'].includes(f)) return true

	if ((asset.mimeType ?? '') !== '') return false

	return /\.(mp4|webm|mov|ogg|m4v)(\?|#|$)/i.test(asset.url)
}
