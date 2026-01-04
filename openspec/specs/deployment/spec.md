# deployment Specification

## Purpose
TBD - created by archiving change github-actions-deployment-workflow. Update Purpose after archive.
## Requirements
### Requirement: Automated Deployment Pipeline

The system SHALL provide an automated deployment pipeline that builds and deploys the documentation site to GitHub Pages when code is pushed to the `main` branch.

#### Scenario: Automatic deployment on push to main
- **WHEN** code changes are pushed to the `main` branch
- **THEN** the GitHub Actions workflow triggers automatically
- **AND** the site is built using `yarn build`
- **AND** the built site is deployed to the `gh-pages` branch
- **AND** the site becomes available on GitHub Pages

#### Scenario: Build failure prevents deployment
- **WHEN** the build step fails (e.g., broken links detected)
- **THEN** the workflow execution stops
- **AND** the deployment step is not executed
- **AND** the workflow status shows as failed
- **AND** the existing site remains unchanged

### Requirement: Node.js Version Compatibility

The deployment pipeline SHALL use Node.js version 20.0 or higher to ensure compatibility with the project's engine requirements.

#### Scenario: Correct Node.js version is used
- **WHEN** the workflow executes
- **THEN** Node.js version >= 20.0 is installed
- **AND** the build runs with the correct Node.js version

### Requirement: Build Validation

The deployment pipeline SHALL validate that the site builds successfully with strict link checking enabled before deploying.

#### Scenario: Build validates broken links
- **WHEN** the build step executes
- **THEN** `yarn build` runs with `onBrokenLinks: 'throw'` configuration
- **AND** if any broken links are detected, the build fails
- **AND** deployment is prevented when build fails

### Requirement: GitHub Pages Deployment

The deployment pipeline SHALL publish the built site to GitHub Pages using the `gh-pages` branch.

#### Scenario: Successful deployment to gh-pages
- **WHEN** the build succeeds
- **THEN** the contents of the `build/` directory are pushed to the `gh-pages` branch
- **AND** GitHub Pages serves the site from the `gh-pages` branch
- **AND** the site is accessible via the GitHub Pages URL

#### Scenario: Workflow has necessary permissions
- **WHEN** the workflow executes
- **THEN** the workflow has `contents: write` permission
- **AND** the workflow can push to the `gh-pages` branch

### Requirement: Dependency Installation

The deployment pipeline SHALL install project dependencies using yarn with frozen lockfile to ensure reproducible builds.

#### Scenario: Dependencies installed consistently
- **WHEN** the workflow executes
- **THEN** dependencies are installed using `yarn install --frozen-lockfile`
- **AND** the exact versions from `yarn.lock` are used
- **AND** dependency installation is cached for faster builds

### Requirement: Deployment Trigger

The deployment workflow SHALL trigger only when commits are pushed to the `main` branch.

#### Scenario: Push to main triggers deployment
- **WHEN** code is pushed to the `main` branch
- **THEN** the deployment workflow is triggered
- **AND** a new workflow run begins

#### Scenario: Push to other branches does not trigger deployment
- **WHEN** code is pushed to any branch other than `main`
- **THEN** the deployment workflow is not triggered

### Requirement: macOS Quarantine Attribute Removal Documentation

The installation documentation SHALL provide instructions for removing the macOS quarantine attribute from the SuperDucky.app bundle after installation.

#### Scenario: User downloads and installs SuperDucky on Intel Mac
- **WHEN** a user downloads SuperDucky-0.2.0.dmg on an Intel Mac
- **AND** follows the installation steps to copy SuperDucky.app to /Applications
- **THEN** the documentation SHALL provide the command `sudo xattr -dr com.apple.quarantine /Applications/SuperDucky.app`
- **AND** SHALL explain that this command removes the Gatekeeper quarantine attribute
- **AND** SHALL specify that this step is required for the application to launch without security prompts

#### Scenario: User downloads and installs SuperDucky on Apple Silicon Mac
- **WHEN** a user downloads SuperDucky-0.2.0-arm64.dmg on an Apple Silicon Mac (M1/M2/M3)
- **AND** follows the installation steps to copy SuperDucky.app to /Applications
- **THEN** the documentation SHALL provide the command `sudo xattr -dr com.apple.quarantine /Applications/SuperDucky.app`
- **AND** SHALL explain that this command removes the Gatekeeper quarantine attribute
- **AND** SHALL specify that this step is required for the application to launch without security prompts

#### Scenario: User needs to understand what the command does
- **WHEN** a user reads the macOS installation instructions
- **THEN** the documentation SHALL explain that the `xattr` command operates on file extended attributes
- **AND** SHALL explain that `-d` flag deletes the specified attribute
- **AND** SHALL explain that `-r` flag applies the change recursively to the app bundle contents
- **AND** SHALL explain that `com.apple.quarantine` is the macOS quarantine attribute identifier
- **AND** SHALL explain that `sudo` is required for administrator permissions to modify system attributes

