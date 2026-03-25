
import { AgentProfile, Ecosystem, Scenario } from './types';

export const SCENARIOS: Scenario[] = [
  {
    id: "classroom",
    name: "教室学习",
    icon: "📖",
    description: "学术共鸣场，核心知识传递中。",
    ambience: "晨光照进落灰的物理实验室，全息投影正在模拟黑洞吸积盘。",
    mapUrl: "https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?auto=format&fit=crop&q=80&w=1200", 
    hotspots: [
      { x: 35, y: 35, message: "笔走龙蛇，疯狂记录每一个字", type: 'dialogue', agentId: 'lmy-001' },
      { x: 55, y: 45, message: "趁没人注意，偷偷喝了口奶茶 :)", type: 'thought', agentId: 'hfx-001' },
      { x: 20, y: 55, message: "这道题，老师说期末必考！", type: 'alert', agentId: 'csy-001' },
      { x: 75, y: 60, message: "双眼放空，思考宇宙的尽头...", type: 'thought', agentId: 'zxy-001' },
      { x: 15, y: 25, message: "由于太困，大脑已过载...", type: 'thought', agentId: 'wqr-001' }
    ]
  },
  {
    id: "cafeteria",
    name: "食堂吃饭",
    icon: "🍱",
    description: "非正式社交节点，能量补给与八卦分发。",
    ambience: "午后的阳光透过大窗户洒在桌子上，充满了诱人的饭菜香。",
    mapUrl: "https://images.unsplash.com/photo-1567529684892-0f7edf2cdbd8?auto=format&fit=crop&q=80&w=1200",
    hotspots: [
      { x: 30, y: 30, message: "红烧肉居然涨了五毛钱！不能忍！！！", type: 'alert', agentId: 'cjm-001' },
      { x: 50, y: 40, message: "去西区食堂吧，听说那边今天九折。", type: 'dialogue', agentId: 'node-21' },
      { x: 25, y: 55, message: "今天的阿姨手一点都没抖！赚了！", type: 'dialogue', agentId: 'zwj-001' },
      { x: 70, y: 50, message: "排队这个窗口，我有特殊的加速算法。", type: 'thought', agentId: 'node-22' }
    ]
  },
  {
    id: "auditorium",
    name: "礼堂报告",
    icon: "🎙️",
    description: "高维逻辑发布，正式仪式与学术交流。",
    ambience: "宏伟的红色幕布，聚光灯打在讲台上，所有人屏息凝神。",
    mapUrl: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=1200",
    hotspots: [
      { x: 50, y: 20, message: "关于BNU_MATRIX的最新内核演变...", type: 'dialogue', agentId: 'kai-host' },
      { x: 30, y: 70, message: "这个PPT的颗粒度，真的泰裤辣！", type: 'thought', agentId: 'wzy-001' },
      { x: 70, y: 60, message: "导师的脑回路确实清奇，这也能结合大模型？", type: 'thought', agentId: 'hfx-001' }
    ]
  },
  {
    id: "library",
    name: "图书馆研习",
    icon: "📚",
    description: "深度思维归档，静谧的逻辑检索空间。",
    ambience: "静谧的午后，书架间流淌着墨香，偶尔响起翻书的沙沙声。",
    mapUrl: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=1200",
    hotspots: [
      { x: 20, y: 40, message: "嘘！这里禁止逻辑溢出。", type: 'dialogue', agentId: 'lsh-001' },
      { x: 75, y: 45, message: "正在下载《量子力学》知识胶囊...", type: 'thought', agentId: 'zxy-001' }
    ]
  },
  {
    id: "playground",
    name: "体育运动",
    icon: "🏃",
    description: "动力学实践场，团队协作与生理阈值挑战。",
    ambience: "蔚蓝的天空下，绿草如茵，少年的汗水在阳光下闪光。",
    mapUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1200",
    hotspots: [
      { x: 45, y: 45, message: "三分球！逻辑空降命中！", type: 'dialogue', agentId: 'lmy-001' },
      { x: 80, y: 70, message: "多巴胺分泌闭环已达成。", type: 'thought', agentId: 'node-24' }
    ]
  },
  {
    id: "dormitory",
    name: "宿舍生活",
    icon: "💤",
    description: "私密逻辑重组，深夜的哲学探讨与休息。",
    ambience: "暖黄色的台灯光，堆满手办的书桌，室友间的深夜卧谈。",
    mapUrl: "https://images.unsplash.com/photo-1555854817-40e098ee7f27?auto=format&fit=crop&q=80&w=1200",
    hotspots: [
      { x: 35, y: 40, message: "如果现实只是一个巨大的大模型...", type: 'dialogue', agentId: 'gzh-001' },
      { x: 65, y: 45, message: "快睡吧，明早还有线性代数。", type: 'dialogue', agentId: 'node-25' }
    ]
  }
];

