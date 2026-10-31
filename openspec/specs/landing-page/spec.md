# landing-page Specification

## Purpose
站点首页与截图页。首页使用 Starlight 的 `splash` 模板,不使用自定义 React 页面。

## Requirements

### Requirement: 首页品牌与行动入口

首页 SHALL 在 hero 区显示"超级鸭鸭 SuperDucky"(英文为 "SuperDucky")、一句话简介和欢迎页截图(AVIF,通过 hero 的 `html` 字段引用 `public/` 中的文件),并提供"开始使用"(跳转安装指南)与"下载"(跳转 GitHub Releases)两个入口。

### Requirement: 功能卡片

首页 SHALL 显示 6 张功能卡片:Steam 创意工坊、模组套件、一键启动游戏、统一管理、NuGet 市场、存档图鉴。

#### Scenario: 卡片只写已确认的功能
- **WHEN** 增删功能卡片
- **THEN** 每条描述都对应应用中已存在的功能
- **AND** 不写未在应用中确认的能力,例如套件的导出与导入文件

### Requirement: 截图页

站点 SHALL 提供"界面截图"页,按初始化向导、首页、模组管理、模组市场、日志系统和设置分组展示 16 张截图。

#### Scenario: 截图说明
- **WHEN** 查看截图页
- **THEN** 每张截图有标题和说明,内容与截图实际画面一致
- **AND** 中英文说明来自 `src/data/screenshots.ts` 中的同一条记录

#### Scenario: 新增截图
- **WHEN** 新增一张截图
- **THEN** 先用 `pnpm run screenshot` 转成 AVIF 放入 `public/screenshots/`,再在 `src/data/screenshots.ts` 中登记分类、中文与英文说明
