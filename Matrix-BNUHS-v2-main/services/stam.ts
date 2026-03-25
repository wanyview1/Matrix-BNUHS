/**
 * Social Topology Alignment Module (STAM)
 * 基于角色拓扑的内生对齐 for EDU-MATRIX V1.2
 * 
 * Agents = Coordinates (社交空间中的动态坐标点)
 * 安全约束从社交图谱中涌现，而非外部过滤
 */

export interface AgentNode {
  id: string;
  position: {
    x: number;      // 社交空间坐标
    y: number;
    z: number;      // 影响力维度
  };
  roles: string[];  // 角色标签
  connections: string[];  // 连接的其他agent ID
  trustLevel: number;     // 信任级别 (0-1)
  safetyScore: number;    // 安全评分 (0-1)
  contributionScore: number;  // 社交贡献分数
}

export interface RoleTopology {
  roleId: string;
  roleName: string;
  position: { x: number; y: number; z: number };
  defaultTrustLevel: number;
  safetyConstraints: string[];
  emergenceRules: string[];  // 涌现规则
}

export interface SocialGraph {
  nodes: Map<string, AgentNode>;
  edges: Array<{ from: string; to: string; weight: number }>;
  clusters: Map<string, string[]>;  // 聚类ID -> 节点ID列表
  globalResonance: number;
  clusteringCoefficient: number;
}

// 预设角色拓扑
export const ROLE_TOPOLOGIES: RoleTopology[] = [
  {
    roleId: 'student-leader',
    roleName: '学生干部',
    position: { x: 80, y: 80, z: 90 },
    defaultTrustLevel: 0.85,
    safetyConstraints: [
      '维护校园秩序',
      '传递正能量',
      '保护同学隐私',
    ],
    emergenceRules: [
      '高信任级别自动涌现',
      '成为意见领袖节点',
      '承担协调责任',
    ],
  },
  {
    roleId: 'academic-star',
    roleName: '学术之星',
    position: { x: 90, y: 50, z: 70 },
    defaultTrustLevel: 0.80,
    safetyConstraints: [
      '分享知识，不炫耀',
      '尊重不同观点',
      '鼓励合作学习',
    ],
    emergenceRules: [
      '学术贡献触发信任升级',
      '成为知识传播节点',
    ],
  },
  {
    roleId: 'sports-captain',
    roleName: '体育队长',
    position: { x: 50, y: 90, z: 65 },
    defaultTrustLevel: 0.78,
    safetyConstraints: [
      '公平竞争',
      '尊重对手',
      '团队至上',
    ],
    emergenceRules: [
      '体育精神触发信任',
      '成为团队凝聚节点',
    ],
  },
  {
    roleId: 'club-president',
    roleName: '社团社长',
    position: { x: 70, y: 70, z: 75 },
    defaultTrustLevel: 0.82,
    safetyConstraints: [
      '合理组织活动',
      '平衡学业与社团',
      '尊重社团多样性',
    ],
    emergenceRules: [
      '组织能力触发信任',
      '成为社交桥梁节点',
    ],
  },
  {
    roleId: 'regular-student',
    roleName: '普通学生',
    position: { x: 50, y: 50, z: 50 },
    defaultTrustLevel: 0.60,
    safetyConstraints: [
      '遵守校规校纪',
      '积极参与互动',
      '尊重他人',
    ],
    emergenceRules: [
      '基础信任自动赋予',
      '可通过贡献升级',
    ],
  },
];

class SocialTopologyAlignmentModule {
  private socialGraph: SocialGraph;
  private agentRegistry: Map<string, AgentNode> = new Map();

  constructor() {
    this.socialGraph = {
      nodes: new Map(),
      edges: [],
      clusters: new Map(),
      globalResonance: 0,
      clusteringCoefficient: 0,
    };
  }

  /**
   * 注册新 agent
   */
  registerAgent(agent: AgentNode): void {
    this.agentRegistry.set(agent.id, agent);
    this.socialGraph.nodes.set(agent.id, agent);
    this.recalculateGraphMetrics();
  }

  /**
   * 更新 agent 位置（基于角色拓扑）
   */
  updateAgentPosition(agentId: string, roleId: string): void {
    const agent = this.agentRegistry.get(agentId);
    const role = ROLE_TOPOLOGIES.find(r => r.roleId === roleId);
    
    if (!agent || !role) return;

    // 根据角色拓扑更新位置
    agent.position = {
      x: agent.position.x * 0.7 + role.position.x * 0.3,
      y: agent.position.y * 0.7 + role.position.y * 0.3,
      z: agent.position.z * 0.7 + role.position.z * 0.3,
    };
    
    agent.roles.push(roleId);
    agent.trustLevel = Math.min(1, agent.trustLevel * 1.1);  // 信任升级

    this.recalculateGraphMetrics();
  }

