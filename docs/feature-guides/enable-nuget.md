---
title: 启用 NuGet 功能
sidebar_position: 1
---

SuperDucky 支持 NuGet 包管理功能，本文档将指导您如何启用。

## 功能简介

NuGet 是 .NET 生态系统的包管理器，SuperDucky 集成了 NuGet 功能，让您可以直接在应用中搜索、安装和管理 .NET 包和依赖项。

## 启用 NuGet 功能

### 1. 打开 NuGet 功能入口

在 SuperDucky 主界面中，找到 NuGet 功能选项。

![启用 NuGet](/img/screenshots/enable_nuget/001_enable_nuget..png)

### 2. 确认启用

点击后会弹出确认对话框，点击确认按钮即可完成启用。

![确认操作](/img/screenshots/enable_nuget/002_confirm.png)

## 使用说明

启用 NuGet 功能后，您可以：

- **搜索包**：通过 NuGet 官方源搜索所需的 .NET 包
- **安装包**：一键安装所需的依赖包
- **管理依赖**：查看和管理项目中已安装的包及其版本
- **更新包**：及时更新到最新的包版本

## 常见问题

### NuGet 源无法访问

如果遇到无法访问 NuGet 官方源的情况，您可以：
- 检查网络连接
- 配置 NuGet 镜像源（如国内镜像）

### 包安装失败

如果包安装失败，请确认：
- 包名称拼写正确
- 版本号与项目兼容
- 有足够的磁盘空间
