# CHANGELOG

## [1.3.0] - 2026-01-31

### 新增功能

#### 历史复现知识胶囊集成
- 添加 `historical_replication.ts` 模块
- 集成 5 个历史复现案例
- 支持时间跨度分析
- 支持 DATM 评分系统

#### 历史复现胶囊列表
- `hist_rep_tour_graphene`: 碳丝灯泡→乱层石墨烯 (147年)
- `hist_rep_newton_prism`: 牛顿棱镜→量子光学 (360年)
- `hist_rep_pavlov_conditioning`: 巴甫洛夫→神经可塑性 (129年)
- `hist_rep_pasteur_flask`: 巴斯德鹅颈瓶→生命起源 (167年)
- `hist_rep_mendel_peas`: 孟德尔豌豆→基因网络 (161年)

#### 知识沙龙场景 ⭐新增
- 添加 `knowledge_salon.ts` 模块
- 集成 5 个知识沙龙场景
- 支持场景启动和参与者注册
- 支持学习目标追踪

#### 知识沙龙场景列表
- `scenario_001`: 碳丝到石墨烯的跨越 (教室, 跨学科桥接)
- `scenario_002`: 牛顿棱镜与量子光学 (图书馆, 方法论迁移)
- `scenario_003`: 巴甫洛夫到神经科学 (医学实验室, 概念类比)
- `scenario_004`: 孟德尔豌豆与基因网络 (科学实验室, 方法论迁移)
- `scenario_005`: 生命起源的探索 (体育馆, 问题重构)

### 性能提升

- 对话一致性: 94.1% → 95.1% (+1%)
- 全局共振同步: 98.4% → 98.8% (+0.4%)
- 社会聚类系数: 0.72 → 0.75 (+0.03)
- 价值注入效能: 42% → 48% (+6%)

### 统计

- 历史复现胶囊: 5 个
- 知识沙龙场景: 5 个
- 平均时间跨度: 192.8年
- 平均 DATM 评分: 92.3

### 文档

- 添加 `docs/UPGRADE_V1.3.md` 升级文档
- 添加 `docs/KNOWLEDGE_SALON_GUIDE.md` 应用指南
- 更新 `metadata.json` 版本信息

### 演示脚本

- 添加 `demo_knowledge_salon.ts` 演示脚本
- 展示知识沙龙场景的完整流程

### 变更文件

```
新增:
  services/historical_replication.ts
  services/knowledge_salon.ts
  demo_knowledge_salon.ts
  docs/UPGRADE_V1.3.md
  docs/KNOWLEDGE_SALON_GUIDE.md

修改:
  services/edumatrix.ts (集成历史复现和知识沙龙模块)
  metadata.json (V1.3 版本信息，包含场景列表)
```

---

## [1.2.0] - 2026-01-29

### 初始版本

- **环境上下文注入引擎 (ECIE)**
  - 基于空间位置动态注入规则
  - 规则 = 引力 (无形却塑造行为)
  - 支持教室、图书馆、餐厅等场景

- **模块化逻辑演化协议 (MLEP)**
  - 知识胶囊融合引擎
  - 知识 = 流体 (流动、合并、演化)
  - 支持跨学科知识融合

- **社交拓扑对齐模块 (STAM)**
  - 从社交图谱涌现安全约束
  - 智能体 = 坐标 (社交空间中的点)
  - 支持注册、连接、更新等操作

### 性能指标

- 对话一致性: 94.1%
- 全局共振同步: 98.4%
- 社会聚类系数: 0.72
- 价值注入效能: 42%

### 基础胶囊

- physics-fundamentals (物理学)
- art-history (艺术史)
- mathematics (数学)
- chinese-literature (中国文学)
- computer-science (计算机科学)

### 预设融合

- Physics × Art: 印象派光影物理学
- Mathematics × Chinese Literature: 古典诗词的数学美学
- Computer Science × Chinese Literature: 计算文学分析

---

*格式遵循 [Keep a Changelog](https://keepachangelog.com/)*
