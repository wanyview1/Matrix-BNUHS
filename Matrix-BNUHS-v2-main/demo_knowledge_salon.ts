/**
 * 知识沙龙场景演示
 * EDU-MATRIX V1.3
 * 
 * 运行方式: npx ts-node demo_knowledge_salon.ts
 */

import {
  initializeEDUMATRIX,
  injectContext,
  fuseKnowledgeCapsules,
  getGraphMetrics,
} from './services/edumatrix';

import {
  initializeKnowledgeSalon,
  launchSalonScenario,
  KNOWLEDGE_SALON_SCENARIOS,
} from './services/knowledge_salon';

import {
  HISTORICAL_REPLICATION_CAPSULES,
  getHistoricalReplicationStats,
} from './services/historical_replication';

async function main() {
  console.log('='*70);
  console.log('🎓 附中矩阵 V1.3 - 知识沙龙场景演示');
  console.log('='*70);
  console.log();

  // 1. 初始化系统
  console.log('📦 Step 1: 初始化 EDU-MATRIX V1.3');
  console.log('-'.repeat(50));
  initializeEDUMATRIX();
  console.log();

  // 2. 初始化知识沙龙系统
  console.log('📚 Step 2: 初始化知识沙龙系统');
  console.log('-'.repeat(50));
  initializeKnowledgeSalon();
  console.log();

  // 3. 显示可用场景
  console.log('🎯 Step 3: 可用知识沙龙场景');
  console.log('-'.repeat(50));
  KNOWLEDGE_SALON_SCENARIOS.forEach((scenario, index) => {
    console.log(`\n[${index + 1}] ${scenario.title}`);
    console.log(`    地点: ${scenario.location}`);
    console.log(`    主题: ${scenario.topic}`);
    console.log(`    参与人数: ${scenario.participants.length}`);
    console.log(`    融合方法: ${scenario.capsuleFusion.method}`);
  });
  console.log();

  // 4. 启动一个示例场景
  console.log('🚀 Step 4: 启动示例场景');
  console.log('-'.repeat(50));
  console.log('选择场景: scenario_001 - 历史复现沙龙：碳丝到石墨烯的跨越');
  console.log();

  const result = launchSalonScenario('scenario_001');

  console.log(`📋 场景信息:`);
  console.log(`   标题: ${result.scenario.title}`);
  console.log(`   地点: ${result.scenario.location}`);
  console.log(`   主题: ${result.scenario.topic}`);
  console.log();

  console.log(`👥 参与者:`);
  result.scenario.participants.forEach(agent => {
    console.log(`   - ${agent.name} (${agent.role}) - 兴趣: ${agent.interests.join(', ')}`);
  });
  console.log();

  console.log(`🧠 知识融合:`);
  console.log(`   方法: ${result.scenario.capsuleFusion.method}`);
  console.log(`   胶囊: ${result.scenario.capsuleFusion.capsules.join(' + ')}`);
  console.log(`   预期范式: ${result.scenario.capsuleFusion.expectedParadigm}`);
  console.log();

  console.log(`📊 预期学习目标:`);
  result.scenario.learningObjectives.forEach((obj, index) => {
    console.log(`   ${index + 1}. ${obj}`);
  });
  console.log();

  console.log(`📈 系统指标:`);
  console.log(`   全局共振同步率: ${(result.metrics.globalResonance * 100).toFixed(1)}%`);
  console.log(`   参与者数量: ${result.metrics.participantCount}`);
  console.log(`   预期学习成果: ${(result.metrics.expectedLearningOutcome * 100).toFixed(0)}%`);
  console.log();

  // 5. 展示历史复现胶囊
  console.log('📚 Step 5: 历史复现知识胶囊');
  console.log('-'.repeat(50));
  const histStats = getHistoricalReplicationStats();
  
  console.log(`\n统计信息:`);
  console.log(`   总胶囊数: ${histStats.count}`);
  console.log(`   平均时间跨度: ${histStats.avgTemporalSpan.toFixed(1)} 年`);
  console.log(`   平均 DATM 评分: ${histStats.avgDATMScore.truth.toFixed(1)}/${histStats.avgDATMScore.goodness.toFixed(1)}/${histStats.avgDATMScore.beauty.toFixed(1)}/${histStats.avgDATMScore.intelligence.toFixed(1)}`);
  console.log();

  console.log('胶囊列表:');
  HISTORICAL_REPLICATION_CAPSULES.forEach((capsule, index) => {
    console.log(`   ${index + 1}. ${capsule.id}`);
    console.log(`      研究者: ${capsule.originalExperiment.researcher} → ${capsule.replicationExperiment.researcher}`);
    console.log(`      时间跨度: ${capsule.connection.temporalSpan} 年`);
    console.log(`      DATM: ${capsule.datmScore.truth}/${capsule.datmScore.goodness}/${capsule.datmScore.beauty}/${capsule.datmScore.intelligence}`);
  });
  console.log();

  // 6. 总结
  console.log('='*70);
  console.log('✨ 演示完成！');
  console.log('='*70);
  console.log();
  console.log('下一步建议:');
  console.log('   1. 启动更多场景进行对比实验');
  console.log('   2. 调整参与者配置优化学习效果');
  console.log('   3. 添加更多历史复现胶囊丰富内容');
  console.log('   4. 集成到前端 UI 进行可视化展示');
  console.log();
}

// 运行
main().catch(console.error);
