# Project Context

## Purpose
SuperDucky.docs is the official documentation website for SuperDucky, a game mod manager for Windows. Built with Docusaurus, it provides a modern, searchable bilingual documentation platform (Chinese/English) with blog capabilities, screenshot galleries, and comprehensive feature guides.

## Tech Stack
- **Docusaurus** 3.9.2 - Static site generator
- **TypeScript** 5.6.2 - Type-safe JavaScript for configuration and components
- **React** 19.0.0 - UI library for custom components
- **MDX** - Markdown + JSX for flexible content authoring
- **Prism** (prism-react-renderer 2.3.0) - Syntax highlighting with GitHub and Dracula themes
- **clsx** 2.0.0 - Conditional CSS class utilities

## Project Conventions

### Code Style
- Use TypeScript for all configuration and component files
- Follow Docusaurus conventions for file structure
- Content authored in MDX format for flexibility
- Use `clsx` for conditional CSS classes
- Maintain Chinese as primary language with English i18n support

### Architecture Patterns

#### Directory Structure
```
SuperDucky.docs/
├── docs/                    # Documentation content
│   ├── installation.md      # Installation guide
│   └── feature-guides/      # Feature-specific guides
│       ├── _category_.json  # Category configuration
│       ├── enable-nuget.md
│       └── enable-save-gallery.md
├── src/                     # Custom React components
│   ├── components/
│   │   ├── HomepageFeatures/    # Landing page feature cards
│   │   ├── FeatureCards/        # Feature overview cards
│   │   └── ScreenshotGallery/   # Interactive screenshot gallery
│   ├── data/
│   │   └── screenshots.ts       # Screenshot metadata (16 screenshots)
│   ├── pages/
│   │   └── index.tsx            # Landing page
│   └── css/
│       └── custom.css           # Custom styles
├── static/                  # Static assets
│   └── img/
│       ├── logo.svg
│       ├── favicon.ico
│       ├── store-badge.svg      # Microsoft Store badge
│       └── screenshots/         # Screenshot images
├── openspec/                # Spec-driven development
│   ├── specs/                # Current specifications
│   │   ├── landing-page/
│   │   ├── deployment/
│   │   └── docs/
│   └── changes/              # Active change proposals
├── blog/                    # Blog posts
├── sidebars.ts              # Documentation sidebar navigation
└── docusaurus.config.ts     # Site configuration
```

#### Key Components
- **ScreenshotGallery**: Displays 16 screenshots organized by category (workshop, mods, profiles, settings, launch, ui) with lazy loading
- **FeatureCards**: Highlights 5 key features with icons and descriptions
- **HomepageFeatures**: Hero section with branding and call-to-action buttons
- **Data-driven screenshots**: All screenshot metadata centralized in `src/data/screenshots.ts`

### Testing Strategy
- Use `yarn typecheck` to verify TypeScript types
- Test locally with `yarn start` before building
- Validate build with `yarn build`
- Broken link checking enforced (`onBrokenLinks: 'throw'`)

### Git Workflow
- Main branch: `main`
- Feature branches: Create from `main` for changes
- Use conventional commit messages when possible
- Verify build passes before merging
- Auto-deployment to GitHub Pages via GitHub Actions

## Domain Context

### Project Description
SuperDucky is a game mod manager that provides:
- Steam Workshop integration for browsing and subscribing to mods
- Mod management with list views, detail panels, and organization tools
- Profile system for managing different mod configurations
- Game path configuration and launch integration
- Theme customization (light/dark mode)

### Documentation Structure
- **Installation Guide** (`docs/installation.md`): Installation instructions for Windows and macOS (including quarantine attribute removal for Mac)
- **Feature Guides** (`docs/feature-guides/`): Detailed guides for enabling NuGet and save gallery features
- **Landing Page**: Hero section, feature cards, and screenshot gallery
- **Blog**: News and updates about the project

### Bilingual Support
- Primary locale: `zh-Hans` (Simplified Chinese)
- Secondary locale: `en` (English)
- Locale dropdown in navbar for language switching

