---
title: Installation
description: Download and install SuperDucky on Windows, macOS and Linux, and verify the download.
sidebar:
  order: 1
---

SuperDucky runs on Windows, macOS and Linux. Check the requirements, then follow the steps for your system.

## System requirements

| System | Requirement |
| --- | --- |
| Windows | Windows 10 / 11 (x64) |
| macOS | macOS 10.15 or later, Intel or Apple Silicon |
| Linux | x64 |

## Download

Get the latest version from [SuperDucky Releases](https://github.com/ducky7go/SuperDucky/releases). Below, `<version>` stands for the version you downloaded, for example `0.2.0`. The Releases page has the exact file names.

| Platform | File | Notes |
| --- | --- | --- |
| Windows | `SuperDucky-Setup-<version>.exe` | Installer (recommended) |
| Windows | `SuperDucky-<version>.exe` | Portable, no installation |
| macOS (Intel) | `SuperDucky-<version>.dmg` | Intel Macs |
| macOS (Apple Silicon) | `SuperDucky-<version>-arm64.dmg` | M-series Macs |
| Linux | `SuperDucky-<version>.AppImage` | Works on most distributions |

## Windows

You can also get SuperDucky from the [Microsoft Store](https://apps.microsoft.com/store/detail/9ndbtdkqbx30).

### Installer (recommended)

1. Download `SuperDucky-Setup-<version>.exe`.
2. Run it and follow the setup wizard.
3. Start SuperDucky from the Start menu.

### Portable

1. Download `SuperDucky-<version>.exe`.
2. Put it in any folder.
3. Double-click to run it.

## macOS

The steps are the same for Intel and Apple Silicon. Only the `.dmg` differs.

1. Download the `.dmg` that matches your chip.
2. Open it and drag SuperDucky into the Applications folder.
3. Open Terminal and remove the quarantine attribute that macOS adds to downloaded apps:

   ```bash
   sudo xattr -dr com.apple.quarantine /Applications/SuperDucky.app
   ```

4. Start SuperDucky from Launchpad.

:::tip[Seeing "cannot verify the developer" on first launch?]
That means step 3 was skipped. Either click "Open Anyway" in System Settings → Privacy & Security, or dismiss the prompt, run the `xattr` command above, and start the app again.
:::

## Linux

SuperDucky ships as an AppImage.

1. Download `SuperDucky-<version>.AppImage`.
2. Make it executable:

   ```bash
   chmod +x SuperDucky-<version>.AppImage
   ```

3. Run it:

   ```bash
   ./SuperDucky-<version>.AppImage
   ```

For a desktop shortcut, move the AppImage somewhere permanent (for example `~/Applications/`) and create a matching `.desktop` file.

## Verify the download

Check the SHA256 checksum to make sure the file is intact:

```bash
# Linux / macOS
sha256sum SuperDucky-<version>.AppImage

# Windows (PowerShell)
Get-FileHash SuperDucky-<version>.exe -Algorithm SHA256
```

## Check the installation

If the main window appears, you are done. If something goes wrong, [open an issue](https://github.com/ducky7go/SuperDucky/issues).

## Next steps

- [Mod management](../feature-guides/mod-management/): groups, load order and health checks.
- [Enable the NuGet market](../feature-guides/enable-nuget/): browse and install mods from NuGet.
