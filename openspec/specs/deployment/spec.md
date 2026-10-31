# deployment Specification

## Purpose
站点的构建与发布约定。站点基于 Astro、Starlight 与 `@hagicode/hagilight-starlight`,发布方式与 HagiCode docs 相同:把校验过的构建快照推到 `gh-pages` 分支。

## Requirements

### Requirement: 发布到 gh-pages 分支

系统 SHALL 在代码推送到 `main` 分支(或手动触发)时,构建站点并把校验过的快照发布到 `gh-pages` 分支。

#### Scenario: 推送到 main
- **WHEN** 代码推送到 `main`,或手动运行 `.github/workflows/docs-deploy-gh-pages.yml`
- **THEN** `build` 任务依次执行 `pnpm install --frozen-lockfile`、锁文件稳定性检查与 `pnpm run build`
- **AND** 组装发布载荷并作为构建产物 `docs-gh-pages-payload` 上传
- **AND** `deploy` 任务下载同一份产物,用 `peaceiris/actions-gh-pages@v4` 以 orphan 方式发布到 `gh-pages` 分支
- **AND** 发布使用的是 `build` 任务已校验的产物,不会在 `deploy` 任务里重新构建

#### Scenario: 构建失败
- **WHEN** `build` 任务失败(例如内容校验错误、锁文件被改动)
- **THEN** `deploy` 任务不执行,`gh-pages` 保持不变

#### Scenario: 并发
- **WHEN** 同时有多次发布
- **THEN** 它们排队执行,不取消正在进行的发布(`cancel-in-progress: false`)

### Requirement: 发布载荷布局

`gh-pages` 分支的根目录 SHALL 只包含 `esa.jsonc`、`wrangler.jsonc` 与 `dist/`,其中 `dist/` 是站点的静态文件。

#### Scenario: 配置文件来源
- **WHEN** 组装载荷
- **THEN** `esa.jsonc` 与 `wrangler.jsonc` 取自 `.github/gh-pages/`,两者都把 `./dist` 声明为静态资源目录
- **AND** 这两个文件是 HagiCode docs 的约定,供跟随该分支的静态托管使用,本仓库不执行它们

### Requirement: 发布后预热域名

发布到 `gh-pages` 之后,系统 SHALL 运行 `scripts/warm-deployment-domains.mjs`,依次请求站点的两个域名,让它们在对外使用前先被访问过一次。这与 HagiCode docs 一致,因为两个站点使用同一个账号。

#### Scenario: 预热的域名
- **WHEN** 运行预热
- **THEN** 依次请求 `ducky-docs.472158246.workers.dev` 与 `ducky.hagicode.com`
- **AND** 前者是同一账号下名为 `ducky-docs` 的 worker(名称取自 `.github/gh-pages/wrangler.jsonc`)的 workers.dev 地址

#### Scenario: 重试与判定
- **WHEN** 请求失败或返回 4xx、5xx
- **THEN** 每个域名最多尝试 4 次,每次超时 10 秒,间隔 3 秒
- **AND** 状态码在 200 到 399 之间视为成功(不跟随重定向)
- **AND** 任一域名重试耗尽,脚本以非零状态退出,工作流标红

#### Scenario: 预热失败不回滚
- **WHEN** 预热失败
- **THEN** 已发布的 `gh-pages` 快照保持不变
- **AND** 汇总页注明"快照已发布,预热校验失败"

#### Scenario: 汇总
- **WHEN** 工作流结束(无论成败)
- **THEN** `GITHUB_STEP_SUMMARY` 记录发布结果、发布载荷、环境、预期地址与每个域名的预热结果

#### Scenario: 测试
- **WHEN** 修改预热脚本
- **THEN** 运行 `pnpm run test:warm-deployment-domains`

### Requirement: 不使用 GitHub Pages 配置

仓库 SHALL NOT 配置 GitHub Pages,也不在 `public/` 中放置 `CNAME` 或 `.nojekyll`。`gh-pages` 只是发布快照的存放分支。

#### Scenario: 域名
- **WHEN** 查看站点地址
- **THEN** `site` 为 `https://ducky.hagicode.com`,不设置 `base`
- **AND** 域名的解析与托管在仓库之外配置,工作流的 `environment.url` 仅用于展示

### Requirement: 运行环境

工作流 SHALL 使用 Node.js 24 与 `package.json` 中 `packageManager` 固定的 pnpm 版本。`engines.node` 为 `>=22.12.0`。

### Requirement: 旧 Docusaurus 链接

旧路径 `/docs/<页面>` 与 `/en/docs/<页面>` SHALL 重定向到对应的新地址(`/<页面>/`、`/en/<页面>/`)。

### Requirement: 与 HagiCode docs 的差异

本仓库的工作流相对 HagiCode docs 只省略了依赖其仓库脚本的两处。

#### Scenario: 省略的步骤
- **WHEN** 对照 HagiCode docs 的 `docs-deploy-gh-pages.yml`
- **THEN** 本仓库没有 `pnpm run check:registry`(镜像中立性检查)
- **AND** 构建命令是 `pnpm run build`,而不是 `build:ci`
- **AND** 其余步骤包括域名预热与汇总都与原版一致,只有域名不同
