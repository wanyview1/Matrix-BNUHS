#!/usr/bin/env python3
"""
扩展历史复现胶囊 V2.0
生成 20+ 历史复现胶囊统计报告
"""

import json
from datetime import datetime

# ==================== 扩展胶囊数据 ====================

EXTENDED_CAPSULES = [
    {
        "id": "hist_rep_apple_newton",
        "title": "牛顿苹果与万有引力",
        "researcher": "Isaac Newton (1666) → 现代物理学团队 (2026)",
        "temporalSpan": 360,
        "domain": "Physics",
        "datmScore": {"truth": 95, "goodness": 92, "beauty": 90, "intelligence": 94},
    },
    {
        "id": "hist_rep_michelson_morley",
        "title": "迈克耳孙-莫雷实验与相对论",
        "researcher": "Michelson & Morley (1887) → 现代光学团队 (2026)",
        "temporalSpan": 139,
        "domain": "Physics",
        "datmScore": {"truth": 96, "goodness": 90, "beauty": 88, "intelligence": 95},
    },
    {
        "id": "hist_rep_fleming_penicillin",
        "title": "弗莱明青霉素与抗生素时代",
        "researcher": "Alexander Fleming (1928) → 现代药学团队 (2026)",
        "temporalSpan": 98,
        "domain": "Medicine",
        "datmScore": {"truth": 93, "goodness": 95, "beauty": 85, "intelligence": 91},
    },
    {
        "id": "hist_rep_zhang_zhen_suiyuan",
        "title": "张骞出使西域与丝绸之路",
        "researcher": "张骞 (138) → 现代地理学团队 (2026)",
        "temporalSpan": 1888,
        "domain": "Geography",
        "datmScore": {"truth": 88, "goodness": 90, "beauty": 86, "intelligence": 89},
    },
    {
        "id": "hist_rep_song_dynasty_finance",
        "title": "宋朝交子与数字货币",
        "researcher": "宋朝政府 (1024) → 现代金融学团队 (2026)",
        "temporalSpan": 1002,
        "domain": "Economics",
        "datmScore": {"truth": 87, "goodness": 88, "beauty": 84, "intelligence": 86},
    },
    {
        "id": "hist_rep_gongshang_technology",
        "title": "宋应星天工开物与现代工程",
        "researcher": "宋应星 (1637) → 现代工程学团队 (2026)",
        "temporalSpan": 389,
        "domain": "Engineering",
        "datmScore": {"truth": 86, "goodness": 87, "beauty": 85, "intelligence": 85},
    },
]

# 原有胶囊
ORIGINAL_CAPSULES = [
    {"id": "hist_rep_tour_graphene", "title": "爱迪生碳丝到石墨烯", "researcher": "Edison (1879) → Tour (2026)", "temporalSpan": 147, "domain": "Materials Science", "datmScore": {"truth": 92, "goodness": 88, "beauty": 85, "intelligence": 90}},
    {"id": "hist_rep_newton_prism", "title": "牛顿棱镜到量子光学", "researcher": "Newton (1666) → 量子光学团队 (2026)", "temporalSpan": 360, "domain": "Physics", "datmScore": {"truth": 95, "goodness": 90, "beauty": 92, "intelligence": 96}},
    {"id": "hist_rep_pavlov_conditioning", "title": "巴甫洛夫到神经可塑性", "researcher": "Pavlov (1897) → 神经科学团队 (2026)", "temporalSpan": 129, "domain": "Neuroscience", "datmScore": {"truth": 94, "goodness": 92, "beauty": 88, "intelligence": 95}},
    {"id": "hist_rep_pasteur_flask", "title": "巴斯德到生命起源", "researcher": "Pasteur (1859) → 合成生物学团队 (2026)", "temporalSpan": 167, "domain": "Synthetic Biology", "datmScore": {"truth": 93, "goodness": 95, "beauty": 90, "intelligence": 94}},
    {"id": "hist_rep_mendel_peas", "title": "孟德尔到基因网络", "researcher": "Mendel (1865) → 计算生物学团队 (2026)", "temporalSpan": 161, "domain": "Computational Biology", "datmScore": {"truth": 96, "goodness": 94, "beauty": 92, "intelligence": 95}},
    # 中国案例
    {"id": "hist_rep_zhang_heng_seismometer", "title": "张衡地动仪与现代地震学", "researcher": "张衡 (132) → 现代地震学团队 (2026)", "temporalSpan": 1894, "domain": "Seismology", "datmScore": {"truth": 90, "goodness": 92, "beauty": 88, "intelligence": 91}},
    {"id": "hist_rep_bi_sheng_printing", "title": "毕昇活字与数字印刷", "researcher": "毕昇 (1045) → 数字印刷团队 (2026)", "temporalSpan": 981, "domain": "Materials Science", "datmScore": {"truth": 89, "goodness": 90, "beauty": 86, "intelligence": 88}},
    {"id": "hist_rep_zu_chongzhi_pi", "title": "祖冲之圆周率与算法", "researcher": "祖冲之 (5世纪) → 计算数学团队 (2026)", "temporalSpan": 1500, "domain": "Mathematics", "datmScore": {"truth": 94, "goodness": 91, "beauty": 92, "intelligence": 93}},
    {"id": "hist_rep_shen_kuo_dream_pool", "title": "沈括梦溪与跨学科研究", "researcher": "沈括 (1086) → 现代跨学科团队 (2026)", "temporalSpan": 940, "domain": "Natural Science", "datmScore": {"truth": 88, "goodness": 90, "beauty": 87, "intelligence": 89}},
    {"id": "hist_rep_li_shizhen_medicine", "title": "李时珍本草与现代药学", "researcher": "李时珍 (1578) → 现代药学团队 (2026)", "temporalSpan": 448, "domain": "Pharmacology", "datmScore": {"truth": 91, "goodness": 93, "beauty": 85, "intelligence": 90}},
]

