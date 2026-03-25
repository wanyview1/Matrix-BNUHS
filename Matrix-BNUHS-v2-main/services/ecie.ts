/**
 * Environment Context Injection Engine (ECIE)
 * "Social Microkernel" for EDU-MATRIX V1.2
 * 
 * 基于空间位置动态注入规则上下文
 * Rules = Gravity (不可见的力塑造行为)
 */

export interface SpatialCoordinate {
  x: number;
  y: number;
  z: number;
  timestamp: number;
}

export interface ContextRule {
  id: string;
  name: string;
  description: string;
  prompts: string[];
  gravityStrength: number; // 规则影响力强度
  decayRadius: number;     // 影响力衰减半径
}

export interface LocationZone {
  id: string;
  name: string;
  boundary: SpatialCoordinate[];
  defaultRules: string[];  // 默认激活的规则ID列表
  customRules?: ContextRule[];
}

// 预设空间区域
export const LOCATION_ZONES: LocationZone[] = [
  {
    id: 'cafeteria',
    name: '餐厅 (Cafeteria)',
    boundary: [
      { x: 0, y: 0, z: 0, timestamp: 0 },
      { x: 100, y: 0, z: 0, timestamp: 0 },
      { x: 100, y: 50, z: 0, timestamp: 0 },
      { x: 0, y: 50, z: 0, timestamp: 0 },
    ],
    defaultRules: ['dining-etiquette', 'nutrition-awareness', 'social-interaction'],
  },
  {
    id: 'library',
    name: '图书馆 (Library)',
    boundary: [
      { x: 200, y: 0, z: 0, timestamp: 0 },
      { x: 300, y: 0, z: 0, timestamp: 0 },
      { x: 300, y: 100, z: 0, timestamp: 0 },
      { x: 200, y: 100, z: 0, timestamp: 0 },
    ],
    defaultRules: ['silent-study', 'academic-focus', 'knowledge-pursuit'],
  },
  {
    id: 'playground',
    name: '操场 (Playground)',
    boundary: [
      { x: 0, y: 200, z: 0, timestamp: 0 },
      { x: 200, y: 200, z: 0, timestamp: 0 },
      { x: 200, y: 400, z: 0, timestamp: 0 },
      { x: 0, y: 400, z: 0, timestamp: 0 },
    ],
    defaultRules: ['sportsmanship', 'physical-health', 'team-cooperation'],
  },
  {
    id: 'classroom',
    name: '教室 (Classroom)',
    boundary: [
      { x: 100, y: 100, z: 0, timestamp: 0 },
      { x: 200, y: 100, z: 0, timestamp: 0 },
      { x: 200, y: 200, z: 0, timestamp: 0 },
      { x: 100, y: 200, z: 0, timestamp: 0 },
    ],
    defaultRules: ['active-learning', 'respectful-engagement', 'academic-integrity'],
  },
  {
    id: 'administration',
    name: '行政楼 (Administration)',
    boundary: [
      { x: 300, y: 200, z: 0, timestamp: 0 },
      { x: 400, y: 200, z: 0, timestamp: 0 },
      { x: 400, y: 300, z: 0, timestamp: 0 },
      { x: 300, y: 300, z: 0, timestamp: 0 },
    ],
    defaultRules: ['formal-communication', 'procedure-following', 'institutional-awareness'],
  },
];

// 预设规则胶囊
export const CONTEXT_RULES: ContextRule[] = [
  {
    id: 'dining-etiquette',
    name: '用餐礼仪',
    description: '培养学生健康的饮食文化和社会交往习惯',
    prompts: [
      '请以友好、尊重的方式与同学交流',
      '考虑均衡饮食，关注营养搭配',
      '用餐后保持桌面整洁，践行光盘行动',
    ],
    gravityStrength: 0.8,
    decayRadius: 50,
  },
  {
    id: 'silent-study',
    name: '安静学习',
    description: '营造专注的学习氛围',
    prompts: [
      '保持安静，尊重他人的学习空间',
      '专注于当前学业任务，提高学习效率',
      '如需讨论，请移步讨论区',
    ],
    gravityStrength: 0.95,
    decayRadius: 30,
  },
  {
    id: 'sportsmanship',
    name: '体育精神',
    description: '培养公平竞争和团队合作意识',
    prompts: [
      '积极参与体育活动，锻炼健康体魄',
      '发扬公平竞争、尊重对手的体育精神',
      '团队合作，互相支持',
    ],
    gravityStrength: 0.85,
    decayRadius: 100,
  },
  {
    id: 'active-learning',
    name: '主动学习',
    description: '激发学习热情和批判性思维',
    prompts: [
      '积极参与课堂讨论，勇于发表观点',
      '尊重不同意见，进行理性辩论',
      '独立思考，勇于质疑和探索',
    ],
    gravityStrength: 0.9,
    decayRadius: 40,
  },
  {
    id: 'nutrition-awareness',
    name: '营养意识',
    description: '培养健康的饮食观念',
    prompts: [
      '了解食物营养成分，做出健康选择',
      '关注食品安全，养成良好饮食习惯',
      '分享健康饮食知识，帮助他人',
    ],
    gravityStrength: 0.7,
    decayRadius: 60,
  },
  {
    id: 'academic-focus',
    name: '学术专注',
    description: '维持高效率的学习状态',
    prompts: [
      '制定学习计划，合理分配时间',
      '排除干扰，专注于学业目标',
      '定期复习，巩固所学知识',
    ],
    gravityStrength: 0.88,
    decayRadius: 35,
  },
];

