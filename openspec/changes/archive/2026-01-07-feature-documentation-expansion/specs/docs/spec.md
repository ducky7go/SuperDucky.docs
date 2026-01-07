## ADDED Requirements

### Requirement: 功能指南分类

文档系统 SHALL 提供"功能指南"分类，将功能相关文档组织在可折叠的层级结构中。

#### Scenario: 用户在侧边栏看到功能指南分类

**Given** 用户访问 SuperDucky 文档网站的任何文档页面
**When** 用户查看左侧导航栏
**Then** 显示"安装指南"作为顶级项
**And** 显示"功能指南"作为可折叠分类（位置 2）
**And** "功能指南"分类显示子文档数量标识

#### Scenario: 用户展开功能指南分类

**Given** 用户在侧边栏看到"功能指南"分类
**When** 用户点击"功能指南"分类
**Then** 分类展开显示子文档列表
**And** 子文档包括："启用 NuGet 功能"和"启用存档图鉴功能"

#### Scenario: 用户点击功能指南分类索引页

**Given** 用户在侧边栏点击"功能指南"分类
**When** 页面导航到分类索引页
**Then** 显示自动生成的功能概览页面
**And** 页面包含所有子功能的简介和链接

---

### Requirement: NuGet 功能文档

文档系统 SHALL 包含 NuGet 功能启用指南，帮助用户了解如何在 SuperDucky 中启用和使用 NuGet 包管理功能。

#### Scenario: 用户查找 NuGet 功能文档

**Given** 用户访问 SuperDucky 文档网站
**When** 用户展开"功能指南"分类并点击"启用 NuGet 功能"
**Then** 显示 `docs/feature-guides/enable-nuget.md` 文档页面
**And** 文档包含启用步骤的详细说明
**And** 文档包含必要的截图（`001_enable_nuget..png` 和 `002_confirm.png`）
**And** 面包屑导航显示：安装指南 > 功能指南 > 启用 NuGet 功能

#### Scenario: NuGet 文档图片正确显示

**Given** 用户正在查看 NuGet 功能文档
**When** 页面加载完成
**Then** 所有截图从 `/img/screenshots/enable_nuget/` 路径正确加载
**And** 图片在文档中按顺序显示
**And** 无断链错误

---

### Requirement: 存档图鉴功能文档

文档系统 SHALL 包含存档图鉴功能启用指南，帮助用户了解如何启用和使用游戏存档的图鉴收集功能。

#### Scenario: 用户查找存档图鉴功能文档

**Given** 用户访问 SuperDucky 文档网站
**When** 用户展开"功能指南"分类并点击"启用存档图鉴功能"
**Then** 显示 `docs/feature-guides/enable-save-gallery.md` 文档页面
**And** 文档包含启用步骤的详细说明
**And** 文档包含功能预览和物品类型的说明
**And** 文档包含所有必要的截图
**And** 面包屑导航显示：安装指南 > 功能指南 > 启用存档图鉴功能

#### Scenario: 存档图鉴文档图片正确显示

**Given** 用户正在查看存档图鉴功能文档
**When** 页面加载完成
**Then** 所有截图从 `/img/screenshots/enable_save_gallary/` 路径正确加载
**And** 图片包括：安装依赖、启用功能、预览图鉴、物品对比、简单物品、复杂物品、Mod 物品
**And** 无断链错误

---

### Requirement: 分类配置文件

文档系统 SHALL 使用 `_category_.json` 文件定义"功能指南"分类的显示行为。

#### Scenario: 分类配置文件正确加载

**Given** `docs/feature-guides/_category_.json` 文件存在
**When** Docusaurus 构建文档站点
**Then** 分类标签显示为"功能指南"
**And** 分类在导航中显示为位置 2
**And** 分类链接到自动生成的索引页
**And** 索引页显示描述："SuperDucky 各项功能的启用和使用指南"
