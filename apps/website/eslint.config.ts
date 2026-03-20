import { defineConfig, getConfig, type Config } from '@build/eslint-config'

const config = getConfig(import.meta.url)

export default defineConfig([config]) as Config
