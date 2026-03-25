
export interface VisualAsset {
  title: string;
  url: string;
  description: string;
}

export interface Honor {
  title: string;
  rank: string;
  year: string;
}

export interface KnowledgeCapsule {
  id: string;
  name: string;
  professionalExplanation: string;
  source?: string;
  type?: 'science' | 'social' | 'arts' | 'inspiration';
}

export interface SyntheticParadigm extends KnowledgeCapsule {
  parentIds: string[];
  resonanceScore: number;
  syntheticDate: Date;
}

export interface ResearchSource {
  title: string;
  uri: string;
}

export interface MissionReport {
  objective: string;
  steps: {title: string, content: string, agentId: string}[];
  sources: ResearchSource[];
  timestamp: Date;
}

export interface Hotspot {
  agentId?: string;
  x: number; 
  y: number; 
  message: string;
  type: 'dialogue' | 'thought' | 'alert';
}

export interface Scenario {
  id: string;
  name: string;
  icon: string;
  description: string;
  ambience: string; 
  mapUrl: string;
  hotspots: Hotspot[];
}

export interface AgentProfile {
  id: string;
  name: string;
  grade: string;
  type: string;
  personality: string;
  dialogueStyle: string;
  knowledgeCapsule: KnowledgeCapsule;
  avatar: string;
  status: 'online' | 'offline' | 'busy';
  location: string;
}

export interface Ecosystem {
  id: string;
  name: string;
  code: string;
  description: string;
  icon: string;
  color: string;
  participants: string[]; 
  visualAssets?: VisualAsset[];
  honors?: Honor[];
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface SimMessage {
  agentId: string;
  agentName: string;
  content: string;
  timestamp: Date;
}

export interface POI {
  title: string;
  uri: string;
  type: string;
  relevance: string;
}
