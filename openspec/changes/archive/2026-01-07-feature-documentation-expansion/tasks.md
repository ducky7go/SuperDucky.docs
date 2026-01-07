# 实施任务清单

## 概览

本变更包含 **4 个任务**，按顺序执行：

1. 创建 `docs/feature-guides/` 目录结构
2. 创建 `enable-nuget.md` 文档
3. 创建 `enable-save-gallery.md` 文档
4. 更新 `sidebars.ts` 为嵌套导航结构

---

## 任务详情

### 任务 1：创建功能指南目录结构

**描述**：创建 `docs/feature-guides/` 目录及分类配置文件。

**创建目录**：
```bash
mkdir -p docs/feature-guides
```

**创建文件**：`docs/feature-guides/_category_.json`

```json
{
  "label": "功能指南",
  "position": 2,
  "link": {
    "type": "generated-index",
    "description": "SuperDucky 各项功能的启用和使用指南"
  }
}
```

**验收标准**：
- [x] `docs/feature-guides/` 目录已创建
- [x] `_category_.json` 文件已创建
- [x] JSON 格式正确

**依赖**：无

---

### 任务 2：创建 NuGet 功能文档

**描述**：创建 `docs/feature-guides/enable-nuget.md`，包含如何启用 NuGet 功能的完整指南。

**输入**：
- 截图目录：`static/img/screenshots/enable_nuget/`
- 参考格式：`docs/installation.md`

**文件位置**：`docs/feature-guides/enable-nuget.md`

**内容大纲**：
```markdown
---
title: 启用 NuGet 功能
sidebar_position: 1
---

SuperDucky 支持 NuGet 包管理功能，本文档将指导您如何启用。

## 启用 NuGet 功能

![启用 NuGet](/img/screenshots/enable_nuget/001_enable_nuget..png)

在弹出的确认对话框中点击确认。

![确认操作](/img/screenshots/enable_nuget/002_confirm.png)

## 使用说明

启用后，您可以...
```

**验收标准**：
- [x] 文件已创建在 `docs/feature-guides/enable-nuget.md`
- [x] Frontmatter 配置正确（title、sidebar_position）
- [x] 所有 2 张截图已引用，路径正确
- [x] 内容结构清晰，步骤明确

**依赖**：任务 1 完成

---

### 任务 3：创建存档图鉴功能文档

**描述**：创建 `docs/feature-guides/enable-save-gallery.md`，包含如何启用存档图鉴功能的完整指南。

**输入**：
- 截图目录：`static/img/screenshots/enable_save_gallary/`
- 参考格式：`docs/installation.md`

**文件位置**：`docs/feature-guides/enable-save-gallery.md`

**内容大纲**：
```markdown
---
title: 启用存档图鉴功能
sidebar_position: 2
---

存档图鉴功能可以帮您收集和查看游戏存档中的各类物品。

## 安装依赖并启用

![安装依赖并启用](/img/screenshots/enable_save_gallary/001_install_depends_and_enable.png)

## 启用功能

在功能列表中找到存档图鉴选项并启用。

![启用功能](/img/screenshots/enable_save_gallary/002_enable_feature.png)

## 图鉴预览

启用后可以预览图鉴界面。

![图鉴预览](/img/screenshots/enable_save_gallary/003_preview_gallary.png)

## 物品对比

支持对不同物品进行对比。

![物品对比](/img/screenshots/enable_save_gallary/004_compare_items.png)

## 物品类型

### 简单物品

![简单物品](/img/screenshots/enable_save_gallary/005_simple_item.png)

### 复杂物品

![复杂物品](/img/screenshots/enable_save_gallary/006_complex_item.png)

### Mod 物品

![Mod 物品](/img/screenshots/enable_save_gallary/007_mod_item.png)
```

**验收标准**：
- [x] 文件已创建在 `docs/feature-guides/enable-save-gallery.md`
- [x] Frontmatter 配置正确（title、sidebar_position）
- [x] 所有 7 张截图已引用，路径正确
- [x] 内容结构清晰，步骤明确

**依赖**：任务 1 完成

---

### 任务 4：更新导航配置为嵌套结构

**描述**：修改 `sidebars.ts`，将新文档组织在"功能指南"分类下。

**输入**：
- 当前 `sidebars.ts` 文件
- 新文档路径：`feature-guides/enable-nuget`、`feature-guides/enable-save-gallery`

**修改内容**：

```typescript
export default {
  mainSidebar: [
    'installation',
    {
      type: 'category',
      label: '功能指南',
      link: {
        type: 'generated-index',
        description: 'SuperDucky 各项功能的启用和使用指南',
      },
      items: [
        'feature-guides/enable-nuget',
        'feature-guides/enable-save-gallery',
      ],
    },
  ],
};
```

**文件位置**：`sidebars.ts`

**验收标准**：
- [x] `sidebars.ts` 已更新为嵌套结构
- [x] "功能指南"分类已添加
- [x] 两个新文档路径已添加到 items 数组
- [x] TypeScript 类型检查通过

**依赖**：任务 2、任务 3 完成

---

## 验证阶段

### 构建测试

```bash
# 运行构建
yarn build

# 验证构建成功且无断链警告
```

### 本地预览

```bash
# 启动开发服务器
yarn start

# 手动验证：
# 1. 侧边栏显示"安装指南"和可折叠的"功能指南"
# 2. 点击"功能指南"可展开，显示两个子文档
# 3. 点击子文档可正常跳转
# 4. 所有图片正确显示
```

---

## 验收清单

### 文件检查

- [x] `docs/feature-guides/` 目录存在
- [x] `docs/feature-guides/_category_.json` 存在
- [x] `docs/feature-guides/enable-nuget.md` 存在且内容完整
- [x] `docs/feature-guides/enable-save-gallery.md` 存在且内容完整
- [x] `sidebars.ts` 已更新为嵌套结构

### 构建验证

- [x] `yarn build` 执行成功
- [x] 无断链错误
- [x] 无 MDX 解析错误

### 功能验证

- [x] 侧边栏显示"功能指南"可折叠分类
- [x] 展开"功能指南"显示两个子文档
- [x] 点击分类显示自动生成的索引页
- [x] 文档页面可正常访问
- [x] 所有截图正确显示
- [x] 面包屑导航显示正确的层级路径
