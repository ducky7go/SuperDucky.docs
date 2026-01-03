# Content Management Spec Delta

## Capability: content-management

**Parent Spec:** N/A (new capability)
**Related Specs:** `landing-page` (screenshot gallery depends on correct image paths)

---

## ADDED Requirements

### Requirement: Static asset path resolution

Static assets (images, fonts, etc.) must resolve correctly regardless of the Docusaurus `baseUrl` configuration to ensure proper functionality when deployed to non-root paths.

#### Scenario: Image referenced in TypeScript component

**Given** a TypeScript/React component imports an image from `static/`
**When** the component uses `require('@site/static/img/...').default`
**Then** the image path includes the `baseUrl` prefix at runtime
**And** the image loads correctly in all deployment environments

#### Scenario: Image referenced in data file

**Given** a data file (e.g., `src/data/screenshots.ts`) exports image metadata
**When** image paths use `require('@site/static/img/...').default`
**Then** each image resolves to its correct URL with `baseUrl` included
**And** components consuming the data can display images without transformation

#### Scenario: Build validation with baseUrl

**Given** `docusaurus.config.ts` has `baseUrl: '/SuperDucky.docs/'`
**And** `onBrokenLinks: 'throw'` is configured
**When** `yarn build` is executed
**Then** the build completes successfully
**And** no broken link errors are reported for static assets
**And** all image references are properly resolved

---

### Requirement: Static asset import pattern consistency

All static asset imports in TypeScript/JavaScript files must follow Docusaurus's recommended patterns to maintain consistency and prevent runtime errors.

#### Scenario: Correct require() pattern usage

**Given** a TypeScript file needs to reference a static asset
**When** the developer uses `require('@site/static/path/to/asset.ext').default`
**Then** the asset is bundled correctly by Docusaurus
**And** TypeScript types are inferred properly
**And** the asset URL includes the `baseUrl` at runtime

#### Scenario: Incorrect absolute path pattern

**Given** a TypeScript file uses an absolute path string like `/img/screenshot.png`
**When** the application runs with a non-empty `baseUrl`
**Then** the image fails to load because the path lacks the `baseUrl` prefix
**And** a broken link error occurs on build with `onBrokenLinks: 'throw'`

---

## MODIFIED Requirements

None - this is a new capability

---

## REMOVED Requirements

None

---

## Implementation Notes

### Path Resolution

Docusaurus processes `require('@site/static/...')` calls at build time:
- The `@site/static/` alias resolves to the project's `static/` directory
- The `.default` accessor gets the default export (the URL string)
- The resulting URL automatically includes the configured `baseUrl`

### Existing Patterns

The following files demonstrate correct patterns:
- `src/components/HomepageFeatures/index.tsx:15` - Uses `require('@site/static/img/...').default`

### Files Requiring Changes

- `src/data/screenshots.ts` - All 16 screenshot entries
- `src/components/ScreenshotGallery/index.tsx` - May need type updates

### Validation Commands

```bash
# Type checking
yarn typecheck

# Build with link validation
yarn build

# Local development
yarn start
```
