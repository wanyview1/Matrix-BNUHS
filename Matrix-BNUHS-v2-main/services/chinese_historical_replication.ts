/**
 * 中国历史复现知识胶囊
 * EDU-MATRIX V1.3 扩展包
 * 
 * 添加中国历史上的科学发现和技术创新
 * 实现"东西方科学史对话"
 */

import {
  HistoricalReplicationCapsule,
} from './historical_replication';

// ==================== 中国历史复现胶囊 ====================

export const CHINESE_HISTORICAL_REPLICATION_CAPSULES: HistoricalReplicationCapsule[] = [
  // ==================== 原有中国案例 (5个) ====================
  {
    id: 'hist_rep_zhang_heng_seismometer',
    type: 'historical_replication',
    domain: 'Seismology',
    topics: ['zhang-heng', 'seismometer', 'ancient-china', 'earthquake', 'replication'],
    coreConcepts: ['inertial-mechanism', 'lever-system', 'earthquake-direction', 'dragon-head'],
    prompts: [
      '分析张衡地动仪如何检测地震方位',
      '探讨古代仪器与现代地震学的联系',
      '解释惯性定律的历史应用',
    ],
    resonanceScore: 0.94,
    evolutionHistory: [],
    
    originalExperiment: {
      researcher: '张衡',
      year: 132,
      description: '发明世界上第一台地震仪器 - 地动仪，可检测地震方位',
      methods: ['惯性检测', '杠杆放大', '方向指示'],
    },
    replicationExperiment: {
      researcher: '现代地震学研究团队',
      year: 2026,
      temporalSpan: 1894,
    },
    newDiscovery: {
      phenomena: ['地动仪工作原理的力学分析', '杠杆系统的灵敏度优化', '古代工程技术的现代应用'],
      mechanism: '利用惯性原理，地震波到达时内部摆锤晃动触发杠杆，驱动龙口铜珠落入蟾蜍',
      implications: [
        '证明中国古代已有成熟的工程设计思维',
        '为现代地震预警系统提供历史灵感',
        '连接古代仪器与现代传感技术'
      ],
    },
    connection: {
      temporalSpan: 1894,
      domainBridge: '古代仪器 → 现代地震学',
      paradigmShift: "从'经验性地震记录'到'科学性地震检测'",
      knowledgeGap: '汉代缺乏地震波传播理论，无法理解深层机制',
    },
    datmScore: {
      truth: 90,
      goodness: 92,
      beauty: 88,
      intelligence: 91,
    },
  },
  {
    id: 'hist_rep_bi_sheng_printing',
    type: 'historical_replication',
    domain: 'Materials Science',
    topics: ['bi-sheng', 'movable-type', 'printing', 'ancient-china', 'replication'],
    coreConcepts: ['movable-type', 'ceramic-materials', 'mass-production', 'information-dissemination'],
    prompts: [
      '分析毕昇活字印刷对信息传播的影响',
      '探讨陶瓷活字与现代3D打印的联系',
      '解释技术创新的历史传播路径',
    ],
    resonanceScore: 0.93,
    evolutionHistory: [],
    
    originalExperiment: {
      researcher: '毕昇',
      year: 1045,
      description: '发明活字印刷术，使用陶瓷活字实现可重复使用的印刷',
      methods: ['陶瓷烧制', '活字排列', '油墨应用'],
    },
    replicationExperiment: {
      researcher: '数字印刷研究团队',
      year: 2026,
      temporalSpan: 981,
    },
    newDiscovery: {
      phenomena: ['陶瓷活字的材料特性', '活字排列的优化算法', '印刷压力的现代分析'],
      mechanism: '陶瓷活字具有高硬度和稳定性，适合重复印刷；活字排列需考虑字符频率优化',
      implications: [
        '为数字印刷技术提供历史范式',
        '证明模块化思想的古代起源',
        '连接传统工艺与现代制造'
      ],
    },
    connection: {
      temporalSpan: 981,
      domainBridge: '古代印刷 → 数字印刷',
      paradigmShift: "从'手工复制'到'工业化生产'",
      knowledgeGap: '宋代缺乏材料科学理论，无法优化活字材料',
    },
    datmScore: {
      truth: 89,
      goodness: 90,
      beauty: 86,
      intelligence: 88,
    },
  },
  {
    id: 'hist_rep_zu_chongzhi_pi',
    type: 'historical_replication',
    domain: 'Mathematics',
    topics: ['zu-chongzhi', 'pi', 'approximation', 'ancient-china', 'replication'],
    coreConcepts: ['pi-approximation', 'mathematical-precision', 'infinite-series', 'algorithm'],
    prompts: [
      '分析祖冲之计算圆周率的方法',
      '探讨古代数学与现代算法的联系',
      '解释数学精确度的历史演进',
    ],
    resonanceScore: 0.95,
    evolutionHistory: [],
    
    originalExperiment: {
      researcher: '祖冲之',
      year: 5,
      description: '在《缀术》中计算出圆周率在3.1415926和3.1415927之间，比欧洲早1000年',
      methods: ['割圆术', '级数展开', '手工计算'],
    },
    replicationExperiment: {
      researcher: '计算数学研究团队',
      year: 2026,
      temporalSpan: 1500,
    },
    newDiscovery: {
      phenomena: ['祖冲之算法的现代分析', '割圆术与蒙特卡洛方法的联系', '古代计算精度的影响因素'],
      mechanism: '通过不断切割圆内接多边形逼近圆周率，需要极大的计算耐心和精确测量',
      implications: [
        '证明中国古代数学的高超水平',
        '为现代数值计算提供历史参考',
        '展示算法思维的古代起源'
      ],
    },
    connection: {
      temporalSpan: 1500,
      domainBridge: '古代计算 → 现代算法',
      paradigmShift: "从'经验估算'到'精确算法'",
      knowledgeGap: '古代缺乏极限理论，无法证明算法的收敛性',
    },
    datmScore: {
      truth: 94,
      goodness: 91,
      beauty: 92,
      intelligence: 93,
    },
  },
  {
    id: 'hist_rep_shen_kuo_dream_pool',
    type: 'historical_replication',
    domain: 'Natural Science',
    topics: ['shen-kuo', 'dream-pool', 'natural-science', 'ancient-china', 'replication'],
    coreConcepts: ['geology', 'botany', 'astronomy', 'cross-domain-observation'],
    prompts: [
      '分析沈括在《梦溪笔谈》中的跨学科观察',
      '探讨古代博物学与现代科学方法论的联系',
      '解释系统性记录的科学价值',
    ],
    resonanceScore: 0.92,
    evolutionHistory: [],
    
    originalExperiment: {
      researcher: '沈括',
      year: 1086,
      description: '在《梦溪笔谈》中记录了大量跨学科的科学观察，包括地质、气象、生物等',
      methods: ['实地考察', '文献考证', '跨学科类比'],
    },
    replicationExperiment: {
      researcher: '现代科学研究团队',
      year: 2026,
      temporalSpan: 940,
    },
    newDiscovery: {
      phenomena: ['沈括观察的现代科学解释', '古代地质学的价值', '跨学科方法的历史先驱'],
      mechanism: '沈括通过详细的实地观察和记录，发现了许多自然现象的规律，如化石成因、气候变化等',
      implications: [
        '证明中国古代科学方法的系统性',
        '为现代跨学科研究提供历史范例',
        '展示科学记录的重要性'
      ],
    },
    connection: {
      temporalSpan: 940,
      domainBridge: '古代博物学 → 现代跨学科科学',
      paradigmShift: "从'经验描述'到'系统分析'",
      knowledgeGap: '宋代缺乏现代科学理论框架，无法深入解释机制',
    },
    datmScore: {
      truth: 88,
      goodness: 90,
      beauty: 87,
      intelligence: 89,
    },
  },
  {
    id: 'hist_rep_li_shizhen_medicine',
    type: 'historical_replication',
    domain: 'Pharmacology',
    topics: ['li-shizhen', 'compendium', 'medicine', 'ancient-china', 'replication'],
    coreConcepts: ['herbal-medicine', 'drug-classification', 'efficacy-analysis', 'traditional-medicine'],
    prompts: [
      '分析李时珍《本草纲目》的药物分类体系',
      '探讨传统中药与现代药学的联系',
      '解释古代医学的经验性知识',
    ],
    resonanceScore: 0.93,
    evolutionHistory: [],
    
    originalExperiment: {
      researcher: '李时珍',
      year: 1578,
      description: '完成《本草纲目》，收录1892种药物，系统分类并描述其功效',
      methods: ['实地采集', '文献整理', '临床验证'],
    },
    replicationExperiment: {
      researcher: '现代药学研究团队',
      year: 2026,
      temporalSpan: 448,
    },
    newDiscovery: {
      phenomena: ['《本草纲目》药物的现代药理分析', '传统方剂的活性成分', '古代医学知识的科学验证'],
      mechanism: '李时珍通过长期临床实践和文献考证，总结出药物的性味归经和配伍禁忌',
      implications: [
        '为现代药物研发提供历史数据库',
        '证明传统医学的经验价值',
        '连接中医理论与现代科学'
      ],
    },
    connection: {
      temporalSpan: 448,
      domainBridge: '传统医学 → 现代药学',
      paradigmShift: "从'经验医学'到'循证医学'",
      knowledgeGap: '明代缺乏化学分析方法，无法分离活性成分',
    },
    datmScore: {
      truth: 91,
      goodness: 93,
      beauty: 85,
      intelligence: 90,
    },
  },
  
  // ==================== 新增中国案例 (10个) ====================
  
  // 6. 郭守敬与授时历
  {
    id: 'hist_rep_guo_shoujing_calendar',
    type: 'historical_replication',
    domain: 'Astronomy',
    topics: ['guo-shoujing', 'calendar', 'astronomy', 'ancient-china', 'replication'],
    coreConcepts: ['solar-year', 'astronomical-observation', 'calendar-reform', 'solstice'],
    prompts: [
      '分析郭守敬如何编制精确的授时历',
      '探讨中国古代天文学与历法的发展',
      '解释古代观测技术的精度',
    ],
    resonanceScore: 0.94,
    evolutionHistory: [],
    
    originalExperiment: {
      researcher: '郭守敬',
      year: 1280,
      description: '编制《授时历》，确定一年长度为365.2425天，与现代值仅差26秒',
      methods: ['天文观测', '圭表测影', '数学计算'],
    },
    replicationExperiment: {
      researcher: '现代天文历法研究团队',
      year: 2026,
      temporalSpan: 746,
    },
    newDiscovery: {
      phenomena: ['古代天文观测数据的现代验证', '历法改革的科学基础', '中国古代天文学的独特贡献'],
      mechanism: '通过精确测量冬至时刻和回归年长度，结合数学插值方法计算太阳位置',
      implications: [
        '证明中国古代天文学的世界领先水平',
        '为现代历法研究提供历史参考',
        '展示古代科学仪器的精度'
      ],
    },
    connection: {
      temporalSpan: 746,
      domainBridge: '古代历法 → 现代天体力学',
      paradigmShift: "从'经验历法'到'科学历法'",
      knowledgeGap: '元代缺乏天体物理学理论，无法解释历法背后的物理机制',
    },
    datmScore: {
      truth: 93,
      goodness: 90,
      beauty: 89,
      intelligence: 92,
    },
  },
  
  // 7. 李冰与都江堰
  {
    id: 'hist_rep_li_bing_dam',
    type: 'historical_replication',
    domain: 'Hydraulic Engineering',
    topics: ['li-bing', 'damming', 'irrigation', 'ancient-china', 'replication'],
    coreConcepts: ['water-diversion', 'flood-control', 'silt-management', 'hydraulic-system'],
    prompts: [
      '分析李冰如何设计都江堰的水利系统',
      '探讨古代水利工程与现代水利学的联系',
      '解释鱼嘴分水工程的科学原理',
    ],
    resonanceScore: 0.95,
    evolutionHistory: [],
    
    originalExperiment: {
      researcher: '李冰',
      year: 256,
      description: '修建都江堰水利工程，实现防洪、灌溉、航运的综合利用',
      methods: ['地形勘察', '水流观测', '工程设计'],
    },
    replicationExperiment: {
      researcher: '现代水利工程研究团队',
      year: 2026,
      temporalSpan: 2282,
    },
    newDiscovery: {
      phenomena: ['都江堰的现代流体力学分析', '古代水利工程的可持续性', '生态友好型水利设计的源头'],
      mechanism: '通过鱼嘴分水、宝瓶口引水、飞沙堰排沙的科学设计，实现水资源的合理分配',
      implications: [
        '为现代水利工程提供历史范例',
        '展示人与自然和谐共处的工程理念',
        '证明古代中国工程技术的高超水平'
      ],
    },
    connection: {
      temporalSpan: 2282,
      domainBridge: '古代水利 → 现代水力学',
      paradigmShift: "从'经验治水'到'科学水利'",
      knowledgeGap: '战国时期缺乏流体力学理论，无法系统解释水流规律',
    },
    datmScore: {
      truth: 92,
      goodness: 95,
      beauty: 91,
      intelligence: 93,
    },
  },
  
  // 8. 张仲景与伤寒论
  {
    id: 'hist_rep_zhang_zhongjing_medicine',
    type: 'historical_replication',
    domain: 'Medicine',
    topics: ['zhang-zhongjing', 'shanghan-lun', 'traditional-medicine', 'ancient-china', 'replication'],
    coreConcepts: ['syndrome-differentiation', 'herbal-formula', 'pathogenic-factors', 'treatment-principle'],
    prompts: [
      '分析张仲景如何在《伤寒论》中建立辨证论治体系',
      '探讨中医理论与现代医学的联系',
      '解释经方的现代药理研究',
    ],
    resonanceScore: 0.94,
    evolutionHistory: [],
    
    originalExperiment: {
      researcher: '张仲景',
      year: 210,
      description: '著《伤寒杂病论》，创立辨证论治体系，被尊为"医圣"',
      methods: ['临床观察', '方剂总结', '理论归纳'],
    },
    replicationExperiment: {
      researcher: '中西医结合研究团队',
      year: 2026,
      temporalSpan: 1816,
    },
    newDiscovery: {
      phenomena: ['伤寒论方剂的现代药理验证', '辨证论治的科学内涵', '经方在现代临床中的应用'],
      mechanism: '通过辨别疾病的不同证型，采用相应的方剂治疗，体现个体化医疗思想',
      implications: [
        '为现代个体化医疗提供历史范式',
        '推动中药现代化研究',
        '连接中医理论与循证医学'
      ],
    },
    connection: {
      temporalSpan: 1816,
      domainBridge: '传统医学 → 现代循证医学',
      paradigmShift: "从'经验医学'到'系统医学'",
      knowledgeGap: '汉代缺乏现代病理学和药理学知识，无法解释方剂的作用机制',
    },
    datmScore: {
      truth: 90,
      goodness: 95,
      beauty: 84,
      intelligence: 91,
    },
  },
  
  // 9. 蔡伦与造纸术
  {
    id: 'hist_rep_cai_lun_paper',
    type: 'historical_replication',
    domain: 'Materials Science',
    topics: ['cai-lun', 'paper-making', 'materials', 'ancient-china', 'replication'],
    coreConcepts: ['fiber-processing', 'papermaking', 'information-carrier', 'material-fabrication'],
    prompts: [
      '分析蔡伦如何改进造纸技术',
      '探讨造纸术对人类文明传播的影响',
      '解释纸张材料特性的现代研究',
    ],
    resonanceScore: 0.94,
    evolutionHistory: [],
    
    originalExperiment: {
      researcher: '蔡伦',
      year: 105,
      description: '改进造纸工艺，使用树皮、麻头、破布等原料制成纸张',
      methods: ['原料处理', '纤维分离', '纸张成型'],
    },
    replicationExperiment: {
      researcher: '功能材料研究团队',
      year: 2026,
      temporalSpan: 1921,
    },
    newDiscovery: {
      phenomena: ['古代纸张的现代材料分析', '纸基功能材料的发展', '传统造纸工艺的环保价值'],
      mechanism: '通过机械和化学方法处理植物纤维，使其分散在水中，再经抄造、干燥形成纸张',
      implications: [
        '推动信息传播和知识积累',
        '为功能纸材料提供历史借鉴',
        '展示古代材料加工技术水平'
      ],
    },
    connection: {
      temporalSpan: 1921,
      domainBridge: '传统造纸 → 功能材料',
      paradigmShift: "从'天然材料'到'人造材料'",
      knowledgeGap: '汉代缺乏高分子化学知识，无法理解纤维的分子结构',
    },
    datmScore: {
      truth: 91,
      goodness: 93,
      beauty: 85,
      intelligence: 89,
    },
  },
  
  // 10. 苏颂与水运仪象台
  {
    id: 'hist_rep_su_song_astronomy',
    type: 'historical_replication',
    domain: 'Astronomy',
    topics: ['su-song', 'water-clock', 'astronomical-instrument', 'ancient-china', 'replication'],
    coreConcepts: ['water-clock', 'escapement', 'astronomical-observation', 'mechanical-engineering'],
    prompts: [
      '分析苏颂如何建造水运仪象台',
      '探讨古代天文仪器与现代时钟的演进',
      '解释擒纵机构的原理',
    ],
    resonanceScore: 0.93,
    evolutionHistory: [],
    
    originalExperiment: {
      researcher: '苏颂',
      year: 1088,
      description: '建造水运仪象台，实现天文观测、报时、演示天体运行的功能',
      methods: ['机械设计', '水力驱动', '天文校准'],
    },
    replicationExperiment: {
      researcher: '精密机械研究团队',
      year: 2026,
      temporalSpan: 938,
    },
    newDiscovery: {
      phenomena: ['水运仪象台的现代复原研究', '古代擒纵机构的原理分析', '机械钟表的历史渊源'],
      mechanism: '通过水力驱动和擒纵机构控制齿轮转速，实现精确的计时和天体运动演示',
      implications: [
        '证明中国古代机械工程的先进水平',
        '为钟表史研究提供实物证据',
        '展示科技史的多元发展路径'
      ],
    },
    connection: {
      temporalSpan: 938,
      domainBridge: '古代天文仪器 → 精密机械',
      paradigmShift: "从'经验计时'到'机械计时'",
      knowledgeGap: '宋代缺乏材料力学和机械设计理论，无法优化机构效率',
    },
    datmScore: {
      truth: 89,
      goodness: 88,
      beauty: 90,
      intelligence: 92,
    },
  },
  
  // 11. 刘徽与九章算术
  {
    id: 'hist_rep_liu_hui_mathematics',
    type: 'historical_replication',
    domain: 'Mathematics',
    topics: ['liu-hui', 'nine-chapters', 'algorithm', 'ancient-china', 'replication'],
    coreConcepts: ['pi-calculation', 'geometric-proof', 'linear-equation', 'algorithm-design'],
    prompts: [
      '分析刘徽如何为《九章算术》作注',
      '探讨古代数学算法与现代计算机科学的联系',
      '解释割圆术的数学意义',
    ],
    resonanceScore: 0.95,
    evolutionHistory: [],
    
    originalExperiment: {
      researcher: '刘徽',
      year: 263,
      description: '为《九章算术》作注，提出割圆术计算圆周率，引入极限思想',
      methods: ['几何证明', '算法设计', '极限思想'],
    },
    replicationExperiment: {
      researcher: '计算数学研究团队',
      year: 2026,
      temporalSpan: 1763,
    },
    newDiscovery: {
      phenomena: ['刘徽数学思想的现代诠释', '古代算法的计算机实现', '极限思想的历史贡献'],
      mechanism: '通过不断切割圆的内接正多边形，边数越多越接近圆，体现了极限思想',
      implications: [
        '证明中国古代数学的理论深度',
        '为算法设计提供历史参考',
        '展示古代数学家的逻辑思维'
      ],
    },
    connection: {
      temporalSpan: 1763,
      domainBridge: '古代算法 → 计算数学',
      paradigmShift: "从'计算技巧'到'数学证明'",
      knowledgeGap: '三国时期缺乏严格的极限理论，无法建立完善的微积分体系',
    },
    datmScore: {
      truth: 95,
      goodness: 91,
      beauty: 93,
      intelligence: 96,
    },
  },
  
  // 12. 黄道婆与纺织技术
  {
    id: 'hist_rep_huang_daopo_textile',
    type: 'historical_replication',
    domain: 'Materials Engineering',
    topics: ['huang-daopo', 'spinning', 'textile', 'ancient-china', 'replication'],
    coreConcepts: ['fiber-spinning', 'weaving', 'textile-machinery', 'cotton-processing'],
    prompts: [
      '分析黄道婆如何改进纺织技术',
      '探讨古代纺织技术与现代纺织工业的联系',
      '解释纺织机械的演进历程',
    ],
    resonanceScore: 0.91,
    evolutionHistory: [],
    
    originalExperiment: {
      researcher: '黄道婆',
      year: 1300,
      description: '改进棉纺织技术，发明脚踏纺车和搅车，提高纺织效率',
      methods: ['工具改进', '工艺创新', '技术传授'],
    },
    replicationExperiment: {
      researcher: '现代纺织工程研究团队',
      year: 2026,
      temporalSpan: 726,
    },
    newDiscovery: {
      phenomena: ['古代纺织工具的力学分析', '传统纺织工艺的价值', '手工纺织与机械纺织的比较'],
      mechanism: '通过改进纺车和织机的机械结构，提高纤维的加捻和织造效率',
      implications: [
        '推动中国纺织业的发展',
        '为现代纺织机械提供历史借鉴',
        '展示技术传承和创新精神'
      ],
    },
    connection: {
      temporalSpan: 726,
      domainBridge: '传统纺织 → 现代纺织工业',
      paradigmShift: "从'手工纺织'到'机械化生产'",
      knowledgeGap: '元代缺乏机械工程理论，无法系统优化机械设计',
    },
    datmScore: {
      truth: 87,
      goodness: 92,
      beauty: 83,
      intelligence: 86,
    },
  },
  
  // 13. 沈括与石油命名
  {
    id: 'hist_rep_shen_kuo_petroleum',
    type: 'historical_replication',
    domain: 'Energy Science',
    topics: ['shen-kuo', 'petroleum', 'natural-resource', 'ancient-china', 'replication'],
    coreConcepts: ['oil-exploration', 'energy-resource', 'chemical-utilization', 'mineralogy'],
    prompts: [
      '分析沈括如何描述石油及其用途',
      '探讨石油从发现到现代能源的历程',
      '解释石油化工的发展',
    ],
    resonanceScore: 0.90,
    evolutionHistory: [],
    
    originalExperiment: {
      researcher: '沈括',
      year: 1080,
      description: '在《梦溪笔谈》中首次使用"石油"一词，并描述其燃烧特性',
      methods: ['实地考察', '观察记录', '应用实验'],
    },
    replicationExperiment: {
      researcher: '新能源研究团队',
      year: 2026,
      temporalSpan: 946,
    },
    newDiscovery: {
      phenomena: ['古代石油记载的现代验证', '石油化工产品的种类', '新能源转型的挑战'],
      mechanism: '石油是古代海洋生物遗骸经过复杂地质过程形成的化石燃料，可提炼多种化工产品',
      implications: [
        '证明中国古代对自然资源的认识',
        '为能源史研究提供历史资料',
        '警示化石能源的环境问题'
      ],
    },
    connection: {
      temporalSpan: 946,
      domainBridge: '古代发现 → 现代能源工业',
      paradigmShift: "从'燃料使用'到'石油化工'",
      knowledgeGap: '宋代缺乏有机化学知识，无法理解石油的化学组成',
    },
    datmScore: {
      truth: 88,
      goodness: 85,
      beauty: 80,
      intelligence: 87,
    },
  },
  
  // 14. 宋应星与天工开物
  {
    id: 'hist_rep_song_yingxing_encyclopedia',
    type: 'historical_replication',
    domain: 'Engineering',
    topics: ['song-yingxing', 'tiangong-kaiwu', 'technology', 'ancient-china', 'replication'],
    coreConcepts: ['manufacturing-process', 'agricultural-technology', 'metallurgy', 'ceramics'],
    prompts: [
      '分析宋应星在《天工开物》中记载的技术',
      '探讨古代技术百科全书与现代工程学的联系',
      '解释传统工艺的科学原理',
    ],
    resonanceScore: 0.93,
    evolutionHistory: [],
    
    originalExperiment: {
      researcher: '宋应星',
      year: 1637,
      description: '完成《天工开物》，记载农业和手工业生产技术，被誉为"中国17世纪的工艺百科全书"',
      methods: ['实地调查', '工艺记录', '技术总结'],
    },
    replicationExperiment: {
      researcher: '工业史研究团队',
      year: 2026,
      temporalSpan: 389,
    },
    newDiscovery: {
      phenomena: ['《天工开物》记载技术的现代复原', '传统工艺的科学原理', '工业革命前的中国技术水平'],
      mechanism: '通过详细的文字描述和插图，记录各种生产过程的操作方法和注意事项',
      implications: [
        '为技术史研究提供珍贵资料',
        '为传统工艺保护提供依据',
        '展示古代中国的技术成就'
      ],
    },
    connection: {
      temporalSpan: 389,
      domainBridge: '传统工艺 → 现代工程学',
      paradigmShift: "从'经验传承'到'系统记录'",
      knowledgeGap: '明代缺乏科学实验方法，无法深入解释工艺原理',
    },
    datmScore: {
      truth: 90,
      goodness: 91,
      beauty: 85,
      intelligence: 89,
    },
  },
  
  // 15. 徐光启与农政全书
  {
    id: 'hist_rep_xu_guangqi_agriculture',
    type: 'historical_replication',
    domain: 'Agricultural Science',
    topics: ['xu-guangqi', 'agricultural-policy', 'farming', 'ancient-china', 'replication'],
    coreConcepts: ['crop-rotation', 'soil-management', 'irrigation', 'agricultural-engineering'],
    prompts: [
      '分析徐光启如何在《农政全书》中总结农业技术',
      '探讨古代农业科学与现代农学的联系',
      '解释传统农业的生态智慧',
    ],
    resonanceScore: 0.92,
    evolutionHistory: [],
    
    originalExperiment: {
      researcher: '徐光启',
      year: 1639,
      description: '编撰《农政全书》，系统总结中国古代农业技术和政策',
      methods: ['文献整理', '实地考察', '技术总结'],
    },
    replicationExperiment: {
      researcher: '现代农业研究团队',
      year: 2026,
      temporalSpan: 387,
    },
    newDiscovery: {
      phenomena: ['《农政全书》记载技术的现代验证', '传统农业的可持续性', '古代农业政策的智慧'],
      mechanism: '通过总结历代农业经验，提出因地制宜的农业政策和先进的农业技术',
      implications: [
        '为现代农业提供历史参考',
        '展示传统农业的生态价值',
        '推动农业遗产保护'
      ],
    },
    connection: {
      temporalSpan: 387,
      domainBridge: '传统农业 → 现代农业',
      paradigmShift: "从'经验农业'到'科学农业'",
      knowledgeGap: '明代缺乏植物生理学知识，无法深入解释农业技术原理',
    },
    datmScore: {
      truth: 89,
      goodness: 93,
      beauty: 84,
      intelligence: 88,
    },
  },
];


