## ADDED Requirements

### Requirement: 模组管理功能文档

文档系统 SHALL 包含模组管理功能介绍指南，帮助用户了解 SuperDucky 的核心模组管理功能，包括浏览、管理、启用/禁用模组以及 Steam Workshop 集成。

#### Scenario: 用户查找模组管理功能文档

**Given** 用户访问 SuperDucky 文档网站
**When** 用户展开"功能指南"分类并点击"模组管理功能介绍"
**Then** 显示 `docs/feature-guides/mod-management.md` 文档页面
**And** 文档包含模组列表视图的详细说明
**And** 文档包含模组详情面板的功能说明
**And** 文档包含 Steam Workshop 集成的使用方法
**And** 文档包含模组操作（启用/禁用、更新、批量操作）的步骤
**And** 面包屑导航显示：安装指南 > 功能指南 > 模组管理功能介绍

#### Scenario: 模组管理文档包含完整章节

**Given** 用户正在查看模组管理功能文档
**When** 文档加载完成
**Then** 显示"功能简介"章节介绍模组管理概览
**And** 显示"模组列表视图"章节说明列表布局、筛选和排序功能
**And** 显示"模组详情面板"章节说明元数据、依赖关系和文件列表
**And** 显示"Steam Workshop 集成"章节说明浏览、订阅和更新机制
**And** 显示"模组操作"章节说明启用/禁用、更新和批量操作
**And** 可选显示"常见问题"章节

#### Scenario: 模组管理文档支持中英双语

**Given** 用户访问模组管理功能文档
**When** 用户切换到英文语言
**Then** 从 `i18n/en/docusaurus-plugin-content-docs/current/feature-guides/mod-management.md` 加载英文翻译
**And** 所有章节标题和内容保持一致的翻译
**And** 技术术语在两个语言版本中保持一致

#### Scenario: 模组管理文档截图正确显示

**Given** 用户正在查看模组管理功能文档
**When** 文档包含截图引用
**Then** 所有截图从 `/img/screenshots/mod-management/` 路径正确加载
**And** 截图包括：模组列表视图、模组详情面板、Steam Workshop 界面、模组操作界面
**And** 无断链错误

---

### Requirement: 侧边栏导航包含模组管理指南

文档系统 SHALL 在"功能指南"分类中包含模组管理功能指南，使用户能够通过侧边栏导航访问该文档。

#### Scenario: 侧边栏显示模组管理指南

**Given** 用户访问 SuperDucky 文档网站的任何文档页面
**When** 用户查看左侧导航栏并展开"功能指南"分类
**Then** 显示"模组管理功能介绍"作为子文档项
**And** 该项位于"启用存档图鉴功能"之后
**And** `sidebar_position` 设置为 3

#### Scenario: 侧边栏配置正确更新

**Given** `sidebars.ts` 文件包含模组管理指南配置
**When** Docusaurus 构建文档站点
**Then** 侧边栏正确渲染模组管理指南链接
**And** 点击链接导航到 `/docs/feature-guides/mod-management` 页面
**And** 面包屑导航正确显示层级结构
