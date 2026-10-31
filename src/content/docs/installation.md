---
title: 安装指南
description: 在 Windows、macOS 和 Linux 上下载并安装 SuperDucky,以及安装后的校验方法。
sidebar:
  order: 1
---

SuperDucky 支持 Windows、macOS 和 Linux。请先确认系统满足要求,再按所用系统选择对应的安装方式。

## 系统要求

| 系统 | 要求 |
| --- | --- |
| Windows | Windows 10 / 11(x64) |
| macOS | macOS 10.15 及以上,Intel 或 Apple Silicon |
| Linux | x64 |

## 下载

前往 [SuperDucky Releases](https://github.com/ducky7go/SuperDucky/releases) 下载最新版本。下文的 `<版本号>` 指你下载的那个版本,例如 `0.2.0`,具体文件名以 Releases 页面为准。

| 平台 | 文件名 | 说明 |
| --- | --- | --- |
| Windows | `SuperDucky-Setup-<版本号>.exe` | 安装版(推荐) |
| Windows | `SuperDucky-<版本号>.exe` | 免安装版(便携版) |
| macOS(Intel) | `SuperDucky-<版本号>.dmg` | Intel Mac |
| macOS(Apple Silicon) | `SuperDucky-<版本号>-arm64.dmg` | M 系列芯片 Mac |
| Linux | `SuperDucky-<版本号>.AppImage` | 适用于大多数发行版 |

## Windows

Windows 用户也可以从 [Microsoft Store](https://apps.microsoft.com/store/detail/9ndbtdkqbx30) 获取。

### 安装版(推荐)

1. 下载 `SuperDucky-Setup-<版本号>.exe`。
2. 双击运行安装程序,按向导完成安装。
3. 从开始菜单启动 SuperDucky。

### 免安装版

1. 下载 `SuperDucky-<版本号>.exe`。
2. 放到任意目录。
3. 双击运行。

## macOS

Intel 和 Apple Silicon 的步骤相同,只是下载的 `.dmg` 不同。

1. 下载与你的芯片对应的 `.dmg`。
2. 双击打开,把 SuperDucky 拖进"应用程序"文件夹。
3. 打开"终端",移除 macOS 为下载应用添加的隔离属性:

   ```bash
   sudo xattr -dr com.apple.quarantine /Applications/SuperDucky.app
   ```

4. 从启动台启动 SuperDucky。

:::tip[首次启动提示"无法验证开发者"?]
说明第 3 步没有执行。可以在"系统设置 → 隐私与安全性"中点击"仍要打开",或者关闭提示后在终端执行上面的 `xattr` 命令,再重新启动。
:::

## Linux

SuperDucky 以 AppImage 形式提供。

1. 下载 `SuperDucky-<版本号>.AppImage`。
2. 添加执行权限:

   ```bash
   chmod +x SuperDucky-<版本号>.AppImage
   ```

3. 运行:

   ```bash
   ./SuperDucky-<版本号>.AppImage
   ```

想要桌面快捷方式的话,先把 AppImage 移到固定位置(例如 `~/Applications/`),再创建对应的 `.desktop` 文件。

## 校验下载文件

建议校验 SHA256,确认文件完整:

```bash
# Linux / macOS
sha256sum SuperDucky-<版本号>.AppImage

# Windows(PowerShell)
Get-FileHash SuperDucky-<版本号>.exe -Algorithm SHA256
```

## 验证安装

启动后能看到主界面即安装成功。遇到问题请 [提交 Issue](https://github.com/ducky7go/SuperDucky/issues)。

## 下一步

- [模组管理](../feature-guides/mod-management/):了解分组、排序和健康检查。
- [启用 NuGet 市场](../feature-guides/enable-nuget/):从 NuGet 浏览和安装模组。