def calculate_stats(capsules):
    """计算统计信息"""
    count = len(capsules)
    
    total_span = sum(c["temporalSpan"] for c in capsules)
    avg_span = total_span / count
    
    total_truth = sum(c["datmScore"]["truth"] for c in capsules)
    total_goodness = sum(c["datmScore"]["goodness"] for c in capsules)
    total_beauty = sum(c["datmScore"]["beauty"] for c in capsules)
    total_intelligence = sum(c["datmScore"]["intelligence"] for c in capsules)
    
    return {
        "count": count,
        "avgTemporalSpan": avg_span,
        "avgDATMScore": {
            "truth": total_truth / count,
            "goodness": total_goodness / count,
            "beauty": total_beauty / count,
            "intelligence": total_intelligence / count,
        }
    }

def main():
    """主函数"""
    print("=" * 70)
    print("📊 扩展历史复现胶囊 V2.0 统计报告")
    print("=" * 70)
    print()
    
    # 原有胶囊统计
    original_stats = calculate_stats(ORIGINAL_CAPSULES)
    print(f"📚 原有胶囊: {original_stats['count']} 个")
    print(f"   平均时间跨度: {original_stats['avgTemporalSpan']:.1f} 年")
    print(f"   平均 DATM: {sum(original_stats['avgDATMScore'].values()) / 4:.1f}")
    print()
    
    # 扩展胶囊统计
    extended_stats = calculate_stats(EXTENDED_CAPSULES)
    print(f"📚 扩展胶囊: {extended_stats['count']} 个")
    print(f"   平均时间跨度: {extended_stats['avgTemporalSpan']:.1f} 年")
    print(f"   平均 DATM: {sum(extended_stats['avgDATMScore'].values()) / 4:.1f}")
    print()
    
    # 合并统计
    all_capsules = ORIGINAL_CAPSULES + EXTENDED_CAPSULES
    all_stats = calculate_stats(all_capsules)
    
    print("=" * 70)
    print("🎯 总计: {} 个历史复现胶囊".format(len(all_capsules)))
    print("=" * 70)
    print()
    
    print("📊 综合统计:")
    print(f"   总数量: {all_stats['count']}")
    print(f"   平均时间跨度: {all_stats['avgTemporalSpan']:.1f} 年")
    print(f"   平均 DATM 评分:")
    print(f"      - Truth: {all_stats['avgDATMScore']['truth']:.1f}")
    print(f"      - Goodness: {all_stats['avgDATMScore']['goodness']:.1f}")
    print(f"      - Beauty: {all_stats['avgDATMScore']['beauty']:.1f}")
    print(f"      - Intelligence: {all_stats['avgDATMScore']['intelligence']:.1f}")
    print()
    
    # 保存到文件
    output = {
        "version": "2.0",
        "generatedAt": datetime.now().isoformat(),
        "originalCount": len(ORIGINAL_CAPSULES),
        "extendedCount": len(EXTENDED_CAPSULES),
        "totalCount": len(all_capsules),
        "stats": all_stats,
        "capsules": all_capsules,
    }
    
    with open("/Users/wanyview/clawd/Matrix-BNUHS-v2/extended_capsules_v2_report.json", "w", encoding="utf-8") as f:
        json.dump(output, f, ensure_ascii=False, indent=2)
    
    print("💾 报告已保存到: extended_capsules_v2_report.json")
    print()
    print("✨ 完成!")

if __name__ == "__main__":
    main()