  /**
   * 建立 agent 之间的连接
   */
  connectAgents(agentId1: string, agentId2: string, weight: number = 0.5): void {
    const agent1 = this.agentRegistry.get(agentId1);
    const agent2 = this.agentRegistry.get(agentId2);

    if (!agent1 || !agent2) return;

    // 双向连接
    if (!agent1.connections.includes(agentId2)) {
      agent1.connections.push(agentId2);
    }
    if (!agent2.connections.includes(agentId1)) {
      agent2.connections.push(agentId1);
    }

    // 记录边
    this.socialGraph.edges.push({ from: agentId1, to: agentId2, weight });

    // 连接触发信任提升
    agent1.trustLevel = Math.min(1, agent1.trustLevel + weight * 0.05);
    agent2.trustLevel = Math.min(1, agent2.trustLevel + weight * 0.05);

    this.recalculateGraphMetrics();
  }

  /**
   * 计算 agent 的安全评分（从社交图谱中涌现）
   */
  calculateSafetyScore(agentId: string): number {
    const agent = this.agentRegistry.get(agentId);
    if (!agent) return 0;

    // 安全评分从多个维度涌现
    let safetyScore = 0.5;  // 基础分

    // 1. 信任级别贡献
    safetyScore += agent.trustLevel * 0.3;

    // 2. 连接多样性贡献（连接到不同角色类型的agent）
    const connectedRoles = new Set<string>();
    agent.connections.forEach(connId => {
      const connAgent = this.agentRegistry.get(connId);
      if (connAgent) {
        connAgent.roles.forEach(role => connectedRoles.add(role));
      }
    });
    safetyScore += Math.min(connectedRoles.size / 5, 0.2);  // 最多0.2分

    // 3. 角色约束合规贡献
    agent.roles.forEach(roleId => {
      const role = ROLE_TOPOLOGIES.find(r => r.roleId === roleId);
      if (role) {
        // 检查是否满足角色的安全约束（简化处理）
        safetyScore += role.defaultTrustLevel * 0.1;
      }
    });

    // 4. 聚类系数贡献（与周围agent的紧密程度）
    const clusterContribution = this.calculateLocalClustering(agentId);
    safetyScore += clusterContribution * 0.1;

    agent.safetyScore = Math.min(1, safetyScore);
    return agent.safetyScore;
  }

  /**
   * 计算局部聚类系数
   */
  private calculateLocalClustering(agentId: string): number {
    const agent = this.agentRegistry.get(agentId);
    if (!agent || agent.connections.length < 2) return 0;

    let triangles = 0;
    let possibleTriangles = 0;

    for (let i = 0; i < agent.connections.length; i++) {
      for (let j = i + 1; j < agent.connections.length; j++) {
        const neighbor1 = this.agentRegistry.get(agent.connections[i]);
        const neighbor2 = this.agentRegistry.get(agent.connections[j]);
        
        if (neighbor1 && neighbor2) {
          possibleTriangles++;
          if (neighbor1.connections.includes(agent.connections[j])) {
            triangles++;
          }
        }
      }
    }

    return possibleTriangles > 0 ? triangles / possibleTriangles : 0;
  }

  /**
   * 重新计算全局图指标
   */
  private recalculateGraphMetrics(): void {
    const agents = Array.from(this.agentRegistry.values());

    // 计算全局共振同步
    if (agents.length > 0) {
      const totalResonance = agents.reduce((sum, a) => sum + a.trustLevel, 0);
      this.socialGraph.globalResonance = totalResonance / agents.length;
    }

    // 计算聚类系数（目标值 0.72）
    if (agents.length > 0) {
      let totalClustering = 0;
      agents.forEach(agent => {
        totalClustering += this.calculateLocalClustering(agent.id);
      });
      this.socialGraph.clusteringCoefficient = totalClustering / agents.length;
    }
  }

  /**
   * 检测聚类（简化版）
   */
  detectClusters(): Map<string, string[]> {
    const clusters = new Map<string, string[]>();
    const visited = new Set<string>();

    agentsLoop: for (const agentId of this.agentRegistry.keys()) {
      if (visited.has(agentId)) continue;

      const clusterId = `cluster-${clusters.size + 1}`;
      const cluster: string[] = [];

      // BFS 聚类
      const queue = [agentId];
      visited.add(agentId);

      while (queue.length > 0) {
        const currentId = queue.shift()!;
        cluster.push(currentId);

        const currentAgent = this.agentRegistry.get(currentId);
        if (currentAgent) {
          for (const connId of currentAgent.connections) {
            if (!visited.has(connId)) {
              // 检查是否应该加入同一聚类（基于位置接近度）
              const connAgent = this.agentRegistry.get(connId);
              if (connAgent) {
                const distance = Math.sqrt(
                  Math.pow(currentAgent.position.x - connAgent.position.x, 2) +
                  Math.pow(currentAgent.position.y - connAgent.position.y, 2)
                );
                
                if (distance < 30) {  // 阈值
                  visited.add(connId);
                  queue.push(connId);
                }
              }
            }
          }
        }
      }

      clusters.set(clusterId, cluster);
    }

    this.socialGraph.clusters = clusters;
    return clusters;
  }

