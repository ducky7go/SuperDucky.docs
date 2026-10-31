# docs Specification

## Purpose
SuperDucky 用户文档的结构、语言与写作约定。

## Requirements

### Requirement: 双语内容

文档 SHALL 提供简体中文和英文。中文是源语言,放在 `src/content/docs/`,地址为 `/`;英文放在 `src/content/docs/en/`,地址为 `/en/`。

#### Scenario: 中英文一一对应
- **WHEN** 新增或修改 `src/content/docs/<path>`
- **THEN** 同时新增或修改 `src/content/docs/en/<path>`
- **AND** 两边的页面结构、标题层级和图片保持一致

#### Scenario: 语言键为小写
- **WHEN** 在 `astro.config.mjs` 中声明语言
- **THEN** 英文的键为 `en`,`lang` 为 `en-US`
- **AND** 不使用 `en-US` 作为键,因为 Starlight 会把内容目录名转为小写,与键不再匹配

#### Scenario: 英文页显示 AI 翻译声明
- **WHEN** 访问任意英文页
- **THEN** 页面显示"本文由 AI 翻译"声明,并链接到中文原文

### Requirement: 页面与导航

侧边栏 SHALL 依次包含"安装指南"、"功能指南"(自动收录 `feature-guides/` 下的页面)和"界面截图"。

功能指南 SHALL 包含:模组管理、启用 NuGet 市场、启用存档图鉴。

#### Scenario: 页面元数据
- **WHEN** 新增文档页
- **THEN** frontmatter 包含 `title`、`description`
- **AND** 使用 `sidebar.order` 决定同组内顺序
- **AND** `description` 中不使用后接空格的英文冒号,否则 YAML 解析失败

### Requirement: 图片

文档中的所有图片 SHALL 是 AVIF 格式,放在 `public/screenshots/`,在 Markdown 中用站点根路径引用,例如 `/screenshots/enable_nuget/001_enable_nuget.avif`。

#### Scenario: 为什么放在 public/
- **WHEN** 图片放在 `src/` 并用相对路径引用
- **THEN** hagilight 会把它包成 `<picture>`,并固定生成 WebP 变体,这个行为无法配置
- **AND** 放在 `public/` 的图片不会被改写,产物里只有一个 AVIF 文件

#### Scenario: 新增图片
- **WHEN** 新增截图
- **THEN** 运行 `pnpm run screenshot -- <图片> [--dir <子目录>]`,它转换为最长边 1600 像素以内的 AVIF,写入 `public/screenshots/` 并登记尺寸到 `src/data/screenshot-sizes.json`
- **AND** 不提交 PNG 或 JPEG 原图

### Requirement: 内容准确性

文档 SHALL 只描述在应用中确认存在的行为。

#### Scenario: 关键事实
- **WHEN** 编写 NuGet 与存档图鉴相关内容
- **THEN** NuGet 市场被描述为模组市场的一个第三方来源,启用时需确认风险
- **AND** 存档图鉴被描述为依赖游戏内的 `SuperDucky.Connector` 模组,该模组通过 NuGet 市场安装
- **AND** 物品对比上限为 6 个,图鉴搜索按物品名称和描述匹配
- **AND** 配置文件在应用中叫"模组套件"

### Requirement: 提示块语法

提示块 SHALL 使用 Starlight 语法 `:::tip[标题]`、`:::caution[标题]`,类型名保持英文。
