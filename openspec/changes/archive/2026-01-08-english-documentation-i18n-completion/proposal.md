# Change: 添加英文文档

## Change ID
`english-documentation-i18n-completion`

## Status
**ExecutionCompleted**

## Why

### Background

SuperDucky.docs 是基于 Docusaurus 构建的双语文档网站（中文为主，英文为辅），为 SuperDucky 游戏模组管理器提供官方文档。当前项目已配置国际化支持（i18n），主语言为简体中文（`zh-Hans`），辅助语言为英文（`en`），但部分文档内容尚缺少对应的英文翻译。

### Problem

当前文档结构中存在以下问题：

- **英文翻译缺失**：部分文档（包括安装指南、功能指南等）仅有中文版本，未提供对应的英文翻译
- **i18n 覆盖不完整**：国际化配置虽已启用，但内容层面对英文用户的支持不充分
- **用户体验不一致**：英文用户切换语言后，部分页面仍显示中文内容，影响使用体验

## What Changes

### Documentation Content Changes

为以下文档添加英文翻译：

| 中文文档路径 | 英文文档路径 | 变更类型 |
|-------------|-------------|---------|
| `docs/installation.md` | `i18n/en/docusaurus-plugin-content-docs/current/installation.md` | 新增 |
| `docs/feature-guides/_category_.json` | `i18n/en/docusaurus-plugin-content-docs/current/feature-guides/_category_.json` | 新增 |
| `docs/feature-guides/enable-nuget.md` | `i18n/en/docusaurus-plugin-content-docs/current/feature-guides/enable-nuget.md` | 新增 |
| `docs/feature-guides/enable-save-gallery.md` | `i18n/en/docusaurus-plugin-content-docs/current/feature-guides/enable-save-gallery.md` | 新增 |

**Note**: `docs/feature-guides/mod-management.md` 已有英文翻译，无需变更。

### Translation Guidelines

翻译遵循以下规范：

1. **术语一致性**：保持项目特定术语统一
   - mod（模组）
   - profile（配置文件）
   - workshop（创意工坊）
   - Steam Workshop（Steam 创意工坊）
   - NuGet（保持原样）

2. **格式保持**：保留 Markdown 格式和 frontmatter 元数据

3. **图片路径**：保持原有图片引用路径不变

## Impact

### User Experience

- **英文用户**：能够获得完整的文档支持，无需依赖中文内容
- **中文用户**：无影响，继续使用中文文档

### Maintenance

- **文档同步**：建立完善的双语文档体系，便于后续内容的同步更新
- **更新流程**：未来新增文档时需同时提供中英文版本

### Testing

- **语言切换**：验证中英文切换功能正常
- **内容完整性**：确保所有页面均有对应翻译
- **链接有效性**：验证文档间相互链接正常工作

## Dependencies

- Docusaurus i18n 配置已启用
- 现有中文文档作为翻译源

## Timeline

- 文件创建和翻译
- 验证和测试

## References

- [Docusaurus i18n Documentation](https://docusaurus.io/docs/i18n/introduction)
- 现有英文翻译参考：`i18n/en/docusaurus-plugin-content-docs/current/feature-guides/mod-management.md`
