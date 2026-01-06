# Tasks: Microsoft Store 徽标集成

## 1. 准备徽标资源

- [x] 1.1 从 Microsoft Store 官方获取或创建符合规范的徽章图片
- [x] 1.2 将徽章图片保存到 `static/img/store-badge.png`（或 `.svg`）
- [x] 1.3 验证图片在不同主题（亮色/暗色）下的显示效果

## 2. 更新首页 Hero 组件

- [x] 2.1 打开 `src/pages/index.tsx`
- [x] 2.2 在 `buttons` div 中添加 Microsoft Store 徽标链接（在现有按钮之后）
- [x] 2.3 使用 `require('@site/static/img/store-badge.png')` 语法导入图片
- [x] 2.4 设置链接目标为 `https://apps.microsoft.com/store/detail/9ndbtdkqbx30`
- [x] 2.5 添加适当的 CSS 样式类以保持视觉一致性
- [x] 2.6 确保徽标在响应式布局中正确显示

## 3. 更新网站页脚配置

- [x] 3.1 打开 `docusaurus.config.ts`
- [x] 3.2 在 `footer.links` 数组中添加新的链接分组或添加到现有分组
- [x] 3.3 添加 Microsoft Store 链接项：
  ```typescript
  {
    label: 'Microsoft Store',
    href: 'https://apps.microsoft.com/store/detail/9ndbtdkqbx30',
  }
  ```
- [x] 3.4 确保页脚布局合理，链接标签清晰

## 4. 创建规格增量

- [x] 4.1 创建 `openspec/changes/microsoft-store-badge-integration/specs/landing-page/spec.md`
- [x] 4.2 添加 `## ADDED Requirements` 部分
- [x] 4.3 定义 "Microsoft Store 徽标显示" 需求
- [x] 4.4 为需求添加至少两个场景：
  - 场景 1: 用户在首页看到 Microsoft Store 徽标
  - 场景 2: 用户点击徽标跳转到 Microsoft Store 页面

## 5. 测试和验证

- [x] 5.1 运行 `yarn start` 启动开发服务器
- [x] 5.2 验证首页正确显示 Microsoft Store 徽标
- [x] 5.3 验证徽标链接可点击并跳转到正确的 Microsoft Store 页面
- [x] 5.4 验证页脚正确显示 Microsoft Store 链接
- [x] 5.5 测试响应式布局（移动端、平板、桌面）
- [x] 5.6 运行 `yarn typecheck` 确保 TypeScript 类型正确
- [x] 5.7 运行 `yarn build` 确保构建成功

## 6. 代码审查准备

- [x] 6.1 确保所有代码遵循项目现有风格
- [x] 6.2 确保图片引用使用 `require('@site/static/...')` 语法
- [x] 6.3 确保所有链接可访问且正确
- [x] 6.4 提交代码前运行 `openspec validate microsoft-store-badge-integration --strict`