### External Links
- GitHub Repository: https://github.com/ducky7go/SuperDucky
- Releases: https://github.com/ducky7go/SuperDucky/releases
- Microsoft Store: https://apps.microsoft.com/store/detail/9ndbtdkqbx30
- Documentation Site: https://ducky7go.github.io/SuperDucky.docs/

## Static Assets and Image Paths

### Images in TypeScript/JavaScript Files

When referencing images in TypeScript or JavaScript files (e.g., components, data files), use Docusaurus's `require()` syntax to ensure compatibility with `baseUrl` configuration:

```typescript
// Correct - Works with baseUrl
import myImage from '@site/static/img/my-image.png';

// OR
const imagePath = require('@site/static/img/my-image.png').default;
```

**Why this matters:** When `baseUrl` is set (e.g., `/SuperDucky.docs/`), absolute paths like `/img/screenshots/...` resolve incorrectly. Using `require()` ensures Docusaurus properly resolves paths relative to the baseUrl.

**Example from screenshots.ts:**
```typescript
export const screenshots: Screenshot[] = [
  {
    id: 'ui-1',
    filename: 'Screenshot_20260102_211525.png',
    path: require('@site/static/img/screenshots/Screenshot_20260102_211525.png').default,
    title: '主仪表板',
    category: 'ui',
    description: '精美主页，快速访问所有功能和查看最近活动。',
    order: 1,
  },
  // ... more screenshots
];
```

### Images in MDX/Markdown Files

In MDX files, use standard markdown syntax or the `<Image>` component:

```md
![Alt text](/img/screenshot.png)

<!-- OR -->

import Image from '@theme/Image';

<Image img={require('@site/static/img/screenshot.png').default} />
```

For feature guide screenshots:
```md
![Enable NuGet](/img/screenshots/enable_nuget/001_enable_nuget..png)
```

### Configuration Files

In `docusaurus.config.ts`, relative paths for images work correctly as Docusaurus handles them appropriately:

```typescript
themeConfig: {
  image: 'img/screenshots/Screenshot_20260102_211938.png',
  navbar: {
    logo: {
      alt: 'SuperDucky Logo',
      src: 'img/logo.svg',
    },
  },
}
```

## Important Constraints
- Node.js version must be >= 20.0
- Site is configured to throw on broken links (`onBrokenLinks: 'throw'`)
- Docusaurus v4 future flags enabled (`future: { v4: true }`)
- baseUrl is set to `/SuperDucky.docs/` for GitHub Pages deployment
- **Always use `require('@site/static/...')` for images in TypeScript/JavaScript files to ensure baseUrl compatibility**
- Image compression workflow via GitHub Actions (`.github/workflows/compress-images.yml`)

## OpenSpec Integration

This project uses OpenSpec for spec-driven development:
- **Specs** (`openspec/specs/`): Define current capabilities (landing-page, deployment, docs)
- **Changes** (`openspec/changes/`): Propose new features or modifications
- **Archive** (`openspec/changes/archive/`): Completed changes after deployment

Key capabilities:
- `landing-page`: Hero section, feature cards, screenshot gallery, Microsoft Store badge
- `deployment`: GitHub Actions workflow for automated builds and deployments
- `docs`: Feature guide categorization and bilingual documentation

## External Dependencies
- Docusaurus framework and plugins (`@docusaurus/core`, `@docusaurus/preset-classic`)
- React ecosystem (React 19, ReactDOM)
- MDX support (`@mdx-js/react`)
- GitHub for deployment and issue tracking
- Microsoft Store for application distribution
- GitHub Actions for CI/CD

## Deployment
- **Platform**: GitHub Pages
- **Workflow**: Automated deployment on push to `main` branch
- **Build Tool**: Docusaurus with yarn
- **URL**: https://ducky7go.github.io/SuperDucky.docs/
- **Branch**: `gh-pages` (auto-generated by deployment workflow)
