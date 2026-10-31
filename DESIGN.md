---
name: SuperDucky.docs
description: 超级鸭鸭 SuperDucky 的用户文档站:Starlight 与 hagilight 默认外观,截图是主角。
colors:
  ink-night: "hsl(224, 10%, 10%)"
  panel-night: "hsl(224, 14%, 16%)"
  code-night: "hsl(224, 10%, 23%)"
  text-mist: "hsl(224, 6%, 77%)"
  heading-white: "hsl(0, 0%, 100%)"
  accent-low-night: "hsl(224, 54%, 20%)"
  accent-electric: "hsl(224, 100%, 60%)"
  accent-high-night: "hsl(224, 100%, 85%)"
  paper-day: "hsl(0, 0%, 100%)"
  panel-day: "hsl(224, 19%, 97%)"
  code-day: "hsl(224, 20%, 94%)"
  text-slate: "hsl(224, 10%, 23%)"
  heading-ink: "hsl(224, 10%, 10%)"
  accent-day: "hsl(234, 90%, 60%)"
  accent-high-day: "hsl(234, 80%, 30%)"
  accent-low-day: "hsl(234, 88%, 90%)"
typography:
  display:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', 'Noto Sans', Arial, sans-serif"
    fontSize: "4rem"
    fontWeight: 600
    lineHeight: 1.2
  headline:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', 'Noto Sans', Arial, sans-serif"
    fontSize: "2.625rem"
    fontWeight: 600
    lineHeight: 1.2
  title:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', 'Noto Sans', Arial, sans-serif"
    fontSize: "1.8125rem"
    fontWeight: 600
    lineHeight: 1.2
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', 'Noto Sans', Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', 'Noto Sans', Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.1875
  code:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.75
rounded:
  sm: "0.25rem"
  md: "0.5rem"
  pill: "999rem"
spacing:
  xs: "0.5rem"
  md: "1rem"
  lg: "1.5rem"
components:
  button-primary:
    backgroundColor: "{colors.accent-high-night}"
    textColor: "{colors.ink-night}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.9375rem 1.25rem"
  button-minimal:
    backgroundColor: "transparent"
    textColor: "{colors.heading-white}"
    typography: "{typography.label}"
    padding: "0.9375rem 0"
  link-card:
    backgroundColor: "{colors.ink-night}"
    textColor: "{colors.text-mist}"
    rounded: "{rounded.md}"
    padding: "1rem"
  screenshot-frame:
    rounded: "{rounded.md}"
  ai-disclosure:
    backgroundColor: "{colors.panel-night}"
    textColor: "{colors.text-mist}"
    typography: "{typography.label}"
    padding: "0.75rem 1rem"
  width-toggle-button:
    backgroundColor: "transparent"
    textColor: "{colors.text-mist}"
    rounded: "{rounded.sm}"
    padding: "0.35rem 0.75rem"
  width-toggle-button-pressed:
    backgroundColor: "{colors.accent-high-night}"
    textColor: "{colors.accent-low-night}"
---

# Design System: SuperDucky.docs

## Overview

**Creative North Star: "玩家的随手手册"**

这是一份玩家边玩边翻的参考手册。读者眼睛还停在游戏上,只想找到下一步该点哪里。所以页面安静、可扫读,界面退到后面,截图和步骤站在前面。

视觉系统不是自己造的,而是继承来的:Starlight 的文档骨架加上 `@hagicode/hagilight-starlight` 的默认外观,站点位于 `hagicode.com` 体系内,页眉、页脚、推广卡和主题选择器都不可改。本仓库自己的视觉只有一处,`src/styles/custom.css` 里的截图网格。因此这份文件主要是在记录继承来的令牌和使用规则,而不是新的品牌表达。

整套系统用色阶分层,再叠一层很轻的环境阴影:深色是默认,背景、侧边栏、代码块各占一个灰阶,卡片只在需要"可点"的地方才带阴影。

