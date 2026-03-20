/**
 * Dispatches dialog-toggle events for consumers (e.g. lazy-loading Typeform).
 * Open/close is handled declaratively via Invoker Commands API (commandfor/command).
 */
document.querySelectorAll<HTMLDivElement>('[data-dialog]').forEach((wrapper) => {
	if (wrapper.hasAttribute('data-dialog-bound')) return
	wrapper.setAttribute('data-dialog-bound', 'true')

	const dialog = wrapper.querySelector('dialog')
	if (!dialog) return

	const observer = new MutationObserver(() => {
		if (dialog.open) {
			wrapper.dispatchEvent(
				new CustomEvent('dialog-toggle', { bubbles: true, detail: { newState: 'open' } })
			)
		}
	})

	observer.observe(dialog, { attributes: true, attributeFilter: ['open'] })

	dialog.addEventListener('close', () => {
		wrapper.dispatchEvent(
			new CustomEvent('dialog-toggle', { bubbles: true, detail: { newState: 'closed' } })
		)
	})
})
