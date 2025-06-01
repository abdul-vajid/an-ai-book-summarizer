export interface LLMResponse {
  content: string;
  error?: string;
}

export interface LLMService {
  generateBookSummary: (bookTitle: string, author: string) => Promise<LLMResponse>;
  generateChapterContent: (bookTitle: string, chapterTitle: string) => Promise<LLMResponse>;
}