**Key Characteristics:**
- 默认深色,支持浅色;以 Starlight 的 `data-theme` 切换,另有 Ocean、Sakura、Forest 三个 hagilight 主题。
- 单一冷蓝强调色(色相 224,浅色为 234),系统字体,无自定义字体。
- 正文列 45rem,可切换到 67.5rem 宽版;行高 1.75,适合长步骤阅读。
- 截图是页面里最大的视觉元素,统一 0.5rem 圆角加 1px 细边框。
- 阴影来自 Starlight 的 `--sl-shadow-sm/md/lg`,只用在可交互的卡片和浮层上。

## Colors

冷蓝单强调色,配同色相的蓝灰中性色阶。颜色值保留项目的 HSL 写法(Starlight 与 hagilight 的原始来源),这里的名字只描述角色。

### Primary
- **Electric Blue** (`hsl(224, 100%, 60%)`,深色强调): 链接下划线、焦点环、当前侧边栏项的指示。
- **Pale Signal Blue** (`hsl(224, 100%, 85%)`,深色 accent-high): 深色模式下主按钮底色和强调文字,页面里最亮的彩色,稀少才有效。
- **Deep Signal Blue** (`hsl(224, 54%, 20%)`,深色 accent-low): 主按钮上的文字色和选中态底色,在 Pale Signal Blue 上提供对比。
- **Daylight Blue** (`hsl(234, 90%, 60%)`,浅色强调): 浅色模式的强调,色相向紫偏 10 度。
- **Daylight Ink Blue** (`hsl(234, 80%, 30%)`,浅色 accent-high): 浅色模式下的强调文字。
- **Daylight Wash** (`hsl(234, 88%, 90%)`,浅色 accent-low): 浅色模式下的浅底色。

### Neutral
- **Night Ink** (`hsl(224, 10%, 10%)`): 深色页面底色,也是主按钮上的文字色。
- **Night Panel** (`hsl(224, 14%, 16%)`): 深色的导航栏、侧边栏和 AI 声明块底色。
- **Night Code** (`hsl(224, 10%, 23%)`): 行内代码底色和卡片的 1px 边线(gray-5)。
- **Mist Text** (`hsl(224, 6%, 77%)`): 深色模式正文颜色。
- **Heading White** (`hsl(0, 0%, 100%)`): 标题与次级按钮文字。
- **Paper** (`hsl(0, 0%, 100%)`): 浅色页面底色。
- **Day Panel** (`hsl(224, 19%, 97%)`): 浅色的导航栏底色。
- **Day Code** (`hsl(224, 20%, 94%)`): 浅色的行内代码底色。
- **Slate Text** (`hsl(224, 10%, 23%)`): 浅色模式正文颜色。
- **Heading Ink** (`hsl(224, 10%, 10%)`): 浅色模式标题颜色。

### Named Rules
**The Inherited Palette Rule.** 颜色一律走 `--sl-color-*` 变量,不在 `custom.css` 里写死色值。深色和浅色由 Starlight 的 `data-theme` 切换,hagilight 的主题通过 `data-hagilight-theme` 覆盖同一批变量,硬写色值会让主题切换失效。

**The One Accent Rule.** 强调色只做"可点击/当前位置/焦点"的信号。Starlight 卡片的紫、橙、绿等装饰色来自它的 `nth-child` 循环,是继承来的,不要再往页面里新增别的彩色。

## Typography

**Display Font:** 系统无衬线(`-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', 'Noto Sans', Arial, sans-serif`)
**Body Font:** 同上
**Label/Mono Font:** `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`(仅用于代码)

**Character:** 全站只有一套系统字体,中文由系统自己回退。没有加载网络字体,层级靠字号和字重,而不是字体搭配。

### Hierarchy
- **Display** (600, 4rem 上限,首页 hero 标题按视口缩放, 1.2): 只用于首页 hero 的"超级鸭鸭 SuperDucky"。
- **Headline** (600, 2.1875rem,≥50rem 为 2.625rem, 1.2): 文章 `h1`。
- **Title** (600, 1.8125rem,≥50rem 为 2.1875rem, 1.2): `h2` 章节标题。`h3` 为 1.5rem,`h4` 为 1.25rem(≥50rem 各升一档)。
- **Body** (400, 1rem, 1.75): 步骤与说明。正文列宽 45rem,中文约 40 个汉字一行,不要把正文放进更宽的容器里。
- **Label** (400, 0.875rem, 1.1875): 按钮文字、截图说明(`figcaption`,使用 `--sl-text-sm`)、AI 声明、表格附注。
- **Code** (400, 0.875rem, 1.75): 文件名、命令、路径,等宽。

