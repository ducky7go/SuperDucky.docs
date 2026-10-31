# landing-page Specification

## Purpose
站点首页与截图页。首页使用 Starlight 的 `splash` 模板,内容由 `src/components/HomeLanding.astro` 渲染(文案在 `src/data/home.ts`,中英文共用),不使用自定义 React 页面。

## Requirements

### Requirement: 首页品牌与行动入口

首页 SHALL 在首屏显示"超级鸭鸭 SuperDucky"(英文为 "SuperDucky")、一句话简介和模组管理页截图(AVIF,来自 `public/screenshots/`),并提供"从 Microsoft Store 获取"(主按钮,跳转 Microsoft Store 页面)与"阅读文档"(跳转安装指南)两个入口,以及指向 GitHub Releases 的文字链接。

### Requirement: 产品巡览

首页 SHALL 在首屏之后显示产品巡览:统一模组列表、模组套件、模组市场(Steam Workshop 与 NuGet)、存档图鉴、一键启动游戏,每一段配一张真实截图和一个文档入口。

#### Scenario: 宽屏滚动驱动
- **WHEN** 视口不小于 62rem、支持 CSS 滚动驱动动画且未开启"减弱动效"
- **THEN** 截图舞台随滚动固定在右侧,并随章节切换

#### Scenario: 回退布局
- **WHEN** 视口较窄、浏览器不支持滚动驱动动画或开启"减弱动效"
- **THEN** 每段文字与对应截图静态并排(窄屏上下排列),内容完全一致

#### Scenario: 内容只写已确认的功能
- **WHEN** 增删巡览段落
- **THEN** 每条描述都对应应用中已存在的功能,不写未确认的能力,例如套件的导出与导入文件

### Requirement: 首页下载与文档收尾

首页 SHALL 以下载区(Microsoft Store、GitHub Releases、系统要求)和文档入口列表收尾。

### Requirement: 截图页

站点 SHALL 提供"界面截图"页,按初始化向导、首页、模组管理、模组市场、日志系统和设置分组展示 16 张截图。

#### Scenario: 截图说明
- **WHEN** 查看截图页
- **THEN** 每张截图有标题和说明,内容与截图实际画面一致
- **AND** 中英文说明来自 `src/data/screenshots.ts` 中的同一条记录

#### Scenario: 新增截图
- **WHEN** 新增一张截图
- **THEN** 先用 `pnpm run screenshot` 转成 AVIF 放入 `public/screenshots/`,再在 `src/data/screenshots.ts` 中登记分类、中文与英文说明
