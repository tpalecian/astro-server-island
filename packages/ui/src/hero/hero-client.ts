import { prefersReducedMotion } from '@rotate/utilities/ui'

import type { HeroClientRuntime, HeroWordRowState } from './types'

// —— Timing (legacy hero parity) ——
const INITIAL_DELAY_MS = 500
const WORD_INTERVAL_MS = 1500
const LETTER_STAGGER_MS = 80
const LETTER_OUT_DURATION_MS = 320

const heroRuntimes = new WeakMap<HTMLElement, HeroClientRuntime>()
let documentVisibilityBound = false

const notifyHeroesOnVisibilityChange = (): void => {
	const visible = document.visibilityState === 'visible'
	document.querySelectorAll<HTMLElement>('[data-hero]').forEach((el) => {
		const runtime = heroRuntimes.get(el)
		if (!runtime) return
		if (visible) runtime.ensureRunning()
		else runtime.pause()
	})
}

const ensureDocumentVisibilityListener = (): void => {
	if (documentVisibilityBound) return
	documentVisibilityBound = true
	document.addEventListener('visibilitychange', notifyHeroesOnVisibilityChange, {
		passive: true,
	})
}

const shouldRunCycle = (isIntersecting: boolean): boolean =>
	document.visibilityState === 'visible' && isIntersecting && !prefersReducedMotion()

const isElementRoughlyInViewport = (el: HTMLElement): boolean => {
	const rect = el.getBoundingClientRect()
	const vh = document.documentElement.clientHeight
	const vw = document.documentElement.clientWidth
	return rect.bottom > 0 && rect.top < vh && rect.right > 0 && rect.left < vw
}

const letterExitWindowMs = (letterCount: number): number => {
	const n = Math.max(letterCount, 1)
	return Math.max(LETTER_OUT_DURATION_MS, (n - 1) * LETTER_STAGGER_MS + LETTER_OUT_DURATION_MS)
}

const createHeroController = (hero: HTMLElement): void => {
	const wordNodes = [...hero.querySelectorAll<HTMLElement>('[data-hero-word]')]
	if (wordNodes.length <= 1) return

	let currentWordIndex = 0
	const pendingTimers = new Set<number>()
	let hasStartedCycling = false
	let paused = false
	let isIntersecting = false

	const clearTimers = (): void => {
		pendingTimers.forEach((id) => window.clearTimeout(id))
		pendingTimers.clear()
	}

	const schedule = (fn: () => void, delayMs: number): void => {
		const timerId = window.setTimeout(() => {
			pendingTimers.delete(timerId)
			fn()
		}, delayMs)
		pendingTimers.add(timerId)
	}

	const setWordRowState = (index: number, state: HeroWordRowState): void => {
		const node = wordNodes[index]
		if (!node) return
		node.dataset.wordState = state
		node.setAttribute('aria-hidden', state === 'current' ? 'false' : 'true')
	}

	const resetWordVisualState = (): void => {
		wordNodes.forEach((_node, index) => {
			if (index < currentWordIndex) {
				setWordRowState(index, 'done')
				return
			}
			if (index === currentWordIndex) {
				setWordRowState(index, 'current')
				return
			}
			setWordRowState(index, 'next')
		})
	}

	const advance = (): void => {
		if (currentWordIndex === wordNodes.length - 1) return

		const previousIndex = currentWordIndex
		const currentNode = wordNodes[previousIndex]
		const nextIndex = currentWordIndex + 1

		if (currentNode) {
			currentNode.dataset.wordState = 'exiting'
			currentNode.setAttribute('aria-hidden', 'true')
		}
		setWordRowState(nextIndex, 'current')

		const letterCount = currentNode?.children.length ?? 1
		schedule(() => {
			setWordRowState(previousIndex, 'done')
		}, letterExitWindowMs(letterCount))

		currentWordIndex = nextIndex
		if (currentWordIndex < wordNodes.length - 1) {
			schedule(advance, WORD_INTERVAL_MS)
		}
	}

	const beginCycling = (firstDelayMs: number): void => {
		schedule(advance, firstDelayMs)
	}

	const isFinished = (): boolean => currentWordIndex >= wordNodes.length - 1

	const pause = (): void => {
		clearTimers()
		paused = true
	}

	const ensureRunning = (): void => {
		if (isFinished()) {
			paused = false
			return
		}
		if (!shouldRunCycle(isIntersecting)) {
			pause()
			return
		}
		if (pendingTimers.size > 0) return

		if (paused) {
			paused = false
			resetWordVisualState()
			beginCycling(hasStartedCycling ? WORD_INTERVAL_MS : INITIAL_DELAY_MS)
			hasStartedCycling = true
			return
		}

		if (!hasStartedCycling) {
			hasStartedCycling = true
			resetWordVisualState()
			beginCycling(INITIAL_DELAY_MS)
		}
	}

	resetWordVisualState()

	const observer = new IntersectionObserver(
		(entries) => {
			const entry = entries[0]
			if (!entry) return
			isIntersecting = entry.isIntersecting
			if (isIntersecting) ensureRunning()
			else pause()
		},
		{ root: null, rootMargin: '0px 0px 10% 0px', threshold: 0 }
	)
	observer.observe(hero)

	isIntersecting = isElementRoughlyInViewport(hero)
	ensureRunning()

	heroRuntimes.set(hero, { ensureRunning, pause })
	ensureDocumentVisibilityListener()
}

const initHero = (hero: Element): void => {
	if (!(hero instanceof HTMLElement) || hero.dataset.heroReady === 'true') return
	hero.dataset.heroReady = 'true'

	const wordNodes = hero.querySelectorAll('[data-hero-word]')
	if (wordNodes.length <= 1) return

	createHeroController(hero)
}

export const initHeroes = (): void => {
	document.querySelectorAll('[data-hero]').forEach(initHero)
}

document.addEventListener('DOMContentLoaded', initHeroes)
document.addEventListener('astro:page-load', initHeroes)

if (document.readyState !== 'loading') {
	initHeroes()
}
