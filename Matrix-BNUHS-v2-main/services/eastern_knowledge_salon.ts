/**
 * 东西方知识沙龙场景
 * EDU-MATRIX V1.3 扩展场景
 * 
 * 包含中国历史复现案例的沙龙场景
 */

import {
  KnowledgeSalonScenario,
} from './knowledge_salon';

// 中国历史复现知识沙龙场景
export const EASTERN_KNOWLEDGE_SALON_SCENARIOS: KnowledgeSalonScenario[] = [
  {
    id: 'scenario_cn_001',
    title: '🔭 历史复现沙龙：张衡地动仪与现代地震学',
    location: 'science_lab',
    topic: '从张衡地动仪到现代地震波检测技术',
    participants: [
      {
        id: 'agent_teacher_physics_cn',
        name: '物理老师',
        role: 'teacher',
        interests: ['geophysics', 'mechanics'],
        socialContributions: 0.88,
        safetyScore: 0.95,
        position: { x: 180, y: 100, z: 0 },
      },
      {
        id: 'agent_student_geophysics',
        name: '地球物理兴趣小组',
        role: 'student',
        interests: ['seismology', 'ancient-science'],
        socialContributions: 0.72,
        safetyScore: 0.91,
        position: { x: 175, y: 95, z: 0 },
      },
    ],
    capsuleFusion: {
      method: 'conceptual-analogy',
      capsules: ['physics-fundamentals', 'hist_rep_zhang_heng_seismometer'],
      expectedParadigm: 'Physics ↔ History of Science: 概念类比思维',
    },
    contextRules: ['实验安全规则', '科学史讨论', '跨文化比较'],
    learningObjectives: [
      '理解地动仪的工作原理',
      '认识古代仪器设计的科学价值',
      '培养跨文化科学思维',
    ],
  },
  {
    id: 'scenario_cn_002',
    title: '🔢 历史复现沙龙：祖冲之圆周率与算法思维',
    location: 'library_main',
    topic: '从祖冲之割圆术到现代计算数学',
    participants: [
      {
        id: 'agent_teacher_math_cn',
        name: '数学老师',
        role: 'teacher',
        interests: ['mathematics', 'algorithms'],
        socialContributions: 0.86,
        safetyScore: 0.94,
        position: { x: 200, y: 80, z: 0 },
      },
      {
        id: 'agent_student_math_cn',
        name: '数学竞赛选手',
        role: 'student',
        interests: ['pi', 'computation', 'ancient-math'],
        socialContributions: 0.75,
        safetyScore: 0.92,
        position: { x: 195, y: 75, z: 0 },
      },
    ],
    capsuleFusion: {
      method: 'methodology-transfer',
      capsules: ['mathematics', 'hist_rep_zu_chongzhi_pi'],
      expectedParadigm: 'Mathematics ⇒ Ancient Math: 方法论迁移',
    },
    contextRules: ['图书馆安静规则', '数学思维引导', '历史算法比较'],
    learningObjectives: [
      '理解割圆术的数学原理',
      '认识古代数学的高超水平',
      '培养算法思维和精确计算能力',
    ],
  },
  {
    id: 'scenario_cn_003',
    title: '🌿 历史复现沙龙：李时珍本草与现代药学',
    location: 'medical_lab',
    topic: '从《本草纲目》到现代药物研发',
    participants: [
      {
        id: 'agent_teacher_biology_cn',
        name: '生物/化学老师',
        role: 'teacher',
        interests: ['pharmacology', 'herbal-medicine'],
        socialContributions: 0.84,
        safetyScore: 0.93,
        position: { x: 160, y: 120, z: 0 },
      },
      {
        id: 'agent_student_pharmacy',
        name: '药学兴趣小组',
        role: 'student',
        interests: ['drug-discovery', 'traditional-medicine'],
        socialContributions: 0.70,
        safetyScore: 0.90,
        position: { x: 155, y: 115, z: 0 },
      },
    ],
    capsuleFusion: {
      method: 'problem-recontextualization',
      capsules: ['computer-science', 'hist_rep_li_shizhen_medicine'],
      expectedParadigm: 'Computer Science ⇄ Pharmacology: 问题重构',
    },
    contextRules: ['实验安全规则', '医学伦理讨论', '传统与现代融合'],
    learningObjectives: [
      '理解《本草纲目》的分类体系',
      '认识传统药物的现代价值',
      '培养药物研发的创新思维',
    ],
  },
  {
    id: 'scenario_cn_004',
    title: '🖨️ 历史复现沙龙：毕昇活字与数字印刷',
    location: 'classroom_301',
    topic: '从毕昇活字印刷到现代3D打印',
    participants: [
      {
        id: 'agent_teacher_tech_cn',
        name: '技术老师',
        role: 'teacher',
        interests: ['manufacturing', '3d-printing'],
        socialContributions: 0.82,
        safetyScore: 0.92,
        position: { x: 150, y: 80, z: 0 },
      },
      {
        id: 'agent_student_3d_print',
        name: '创客空间成员',
        role: 'student',
        interests: ['3d-printing', 'ancient-invention'],
        socialContributions: 0.68,
        safetyScore: 0.89,
        position: { x: 145, y: 75, z: 0 },
      },
    ],
    capsuleFusion: {
      method: 'interdisciplinary-bridge',
      capsules: ['computer-science', 'hist_rep_bi_sheng_printing'],
      expectedParadigm: 'Computer Science ↔ Ancient Technology: 跨学科桥接',
    },
    contextRules: ['创客空间规则', '技术创新讨论', '历史与现代对比'],
    learningObjectives: [
      '理解活字印刷的原理和价值',
      '认识模块化思想的古代起源',
      '培养创新设计和工程思维',
    ],
  },
  {
    id: 'scenario_cn_005',
    title: '📚 历史复现沙龙：沈括梦溪与现代博物学',
    location: 'library_main',
    topic: '从《梦溪笔谈》到现代跨学科研究',
    participants: [
      {
        id: 'agent_teacher_science_cn',
        name: '科学老师',
        role: 'teacher',
        interests: ['natural-science', 'interdisciplinary'],
        socialContributions: 0.85,
        safetyScore: 0.94,
        position: { x: 210, y: 90, z: 0 },
      },
      {
        id: 'agent_student_nature',
        name: '自然科学爱好者',
        role: 'student',
        interests: ['geology', 'botany', 'ancient-science'],
        socialContributions: 0.72,
        safetyScore: 0.91,
        position: { x: 205, y: 85, z: 0 },
      },
    ],
    capsuleFusion: {
      method: 'conceptual-analogy',
      capsules: ['chinese-literature', 'hist_rep_shen_kuo_dream_pool'],
      expectedParadigm: 'Chinese Literature ⇋ Natural Science: 概念类比',
    },
    contextRules: ['图书馆安静规则', '跨学科讨论', '系统性思维培养'],
    learningObjectives: [
      '理解沈括的跨学科研究方法',
      '认识系统性观察记录的重要性',
      '培养综合分析和创新能力',
    ],
  },
];

