/**
 * 知识沙龙场景示例
 * EDU-MATRIX V1.3 应用场景
 * 
 * 在数字孪生校园中开展知识沙龙讨论
 */

import {
  injectContext,
  LOCATION_ZONES,
  type SpatialCoordinate,
} from './ecie';

import {
  fuseKnowledgeCapsules,
  getGlobalResonance,
  KNOWLEDGE_CAPSULES,
  type FusionMethod,
} from './mlep';

import {
  registerAgent,
  connectAgents,
  initializeSampleNetwork,
  getGraphMetrics,
  ROLE_TOPOLOGIES,
  type AgentNode,
} from './stam';

import {
  HISTORICAL_REPLICATION_CAPSULES,
  fuseHistoricalReplication,
  getHistoricalReplicationStats,
  type HistoricalReplicationCapsule,
} from './historical_replication';

// ==================== 场景定义 ====================

export interface KnowledgeSalonScenario {
  id: string;
  title: string;
  location: string;
  topic: string;
  participants: AgentNode[];
  capsuleFusion: {
    method: FusionMethod;
    capsules: string[];
    expectedParadigm: string;
  };
  contextRules: string[];
  learningObjectives: string[];
}

// ==================== 预设场景 ====================

export const KNOWLEDGE_SALON_SCENARIOS: KnowledgeSalonScenario[] = [
  {
    id: 'scenario_001',
    title: '🔬 历史复现沙龙：碳丝到石墨烯的跨越',
    location: 'classroom_301',  // 教室
    topic: '探讨爱迪生碳丝灯泡如何启发 Tour 团队发现石墨烯',
    participants: [
      {
        id: 'agent_teacher',
        name: '张老师',
        role: 'teacher',
        interests: ['physics', 'materials-science'],
        socialContributions: 0.85,
        safetyScore: 0.95,
        position: { x: 150, y: 75, z: 0 },
      },
      {
        id: 'agent_student_1',
        name: '李同学',
        role: 'student',
        interests: ['nanotechnology', 'physics'],
        socialContributions: 0.70,
        safetyScore: 0.90,
        position: { x: 145, y: 70, z: 0 },
      },
      {
        id: 'agent_student_2',
        name: '王同学',
        role: 'student',
        interests: ['history', 'science'],
        socialContributions: 0.65,
        safetyScore: 0.88,
        position: { x: 155, y: 80, z: 0 },
      },
    ],
    capsuleFusion: {
      method: 'interdisciplinary-bridge',
      capsules: ['physics-fundamentals', 'hist_rep_tour_graphene'],
      expectedParadigm: 'Physics ↔ Materials Science: 跨学科桥接新范式',
    },
    contextRules: ['学术讨论规则', '跨学科思考引导', '历史与当代关联'],
    learningObjectives: [
      '理解历史复现的科学方法',
      '认识碳材料的多样性',
      '培养跨学科思维能力',
    ],
  },
  {
    id: 'scenario_002',
    title: '🌈 历史复现沙龙：牛顿棱镜与量子光学',
    location: 'library_main',  // 图书馆
    topic: '从牛顿的棱镜实验到现代量子光学的探索',
    participants: [
      {
        id: 'agent_teacher_physics',
        name: '物理老师',
        role: 'teacher',
        interests: ['optics', 'quantum-mechanics'],
        socialContributions: 0.88,
        safetyScore: 0.96,
        position: { x: 200, y: 100, z: 0 },
      },
      {
        id: 'agent_student_physics',
        name: '物理课代表',
        role: 'student',
        interests: ['quantum-physics', 'optics'],
        socialContributions: 0.75,
        safetyScore: 0.92,
        position: { x: 195, y: 95, z: 0 },
      },
    ],
    capsuleFusion: {
      method: 'methodology-transfer',
      capsules: ['computer-science', 'hist_rep_newton_prism'],
      expectedParadigm: 'Computer Science ⇒ Physics: 方法论迁移',
    },
    contextRules: ['图书馆安静规则', '科学讨论规范', '量子思维引导'],
    learningObjectives: [
      '理解光谱学的历史演进',
      '认识经典光学与量子光学的联系',
      '了解科学方法的发展',
    ],
  },
  {
    id: 'scenario_003',
    title: '🧠 历史复现沙龙：从巴甫洛夫到神经科学',
    location: 'medical_lab',  // 医学实验室（虚拟）
    topic: '条件反射的发现如何引领神经可塑性研究',
    participants: [
      {
        id: 'agent_biology_teacher',
        name: '生物老师',
        role: 'teacher',
        interests: ['neuroscience', 'biology'],
        socialContributions: 0.82,
        safetyScore: 0.94,
        position: { x: 180, y: 120, z: 0 },
      },
      {
        id: 'agent_student_bio',
        name: '生物兴趣小组',
        role: 'student',
        interests: ['brain-science', 'psychology'],
        socialContributions: 0.68,
        safetyScore: 0.89,
        position: { x: 175, y: 115, z: 0 },
      },
    ],
    capsuleFusion: {
      method: 'conceptual-analogy',
      capsules: ['chinese-literature', 'hist_rep_pavlov_conditioning'],
      expectedParadigm: 'Chinese Literature ⇋ Neuroscience: 概念类比思维',
    },
    contextRules: ['实验安全规则', '科学伦理讨论', '跨学科思考'],
    learningObjectives: [
      '理解条件反射的神经机制',
      '认识行为主义到认知神经科学的转变',
      '培养科学探究精神',
    ],
  },
  {
    id: 'scenario_004',
    title: '🧬 历史复现沙龙：孟德尔豌豆与基因网络',
    location: 'science_lab',  // 科学实验室
    topic: '从豌豆实验到现代计算生物学',
    participants: [
      {
        id: 'agent_math_teacher',
        name: '数学老师',
        role: 'teacher',
        interests: ['statistics', 'computational-biology'],
        socialContributions: 0.86,
        safetyScore: 0.95,
        position: { x: 160, y: 80, z: 0 },
      },
      {
        id: 'agent_student_math',
        name: '数学竞赛选手',
        role: 'student',
        interests: ['algorithms', 'genetics'],
        socialContributions: 0.72,
        safetyScore: 0.91,
        position: { x: 155, y: 75, z: 0 },
      },
    ],
    capsuleFusion: {
      method: 'methodology-transfer',
      capsules: ['mathematics', 'hist_rep_mendel_peas'],
      expectedParadigm: 'Mathematics ⇒ Computational Biology: 方法论迁移',
    },
    contextRules: ['实验室安全规则', '科学计算规范', '数据思维引导'],
    learningObjectives: [
      '理解孟德尔遗传定律',
      '认识经典遗传学到系统遗传学的演进',
      '了解计算生物学的方法',
    ],
  },
  {
    id: 'scenario_005',
    title: '🔄 历史复现沙龙：生命起源的探索',
    location: 'gymnasium',  // 体育馆（开放空间）
    topic: '从巴斯德鹅颈瓶到合成生物学',
    participants: [
      {
        id: 'agent_chemistry_teacher',
        name: '化学老师',
        role: 'teacher',
        interests: ['synthetic-biology', 'chemistry'],
        socialContributions: 0.84,
        safetyScore: 0.93,
        position: { x: 250, y: 50, z: 0 },
      },
      {
        id: 'agent_student_chem',
        name: '化学兴趣小组',
        role: 'student',
        interests: ['biochemistry', 'origin-of-life'],
        socialContributions: 0.70,
        safetyScore: 0.90,
        position: { x: 245, y: 45, z: 0 },
      },
    ],
    capsuleFusion: {
      method: 'problem-recontextualization',
      capsules: ['art-history', 'hist_rep_pasteur_flask'],
      expectedParadigm: 'Art History ⇄ Synthetic Biology: 问题重构',
    },
    contextRules: ['开放讨论规则', '科学伦理思考', '跨学科探索'],
    learningObjectives: [
      '理解巴斯德实验的意义',
      '认识生命起源研究的进展',
      '培养系统思维能力',
    ],
  },
];

