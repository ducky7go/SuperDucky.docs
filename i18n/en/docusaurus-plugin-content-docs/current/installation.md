---
sidebar_position: 1
title: Installation Guide
---

# Installation Guide

SuperDucky supports multiple operating systems. Please choose the appropriate installation method for your system.

## System Requirements

- Windows 10/11 (x64)
- macOS 10.15+ (Intel or Apple Silicon)
- Linux (x64)

## Download

Please visit the [SuperDucky Releases](https://github.com/ducky7go/SuperDucky/releases) page to download the latest version.

## Windows

SuperDucky provides two types of Windows installation packages:

### Installer Version (Recommended)

1. Download `SuperDucky-Setup-0.2.0.exe`
2. Double-click to run the installer
3. Follow the installation wizard to complete the installation
4. Launch SuperDucky from the Start menu after installation

### Portable Version

1. Download `SuperDucky-0.2.0.exe`
2. Place the file in any directory
3. Double-click to run

## macOS

### Intel Mac

1. Download `SuperDucky-0.2.0.dmg` (165.7 MB)
2. Double-click to open the DMG file
3. Drag SuperDucky into the Applications folder
4. Open Terminal and run the following command to remove the quarantine attribute:
   ```bash
   sudo xattr -dr com.apple.quarantine /Applications/SuperDucky.app
   ```
   This command removes the quarantine attribute that macOS Gatekeeper automatically adds to apps downloaded from the internet, preventing security prompts at launch.
5. Launch SuperDucky from Launchpad

### Apple Silicon Mac (M1/M2/M3)

1. Download `SuperDucky-0.2.0-arm64.dmg` (161.1 MB)
2. Double-click to open the DMG file
3. Drag SuperDucky into the Applications folder
4. Open Terminal and run the following command to remove the quarantine attribute:
   ```bash
   sudo xattr -dr com.apple.quarantine /Applications/SuperDucky.app
   ```
   This command removes the quarantine attribute that macOS Gatekeeper automatically adds to apps downloaded from the internet, preventing security prompts at launch.
5. Launch SuperDucky from Launchpad

:::tip
If you don't run the above command to remove the quarantine attribute, you may see a "cannot verify developer" message when you first launch the app. In this case, please click "Open Anyway" in System Preferences > Security & Privacy. Alternatively, you can dismiss the prompt, run the above `xattr` command in Terminal, and then relaunch the application.
:::

## Linux

SuperDucky is provided in AppImage format, compatible with most Linux distributions.

1. Download `SuperDucky-0.2.0.AppImage` (167.6 MB)
2. Add execute permissions:
   ```bash
   chmod +x SuperDucky-0.2.0.AppImage
   ```
3. Run:
   ```bash
   ./SuperDucky-0.2.0.AppImage
   ```

:::tip
You can also create a desktop shortcut for easier launching. Move the AppImage file to a fixed location (such as `~/Applications/`), then create a corresponding `.desktop` file.
:::

## Verify Installation

After launching SuperDucky, you should see the main interface. If you encounter any issues, please [submit an Issue](https://github.com/ducky7go/SuperDucky/issues).

## File Description

| Platform | Filename | Size | Description |
|----------|----------|------|-------------|
| Windows | `SuperDucky-Setup-0.2.0.exe` | 99.8 MB | Installer Version |
| Windows | `SuperDucky-0.2.0.exe` | 99.6 MB | Portable Version |
| macOS (Intel) | `SuperDucky-0.2.0.dmg` | 165.7 MB | Intel Mac Installer |
| macOS (Apple Silicon) | `SuperDucky-0.2.0-arm64.dmg` | 161.1 MB | M1/M2/M3 Mac Installer |
| Linux | `SuperDucky-0.2.0.AppImage` | 167.6 MB | Universal Linux Version |

## SHA256 Verification

To ensure the integrity of downloaded files, it is recommended to verify the SHA256 checksum:

```bash
# Linux/macOS
sha256sum SuperDucky-0.2.0.AppImage

# Windows (PowerShell)
Get-FileHash SuperDucky-0.2.0.exe -Algorithm SHA256
```
