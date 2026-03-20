# @build/eslint-config

A shared ESLint configuration package for the monorepo, providing consistent linting rules across all projects.

## Features

- **Flat Config Format**: Uses ESLint's modern flat config format
- **TypeScript Support**: Full TypeScript and TSX support with type-aware linting
- **Import Resolution**: Automatic import resolution with TypeScript path mapping
- **Prettier Integration**: Seamlessly integrates with Prettier to avoid conflicts
- **Turbo Integration**: Includes Turbo-specific linting rules
- **Smart Ignores**: Automatically respects `.gitignore` files
- **Monorepo Aware**: Handles workspace packages and subpath exports

## Installation

This package is part of the monorepo workspace. No additional installation is required.

## Usage

### Basic Setup

Create an `eslint.config.ts` file in your project root:

```typescript
import { defineConfig, getConfig, type Config } from '@build/eslint-config'

const config = getConfig(import.meta.url)

export default defineConfig([config]) as Config
```

### How It Works

The `getConfig()` function accepts an `import.meta.url` parameter to:

- Automatically detect the project's root directory
- Resolve TypeScript configuration files
- Include relevant `.gitignore` files for ignore patterns

## Configuration Details

### Included Configurations

- **ESLint Recommended**: Base recommended rules from ESLint
- **TypeScript ESLint**: Recommended TypeScript rules with type-aware linting
- **Import Plugin**: Import/export validation and resolution
- **Turbo Config**: Monorepo-specific linting rules
- **Prettier**: Disables conflicting formatting rules

### File Patterns

The configuration applies different rules based on file patterns:

- **TypeScript Files** (`**/*.{ts,tsx,mts,mjs}`): Full TypeScript linting with type checking
- **Test Files** (`**/*.spec.ts`, `**/*.test.ts`, `**/test/**/*.ts`, `**/mocks.ts`): Relaxed import resolution for test environments
- **Config Files** (`tailwind.config.ts`, `postcss.config.mjs`): Allows CommonJS-style imports
- **Test Fixtures** (`**/test/fixtures/**/*`): Disabled import resolution

### Ignored Patterns

The following patterns are automatically ignored:

- `.*.{js,cjs}` - Config files in root
- `**/*.{js,cjs}` - All JavaScript files
- `**/node_modules/**` - Dependencies
- `**/dist/**` - Build outputs
- `eslint.config.ts` - ESLint config files
- `**/worker-configuration.d.ts` - Generated type definitions
- Patterns from `.gitignore` files

### Key Rules

#### TypeScript Rules

- `@typescript-eslint/consistent-type-imports`: Enforces type-only imports
- `@typescript-eslint/no-unused-vars`: Warns on unused variables (ignores `_` prefix)
- `@typescript-eslint/no-floating-promises`: Warns on unhandled promises
- `@typescript-eslint/array-type`: Prefers `string[]` over `Array<string>`

#### Import Rules

- `import/no-unresolved`: Validates import paths
  - Ignores virtual modules: `cloudflare:`, `virtual:`, `astro:`, `node:`
  - Ignores workspace packages: `@build/`, `@core/`, `@service/`, `@testing/`, `@ui/`

#### Code Quality

- `prefer-const`: Warns when `let` could be `const`
- `no-mixed-spaces-and-tabs`: Enforces consistent indentation
- `no-empty`: Warns on empty blocks

### Customization

To extend or override the configuration:

```typescript
import { defineConfig, getConfig, type Config } from '@build/eslint-config'

const baseConfig = getConfig(import.meta.url)

export default defineConfig([
  ...baseConfig,
  {
    rules: {
      // Your custom rules here
      '@typescript-eslint/no-explicit-any': 'error',
    },
  },
]) as Config
```

## Helper Functions

The package exports helper functions used internally:

- `getDirname(importMetaUrl: string)`: Gets the directory name from `import.meta.url`
- `getGitIgnoreFiles(importMetaUrl: string)`: Resolves and includes `.gitignore` files
- `getTsconfigRootDir(importMetaUrl: string)`: Finds the TypeScript config root directory

## Requirements

- Node.js 18+
- ESLint 9+
- TypeScript 5+

## Related Packages

- `@build/tsconfig`: Shared TypeScript configuration
- `eslint-config-prettier`: Prettier integration
- `eslint-config-turbo`: Turbo monorepo rules

## TypeScript Project Service

The configuration uses TypeScript's Project Service for type-aware linting. This requires:

1. A `tsconfig.json` file in your project root
2. TypeScript 5.3+ for optimal performance

The configuration automatically detects your `tsconfig.json` and uses it for type checking.
