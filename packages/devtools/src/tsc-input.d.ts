/**
 * Devtools ships only `.astro` sources; plain `tsc` does not typecheck those files.
 * This file satisfies `include: ["src"]` so `check:types` runs. Astro components are
 * still checked when consumed by `apps/website` (build / IDE).
 */
export {}
