/** Logo animations via Motion (vanilla). Scroll-based only — no initial animation, Rotate° visible on load. */
import { animate, stagger } from 'motion'

import { prefersReducedMotion } from '@rotate/utilities/ui'

type ScrolledState = 'true' | 'false'
type LogoParts = {
	letters: NodeListOf<SVGElement>
	degree: HTMLElement | null
}

const degreeControllers = new WeakMap<HTMLElement, { stop?: () => void }>()

const SELECTORS = {
	letters: '[data-letter]',
	degree: '[data-degree]',
	fullLogos: '[data-logo][data-compact="false"]',
} as const

const MOTION = {
	easeOut: [0.25, 0.46, 0.45, 0.94] as const,
	letterDuration: 0.22,
	revealStagger: 0.03,
	hideStagger: 0.035,
	hideStartDelay: 0.02,
	yOffset: 4,
	xFallback: 8,
	letterCount: 5,
} as const

const TOTAL_SEQUENCE = MOTION.letterDuration + (MOTION.letterCount - 1) * MOTION.revealStagger
const HIDE_TOTAL_SEQUENCE =
	MOTION.letterDuration + (MOTION.letterCount - 1) * MOTION.hideStagger + MOTION.hideStartDelay

const toScrolledState = (isScrolled: boolean): ScrolledState => (isScrolled ? 'true' : 'false')
const setScrolledState = (el: HTMLElement, isScrolled: boolean): void =>
	el.setAttribute('data-scrolled', toScrolledState(isScrolled))

const getLogoParts = (el: HTMLElement): LogoParts => ({
	letters: el.querySelectorAll<SVGElement>(SELECTORS.letters),
	degree: el.querySelector<HTMLElement>(SELECTORS.degree),
})

function stopDegreeAnimation(degree: HTMLElement): void {
	const ctrl = degreeControllers.get(degree)

	if (ctrl?.stop) {
		ctrl.stop()
		degreeControllers.delete(degree)
	}
}

function animateDegree(degree: HTMLElement, degreeStartX: number, duration: number): void {
	stopDegreeAnimation(degree)
	const ctrl = animate(
		degree,
		{ x: [degreeStartX, 0], scale: 1 },
		{ duration, ease: MOTION.easeOut }
	)
	degreeControllers.set(degree, ctrl)
}

function applyReducedMotionState(
	letters: NodeListOf<SVGElement>,
	degree: HTMLElement | null
): void {
	letters.forEach((letter) => {
		letter.style.opacity = '1'
		letter.style.transform = 'none'
	})
	if (degree) {
		degree.style.opacity = '1'
		degree.style.transform = 'none'
	}
}

function animateLettersReveal(letters: NodeListOf<SVGElement>): void {
	animate(
		letters,
		{ opacity: [0, 1], y: [-MOTION.yOffset, 0] },
		{
			delay: stagger(MOTION.revealStagger),
			duration: MOTION.letterDuration,
			ease: MOTION.easeOut,
		}
	)
}

function animateLettersHide(letters: NodeListOf<SVGElement>): void {
	animate(
		letters,
		{ y: [0, -MOTION.yOffset], opacity: [1, 0] },
		{
			delay: stagger(MOTION.hideStagger, { from: 'last', startDelay: MOTION.hideStartDelay }),
			duration: MOTION.letterDuration,
			ease: MOTION.easeOut,
		}
	)
}

function runEntranceFull(el: HTMLElement, degreeStartX: number): void {
	const { letters, degree } = getLogoParts(el)

	if (prefersReducedMotion()) {
		applyReducedMotionState(letters, degree)
		return
	}

	animateLettersReveal(letters)
	if (degree) animateDegree(degree, degreeStartX, TOTAL_SEQUENCE)
}

function runEntranceCompact(el: HTMLElement, degreeStartX: number): void {
	const { letters, degree } = getLogoParts(el)
	if (!degree) return

	if (prefersReducedMotion()) return

	animateDegree(degree, degreeStartX, HIDE_TOTAL_SEQUENCE)
	animateLettersHide(letters)
}

function resolveDegreeStartX(
	beforeLeft: number | undefined,
	afterLeft: number | undefined,
	isScrolled: boolean
): number {
	if (typeof beforeLeft === 'number' && typeof afterLeft === 'number') return beforeLeft - afterLeft
	return isScrolled ? MOTION.xFallback : -MOTION.xFallback
}

function runTransition(el: HTMLElement, isScrolled: boolean): void {
	const { degree } = getLogoParts(el)
	const beforeLeft = degree?.getBoundingClientRect().left

	setScrolledState(el, isScrolled)

	const afterLeft = degree?.getBoundingClientRect().left
	const degreeStartX = resolveDegreeStartX(beforeLeft, afterLeft, isScrolled)

	if (isScrolled) {
		runEntranceCompact(el, degreeStartX)
		return
	}
	runEntranceFull(el, degreeStartX)
}

document.addEventListener('DOMContentLoaded', () => {
	const fullLogos = document.querySelectorAll<HTMLElement>(SELECTORS.fullLogos)

	let wasScrolled = false
	const update = () => {
		const isScrolled = window.scrollY > 0
		fullLogos.forEach((el) => {
			if (isScrolled === wasScrolled) {
				setScrolledState(el, isScrolled)
				return
			}
			runTransition(el, isScrolled)
		})
		wasScrolled = isScrolled
	}

	update()
	window.addEventListener('scroll', update, { passive: true })
})
