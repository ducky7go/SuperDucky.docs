# Fix Image Path Configuration

## Overview

Fix image path handling to support deployment to non-root paths with `baseUrl` configuration. Currently, image references use absolute paths (`/img/...`) which break when the site is deployed to `/SuperDucky.docs/`.

## Background

SuperDucky.docs is configured with:
- `baseUrl: '/SuperDucky.docs/'` for GitHub Pages deployment
- `onBrokenLinks: 'throw'` which causes build failures for broken links
- Static assets in `static/` directory
- Multiple components referencing images with different patterns

### Current Issues

1. **`src/data/screenshots.ts`**: Uses absolute paths `/img/screenshots/...` (lines 23, 32, 41, etc.)
2. **`docusaurus.config.ts`**: Uses relative paths for `themeConfig.image` and favicon which work, but inconsistent pattern
3. **`src/components/HomepageFeatures/index.tsx`**: Correctly uses `require('@site/static/img/...').default` pattern
4. **`src/components/ScreenshotGallery/index.tsx`**: Uses the `path` property from screenshots data which has absolute paths

### Problem Statement

When `baseUrl` is set to `/SuperDucky.docs/`, absolute paths like `/img/screenshots/...` resolve to `https://ducky7go.github.io/img/screenshots/...` instead of the correct `https://ducky7go.github.io/SuperDucky.docs/img/screenshots/...`.

## Scope

### In Scope
- Fix image paths in `src/data/screenshots.ts` to use `require()` imports
- Update `docusaurus.config.ts` image paths to use consistent patterns
- Document the correct image path patterns for future reference
- Validate fix with local build and link checking

### Out of Scope
- Migration of any additional doc content (none currently exist beyond `installation.md`)
- Changes to deployment configuration
- Performance optimizations (lazy loading is already implemented)

## Solution

### Approach

Use Docusaurus's `require()` syntax for static assets in TypeScript/JavaScript files:

```typescript
// Incorrect (current)
path: '/img/screenshots/Screenshot_20260102_211525.png'

// Correct
require('/img/screenshots/Screenshot_20260102_211525.png').default
// OR
require('@site/static/img/screenshots/Screenshot_20260102_211525.png').default
```

For `docusaurus.config.ts`, the current relative paths (`img/logo.svg`) already work correctly as Docusaurus handles them appropriately for the baseUrl context.

### Technical Details

**File: `src/data/screenshots.ts`**
- Change `path` property from string to a function that returns the required image
- Use `require('@site/static/img/screenshots/${filename}').default`

**File: `src/components/ScreenshotGallery/index.tsx`**
- Update image src usage to handle the new path format (function call instead of direct string)

**File: `docusaurus.config.ts`**
- Keep current relative paths as they work correctly
- Consider consistency by documenting the pattern

### Alternatives Considered

1. **Use `<Image>` component from Docusaurus**: Would require significant refactoring of ScreenshotGallery component
2. **Switch to relative paths everywhere**: Not feasible for data files that are imported in multiple locations
3. **Use inline base64 images**: Would increase bundle size and impact performance

## Impact

### Benefits
- Images load correctly in all deployment environments (localhost, GitHub Pages, custom domains)
- No more build failures due to broken image links
- Consistent image handling pattern across the codebase

### Risks
- TypeScript compilation must be validated
- All screenshot images must exist in `static/img/screenshots/` (currently confirmed)
- Runtime testing needed to confirm lazy loading still works

### Migration Effort
- Low: Only 2 files need modification (`screenshots.ts` and `ScreenshotGallery/index.tsx`)
- No changes needed to markdown content (none currently use images)
- Changes are localized to the screenshot feature

## Success Criteria

1. All 16 screenshots load correctly when accessed via `/SuperDucky.docs/` baseUrl
2. `yarn build` completes without broken link errors
3. Visual regression: screenshot gallery displays identically to current state
4. No TypeScript type errors

## Related Changes

None - this is a standalone fix

## References

- Docusaurus Static Assets: https://docusaurus.io/docs/next/static-assets
- GitHub Issue: N/A
- Related Spec: `landing-page` (depends on screenshot gallery working correctly)

## Status

**ExecutionCompleted** - All tasks completed successfully on 2026-01-03

### Changes Made
- Updated all 16 screenshot entries in `src/data/screenshots.ts` to use `require('@site/static/img/screenshots/...').default`
- Verified `ScreenshotGallery` component works with the new path format (no changes needed)
- TypeScript compilation passed without errors
- Build completed successfully with no broken link warnings
- Added documentation to `openspec/project.md` for future reference

### Files Modified
- `src/data/screenshots.ts` - Updated image paths for all 16 screenshots
- `openspec/project.md` - Added "Static Assets and Image Paths" documentation section
