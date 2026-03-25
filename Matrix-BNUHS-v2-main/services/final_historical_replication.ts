/**
 * 扩展历史复现胶囊 V2.5 - 最后冲刺
 * 目标: 20+ 胶囊
 */

import {
  HistoricalReplicationCapsule,
} from './historical_replication';

// ==================== 最后 4 个胶囊 ====================

export const FINAL_HISTORICAL_REPLICATION_CAPSULES: HistoricalReplicationCapsule[] = [
  {
    id: 'hist_rep_huang_di_neijing',
    type: 'historical_replication',
    domain: 'Traditional Chinese Medicine',
    topics: ['huang-di', 'neijing', 'yin-yang', 'five-elements', 'replication'],
    coreConcepts: ['holistic-medicine', 'qi-vital-energy', 'meridian-system', 'preventive-medicine'],
    prompts: [
      '分析《黄帝内经》的医学理论体系',
      '探讨阴阳五行与现代系统医学的联系',
      '解释预防医学的历史智慧',
    ],
    resonanceScore: 0.91,
    evolutionHistory: [],
    
    originalExperiment: {
      researcher: '黄帝内经作者群',
      year: -200,
      description: '《黄帝内经》奠定了中医学理论基础，提出阴阳五行、经络气血等概念',
      methods: ['临床观察', '经验总结', '理论建构'],
    },
    replicationExperiment: {
      researcher: '现代医学研究团队',
      year: 2026,
      temporalSpan: 2226,
    },
    newDiscovery: {
      phenomena: ['经络的现代解剖学验证', '针灸的神经科学机制', '整体观念的分子生物学基础'],
      mechanism: '通过现代科学方法验证和解释传统中医理论',
      implications: [
        '为中西医结合提供科学依据',
        '发掘传统医学的现代价值',
        '推动精准医疗与传统医学融合'
      ],
    },
    connection: {
      temporalSpan: 2226,
      domainBridge: '传统医学 → 现代系统医学',
      paradigmShift: "从'经验医学'到'循证医学'",
      knowledgeGap: '古代缺乏现代解剖学和生理学知识',
    },
    datmScore: {
      truth: 88,
      goodness: 92,
      beauty: 85,
      intelligence: 89,
    },
  },
  {
    id: 'hist_rep_cai_lun_paper',
    type: 'historical_replication',
    domain: 'Materials Science',
    topics: ['cai-lun', 'paper', 'ancient-china', 'replication'],
    coreConcepts: ['papermaking', 'fiber-structure', 'material-processing', 'information-preservation'],
    prompts: [
      '分析蔡伦改进造纸术的技术突破',
      '探讨造纸术对人类文明的推动',
      '解释材料创新对历史的影响',
    ],
    resonanceScore: 0.92,
    evolutionHistory: [],
    
    originalExperiment: {
      researcher: '蔡伦',
      year: 105,
      description: '改进造纸工艺，使用树皮、麻头、破布等制成"蔡侯纸"',
      methods: ['材料选择', '工艺改进', '批量生产'],
    },
    replicationExperiment: {
      researcher: '现代材料科学研究团队',
      year: 2026,
      temporalSpan: 1921,
    },
    newDiscovery: {
      phenomena: ['古代纸张的微观结构分析', '传统造纸工艺的科学原理', '新型纸基材料开发'],
      mechanism: '通过现代材料科学方法分析传统造纸工艺的合理性',
      implications: [
        '为文物保护提供科学依据',
        '开发新型环保纸张',
        '连接传统工艺与现代材料学'
      ],
    },
    connection: {
      temporalSpan: 1921,
      domainBridge: '传统造纸 → 现代材料科学',
      paradigmShift: "从'手工制作'到'材料工程'",
      knowledgeGap: '汉代缺乏材料科学理论',
    },
    datmScore: {
      truth: 89,
      goodness: 90,
      beauty: 86,
      intelligence: 87,
    },
  },
  {
    id: 'hist_rep_ibn_sina_canon',
    type: 'historical_replication',
    domain: 'Medicine',
    topics: ['ibn-sina', 'canon', 'avicenna', 'medicine', 'replication'],
    coreConcepts: ['medical-encyclopedia', 'systematic-medicine', 'pharmacology', 'clinical-observation'],
    prompts: [
      '分析《医典》的医学体系',
      '探讨伊斯兰医学对欧洲医学的影响',
      '解释古代医学百科全书的现代价值',
    ],
    resonanceScore: 0.90,
    evolutionHistory: [],
    
    originalExperiment: {
      researcher: '伊本·西纳 (阿维森纳)',
      year: 1025,
      description: '完成《医典》，整合希腊、波斯、印度医学，成为中世纪欧洲医学标准教材',
      methods: ['文献整理', '临床观察', '系统分类'],
    },
    replicationExperiment: {
      researcher: '医学史研究团队',
      year: 2026,
      temporalSpan: 1001,
    },
    newDiscovery: {
      phenomena: ['《医典》内容的现代科学分析', '传统药物的活性成分研究', '古代临床方法的历史价值'],
      mechanism: '通过现代医学史方法分析《医典》的科学贡献',
      implications: [
        '发掘医学史的现代价值',
        '为药物开发提供历史参考',
        '促进医学人文研究'
      ],
    },
    connection: {
      temporalSpan: 1001,
      domainBridge: '中世纪医学 → 现代医学',
      paradigmShift: "从'经验医学'到'循证医学'",
      knowledgeGap: '11世纪缺乏现代医学诊断技术',
    },
    datmScore: {
      truth: 87,
      goodness: 89,
      beauty: 84,
      intelligence: 86,
    },
  },
  {
    id: 'hist_rep_darwin_evolution',
    type: 'historical_replication',
    domain: 'Biology',
    topics: ['darwin', 'evolution', 'natural-selection', 'replication'],
    coreConcepts: ['evolution', 'natural-selection', 'species-origin', 'biodiversity'],
    prompts: [
      '分析达尔文进化论的核心思想',
      '探讨进化论对现代生物学的影响',
      '解释自然选择的历史验证',
    ],
    resonanceScore: 0.95,
    evolutionHistory: [],
    
    originalExperiment: {
      researcher: '查尔斯·达尔文',
      year: 1859,
      description: '出版《物种起源》，提出自然选择进化理论',
      methods: ['实地考察', '标本收集', '比较解剖'],
    },
    replicationExperiment: {
      researcher: '现代进化生物学团队',
      year: 2026,
      temporalSpan: 167,
    },
    newDiscovery: {
      phenomena: ['基因组学验证进化论', '分子钟的发现', '人类起源的基因研究'],
      mechanism: '通过现代遗传学和分子生物学方法验证进化论',
      implications: [
        '证实进化论的科学性',
        '推动分子进化研究',
        '促进人类学发展'
      ],
    },
    connection: {
      temporalSpan: 167,
      domainBridge: '经典进化论 → 分子进化论',
      paradigmShift: "从'观察推理'到'基因验证'",
      knowledgeGap: '19世纪缺乏遗传学理论',
    },
    datmScore: {
      truth: 97,
      goodness: 94,
      beauty: 91,
      intelligence: 96,
    },
  },
];

