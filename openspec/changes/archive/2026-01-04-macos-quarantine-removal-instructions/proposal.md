# Change: Add macOS Quarantine Attribute Removal Instructions

**Status:** ExecutionCompleted

## Why

SuperDucky is distributed as a macOS `.app` bundle which is automatically tagged with the quarantine attribute by macOS Gatekeeper when downloaded from the internet. The current installation documentation lacks the necessary step to remove this quarantine attribute, causing users to encounter "cannot be opened because the developer cannot be verified" security prompts that prevent the application from launching.

## What Changes

- Add a command-line instruction in the macOS installation section to remove the quarantine attribute:
  ```bash
  sudo xattr -dr com.apple.quarantine /Applications/SuperDucky.app
  ```
- Update both Intel Mac and Apple Silicon Mac installation sections with this step
- Include explanation of what the command does and why it's necessary

## UI Design Changes

None - this is a documentation-only change.

## Code Flow Changes

None - this is a documentation-only change.

## Impact

- Affected specs: `deployment` (macOS installation documentation requirements)
- Affected code: `docs/installation.md`
- User experience: Users will be able to successfully launch SuperDucky after following the complete installation instructions
- Platform compatibility: Ensures macOS-specific Gatekeeper security mechanism handling is properly documented
