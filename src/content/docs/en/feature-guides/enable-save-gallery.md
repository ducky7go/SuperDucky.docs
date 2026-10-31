---
title: Enable the Save Gallery
description: Install SuperDucky.Connector and enable the save gallery to see the items collected in your save, search and filter them, and compare their attributes.
sidebar:
  order: 3
---

The save gallery reads your game save, shows the items you have collected by category, and lets you compare several items side by side.

## Prerequisite

The save gallery needs the **SuperDucky.Connector** mod installed in the game. It provides the game data to SuperDucky. The mod is published on NuGet, so first [enable the NuGet market](../enable-nuget/).

## Install and enable

### 1. Install SuperDucky.Connector

In the **mod market**, switch to NuGet Gallery, search for `SuperDucky.Connector`, open its details, and click **Install**. It installs the version marked "Latest" by default.

![Install SuperDucky.Connector](/screenshots/enable_save_gallery/001_install_depends_and_enable.avif)

### 2. Turn on the feature

Go to **Settings → Save Gallery** and switch on "Save Gallery".

![Enable the save gallery in settings](/screenshots/enable_save_gallery/002_enable_feature.avif)

This page also lets you drag to reorder the attributes shown in the comparison panel. "Reset to default" restores the order.

:::caution[Play your save for a moment first]
After enabling the gallery and before opening it, load your save and play for about 2 minutes. That makes the game write the data and image assets into the save so the gallery can show everything. Opening it too early can leave content missing.
:::

## Browsing the gallery

Once enabled, click **Save Gallery** in the left sidebar. The page shows the collection progress of the current save and the items by category.

![Gallery preview](/screenshots/enable_save_gallery/003_preview_gallery.avif)

- Switch between grid view and list view.
- Filter by tag.
- The search box filters by **item name and description** as you type.
- The first load can take a while because the save is scanned. After that, SuperDucky checks whether the save changed and rescans only if it did. You can also click the refresh button to reload manually.

## Comparing items

Put several items side by side to see how their attributes differ.

### Add items to compare

- **Right-click** an item and choose "Add to compare".
- Or **left-click** an item to open its details and click "Add to compare".

### View the comparison

After adding items, click the **compare button at the top right** of the list.

- You can compare up to **6 items** at a time.
- Pick any one of them as the baseline to see how the others differ from it.

![Item comparison](/screenshots/enable_save_gallery/004_compare_items.avif)

## Item types

### Simple items

Basic game items, showing the essential information.

![Simple item](/screenshots/enable_save_gallery/005_simple_item.avif)

### Complex items

Items with more attributes. The gallery shows the full attribute list.

![Complex item](/screenshots/enable_save_gallery/006_complex_item.avif)

### Mod items

If you have mods that add items, the gallery recognizes and shows them too.

![Mod item](/screenshots/enable_save_gallery/007_mod_item.avif)
