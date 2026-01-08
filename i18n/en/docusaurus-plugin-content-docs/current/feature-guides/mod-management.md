---
title: Mod Management Feature Guide
sidebar_position: 3
---

Mod management is a core feature of SuperDucky. This document provides detailed instructions on how to use the mod management functionality.

## Feature Overview

SuperDucky provides powerful mod management capabilities, allowing you to easily manage the installation, enabling, and updating of game mods. It supports multiple sources including local mods, Steam Workshop, and NuGet packages, with features like visual grouping, batch operations, and health checking.

## Mod Management Interface

SuperDucky's mod management interface uses a split-panel layout:

- **Left Panel**: Displays mod group list, supporting creation and management of different mod profiles
- **Right Panel**: Displays all mods in the selected group

### Profile Management

SuperDucky supports multiple mod profiles, allowing you to create independent mod configurations for different game scenarios:

- **Switch Profiles**: Select different profiles in the left panel
- **Create Profile**: Create a new mod configuration
- **Rename/Delete Profiles**: Manage existing profiles

## Mod List View

### Display Modes

The mod list supports three display modes that you can switch between:

- **Default Mode**: Shows mod preview image, name, source badge, and enable switch
- **Compact Mode**: Reduces card spacing to display more mods on one screen
- **One-line Mode**: Most compact display, showing only essential information

### Mod Card Information

Each mod card displays the following information:

- **Preview Image**: The mod's preview image
- **Mod Name**: The display name of the mod
- **Source Badge**: Shows the mod source
  - Local mod
  - Steam Workshop
  - NuGet package
- **Enable Switch**: Quickly enable or disable the mod

### Mod Filtering and Search

Use filtering to quickly find target mods:

- **Source Filter**: Filter by mod source (Local/Steam/NuGet)
- **Status Filter**: Filter by enable status (Enabled/Disabled)
- **Search Box**: Real-time search by mod name or ID

### Batch Operations

After filtering, you can perform batch operations on mods:

- **Enable All**: Enable all mods in current filtered results
- **Disable All**: Disable all mods in current filtered results

## Mod Groups

### Drag to Group

Add mods to different groups by dragging:

1. Click and hold on a mod card
2. Drag to the target group on the left
3. Release to complete grouping

### Mod Sorting

Within the same group, adjust mod load order by dragging:

1. Click and hold the mod card to drag
2. Move to the target position
3. Release to complete sorting

Mod load order is important - some mods may require a specific load order to work properly.

### Right-Click Menu

Right-click on a mod card to perform these operations:

- **Enable/Disable**: Toggle mod enable state
- **Move to Group**: Move mod to specified group
- **Move to Front**: Move mod to the front of group load order
- **Move to End**: Move mod to the end of group load order
- **Open Folder**: Open mod folder in file manager
- **View Steam Details**: View mod details on Steam Workshop (Steam mods only)

## Mod Details Panel

Click on a mod card to open the mod details panel and view complete mod information.

### Local Mod Details

For locally installed mods, the details panel displays:

- **Preview Image**: Mod preview image
- **Mod Path**: Full file system path to the mod
- **Folder Name**: Mod folder name
- **Dependencies**: List of other mods this mod depends on
- **Action Buttons**:
  - Open Folder: Open mod directory in file manager
  - View Steam Details: Jump to Steam Workshop (if it's a Steam mod)

### Steam Workshop Mod Details

For Steam Workshop mods, the details panel displays richer information:

- **Subscribers**: Number of subscribers to this mod
- **Rating**: User rating of the mod
- **Last Updated**: Last update time of the mod
- **Author Info**: Links to mod author
- **Description**: Detailed mod description (supports BBCode format)
- **Preview Gallery**: Gallery with multiple preview images
- **Dependency Tree**: Visualized mod dependency diagram
- **Version History**: Mod update history
- **Subscribe/Unsubscribe**: Manage Steam Workshop subscription status

## Steam Workshop Integration

SuperDucky deeply integrates with Steam Workshop, allowing you to browse and subscribe to mods directly in the app.

### Browse Workshop

1. Find Steam Workshop source mods in the mod list
2. Click on the mod card to view details
3. The details panel displays complete Workshop information

### Subscribe and Auto-Download

- **Subscribe to Mod**: Click "Subscribe" button in Steam mod details
- **Auto Download**: Steam automatically downloads subscribed mods
- **Update Check**: SuperDucky periodically checks for Workshop mod updates

### Update Management

- **Update Notification**: Mod cards show update alerts when updates are available
- **Update Status**: Check mod update status in health check
- **Manual Update**: Update mods through Steam client

## Mod Operations

### Enable/Disable Mods

Multiple ways to enable or disable mods:

- **Toggle Switch**: Click the enable switch directly on the mod card
- **Right-Click Menu**: Right-click on mod card and select "Enable" or "Disable"
- **Batch Operations**: Use batch enable/disable after filtering

### Move Mods to Groups

Move mods to different groups via:

- **Drag to Move**: Drag mod card directly to target group
- **Right-Click Menu**: Select "Move to Group" and choose target group

### Adjust Mod Load Order

Mod load order affects game execution and can be manually adjusted:

- **Drag to Sort**: Drag mods within the same group to adjust order
- **Move to Front/End**: Select "Move to Front" or "Move to End" in right-click menu

### Open Mod Folder

When you need to view or modify mod files:

- **Right-Click Menu**: Select "Open Folder"
- **Details Panel**: Click "Open Folder" button in mod details

## Health Check

SuperDucky automatically checks the health of your mod configuration and displays a health status bar in the top-right corner of the interface.

### Health Status Indicators

- **Green**: Configuration is healthy, no issues found
- **Yellow**: Warnings exist (such as missing dependencies)
- **Red**: Errors exist (such as mod conflicts)
- **Gray**: All issues have been ignored

### View Health Report

Click the health status bar to open a detailed health report showing:

- **Error List**: All errors that need to be fixed
- **Warning List**: All warnings that need attention
- **Ignored Issues**: Issues that have been marked as ignored

### Manage Health Issues

In the health report, you can:

- **Ignore Issue**: Mark certain issues as ignored
- **Unignore**: Restore attention to ignored issues
- **Fix Suggestions**: View fix suggestions for issues

## FAQ

### Mod Cannot Be Enabled

If a mod cannot be enabled, check:

- Whether mod files are complete
- Whether required dependency mods are missing
- Whether mod conflicts exist (check health report)
- Whether mod is compatible with current game version

### Steam Mods Not Showing

If Steam Workshop mods are not showing:

- Confirm you have subscribed to the mod in Steam
- Wait for Steam to finish downloading the mod
- Check if Steam client is running
- Refresh mod list in SuperDucky

### Mod Load Order Issues

If the game has issues, you may need to adjust mod load order:

- Move base mods to the front of load order
- Put mods that depend on others later in the order
- Check dependency information in mod details
- Use health check to detect dependency issues

### Health Check Shows Errors

When health check finds errors:

- Click health status bar to view detailed report
- Take appropriate action based on error type
- For ignorable issues, mark them as ignored
- Health status will update automatically after fixing issues
