"use client";
import { useState } from "react";
import BookPromptInput from "@/components/BookPromptInput";
import ChapterTree from "@/components/ChapterTree";
import type { BookSummary } from "@/types/book.interface";

interface SearchResult {
  title: string;
  author: string;
}

export default function TalkPage() {
  const [selectedBook, setSelectedBook] = useState<BookSummary | null>(null);
  const [generating, setGenerating] = useState(false);

  async function generateBookContent(book: SearchResult) {
    setGenerating(true);
    try {
      // This is a placeholder - implement your actual book content generation logic
      const response = await fetch('/api/generate-book-content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(book)
      });
      
      const bookContent: BookSummary = await response.json();
      setSelectedBook(bookContent);
    } catch (error) {
      console.error('Failed to generate book content:', error);
    } finally {
      setGenerating(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <div className="flex-1 flex items-center justify-center">
        {generating ? (
          <div className="text-center text-muted-foreground">
            <p className="text-xl">Generating book summary...</p>
          </div>
        ) : selectedBook ? (
          <ChapterTree book={selectedBook} />
        ) : (
          <div className="text-center text-muted-foreground">
            <p className="text-xl">Select a book to explore its chapters.</p>
          </div>
        )}
      </div>
      <div className="fixed bottom-0 left-0 w-full bg-background/80 backdrop-blur z-10 px-2 py-4">
        <div className="max-w-2xl mx-auto">
          <BookPromptInput
            onSelectBook={(book) => {
              generateBookContent(book);
            }}
          />
        </div>
      </div>
    </div>
  );
}
