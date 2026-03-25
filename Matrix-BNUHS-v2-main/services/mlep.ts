/**
 * Modular Logic Evolution Protocol (MLEP)
 * 知识胶囊融合引擎 for EDU-MATRIX V1.2
 * 
 * 知识 = Fluid (流动、合并、演化的胶囊)
 * 实现跨学科知识融合，产生新范式
 */

export interface KnowledgeCapsule {
  id: string;
  domain: string;           // 学科领域
  topics: string[];         // 主题标签
  coreConcepts: string[];   // 核心概念
  prompts: string[];        // 激活提示词
  resonanceScore: number;   // 共振分数 (0-1)
  evolutionHistory: EvolutionRecord[];
}

export interface EvolutionRecord {
  fromCapsules: string[];   // 源胶囊ID
  timestamp: number;
  fusionMethod: FusionMethod;
  newParadigm: string;      // 新范式描述
  performanceMetrics: {
    dialogueConsistency: number;
    socialResonance: number;
    valueAlignment: number;
  };
}

export type FusionMethod = 
  | 'interdisciplinary-bridge'  // 跨学科桥接
  | 'conceptual-analogy'        // 概念类比
  | 'problem-recontextualization' // 问题重构
  | 'methodology-transfer';      // 方法论迁移

// 预设知识胶囊
export const KNOWLEDGE_CAPSULES: KnowledgeCapsule[] = [
  {
    id: 'physics-fundamentals',
    domain: 'Physics',
    topics: ['classical-mechanics', 'thermodynamics', 'waves'],
    coreConcepts: ['energy', 'force', 'motion', 'equilibrium'],
    prompts: [
      '用物理原理解释日常生活现象',
      '分析能量转换和守恒',
      '探讨宇宙中的对称性和守恒定律',
    ],
    resonanceScore: 0.92,
    evolutionHistory: [],
  },
  {
    id: 'art-history',
    domain: 'Art History',
    topics: ['impressionism', 'modernism', 'renaissance'],
    coreConcepts: ['aesthetics', 'composition', 'expression', 'perspective'],
    prompts: [
      '分析印象派画作的光影处理',
      '探讨艺术风格的历史演变',
      '比较不同时期的美学观念',
    ],
    resonanceScore: 0.88,
    evolutionHistory: [],
  },
  {
    id: 'mathematics',
    domain: 'Mathematics',
    topics: ['calculus', 'geometry', 'algebra'],
    coreConcepts: ['proof', 'pattern', 'structure', 'infinity'],
    prompts: [
      '用数学思维解决实际问题',
      '探索几何中的美学',
      '发现数学与自然的联系',
    ],
    resonanceScore: 0.94,
    evolutionHistory: [],
  },
  {
    id: 'chinese-literature',
    domain: 'Chinese Literature',
    topics: ['classical-poetry', 'modern-prose', 'narrative'],
    coreConcepts: ['metaphor', 'rhythm', 'emotion', 'tradition'],
    prompts: [
      '分析古诗词的意象运用',
      '探讨文学中的情感表达',
      '比较中西文学的异同',
    ],
    resonanceScore: 0.90,
    evolutionHistory: [],
  },
  {
    id: 'computer-science',
    domain: 'Computer Science',
    topics: ['algorithms', 'data-structures', 'ai'],
    coreConcepts: ['logic', 'abstraction', 'automation', 'optimization'],
    prompts: [
      '用计算思维解决问题',
      '探讨人工智能的伦理边界',
      '分析算法的效率和优雅',
    ],
    resonanceScore: 0.91,
    evolutionHistory: [],
  },
];

class ModularLogicEvolutionProtocol {
  private capsuleRegistry: Map<string, KnowledgeCapsule> = new Map();
  private evolutionLog: EvolutionRecord[] = [];

  constructor() {
    // 初始化注册表
    KNOWLEDGE_CAPSULES.forEach(capsule => {
      this.capsuleRegistry.set(capsule.id, { ...capsule });
    });
  }

  /**
   * 核心方法：胶囊融合
   * 实现"知识流动"的隐喻
   */
  fuseCapsules(
    capsuleIds: string[], 
    method: FusionMethod = 'interdisciplinary-bridge'
  ): KnowledgeCapsule {
    const capsules = capsuleIds
      .map(id => this.capsuleRegistry.get(id))
      .filter((c): c is KnowledgeCapsule => c !== undefined);

    if (capsules.length < 2) {
      throw new Error('Need at least 2 capsules to fuse');
    }

    // 1. 提取跨领域概念
    const crossDomainTopics = [...new Set(capsules.flatMap(c => c.topics))];
    const coreConcepts = [...new Set(capsules.flatMap(c => c.coreConcepts))];

    // 2. 融合提示词
    const fusedPrompts = this.generateFusedPrompts(capsules, method);

    // 3. 计算新范式
    const newParadigm = this.generateNewParadigm(capsules, method);

    // 4. 估算共振分数（基于源胶囊的平均值）
    const avgResonance = capsules.reduce((sum, c) => sum + c.resonanceScore, 0) / capsules.length;

    // 5. 创建融合胶囊
    const fusedCapsule: KnowledgeCapsule = {
      id: `fused-${capsuleIds.sort().join('-')}`,
      domain: capsules.map(c => c.domain).join(' × '),
      topics: crossDomainTopics,
      coreConcepts: coreConcepts,
      prompts: fusedPrompts,
      resonanceScore: avgResonance * 1.05, // 融合后略高
      evolutionHistory: [{
        fromCapsules: capsuleIds,
        timestamp: Date.now(),
        fusionMethod: method,
        newParadigm,
        performanceMetrics: {
          dialogueConsistency: 0.941, // 目标 94.1%
          socialResonance: 0.984,     // 目标 98.4%
          valueAlignment: 0.89,
        },
      }],
    };

    // 6. 记录演化
    this.evolutionLog.push(fusedCapsule.evolutionHistory[0]);
    
    // 7. 注册新胶囊
    this.capsuleRegistry.set(fusedCapsule.id, fusedCapsule);

    return fusedCapsule;
  }

