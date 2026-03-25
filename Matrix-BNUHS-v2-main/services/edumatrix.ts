/**
 * EDU-MATRIX V1.2 Integration
 * 
 * 整合环境上下文注入引擎 (ECIE)
 * 模块化逻辑演化协议 (MLEP)
 * 社交拓扑对齐模块 (STAM)
 * 
 * 基于 CHI 2026 论文: EDU-MATRIX: A Society-Centric Generative Cognitive Digital Twin Architecture
 */

export { 
  EnvironmentContextInjectionEngine, 
  ecie, 
  injectContext, 
  fuseRules,
  LOCATION_ZONES,
  CONTEXT_RULES,
  type SpatialCoordinate,
  type ContextRule,
  type LocationZone
} from './ecie';

export { 
  ModularLogicEvolutionProtocol, 
  mlep, 
  fuseKnowledgeCapsules, 
  searchKnowledge,
  getGlobalResonance,
  KNOWLEDGE_CAPSULES,
  PRESET_FUSIONS,
  type KnowledgeCapsule,
  type FusionMethod
} from './mlep';

export { 
  SocialTopologyAlignmentModule, 
  stam, 
  registerAgent,
  connectAgents,
  updateAgentRole,
  getGraphMetrics,
  getAgentSafetyScore,
  initializeSampleNetwork,
  ROLE_TOPOLOGIES,
  type AgentNode,
  type RoleTopology,
  type SocialGraph
} from './stam';

export {
  HistoricalReplicationCapsule,
  HISTORICAL_REPLICATION_CAPSULES,
  initializeHistoricalReplicationCapsules,
  fuseHistoricalReplication,
  getHistoricalReplicationStats,
  HISTORICAL_REPLICATION_FUSIONS,
  VERSION_INFO as HISTORICAL_REPLICATION_VERSION,
} from './historical_replication';

export {
  KnowledgeSalonScenario,
  KNOWLEDGE_SALON_SCENARIOS,
  launchSalonScenario,
  getAllScenarios,
  getScenarioByTopic,
  initializeKnowledgeSalon,
  VERSION_INFO as KNOWLEDGE_SALON_VERSION,
} from './knowledge_salon';

// ==================== V1.3 升级 ====================

export const V1_3_TARGETS = {
  dialogueConsistency: 0.951,    // 95.1% (+1%)
  globalResonanceSync: 0.988,    // 98.8% (+0.4%)
  socialClusteringCoefficient: 0.75,
  valueInjectionEfficacy: 0.48,  // +48% (+6%)
  historicalReplicationCapsules: 5,
  avgTemporalSpan: 192.8,
  avgDATMScore: 92.3,
  knowledgeSalonScenarios: 5,
};

// 快速初始化示例
export function initializeEDUMATRIX(): void {
  console.log('🚀 Initializing EDU-MATRIX V1.3...');
  
  // 初始化历史复现胶囊库
  initializeHistoricalReplicationCapsules();
  
  // 初始化示例社交网络
  initializeSampleNetwork();
  
  // 获取初始指标
  const metrics = getGraphMetrics();
  console.log(`📊 Initial Metrics:`);
  console.log(`   - Global Resonance: ${(metrics.globalResonance * 100).toFixed(1)}%`);
  console.log(`   - Clustering Coefficient: ${(metrics.clusteringCoefficient * 100).toFixed(1)}%`);
  console.log(`   - Agent Count: ${metrics.agentCount}`);
  
  // 测试历史复现胶囊融合
  const histStats = getHistoricalReplicationStats();
  console.log(`\n📚 Historical Replication Stats:`);
  console.log(`   - Count: ${histStats.count}`);
  console.log(`   - Avg Temporal Span: ${histStats.avgTemporalSpan.toFixed(1)} years`);
  console.log(`   - Avg DATM Score: ${Object.entries(histStats.avgDATMScore)
    .map(([k, v]) => `${k}: ${v.toFixed(1)}`)
    .join(', ')}`);
  
  // 测试知识胶囊融合
  const fusedCapsule = fuseKnowledgeCapsules(
    ['physics-fundamentals', 'art-history'],
    'interdisciplinary-bridge'
  );
  console.log(`\n🔬 Fusion Test:`);
  console.log(`   - Paradigm: ${fusedCapsule.evolutionHistory[0]?.newParadigm}`);
  
  // 测试环境上下文注入
  const contextRules = injectContext(150, 75, 0);  // 假设的教室位置
  console.log(`\n🏫 Context Injection Test:`);
  console.log(`   - Activated Rules: ${contextRules.length}`);
  console.log(`   - Rules: ${contextRules.map(r => r.name).join(', ')}`);
  
  console.log('\n✅ EDU-MATRIX V1.3 initialized successfully!');
}

// 导出版本信息
export const VERSION = '1.3.0';
export const VERSION_INFO = {
  version: VERSION,
  date: '2026-01-31',
  basedOn: 'EDU-MATRIX: A Society-Centric Generative Cognitive Digital Twin Architecture',
  authors: ['Wanyview', 'Kai Team'],
  venue: 'ACM CHI 2026',
  features: [
    'Historical Replication Integration',
    '5 New Historical Capsules',
    'Enhanced Knowledge Fusion',
  ],
};
