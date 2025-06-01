import { NextResponse } from 'next/server';
import type { BookSummary } from '@/types/book.interface';
import { GoogleGenAI } from '@google/genai';

interface ErrorResponse {
  error: string;
  details?: string;
  code?: string;
}

const funnyRateLimitMessages = [
  "Whoops! Our AI is taking a coffee break. ☕ Try again in a few minutes!",
  "Our AI is doing yoga to destress. 🧘‍♂️ Please come back shortly!",
  "Too many books, too little time! 📚 Our AI needs a breather.",
  "Our AI is feeling a bit overwhelmed - like trying to read War and Peace in one sitting! 😅",
  "The AI hamsters need a nap. 🐹 Check back in a few!",
  "Brain.exe is temporarily unavailable. Have you tried turning it off and on again? 🔄",
  "Our AI is currently binge-reading other books. Please hold! 📖",
];

export async function POST(request: Request) {
  try {
    const book = await request.json();
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) throw new Error('GEMINI_API_KEY is not set');

    const ai = new GoogleGenAI({ apiKey });
    // Use JSON response type for better error handling
    const config = { responseMimeType: 'application/json' };
    const model = 'gemini-2.0-flash';

    const contents = [
      {
        role: 'user',
        parts: [
          {
            text: `Analyze the book "${book.title}" by ${book.author} and provide a structured summary in the following exact JSON format:
{
  "book": {
    "title": "${book.title}",
    "author": "${book.author}",
    "intro": "Brief introduction to the book's main theme"
  },
  "chapters": [
    {
      "title": "Chapter Title",
      "nodes": [
        {
          "title": "Key Concept Title",
          "summary": "Brief explanation of the concept",
          "deepDive": "Detailed exploration of the concept's application and importance"
        }
      ]
    }
  ]
}

Requirements:
1. Must fetch all chapters of the book
2. Each chapter must have exactly 3 nodes
3. Keep summaries concise (200-300 words)
4. Keep deep dives informative (500-2000 words based on chapter complexity)
5. Focus on actionable insights
6. Use proper JSON format
7. Ensure all text values are properly escaped

Start JSON response:`,
          },
        ],
      },
    ];

    const response = await ai.models.generateContentStream({
      model,
      config,
      contents,
    });

    let fullText = '';
    for await (const chunk of response) {
      if (chunk.text) fullText += chunk.text;
    }

    // Try to parse the AI response as JSON (should be valid JSON if model follows instructions)
    let parsedContent: any = null;
    try {
      parsedContent = JSON.parse(fullText);
    } catch {
      // fallback: try to extract JSON substring
      const jsonMatch = fullText.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        try {
          parsedContent = JSON.parse(jsonMatch[0]);
        } catch {
          parsedContent = null;
        }
      }
    }

    if (!parsedContent || !parsedContent.book || !Array.isArray(parsedContent.chapters)) {
      throw new Error('AI response is not valid JSON or does not match expected structure.');
    }

    const bookContent: BookSummary = {
      book: {
        title: book.title,
        author: book.author,
        intro: parsedContent.book?.intro || `A comprehensive guide to ${book.title}.`
      },
      chapters: parsedContent.chapters.slice(0, 7).map((chapter: any, index: number) => ({
        title: chapter.title || `Chapter ${index + 1}`,
        nodes: (chapter.nodes || [])
          .slice(0, 3)
          .map((node: any, nIndex: number) => ({
            title: node.title || `Key Point ${nIndex + 1}`,
            summary: node.summary || 'Summary not available',
            deepDive: node.deepDive || 'Detailed explanation not available'
          }))
      }))
    };

    console.log('✅ Generated book content:', bookContent);

    return NextResponse.json(bookContent);
  } catch (error: any) {
    const isRateLimit = 
      (typeof error === "object" && error?.message?.includes("429")) ||
      (typeof error === "string" && error.includes("429"));

    const errorResponse: ErrorResponse = {
      error: isRateLimit 
        ? funnyRateLimitMessages[Math.floor(Math.random() * funnyRateLimitMessages.length)]
        : "Failed to generate book content",
      code: isRateLimit ? "RATE_LIMIT" : "GENERATION_ERROR",
      details: error instanceof Error ? error.message : String(error)
    };

    console.error('Error details:', errorResponse);

    return NextResponse.json(errorResponse, { 
      status: isRateLimit ? 429 : 500 
    });
  }
}
