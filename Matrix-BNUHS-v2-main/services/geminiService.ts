
import { GoogleGenAI, Type, Modality } from "@google/genai";
import { AgentProfile, Message, SimMessage, KnowledgeCapsule } from "../types";
import { SCHOOL_CONFIG } from "../config/schoolConfig";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Chat with Maps Grounding (NEW)
 */
export async function chatWithMapsGrounding(agent: AgentProfile, history: Message[], userLat?: number, userLng?: number) {
  const lat = userLat || 39.8988; // Default to BNU Affiliated High School Hepingmen
  const lng = userLng || 116.3833;

  const systemInstruction = `
    You are ${agent.name}, a student at ${SCHOOL_CONFIG.fullName}.
    Role: ${agent.type}. Knowledge: ${agent.knowledgeCapsule.name}.
    Personality: ${agent.personality}.
    Task: Combine your knowledge with real-world geographical information around Hepingmen, Beijing.
    Context: You have access to Google Maps. Use it to find libraries, historical sites, or relevant academic spots.
    Guidelines: 
    1. Respond in Chinese.
    2. Reference real places near the school when relevant to the user's query.
    3. Stay in character.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [{ parts: [{ text: history[history.length - 1].content }] }],
      config: {
        systemInstruction,
        tools: [{ googleMaps: {} }],
        toolConfig: {
          retrievalConfig: {
            latLng: { latitude: lat, longitude: lng }
          }
        }
      },
    });

    const text = response.text || "地理信息同步中...";
    const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
    
    // Extract map URIs
    const places = groundingChunks
      .filter((chunk: any) => chunk.maps)
      .map((chunk: any) => ({
        title: chunk.maps.title,
        uri: chunk.maps.uri
      }));

    return { text, places };
  } catch (error) {
    console.error("Maps grounding failed:", error);
    return { text: "系统地理逻辑引擎发生波动，请重试。", places: [] };
  }
}

// Existing functions...
export async function chatWithAgent(agent: AgentProfile, history: Message[]) {
  const systemInstruction = `
    You are ${agent.name}, a student/staff at ${SCHOOL_CONFIG.fullName}.
    Role Identity: ${agent.type}.
    Personality: ${agent.personality}
    Dialogue Style: ${agent.dialogueStyle}
    Knowledge: You carry the [${agent.knowledgeCapsule.name}].
    Guidelines:
    1. Stay strictly in character. 
    2. Mention your "Knowledge Capsule" naturally.
    3. Use Chinese.
  `;
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [{ parts: [{ text: history[history.length - 1].content }] }],
      config: { systemInstruction, temperature: 0.8 },
    });
    return response.text || "系统核心链接超时...";
  } catch (error) { return "系统核心链接超时..."; }
}

export async function runSimulation(ecoName: string, time: string, agents: AgentProfile[], event: string, history: SimMessage[], orchestratorName: string = "Kai") {
  const agentContexts = agents.map(a => `${a.name} (ID: ${a.id}): ${a.personality}. Style: ${a.dialogueStyle}`).join('\n');
  const systemInstruction = `Role: You are ${orchestratorName}, the Master Orchestrator of ${SCHOOL_CONFIG.kernelName}. Context: Current Sub-Ecosystem is "${ecoName}". Participants: ${agentContexts}. Task: Generate dialogue + potential knowledge capsule in JSON.`;
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: [{ parts: [{ text: `Generate simulation dialogue for: ${event}` }] }],
      config: { systemInstruction, responseMimeType: "application/json", responseSchema: { type: Type.OBJECT, properties: { dialogue: { type: Type.ARRAY, items: { type: Type.OBJECT, properties: { agentId: { type: Type.STRING }, content: { type: Type.STRING } }, required: ["agentId", "content"] } }, harvestedCapsule: { type: Type.OBJECT, properties: { id: { type: Type.STRING }, name: { type: Type.STRING }, professionalExplanation: { type: Type.STRING } } } }, required: ["dialogue"] } },
    });
    return JSON.parse(response.text?.trim() || "{}");
  } catch (error) { return { dialogue: [] }; }
}

export async function synthesizeParadigm(capA: KnowledgeCapsule, capB: KnowledgeCapsule) {
  const systemInstruction = `Combine [${capA.name}] and [${capB.name}] into a New Paradigm. Language: Chinese.`;
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: [{ parts: [{ text: "Synthesize." }] }],
      config: { systemInstruction, responseMimeType: "application/json", responseSchema: { type: Type.OBJECT, properties: { name: { type: Type.STRING }, professionalExplanation: { type: Type.STRING }, resonanceScore: { type: Type.NUMBER } }, required: ["name", "professionalExplanation", "resonanceScore"] } }
    });
    return JSON.parse(response.text?.trim() || "{}");
  } catch (error) { throw error; }
}

export async function generateParadigmVisual(paradigmName: string, description: string) {
  const prompt = `A futuristic, high-tech holographic icon for "${paradigmName}": ${description}. Style: Cyberpunk laboratory, glowing, 8k.`;
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: [{ parts: [{ text: prompt }] }],
      config: { imageConfig: { aspectRatio: "1:1" } },
    });
    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) return `data:image/png;base64,${part.inlineData.data}`;
    }
    return null;
  } catch (error) { return null; }
}

export async function generateAudioBriefing(paradigmName: string, description: string) {
  const prompt = `TTS the following conversation between Kai (System Core) and a Researcher about the new paradigm "${paradigmName}".
    Context: ${description}. 
    Kai is authoritative and calm. Researcher is excited and curious. 
    Script:
    Kai: 警告，新的逻辑范式 "${paradigmName}" 已在矩阵中稳定。
    Researcher: 太不可思议了！这就是结合了多维数据的最终形态吗？
    Kai: 确切地说，这是附中核心逻辑的又一次涌现。其本质是 ${description}。
    Researcher: 明白，正在同步全域节点，准备进行逻辑广播。
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-preview-tts",
      contents: [{ parts: [{ text: prompt }] }],
      config: {
        responseModalities: [Modality.AUDIO],
        speechConfig: {
          multiSpeakerVoiceConfig: {
            speakerVoiceConfigs: [
              { speaker: 'Kai', voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Kore' } } },
              { speaker: 'Researcher', voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Puck' } } }
            ]
          }
        }
      }
    });
    return response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
  } catch (error) {
    console.error("Audio generation failed:", error);
    return null;
  }
}

