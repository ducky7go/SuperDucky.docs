---
sidebar_position: 1
title: 安装指南
---

# 安装指南

SuperDucky 支持多个操作系统，请根据您的系统选择对应的安装方式。

## 系统要求

- Windows 10/11 (x64)
- macOS 10.15+ (Intel 或 Apple Silicon)
- Linux (x64)

## 下载

请前往 [SuperDucky Releases](https://github.com/ducky7go/SuperDucky/releases) 页面下载最新版本。

## Windows

SuperDucky 提供两种 Windows 安装包：

### 安装版本（推荐）

1. 下载 `SuperDucky-Setup-0.2.0.exe`
2. 双击运行安装程序
3. 按照安装向导完成安装
4. 安装完成后从开始菜单启动 SuperDucky

### 免安装版本（便携版）

1. 下载 `SuperDucky-0.2.0.exe`
2. 将文件放置到任意目录
3. 双击运行即可使用

## macOS

### Intel Mac

1. 下载 `SuperDucky-0.2.0.dmg` (165.7 MB)
2. 双击打开 DMG 文件
3. 将 SuperDucky 拖入应用程序文件夹
4. 从启动台启动 SuperDucky

### Apple Silicon Mac (M1/M2/M3)

1. 下载 `SuperDucky-0.2.0-arm64.dmg` (161.1 MB)
2. 双击打开 DMG 文件
3. 将 SuperDucky 拖入应用程序文件夹
4. 从启动台启动 SuperDucky

:::提示
首次启动时，如果系统提示"无法验证开发者"，请在系统偏好设置 > 安全性与隐私中点击"仍要打开"。
:::

## Linux

SuperDucky 以 AppImage 格式提供，适用于大多数 Linux 发行版。

1. 下载 `SuperDucky-0.2.0.AppImage` (167.6 MB)
2. 添加执行权限：
   ```bash
   chmod +x SuperDucky-0.2.0.AppImage
   ```
3. 运行：
   ```bash
   ./SuperDucky-0.2.0.AppImage
   ```

:::提示
您也可以创建桌面快捷方式，方便以后启动。将 AppImage 文件移动到固定位置（如 `~/Applications/`），然后创建对应的 `.desktop` 文件。
:::

## 验证安装

启动 SuperDucky 后，您应该能看到主界面。如果遇到问题，请 [提交 Issue](https://github.com/ducky7go/SuperDucky/issues)。

## 文件说明

| 平台 | 文件名 | 大小 | 说明 |
|------|--------|------|------|
| Windows | `SuperDucky-Setup-0.2.0.exe` | 99.8 MB | 安装版本 |
| Windows | `SuperDucky-0.2.0.exe` | 99.6 MB | 免安装版本 |
| macOS (Intel) | `SuperDucky-0.2.0.dmg` | 165.7 MB | Intel Mac 安装包 |
| macOS (Apple Silicon) | `SuperDucky-0.2.0-arm64.dmg` | 161.1 MB | M1/M2/M3 Mac 安装包 |
| Linux | `SuperDucky-0.2.0.AppImage` | 167.6 MB | 通用 Linux 版本 |

## SHA256 校验

为确保下载文件的完整性，建议验证 SHA256 校验和：

```bash
# Linux/macOS
sha256sum SuperDucky-0.2.0.AppImage

# Windows (PowerShell)
Get-FileHash SuperDucky-0.2.0.exe -Algorithm SHA256
```
