/**
 * 扩展历史复现胶囊库 V2.0
 * EDU-MATRIX V1.3 扩展包
 * 
 * 添加更多历史复现案例，目标 20+ 个
 */

import {
  HistoricalReplicationCapsule,
} from './historical_replication';

// ==================== 更多历史复现胶囊 ====================

export const EXTENDED_HISTORICAL_REPLICATION_CAPSULES: HistoricalReplicationCapsule[] = [
  // ---- 西方案例续 ----
  {
    id: 'hist_rep_apple_newton',
    type: 'historical_replication',
    domain: 'Physics',
    topics: ['newton', 'gravity', 'apple', 'classical-mechanics', 'replication'],
    coreConcepts: ['gravity', 'inverse-square-law', 'celestial-mechanics', 'universal-attraction'],
    prompts: [
      '分析牛顿发现万有引力的历史背景',
      '探讨苹果传说与科学发现的关系',
      '解释从现象到定律的思维过程',
    ],
    resonanceScore: 0.94,
    evolutionHistory: [],
    
    originalExperiment: {
      researcher: '艾萨克·牛顿',
      year: 1666,
      description: '在伍尔索普庄园观察到苹果落地，提出万有引力假设',
      methods: ['现象观察', '归纳推理', '数学建模'],
    },
    replicationExperiment: {
      researcher: '现代物理学研究团队',
      year: 2026,
      temporalSpan: 360,
    },
    newDiscovery: {
      phenomena: ['引力波的探测', '黑洞成像', '暗物质效应'],
      mechanism: '从牛顿的"苹果落地"到爱因斯坦的时空弯曲，再到LIGO探测引力波',
      implications: [
        '验证广义相对论预言',
        '开启引力波天文学时代',
        '连接经典力学与现代宇宙学'
      ],
    },
    connection: {
      temporalSpan: 360,
      domainBridge: '经典力学 → 现代宇宙学',
      paradigmShift: "从'苹果落地'到'引力波探测'",
      knowledgeGap: '17世纪缺乏精密测量技术，无法验证引力波',
    },
    datmScore: {
      truth: 95,
      goodness: 92,
      beauty: 90,
      intelligence: 94,
    },
  },
  {
    id: 'hist_rep_michelson_morley',
    type: 'historical_replication',
    domain: 'Physics',
    topics: ['michelson', 'morley', 'aether', 'relativity', 'replication'],
    coreConcepts: ['light-speed', 'aether-drift', 'interferometer', 'special-relativity'],
    prompts: [
      '分析迈克耳孙-莫雷实验的零结果',
      '探讨失败实验如何催生相对论',
      '解释科学中的"失败"价值',
    ],
    resonanceScore: 0.93,
    evolutionHistory: [],
    
    originalExperiment: {
      researcher: '阿尔伯特·迈克耳孙 & 爱德华·莫雷',
      year: 1887,
      description: '测量地球相对于"以太"运动速度的实验，得到零结果',
      methods: ['干涉仪测量', '精密光学', '地球运动检测'],
    },
    replicationExperiment: {
      researcher: '现代光学研究团队',
      year: 2026,
      temporalSpan: 139,
    },
    newDiscovery: {
      phenomena: ['光速不变性验证', '量子纠缠测试', '高精度干涉仪应用'],
      mechanism: '零结果证明以太不存在，为狭义相对论奠定基础',
      implications: [
        '证实爱因斯坦相对论',
        '推动量子光学发展',
        '促进精密测量技术进步'
      ],
    },
    connection: {
      temporalSpan: 139,
      domainBridge: '经典光学 → 量子光学',
      paradigmShift: "从'寻找以太'到'光速不变'",
      knowledgeGap: '19世纪缺乏量子理论框架',
    },
    datmScore: {
      truth: 96,
      goodness: 90,
      beauty: 88,
      intelligence: 95,
    },
  },
  {
    id: 'hist_rep_fleming_penicillin',
    type: 'historical_replication',
    domain: 'Medicine',
    topics: ['fleming', 'penicillin', 'antibiotics', 'medicine', 'replication'],
    coreConcepts: ['antibiosis', 'penicillin-discovery', 'antimicrobial-therapy', 'biopharmaceuticals'],
    prompts: [
      '分析弗莱明发现青霉素的过程',
      '探讨偶然发现与科学准备的关系',
      '解释抗生素改变医学的历史',
    ],
    resonanceScore: 0.92,
    evolutionHistory: [],
    
    originalExperiment: {
      researcher: '亚历山大·弗莱明',
      year: 1928,
      description: '发现青霉菌污染的培养皿中细菌被抑制，从而发现青霉素',
      methods: ['细菌培养', '观察记录', '样品纯化'],
    },
    replicationExperiment: {
      researcher: '现代药学研究团队',
      year: 2026,
      temporalSpan: 98,
    },
    newDiscovery: {
      phenomena: ['抗生素耐药性机制', '新型抗生素开发', '微生物组疗法'],
      mechanism: '从偶然发现青霉素，到理解作用机制，再到应对耐药性',
      implications: [
        '开创抗生素时代',
        '应对抗生素耐药危机',
        '推动精准抗菌治疗'
      ],
    },
    connection: {
      temporalSpan: 98,
      domainBridge: '抗生素发现 → 精准医疗',
      paradigmShift: "从'偶然发现'到'理性设计'",
      knowledgeGap: '20世纪初缺乏分子生物学知识',
    },
    datmScore: {
      truth: 93,
      goodness: 95,
      beauty: 85,
      intelligence: 91,
    },
  },
  // ---- 中国案例续 ----
  {
    id: 'hist_rep_zhang_zhen_suiyuan',
    type: 'Historical_replication',
    domain: 'Geography',
    topics: ['zhang-zhen', 'suiyuan', 'maps', 'ancient-china', 'replication'],
    coreConcepts: ['cartography', 'geographic-survey', 'scale-mapping', 'terrain-representation'],
    prompts: [
      '分析张骞出使西域的地理意义',
      '探讨丝绸之路对地理认知的影响',
      '解释古代地理探险与地图学的发展',
    ],
    resonanceScore: 0.91,
    evolutionHistory: [],
    
    originalExperiment: {
      researcher: '张骞',
      year: 138,
      description: '出使西域，开辟丝绸之路，推动东西方地理认知交流',
      methods: ['实地考察', '路线记录', '地理信息收集'],
    },
    replicationExperiment: {
      researcher: '现代地理学研究团队',
      year: 2026,
      temporalSpan: 1888,
    },
    newDiscovery: {
      phenomena: ['丝绸之路数字化重建', '古代路线的GPS验证', '贸易网络的系统分析'],
      mechanism: '结合历史文献和现代 GIS 技术，重建丝绸之路的地理网络',
      implications: [
        '验证历史文献的准确性',
        '为文化遗产保护提供依据',
        '促进"一带一路"研究'
      ],
    },
    connection: {
      temporalSpan: 1888,
      domainBridge: '古代地理 → 数字地理学',
      paradigmShift: "从'探险记录'到'数字重建'",
      knowledgeGap: '汉代缺乏精确测量技术',
    },
    datmScore: {
      truth: 88,
      goodness: 90,
      beauty: 86,
      intelligence: 89,
    },
  },
  {
    id: 'hist_rep_song_dynasty_finance',
    type: 'historical_replication',
    domain: 'Economics',
    topics: ['song-dynasty', 'finance', 'paper-money', 'ancient-china', 'replication'],
    coreConcepts: ['paper-currency', 'financial-system', 'monetary-policy', 'central-banking'],
    prompts: [
      '分析宋朝纸币发行机制',
      '探讨古代金融创新与现代货币理论',
      '解释纸币对经济发展的影响',
    ],
    resonanceScore: 0.90,
    evolutionHistory: [],
    
    originalExperiment: {
      researcher: '宋朝政府',
      year: 1024,
      description: '在四川地区首次官方发行纸币"交子"，开创世界纸币史',
      methods: ['金属储备', '票据发行', '兑换机制'],
    },
    replicationExperiment: {
      researcher: '现代金融学研究团队',
      year: 2026,
      temporalSpan: 1002,
    },
    newDiscovery: {
      phenomena: ['交子发行机制的现代分析', '宋代金融危机的历史教训', '数字货币与纸币的对比'],
      mechanism: '宋朝通过准备金制度和票据流通实现了早期的纸币功能',
      implications: [
        '为现代货币理论提供历史案例',
        '理解通货膨胀的历史根源',
        '为数字货币设计提供参考'
      ],
    },
    connection: {
      temporalSpan: 1002,
      domainBridge: '古代货币 → 数字货币',
      paradigmShift: "从'金属货币'到'信用货币'",
      knowledgeGap: '宋代缺乏现代经济学理论',
    },
    datmScore: {
      truth: 87,
      goodness: 88,
      beauty: 84,
      intelligence: 86,
    },
  },
  {
    id: 'hist_rep_gongshang_technology',
    type: 'historical_replication',
    domain: 'Engineering',
    topics: ['gongshang', 'technology', 'ancient-china', 'replication'],
    coreConcepts: ['agricultural-technology', 'irrigation', 'metallurgy', 'craftsmanship'],
    prompts: [
      '分析《天工开物》中的技术体系',
      '探讨中国传统工艺的工程价值',
      '解释古代技术对现代工程的启发',
    ],
    resonanceScore: 0.89,
    evolutionHistory: [],
    
    originalExperiment: {
      researcher: '宋应星',
      year: 1637,
      description: '完成《天工开物》，记录中国古代农业和手工业技术',
      methods: ['实地调研', '工艺记录', '技术总结'],
    },
    replicationExperiment: {
      researcher: '现代工程研究团队',
      year: 2026,
      temporalSpan: 389,
    },
    newDiscovery: {
      phenomena: ['传统工艺的科学原理分析', '古代技术的现代应用', '传统材料的性能测试'],
      mechanism: '通过现代材料科学方法分析古代工艺的合理性',
      implications: [
        '验证古代技术的科学性',
        '发掘传统工艺的现代价值',
        '促进传统工艺的传承与创新'
      ],
    },
    connection: {
      temporalSpan: 389,
      domainBridge: '传统工艺 → 现代工程',
      paradigmShift: "从'经验传承'到'科学分析'",
      knowledgeGap: '明代缺乏现代科学分析工具',
    },
    datmScore: {
      truth: 86,
      goodness: 87,
      beauty: 85,
      intelligence: 85,
    },
  },
];

