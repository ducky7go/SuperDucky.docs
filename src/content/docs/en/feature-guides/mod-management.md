---
title: Mod Management
description: Manage local, Steam Workshop and NuGet mods in SuperDucky with mod suites, groups, ordering, filters, history restore and health checks.
sidebar:
  order: 1
---

Mod management is the core of SuperDucky. Install, enable, order and update mods here. Mods can come from local files, the Steam Workshop or NuGet packages.

## Layout

The page has two panes:

- **Left:** the list of mod groups.
- **Right:** every mod in the selected group.

### Mod suites

A **mod suite** (shown as 模组套件 in the Chinese UI) is what other tools call a profile: a separate set of mods for each play style. Open the "Mod suite management" dialog to:

- **Create**, **rename** or **delete** a suite.
- **Switch to** another suite. The active suite is marked "In effect", with its number of enabled mods.
- **Import from BML**: import a Better Mod Loader (BML) configuration. If SuperDucky detects a BML configuration, it also imports it as a suite automatically.

## Browsing the mod list

### Display modes

| Mode | What it shows |
| --- | --- |
| Default | Preview image, name, source tag and enable switch |
| Compact | Tighter cards, more mods per screen |
| Single line | The most compact view, only the essentials |

Each mod card shows a preview image, the name, a source tag (local, Steam Workshop or NuGet) and an enable switch.

### Filter and search

- **Source:** local, Steam or NuGet.
- **Status:** enabled or disabled.
- **Search box:** type a mod name or ID to filter as you type.

### Bulk actions

After filtering, **enable all** or **disable all** applies to the current results.

## Groups and load order

### Group by dragging

1. Press and hold a mod card.
2. Drag it onto a group in the left pane.
3. Release to add it.

### Change the load order

Load order affects the game. Some mods only work when they load after others.

- **Drag** a card within a group to move it.
- Or use **Move to group start** / **Move to group end** in the right-click menu.

### Right-click menu

| Action | What it does |
| --- | --- |
| Enable / Disable | Toggle the mod |
| Move to group | Move it to another group |
| Move to group start / end | Change the load order |
| Open folder | Open the mod's folder in your file manager |
| View on Steam | Open the Workshop page (Steam mods only) |

## Restore history

Want to go back after changing your groups? Open the "Restore history" dialog and pick an earlier version. Each entry shows its time, group count, mod count and enabled count. After you choose one, **click Save to confirm** before the restore takes effect.

## Mod details

Click a mod card to open its details panel.

**Local mods** show the preview image, path, folder name and dependencies, with an "Open folder" button. If a local mod is also a Steam mod, "View on Steam" is available too.

**Steam Workshop mods** add subscriber count, rating, last update, author link, description (BBCode supported), a preview gallery, a dependency tree and version history. You can subscribe or unsubscribe from the panel.

## Steam Workshop

SuperDucky integrates with the Workshop, so you can browse and subscribe without leaving the app.

- **Subscribe:** click "Subscribe" in a Steam mod's details. Steam downloads it automatically.
- **Update checks:** SuperDucky checks subscribed mods for updates periodically, and the card shows when one is available.
- **Updating:** the Steam client performs the update. The update status is visible in the health check.

## Health check

SuperDucky checks your mod configuration automatically and shows a status bar in the top-right corner.

| Color | Meaning |
| --- | --- |
| Green | Healthy, nothing found |
| Yellow | Warnings, for example a missing dependency |
| Red | Errors, for example a mod conflict |
| Gray | Every issue has been ignored |

Click the bar for the full report: errors, warnings and ignored issues, with fix suggestions. You can ignore an issue or stop ignoring it. The status updates automatically after you fix something.

## Troubleshooting

### A mod will not enable

Check, in order:

1. The mod files are complete.
2. No required dependency is missing.
3. There is no conflict. The health report lists them.
4. The mod supports your game version.

### A Steam mod is not listed

1. Make sure you subscribed to it in Steam.
2. Wait for Steam to finish downloading.
3. Make sure the Steam client is running.
4. Refresh the mod list in SuperDucky.

### The game misbehaves and you suspect load order

- Put base mods first and mods that depend on others after them.
- Check the dependencies in the mod details.
- Use the health check to find dependency problems.