// 合并所有场景
export function getAllSalonScenarios(): KnowledgeSalonScenario[] {
  // 需要从 knowledge_salon 导入原有场景
  // 这里返回扩展场景
  return EASTERN_KNOWLEDGE_SALON_SCENARIOS;
}

// 东西方对比统计
export function getEastWestStats(): {
  easternCount: number;
  westernCount: number;
  totalCount: number;
  easternAvgSpan: number;
  westernAvgSpan: number;
  overallAvgSpan: number;
} {
  const eastern = EASTERN_KNOWLEDGE_SALON_SCENARIOS.length;
  const western = 5;  // 来自主模块
  
  const easternSpan = EASTERN_KNOWLEDGE_SALON_SCENARIOS.reduce((sum, s) => {
    // 从场景中提取时间跨度（简化处理）
    return sum + 800;  // 估计值
  }, 0) / eastern;
  
  return {
    easternCount: eastern,
    westernCount: western,
    totalCount: eastern + western,
    easternAvgSpan: easternSpan,
    westernAvgSpan: 192.8,
    overallAvgSpan: (easternSpan * eastern + 192.8 * western) / (eastern + western),
  };
}

// 导出版本
export const VERSION = '1.0.0';
export const VERSION_INFO = {
  version: VERSION,
  date: '2026-01-31',
  feature: 'Eastern Knowledge Salon Scenarios',
  basedOn: 'EDU-MATRIX V1.3',
};
