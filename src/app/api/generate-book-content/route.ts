import { NextResponse } from 'next/server';
import type { BookSummary } from '@/types/book.interface';

export async function POST(request: Request) {
  try {
    const book = await request.json();

    // Generate more chapters (this is a placeholder - implement actual generation)
    const bookContent: BookSummary = {
      book: {
        title: book.title,
        author: book.author,
        intro: `A comprehensive guide to ${book.title}`,
      },
      chapters: Array.from({ length: 10 }, (_, i) => ({
        title: `Chapter ${i + 1}`,
        nodes: Array.from({ length: 3 }, (_, j) => ({
          title: `Topic ${j + 1}`,
          summary: `Summary of chapter ${i + 1}, topic ${j + 1}`,
          deepDive: `Detailed exploration of topic ${j + 1}`
        }))
      }))
    };

    return NextResponse.json(bookContent);
  } catch (error: unknown) {
    console.error('Error generating book content:', error);
    return NextResponse.json(
      { error: 'Failed to generate book content' },
      { status: 500 }
    );
  }
}
