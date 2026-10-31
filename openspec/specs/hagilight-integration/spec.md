# hagilight-integration Specification

## Purpose
站点通过 `@hagicode/hagilight-starlight` 获得页眉、语言切换、主题选择、页脚、404 页、SEO、站点元数据、RSS、统计与文章末宣传。站点部署在 `ducky.hagicode.com`,属于 HagiCode 的站点体系,因此**完整保留 hagilight 的默认行为**。

## Requirements

### Requirement: 使用 hagilight 的全部默认行为

站点 SHALL 以默认配置使用 hagilight,不得关闭或替换它的默认功能,也不得自定义页脚。

#### Scenario: 默认功能保持开启
- **WHEN** 构建站点
- **THEN** 页脚是 hagilight 的页脚(含 HagiCode 备案信息、版权和 `Powered By hagilight-starlight@<版本>`)
- **AND** Google Analytics、51LA、PostHog 与同意弹窗保持开启
- **AND** 文章末的 HagiCode 介绍卡与浮动推广横幅保持开启
- **AND** 站点使用 hagilight 默认的 logo 与 favicon
- **AND** RSS、SEO 元数据、`/.well-known/hagilight.metadata.json` 照常生成
- **AND** 页眉的链接、主题选择器与语言选择器保持默认

#### Scenario: 为什么可以保留
- **WHEN** 评估默认行为是否适用
- **THEN** 站点位于 `hagicode.com` 子域名,hagilight 的备案、统计和品牌信息对它同样成立
- **AND** 如果将来迁出 `hagicode.com`,必须重新评估:备案号、统计账号和品牌都不能原样沿用

#### Scenario: 允许的配置
- **WHEN** 配置 `hagilight()`
- **THEN** 只传入站点标识 `links.siteId`(`ducky-docs`)与 `links.siteUrl`(`https://ducky.hagicode.com/`)
- **AND** 传入 `aiDisclosures`,因为它声明的是内容的真实来源,不是关闭默认行为
- **AND** 其余选项保持省略

### Requirement: 依赖版本

`@hagicode/hagilight-starlight` 与 `@hagicode/hagilight-core` SHALL 固定为同一个精确版本,并与 Starlight `^0.42.4`、Astro `^7` 兼容。

### Requirement: AI 内容声明

站点 SHALL 以中文为源语言,启用"英文页由 AI 翻译"(`isAITranslation`)和"内容由 AI 辅助创作"(`isAIAuthor`)两条声明。

#### Scenario: 何时可以关闭
- **WHEN** 内容改由人工撰写,或人工逐页审校并翻译
- **THEN** 才可以关闭对应的声明,声明必须与实际情况一致

### Requirement: 图片与 hagilight 的正文图片处理

hagilight 的正文图片处理默认保持开启。它把相对路径的本地图片包成 `<picture>`,固定输出 AVIF 与 WebP 两种格式且回退图为 WebP,**这个格式列表没有配置项**。

#### Scenario: 本站如何得到纯 AVIF
- **WHEN** 文档引用截图
- **THEN** 截图以 AVIF 文件放在 `public/screenshots/`,在 Markdown 中用站点根路径引用,例如 `/screenshots/enable_nuget/001_enable_nuget.avif`
- **AND** hagilight 不会改写解析到 `public/` 的图片,所以不会生成 WebP 变体
- **AND** hagilight 仍会给这些图片补上 `loading="lazy"`、`decoding="async"` 与标记类

#### Scenario: 不是本站控制的图片
- **WHEN** 检查构建产物
- **THEN** hagilight 自带的组件资源(默认 logo、页脚头像、宣传卡插图与图标)仍可能是 PNG、WebP、JPEG 或 SVG
- **AND** 这些文件不属于本站内容,不在本站的 AVIF 约定范围内
