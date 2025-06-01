import { NextResponse } from 'next/server';

const OPENAI_API_KEY = process.env.OPEN_API_KEY;
const OPENAI_API_URL = "https://api.openai.com/v1/chat/completions";

export async function POST(request: Request) {
  try {
    const { title, author, chapter } = await request.json();

    let prompt: string;
    if (chapter) {
      // Chapter content request
      prompt = `For the book "${title}" by ${author}, provide a detailed breakdown for the chapter "${chapter}". For each main topic in this chapter, give a concise summary and a deep dive (in JSON format: [{title, summary, deepDive}]).`;
    } else {
      // Book summary and chapters request
      prompt = `Analyze the book "${title}" by ${author} and provide a structured summary in the following exact JSON format:
{
  "book": {
    "title": "${title}",
    "author": "${author}",
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
- Each chapter must have exactly 3 nodes.
- Use proper JSON format.
- Ensure all text values are properly escaped.
Start JSON response:`;
    }

    const response = await fetch(OPENAI_API_URL, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7,
        max_tokens: 2048,
      }),
    });

    const data = await response.json();
    const text = data.choices?.[0]?.message?.content ?? "";

    // Try to parse JSON from the response
    let parsed: any = null;
    try {
      parsed = JSON.parse(text);
    } catch {
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        try {
          parsed = JSON.parse(jsonMatch[0]);
        } catch {
          parsed = null;
        }
      }
    }

    if (!parsed) {
      throw new Error("AI response is not valid JSON or does not match expected structure.");
    }

    // If it's a chapter content request, just return the array of nodes
    if (chapter) {
      return NextResponse.json({ nodes: parsed });
    }

    // Otherwise, it's a book summary
    return NextResponse.json(parsed);
  } catch (error: any) {
    const isRateLimit = error?.message?.includes("429") || (typeof error === "string" && error.includes("429"));
    return NextResponse.json(
      {
        error: isRateLimit
          ? "OpenAI is taking a nap! Please try again in a bit. 😴"
          : "Failed to generate book content",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: isRateLimit ? 429 : 500 }
    );
  }
}
