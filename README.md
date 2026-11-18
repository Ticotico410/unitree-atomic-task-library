# Unitree Atomic Task Library

面向宇树 G1 人形机器人的桌面与全身原子任务库，支持滚轮切换两种任务库首页。

## 在线访问

- **推荐公开地址（GitHub Pages）：** https://ticotico410.github.io/unitree-atomic-task-library/
- **备用地址（ChatGPT Sites）：** https://unitree-atomic-task-library.smokyocean8.chatgpt.site

GitHub Pages 无需登录即可公开访问。仓库 `main` 分支更新后，`.github/workflows/pages.yml` 会自动将 `dist/` 目录重新部署到上述公开地址。

## 本地预览

`test` 分支用于本地预览，不会在推送时自动部署官网。

```bash
cd dist
python3 -m http.server 8000
```

然后访问 `http://localhost:8000`。不建议直接双击 `index.html`，本地 HTTP 服务可以更准确地模拟线上资源加载行为。

## 项目结构

- `dist/`：静态网页源码、样式、脚本与图片资源
- `.github/workflows/pages.yml`：GitHub Pages 自动部署配置
- `.openai/hosting.json`：ChatGPT Sites 托管配置

## 首页切换

首页保留桌面操作介绍，向下滚动会连续横向切入上海数采厂全身原子任务库，向上滚动可返回。也可点击底部切换按钮或使用左右方向键；手机支持左右滑动。全身页两张 G1 图片均链接至 https://www.unitree.com/cn/g1 。

本次更新为首页展示调整；下方场景与任务内容仍使用现有数据。Supabase 用于共享场景物料和任务编辑，首页文案及图片由 `dist/` 中的静态文件管理。