### Named Rules
**The System Stack Rule.** 不引入网络字体,也不在 `custom.css` 里设 `font-family`。字体由 `--sl-font` 决定,覆盖它会把 hagilight 的页眉页脚一起改掉。

**The Caption Is Evidence Rule.** 截图说明用 `--sl-text-sm` 和 `--sl-color-gray-2`,标题加粗,说明紧随其后;文字必须描述截图里真实可见的内容。

## Layout

Starlight 的三栏文档布局:左侧边栏(18.75rem)、正文列(45rem)、右侧目录。从 50rem 起显示侧边栏,以下折叠为菜单。导航栏高度 3.5rem(≥50rem 为 4rem)。正文水平内边距 1rem。

`hagilight` 提供"内容宽度"开关,宽版时正文列为 `min(67.5rem, calc(100vw - 2rem))`,仅在 ≥50rem 显示,更窄的屏幕隐藏该开关。

截图页用自适应网格:`grid-template-columns: repeat(auto-fill, minmax(min(100%, 22rem), 1fr))`,间距 1.5rem。`min(100%, 22rem)` 保证窄屏单列不溢出。截图写在 `width`/`height` 里,避免加载时跳动,并且 `loading="lazy"`。

间距用 rem 的少数几档:0.5rem(说明与图片之间)、1rem(卡片内边距、容器边距)、1.5rem(网格间距)。

### Named Rules
**The Reading Column Rule.** 正文保持在 45rem 列内;只有截图网格和宽版开关可以更宽。步骤文字不要靠加宽来"显得丰富"。

## Elevation & Depth

混合方式:色阶分层为主,轻环境阴影为辅。页面底、侧边栏/导航、行内代码各占一个灰阶(black → gray-6 → gray-5),层次主要靠这个。阴影只在需要提示"这能点"或"这浮在上面"时出现,来自 Starlight 的令牌,Starlight 的 `LinkCard` 用 `--sl-shadow-sm`。

### Shadow Vocabulary
- **Ambient Small** (`box-shadow: var(--sl-shadow-sm)`;深色 `0px 1px 1px hsla(0,0%,0%,0.12), 0px 2px 1px hsla(0,0%,0%,0.24)`,浅色约为一半): 可点的卡片(`LinkCard`)。
- **Ambient Medium** (`box-shadow: var(--sl-shadow-md)`): 搜索对话框等浮层。
- **Ambient Large** (`box-shadow: var(--sl-shadow-lg)`): 页面上方最高层的浮层。

截图本身不加阴影:它们用 1px 的 `--sl-color-gray-5` 边线圈出,边线在浅色和深色下都清楚。

### Named Rules
**The Tokens Only Rule.** 阴影只引用 `--sl-shadow-*`,不手写 `box-shadow` 数值。手写会绕过浅色模式下自动减半的阴影。

**The Lift On Purpose Rule.** 静止的内容块是平的,阴影只给"可点击"或"浮层"。不要给每张卡片、每张截图都加影子。

## Shapes

形状语言偏方正而友好:内容块用 0.5rem 圆角(截图、`LinkCard`、宽度开关外框),内部的小控件用 0.25rem(宽度开关按钮),只有 Starlight 的 hero 按钮是胶囊形(999rem)。边框都是 1px 细线(`--sl-color-gray-5` 或 `--sl-color-hairline`),说明性提示块(AI 声明、Starlight 的 `:::tip` 等 aside)用 0.25rem 粗的左侧色条标示类型,而不是整圈边框。

### Named Rules
**The Hairline Rule.** 容器用 1px 细线,不用粗框;只有提示类内容才用 0.25rem 的左侧色条。

## Components

