# Matrix-BNUHS v2 发布指南

项目已准备就绪，但因网络连接问题无法直接推送到GitHub。请按照以下步骤手动发布：

## 手动发布步骤

1. 打开浏览器，访问 https://github.com/new
2. 创建新仓库，命名为 `Matrix-BNUHS-v2`
3. 用户名为 `wanyview`
4. 设置为公开仓库
5. 不要初始化 README、.gitignore 或 license（因为我们已有这些文件）

## 配置本地仓库连接远程仓库

1. 复制新创建仓库的HTTPS链接（格式如：https://github.com/wanyview/Matrix-BNUHS-v2.git）
2. 在终端中执行以下命令：
   ```bash
   git remote add origin https://github.com/wanyview/Matrix-BNUHS-v2.git
   git branch -M main
   git push -u origin main
   ```

## 替代方案（如果网络问题持续）

如果仍然无法推送，请使用GitHub Desktop或VS Code的Git功能进行推送。

## 项目信息

- 项目名称：Matrix-BNUHS v2
- 用户名：wanyview
- 项目类型：多智能体教育平台
- 技术栈：React, TypeScript, Vite