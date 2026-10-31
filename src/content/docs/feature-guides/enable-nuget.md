---
title: 启用 NuGet 市场
description: 在 SuperDucky 的模组市场中启用 NuGet Gallery,浏览并安装发布在 NuGet 上的模组,以及启用前需要了解的风险。
sidebar:
  order: 2
---

SuperDucky 的**模组市场**有两个来源:Steam Workshop 和 NuGet Gallery。Steam Workshop 默认可用,NuGet Gallery 需要手动启用,因为 NuGet 是第三方开放平台。

启用后,你可以在应用内浏览并安装发布在 NuGet 上的模组。

## 启用步骤

### 1. 打开 NuGet Gallery

在左侧导航栏进入**模组市场**,点击页面右上角的 **NuGet Gallery**。未启用时,它旁边会显示"未启用"标记。

![在模组市场中点击 NuGet Gallery](/screenshots/enable_nuget/001_enable_nuget.avif)

### 2. 阅读风险说明并确认

点击后会弹出"启用 NuGet 市场"对话框。请完整阅读,再点击**我了解风险,确认启用**。

![NuGet 市场风险确认对话框](/screenshots/enable_nuget/002_confirm.avif)

## 启用前需要了解的事

NuGet 是面向 .NET 开发者的开源包管理器,上面的内容都由社区开发者独立维护。对话框中明确说明:

- NuGet 市场**不是**由 SuperDucky 项目组、Team Soda、《逃离鸭科夫》官方或 Steam/Valve 维护或背书的。
- 包可能包含不适合的内容或恶意代码,质量和安全性取决于发布者。
- 部分包可能不兼容,或存在依赖冲突。
- 启用即表示你自行评估包的安全性和适用性,并对使用第三方包产生的问题负责。

## 遇到不当内容

- 在 NuGet 的包页面点击 **Report Abuse** 举报。
- 或向 SuperDucky 提交 [Issue](https://github.com/ducky7go/SuperDucky/issues),我们会把不适宜的内容加入黑名单。

## 禁用

你可以随时在市场设置中禁用 NuGet 市场。

## 常见问题

### 无法访问 NuGet

检查网络连接,确认能够访问 NuGet。

### 模组安装失败

确认磁盘空间充足,并留意该模组是否与当前游戏版本、其他已安装模组兼容。可以在[模组管理](../mod-management/)的健康检查中查看依赖和冲突。
