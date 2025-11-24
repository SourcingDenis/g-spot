import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const generateCreativeIdea = async (topic: string, language: 'en' | 'uk'): Promise<string> => {
  if (!ai) {
    return language === 'uk' 
      ? "API ключ не налаштовано." 
      : "API Key not configured.";
  }

  try {
    const promptUk = `Ти — креативний асистент для Даші (g.spot), діджейки, продюсерки та маркетологині. 
    Твоя задача: придумати зухвалу, стильну ідею для музичного треку, маркетингової кампанії або візуалу на основі слова користувача.
    
    Слово: "${topic}"
    
    Правила:
    1. Відповідь українською.
    2. До 25 слів.
    3. Стиль: "Be Freaky", клубний, нічний, сучасний, трохи божевільний.
    
    Приклад:
    Вхід: "Ритм"
    Вихід: "Запиши звук серцебиття на рейві о 4 ранку і наклади на нього бас-лінію з перегрузом."`;

    const promptEn = `You are a creative assistant for Dasha (g.spot), a DJ, producer, and marketer.
    Your task: invent a bold, stylish idea for a music track, marketing campaign, or visual based on the user's word.
    
    Word: "${topic}"
    
    Rules:
    1. Response in English.
    2. Under 25 words.
    3. Style: "Be Freaky", club, nightlife, modern, slightly insane.
    
    Example:
    Input: "Rhythm"
    Output: "Record the heartbeat of a rave at 4 AM and layer it with a distorted bassline."`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: language === 'uk' ? promptUk : promptEn,
    });

    return response.text || (language === 'uk' ? "Зв'язок з космосом втрачено." : "Connection with cosmos lost.");
  } catch (error) {
    console.error("Gemini API Error:", error);
    return language === 'uk' 
      ? "Вайб недоступний. Спробуй пізніше." 
      : "Vibe unavailable. Try again later.";
  }
};