// ==================== 集成函数 ====================

/**
 * 获取所有历史复现胶囊（包括中国案例）
 */
export function getAllHistoricalReplicationCapsules(): HistoricalReplicationCapsule[] {
  // 注意：这里需要从主模块导入原有的胶囊
  // 由于模块循环依赖，这里返回扩展胶囊
  return CHINESE_HISTORICAL_REPLICATION_CAPSULES;
}

/**
 * 获取中国历史复现胶囊统计
 */
export function getChineseCapsuleStats(): {
  count: number;
  avgTemporalSpan: number;
  avgDATMScore: { truth: number; goodness: number; beauty: number; intelligence: number };
  domainDistribution: Map<string, number>;
} {
  const capsules = CHINESE_HISTORICAL_REPLICATION_CAPSULES;
  
  const count = capsules.length;
  const totalSpan = capsules.reduce((sum, c) => sum + c.connection.temporalSpan, 0);
  const avgSpan = Math.round(totalSpan / count * 10) / 10;
  
  const avgTruth = Math.round(capsules.reduce((sum, c) => sum + c.datmScore.truth, 0) / count * 10) / 10;
  const avgGoodness = Math.round(capsules.reduce((sum, c) => sum + c.datmScore.goodness, 0) / count * 10) / 10;
  const avgBeauty = Math.round(capsules.reduce((sum, c) => sum + c.datmScore.beauty, 0) / count * 10) / 10;
  const avgIntelligence = Math.round(capsules.reduce((sum, c) => sum + c.datmScore.intelligence, 0) / count * 10) / 10;
  
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
 * 获取15个中国案例的详细统计
 */
export function getChineseCapsuleDetailedStats() {
  const capsules = CHINESE_HISTORICAL_REPLICATION_CAPSULES;
  
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

/**
 * 东西方对比分析
 */
export function compareEastWest(): {
  easternAvgSpan: number;
  westernAvgSpan: number;
  easternAvgDATM: { truth: number; goodness: number; beauty: number; intelligence: number };
  westernAvgDATM: { truth: number; goodness: number; beauty: number; intelligence: number };
  insights: string[];
} {
  const easternStats = getChineseCapsuleStats();
  const easternDetailed = getChineseCapsuleDetailedStats();
  
  // 西方统计数据（基于15个西方案例）
  const westernStats = {
    count: 15,
    avgTemporalSpan: 185.5,
    avgDATMScore: {
      truth: 94.3,
      goodness: 90.5,
      beauty: 88.9,
      intelligence: 94.2,
      overall: 92.0
    },
    domains: ['Materials Science', 'Physics', 'Neuroscience', 'Synthetic Biology', 'Computational Biology', 
              'Nuclear Physics', 'Medicine', 'Biology', 'Biochemistry', 'Chemistry', 'Astronomy', 'Nutrition Science']
  };
  
  return {
    easternAvgSpan: easternDetailed.avgTemporalSpan,
    westernAvgSpan: westernStats.avgTemporalSpan,
    easternAvgDATM: easternDetailed.avgDATMScore,
    westernAvgDATM: westernStats.avgDATMScore,
    insights: [
      `中国历史案例平均时间跨度更长（${easternDetailed.avgTemporalSpan}年 vs ${westernStats.avgTemporalSpan}年）`,
      `东西方DATM综合评分相近（中国${easternDetailed.avgDATMScore.overall} vs 西方${westernStats.avgDATMScore.overall}）`,
      '中国案例在Goodness评分略高，反映文化价值传承',
      '西方案例在Intelligence评分略高，反映创新突破',
      `共覆盖${easternStats.domains.length + westernStats.domains.length}个学科领域`,
      '两者互补，构成完整的科学史知识图谱',
    ],
  };
}

// 导出版本
export const VERSION = '1.1.0';
export const VERSION_INFO = {
  version: VERSION,
  date: '2026-02-15',
  feature: 'Extended Chinese Historical Replication Capsules (15 Cases)',
  basedOn: 'EDU-MATRIX V1.3',
};
