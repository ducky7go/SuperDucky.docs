# Project Context

## Purpose
SuperDucky.docs is the user documentation site for SuperDucky, a mod manager for Escape from Duckov (Windows, macOS, Linux). It is bilingual: Chinese is the source language and English is an AI translation.

## Tech Stack
- **Astro** 7 - static site generator
- **Starlight** 0.42 - documentation theme (navigation, search, i18n, admonitions)
- **@hagicode/hagilight-starlight** 0.20 - header, footer, language chooser, theme picker, 404 page, SEO, RSS, analytics and site metadata, all with default settings, see `specs/hagilight-integration`.
- **sharp** - converts screenshots to AVIF (`scripts/add-screenshot.mjs`)
- **pnpm** 12 - package manager (pinned in `package.json`)

## Project Conventions

### Content
- Pages are Markdown or MDX under `src/content/docs/` (Chinese, served at `/`) and `src/content/docs/en/` (English, served at `/en/`). Keep both in step.
- Front matter: `title`, `description`, `sidebar.order`.
- Admonitions use Starlight syntax (`:::tip[Title]`).
- Link between pages with relative links.
- Describe only behavior confirmed in the app or its source (`repos/DML`).

### Images
- Every image is AVIF. Screenshots live in `public/screenshots/` and are referenced by site-root path (`/screenshots/...avif`), which keeps hagilight from adding WebP variants.
- Add one with `pnpm run screenshot -- <image> [--dir <subfolder>]`.
- Captions for the screenshots page are in `src/data/screenshots.ts`.

### Git Workflow
- Main branch: `main`; create feature branches from it.
- Use conventional commit messages when possible.
- Verify `pnpm run build` passes before merging.
- Pushes to `main` publish the built site to the `gh-pages` branch through GitHub Actions.

## Domain Context

SuperDucky provides:
- Mod management for local, Steam Workshop and NuGet mods: groups, drag-and-drop ordering, filters, history restore and health checks
- **Mod suites** (the app's name for profiles), including import from Better Mod Loader (BML)
- A mod market with two sources: Steam Workshop and NuGet Gallery (third-party, off by default)
- A save gallery that reads the game save; it needs the `SuperDucky.Connector` mod, installed from the NuGet market
- Launching the game, a log viewer, and an initial setup wizard

### Documentation structure
- **Installation** (`installation.md`): Windows, macOS (with quarantine removal) and Linux
- **Feature guides** (`feature-guides/`): mod management, enabling the NuGet market, enabling the save gallery
- **Screenshots** (`screenshots.mdx`): 16 screenshots grouped by area
- **Home** (`index.mdx`): Starlight splash page with feature cards

### External Links
- App repository and releases: https://github.com/ducky7go/SuperDucky
- Microsoft Store: https://apps.microsoft.com/store/detail/9ndbtdkqbx30
- Documentation site: https://ducky.hagicode.com/

## Important Constraints
- Node.js 22.12 or newer (CI uses 24).
- The site is served at `https://ducky.hagicode.com/`, at the root, with no `base`. GitHub Pages is not configured, so there is no `public/CNAME` or `.nojekyll`.
- The English locale key is `en`, not `en-US`.
- hagilight keeps all its defaults (footer, analytics, promotion, logo); do not customize them, see `specs/hagilight-integration`.

## OpenSpec Integration

- **Specs** (`openspec/specs/`): `deployment`, `docs`, `landing-page`, `hagilight-integration`
- **Changes** (`openspec/changes/`): proposals for new capabilities or modifications
- **Archive** (`openspec/changes/archive/`): completed changes. Older entries describe the Docusaurus implementation and are kept as history.

## Deployment
- **Workflow**: `.github/workflows/docs-deploy-gh-pages.yml` (copied from HagiCode docs), on push to `main` or manually
- **Build**: `pnpm run build`, output `dist/`
- **Published payload**: `esa.jsonc`, `wrangler.jsonc` and `dist/` at the root of the `gh-pages` branch (orphan snapshot, `peaceiris/actions-gh-pages@v4`)
- **After publishing**: `scripts/warm-deployment-domains.mjs` warms `superducky-docs.472158246.workers.dev` and `ducky.hagicode.com`
- **GitHub Pages**: not configured
