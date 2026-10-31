# SuperDucky.docs

User documentation for [SuperDucky](https://github.com/ducky7go/SuperDucky), a mod manager for Escape from Duckov. Published at <https://ducky.hagicode.com/>.

Built with [Astro](https://astro.build/), [Starlight](https://starlight.astro.build/) and [`@hagicode/hagilight-starlight`](https://www.npmjs.com/package/@hagicode/hagilight-starlight). Chinese is the source language; English lives under `/en/`.

## Develop

```bash
pnpm install
pnpm run dev        # dev server
pnpm run build      # static site in dist/
pnpm run preview    # serve dist/

# add a screenshot (converted to AVIF under public/screenshots/)
pnpm run screenshot -- ./shot.png --dir feature-folder
```

Edit pages in `src/content/docs/` and keep the English mirror in `src/content/docs/en/` in step. Every image on the site is AVIF. See [AGENTS.md](./AGENTS.md) for conventions.

## Deploy

Pushes to `main` build the site and publish `dist/` to the `gh-pages` branch (`.github/workflows/deploy.yml`).

## License

MIT, see [LICENSE](./LICENSE).
