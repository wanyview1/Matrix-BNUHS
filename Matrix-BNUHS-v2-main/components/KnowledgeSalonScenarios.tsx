/**
 * 知识沙龙场景数据
 * EDU-MATRIX V1.3
 * 
 * 为 KnowledgeSalonPanel 提供场景数据
 */

export interface KnowledgeSalonScenario {
  name: string;
  id: string;
  title: string;
  location: string;
  topic: string;
  participants: {
    id: string;
    name: string;
    role: string;
    interests: string[];
    socialContributions: number;
    safetyScore: number;
    position: { x: number; y: number; z: number };
  }[];
  capsuleFusion: {
    method: 'interdisciplinary-bridge' | 'methodology-transfer' | 'conceptual-analogy' | 'problem-recontextualization';
    capsules: string[];
    expectedParadigm: string;
  };
  contextRules: string[];
  learningObjectives: string[];
}

// 20个历史复现胶囊对应的知识沙龙场景
export const KNOWLEDGE_SALON_SCENARIOS_V3: KnowledgeSalonScenario[] = [
  {
    id: 'salon_001',
    name: 'Tour 石墨烯复现实验',
    title: '🔬 历史复现：碳丝灯泡到乱层石墨烯',
    location: 'classroom_301',
    topic: '探讨爱迪生碳丝灯泡如何启发Tour团队发现石墨烯',
    participants: [
      { id: 'p1', name: '张老师', role: 'teacher', interests: ['physics', 'materials'], socialContributions: 0.85, safetyScore: 0.95, position: { x: 150, y: 75, z: 0 }},
      { id: 'p2', name: '李同学', role: 'student', interests: ['nanotech', 'physics'], socialContributions: 0.70, safetyScore: 0.90, position: { x: 145, y: 70, z: 0 }},
    ],
    capsuleFusion: { method: 'interdisciplinary-bridge', capsules: ['physics', 'hist_rep_tour_graphene'], expectedParadigm: 'Physics ↔ Materials: 跨学科桥接' },
    contextRules: ['学术讨论规则', '跨学科思考引导'],
    learningObjectives: ['理解历史复现的科学方法', '认识碳材料的多样性', '培养跨学科思维'],
  },
  {
    id: 'salon_002',
    name: '牛顿棱镜复现实验',
    title: '🌈 历史复现：牛顿棱镜与量子光学',
    location: 'library_main',
    topic: '从牛顿的棱镜实验到现代量子光学的探索',
    participants: [
      { id: 'p3', name: '物理老师', role: 'teacher', interests: ['optics', 'quantum'], socialContributions: 0.88, safetyScore: 0.96, position: { x: 200, y: 100, z: 0 }},
      { id: 'p4', name: '物理课代表', role: 'student', interests: ['quantum-physics', 'optics'], socialContributions: 0.75, safetyScore: 0.92, position: { x: 195, y: 95, z: 0 }},
    ],
    capsuleFusion: { method: 'methodology-transfer', capsules: ['physics', 'hist_rep_newton_prism'], expectedParadigm: 'Classical → Quantum: 方法论迁移' },
    contextRules: ['图书馆安静规则', '科学讨论规范'],
    learningObjectives: ['理解光谱学的历史演进', '认识经典与量子光学的联系'],
  },
  {
    id: 'salon_003',
    name: '巴甫洛夫条件反射实验复现',
    title: '🧠 历史复现：巴甫洛夫条件反射',
    location: 'medical_lab',
    topic: '条件反射的发现如何引领神经可塑性研究',
    participants: [
      { id: 'p5', name: '生物老师', role: 'teacher', interests: ['neuroscience', 'biology'], socialContributions: 0.82, safetyScore: 0.94, position: { x: 180, y: 120, z: 0 }},
      { id: 'p6', name: '生物兴趣小组', role: 'student', interests: ['brain-science', 'psychology'], socialContributions: 0.68, safetyScore: 0.89, position: { x: 175, y: 115, z: 0 }},
    ],
    capsuleFusion: { method: 'conceptual-analogy', capsules: ['biology', 'hist_rep_pavlov_conditioning'], expectedParadigm: 'Behavior → Neuroscience: 概念类比' },
    contextRules: ['实验安全规则', '科学伦理讨论'],
    learningObjectives: ['理解条件反射的神经机制', '认识行为主义到神经科学的转变'],
  },
  {
    id: 'salon_004',
    name: '巴斯德鹅颈瓶实验复现',
    title: '🧬 历史复现：巴斯德鹅颈瓶',
    location: 'science_lab',
    topic: '从巴斯德鹅颈瓶到生命起源研究',
    participants: [
      { id: 'p7', name: '化学老师', role: 'teacher', interests: ['synthetic-biology', 'chemistry'], socialContributions: 0.84, safetyScore: 0.93, position: { x: 160, y: 80, z: 0 }},
      { id: 'p8', name: '化学兴趣小组', role: 'student', interests: ['biochemistry', 'origin-of-life'], socialContributions: 0.70, safetyScore: 0.90, position: { x: 155, y: 75, z: 0 }},
    ],
    capsuleFusion: { method: 'problem-recontextualization', capsules: ['chemistry', 'hist_rep_pasteur_flask'], expectedParadigm: 'Microbiology → Synthetic Biology: 问题重构' },
    contextRules: ['实验室安全规则', '科学伦理思考'],
    learningObjectives: ['理解巴斯德实验的意义', '认识生命起源研究的进展'],
  },
  {
    id: 'salon_005',
    name: '孟德尔豌豆实验复现',
    title: '🔢 历史复现：孟德尔豌豆',
    location: 'library_main',
    topic: '从豌豆实验到现代计算生物学',
    participants: [
      { id: 'p9', name: '数学老师', role: 'teacher', interests: ['statistics', 'computational-biology'], socialContributions: 0.86, safetyScore: 0.95, position: { x: 210, y: 85, z: 0 }},
      { id: 'p10', name: '数学竞赛选手', role: 'student', interests: ['algorithms', 'genetics'], socialContributions: 0.72, safetyScore: 0.91, position: { x: 205, y: 80, z: 0 }},
    ],
    capsuleFusion: { method: 'methodology-transfer', capsules: ['mathematics', 'hist_rep_mendel_peas'], expectedParadigm: 'Math → Computational Biology: 方法论迁移' },
    contextRules: ['图书馆规则', '数据思维引导'],
    learningObjectives: ['理解孟德尔遗传定律', '认识经典遗传学到系统遗传学的演进'],
  },
  {
    id: 'salon_006',
    name: '张衡地动仪复现',
    title: '🔭 历史复现：张衡地动仪',
    location: 'science_lab',
    topic: '从张衡地动仪到现代地震波检测技术',
    participants: [
      { id: 'p11', name: '地理老师', role: 'teacher', interests: ['geophysics', 'seismology'], socialContributions: 0.83, safetyScore: 0.92, position: { x: 170, y: 90, z: 0 }},
      { id: 'p12', name: '地球物理小组', role: 'student', interests: ['earthquake', 'ancient-science'], socialContributions: 0.69, safetyScore: 0.88, position: { x: 165, y: 85, z: 0 }},
    ],
    capsuleFusion: { method: 'conceptual-analogy', capsules: ['physics', 'hist_rep_zhang_heng_seismometer'], expectedParadigm: 'Physics ↔ History: 概念类比' },
    contextRules: ['实验安全规则', '科学史讨论'],
    learningObjectives: ['理解地动仪的工作原理', '认识古代仪器设计的科学价值'],
  },
  {
    id: 'salon_007',
    name: '毕昇活字印刷术复现',
    title: '🖨️ 历史复现：毕昇活字印刷',
    location: 'classroom_302',
    topic: '从毕昇活字印刷到现代3D打印',
    participants: [
      { id: 'p13', name: '技术老师', role: 'teacher', interests: ['manufacturing', '3d-printing'], socialContributions: 0.82, safetyScore: 0.92, position: { x: 150, y: 85, z: 0 }},
      { id: 'p14', name: '创客空间成员', role: 'student', interests: ['3d-printing', 'ancient-invention'], socialContributions: 0.68, safetyScore: 0.89, position: { x: 145, y: 80, z: 0 }},
    ],
    capsuleFusion: { method: 'interdisciplinary-bridge', capsules: ['computer-science', 'hist_rep_bi_sheng_printing'], expectedParadigm: 'Computer ↔ Ancient Tech: 跨学科桥接' },
    contextRules: ['创客空间规则', '技术创新讨论'],
    learningObjectives: ['理解活字印刷的原理', '认识模块化思想的古代起源'],
  },
  {
    id: 'salon_008',
    name: '祖冲之圆周率复现',
    title: '🔢 历史复现：祖冲之圆周率',
    location: 'library_main',
    topic: '从祖冲之割圆术到现代计算数学',
    participants: [
      { id: 'p15', name: '数学老师', role: 'teacher', interests: ['mathematics', 'algorithms'], socialContributions: 0.87, safetyScore: 0.94, position: { x: 220, y: 90, z: 0 }},
      { id: 'p16', name: '数学爱好者', role: 'student', interests: ['pi', 'computation', 'ancient-math'], socialContributions: 0.74, safetyScore: 0.91, position: { x: 215, y: 85, z: 0 }},
    ],
    capsuleFusion: { method: 'methodology-transfer', capsules: ['mathematics', 'hist_rep_zu_chongzhi_pi'], expectedParadigm: 'Math ⇒ Ancient Math: 方法论迁移' },
    contextRules: ['图书馆规则', '数学思维引导'],
    learningObjectives: ['理解割圆术的数学原理', '认识古代数学的高超水平'],
  },
  {
    id: 'salon_009',
    name: '沈括梦溪笔谈复现',
    title: '📚 历史复现：沈括梦溪笔谈',
    location: 'library_main',
    topic: '从《梦溪笔谈》到现代跨学科研究',
    participants: [
      { id: 'p17', name: '科学老师', role: 'teacher', interests: ['natural-science', 'interdisciplinary'], socialContributions: 0.85, safetyScore: 0.94, position: { x: 230, y: 95, z: 0 }},
      { id: 'p18', name: '自然科学爱好者', role: 'student', interests: ['geology', 'botany', 'ancient-science'], socialContributions: 0.72, safetyScore: 0.91, position: { x: 225, y: 90, z: 0 }},
    ],
    capsuleFusion: { method: 'conceptual-analogy', capsules: ['chinese-literature', 'hist_rep_shen_kuo_dream_pool'], expectedParadigm: 'Literature ⇋ Natural Science: 概念类比' },
    contextRules: ['跨学科讨论', '系统性思维培养'],
    learningObjectives: ['理解沈括的跨学科研究方法', '认识系统性观察记录的重要性'],
  },
  {
    id: 'salon_010',
    name: '李时珍本草纲目复现',
    title: '🌿 历史复现：李时珍本草纲目',
    location: 'medical_lab',
    topic: '从《本草纲目》到现代药物研发',
    participants: [
      { id: 'p19', name: '生物/化学老师', role: 'teacher', interests: ['pharmacology', 'herbal-medicine'], socialContributions: 0.84, safetyScore: 0.93, position: { x: 165, y: 125, z: 0 }},
      { id: 'p20', name: '药学兴趣小组', role: 'student', interests: ['drug-discovery', 'traditional-medicine'], socialContributions: 0.70, safetyScore: 0.90, position: { x: 160, y: 120, z: 0 }},
    ],
    capsuleFusion: { method: 'problem-recontextualization', capsules: ['chemistry', 'hist_rep_li_shizhen_medicine'], expectedParadigm: 'Chemistry ⇄ Pharmacology: 问题重构' },
    contextRules: ['实验安全规则', '医学伦理讨论'],
    learningObjectives: ['理解《本草纲目》的分类体系', '认识传统药物的现代价值'],
  },
];

// 导出所有场景
export function getAllScenarios(): KnowledgeSalonScenario[] {
  return KNOWLEDGE_SALON_SCENARIOS_V3;
}

// 统计信息
export function getScenarioStats(): { count: number; avgParticipants: number; domains: string[] } {
  const count = KNOWLEDGE_SALON_SCENARIOS_V3.length;
  const totalParticipants = KNOWLEDGE_SALON_SCENARIOS_V3.reduce((sum, s) => sum + s.participants.length, 0);
  const domains = [...new Set(KNOWLEDGE_SALON_SCENARIOS_V3.map(s => s.location))];
  
  return {
    count,
    avgParticipants: totalParticipants / count,
    domains,
  };
}
