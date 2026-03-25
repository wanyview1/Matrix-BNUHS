/**
 * 知识沙龙演示页面
 * Knowledge Salon Demo Page for EDU-MATRIX V1.3
 * 
 * 运行方式: npx ts-node demo_knowledge_salon_ui.ts
 * 或在浏览器中打开: http://localhost:5173/knowledge-salon
 */

import React, { useState, useEffect } from 'react';
import { KnowledgeSalonScenario } from '../services/knowledge_salon';

// ==================== 模拟数据 ====================

const MOCK_SCENARIOS: KnowledgeSalonScenario[] = [
  {
    id: 'scenario_001',
    title: '🔬 历史复现沙龙：碳丝到石墨烯的跨越',
    location: 'classroom_301',
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
    location: 'library_main',
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
    location: 'medical_lab',
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
    location: 'science_lab',
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
    location: 'gymnasium',
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

// ==================== 组件 ====================

const KnowledgeSalonDemo: React.FC = () => {
  const [scenarios] = useState<KnowledgeSalonScenario[]>(MOCK_SCENARIOS);
  const [selectedScenario, setSelectedScenario] = useState<KnowledgeSalonScenario | undefined>();
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => {
        setProgress(p => Math.min(p + 10, 100));
      }, 500);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const getLocationIcon = (location: string): string => {
    const icons: Record<string, string> = {
      'classroom_301': '🏫',
      'library_main': '📚',
      'medical_lab': '🔬',
      'science_lab': '🧪',
      'gymnasium': '🏃',
    };
    return icons[location] || '📍';
  };

  const getMethodColor = (method: string): string => {
    const colors: Record<string, string> = {
      'interdisciplinary-bridge': 'bg-blue-100 text-blue-700 border-blue-300',
      'methodology-transfer': 'bg-green-100 text-green-700 border-green-300',
      'conceptual-analogy': 'bg-purple-100 text-purple-700 border-purple-300',
      'problem-recontextualization': 'bg-orange-100 text-orange-700 border-orange-300',
    };
    return colors[method] || 'bg-slate-100 text-slate-700 border-slate-300';
  };

  const formatMethodName = (method: string): string => {
    const names: Record<string, string> = {
      'interdisciplinary-bridge': '跨学科桥接',
      'methodology-transfer': '方法论迁移',
      'conceptual-analogy': '概念类比',
      'problem-recontextualization': '问题重构',
    };
    return names[method] || method;
  };

  const handleScenarioSelect = (scenario: KnowledgeSalonScenario) => {
    setSelectedScenario(scenario);
    setProgress(0);
  };

  const handleLaunchScenario = () => {
    if (selectedScenario) {
      setIsRunning(true);
      setTimeout(() => {
        setIsRunning(false);
        alert(`🎉 场景 "${selectedScenario.title}" 已启动！\n\n参与者: ${selectedScenario.participants.length}人\n学习目标: ${selectedScenario.learningObjectives.length}个\n预期成果: ${(selectedScenario.learningObjectives.length / 5 * 100).toFixed(0)}%`);
      }, 5000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center text-3xl shadow-2xl">
            🎓
          </div>
          <div>
            <h1 className="text-3xl font-black text-white uppercase tracking-wider">
              知识沙龙演示
            </h1>
            <p className="text-slate-400 mt-1">
              EDU-MATRIX V1.3 - 历史复现知识胶囊应用
            </p>
          </div>
        </div>
        
        {/* Stats */}
        <div className="flex gap-4">
          <div className="px-6 py-3 bg-white/10 backdrop-blur rounded-xl border border-white/20">
            <span className="text-2xl font-black text-white">{scenarios.length}</span>
            <span className="text-sm text-slate-400 ml-2">场景</span>
          </div>
          <div className="px-6 py-3 bg-white/10 backdrop-blur rounded-xl border border-white/20">
            <span className="text-2xl font-black text-white">
              {scenarios.reduce((sum, s) => sum + s.participants.length, 0)}
            </span>
            <span className="text-sm text-slate-400 ml-2">参与者</span>
          </div>
          <div className="px-6 py-3 bg-white/10 backdrop-blur rounded-xl border border-white/20">
            <span className="text-2xl font-black text-white">192.8</span>
            <span className="text-sm text-slate-400 ml-2">平均年</span>
          </div>
          <div className="px-6 py-3 bg-white/10 backdrop-blur rounded-xl border border-white/20">
            <span className="text-2xl font-black text-white">92.3</span>
            <span className="text-sm text-slate-400 ml-2">DATM评分</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-2 gap-8">
        {/* Scenario List */}
        <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl">
          <div className="h-16 bg-gradient-to-r from-slate-900 to-slate-800 p-6 flex items-center">
            <h2 className="text-lg font-black text-white uppercase tracking-wider">
              📚 可用场景
            </h2>
          </div>
          <div className="p-4 space-y-3 max-h-[600px] overflow-y-auto">
            {scenarios.map((scenario) => (
              <button
                key={scenario.id}
                onClick={() => handleScenarioSelect(scenario)}
                className={`w-full p-4 rounded-2xl border-2 transition-all text-left ${
                  selectedScenario?.id === scenario.id
                    ? 'bg-blue-50 border-blue-300 shadow-lg'
                    : 'bg-slate-50 border-slate-100 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{getLocationIcon(scenario.location)}</div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-bold text-slate-900 truncate">
                      {scenario.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className={`text-xs px-2 py-0.5 rounded-full border ${getMethodColor(scenario.capsuleFusion.method)}`}>
                        {formatMethodName(scenario.capsuleFusion.method)}
                      </span>
                      <span className="text-xs text-slate-400">
                        👥 {scenario.participants.length}人
                      </span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Scenario Detail */}
        <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl">
          {selectedScenario ? (
            <>
              <div className="h-16 bg-gradient-to-r from-red-500 to-pink-500 p-6 flex items-center justify-between">
                <h2 className="text-lg font-black text-white uppercase tracking-wider">
                  🎯 场景详情
                </h2>
                <button
                  onClick={handleLaunchScenario}
                  disabled={isRunning}
                  className={`px-6 py-2 rounded-xl font-bold text-sm transition-all ${
                    isRunning
                      ? 'bg-white/20 text-white/50 cursor-not-allowed'
                      : 'bg-white text-red-500 hover:bg-red-50'
                  }`}
                >
                  {isRunning ? `🚀 运行中 ${progress}%` : '🚀 启动场景'}
                </button>
              </div>
              
              {/* Progress Bar */}
              {isRunning && (
                <div className="h-1 bg-slate-100">
                  <div 
                    className="h-full bg-gradient-to-r from-red-500 to-pink-500 transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              )}

              <div className="p-6 space-y-6 max-h-[550px] overflow-y-auto">
                {/* Title */}
                <div>
                  <h3 className="text-lg font-black text-slate-900 mb-2">
                    {selectedScenario.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {selectedScenario.topic}
                  </p>
                </div>

                {/* Participants */}
                <div className="p-4 bg-slate-50 rounded-2xl">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                    👥 参与者 ({selectedScenario.participants.length})
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedScenario.participants.map((p, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 bg-white rounded-xl">
                        <div className="w-10 h-10 bg-slate-200 rounded-xl flex items-center justify-center text-lg">
                          {p.role === 'teacher' ? '👨‍🏫' : '👨‍🎓'}
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-900">{p.name}</div>
                          <div className="text-xs text-slate-400">{p.role}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Capsule Fusion */}
                <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
                  <h4 className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-3">
                    🧠 知识融合
                  </h4>
                  <div className="flex items-center justify-center gap-4">
                    <span className="text-sm px-3 py-2 bg-white rounded-lg border border-blue-200">
                      历史复现胶囊
                    </span>
                    <span className="text-lg">+</span>
                    <span className="text-sm px-3 py-2 bg-white rounded-lg border border-blue-200">
                      现代领域
                    </span>
                    <span className="text-lg">→</span>
                    <span className="text-sm px-4 py-2 bg-blue-500 text-white rounded-lg font-bold">
                      新范式
                    </span>
                  </div>
                  <p className="text-xs text-blue-700 text-center mt-3">
                    {selectedScenario.capsuleFusion.expectedParadigm}
                  </p>
                </div>

                {/* Learning Objectives */}
                <div className="p-4 bg-slate-50 rounded-2xl">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                    📚 学习目标 ({selectedScenario.learningObjectives.length})
                  </h4>
                  <div className="space-y-2">
                    {selectedScenario.learningObjectives.map((obj, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-xs font-bold">
                          {idx + 1}
                        </div>
                        <span className="text-sm text-slate-700">{obj}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="h-full flex items-center justify-center text-slate-400">
              <div className="text-center">
                <div className="text-6xl mb-4">📋</div>
                <p className="text-lg font-medium">请选择一个场景</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto mt-8 text-center">
        <p className="text-slate-500 text-sm">
          EDU-MATRIX V1.3 // 知识沙龙演示页面
          <span className="mx-4">|</span>
          基于历史复现知识胶囊系统
        </p>
      </div>
    </div>
  );
};

export default KnowledgeSalonDemo;
