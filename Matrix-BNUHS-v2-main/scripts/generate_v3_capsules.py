#!/usr/bin/env python3
"""
完整历史复现胶囊 V3.0
生成 20+ 胶囊完整统计报告
"""

import json
from datetime import datetime

# 所有胶囊数据（完整列表）
ALL_CAPSULES = [
    # === 西方案例 (8个) ===
    {"id": "hist_rep_tour_graphene", "title": "爱迪生碳丝到石墨烯", "researcher": "Edison (1879) → Tour (2026)", "temporalSpan": 147, "domain": "Materials Science", "origin": "West", "datmScore": {"truth": 92, "goodness": 88, "beauty": 85, "intelligence": 90}},
    {"id": "hist_rep_newton_prism", "title": "牛顿棱镜到量子光学", "researcher": "Newton (1666) → 量子光学 (2026)", "temporalSpan": 360, "domain": "Physics", "origin": "West", "datmScore": {"truth": 95, "goodness": 90, "beauty": 92, "intelligence": 96}},
    {"id": "hist_rep_pavlov_conditioning", "title": "巴甫洛夫到神经可塑性", "researcher": "Pavlov (1897) → 神经科学 (2026)", "temporalSpan": 129, "domain": "Neuroscience", "origin": "West", "datmScore": {"truth": 94, "goodness": 92, "beauty": 88, "intelligence": 95}},
    {"id": "hist_rep_pasteur_flask", "title": "巴斯德到生命起源", "researcher": "Pasteur (1859) → 合成生物学 (2026)", "temporalSpan": 167, "domain": "Synthetic Biology", "origin": "West", "datmScore": {"truth": 93, "goodness": 95, "beauty": 90, "intelligence": 94}},
    {"id": "hist_rep_mendel_peas", "title": "孟德尔到基因网络", "researcher": "Mendel (1865) → 计算生物学 (2026)", "temporalSpan": 161, "domain": "Computational Biology", "origin": "West", "datmScore": {"truth": 96, "goodness": 94, "beauty": 92, "intelligence": 95}},
    {"id": "hist_rep_apple_newton", "title": "牛顿苹果与万有引力", "researcher": "Newton (1666) → 现代物理 (2026)", "temporalSpan": 360, "domain": "Physics", "origin": "West", "datmScore": {"truth": 95, "goodness": 92, "beauty": 90, "intelligence": 94}},
    {"id": "hist_rep_michelson_morley", "title": "迈克耳孙-莫雷与相对论", "researcher": "Michelson (1887) → 现代光学 (2026)", "temporalSpan": 139, "domain": "Physics", "origin": "West", "datmScore": {"truth": 96, "goodness": 90, "beauty": 88, "intelligence": 95}},
    {"id": "hist_rep_fleming_penicillin", "title": "弗莱明青霉素与抗生素", "researcher": "Fleming (1928) → 现代药学 (2026)", "temporalSpan": 98, "domain": "Medicine", "origin": "West", "datmScore": {"truth": 93, "goodness": 95, "beauty": 85, "intelligence": 91}},
    {"id": "hist_rep_darwin_evolution", "title": "达尔文进化论与基因学", "researcher": "Darwin (1859) → 现代进化生物学 (2026)", "temporalSpan": 167, "domain": "Biology", "origin": "West", "datmScore": {"truth": 97, "goodness": 94, "beauty": 91, "intelligence": 96}},
    {"id": "hist_rep_ibn_sina_canon", "title": "阿维森纳《医典》", "researcher": "Ibn Sina (1025) → 医学史 (2026)", "temporalSpan": 1001, "domain": "Medicine", "origin": "West", "datmScore": {"truth": 87, "goodness": 89, "beauty": 84, "intelligence": 86}},
    
    # === 中国案例 (10个) ===
    {"id": "hist_rep_zhang_heng_seismometer", "title": "张衡地动仪", "researcher": "张衡 (132) → 现代地震学 (2026)", "temporalSpan": 1894, "domain": "Seismology", "origin": "East", "datmScore": {"truth": 90, "goodness": 92, "beauty": 88, "intelligence": 91}},
    {"id": "hist_rep_bi_sheng_printing", "title": "毕昇活字印刷", "researcher": "毕昇 (1045) → 数字印刷 (2026)", "temporalSpan": 981, "domain": "Materials Science", "origin": "East", "datmScore": {"truth": 89, "goodness": 90, "beauty": 86, "intelligence": 88}},
    {"id": "hist_rep_zu_chongzhi_pi", "title": "祖冲之圆周率", "researcher": "祖冲之 (5世纪) → 计算数学 (2026)", "temporalSpan": 1500, "domain": "Mathematics", "origin": "East", "datmScore": {"truth": 94, "goodness": 91, "beauty": 92, "intelligence": 93}},
    {"id": "hist_rep_shen_kuo_dream_pool", "title": "沈括梦溪笔谈", "researcher": "沈括 (1086) → 跨学科 (2026)", "temporalSpan": 940, "domain": "Natural Science", "origin": "East", "datmScore": {"truth": 88, "goodness": 90, "beauty": 87, "intelligence": 89}},
    {"id": "hist_rep_li_shizhen_medicine", "title": "李时珍本草纲目", "researcher": "李时珍 (1578) → 现代药学 (2026)", "temporalSpan": 448, "domain": "Pharmacology", "origin": "East", "datmScore": {"truth": 91, "goodness": 93, "beauty": 85, "intelligence": 90}},
    {"id": "hist_rep_zhang_zhen_suiyuan", "title": "张骞出使西域", "researcher": "张骞 (138) → 现代地理 (2026)", "temporalSpan": 1888, "domain": "Geography", "origin": "East", "datmScore": {"truth": 88, "goodness": 90, "beauty": 86, "intelligence": 89}},
    {"id": "hist_rep_song_dynasty_finance", "title": "宋朝交子", "researcher": "宋朝 (1024) → 现代金融 (2026)", "temporalSpan": 1002, "domain": "Economics", "origin": "East", "datmScore": {"truth": 87, "goodness": 88, "beauty": 84, "intelligence": 86}},
    {"id": "hist_rep_gongshang_technology", "title": "宋应星天工开物", "researcher": "宋应星 (1637) → 现代工程 (2026)", "temporalSpan": 389, "domain": "Engineering", "origin": "East", "datmScore": {"truth": 86, "goodness": 87, "beauty": 85, "intelligence": 85}},
    {"id": "hist_rep_huang_di_neijing", "title": "黄帝内经", "researcher": "黄帝内经 (-200) → 现代医学 (2026)", "temporalSpan": 2226, "domain": "Traditional Chinese Medicine", "origin": "East", "datmScore": {"truth": 88, "goodness": 92, "beauty": 85, "intelligence": 89}},
    {"id": "hist_rep_cai_lun_paper", "title": "蔡伦造纸术", "researcher": "蔡伦 (105) → 现代材料 (2026)", "temporalSpan": 1921, "domain": "Materials Science", "origin": "East", "datmScore": {"truth": 89, "goodness": 90, "beauty": 86, "intelligence": 87}},
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
    
    west_capsules = [c for c in capsules if c["origin"] == "West"]
    east_capsules = [c for c in capsules if c["origin"] == "East"]
    
    return {
        "count": count,
        "avgTemporalSpan": avg_span,
        "avgDATMScore": {
            "truth": total_truth / count,
            "goodness": total_goodness / count,
            "beauty": total_beauty / count,
            "intelligence": total_intelligence / count,
        },
        "westCount": len(west_capsules),
        "eastCount": len(east_capsules),
        "westAvgSpan": sum(c["temporalSpan"] for c in west_capsules) / len(west_capsules) if west_capsules else 0,
        "eastAvgSpan": sum(c["temporalSpan"] for c in east_capsules) / len(east_capsules) if east_capsules else 0,
    }

def generate_html_report(stats, capsules):
    """生成 HTML 报告"""
    html = f"""
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>附中矩阵 - 历史复现胶囊 V3.0</title>
    <style>
        body {{ font-family: Arial, sans-serif; margin: 20px; background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); color: #fff; }}
        .container {{ max-width: 1200px; margin: 0 auto; }}
        h1 {{ color: #ff6b6b; text-align: center; }}
        .stats {{ display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin: 20px 0; }}
        .stat-box {{ background: rgba(255,255,255,0.1); padding: 20px; border-radius: 10px; text-align: center; }}
        .stat-value {{ font-size: 36px; font-weight: bold; color: #4ecdc4; }}
        .stat-label {{ font-size: 14px; color: #aaa; }}
        table {{ width: 100%; border-collapse: collapse; margin: 20px 0; background: rgba(255,255,255,0.05); }}
        th, td {{ padding: 12px; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.1); }}
        th {{ background: rgba(255,107,107,0.2); color: #ff6b6b; }}
        .west {{ color: #4ecdc4; }}
        .east {{ color: #ffe66d; }}
        .datm-score {{ display: flex; gap: 5px; }}
        .score {{ padding: 2px 6px; border-radius: 3px; font-size: 11px; }}
        .truth {{ background: #4ecdc4; color: #000; }}
        .goodness {{ background: #ffe66d; color: #000; }}
        .beauty {{ background: #ff6b6b; color: #fff; }}
        .intelligence {{ background: #a8e6cf; color: #000; }}
    </style>
</head>
<body>
    <div class="container">
        <h1>📚 历史复现胶囊 V3.0</h1>
        <p style="text-align: center; color: #888;">附中矩阵 - 知识胶囊影响力扩展</p>
        
        <div class="stats">
            <div class="stat-box">
                <div class="stat-value">{stats['count']}</div>
                <div class="stat-label">总胶囊数</div>
            </div>
            <div class="stat-box">
                <div class="stat-value">{stats['avgTemporalSpan']:.0f}年</div>
                <div class="stat-label">平均时间跨度</div>
            </div>
            <div class="stat-box">
                <div class="stat-value">{(stats['avgDATMScore']['truth']+stats['avgDATMScore']['goodness']+stats['avgDATMScore']['beauty']+stats['avgDATMScore']['intelligence'])/4:.1f}</div>
                <div class="stat-label">平均 DATM</div>
            </div>
            <div class="stat-box">
                <div class="stat-value">{stats['westCount']}/{stats['eastCount']}</div>
                <div class="stat-label">西方/中国</div>
            </div>
        </div>
        
        <h2>📊 完整胶囊列表</h2>
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>胶囊名称</th>
                    <th>研究者</th>
                    <th>时间跨度</th>
                    <th>领域</th>
                    <th>DATM 评分</th>
                </tr>
            </thead>
            <tbody>
"""
    
    for i, capsule in enumerate(capsules, 1):
        origin_class = "west" if capsule["origin"] == "West" else "east"
        origin_icon = "🌍" if capsule["origin"] == "West" else "🇨🇳"
        
        html += f"""
                <tr>
                    <td>{i}</td>
                    <td class="{origin_class}">{origin_icon} {capsule['title']}</td>
                    <td>{capsule['researcher']}</td>
                    <td>{capsule['temporalSpan']}年</td>
                    <td>{capsule['domain']}</td>
                    <td>
                        <div class="datm-score">
                            <span class="score truth">{capsule['datmScore']['truth']}</span>
                            <span class="score goodness">{capsule['datmScore']['goodness']}</span>
                            <span class="score beauty">{capsule['datmScore']['beauty']}</span>
                            <span class="score intelligence">{capsule['datmScore']['intelligence']}</span>
                        </div>
                    </td>
                </tr>
"""
    
    html += """
            </tbody>
        </table>
        
        <p style="text-align: center; color: #888; margin-top: 30px;">
            生成时间: """ + datetime.now().strftime("%Y-%m-%d %H:%M:%S") + """<br>
            附中矩阵 V1.3 | GitHub: https://github.com/wanyview/Matrix-BNUHS-v2
        </p>
    </div>
</body>
</html>
"""
    return html

def main():
    """主函数"""
    print("=" * 70)
    print("📚 历史复现胶囊 V3.0 完整报告")
    print("=" * 70)
    print()
    
    stats = calculate_stats(ALL_CAPSULES)
    
    print("🎯 综合统计:")
    print(f"   总胶囊数: {stats['count']}")
    print(f"   平均时间跨度: {stats['avgTemporalSpan']:.1f} 年")
    print(f"   平均 DATM 评分: {(stats['avgDATMScore']['truth']+stats['avgDATMScore']['goodness']+stats['avgDATMScore']['beauty']+stats['avgDATMScore']['intelligence'])/4:.1f}")
    print()
    print("   西方案例: {} 个 (平均 {} 年)".format(stats['westCount'], stats['westAvgSpan']))
    print("   中国案例: {} 个 (平均 {} 年)".format(stats['eastCount'], stats['eastAvgSpan']))
    print()
    
    print("📊 DATM 评分分布:")
    print(f"   Truth: {stats['avgDATMScore']['truth']:.1f}")
    print(f"   Goodness: {stats['avgDATMScore']['goodness']:.1f}")
    print(f"   Beauty: {stats['avgDATMScore']['beauty']:.1f}")
    print(f"   Intelligence: {stats['avgDATMScore']['intelligence']:.1f}")
    print()
    
    # 保存 JSON
    output = {
        "version": "3.0",
        "generatedAt": datetime.now().isoformat(),
        "totalCount": stats['count'],
        "stats": stats,
        "capsules": ALL_CAPSULES,
    }
    
    with open("/Users/wanyview/clawd/Matrix-BNUHS-v2/capsules_v3_report.json", "w", encoding="utf-8") as f:
        json.dump(output, f, ensure_ascii=False, indent=2)
    
    # 保存 HTML
    html = generate_html_report(stats, ALL_CAPSULES)
    with open("/Users/wanyview/clawd/Matrix-BNUHS-v2/capsules_v3_report.html", "w", encoding="utf-8") as f:
        f.write(html)
    
    print("💾 文件已保存:")
    print("   - capsules_v3_report.json")
    print("   - capsules_v3_report.html")
    print()
    print("=" * 70)
    print("✨ 目标达成！20+ 历史复现胶囊已创建！")
    print("=" * 70)

if __name__ == "__main__":
    main()
