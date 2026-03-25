# 附中矩阵 V1.3 部署指南

> **版本**: v1.0 | **日期**: 2026-01-31

---

## 📋 目录

1. [部署选项](#一部署选项)
2. [GitHub Pages 部署](#二github-pages-部署)
3. [Vercel 部署](#三vercel-部署)
4. [本地预览](#四本地预览)
5. [已知问题](#五已知问题)

---

## 一、部署选项

### 选项对比

| 选项 | 优点 | 缺点 | 推荐度 |
|------|------|------|--------|
| **GitHub Pages** | 免费、简单、绑定域名 | 需排除服务目录 | ⭐⭐⭐ |
| **Vercel** | 自动部署、预览、CDN | 需配置 | ⭐⭐⭐⭐⭐ |
| **Netlify** | 拖拽部署、免费 | 无 | ⭐⭐⭐ |
| **自建服务器** | 完全控制 | 需运维 | ⭐⭐ |

---

## 二、GitHub Pages 部署

### 2.1 配置步骤

#### 步骤 1: 安装 gh-pages 包

```bash
npm install --save-dev gh-pages
```

#### 步骤 2: 修改 package.json

```json
{
  "scripts": {
    "deploy": "gh-pages -d dist",
    "predeploy": "npm run build"
  },
  "homepage": "https://wanyview.github.io/Matrix-BNUHS-v2"
}
```

#### 步骤 3: 创建 _redirects 文件

在 `public/` 目录下创建 `_redirects`:

```
/*  /index.html  200
```

#### 步骤 4: 创建 .nojekyll 文件

在 `public/` 目录创建空文件 `.nojekyll`

#### 步骤 5: 部署

```bash
npm run deploy
```

### 2.2 手动部署

```bash
# 构建
npm run build

# 发布到 gh-pages 分支
npx gh-pages -d dist
```

---

## 三、Vercel 部署

### 3.1 快速部署

```bash
# 安装 Vercel CLI
npm i -g vercel

# 登录
vercel login

# 部署
cd Matrix-BNUHS-v2
vercel
```

### 3.2 vercel.json 配置

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### 3.3 GitHub 集成

1. 访问 https://vercel.com/new
2. 导入 GitHub 仓库
3. 配置构建设置:
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. 点击 Deploy

---

## 四、本地预览

### 4.1 开发模式

```bash
npm run dev
# 访问 http://localhost:5173
```

### 4.2 预览构建

```bash
npm run preview
# 访问 http://localhost:4173
```

---

## 五、已知问题

### 5.1 类型错误

**问题**: 服务模块存在 TypeScript 类型错误

**影响**: 无法直接构建

**解决方案**:

```bash
# 选项 1: 排除服务目录
# 修改 tsconfig.json:
{
  "include": ["./App.tsx", "./main.tsx", "./index.tsx", "./components/*.tsx"]
  "exclude": ["node_modules", "services", "scripts"]
}

# 选项 2: 修复类型错误
# 将 `int` 改为 `number`
# 将 `float` 改为 `number`
# 修复 AgentNode 接口不匹配
```

### 5.2 修复 KnowledgeSalonPanel

**问题**: KnowledgeSalonPanel 使用了不兼容的 AgentNode 类型

**解决方案**:

```typescript
// 当前类型定义不匹配
interface Participant {
  id: string;
  name: string;  // AgentNode 没有 name
  role: string;  // AgentNode 使用 roles[]
  interests: string[];
  socialContributions: number;
  safetyScore: number;
  position: { x: number; y: number; z: number };
}

// 建议: 创建独立的 Participant 接口
interface Participant {
  id: string;
  name: string;
  role: 'teacher' | 'student';
  interests: string[];
  socialContributions: number;
  safetyScore: number;
}
```

---

## 六、部署检查清单

### 部署前

- [ ] 代码已提交到 GitHub
- [ ] 构建测试通过
- [ ] 环境变量配置正确
- [ ] 自定义域名已配置（如需要）

### 部署后

- [ ] 访问 https://wanyview.github.io/Matrix-BNUHS-v2
- [ ] 所有页面正常加载
- [ ] 交互功能正常工作
- [ ] 没有控制台错误

---

## 📚 相关资源

- **GitHub**: https://github.com/wanyview/Matrix-BNUHS-v2
- **Vercel**: https://vercel.com
- **GitHub Pages**: https://pages.github.com
- **Vite 部署**: https://vitejs.dev/guide/static-deploy

---

*文档版本: v1.0*
*最后更新: 2026-01-31*