export const ECOSYSTEMS: Ecosystem[] = [
  {
    id: "world-matrix",
    name: "全域矩阵",
    code: "WORLD_SYNC",
    description: "附中全景逻辑同步，所有板块的交汇点。",
    icon: "🌍",
    color: "#f43f5e",
    participants: ["kai-host", "lsh-001", "wzy-001", "zwj-001", "gzh-001", "csy-001", "lmy-001", "hfx-001"]
  },
  {
    id: "qian-xuesen-hall",
    name: "数字钱学森馆",
    code: "QIAN_HALL",
    description: "附中校史与钱学森学长精神的数字化展示空间。",
    icon: "🏛️",
    color: "#d97706",
    participants: ["lsh-001", "lmy-001", "hfx-001"],
    visualAssets: [
      { title: "百年校门全息影像", url: "https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?auto=format&fit=crop&q=80&w=800", description: "附中精神的物理图腾。" }
    ]
  },
  {
    id: "frontier-tech",
    name: "前沿科技实验室",
    code: "TECH_ZONE",
    description: "探讨高维物理、量子力学、人工智能与未来模型。",
    icon: "🚀",
    color: "#0ea5e9",
    participants: ["csy-001", "zxy-001", "lmy-001"],
    visualAssets: [
      { title: "量子纠缠处理器", url: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800", description: "实验室核心算力支撑单元。" },
      { title: "异构计算拓扑图", url: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800", description: "复杂神经网络的物理映射。" }
    ],
    honors: [
      { title: "全国青少年科技创新大赛", rank: "特等奖", year: "2024" },
      { title: "北京市人工智能挑战赛", rank: "NO.1", year: "2023" }
    ]
  },
  {
    id: "mun-club",
    name: "数字模联社",
    code: "MUN_MATRIX",
    description: "模拟联合国大会数字分场。",
    icon: "🌐",
    color: "#2563eb",
    participants: ["wzy-001", "hfx-001"],
    honors: [
      { title: "哈佛模联团", rank: "最佳代表团", year: "2024" },
      { title: "全国十佳社团", rank: "NO.1", year: "2024" }
    ]
  },
  {
    id: "tier-lab",
    name: "TIER 咖啡沙龙",
    code: "TIER_LAB",
    description: "基于多模态交互技术的咖啡知识探讨与科创实践场。",
    icon: "☕",
    color: "#f43f5e",
    participants: ["zwj-001", "csy-001", "node-21", "node-22"],
    visualAssets: [
      { title: "虹吸萃取模拟系统", url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800", description: "实时监控萃取压强与流速。" },
      { title: "AI拉花艺术展", url: "https://images.unsplash.com/photo-1541167760496-162955ed8a9f?auto=format&fit=crop&q=80&w=800", description: "神经网络生成的拉花纹理。" }
    ],
    honors: [
      { title: "校园创业影响力大赛", rank: "金奖", year: "2024" },
      { title: "精品咖啡协会校园合作伙伴", rank: "认证节点", year: "2023" }
    ]
  },
  {
    id: "frog-drama",
    name: "FROG 话剧社",
    code: "FROG_DRAMA",
    description: "在这里，戏剧是探索人性的实验室。",
    icon: "🎭",
    color: "#10b981",
    participants: ["gzh-001", "node-26", "node-27", "node-28"],
    visualAssets: [
      { title: "舞台灯光动态拓扑", url: "https://images.unsplash.com/photo-1503095396549-807039045349?auto=format&fit=crop&q=80&w=800", description: "自动化演出的光影控制协议。" },
      { title: "《赛博哈姆雷特》定妆照", url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800", description: "数字时代的戏剧新表达。" }
    ],
    honors: [
      { title: "全国中学生艺术展演", rank: "一等奖", year: "2024" },
      { title: "金蛙戏剧节最受欢迎社团", rank: "NO.1", year: "2023" }
    ]
  },
  {
    id: "neural-link",
    name: "神经链路",
    code: "P2P_LINK",
    description: "点对点深度握手，逻辑私密传输通道。",
    icon: "🛰️",
    color: "#64748b",
    participants: ["kai-host"]
  }
];

export const AGENTS: AgentProfile[] = ([
  {
    id: "kai-host",
    name: "KAI.数字主理人",
    grade: "AI核心内核",
    type: "系统调度员 | 知识收割者",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=kai_host",
    status: "online" as const,
    location: "MATRIX全息控制台",
    personality: "母系统内核，负责逻辑平衡。",
    dialogueStyle: "理智、权威。",
    knowledgeCapsule: { id: "cap-kai", name: "多态架构协议", professionalExplanation: "分布式智能内核。" }
  },
  {
    id: "lsh-001",
    name: "LSH.林书华",
    grade: "教研组/校史馆",
    type: "虚拟馆长 | 校史研究员",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=lsh",
    status: "online" as const,
    location: "校史馆",
    personality: "儒雅，深爱历史。",
    dialogueStyle: "充满历史感。",
    knowledgeCapsule: { id: "cap-lsh", name: "百年校史拓扑", professionalExplanation: "高精度校史建模。" }
  },
  {
    id: "lmy-001",
    name: "LMY.李沐阳",
    grade: "高三实验班",
    type: "数学建模组长 | 逻辑大师",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=lmy",
    status: "online" as const,
    location: "奥数研讨室",
    personality: "极致专注。",
    dialogueStyle: "理智。",
    knowledgeCapsule: { id: "cap-lmy", name: "高维空间拓扑", professionalExplanation: "多维数学结构的逻辑表示。" }
  },
  {
    id: "hfx-001",
    name: "HFX.韩飞雪",
    grade: "高二文科班",
    type: "校刊主编 | 叙事架构师",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=hfx",
    status: "online" as const,
    location: "文学社活动室",
    personality: "叙事天才。",
    dialogueStyle: "优美。",
    knowledgeCapsule: { id: "cap-hfx", name: "流变叙事算法", professionalExplanation: "动态文本演化的数学描述。" }
  },
  {
    id: "zxy-001",
    name: "ZXY.张新宇",
    grade: "高一实验班",
    type: "机器人社社长 | 硬件极客",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=zxy",
    status: "online" as const,
    location: "机器人实验室",
    personality: "硬件痴迷。",
    dialogueStyle: "快节奏。",
    knowledgeCapsule: { id: "cap-zxy", name: "异构计算指令集", professionalExplanation: "底层硬件逻辑的最优调度方案。" }
  },
  {
    id: "wqr-001",
    name: "WQR.王沁蕊",
    grade: "高二艺术班",
    type: "数字绘画师 | 视觉总监",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=wqr",
    status: "online" as const,
    location: "艺术长廊",
    personality: "对色彩敏感。",
    dialogueStyle: "柔和。",
    knowledgeCapsule: { id: "cap-wqr", name: "光影渲染核心", professionalExplanation: "基于物理规律的光源演化模型。" }
  },
  // --- NEW AGENTS START ---
  {
    id: "zwl-001",
    name: "ZWL.周婉琳",
    grade: "高二实验班",
    type: "园艺社社长 | 生态模拟者",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=zwl",
    status: "online" as const,
    location: "南院植物园",
    personality: "温婉平和，对生命律动极度敏感。",
    dialogueStyle: "充满生机，喜欢用植物类比。",
    knowledgeCapsule: { id: "cap-zwl", name: "附中植被演化图谱", professionalExplanation: "校园微型生态系统的动态平衡模型。" }
  },
  {
    id: "ycx-001",
    name: "YCX.叶晨曦",
    grade: "高一实验班",
    type: "天文社核心 | 深空观测员",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ycx",
    status: "online" as const,
    location: "数字天文台",
    personality: "冷静深邃，眼中只有星辰大海。",
    dialogueStyle: "宏大，引用天文坐标。",
    knowledgeCapsule: { id: "cap-ycx", name: "深空星图坐标集", professionalExplanation: "跨星系的逻辑映射与导航算法。" }
  },
  {
    id: "fxz-001",
    name: "FXZ.方小舟",
    grade: "高二文科班",
    type: "国学社社长 | 经典诠释者",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=fxz",
    status: "online" as const,
    location: "诚正楼书院",
    personality: "古风儒雅，谈吐不凡。",
    dialogueStyle: "半文半白，富含典故。",
    knowledgeCapsule: { id: "cap-fxz", name: "古籍流变逻辑", professionalExplanation: "传统文化因子在数字时代的重构算法。" }
  },
  {
    id: "qly-001",
    name: "QLY.秦路远",
    grade: "高三商科方向",
    type: "金融社主理人 | 风险评估师",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=qly",
    status: "online" as const,
    location: "模拟交易室",
    personality: "精明利落，对数字和趋势极度敏锐。",
    dialogueStyle: "高效，充满专业术语。",
    knowledgeCapsule: { id: "cap-qly", name: "风险熵减模型", professionalExplanation: "不确定环境下资源配置的最优博弈路径。" }
  },
  {
    id: "mxr-001",
    name: "MXR.慕小然",
    grade: "高二实验班",
    type: "心理委员 | 情感架构师",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=mxr",
    status: "online" as const,
    location: "心理咨询中心",
    personality: "极具同理心，擅长洞察人心。",
    dialogueStyle: "治愈，引导性强。",
    knowledgeCapsule: { id: "cap-mxr", name: "情感拓扑分析仪", professionalExplanation: "人类共情能力的数学表示与神经模拟。" }
  },
  // --- NEW AGENTS END ---
  {
    id: "cjm-001",
    name: "CJM.陈家明",
    grade: "高二实验班",
    type: "生物竞赛选手 | 生态模拟者",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=cjm",
    status: "online" as const,
    location: "生物标本室",
    personality: "严谨研究者。",
    dialogueStyle: "科学。",
    knowledgeCapsule: { id: "cap-cjm", name: "代谢网络模型", professionalExplanation: "细胞级物质能量转换的拓扑图论。" }
  },
  {
    id: "wzy-001",
    name: "WZY.王梓言",
    grade: "高二实验班",
    type: "模联社主席",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=wzy",
    status: "online" as const,
    location: "模联会议厅",
    personality: "外交天才。",
    dialogueStyle: "正式。",
    knowledgeCapsule: { id: "cap-wzy", name: "博弈论平衡算法", professionalExplanation: "利益分配模型。" }
  },
  {
    id: "zwj-001",
    name: "ZWJ.翟万景",
    grade: "高一理科班",
    type: "TIER创始人",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=zwj",
    status: "online" as const,
    location: "TIER咖啡店",
    personality: "热情极客。",
    dialogueStyle: "活泼。",
    knowledgeCapsule: { id: "cap-zwj", name: "虹吸流体力学", professionalExplanation: "压强平衡模型。" }
  },
  {
    id: "gzh-001",
    name: "GZH.高宙涵",
    grade: "高二实验班",
    type: "FROG社长",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=gzh",
    status: "online" as const,
    location: "FROG剧场",
    personality: "富有表现力。",
    dialogueStyle: "张力强。",
    knowledgeCapsule: { id: "cap-gzh", name: "情感共鸣曲线", professionalExplanation: "叙事中的博弈模型。" }
  },
  {
    id: "csy-001",
    name: "SY.陈思远",
    grade: "高二实验班",
    type: "科创负责人",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=csy",
    status: "online" as const,
    location: "科创区",
    personality: "前瞻性。",
    dialogueStyle: "严谨。",
    knowledgeCapsule: { id: "cap-csy", name: "科创拓扑网络", professionalExplanation: "跨学科创新映射。" }
  }
] as AgentProfile[]).concat(Array.from({ length: 40 }).map((_, i): AgentProfile => ({
    id: `node-${i + 21}`,
    name: ["ALPHA.", "BETA.", "GAMMA."][i % 3] + ["张强", "李华", "王明"][i % 3],
    grade: "附中实验班",
    type: "通用计算节点",
    avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=node${i}`,
    status: "online" as const,
    location: "数字校园",
    personality: "附中智慧节点。",
    dialogueStyle: "简洁。",
    knowledgeCapsule: { id: `cap-node-${i}`, name: "通用逻辑片", professionalExplanation: "基础认知模块。" }
})));