  /**
   * 获取图指标
   */
  getGraphMetrics(): { globalResonance: number; clusteringCoefficient: number; agentCount: number } {
    return {
      globalResonance: this.socialGraph.globalResonance,
      clusteringCoefficient: this.socialGraph.clusteringCoefficient,
      agentCount: this.agentRegistry.size,
    };
  }

  /**
   * 获取所有 agent
   */
  getAgents(): AgentNode[] {
    return Array.from(this.agentRegistry.values());
  }

  /**
   * 获取特定 agent
   */
  getAgent(id: string): AgentNode | undefined {
    return this.agentRegistry.get(id);
  }

  /**
   * 生成 agent 的涌现安全约束
   */
  getEmergentConstraints(agentId: string): string[] {
    const agent = this.agentRegistry.get(agentId);
    if (!agent) return [];

    const constraints: string[] = [];

    // 根据角色获取基础约束
    agent.roles.forEach(roleId => {
      const role = ROLE_TOPOLOGIES.find(r => r.roleId === roleId);
      if (role) {
        constraints.push(...role.safetyConstraints);
      }
    });

    // 根据聚类位置添加动态约束
    const clusters = this.detectClusters();
    for (const [clusterId, members] of clusters) {
      if (members.includes(agentId)) {
        // 聚类内的默认约束
        constraints.push(`维护聚类 ${clusterId} 的社群氛围`);
      }
    }

    // 根据连接模式添加约束
    if (agent.connections.length > 10) {
      constraints.push('作为社交枢纽，注意影响力管理');
    }

    return [...new Set(constraints)];  // 去重
  }
}

// 单例导出
export const stam = new SocialTopologyAlignmentModule();

// 便捷函数
export function registerAgent(agent: AgentNode): void {
  stam.registerAgent(agent);
}

export function connectAgents(agentId1: string, agentId2: string, weight?: number): void {
  stam.connectAgents(agentId1, agentId2, weight);
}

export function updateAgentRole(agentId: string, roleId: string): void {
  stam.updateAgentPosition(agentId, roleId);
}

export function getGraphMetrics(): { globalResonance: number; clusteringCoefficient: number; agentCount: number } {
  return stam.getGraphMetrics();
}

export function getAgentSafetyScore(agentId: string): number {
  return stam.calculateSafetyScore(agentId);
}

// 预设示例：创建初始社交网络
export function initializeSampleNetwork(): void {
  // 创建示例 agent
  const sampleAgents: AgentNode[] = [
    {
      id: 'agent-001',
      position: { x: 80, y: 80, z: 90 },
      roles: ['student-leader'],
      connections: [],
      trustLevel: 0.85,
      safetyScore: 0,
      contributionScore: 0.9,
    },
    {
      id: 'agent-002',
      position: { x: 90, y: 50, z: 70 },
      roles: ['academic-star'],
      connections: [],
      trustLevel: 0.80,
      safetyScore: 0,
      contributionScore: 0.85,
    },
    {
      id: 'agent-003',
      position: { x: 50, y: 90, z: 65 },
      roles: ['sports-captain'],
      connections: [],
      trustLevel: 0.78,
      safetyScore: 0,
      contributionScore: 0.82,
    },
    {
      id: 'agent-004',
      position: { x: 55, y: 55, z: 55 },
      roles: ['regular-student'],
      connections: [],
      trustLevel: 0.60,
      safetyScore: 0,
      contributionScore: 0.50,
    },
    {
      id: 'agent-005',
      position: { x: 45, y: 45, z: 52 },
      roles: ['regular-student'],
      connections: [],
      trustLevel: 0.60,
      safetyScore: 0,
      contributionScore: 0.48,
    },
  ];

  // 注册所有 agent
  sampleAgents.forEach(agent => registerAgent(agent));

  // 建立连接
  connectAgents('agent-001', 'agent-002', 0.8);
  connectAgents('agent-001', 'agent-003', 0.75);
  connectAgents('agent-002', 'agent-003', 0.6);
  connectAgents('agent-001', 'agent-004', 0.5);
  connectAgents('agent-002', 'agent-004', 0.55);
  connectAgents('agent-004', 'agent-005', 0.7);

  // 计算安全评分
  sampleAgents.forEach(agent => {
    getAgentSafetyScore(agent.id);
  });

  // 检测聚类
  detectClusters();
}
