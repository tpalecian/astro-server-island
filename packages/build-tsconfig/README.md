# @build/tsconfig

Shared TypeScript configurations for modern monorepo projects

## 📦 Available Configurations

### `base.json` - Base Configuration
**Use for:** Foundation config that other configs extend from.

**Features:**
- ES2022 target with modern DOM APIs
- Node.js ESM support (`NodeNext` module resolution)
- Strict type checking enabled
- Declaration files generation
- JSON module imports

**When to use:** Don't use directly. Extend this in your own configs.

---

### `astro.json` - Astro Projects
**Use for:** Astro 5/6 applications and websites.

**Features:**
- ESNext modules with bundler resolution (Vite-optimized)
- JSX support with React (`jsx: "preserve"`)
- Modern ES2022 target
- TypeScript extension imports (`.ts` imports)
- Verbatim module syntax for better ESM handling

**Example usage:**
```json
// apps/website/tsconfig.json
{
  "extends": "@build/tsconfig/astro.json",
  "include": ["src/**/*"],
  "exclude": ["dist", "node_modules"]
}
```

**When to use:**
- ✅ Astro applications
- ✅ Astro websites
- ✅ Projects using Vite-based bundlers
- ❌ Don't use for Node.js libraries or build tools

---

### `lib.json` - Library Packages
**Use for:** Shared libraries, utilities, and packages that emit compiled code.

**Features:**
- ESNext modules with bundler resolution
- Declaration files (`.d.ts`) generation
- ES2022 target
- Emits compiled output to `dist/`

**Example usage:**
```json
// packages/my-library/tsconfig.json
{
  "extends": "@build/tsconfig/lib.json",
  "include": ["src/**/*"],
  "exclude": ["dist", "node_modules", "**/*.test.ts"]
}
```

**When to use:**
- ✅ Shared utility packages
- ✅ Component libraries
- ✅ Packages that need to be compiled and published
- ✅ Internal monorepo packages
- ❌ Don't use for applications (use `astro.json` instead)

---

### `tools.json` - Build Tools & Scripts
**Use for:** Build scripts, tooling, and development utilities.

**Features:**
- ESNext target (latest JavaScript features)
- Bundler module resolution
- TypeScript extension imports
- No emit (type-checking only)
- JSON module imports enabled

**Example usage:**
```json
// packages/build-eslint-config/tsconfig.json
{
  "extends": "@build/tsconfig/tools.json",
  "include": ["*.ts", "src/**/*.ts"],
  "exclude": ["node_modules/"]
}
```

**When to use:**
- ✅ ESLint configs
- ✅ Build scripts
- ✅ Development tools
- ✅ CLI utilities
- ✅ Type-checking only projects
- ❌ Don't use for applications or libraries that need compilation



## 🚀 Quick Start

1. **Install the package** (if not already in your monorepo):
   ```bash
   pnpm add -D @build/tsconfig
   ```

2. **Create a `tsconfig.json`** in your project:
   ```json
   {
     "extends": "@build/tsconfig/[config-name].json",
     "include": ["src/**/*"],
     "exclude": ["dist", "node_modules"]
   }
   ```

3. **Replace `[config-name]`** with one of:
   - `astro` - For Astro applications
   - `lib` - For library packages
   - `tools` - For build tools and scripts


## 📚 Configuration Details

### Module Systems
- **`astro.json`**: `ESNext` + `bundler` resolution (Vite-optimized)
- **`lib.json`**: `ESNext` + `bundler` resolution (modern libraries)
- **`tools.json`**: `ESNext` + `bundler` resolution (tooling)
- **`base.json`**: `NodeNext` + `NodeNext` resolution (Node.js ESM)

### Targets
- **`astro.json`**: ES2022 (modern browsers)
- **`lib.json`**: ES2022 (broad compatibility)
- **`tools.json`**: ESNext (latest features)
- **`base.json`**: ES2022 (Node.js)
