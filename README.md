# Unitree Atomic Task Library

面向宇树 G1-D 与 R1-A7-D 半身人形机器人的桌面原子任务库，覆盖 12 类桌面操作场景、20 种任务类别及 200 项原子任务。

## 在线访问

- **推荐公开地址（GitHub Pages）：** https://ticotico410.github.io/unitree-atomic-task-library/
- **备用地址（ChatGPT Sites）：** https://unitree-atomic-task-library.smokyocean8.chatgpt.site

GitHub Pages 无需登录即可公开访问。仓库 `main` 分支更新后，`.github/workflows/pages.yml` 会自动将 `dist/` 目录重新部署到上述公开地址。

## 本地预览

```bash
cd dist
python3 -m http.server 8000
```

然后访问 `http://localhost:8000`。不建议直接双击 `index.html`，本地 HTTP 服务可以更准确地模拟线上资源加载行为。

## 项目结构

- `dist/`：静态网页源码、样式、脚本与图片资源
- `.github/workflows/pages.yml`：GitHub Pages 自动部署配置
- `.openai/hosting.json`：ChatGPT Sites 托管配置
