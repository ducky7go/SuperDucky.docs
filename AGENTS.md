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

Docusaurus 3.9.2 site (React 19, TypeScript ~5.6) with the user documentation for the SuperDucky mod manager. Published to GitHub Pages at `https://ducky7go.github.io/SuperDucky.docs/` (`url`/`baseUrl` in `docusaurus.config.ts`). Docs content is written in Chinese (default locale `zh-Hans`) with English translations (`en`).

## Repository layout

- `docs/` Chinese source: `installation.md`, `feature-guides/` (`enable-nuget`, `enable-save-gallery`, `mod-management`, `_category_.json`)
- `i18n/en/docusaurus-plugin-content-docs/current/` English translation mirroring `docs/` file for file
- `sidebars.ts` single sidebar `mainSidebar`: lists docs explicitly, so a new page must be added there
- `src/` landing page (`pages/index.tsx`), components (`HomepageFeatures`, `FeatureCards`, `ScreenshotGallery`), `data/screenshots.ts`, `css/custom.css`
- `static/img/` logo, favicon, store badge, `screenshots/` (plus `enable_nuget/`, `enable_save_gallary/` subfolders)
- `openspec/specs/`: `deployment`, `docs`, `landing-page`

## Build / test / run

Use npm (`package-lock.json` exists and CI uses `npm ci`); `engines.node` is `>=20.0`, CI uses Node 24.
- `npm start` dev server; `npm run build` static build into `build/`; `npm run serve`; `npm run typecheck` (`tsc`); `npm run clear`
- `npm run write-translations` / `write-heading-ids` are available Docusaurus scripts.
- `onBrokenLinks: 'throw'`, so a broken internal link fails the build. Run `npm run build` after editing docs.

## CI / deploy

`.github/workflows/deploy.yml`: on push to `main`, `npm ci`, `npm run build`, publish `./build` to the `gh-pages` branch with `peaceiris/actions-gh-pages@v3`. No PR check workflow.

## Conventions

- Add or change a doc in `docs/` and the matching file under `i18n/en/docusaurus-plugin-content-docs/current/` together. Front matter uses `sidebar_position` and `title`.
- In TS/TSX files reference images with `require('@site/static/img/...').default` (as in `src/data/screenshots.ts`); `baseUrl` is `/SuperDucky.docs/`, so absolute `/img/...` paths in TS break. `openspec/project.md` documents this rule.
- Navbar/footer labels in `docusaurus.config.ts` are hard-coded Chinese.

## Gotchas

- `openspec/project.md` is partly stale: it says yarn (the `README.md` is also the Docusaurus template and says yarn), mentions a `blog/` directory and a `compress-images.yml` workflow, none of which exist now (the latest commit deleted the workflow).
- `package.json` name is still `my-website`; `docs.editUrl` and `blog.editUrl` still point to the Docusaurus template repo, and `static/img` still has template images (`docusaurus*.png/jpg`, `undraw_*.svg`).
- The blog plugin is enabled in config but there is no `blog/` directory.
- `docs/installation.md` lists Windows, macOS and Linux; `openspec/project.md` says Windows/macOS only.

## Related repositories (ducky7go)

- `DML` - SuperDucky app source (docs describe its features; navbar links to `ducky7go/SuperDucky` releases and issues).
- `SuperDucky` - public README/screenshots repo and release target.
- `SuperDucky.Connector` - game mod that the app's save gallery depends on (per DML's openspec); the `enable-save-gallery` guide here does not mention it by name.
