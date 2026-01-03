# Project Context

## Purpose
SuperDucky.docs is a documentation website built with Docusaurus. It provides a modern, searchable documentation platform with blog capabilities for the SuperDucky project.

## Tech Stack
- **Docusaurus** 3.9.2 - Static site generator
- **TypeScript** 5.6.2 - Type-safe JavaScript
- **React** 19.0.0 - UI library
- **MDX** - Markdown + JSX for content authoring
- **Prism** - Syntax highlighting for code blocks

## Project Conventions

### Code Style
- Use TypeScript for all configuration files
- Follow Docusaurus conventions for file structure
- Content authored in MDX format for flexibility
- Use `clsx` for conditional CSS classes

### Architecture Patterns
- Classic Docusaurus preset structure
- Sidebar navigation defined in `sidebars.ts`
- Custom styles in `src/css/custom.css`
- Static assets in `static/` directory

### Testing Strategy
- Use `yarn typecheck` to verify TypeScript types
- Test locally with `yarn start` before building
- Validate build with `yarn build`

### Git Workflow
- Main branch: `main`
- Feature branches: Create from `main` for changes
- Use conventional commit messages when possible
- Verify build passes before merging

## Domain Context
This is a documentation site for the SuperDucky project. It contains:
- Tutorial documentation (`docs/` directory)
- Blog posts (`blog/` directory)
- Custom React components (`src/` directory)
- Static assets (images, favicon, etc.)

## Important Constraints
- Node.js version must be >= 20.0
- Site is configured to throw on broken links (`onBrokenLinks: 'throw'`)
- Docusaurus v4 future flags enabled

## External Dependencies
- Docusaurus framework and plugins
- GitHub for deployment configuration
- React ecosystem for component development
