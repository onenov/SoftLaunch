
# SoftLaunch - 应用分发页面
![License](https://img.shields.io/badge/License-MIT-green.svg)
![Platform](https://img.shields.io/badge/Platform-Windows%20%7C%20macOS%20%7C%20Linux-blue.svg)

## 简介 📖
这是一个简洁易用的**应用分发页面**，用户可以在此页面上下载适用于不同平台（Windows、macOS、Linux、iOS）的客户端。该页面旨在为用户提供快速的下载体验，帮助他们轻松获取所需的软件版本。

## 功能特点 ✨
- 支持多平台客户端下载（Windows、macOS、Linux、iOS）
- 清晰的下载链接和版本管理
- 响应式设计，适配不同设备
- 自动检测设备加载Tab标签
- 轻量、快速，易于部署和使用

该项目主要采用 Nuxt.js 3 作为核心框架，结合 Vue 3 和 TypeScript 开发，使用 Arco Design 作为 UI 组件库，Markdown-it 和相关插件用于 Markdown 内容的处理和渲染。

## 截图 🖼️
![](https://io.onenov.cn/file/202410211536865.png)
![](https://io.onenov.cn/file/202410211536832.png)
![](https://io.onenov.cn/file/202410211537633.png)

---

## 配置文件

### public/version.json
#### JSON 参数描述
- **NAME**  
   - **描述**: 软件的名称。  
   - **作用**: 用于标识应用程序的名称。
- **INTRODUCTION**  
   - **描述**: 软件的简短介绍，通常是一句口号或核心理念。  
- **DESCRIPTION**  
   - **描述**: 软件的更详细描述或功能概述。  
   - **作用**: 用于更具体地描述软件的特性或目标。
- **APPLOGO**  
   - **描述**: 软件的LOGO图片链接。  
   - **作用**: 页面或应用展示时用于显示软件的图标。
- **WEBSITE**  
   - **描述**: 软件的官方网站URL。  
   - **作用**: 用户可以通过这个链接访问软件的官方网站。
- **XXX_VERSION**  
   - **描述**: 客户端的版本号。  
   - **作用**: 表示当前平台上发布的客户端版本号。
- **XXX_CLIENT**  
   - **描述**: 客户端的下载链接。   
- **XXX_SIZE**  
   - **描述**: 客户端的文件大小。  
- **XXX_DATE**  
    - **描述**: 版本的发布日期。  
- **XXX_SCREENSHOTS**  
    - **描述**: 客户端的截图链接列表。  

### public/welcome.md
描述页面内容（Markdown）

### public/updatelog.md
更新日志内容（Markdown）

---

## 部署方式 🚀
你可以通过以下几种方式将该项目部署在自己的服务器上，或者直接[下载编译后的静态压缩包](https://github.com/onenov/SoftLaunch/releases)并编辑配置文件上传到你选择的服务器或静态页面托管。

### 1. 克隆项目
首先，克隆该仓库到你的本地环境。
```bash
git clone https://github.com/onenov/SoftLaunch.git
cd SoftLaunch
```
### 2. 安装依赖
如果你使用的是 Node.js（假设你用的是前端框架如 React 或 Vue），你可以安装必要的依赖：
```bash
pnpm install
```
### 3. 启动开发服务器
```bash
pnpm run dev
```
### 4. 编译和构建
```bash
pnpm run build
```
### 5. 部署到生产环境
将 `.output/public` 文件夹上传到你选择的服务器或静态页面托管服务上（如 GitHub Pages、Vercel、Netlify 等）。

---

## License 📜
本项目基于 MIT 许可证，详情请参考 [LICENSE](./LICENSE)。