// ==================== 完整统计 ====================

export function getFinalStats(): {
  count: number;
  avgTemporalSpan: number;
  avgDATMScore: { truth: number; goodness: number; beauty: number; intelligence: number };
  allCapsules: HistoricalReplicationCapsule[];
} {
  const capsules = FINAL_HISTORICAL_REPLICATION_CAPSULES;
  
  const count = capsules.length;
  const totalSpan = capsules.reduce((sum, c) => sum + c.connection.temporalSpan, 0);
  const avgSpan = totalSpan / count;
  
  const avgTruth = capsules.reduce((sum, c) => sum + c.datmScore.truth, 0) / count;
  const avgGoodness = capsules.reduce((sum, c) => sum + c.datmScore.goodness, 0) / count;
  const avgBeauty = capsules.reduce((sum, c) => sum + c.datmScore.beauty, 0) / count;
  const avgIntelligence = capsules.reduce((sum, c) => sum + c.datmScore.intelligence, 0) / count;
  
  return {
    count,
    avgTemporalSpan: avgSpan,
    avgDATMScore: {
      truth: avgTruth,
      goodness: avgGoodness,
      beauty: avgBeauty,
      intelligence: avgIntelligence,
    },
    allCapsules: capsules,
  };
}

// 导出版本
export const VERSION = '2.5.0';
export const VERSION_INFO = {
  version: VERSION,
  date: '2026-01-31',
  feature: 'Final Historical Replication Capsules (4 more)',
  targetCount: 20,
  basedOn: 'EDU-MATRIX V1.3',
};
