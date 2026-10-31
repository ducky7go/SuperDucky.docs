---
title: Enable the NuGet Market
description: Turn on NuGet Gallery in SuperDucky's mod market to browse and install mods published on NuGet, and learn the risks first.
sidebar:
  order: 2
---

SuperDucky's **mod market** has two sources: Steam Workshop and NuGet Gallery. Steam Workshop is available by default. NuGet Gallery must be enabled manually, because NuGet is a third-party open platform.

Once enabled, you can browse and install mods published on NuGet from inside the app.

## Steps

### 1. Open NuGet Gallery

Open **Mod Market** in the left sidebar and click **NuGet Gallery** at the top right. While it is off, a "Not enabled" badge appears next to it.

![Click NuGet Gallery in the mod market](/screenshots/enable_nuget/001_enable_nuget.avif)

### 2. Read the risk notice and confirm

A dialog titled "Enable NuGet market" appears. Read it in full, then click **I understand the risks, enable**.

![NuGet market risk confirmation dialog](/screenshots/enable_nuget/002_confirm.avif)

## What to know before you enable it

NuGet is an open-source package manager for .NET developers, and everything on it is maintained independently by the community. The dialog states that:

- The NuGet market is **not** maintained or endorsed by the SuperDucky team, Team Soda, the official Escape from Duckov team, or Steam/Valve.
- Packages may contain inappropriate content or malicious code, and their quality and safety depend on the publisher.
- Some packages may be incompatible or have dependency conflicts.
- By enabling it, you agree to judge each package's safety and suitability yourself and to take responsibility for problems caused by third-party packages.

## Reporting inappropriate content

- Click **Report Abuse** on the package's page on NuGet.
- Or open an [issue](https://github.com/ducky7go/SuperDucky/issues) with SuperDucky. Inappropriate content is added to the blocklist.

## Turning it off

You can disable the NuGet market at any time in the market settings.

## Troubleshooting

### Cannot reach NuGet

Check your network connection and make sure you can reach NuGet.

### A mod fails to install

Make sure you have enough disk space, and check whether the mod is compatible with your game version and the other installed mods. The health check in [Mod management](../mod-management/) lists dependency problems and conflicts.
