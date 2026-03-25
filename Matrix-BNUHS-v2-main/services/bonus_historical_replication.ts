/**
 * 历史复现胶囊 V4.0 - 目标 30+ 胶囊
 * 最后冲刺：再添加 10 个胶囊
 */

import {
  HistoricalReplicationCapsule,
} from './historical_replication';

// ==================== 最后 10 个胶囊 ====================

export const BONUS_HISTORICAL_REPLICATION_CAPSULES: HistoricalReplicationCapsule[] = [
  {
    id: 'hist_rep_yanghui_triangle',
    type: 'historical_replication',
    domain: 'Mathematics',
    topics: ['yanghui', 'triangle', 'pascal', 'combinatorics', 'replication'],
    coreConcepts: ['binomial-coefficients', 'combinatorics', 'number-patterns', 'mathematical-beauty'],
    prompts: [
      '分析杨辉三角的数学结构',
      '探讨杨辉三角与帕斯卡三角的联系',
      '解释组合数学的历史演进',
    ],
    resonanceScore: 0.91,
    evolutionHistory: [],
    
    originalExperiment: {
      researcher: '杨辉',
      year: 1261,
      description: '在《详解九章算法》中首次记载杨辉三角，比帕斯卡早约600年',
      methods: ['数字排列', '模式发现', '规律总结'],
    },
    replicationExperiment: {
      researcher: '现代组合数学研究团队',
      year: 2026,
      temporalSpan: 765,
    },
    newDiscovery: {
      phenomena: ['杨辉三角在计算机科学中的应用', '分形结构的发现', '与量子力学的联系'],
      mechanism: '杨辉三角揭示了二项式系数的深层数学结构，广泛应用于概率论、密码学等领域',
      implications: [
        '证明中国古代数学的高超水平',
        '为现代算法设计提供历史灵感',
        '连接传统数学与现代计算'
      ],
    },
    connection: {
      temporalSpan: 765,
      domainBridge: '古代组合数学 → 现代计算数学',
      paradigmShift: "从'数字游戏'到'数学结构'",
      knowledgeGap: '13世纪缺乏严格的数学证明理论',
    },
    datmScore: {
      truth: 90,
      goodness: 88,
      beauty: 92,
      intelligence: 90,
    },
  },
  {
    id: 'hist_rep_li_ye_equant',
    type: 'historical_replication',
    domain: 'Astronomy',
    topics: ['li-ye', 'equant', 'astronomy', 'ancient-china', 'replication'],
    coreConcepts: ['celestial-motions', 'mathematical-astronomy', 'planetary-models', 'ancient-observations'],
    prompts: [
      '分析李冶天元术的数学突破',
      '探讨中国古代天文学的成就',
      '解释数学在天文学中的应用',
    ],
    resonanceScore: 0.88,
    evolutionHistory: [],
    
    originalExperiment: {
      researcher: '李冶',
      year: 1248,
      description: '完成《测圆海镜》，创立天元术，用代数方法解决几何问题',
      methods: ['数学建模', '方程求解', '天文计算'],
    },
    replicationExperiment: {
      researcher: '现代数学天文学团队',
      year: 2026,
      temporalSpan: 778,
    },
    newDiscovery: {
      phenomena: ['天元术在现代数学中的应用', '古代天文模型的计算机模拟', '中国古算的现代诠释'],
      mechanism: '天元术是古代中国的代数符号系统，比西方符号代数早约400年',
      implications: [
        '发掘中国古代数学的现代价值',
        '为数学教育提供历史案例',
        '促进中西数学史比较研究'
      ],
    },
    connection: {
      temporalSpan: 778,
      domainBridge: '古代数学天文学 → 现代计算天文学',
      paradigmShift: "从'经验计算'到'符号代数'",
      knowledgeGap: '13世纪缺乏系统的符号表示法',
    },
    datmScore: {
      truth: 86,
      goodness: 87,
      beauty: 85,
      intelligence: 86,
    },
  },
  {
    id: 'hist_rep_hu_sanniang',
    type: 'historical_replication',
    domain: 'Engineering',
    topics: ['hu-sanniang', 'water-engineering', 'irrigation', 'ancient-china', 'replication'],
    coreConcepts: ['hydraulic-engineering', 'water-management', 'agricultural-technology', 'ancient-infrastructure'],
    prompts: [
      '分析都江堰的水利工程原理',
      '探讨古代水利技术的现代应用',
      '解释水利工程对文明的影响',
    ],
    resonanceScore: 0.89,
    evolutionHistory: [],
    
    originalExperiment: {
      researcher: '李冰父子',
      year: -256,
      description: '建造都江堰水利工程，至今仍在发挥作用的最古老水利工程之一',
      methods: ['地形勘察', '分流设计', '泥沙处理'],
    },
    replicationExperiment: {
      researcher: '现代水利工程研究团队',
      year: 2026,
      temporalSpan: 2282,
    },
    newDiscovery: {
      phenomena: ['都江堰的科学原理分析', '古代水利工程的现代价值', '可持续水利设计的案例'],
      mechanism: '都江堰利用鱼嘴分水、宝瓶口引水、飞沙堰排沙的原理，实现了人与自然的和谐共生',
      implications: [
        '为现代水利工程提供历史参考',
        '展示可持续发展的古代智慧',
        '促进水利遗产保护研究'
      ],
    },
    connection: {
      temporalSpan: 2282,
      domainBridge: '古代水利 → 现代水利工程',
      paradigmShift: "从'经验治水'到'科学水利'",
      knowledgeGap: '战国时期缺乏流体力学理论',
    },
    datmScore: {
      truth: 87,
      goodness: 89,
      beauty: 88,
      intelligence: 86,
    },
  },
  {
    id: 'hist_rep_zhuge_liang Wooden_Ox',
    type: 'Historical_replication',
    domain: 'Engineering',
    topics: ['zhuge-liang', 'wooden-ox', 'transportation', 'ancient-china', 'replication'],
    coreConcepts: ['vehicle-design', 'mechanical-engineering', 'ancient-innovation', 'transportation-technology'],
    prompts: [
      '分析木牛流马的机械原理',
      '探讨古代运输工具的创新',
      '解释机械发明的历史价值',
    ],
    resonanceScore: 0.86,
    evolutionHistory: [],
    
    originalExperiment: {
      researcher: '诸葛亮',
      year: 230,
      description: '发明木牛流马，用于三国时期蜀汉的军粮运输',
      methods: ['机械设计', '动力系统', '载重优化'],
    },
    replicationExperiment: {
      researcher: '现代机械工程团队',
      year: 2026,
      temporalSpan: 1796,
    },
    newDiscovery: {
      phenomena: ['木牛流马原理的工程分析', '古代机械设计的现代诠释', '智能运输系统的灵感来源'],
      mechanism: '木牛流马是一种省力的运输机械，可能包含连杆机构和齿轮系统',
      implications: [
        '发掘古代机械发明的现代价值',
        '为机器人技术提供历史灵感',
        '促进机械史研究'
      ],
    },
    connection: {
      temporalSpan: 1796,
      domainBridge: '古代机械 → 现代机器人',
      paradigmShift: "从'人力运输'到'机械运输'",
      knowledgeGap: '3世纪缺乏系统的机械理论',
    },
    datmScore: {
      truth: 84,
      goodness: 85,
      beauty: 83,
      intelligence: 85,
    },
  },
  {
    id: 'hist_rep_gan_shi_silk',
    type: 'historical_replication',
    domain: 'Materials Science',
    topics: ['gan-shi', 'silk', 'sericulture', 'ancient-china', 'replication'],
    coreConcepts: ['sericulture', 'textile-engineering', 'material-processing', 'silk-production'],
    prompts: [
      '分析缫丝技术的历史演进',
      '探讨丝绸对人类文明的影响',
      '解释传统丝绸工艺的现代价值',
    ],
    resonanceScore: 0.88,
    evolutionHistory: [],
    
    originalExperiment: {
      researcher: '嫘祖/历代蚕农',
      year: -3000,
      description: '发明缫丝技术，养蚕缫丝是中国古代最重要的发明之一',
      methods: ['蚕桑养殖', '蚕茧处理', '丝绸织造'],
    },
    replicationExperiment: {
      researcher: '现代纺织工程团队',
      year: 2026,
      temporalSpan: 5026,
    },
    newDiscovery: {
      phenomena: ['古代丝绸的微观结构分析', '传统工艺的科学原理', '现代纺织技术的灵感来源'],
      mechanism: '缫丝技术体现了中国古代对生物材料加工的高超技艺',
      implications: [
        '为现代纺织技术提供历史参考',
        '促进传统工艺的传承',
        '推动生物材料科学研究'
      ],
    },
    connection: {
      temporalSpan: 5026,
      domainBridge: '古代纺织 → 现代材料科学',
      paradigmShift: "从'手工制作'到'材料工程'",
      knowledgeGap: '新石器时代缺乏材料科学理论',
    },
    datmScore: {
      truth: 85,
      goodness: 87,
      beauty: 86,
      intelligence: 84,
    },
  },
  {
    id: 'hist_rep_archimedes_principle',
    type: 'historical_replication',
    domain: 'Physics',
    topics: ['archimedes', 'principle', 'fluid-mechanics', 'replication'],
    coreConcepts: ['buoyancy', 'fluid-statics', 'density-measurement', 'hydrostatics'],
    prompts: [
      '分析阿基米德浮力原理的发现',
      '探讨浮力原理的应用价值',
      '解释流体静力学的发展',
    ],
    resonanceScore: 0.93,
    evolutionHistory: [],
    
    originalExperiment: {
      researcher: '阿基米德',
      year: -250,
      description: '发现浮力原理（阿基米德原理），提出皇冠真假检验方法',
      methods: ['排水法测量', '密度计算', '浮力验证'],
    },
    replicationExperiment: {
      researcher: '现代流体力学研究团队',
      year: 2026,
      temporalSpan: 2276,
    },
    newDiscovery: {
      phenomena: ['浮力原理在航天中的应用', '纳米流体的行为研究', '海洋工程的浮力系统'],
      mechanism: '阿基米德原理揭示了流体中物体受力的基本规律',
      implications: [
        '为航天工程提供理论基础',
        '推动微流控技术发展',
        '促进海洋工程创新'
      ],
    },
    connection: {
      temporalSpan: 2276,
      domainBridge: '古典力学 → 现代流体力学',
      paradigmShift: "从'经验观察'到'定量分析'",
      knowledgeGap: '古希腊缺乏现代数学工具',
    },
    datmScore: {
      truth: 94,
      goodness: 90,
      beauty: 88,
      intelligence: 92,
    },
  },
  {
    id: 'hist_rep_hippocrates_medicine',
    type: 'historical_replication',
    domain: 'Medicine',
    topics: ['hippocrates', 'medicine', 'humoral-theory', 'replication'],
    coreConcepts: ['medical-ethics', 'clinical-observation', 'humoral-theory', 'preventive-medicine'],
    prompts: [
      '分析希波克拉底医学革命',
      '探讨体液学说的历史价值',
      '解释医学伦理的起源',
    ],
    resonanceScore: 0.89,
    evolutionHistory: [],
    
    originalExperiment: {
      researcher: '希波克拉底',
      year: -400,
      description: '创立希波克拉底医学学派，提出体液学说和医学伦理',
      methods: ['临床观察', '体液分类', '自然治愈'],
    },
    replicationExperiment: {
      researcher: '现代医学史研究团队',
      year: 2026,
      temporalSpan: 2426,
    },
    newDiscovery: {
      phenomena: ['体液学说的现代科学分析', '希波克拉底誓言的当代价值', '古代临床方法的历史意义'],
      mechanism: '希波克拉底奠定了西方医学的基础，强调观察和自然治愈',
      implications: [
        '为医学史研究提供案例',
        '促进医学伦理讨论',
        '推动循证医学发展'
      ],
    },
    connection: {
      temporalSpan: 2426,
      domainBridge: '古典医学 → 现代医学',
      paradigmShift: "从'神学医学'到'科学医学'",
      knowledgeGap: '古希腊缺乏解剖学和生理学知识',
    },
    datmScore: {
      truth: 86,
      goodness: 90,
      beauty: 85,
      intelligence: 87,
    },
  },
  {
    id: 'hist_rep_ibn_al-haytham_optics',
    type: 'historical_replication',
    domain: 'Physics',
    topics: ['ibn-al-haytham', 'optics', 'camera-obscura', 'replication'],
    coreConcepts: ['camera-obscura', 'visual-perception', 'light-theory', 'experimental-method'],
    prompts: [
      '分析阿尔哈曾的光学实验',
      '探讨暗箱原理的历史演进',
      '解释现代光学的基础',
    ],
    resonanceScore: 0.90,
    evolutionHistory: [],
    
    originalExperiment: {
      researcher: '伊本·海瑟姆 (阿尔哈曾)',
      year: 1010,
      description: '进行光学实验，发现光以直线传播，建立暗箱成像理论',
      methods: ['暗箱实验', '视觉理论研究', '光的直线传播验证'],
    },
    replicationExperiment: {
      researcher: '现代光学研究团队',
      year: 2026,
      temporalSpan: 1016,
    },
    newDiscovery: {
      phenomena: ['暗箱在摄影中的应用', '视觉神经科学的验证', '光学仪器的古代基础'],
      mechanism: '阿尔哈曾的实验方法奠定了现代光学的基础',
      implications: [
        '为摄影技术提供历史基础',
        '推动视觉科学研究',
        '促进实验光学发展'
      ],
    },
    connection: {
      temporalSpan: 1016,
      domainBridge: '古典光学 → 现代光学',
      paradigmShift: "从'哲学思辨'到'实验验证'",
      knowledgeGap: '11世纪缺乏光学仪器',
    },
    datmScore: {
      truth: 88,
      goodness: 87,
      beauty: 86,
      intelligence: 89,
    },
  },
  {
    id: 'hist_rep_copernicus_astronomy',
    type: 'historical_replication',
    domain: 'Astronomy',
    topics: ['copernicus', 'heliocentrism', 'astronomy', 'replication'],
    coreConcepts: ['heliocentrism', 'celestial-motions', 'planetary-orbits', 'astronomical-observation'],
    prompts: [
      '分析哥白尼日心说的革命',
      '探讨地心说到日心说的转变',
      '解释科学革命的意义',
    ],
    resonanceScore: 0.92,
    evolutionHistory: [],
    
    originalExperiment: {
      researcher: '尼古拉·哥白尼',
      year: 1543,
      description: '发表《天体运行论》，提出日心说模型',
      methods: ['天文观测', '数学建模', '理论推演'],
    },
    replicationExperiment: {
      researcher: '现代天文学研究团队',
      year: 2026,
      temporalSpan: 483,
    },
    newDiscovery: {
      phenomena: ['太阳系形成的精确模型', '系外行星的发现', '宇宙膨胀的观测'],
      mechanism: '哥白尼的日心说开启了现代天文学的大门',
      implications: [
        '为现代天文学奠定基础',
        '推动科学方法论发展',
        '促进宇宙学研究'
      ],
    },
    connection: {
      temporalSpan: 483,
      domainBridge: '文艺复兴天文学 → 现代天文学',
      paradigmShift: "从'地心说'到'日心说'",
      knowledgeGap: '16世纪缺乏天文观测工具',
    },
    datmScore: {
      truth: 93,
      goodness: 91,
      beauty: 89,
      intelligence: 92,
    },
  },
  {
    id: 'hist_rep_galileo_telescope',
    type: 'historical_replication',
    domain: 'Astronomy',
    topics: ['galileo', 'telescope', 'astronomy', 'replication'],
    coreConcepts: ['telescopic-observation', 'celestial-bodies', 'scientific-instrument', 'experimental-astronomy'],
    prompts: [
      '分析伽利略望远镜观测的突破',
      '探讨望远镜对天文学的影响',
      '解释科学仪器的历史价值',
    ],
    resonanceScore: 0.91,
    evolutionHistory: [],
    
    originalExperiment: {
      researcher: '伽利略·伽利莱',
      year: 1609,
      description: '改进望远镜倍率，进行天文观测，发现木星卫星、月球环形山等',
      methods: ['望远镜制作', '天文观测', '观测记录'],
    },
    replicationExperiment: {
      researcher: '现代天文学研究团队',
      year: 2026,
      temporalSpan: 417,
    },
    newDiscovery: {
      phenomena: ['哈勃望远镜的发现', '系外行星的直接成像', '引力波的观测'],
      mechanism: '伽利略的望远镜观测开启了观测天文学的新时代',
      implications: [
        '为现代观测天文学奠定基础',
        '推动望远镜技术发展',
        '促进宇宙探索'
      ],
    },
    connection: {
      temporalSpan: 417,
      domainBridge: '古典观测天文学 → 现代观测天文学',
      paradigmShift: "从'肉眼观测'到'仪器观测'",
      knowledgeGap: '17世纪缺乏光学理论',
    },
    datmScore: {
      truth: 92,
      goodness: 89,
      beauty: 87,
      intelligence: 91,
    },
  },
];

// ==================== 完整统计 ====================

export function getBonusStats(): {
  count: number;
  avgTemporalSpan: number;
  avgDATMScore: { truth: number; goodness: number; beauty: number; intelligence: number };
} {
  const capsules = BONUS_HISTORICAL_REPLICATION_CAPSULES;
  
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
  };
}

// 导出版本
export const VERSION = '4.0.0';
export const VERSION_INFO = {
  version: VERSION,
  date: '2026-01-31',
  feature: 'Bonus Historical Replication Capsules (10 more)',
  targetCount: 30,
  basedOn: 'EDU-MATRIX V1.3',
};