// ==================== 统计功能 ====================

export function getExtendedCapsuleStats(): {
  count: number;
  avgTemporalSpan: number;
  avgDATMScore: { truth: number; goodness: number; beauty: number; intelligence: number };
  domainDistribution: Map<string, int>;
  categories: {
    western: number;
    eastern: number;
    science: number;
    humanities: number;
  };
} {
  const capsules = EXTENDED_HISTORICAL_REPLICATION_CAPSULES;
  
  const count = capsules.length;
  const totalSpan = capsules.reduce((sum, c) => sum + c.connection.temporalSpan, 0);
  const avgSpan = totalSpan / count;
  
  const avgTruth = capsules.reduce((sum, c) => sum + c.datmScore.truth, 0) / count;
  const avgGoodness = capsules.reduce((sum, c) => sum + c.datmScore.goodness, 0) / count;
  const avgBeauty = capsules.reduce((sum, c) => sum + c.datmScore.beauty, 0) / count;
  const avgIntelligence = capsules.reduce((sum, c) => sum + c.datmScore.intelligence, 0) / count;
  
  const domainDist = new Map<string, int>();
  capsules.forEach(c => {
    domainDist.set(c.domain, (domainDist.get(c.domain) || 0) + 1);
  });
  
  return {
    count,
    avgTemporalSpan: avgSpan,
    avgDATMScore: {
      truth: avgTruth,
      goodness: avgGoodness,
      beauty: avgBeauty,
      intelligence: avgIntelligence,
    },
    domainDistribution: domainDist,
    categories: {
      western: capsules.filter(c => 
        ['Thomas Edison', 'Isaac Newton', 'Ivan Pavlov', 'Louis Pasteur', 
         'Albert Michelson', 'Edward Morley', 'Alexander Fleming'].some(n => 
           c.originalExperiment.researcher.includes(n)
         )
      ).length,
      eastern: capsules.filter(c => 
        ['张衡', '毕昇', '祖冲之', '沈括', '李时珍', '张骞', '宋应星'].some(n => 
           c.originalExperiment.researcher.includes(n)
         ) || c.originalExperiment.researcher.includes('Song')
      ).length,
      science: capsules.filter(c => 
        ['Physics', 'Medicine', 'Engineering', 'Geography', 'Materials Science'].some(d => 
          c.domain.includes(d)
        )
      ).length,
      humanities: capsules.filter(c => 
        ['Economics', 'Literature', 'History'].some(d => 
          c.domain.includes(d)
        )
      ).length,
    },
  };
}

