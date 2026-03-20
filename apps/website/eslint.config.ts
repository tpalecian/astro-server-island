import type { Config } from '@build/eslint-config'
import { defineConfig, getConfig } from '@build/eslint-config'

const config = getConfig(import.meta.url)

export default defineConfig([config]) as Config
