/**
 * 历史复现知识胶囊集成模块
 * EDU-MATRIX V1.3 Upgrade
 * 
 * 将历史复现胶囊系统集成到附中矩阵
 * 实现"历史复现"专题的功能增强
 */

import {
  KnowledgeCapsule,
  EvolutionRecord,
  FusionMethod,
  ModularLogicEvolutionProtocol,
  mlep
} from './mlep';

// ==================== 历史复现胶囊定义 ====================

export interface HistoricalReplicationCapsule extends KnowledgeCapsule {
  type: 'historical_replication';
  originalExperiment: {
    researcher: string;
    year: number;
    description: string;
    methods: string[];
  };
  replicationExperiment: {
    researcher: string;
    year: number;
    temporalSpan: number;
  };
  newDiscovery: {
    phenomena: string[];
    mechanism: string;
    implications: string[];
  };
  connection: {
    temporalSpan: number;
    domainBridge: string;
    paradigmShift: string;
    knowledgeGap: string;
  };
  datmScore: {
    truth: number;
    goodness: number;
    beauty: number;
    intelligence: number;
  };
}

// 历史复现胶囊库
export const HISTORICAL_REPLICATION_CAPSULES: HistoricalReplicationCapsule[] = [
  // ==================== 原有西方案例 (5个) ====================
  {
    id: 'hist_rep_tour_graphene',
    type: 'historical_replication',
    domain: 'Materials Science',
    topics: ['graphene', 'carbon-materials', 'edison', 'replication', 'nanotechnology'],
    coreConcepts: ['carbon-structure', 'sp2-hybridization', 'phase-transition', 'turbostratic'],
    prompts: [
      '分析碳丝灯泡如何转化为乱层石墨烯',
      '探讨历史技术在现代科学中的价值',
      '解释时间跨度对科学发现的影响',
    ],
    resonanceScore: 0.93,
    evolutionHistory: [],
    
    originalExperiment: {
      researcher: 'Thomas Edison',
      year: 1879,
      description: '使用碳化竹丝作为灯丝，制作长寿命电灯泡',
      methods: ['碳化竹丝处理', '真空玻璃封装', '直流电压测试'],
    },
    replicationExperiment: {
      researcher: 'James M. Tour',
      year: 2026,
      temporalSpan: 147,
    },
    newDiscovery: {
      phenomena: ['碳丝结构转变为乱层石墨烯', '石墨烯层的无序堆叠特征'],
      mechanism: '110伏电压产生的焦耳热使碳原子重新排列，形成sp2杂化的石墨烯结构',
      implications: ['证明碳材料的高度可塑性', '为石墨烯合成提供新路径'],
    },
    connection: {
      temporalSpan: 147,
      domainBridge: 'Electrical Lighting → Nanomaterials',
      paradigmShift: "从'寻找灯丝材料'到'发现碳材料新结构'",
      knowledgeGap: '原始实验缺乏现代表征工具，无法观察纳米级结构变化',
    },
    datmScore: {
      truth: 92,
      goodness: 88,
      beauty: 85,
      intelligence: 90,
    },
  },
  {
    id: 'hist_rep_newton_prism',
    type: 'historical_replication',
    domain: 'Physics',
    topics: ['newton', 'prism', 'optics', 'quantum-optics', 'replication'],
    coreConcepts: ['light-dispersion', 'spectrum', 'wave-particle-duality', 'quantum-state'],
    prompts: [
      '比较牛顿棱镜实验与量子光学的新发现',
      '分析光学现象的经典与量子解释',
      '探讨时间跨度如何改变科学理解',
    ],
    resonanceScore: 0.95,
    evolutionHistory: [],
    
    originalExperiment: {
      researcher: 'Isaac Newton',
      year: 1666,
      description: '使用三棱镜将白光分解为彩虹光谱，开创光谱学',
      methods: ['棱镜折射实验', '光谱测量', '颜色混合实验'],
    },
    replicationExperiment: {
      researcher: 'Quantum Optics Team',
      year: 2026,
      temporalSpan: 360,
    },
    newDiscovery: {
      phenomena: ['单光子的量子态在棱镜中的行为', '量子纠缠光子的频率转换'],
      mechanism: '在量子尺度下，光子展现波粒二象性和量子叠加特性',
      implications: ['验证量子力学基本原理', '为量子信息技术提供新工具'],
    },
    connection: {
      temporalSpan: 360,
      domainBridge: 'Classical Optics → Quantum Optics',
      paradigmShift: "从'光的颜色组成'到'光的量子本质'",
      knowledgeGap: '17世纪缺乏量子理论，无法理解光的粒子性和波动性的统一',
    },
    datmScore: {
      truth: 95,
      goodness: 90,
      beauty: 92,
      intelligence: 96,
    },
  },
  {
    id: 'hist_rep_pavlov_conditioning',
    type: 'historical_replication',
    domain: 'Neuroscience',
    topics: ['pavlov', 'conditioning', 'synaptic-plasticity', 'learning', 'replication'],
    coreConcepts: ['conditioned-reflex', 'ltp-ltd', 'nmda-receptor', 'memory'],
    prompts: [
      '从巴甫洛夫的观察到现代神经可塑性机制',
      '分析行为主义到神经科学的范式转变',
      '探讨学习机制的分子基础',
    ],
    resonanceScore: 0.94,
    evolutionHistory: [],
    
    originalExperiment: {
      researcher: 'Ivan Pavlov',
      year: 1897,
      description: '通过狗的唾液分泌实验发现条件反射现象',
      methods: ['唾液分泌测量', '刺激-反应配对', '条件反射建立与消退'],
    },
    replicationExperiment: {
      researcher: 'Neuroscience Team',
      year: 2026,
      temporalSpan: 129,
    },
    newDiscovery: {
      phenomena: ['条件反射建立时突触可塑性的分子机制', 'LTP/LTD的发现'],
      mechanism: 'LTP和LTD是条件反射的神经基础，涉及NMDA受体和Ca2+信号通路',
      implications: ['揭示学习记忆的分子机制', '为治疗神经疾病提供新靶点'],
    },
    connection: {
      temporalSpan: 129,
      domainBridge: 'Behavioral Psychology → Neuroscience',
      paradigmShift: "从'外在行为描述'到'内在神经机制'",
      knowledgeGap: '19世纪缺乏直接观察大脑活动的技术',
    },
    datmScore: {
      truth: 94,
      goodness: 92,
      beauty: 88,
      intelligence: 95,
    },
  },
  {
    id: 'hist_rep_pasteur_flask',
    type: 'historical_replication',
    domain: 'Synthetic Biology',
    topics: ['pasteur', 'flask', 'origin-of-life', 'synthetic-biology', 'replication'],
    coreConcepts: ['spontaneous-generation', 'abiogenesis', 'rna-world', 'protocell'],
    prompts: [
      '从巴斯德的反驳到生命起源的新探索',
      '分析微生物学到合成生物学的演进',
      '探讨生命定义的边界',
    ],
    resonanceScore: 0.93,
    evolutionHistory: [],
    
    originalExperiment: {
      researcher: 'Louis Pasteur',
      year: 1859,
      description: '使用鹅颈瓶实验证明微生物来自空气，而非自然发生',
      methods: ['鹅颈瓶设计', '高温灭菌', '长时间观察'],
    },
    replicationExperiment: {
      researcher: 'Synthetic Biology Team',
      year: 2026,
      temporalSpan: 167,
    },
    newDiscovery: {
      phenomena: ['RNA世界假说的实验支持', '原始代谢网络的重建'],
      mechanism: '生命起源可能经历从简单有机分子到自我复制RNA，再到原始细胞的渐进过程',
      implications: ['为生命起源研究提供实验框架', '推动合成生物学发展'],
    },
    connection: {
      temporalSpan: 167,
      domainBridge: 'Microbiology → Synthetic Biology',
      paradigmShift: "从'证明生命来自生命'到'理解生命如何起源'",
      knowledgeGap: '19世纪缺乏分子生物学工具',
    },
    datmScore: {
      truth: 93,
      goodness: 95,
      beauty: 90,
      intelligence: 94,
    },
  },
  {
    id: 'hist_rep_mendel_peas',
    type: 'historical_replication',
    domain: 'Computational Biology',
    topics: ['mendel', 'peas', 'gene-network', 'genetics', 'replication'],
    coreConcepts: ['gene', 'allele', 'segregation', 'network-model'],
    prompts: [
      '从孟德尔的豌豆到现代基因网络模型',
      '分析经典遗传学到系统生物学的转变',
      '探讨复杂性状的遗传结构',
    ],
    resonanceScore: 0.96,
    evolutionHistory: [],
    
    originalExperiment: {
      researcher: 'Gregor Mendel',
      year: 1865,
      description: '通过豌豆杂交实验发现遗传的基本规律',
      methods: ['豌豆杂交实验', '性状统计', '比例分析'],
    },
    replicationExperiment: {
      researcher: 'Computational Biology Team',
      year: 2026,
      temporalSpan: 161,
    },
    newDiscovery: {
      phenomena: ['复杂性状的遗传结构', '基因-基因相互作用网络'],
      mechanism: '复杂性状是由多个基因通过复杂的调控网络共同决定的',
      implications: ['为精准医学提供理论基础', '推动作物遗传改良'],
    },
    connection: {
      temporalSpan: 161,
      domainBridge: 'Classical Genetics → Systems Genetics',
      paradigmShift: "从'单个基因'到'基因调控网络'",
      knowledgeGap: '19世纪缺乏分子遗传学工具',
    },
    datmScore: {
      truth: 96,
      goodness: 94,
      beauty: 92,
      intelligence: 95,
    },
  },
  
  // ==================== 新增西方案例 (10个) ====================
  
  // 6. 居里夫人的放射性研究
  {
    id: 'hist_rep_curie_radioactivity',
    type: 'historical_replication',
    domain: 'Nuclear Physics',
    topics: ['curie', 'radioactivity', 'nuclear-physics', 'isotope', 'replication'],
    coreConcepts: ['radioactive-decay', 'half-life', 'nuclear-fission', 'isotope-separation'],
    prompts: [
      '分析居里夫人如何发现放射性元素',
      '探讨放射性从发现到核能应用的历程',
      '解释核物理对现代医学的影响',
    ],
    resonanceScore: 0.94,
    evolutionHistory: [],
    
    originalExperiment: {
      researcher: 'Marie Curie',
      year: 1898,
      description: '发现钋和镭两种新元素，开创放射性研究',
      methods: ['化学分离', '电离测量', '矿石分析'],
    },
    replicationExperiment: {
      researcher: 'Nuclear Physics Team',
      year: 2026,
      temporalSpan: 128,
    },
    newDiscovery: {
      phenomena: ['核裂变链式反应的发现', '同位素在医学中的应用', '核废料处理技术'],
      mechanism: '放射性衰变是原子核不稳定性的表现，裂变释放的巨大能量可被利用',
      implications: ['为核能利用奠定基础', '推动放射医学发展', '建立核安全体系'],
    },
    connection: {
      temporalSpan: 128,
      domainBridge: 'Radiochemistry → Nuclear Engineering',
      paradigmShift: "从'化学性质研究'到'核能大规模应用'",
      knowledgeGap: '19世纪缺乏核结构理论，无法解释放射性本质',
    },
    datmScore: {
      truth: 94,
      goodness: 89,
      beauty: 88,
      intelligence: 95,
    },
  },
  
  // 7. 弗莱明的青霉素发现
  {
    id: 'hist_rep_fleming_penicillin',
    type: 'historical_replication',
    domain: 'Medicine',
    topics: ['fleming', 'penicillin', 'antibiotics', 'medicine', 'replication'],
    coreConcepts: ['antibiotic', 'microbial-interaction', 'beta-lactam', 'drug-discovery'],
    prompts: [
      '分析弗莱明如何意外发现青霉素',
      '探讨抗生素从发现到广泛应用的过程',
      '解释抗生素耐药性的现代挑战',
    ],
    resonanceScore: 0.95,
    evolutionHistory: [],
    
    originalExperiment: {
      researcher: 'Alexander Fleming',
      year: 1928,
      description: '发现青霉素污染的培养皿中霉菌周围细菌不生长',
      methods: ['细菌培养', '显微镜观察', '抗菌活性测试'],
    },
    replicationExperiment: {
      researcher: 'Antibiotic Research Team',
      year: 2026,
      temporalSpan: 98,
    },
    newDiscovery: {
      phenomena: ['抗生素耐药性的分子机制', '新型抗生素的开发', '微生物组与健康的关系'],
      mechanism: '青霉素通过抑制细菌细胞壁合成发挥杀菌作用，耐药性源于β-内酰胺酶的产生',
      implications: ['拯救数亿人生命', '推动现代药物研发', '警示抗生素滥用危害'],
    },
    connection: {
      temporalSpan: 98,
      domainBridge: 'Antibiotic Discovery → Antimicrobial Therapy',
      paradigmShift: "从'意外发现'到'理性药物设计'",
      knowledgeGap: '20世纪初缺乏分子生物学工具，无法理解作用机制',
    },
    datmScore: {
      truth: 96,
      goodness: 97,
      beauty: 86,
      intelligence: 92,
    },
  },
  
  // 8. 卢瑟福的原子核模型
  {
    id: 'hist_rep_rutherford_atom',
    type: 'historical_replication',
    domain: 'Physics',
    topics: ['rutherford', 'atomic-nucleus', 'particle-physics', 'gold-foil', 'replication'],
    coreConcepts: ['atomic-structure', 'nuclear-model', 'alpha-particle', 'scattering'],
    prompts: [
      '分析卢瑟福金箔实验如何揭示原子结构',
      '探讨从原子模型到粒子物理的演进',
      '解释亚原子世界的奇异特性',
    ],
    resonanceScore: 0.96,
    evolutionHistory: [],
    
    originalExperiment: {
      researcher: 'Ernest Rutherford',
      year: 1911,
      description: '通过α粒子散射实验发现原子核，提出核式结构模型',
      methods: ['α粒子源', '金箔散射', '探测器测量'],
    },
    replicationExperiment: {
      researcher: 'Particle Physics Team',
      year: 2026,
      temporalSpan: 115,
    },
    newDiscovery: {
      phenomena: ['夸克和胶子的发现', '希格斯玻色子的验证', '量子色动力学的建立'],
      mechanism: '原子核由质子和中子组成，质子和中子又由夸克通过胶子束缚',
      implications: ['奠定粒子物理基础', '为核技术提供理论支持', '揭示物质深层结构'],
    },
    connection: {
      temporalSpan: 115,
      domainBridge: 'Atomic Physics → Particle Physics',
      paradigmShift: "从'葡萄干布丁模型'到'核式模型'再到'标准模型'",
      knowledgeGap: '20世纪初缺乏夸克理论，无法理解核子内部结构',
    },
    datmScore: {
      truth: 97,
      goodness: 88,
      beauty: 91,
      intelligence: 98,
    },
  },
  
  // 9. 哈维的血液循环理论
  {
    id: 'hist_rep_harvey_circulation',
    type: 'historical_replication',
    domain: 'Medicine',
    topics: ['harvey', 'blood-circulation', 'cardiovascular', 'medicine', 'replication'],
    coreConcepts: ['cardiac-cycle', 'blood-flow', 'arteries-veins', 'physiology'],
    prompts: [
      '分析哈维如何通过定量实验证明血液循环',
      '探讨从血液循环到心血管疾病治疗的历程',
      '解释心脏功能的现代理解',
    ],
    resonanceScore: 0.93,
    evolutionHistory: [],
    
    originalExperiment: {
      researcher: 'William Harvey',
      year: 1628,
      description: '通过结扎实验和定量计算证明血液在体内循环',
      methods: ['动物解剖', '结扎实验', '血量计算'],
    },
    replicationExperiment: {
      researcher: 'Cardiovascular Research Team',
      year: 2026,
      temporalSpan: 398,
    },
    newDiscovery: {
      phenomena: ['心脏泵血机制', '血管内皮功能', '动脉粥样硬化的分子基础'],
      mechanism: '心脏通过收缩和舒张将血液泵入动脉和静脉，形成闭合循环系统',
      implications: ['建立现代生理学', '指导心血管手术', '预防和治疗心脏疾病'],
    },
    connection: {
      temporalSpan: 398,
      domainBridge: 'Classical Physiology → Modern Cardiology',
      paradigmShift: "从'血液潮汐说'到'血液循环理论'",
      knowledgeGap: '17世纪缺乏循环系统分子机制的认识',
    },
    datmScore: {
      truth: 95,
      goodness: 94,
      beauty: 87,
      intelligence: 93,
    },
  },
  
  // 10. 达尔文的进化论
  {
    id: 'hist_rep_darwin_evolution',
    type: 'historical_replication',
    domain: 'Biology',
    topics: ['darwin', 'evolution', 'natural-selection', 'species', 'replication'],
    coreConcepts: ['adaptation', 'speciation', 'phylogeny', 'genetic-drift'],
    prompts: [
      '分析达尔文如何通过观察提出进化论',
      '探讨从自然选择到现代综合进化论的历程',
      '解释进化论对现代生物学的影响',
    ],
    resonanceScore: 0.97,
    evolutionHistory: [],
    
    originalExperiment: {
      researcher: 'Charles Darwin',
      year: 1859,
      description: '通过加拉帕戈斯群岛观察提出自然选择进化论',
      methods: ['实地考察', '物种比较', '化石分析'],
    },
    replicationExperiment: {
      researcher: 'Evolutionary Biology Team',
      year: 2026,
      temporalSpan: 167,
    },
    newDiscovery: {
      phenomena: ['基因水平转移', '表观遗传继承', '进化发育生物学'],
      mechanism: '进化不仅通过自然选择，还包括遗传漂变、基因流等多种机制',
      implications: ['统一生物学各个分支', '指导物种保护', '理解抗生素耐药性'],
    },
    connection: {
      temporalSpan: 167,
      domainBridge: 'Natural History → Evolutionary Biology',
      paradigmShift: "从'物种不变论'到'进化论'",
      knowledgeGap: '19世纪缺乏遗传学基础，无法解释变异来源',
    },
    datmScore: {
      truth: 96,
      goodness: 92,
      beauty: 90,
      intelligence: 95,
    },
  },
  
  // 11. 巴斯德与微生物发酵
  {
    id: 'hist_rep_pasteur_fermentation',
    type: 'historical_replication',
    domain: 'Biochemistry',
    topics: ['pasteur', 'fermentation', 'microbiology', 'metabolism', 'replication'],
    coreConcepts: ['yeast', 'anaerobic-respiration', 'enzyme', 'metabolic-pathway'],
    prompts: [
      '分析巴斯德如何证明发酵是微生物过程',
      '探讨从发酵研究到代谢生物学的历程',
      '解释细胞呼吸的现代理解',
    ],
    resonanceScore: 0.92,
    evolutionHistory: [],
    
    originalExperiment: {
      researcher: 'Louis Pasteur',
      year: 1857,
      description: '证明发酵是由活酵母细胞引起的有氧代谢过程',
      methods: ['显微镜观察', '无菌操作', '温度控制'],
    },
    replicationExperiment: {
      researcher: 'Metabolic Engineering Team',
      year: 2026,
      temporalSpan: 169,
    },
    newDiscovery: {
      phenomena: ['糖酵解和三羧酸循环的阐明', '合成生物学的代谢工程', '人工细胞的设计'],
      mechanism: '发酵是细胞在无氧条件下分解有机物获取能量的过程，涉及复杂酶促反应',
      implications: ['推动酿酒和食品工业', '发展生物燃料', '建立代谢工程学科'],
    },
    connection: {
      temporalSpan: 169,
      domainBridge: 'Fermentation Studies → Metabolic Engineering',
      paradigmShift: "从'活力论'到'生化解释'",
      knowledgeGap: '19世纪缺乏酶和代谢途径的知识',
    },
    datmScore: {
      truth: 93,
      goodness: 91,
      beauty: 85,
      intelligence: 92,
    },
  },
  
  // 12. 拉瓦锡的氧化学说
  {
    id: 'hist_rep_lavoisier_oxygen',
    type: 'historical_replication',
    domain: 'Chemistry',
    topics: ['lavoisier', 'oxygen', 'combustion', 'conservation', 'replication'],
    coreConcepts: ['oxidation', 'chemical-equation', 'mass-conservation', 'element'],
    prompts: [
      '分析拉瓦锡如何推翻燃素说建立氧化学说',
      '探讨从定性观察到定量化学的转变',
      '解释质量守恒定律的意义',
    ],
    resonanceScore: 0.94,
    evolutionHistory: [],
    
    originalExperiment: {
      researcher: 'Antoine Lavoisier',
      year: 1777,
      description: '通过精密定量实验证明燃烧是与氧气的化合反应',
      methods: ['定量称量', '气体收集', '化学分析'],
    },
    replicationExperiment: {
      researcher: 'Quantum Chemistry Team',
      year: 2026,
      temporalSpan: 249,
    },
    newDiscovery: {
      phenomena: ['化学键的量子力学解释', '催化机理的分子层面理解', '计算化学的发展'],
      mechanism: '化学反应遵循质量守恒，原子重新组合形成新物质，燃烧是与氧气的放热反应',
      implications: ['建立现代化学基础', '发展分析化学', '推动材料科学进步'],
    },
    connection: {
      temporalSpan: 249,
      domainBridge: 'Classical Chemistry → Quantum Chemistry',
      paradigmShift: "从'燃素说'到'氧化学说'再到'量子化学'",
      knowledgeGap: '18世纪缺乏原子和分子结构的知识',
    },
    datmScore: {
      truth: 95,
      goodness: 90,
      beauty: 89,
      intelligence: 94,
    },
  },
  
  // 13. 哥白尼的日心说
  {
    id: 'hist_rep_copernicus_heliocentrism',
    type: 'historical_replication',
    domain: 'Astronomy',
    topics: ['copernicus', 'heliocentrism', 'planetary-motion', 'astronomy', 'replication'],
    coreConcepts: ['orbital-motion', 'planetary-system', 'celestial-mechanics', 'parallax'],
    prompts: [
      '分析哥白尼如何提出日心说挑战地心说',
      '探讨从日心说到现代宇宙学的历程',
      '解释天体运行的现代理解',
    ],
    resonanceScore: 0.96,
    evolutionHistory: [],
    
    originalExperiment: {
      researcher: 'Nicolaus Copernicus',
      year: 1543,
      description: '在《天体运行论》中提出太阳是宇宙中心的日心说',
      methods: ['天文观测', '数学计算', '模型构建'],
    },
    replicationExperiment: {
      researcher: 'Modern Astronomy Team',
      year: 2026,
      temporalSpan: 483,
    },
    newDiscovery: {
      phenomena: ['宇宙膨胀的发现', '黑洞和引力波的观测', '系外行星的探测'],
      mechanism: '地球和其他行星围绕太阳公转，同时自转，星系在加速膨胀',
      implications: ['开启科学革命', '奠定现代天文学基础', '推动航天技术发展'],
    },
    connection: {
      temporalSpan: 483,
      domainBridge: 'Heliocentric Theory → Modern Cosmology',
      paradigmShift: "从'地球中心'到'太阳中心'再到'宇宙无中心'",
      knowledgeGap: '16世纪缺乏天文观测精度，无法验证日心说',
    },
    datmScore: {
      truth: 94,
      goodness: 88,
      beauty: 95,
      intelligence: 96,
    },
  },
  
  // 14. 霍普金斯与维生素发现
  {
    id: 'hist_rep_hopkins_vitamins',
    type: 'historical_replication',
    domain: 'Nutrition Science',
    topics: ['hopkins', 'vitamins', 'nutrition', 'deficiency-disease', 'replication'],
    coreConcepts: ['essential-nutrients', 'deficiency', 'coenzyme', 'dietary-requirement'],
    prompts: [
      '分析霍普金斯如何发现维生素的存在',
      '探讨从维生素发现到营养学的建立',
      '解释微量营养素的生理功能',
    ],
    resonanceScore: 0.91,
    evolutionHistory: [],
    
    originalExperiment: {
      researcher: 'Frederick Hopkins',
      year: 1906,
      description: '通过实验证明膳食中存在微量必需营养因子（维生素）',
      methods: ['动物饲养实验', '膳食控制', '生长监测'],
    },
    replicationExperiment: {
      researcher: 'Nutritional Genomics Team',
      year: 2026,
      temporalSpan: 120,
    },
    newDiscovery: {
      phenomena: ['维生素的分子结构和功能', '营养基因组学的兴起', '精准营养的概念'],
      mechanism: '维生素作为辅酶或前体物质，参与体内各种代谢反应，缺乏会导致特定疾病',
      implications: ['消除多种营养缺乏病', '推动功能性食品发展', '指导个性化营养'],
    },
    connection: {
      temporalSpan: 120,
      domainBridge: 'Nutritional Discovery → Nutrigenomics',
      paradigmShift: "从'营养均衡'到'分子营养学'",
      knowledgeGap: '20世纪初缺乏生物化学工具，无法分离和鉴定维生素',
    },
    datmScore: {
      truth: 92,
      goodness: 95,
      beauty: 82,
      intelligence: 90,
    },
  },
  
  // 15. 费曼与量子电动力学
  {
    id: 'hist_rep_feynman_qed',
    type: 'historical_replication',
    domain: 'Physics',
    topics: ['feynman', 'quantum-electrodynamics', 'particle-physics', 'diagrams', 'replication'],
    coreConcepts: ['quantum-field', 'path-integral', 'feynman-diagram', 'perturbation'],
    prompts: [
      '分析费曼如何发展量子电动力学理论',
      '探讨从QED到标准模型的建立',
      '解释量子场论的基本概念',
    ],
    resonanceScore: 0.95,
    evolutionHistory: [],
    
    originalExperiment: {
      researcher: 'Richard Feynman',
      year: 1948,
      description: '提出量子电动力学的路径积分表述和费曼图方法',
      methods: ['数学建模', '理论推导', '实验验证'],
    },
    replicationExperiment: {
      researcher: 'Quantum Field Theory Team',
      year: 2026,
      temporalSpan: 78,
    },
    newDiscovery: {
      phenomena: ['希格斯机制的验证', '量子色动力学的深入发展', '量子信息与场论的结合'],
      mechanism: '量子场论描述粒子和场的相互作用，QED是最成功的量子场论之一',
      implications: ['精确验证粒子物理标准模型', '发展量子计算基础', '统一基本力探索'],
    },
    connection: {
      temporalSpan: 78,
      domainBridge: 'Quantum Electrodynamics → Standard Model',
      paradigmShift: "从'旧量子论'到'量子场论'",
      knowledgeGap: '20世纪中叶缺乏超弦理论等更深层理论',
    },
    datmScore: {
      truth: 97,
      goodness: 86,
      beauty: 94,
      intelligence: 98,
    },
  },
];