// 获取所有扩展胶囊
export function getAllExtendedCapsules(): HistoricalReplicationCapsule[] {
  return EXTENDED_HISTORICAL_REPLICATION_CAPSULES;
}

// 合并统计（包含原有胶囊）
export function getAllCapsulesStats(): {
  totalCount: number;
  totalSpan: number;
  avgDATMScore: { truth: number; goodness: number; beauty: number; intelligence: number };
} {
  // 原有胶囊统计
  const originalCount = 10;  // 5西方 + 5中国
  const originalAvgSpan = (192.8 * 5 + 952.6 * 5) / 10;
  const originalAvgDATM = (92.3 * 5 + 89.9 * 5) / 10;
  
  // 扩展胶囊统计
  const extendedStats = getExtendedCapsuleStats();
  
  const totalCount = originalCount + extendedStats.count;
  const totalSpan = (originalAvgSpan * originalCount + extendedStats.avgTemporalSpan * extendedStats.count) / totalCount;
  const totalDATM = (originalAvgDATM * originalCount + 
    (extendedStats.avgDATMScore.truth + extendedStats.avgDATMScore.goodness + 
     extendedStats.avgDATMScore.beauty + extendedStats.avgDATMScore.intelligence) / 4 * extendedStats.count) / totalCount;
  
  return {
    totalCount,
    totalSpan,
    avgDATMScore: {
      truth: (92.3 * 5 + 89.9 * 5 + extendedStats.avgDATMScore.truth * extendedStats.count) / totalCount,
      goodness: (92.3 * 5 + 89.9 * 5 + extendedStats.avgDATMScore.goodness * extendedStats.count) / totalCount,
      beauty: (92.3 * 5 + 89.9 * 5 + extendedStats.avgDATMScore.beauty * extendedStats.count) / totalCount,
      intelligence: (92.3 * 5 + 89.9 * 5 + extendedStats.avgDATMScore.intelligence * extendedStats.count) / totalCount,
    },
  };
}

// 导出版本
export const VERSION = '2.0.0';
export const VERSION_INFO = {
  version: VERSION,
  date: '2026-01-31',
  feature: 'Extended Historical Replication Capsules V2.0',
  targetCount: 20,
  basedOn: 'EDU-MATRIX V1.3',
};