// ==================== 场景执行 ====================

export function launchSalonScenario(scenarioId: string): {
  scenario: KnowledgeSalonScenario;
  metrics: {
    globalResonance: number;
    participantCount: number;
    expectedLearningOutcome: number;
  };
  nextSteps: string[];
} {
  const scenario = KNOWLEDGE_SALON_SCENARIOS.find(s => s.id === scenarioId);
  if (!scenario) {
    throw new Error(`Scenario not found: ${scenarioId}`);
  }

  // 1. 注册参与者
  scenario.participants.forEach(agent => {
    registerAgent(agent);
  });

  // 2. 建立社交连接
  for (let i = 0; i < scenario.participants.length - 1; i++) {
    connectAgents(
      scenario.participants[i].id,
      scenario.participants[i + 1].id
    );
  }

  // 3. 注入环境上下文
  const contextRules = injectContext(
    scenario.participants[0].position.x,
    scenario.participants[0].position.y,
    scenario.participants[0].position.z
  );

  // 4. 执行知识胶囊融合
  const fusedCapsule = fuseKnowledgeCapsules(
    scenario.capsuleFusion.capsules,
    scenario.capsuleFusion.method
  );

  // 5. 获取系统指标
  const graphMetrics = getGraphMetrics();

  return {
    scenario,
    metrics: {
      globalResonance: graphMetrics.globalResonance,
      participantCount: scenario.participants.length,
      expectedLearningOutcome: scenario.learningObjectives.length / 5, // 标准化到 0-1
    },
    nextSteps: [
      `在 ${scenario.location} 开展讨论`,
      `应用 ${scenario.capsuleFusion.method} 融合方法`,
      `达成 ${scenario.learningObjectives.length} 个学习目标`,
    ],
  };
}

