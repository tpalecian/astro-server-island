export type HeroInlineVideo = {
	url: string
	alt?: string | null
	format?: string | null
}

export type HeroVideoLink = {
	text: string
	href: string
}

export type HeroAction = {
	text: string
	href: string
}

/** One cycling headline word split into graphemes for letter animation. */
export type HeroWord = {
	value: string
	letters: string[]
}

export type HeroProps = {
	/** Trimmed cycling headline words split for letter animation (from container `formatHero`). */
	words?: HeroWord[]
	inlineVideo?: HeroInlineVideo | null
	/** When `inlineVideo` is set, use `<video>` vs `<img>` (from container `formatHero`). */
	isInlineVideo?: boolean
	videoLink?: HeroVideoLink | null
	action?: HeroAction | null
}

/** `data-word-state` values set via `setWordRowState` / reset (stable states). */
export type HeroWordRowState = 'current' | 'next' | 'done'

/** Full `data-word-state` surface, including transient `exiting` during hand-off. */
export type HeroWordDatasetState = HeroWordRowState | 'exiting'

/** Registered per `[data-hero]` for document visibility coordination. */
export type HeroClientRuntime = {
	ensureRunning: () => void
	pause: () => void
}