// ==================== 集成功能 ====================

/**
 * 初始化历史复现胶囊库
 */
export function initializeHistoricalReplicationCapsules(): void {
  console.log('📚 Initializing Historical Replication Capsules...');
  
  HISTORICAL_REPLICATION_CAPSULES.forEach(capsule => {
    mlep.registerCapsule(capsule);
    console.log(`   ✅ ${capsule.id}: ${capsule.domain} (${capsule.connection.temporalSpan}年)`);
  });
  
  const capsules = mlep.getCapsules().filter(c => 
    c.topics.includes('replication')
  );
  console.log(`\n📊 Total Historical Replication Capsules: ${capsules.length}`);
}

/**
 * 创建历史复现主题的融合胶囊
 */
export function fuseHistoricalReplication(
  capsuleId: string,
  modernDomain: string,
  method: FusionMethod = 'interdisciplinary-bridge'
): KnowledgeCapsule {
  const histCapsule = mlep.getCapsule(capsuleId);
  if (!histCapsule) {
    throw new Error(`Historical capsule not found: ${capsuleId}`);
  }
  
  // 查找现代领域胶囊
  const modernCapsules = mlep.searchCapsules(modernDomain);
  if (modernCapsules.length === 0) {
    throw new Error(`Modern domain capsule not found: ${modernDomain}`);
  }
  
  return mlep.fuseCapsules(
    [capsuleId, modernCapsules[0].id],
    method
  );
}

