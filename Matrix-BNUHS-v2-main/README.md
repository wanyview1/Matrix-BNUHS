<img src="./static/logo.png" alt="Matrix BNUHS Logo" width="200"/>

[![GitHub Stars](https://img.shields.io/github/stars/wanyview/Matrix-BNUHS-v2?style=flat-square&color=DAA520)](https://github.com/wanyview/Matrix-BNUHS-v2/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/wanyview/Matrix-BNUHS-v2?style=flat-square)](https://github.com/wanyview/Matrix-BNUHS-v2/network)
[![Python](https://img.shields.io/badge/Python-3.9+-blue?style=flat-square&logo=python)](https://www.python.org/)

> M2矩阵系统 - 知识协作网络

Matrix BNUHS是北师大附中M2项目的知识协作网络系统，支持多维知识关联、协作编辑、版本控制等能力。为教育场景提供知识管理支持。

---

## ✨ 特性

- **多维矩阵**: 支持多维度知识组织
- **协作编辑**: 多人实时协作
- **版本控制**: 完整的版本历史
- **权限管理**: 细粒度权限控制

---

## 🚀 快速开始

```bash
git clone https://github.com/wanyview/Matrix-BNUHS-v2.git
cd Matrix-BNUHS-v2
pip install -r requirements.txt
python api.py
```

服务启动: http://localhost:8895

---

## 📖 API

| 端点 | 方法 | 描述 |
|------|------|------|
| `/api/matrix` | GET | 获取矩阵 |
| `/api/node` | POST | 创建节点 |
| `/api/collab` | POST | 协作编辑 |

---

*Built with ❤️ by KAI*