整体是克制、可扫读的文档组件:都是 Starlight 与 hagilight 现成的,本仓库只自写了截图网格。

### Buttons
- **Shape:** 胶囊形(`999rem`),Starlight `LinkButton`。
- **Primary:** 背景 Pale Signal Blue(`--sl-color-text-accent`),文字 Night Ink(`--sl-color-black`);桌面端内边距 `0.9375rem 1.25rem`,移动端 `0.4375rem 1.125rem`。用于首页 hero 的"开始使用"。
- **Hover / Focus:** 悬停时文字保持 `--sl-color-black`;焦点环用 `outline-offset: 0.25rem`。
- **Minimal:** 无底色无左右内边距、文字 `--sl-color-white`,带外链图标。用于"下载"。

### Cards / Containers
- **Corner Style:** `LinkCard` 0.5rem;`Card`(功能卡片)靠 1px `--sl-color-gray-5` 边线,不加圆角。
- **Background:** `Card` 为 `--sl-color-black`,边线与图标底色按 `nth-child` 循环取紫、橙、绿等 Starlight 色(继承,不可改);`LinkCard` 带 `--sl-shadow-sm`。
- **Internal Padding:** `Card` 为 `clamp(1rem, calc(0.125rem + 3vw), 2.5rem)`;`LinkCard` 为 `1rem`。

### Screenshot Figure(签名组件)
本仓库唯一自写的视觉组件(`.screenshot-grid`,`src/styles/custom.css`)。每张图一个 `<figure>`:图片撑满格宽,0.5rem 圆角,1px `--sl-color-gray-5` 边线,下方 0.5rem 处是 `figcaption`(`--sl-text-sm`,`--sl-color-gray-2`),标题加粗,后接 `—` 和说明。图片是 AVIF,从 `public/screenshots/` 直出,不经过 hagilight 的 `<picture>` 包装。

### AI Disclosure
hagilight 的声明块(`.hagilight-ai-disclosure`):`--sl-color-bg-sidebar` 底,0.25rem 的强调色左侧色条,`0.75rem 1rem` 内边距,`--sl-text-sm`。声明内容必须与实际情况一致,不可隐藏。

### Navigation
Starlight 的页眉、侧边栏、目录,加 hagilight 的主题选择器、语言选择器和"内容宽度"开关。宽度开关:外框 1px `--sl-color-hairline`、0.5rem 圆角,按钮 0.25rem 圆角、`0.35rem 0.75rem` 内边距;按下态背景 `--sl-color-bg-accent`、文字 `--sl-color-text-invert`;焦点为 2px `--sl-color-accent` 描边、2px 偏移。≥50rem 才显示;移动端折叠成菜单。

## Do's and Don'ts

### Do:
- **Do** 用 `--sl-color-*`、`--sl-text-*`、`--sl-shadow-*` 变量写样式,让深浅色和 hagilight 主题自动生效。
- **Do** 让截图在页面里最大、最清楚:AVIF、写明 `width`/`height`、`loading="lazy"`、0.5rem 圆角加 1px 边线。
- **Do** 保持 45rem 阅读列;需要更宽的内容(截图网格)才用 `auto-fill` 网格。
- **Do** 沿用应用里的词(模组套件),并让截图说明与图片实际内容一致。
- **Do** 在 `custom.css` 里新增样式前先问:Starlight 或 hagilight 已有的组件(`Card`、`LinkCard`、`Steps`、`Tabs`、aside)能不能解决。

### Don't:
- **Don't** 关闭、替换或遮盖 hagilight 的页脚、备案信息、统计、同意弹窗、推广卡和横幅。
- **Don't** 在 `custom.css` 里写死颜色值或 `font-family`,也不要手写 `box-shadow` 数值。
- **Don't** 提交 PNG 或 JPEG 截图;文章图片只用 AVIF,放在 `public/screenshots/`。
- **Don't** 给每张卡片和截图都加阴影;阴影只给可点击的卡片和浮层。
- **Don't** 引入新的强调色或装饰性彩色;继承来的 Starlight 卡片色之外不再增加。
- **Don't** 为了好看把正文拉宽或放进多栏。
