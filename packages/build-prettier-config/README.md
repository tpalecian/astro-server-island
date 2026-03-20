# @build/prettier-config

Shared Prettier configurations for the monorepo with variants optimized for different project types.

## Features

- **Multiple Variants**: Tailored configurations for Astro, libraries, and backend services
- **Customizable Import Sorting**: Each variant can define its own import order rules
- **Lean Dependencies**: Each variant includes only the plugins it needs
- **Consistent Formatting**: Shared base rules prevent drift across projects
- **Import Sorting**: Automatic import organization with TypeScript support
- **Flexible**: Easy to extend or add new variants

## Variants

### Astro (`@build/prettier-config/astro`)

Optimized for Astro web applications.

**Includes:**

- `prettier-plugin-astro` - Format `.astro` component files
- `@ianvs/prettier-plugin-sort-imports` - Import sorting and organization
- `prettier-plugin-packagejson` - Format `package.json` files
- Customized import sorting for frontend projects

**Use when:** Building Astro web apps, UI projects, or frontend applications

### Library (`@build/prettier-config/library`)

Minimal configuration for TypeScript/JavaScript libraries and packages.

**Includes:**

- `@ianvs/prettier-plugin-sort-imports` - Import sorting and organization
- Customized import sorting for libraries

**Use when:** Creating reusable packages, shared utilities, or library code

### Backend (`@build/prettier-config/backend`)

Tailored for backend services, APIs, and Node.js workers.

**Includes:**

- `@ianvs/prettier-plugin-sort-imports` - Import sorting and organization
- `prettier-plugin-packagejson` - Format `package.json` files
- Customized import sorting for backend services

**Use when:** Building backend services, APIs, Cloudflare Workers, or server utilities

## Installation

This package is part of the monorepo workspace. No additional installation is required.

## Usage

### Setup in Your Project

Create a `.prettierrc.cjs` file in your project root:

**For Astro:**

```javascript
const config = require('@build/prettier-config/astro')

module.exports = config
```

**For Libraries:**

```javascript
const config = require('@build/prettier-config/library')

module.exports = config
```

**For Backend:**

```javascript
const config = require('@build/prettier-config/backend')

module.exports = config
```

### Running Prettier

```bash
# Format files
prettier --write .

# Check formatting
prettier --check .
```

## Configuration Details

### Shared Formatting Rules (All Variants)

All variants inherit these core formatting rules:

- **Trailing Commas**: `es5` (only where valid in ES5)
- **Tab Width**: 2 spaces
- **Indentation**: Tabs
- **Semicolons**: Disabled
- **Quotes**: Single quotes
- **Line Width**: 100 characters
- **End of Line**: LF (Unix-style)

### Import Organization (Customizable Per Variant)

**Astro** and **library** variants share a workspace tail from `src/import-order-workspace.cjs`:

1. **Builtin modules** — Node built-ins
2. **Astro variant only:** `@astrojs/*`, then `astro`
3. **Third-party** — npm packages (`<THIRD_PARTY_MODULES>`)
4. **`@rotate/*`** — separated sub-blocks (blank line between each):
   - `@rotate/cms` — CMS / getters
   - `@rotate/design-system/*` — design tokens / CSS entry paths
   - `@rotate/ui/*` — UI components
   - `@rotate/devtools/*` — dev-only
   - `@rotate/*` — any other workspace scope
5. **`@/*` (app alias)** — separated sub-blocks:
   - `@/lib/*` — shared helpers
   - `@/layouts/*` — layouts
   - `@/components/*` — containers / local composition
   - `@/*` — everything else (e.g. pages)
6. **Relative** — `./` and `../`

Empty entries in `importOrder` produce blank lines between those groups. **`@build/eslint-config`** uses matching `import/order` pathGroups and `distinctGroup: true` so ESLint agrees with Prettier on grouping.

**Customizing Import Order:**

To override import sorting in a specific variant, you can extend the config:

```javascript
const baseConfig = require('@build/prettier-config/library')

module.exports = {
  ...baseConfig,
  importOrder: [
    // Your custom import order here
  ],
}
```

### File-Specific Overrides (All Variants)

- **`.jsonc` and `.code-workspace` files**: No trailing commas
- **`Justfile`**: Uses spaces instead of tabs
- **Markdown files** (`.md`): Uses spaces instead of tabs
- **`mise.toml` / `.mise.toml`**: Entry alignment enabled

## Extending Configurations

To customize a variant for your project needs:

```javascript
const baseConfig = require('@build/prettier-config/library')

const customConfig = {
  ...baseConfig,
  printWidth: 120,
  // Override with your custom rules
}

module.exports = customConfig
```

## Plugin Requirements

Each variant requires certain plugins to function:

### Astro Variant

- `prettier` (^3.0.0) - Required
- `prettier-plugin-astro` (^0.14.0) - Required
- `@ianvs/prettier-plugin-sort-imports` (^4.6.0) - Required
- `prettier-plugin-packagejson` (^2.4.0) - Optional

### Library Variant

- `prettier` (^3.0.0) - Required
- `@ianvs/prettier-plugin-sort-imports` (^4.6.0) - Required

### Backend Variant

- `prettier` (^3.0.0) - Required
- `@ianvs/prettier-plugin-sort-imports` (^4.6.0) - Required
- `prettier-plugin-packagejson` (^2.4.0) - Optional

## FAQ

### Can I use a variant other than what my project type suggests?

Yes! Feel free to use any variant that matches your needs. This is just a suggestion based on typical project types.

### How do I add a new variant?

1. Create a new file in `src/` (e.g., `src/react.cjs`)
2. Define the base rules, import sorting, and plugins
3. Add the variant to `package.json` exports
4. Update this README

### Why are import sorting rules separate in each variant?

This allows each project type to optimize import organization for its specific needs. A library might prioritize different imports than a frontend app or backend service.

### How does this work with ESLint?

Prettier owns final formatting (including import order via `@ianvs/prettier-plugin-sort-imports`). `@build/eslint-config` mirrors the same `@rotate/*` and `@/*` path group order in `import/order` so lint and format stay aligned; `eslint-config-prettier` still disables stylistic conflicts.

## Related Packages

- `@build/eslint-config` - Shared ESLint configuration
- `@build/tsconfig` - Shared TypeScript configuration