/**
 * 获取历史复现胶囊统计
 */
export function getHistoricalReplicationStats(): {
  count: number;
  avgTemporalSpan: number;
  avgDATMScore: { truth: number; goodness: number; beauty: number; intelligence: number };
  domainDistribution: Map<string, int>;
} {
  const capsules = mlep.getCapsules().filter(c => 
    c.topics.includes('replication')
  ) as HistoricalReplicationCapsule[];
  
  const count = capsules.length;
  const totalSpan = capsules.reduce((sum, c) => sum + c.connection.temporalSpan, 0);
  const avgSpan = totalSpan / count;
  
  const avgTruth = capsules.reduce((sum, c) => sum + c.datmScore.truth, 0) / count;
  const avgGoodness = capsules.reduce((sum, c) => sum + c.datmScore.goodness, 0) / count;
  const avgBeauty = capsules.reduce((sum, c) => sum + c.datmScore.beauty, 0) / count;
  const avgIntelligence = capsules.reduce((sum, c) => sum + c.datmScore.intelligence, 0) / count;
  
  const domainDist = new Map<string, number>();
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
  };
}

/**
 * 预设历史复现融合方案
 */
export const HISTORICAL_REPLICATION_FUSIONS = [
  {
    name: '石墨烯材料的历史与未来',
    historical: 'hist_rep_tour_graphene',
    modern: 'physics-fundamentals',
    method: 'interdisciplinary-bridge' as FusionMethod,
  },
  {
    name: '量子光学的历史演进',
    historical: 'hist_rep_newton_prism',
    modern: 'computer-science',
    method: 'methodology-transfer' as FusionMethod,
  },
  {
    name: '神经科学的百年之旅',
    historical: 'hist_rep_pavlov_conditioning',
    modern: 'computer-science',
    method: 'conceptual-analogy' as FusionMethod,
  },
  {
    name: '生命起源的探索',
    historical: 'hist_rep_pasteur_flask',
    modern: 'computer-science',
    method: 'problem-recontextualization' as FusionMethod,
  },
  {
    name: '遗传学的计算革命',
    historical: 'hist_rep_mendel_peas',
    modern: 'mathematics',
    method: 'methodology-transfer' as FusionMethod,
  },
];

