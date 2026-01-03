# 初始化教程和多语言支持

> **Change ID**: `initialization-tutorial-and-i18n-setup`
> **Status**: ExecutionCompleted
> **Created**: 2025-01-03
> **Completed**: 2025-01-03

## 概述

将 SuperDucky.docs 从英文默认配置改造为中文优先的文档站点，并创建 SuperDucky 项目的安装指南。

## 问题陈述

当前文档站点存在以下问题：

1. **缺少多语言支持**：仅支持英文，无法服务中文用户
2. **内容不相关**：展示的是默认的 Docusaurus 模板教程，而非 SuperDucky 项目的实际文档
3. **安装指引缺失**：用户无法从文档中获取如何在不同操作系统上安装 SuperDucky 的具体信息

## 解决方案

### 1. 配置多语言支持

- 在 `docusaurus.config.ts` 中添加 i18n 配置
- 添加简体中文（`zh-Hans`）作为支持语言
- 将简体中文设置为默认语言（`defaultLocale: 'zh-Hans'`）
- 配置 `baseUrl` 以支持默认语言切换

### 2. 移除模板内容

- 删除 `docs/` 目录下的默认 Docusaurus 教程文件
- 清理 `blog/` 目录下的示例博客文章
- 更新 `sidebars.ts` 移除模板相关的侧边栏配置

### 3. 创建安装指南

根据 [SuperDucky Release 页面](https://github.com/ducky7go/SuperDucky/releases) 提供的信息，创建详细的安装文档：

| 操作系统 | 安装文件 |
|---------|---------|
| Windows | `SuperDucky-win-x64.exe` |
| macOS | `SuperDucky-mac-x64.dmg` / `SuperDucky-mac-arm64.dmg` |
| Linux | `SuperDucky-linux-x64.AppImage` |

### 4. 更新导航配置

- 修改 `sidebars.ts` 以反映新的文档结构
- 更新首页和导航栏链接

## 影响范围

| 组件 | 影响 | 说明 |
|-----|------|-----|
| `docusaurus.config.ts` | 修改 | 添加 i18n 配置，更新导航链接 |
| `sidebars.ts` | 修改 | 简化侧边栏配置 |
| `docs/` | 删除 + 新建 | 删除模板内容，创建安装指南 |
| `blog/` | 删除 | 清理示例博客文章 |
| 首页 | 修改 | 更新链接指向新文档 |

## 风险与缓解

| 风险 | 影响 | 缓解措施 |
|-----|------|---------|
| 构建路径变化导致部署问题 | 高 | 在测试环境验证构建输出 |
| 语言切换导致现有链接失效 | 中 | 配置适当的重定向规则 |
| 内容迁移遗漏 | 低 | 使用 checklist 逐项验证 |

## 成功标准

- [x] 站点默认语言为简体中文
- [x] 用户可以访问中文安装指南（`/docs/installation`）
- [x] 移除所有默认 Docusaurus 模板内容
- [x] 站点构建成功，无警告或错误
- [x] 导航链接正确指向新的文档结构

## 替代方案

### 方案 A：仅中文（推荐）

- 设置 `defaultLocale: 'zh-Hans'`
- 仅创建中文文档
- 优点：维护成本低，目标用户明确
- 缺点：不支持英文用户

### 方案 B：中英双语

- 设置 `defaultLocale: 'zh-Hans'`，添加 `locales: ['zh-Hans', 'en']`
- 维护中英文两份文档
- 优点：覆盖更广泛用户
- 缺点：维护成本高

**本提案采用方案 A**。

## 参考

- [Docusaurus i18n 文档](https://docusaurus.io/docs/i18n/introduction)
- [SuperDucky Releases](https://github.com/ducky7go/SuperDucky/releases)
