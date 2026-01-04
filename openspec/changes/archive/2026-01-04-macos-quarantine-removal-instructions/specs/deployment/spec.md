## ADDED Requirements

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
