document.querySelectorAll<HTMLDivElement>('[data-typeform-container]').forEach((container) => {
	const wrapper = container.closest<HTMLDivElement>('[data-dialog]')
	if (!wrapper || wrapper.hasAttribute('data-typeform-initialized')) return

	wrapper.setAttribute('data-typeform-initialized', 'true')
	wrapper.addEventListener('dialog-toggle', ((e: CustomEvent<{ newState: string }>) => {
		if (e.detail?.newState !== 'open') return

		if (!document.querySelector('script[src*="embed.typeform.com"]')) {
			const script = document.createElement('script')
			script.src = 'https://embed.typeform.com/next/embed.js'
			script.async = true
			document.body.appendChild(script)
		}
	}) as EventListener)
})