// 导出版本
export const VERSION = '1.4.0';
export const VERSION_INFO = {
  version: VERSION,
  date: '2026-02-15',
  feature: 'Extended Historical Replication Capsules (15 Western Cases)',
  basedOn: 'EDU-MATRIX V1.3',
};

/**
 * 统计信息 - 15个西方案例
 */
export function getWesternCapsuleStats() {
  const capsules = HISTORICAL_REPLICATION_CAPSULES.slice(0, 15);
  
  const count = capsules.length;
  const totalSpan = capsules.reduce((sum, c) => sum + c.connection.temporalSpan, 0);
  const avgSpan = Math.round(totalSpan / count * 10) / 10;
  
  const avgTruth = Math.round(capsules.reduce((sum, c) => sum + c.datmScore.truth, 0) / count * 10) / 10;
  const avgGoodness = Math.round(capsules.reduce((sum, c) => sum + c.datmScore.goodness, 0) / count * 10) / 10;
  const avgBeauty = Math.round(capsules.reduce((sum, c) => sum + c.datmScore.beauty, 0) / count * 10) / 10;
  const avgIntelligence = Math.round(capsules.reduce((sum, c) => sum + c.datmScore.intelligence, 0) / count * 10) / 10;
  
  const avgDATM = Math.round((avgTruth + avgGoodness + avgBeauty + avgIntelligence) / 4 * 10) / 10;
  
  return {
    count,
    avgTemporalSpan: avgSpan,
    avgDATMScore: {
      truth: avgTruth,
      goodness: avgGoodness,
      beauty: avgBeauty,
      intelligence: avgIntelligence,
      overall: avgDATM
    },
    domains: [...new Set(capsules.map(c => c.domain))],
  };
}