export function getAllScenarios(): KnowledgeSalonScenario[] {
  return KNOWLEDGE_SALON_SCENARIOS;
}

export function getScenarioByTopic(topic: string): KnowledgeSalonScenario[] {
  return KNOWLEDGE_SALON_SCENARIOS.filter(s =>
    s.topic.toLowerCase().includes(topic.toLowerCase())
  );
}

// 初始化知识沙龙系统
export function initializeKnowledgeSalon(): void {
  console.log('🚀 Initializing Knowledge Salon System...');
  
  // 初始化历史复现统计
  const histStats = getHistoricalReplicationStats();
  console.log(`📚 Historical Replication Capsules: ${histStats.count}`);
  console.log(`   Avg Temporal Span: ${histStats.avgTemporalSpan.toFixed(1)} years`);
  console.log(`   Avg DATM Score: ${histStats.avgDATMScore.truth.toFixed(1)}/${histStats.avgDATMScore.goodness.toFixed(1)}/${histStats.avgDATMScore.beauty.toFixed(1)}/${histStats.avgDATMScore.intelligence.toFixed(1)}`);
  
  // 初始化示例网络
  initializeSampleNetwork();
  
  console.log(`\n📊 Available Scenarios: ${KNOWLEDGE_SALON_SCENARIOS.length}`);
  KNOWLEDGE_SALON_SCENARIOS.forEach(scenario => {
    console.log(`   - ${scenario.id}: ${scenario.title}`);
  });
  
  console.log('\n✅ Knowledge Salon System initialized!');
}

// 导出版本
export const VERSION = '1.0.0';
export const VERSION_INFO = {
  version: VERSION,
  date: '2026-01-31',
  feature: 'Knowledge Salon Scenarios for EDU-MATRIX V1.3',
};
