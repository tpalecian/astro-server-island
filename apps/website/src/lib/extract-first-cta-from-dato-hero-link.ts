import { buildSitePathFromDatoRecord } from '@/lib/build-site-href-from-dato-link'

export type DatoHeroLinkCta = { text: string; href: string }

type HeroLinkRecord = {
	slug?: string | null
	category?: { slug?: string | null } | null
}

type DatoHeroStructuredLinkField = {
	value: { document?: { children?: DastNode[] }; children?: DastNode[] }
	links: Array<{ id: string } & HeroLinkRecord>
}

type DastSpan = { type?: string; value?: string }

type DastNode = {
	type?: string
	item?: string
	url?: string
	children?: DastNode[]
}

const DEFAULT_CTA_LABEL = 'Find out more'

function linkLabelFromSpans(node: { children?: DastSpan[] }): string {
	if (node.children == null) return ''
	return node.children
		.filter((c) => c.type === 'span' && c.value != null && c.value !== '')
		.map((c) => c.value as string)
		.join('')
}

type ResolvedDastLink =
	| { kind: 'item'; text: string; itemId: string }
	| { kind: 'url'; text: string; url: string }

function findFirstDastLink(nodes: DastNode[] | undefined): ResolvedDastLink | null {
	if (nodes == null) return null

	for (const node of nodes) {
		if (node.type === 'itemLink' && node.item != null && node.item !== '') {
			return { kind: 'item', text: linkLabelFromSpans(node), itemId: node.item }
		}
		if (node.type === 'link' && node.url != null && node.url !== '') {
			return { kind: 'url', text: linkLabelFromSpans(node), url: node.url }
		}
		const nested = findFirstDastLink(node.children)
		if (nested != null) return nested
	}

	return null
}

export function extractFirstCtaFromDatoHeroLink(
	heroLink: DatoHeroStructuredLinkField | null | undefined
): DatoHeroLinkCta | null {
	const children = heroLink?.value.document?.children ?? heroLink?.value.children
	const found = findFirstDastLink(Array.isArray(children) ? children : undefined)
	if (found == null) return null

	const trimmedLabel = found.text.trim()
	const text = trimmedLabel !== '' ? trimmedLabel : DEFAULT_CTA_LABEL

	if (found.kind === 'url') {
		return { text, href: found.url }
	}

	const record = heroLink?.links.find((l) => String(l.id) === String(found.itemId))
	if (record == null) return null

	return { text, href: buildSitePathFromDatoRecord(record) }
}
