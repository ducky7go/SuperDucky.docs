---
title: 启用存档图鉴
description: 安装 SuperDucky.Connector 并启用存档图鉴,查看存档中收集到的物品、搜索筛选和多物品属性对比。
sidebar:
  order: 3
---

存档图鉴会读取你的游戏存档,把收集到的物品分类展示出来,并支持把多个物品放在一起对比属性。

## 前置条件

存档图鉴需要游戏中安装 **SuperDucky.Connector** 模组,它负责把游戏数据提供给 SuperDucky。这个模组发布在 NuGet 上,所以需要先[启用 NuGet 市场](../enable-nuget/)。

## 安装并启用

### 1. 安装 SuperDucky.Connector

在**模组市场**切换到 NuGet Gallery,搜索 `SuperDucky.Connector`,打开详情,点击**安装**按钮(默认安装标为"最新"的版本)。

![安装 SuperDucky.Connector](/screenshots/enable_save_gallery/001_install_depends_and_enable.avif)

### 2. 打开功能开关

进入**设置 → 存档图鉴**,打开"存档图鉴"开关。

![在设置中启用存档图鉴](/screenshots/enable_save_gallery/002_enable_feature.avif)

这个页面还可以拖动调整对比面板中属性的显示顺序,点击"重置为默认"可以恢复。

:::caution[请先进入存档游玩一会儿]
启用后、预览图鉴之前,请先进入游戏存档游玩约 2 分钟。这样游戏才会把数据和图片资源写入存档,图鉴才能完整显示。如果直接预览,内容可能缺失。
:::

## 浏览图鉴

启用后,在左侧导航栏点击**存档图鉴**。页面显示当前存档的收集进度,以及按分类展示的物品。

![图鉴预览](/screenshots/enable_save_gallery/003_preview_gallery.avif)

- 可以在网格视图和列表视图之间切换。
- 可以按标签筛选分类。
- 搜索框按**物品名称和描述**实时过滤。
- 首次打开可能需要较长时间扫描存档。再次打开时,SuperDucky 会检测存档是否有更新,有更新才会重新扫描。也可以点击刷新按钮手动重新读取。

## 物品对比

把多个物品放在一起,比较它们的属性差异。

### 添加对比物品

- **右键**点击物品,选择"加入对比"。
- 或**左键**点击物品进入详情页,点击"加入对比"。

### 查看对比

添加之后,点击列表**右上角的对比按钮**打开对比界面。

- 一次最多对比 **6 个**物品。
- 可以任选其中一个作为基准,直观地查看其他物品与它的差异。

![物品对比](/screenshots/enable_save_gallery/004_compare_items.avif)

## 物品类型

### 简单物品

基础的游戏道具,展示基本信息。

![简单物品](/screenshots/enable_save_gallery/005_simple_item.avif)

### 复杂物品

属性更多,图鉴会展示完整的属性列表。

![复杂物品](/screenshots/enable_save_gallery/006_complex_item.avif)

### 模组物品

如果安装了会添加物品的模组,图鉴也会识别并展示这些物品。

![模组物品](/screenshots/enable_save_gallery/007_mod_item.avif)
