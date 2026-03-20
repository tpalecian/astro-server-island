/// <reference types="astro/client" />

/** Vite / Astro: public env vars exposed to the server (see `.env` + Astro docs). */
interface ImportMetaEnv {
	readonly DATOCMS_API_KEY: string
}

/** Ensures `import.meta.env` is typed (merges with `astro/client`). */
interface ImportMeta {
	readonly env: ImportMetaEnv
}