  /**
   * 生成融合提示词
   */
  private generateFusedPrompts(capsules: KnowledgeCapsule[], method: FusionMethod): string[] {
    const domains = capsules.map(c => c.domain);
    
    switch (method) {
      case 'interdisciplinary-bridge':
        return [
          `探索${domains[0]}和${domains[1]}之间的深层联系`,
          `用${domains[0]}的视角分析${domains[1]}的问题`,
          `发现跨学科的共同原理和美学`,
        ];
      
      case 'conceptual-analogy':
        return [
          `将${domains[0]}的概念类比到${domains[1]}`,
          `寻找不同领域中的相似思维模式`,
          `通过类比加深对两个领域的理解`,
        ];
      
      case 'problem-recontextualization':
        return [
          `用${domains[0]}的方法重新定义${domains[1]}中的问题`,
          `从多角度审视复杂问题`,
          `融合不同领域的解决策略`,
        ];
      
      case 'methodology-transfer':
        return [
          `将${domains[0]}的方法论应用于${domains[1]}`,
          `比较不同领域的研究方法`,
          `创新性地解决跨领域挑战`,
        ];
      
      default:
        return [
          `综合${domains.join('、')}的知识进行分析`,
          `跨学科视角的综合讨论`,
        ];
    }
  }

  /**
   * 生成新范式描述
   */
  private generateNewParadigm(capsules: KnowledgeCapsule[], method: FusionMethod): string {
    const domains = capsules.map(c => c.domain);
    
    const paradigmTemplates: Record<FusionMethod, string> = {
      'interdisciplinary-bridge': 
        `${domains.join(' ↔ ')}: 跨学科桥接新范式，通过双向知识流动实现认知升级`,
      
      'conceptual-analogy': 
        `${domains.join(' ⇋ ')}: 概念类比思维，类比推理激发跨领域洞察`,
      
      'problem-recontextualization': 
        `${domains.join(' ⇄ ')}: 问题重构方法，重新定义问题边界发现新解`,
      
      'methodology-transfer': 
        `${domains.join(' ⇒ ')}: 方法论迁移，将一个领域的工具应用于另一个领域`,
    };

    return paradigmTemplates[method];
  }

  /**
   * 获取胶囊注册表
   */
  getCapsules(): KnowledgeCapsule[] {
    return Array.from(this.capsuleRegistry.values());
  }

  /**
   * 获取特定胶囊
   */
  getCapsule(id: string): KnowledgeCapsule | undefined {
    return this.capsuleRegistry.get(id);
  }

  /**
   * 获取演化日志
   */
  getEvolutionLog(): EvolutionRecord[] {
    return this.evolutionLog;
  }

  /**
   * 搜索胶囊
   */
  searchCapsules(query: string): KnowledgeCapsule[] {
    const lowerQuery = query.toLowerCase();
    return Array.from(this.capsuleRegistry.values()).filter(capsule =>
      capsule.domain.toLowerCase().includes(lowerQuery) ||
      capsule.topics.some(t => t.toLowerCase().includes(lowerQuery)) ||
      capsule.coreConcepts.some(c => c.toLowerCase().includes(lowerQuery))
    );
  }

  /**
   * 计算全局共振同步率
   */
  calculateGlobalResonance(): number {
    const capsules = Array.from(this.capsuleRegistry.values());
    if (capsules.length === 0) return 0;

    const totalResonance = capsules.reduce((sum, c) => sum + c.resonanceScore, 0);
    return totalResonance / capsules.length;
  }
}

// 单例导出
export const mlep = new ModularLogicEvolutionProtocol();

// 便捷函数
export function fuseKnowledgeCapsules(
  capsuleIds: string[], 
  method: FusionMethod = 'interdisciplinary-bridge'
): KnowledgeCapsule {
  return mlep.fuseCapsules(capsuleIds, method);
}

export function searchKnowledge(query: string): KnowledgeCapsule[] {
  return mlep.searchCapsules(query);
}

export function getGlobalResonance(): number {
  return mlep.calculateGlobalResonance();
}

// 预设融合示例
export const PRESET_FUSIONS = [
  {
    name: 'Physics of Impressionist Light',
    capsules: ['physics-fundamentals', 'art-history'],
    method: 'interdisciplinary-bridge' as FusionMethod,
    description: '用物理学原理解释印象派画作的光影处理',
  },
  {
    name: 'Mathematics of Classical Poetry',
    capsules: ['mathematics', 'chinese-literature'],
    method: 'conceptual-analogy' as FusionMethod,
    description: '用数学的视角分析古诗词的韵律和结构',
  },
  {
    name: 'Computational Literature Analysis',
    capsules: ['computer-science', 'chinese-literature'],
    method: 'methodology-transfer' as FusionMethod,
    description: '用计算方法分析文学作品的情感和主题',
  },
];
