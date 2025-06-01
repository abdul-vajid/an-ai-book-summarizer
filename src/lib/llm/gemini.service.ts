import { LLMService, LLMResponse } from './types';

export class GeminiService implements LLMService {
  private readonly apiKey: string;
  private readonly baseUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  private async makeRequest(prompt: string): Promise<LLMResponse> {
    try {
      const response = await fetch(`${this.baseUrl}?key=${this.apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
        }),
      });

      const data = await response.json();
      return {
        content: data.candidates[0].content.parts[0].text,
      };
    } catch (error) {
      return {
        content: '',
        error: error instanceof Error ? error.message : 'Unknown error occurred',
      };
    }
  }

  async generateBookSummary(bookTitle: string, author: string): Promise<LLMResponse> {
    const prompt = `Create a detailed chapter-by-chapter summary of "${bookTitle}" by ${author}. Format as JSON with the following structure:
    {
      "chapters": [
        {
          "title": "Chapter title",
          "summary": "Brief overview",
          "nodes": [
            {
              "title": "Key concept",
              "summary": "Brief explanation",
              "deepDive": "Detailed exploration"
            }
          ]
        }
      ]
    }`;

    return this.makeRequest(prompt);
  }

  async generateChapterContent(bookTitle: string, chapterTitle: string): Promise<LLMResponse> {
    const prompt = `Provide a detailed analysis of the chapter "${chapterTitle}" from "${bookTitle}". Include main concepts, key takeaways, and practical applications.`;
    return this.makeRequest(prompt);
  }
}
