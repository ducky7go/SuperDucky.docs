# deployment Specification

## Purpose
站点构建与发布到 GitHub Pages 的约定。站点基于 Astro、Starlight 与 `@hagicode/hagilight-starlight`。

## Requirements

### Requirement: 自动发布

系统 SHALL 在代码推送到 `main` 分支时自动构建站点,并发布到 `gh-pages` 分支。

#### Scenario: 推送到 main
- **WHEN** 代码推送到 `main`
- **THEN** 工作流 `.github/workflows/deploy.yml` 触发
- **AND** 依次执行 `pnpm install --frozen-lockfile` 与 `pnpm run build`
- **AND** `./dist` 目录的内容发布到 `gh-pages` 分支

#### Scenario: 构建失败
- **WHEN** 构建步骤失败(例如内容校验错误、图片缺失)
- **THEN** 部署步骤不执行
- **AND** 已发布的站点保持不变

### Requirement: 运行环境

工作流 SHALL 使用 Node.js 24 与 `package.json` 中 `packageManager` 固定的 pnpm 版本。`engines.node` 为 `>=22.12.0`。

### Requirement: 站点地址

站点 SHALL 发布在自定义域名 `https://ducky.hagicode.com/`,Astro 配置为 `site: https://ducky.hagicode.com`,不设置 `base`。

#### Scenario: 自定义域名
- **WHEN** 构建站点
- **THEN** `public/CNAME` 的内容 `ducky.hagicode.com` 被输出到 `dist/CNAME`,随 `gh-pages` 分支发布
- **AND** 仓库的 Pages 设置与 `ducky.hagicode.com` 的 DNS 需要在首次发布前配置好

#### Scenario: 旧 Docusaurus 链接
- **WHEN** 访问旧路径 `/docs/<页面>` 或 `/en/docs/<页面>`
- **THEN** 页面重定向到对应的新地址(`/<页面>/`、`/en/<页面>/`)

### Requirement: GitHub Pages 兼容

`public/.nojekyll` SHALL 存在,保证 `/.well-known/hagilight.metadata.json` 不被 Jekyll 丢弃。
