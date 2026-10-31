<!-- OPENSPEC:START -->
# OpenSpec Instructions

These instructions are for AI assistants working in this project.

Always open `@/openspec/AGENTS.md` when the request:
- Mentions planning or proposals (words like proposal, spec, change, plan)
- Introduces new capabilities, breaking changes, architecture shifts, or big performance/security work
- Sounds ambiguous and you need the authoritative spec before coding

Use `@/openspec/AGENTS.md` to learn:
- How to create and apply change proposals
- Spec format and conventions
- Project structure and guidelines

Keep this managed block so 'openspec update' can refresh the instructions.

<!-- OPENSPEC:END -->

# SuperDucky.docs

See `openspec/AGENTS.md` for the spec-driven workflow and `openspec/project.md` for project context.

## Project overview

User documentation for the SuperDucky mod manager, built with Astro 7, Starlight and `@hagicode/hagilight-starlight`. Published to GitHub Pages on the custom domain `https://ducky.hagicode.com/` (`site` in `astro.config.mjs`, `public/CNAME`; there is no `base`). The site was migrated from Docusaurus; the Chinese pages are the source language and the English pages are AI translations.

## Repository layout

- `src/content/docs/` Chinese source (served at `/`): `index.mdx` (splash home), `installation.md`, `screenshots.mdx`, `feature-guides/` (`mod-management`, `enable-nuget`, `enable-save-gallery`)
- `src/content/docs/en/` English mirror, file for file (served at `/en/`)
- `public/screenshots/` every screenshot, as AVIF, referenced from Markdown by site-root path (see Images)
- `src/components/ScreenshotGallery.astro` the screenshots page
- `src/data/screenshots.ts` caption data (zh and en) for the screenshots page; `src/data/screenshot-sizes.json` image sizes, written by `scripts/add-screenshot.mjs`
- `src/styles/custom.css` gallery grid only
- `public/` `CNAME` (`ducky.hagicode.com`) and `.nojekyll`
- `scripts/add-screenshot.mjs` converts a screenshot to AVIF (`pnpm run screenshot`)
- `astro.config.mjs` Starlight, hagilight and redirect configuration; `src/content.config.ts` collection with the hagilight frontmatter schema
- `openspec/specs/` `deployment`, `docs`, `landing-page`, `hagilight-integration`

## Build / test / run

Use pnpm (`packageManager` is pinned; `pnpm-lock.yaml` is the only lockfile). Node 22.12+ (CI uses Node 24).
- `pnpm install`, `pnpm run dev` (dev server), `pnpm run build` (output in `dist/`), `pnpm run preview`.
- `pnpm run screenshot -- <image> [--dir <subfolder>]` converts a screenshot to AVIF under `public/screenshots/`.
- There is no test script. Verify a change with `pnpm run build`; article images in `dist/` must all be `.avif`.
- `pnpm-workspace.yaml` holds pnpm settings: `allowBuilds` for `esbuild` and `sharp`, and `minimumReleaseAgeExclude` for the `@hagicode/*` scope.

## CI / deploy

`.github/workflows/deploy.yml`: on push to `main`, `pnpm install --frozen-lockfile`, `pnpm run build`, publish `./dist` to the `gh-pages` branch with `peaceiris/actions-gh-pages@v3`. There is no PR check workflow.

## Conventions

- Change a page in `src/content/docs/` and the matching file in `src/content/docs/en/` together. Front matter uses `title`, `description` and `sidebar.order`.
- Admonitions use Starlight syntax: `:::tip[Title]`, `:::caution[Title]`, `:::note[Title]`.
- Link between pages with relative links such as `../enable-nuget/`.
- Describe only behavior you have confirmed in the app or its source (`repos/DML`). In the app, a "profile" is called a **模组套件**; the NuGet market is a third-party mod source; the save gallery needs the `SuperDucky.Connector` mod.
- **Images are AVIF only.** Put new screenshots through `pnpm run screenshot`, which writes `public/screenshots/**.avif`, and reference them as `![alt](/screenshots/<dir>/<name>.avif)`. Do not commit PNG or JPEG originals. Screenshots shown on the screenshots page must also be registered in `src/data/screenshots.ts` with captions that match what the image actually shows.
- Content front matter `description` must not contain `: ` (colon plus space), which breaks the YAML.

## hagilight

The site lives on `ducky.hagicode.com`, so `@hagicode/hagilight-starlight` runs with **all its defaults**: its footer (including the HagiCode filing numbers), Google Analytics, 51LA, PostHog and the consent popup, the HagiCode promotion card and banner, the default logo and favicon, RSS, SEO and site metadata. Do not turn these off or replace the footer; `hagilight()` only receives `links.siteId`, `links.siteUrl` and `aiDisclosures`. Read `openspec/specs/hagilight-integration/spec.md` first. If the site ever leaves `hagicode.com`, the filing numbers, analytics accounts and branding no longer apply and must be reviewed.

- hagilight wraps relative-path body images in `<picture>` with fixed AVIF and WebP sources, and that format list has no option. That is why screenshots live in `public/`, which hagilight leaves alone. Keep it that way to ship AVIF only. hagilight's own assets (default logo, footer avatar, promotion artwork) are not under this repo's control and may be PNG, WebP, JPEG or SVG.
- The English locale key is `en` (not `en-US`), because Starlight lowercases content folder names. `lang` stays `en-US`.
- `aiDisclosures` turns on the "AI-assisted" and "AI-translated" notices. Keep them accurate.

## Related repositories (ducky7go)

- `DML` - SuperDucky app source (the docs describe its features; navbar links to `ducky7go/SuperDucky` releases and issues).
- `SuperDucky` - public README/screenshots repo and release target.
- `SuperDucky.Connector` - game mod that the app's save gallery depends on.