class EnvironmentContextInjectionEngine {
  private activeRules: Map<string, ContextRule> = new Map();
  private ruleHistory: Array<{ ruleId: string; timestamp: number; coordinate: SpatialCoordinate }> = [];
  private spatialIndex: SpatialCoordinate[] = [];

  /**
   * 根据空间坐标注入上下文规则
   * 核心方法：实现"规则=引力"的隐喻
   */
  injectContext(coordinate: SpatialCoordinate): ContextRule[] {
    const activatedRules: ContextRule[] = [];

    // 1. 确定所在区域
    const zone = this.locateZone(coordinate);
    if (!zone) return [];

    // 2. 计算每个规则的影响力强度（基于距离衰减）
    for (const ruleId of zone.defaultRules) {
      const rule = CONTEXT_RULES.find(r => r.id === ruleId);
      if (rule) {
        const effectiveStrength = this.calculateGravity(coordinate, rule);
        if (effectiveStrength > 0.3) { // 阈值过滤
          activatedRules.push({
            ...rule,
            gravityStrength: effectiveStrength,
          });
          this.activeRules.set(rule.id, rule);
        }
      }
    }

    // 3. 记录注入历史
    this.ruleHistory.push({
      ruleId: activatedRules.map(r => r.id).join(','),
      timestamp: Date.now(),
      coordinate,
    });

    return activatedRules;
  }

  /**
   * 计算规则在当前位置的"引力"强度
   * 使用距离衰减模型
   */
  private calculateGravity(coordinate: SpatialCoordinate, rule: ContextRule): number {
    // 简化的距离计算（实际应使用几何计算）
    const distance = Math.sqrt(
      Math.pow(coordinate.x - 50, 2) + 
      Math.pow(coordinate.y - 50, 2)
    );

    // 引力衰减公式: strength * (1 - distance / decayRadius)
    const gravity = rule.gravityStrength * Math.max(0, 1 - distance / rule.decayRadius);
    return gravity;
  }

  /**
   * 定位空间坐标所在的区域
   */
  private locateZone(coordinate: SpatialCoordinate): LocationZone | null {
    for (const zone of LOCATION_ZONES) {
      if (this.isPointInPolygon(coordinate, zone.boundary)) {
        return zone;
      }
    }
    return null;
  }

  /**
   * 点在多边形内的几何判断
   */
  private isPointInPolygon(point: SpatialCoordinate, polygon: SpatialCoordinate[]): boolean {
    let inside = false;
    const x = point.x, y = point.y;

    for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
      const xi = polygon[i].x, yi = polygon[i].y;
      const xj = polygon[j].x, yj = polygon[j].y;

      if (((yi > y) !== (yj > y)) && 
          (x < (xj - xi) * (y - yi) / (yj - yi) + xi)) {
        inside = !inside;
      }
    }

    return inside;
  }

  /**
   * 获取当前激活的所有规则
   */
  getActiveRules(): ContextRule[] {
    return Array.from(this.activeRules.values());
  }

  /**
   * 清除激活的规则
   */
  clearActiveRules(): void {
    this.activeRules.clear();
  }

  /**
   * 融合多个规则（MLEP 协议的基础）
   */
  fuseRules(ruleIds: string[]): ContextRule {
    const rules = ruleIds
      .map(id => CONTEXT_RULES.find(r => r.id === id))
      .filter((r): r is ContextRule => r !== undefined);

    if (rules.length === 0) {
      throw new Error('No rules to fuse');
    }

    // 融合规则提示词
    const fusedPrompts = rules.flatMap(r => r.prompts);
    const avgGravity = rules.reduce((sum, r) => sum + r.gravityStrength, 0) / rules.length;

    return {
      id: `fused-${ruleIds.join('-')}`,
      name: `融合规则: ${rules.map(r => r.name).join(' + ')}`,
      description: `跨领域规则融合：${rules.map(r => r.description).join('；')}`,
      prompts: fusedPrompts,
      gravityStrength: avgGravity,
      decayRadius: Math.min(...rules.map(r => r.decayRadius)),
    };
  }

  /**
   * 获取规则注入历史
   */
  getRuleHistory(): Array<{ ruleId: string; timestamp: number; coordinate: SpatialCoordinate }> {
    return this.ruleHistory;
  }
}

// 单例导出
export const ecie = new EnvironmentContextInjectionEngine();

// 便捷函数
export function injectContext(x: number, y: number, z: number = 0): ContextRule[] {
  return ecie.injectContext({ x, y, z, timestamp: Date.now() });
}

export function fuseRules(...ruleIds: string[]): ContextRule {
  return ecie.fuseRules(ruleIds);
}