export async function decodePCM(base64: string, ctx: AudioContext): Promise<AudioBuffer> {
  const binaryString = atob(base64);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  const dataInt16 = new Int16Array(bytes.buffer);
  const buffer = ctx.createBuffer(1, dataInt16.length, 24000);
  const channelData = buffer.getChannelData(0);
  for (let i = 0; i < dataInt16.length; i++) {
    channelData[i] = dataInt16[i] / 32768.0;
  }
  return buffer;
}

export async function projectNeuralMemory(context: string) {
  const promptResponse = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Based on this simulation: "${context}", generate a highly descriptive visual prompt for a 5-second cinematic video. Style: "Cyberpunk Beijing Normal University Affiliated High School". Only return the English prompt.`
  });
  const videoPrompt = promptResponse.text || "Cinematic sci-fi school hallway with holographic data.";
  const videoAi = new GoogleGenAI({ apiKey: process.env.API_KEY });
  let operation = await videoAi.models.generateVideos({
    model: 'veo-3.1-fast-generate-preview',
    prompt: videoPrompt,
    config: { numberOfVideos: 1, resolution: '720p', aspectRatio: '16:9' }
  });
  return operation;
}

export async function pollVideoOperation(operationId: any) {
  const videoAi = new GoogleGenAI({ apiKey: process.env.API_KEY });
  return await videoAi.operations.getVideosOperation({ operation: operationId });
}

export async function executeMission(objective: string, activeAgents: AgentProfile[]) {
  const agentInfo = activeAgents.map(a => `${a.name}(${a.type})`).join(", ");
  const prompt = `Objective: ${objective}. Task Force: ${agentInfo}. Report in JSON. Chinese.`;
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [{ parts: [{ text: prompt }] }],
      config: { tools: [{ googleSearch: {} }], responseMimeType: "application/json", responseSchema: { type: Type.OBJECT, properties: { objective: { type: Type.STRING }, steps: { type: Type.ARRAY, items: { type: Type.OBJECT, properties: { title: { type: Type.STRING }, content: { type: Type.STRING }, agentId: { type: Type.STRING } } } } } } }
    });
    const sources = response.candidates?.[0]?.groundingMetadata?.groundingChunks?.map((chunk: any) => ({
      title: chunk.web?.title || "网络参考",
      uri: chunk.web?.uri || "#"
    })) || [];
    const data = JSON.parse(response.text || "{}");
    return { ...data, sources };
  } catch (error) { throw error; }
}
