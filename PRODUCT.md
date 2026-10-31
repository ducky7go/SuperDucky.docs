# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

玩家,具体说是《逃离鸭科夫》(Escape from Duckov)的玩家。他们在 Windows、macOS 或 Linux 上安装 SuperDucky,用它管理本地、Steam 创意工坊和 NuGet 来源的 Mod。他们通常是边玩边查:卡在安装、想切换模组套件、想启用 NuGet 市场或存档图鉴时来翻文档,找到步骤就回去玩,而不是通读长文。

中文是源语言,主要读者是中文玩家。英文页(`/en/`)面向少量海外玩家,是 AI 翻译。

## Product Purpose

SuperDucky.docs 是 SuperDucky 的用户文档站,发布在 <https://ducky.hagicode.com/>。它让玩家能装上应用、用对功能。成功是:玩家在文档里一次找到步骤,装好并完成操作,不需要再问人。

文档站同时兼作产品宣传页:首页向还没安装的玩家介绍 SuperDucky 并导向下载。这是用户确认的定位;文档的准确性不因此让位于宣传。

## Positioning

SuperDucky 是《逃离鸭科夫》的 Mod 管理器,把本地模组、Steam 创意工坊订阅和 NuGet 模组放在同一个列表里管理,并用"模组套件"按玩法一键切换,可直接启动游戏。文档的立场是只写应用里已确认存在的行为,这是一份跟着应用走的参考手册,而不是功能承诺清单。

## Operating Context

- 读者在游戏旁边查文档,常常是为了解决眼前的一步操作。
- 文档站由 Astro 7、Starlight 和 `@hagicode/hagilight-starlight` 构建,中文页在 `src/content/docs/`,英文镜像在 `src/content/docs/en/`。
- 推送到 `main` 后由 GitHub Actions 构建,快照发布到 `gh-pages` 分支。
- 文档描述的应用源码在 `repos/DML`;下载在 GitHub Releases(`ducky7go/SuperDucky`)。

## Capabilities and Constraints

- 文档页:安装指南、模组管理、启用 NuGet、启用存档图鉴、界面截图;首页是 Starlight 的 `splash` 模板。
- 已确认的应用功能:Steam 创意工坊浏览与订阅、模组套件(含从 Better Mod Loader 导入)、一键启动游戏、统一模组列表(分组、拖拽排序、历史还原、健康检查)、NuGet 市场、存档图鉴(最多 6 个物品属性对比)。
- 术语:应用里的"配置文件"叫**模组套件**;NuGet 市场是第三方模组来源;存档图鉴需要 `SuperDucky.Connector` 这个游戏 Mod。
- 内容规则:只写在应用或其源码里确认过的行为;不写套件导出/导入文件等未确认的能力。
- 站点位于 `hagicode.com` 子域,hagilight 的默认行为(页脚与备案信息、Google Analytics、51LA、PostHog 与同意弹窗、HagiCode 推广卡与横幅、默认 logo 与 favicon、RSS 与 SEO)必须原样保留,不得关闭或替换。若站点迁出 `hagicode.com`,备案号、统计账号和品牌都需要重新评估。
- 所有文章图片只用 AVIF,放在 `public/screenshots/`。
- 双语:中英文页面一一对应,改一页就同步改另一页。`aiDisclosures` 声明("AI 辅助创作""英文页由 AI 翻译")必须与实际情况一致。
- 尚未确定:是否面向 Mod 作者(发布 NuGet 模组、使用 `SuperDucky.Connector` 开发)另写内容。目前没有这类内容,不要假设。

## Brand Commitments

- 产品名:中文"超级鸭鸭 SuperDucky",英文 "SuperDucky"。
- logo、favicon、页脚头像、推广卡插图由 hagilight 提供,不受本仓库控制。
- 没有独立于 hagilight 的 SuperDucky 品牌色或字体规范。

## Evidence on Hand

- 界面截图 16 张(初始化向导、首页、模组管理、模组市场、日志系统、设置),在 `public/screenshots/Screenshot_*.avif`,说明在 `src/data/screenshots.ts`。
- 功能截图:`public/screenshots/enable_nuget/`(2 张)、`public/screenshots/enable_save_gallery/`(7 张)。
- 下载与问题反馈在 GitHub:<https://github.com/ducky7go/SuperDucky>;Windows 版也可从 Microsoft Store 获取。
- 不存在:用户评价、下载量、玩家案例、对比数据。不要编造。

## Product Principles

1. **只写已确认的行为。** 文档的可信度来自和应用一致;宁可少写,不写未确认的能力。
2. **按玩家的任务组织,而不是按功能清单。** 读者是来完成一步操作的,步骤和截图优先。
3. **用应用里的词。** 沿用"模组套件"等界面用语,不另起名字。
4. **中英文同步。** 改一页就改它的镜像,并如实标明 AI 参与的部分。
5. **站点属于 HagiCode 的体系。** 页眉页脚、统计和推广按 hagilight 默认保留,不在本仓库里改造。
