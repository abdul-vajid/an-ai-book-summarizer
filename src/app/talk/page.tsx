"use client";
import { useState } from "react";
import BookPromptInput from "@/components/BookPromptInput";
import ChapterTree from "@/components/ChapterTree";
import type { BookSummary } from "@/types/book.interface";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

interface SearchResult {
  title: string;
  author: string;
}

export default function TalkPage() {
  const [selectedBook, setSelectedBook] = useState<BookSummary | null>(null);
  const [generating, setGenerating] = useState(false);
  const [isLocked, setIsLocked] = useState(false);

  async function generateBookContent(book: SearchResult) {
    setGenerating(true);
    try {
      const response = await fetch('/api/generate-book-content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(book)
      });
      
      const bookContent: BookSummary = await response.json();
      setSelectedBook(bookContent);
      setIsLocked(true);
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
      <div className="fixed bottom-0 left-0 w-full bg-background/80 backdrop-blur z-10 px-2 py-4 border-t">
        <div className="max-w-2xl mx-auto">
          {isLocked ? (
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2 flex-1">
                <BookOpen className="w-5 h-5 text-primary" />
                <p className="font-medium truncate">{selectedBook?.book.title}</p>
                <p className="text-sm text-muted-foreground truncate">
                  by {selectedBook?.book.author}
                </p>
              </div>
              <Button
                onClick={() => {
                  setIsLocked(false);
                  setSelectedBook(null);
                }}
              >
                Search Another Book
              </Button>
            </div>
          ) : (
            <BookPromptInput
              onSelectBook={generateBookContent}
              lockedBook={selectedBook}
            />
          )}
        </div>
      </div>
    </div>
  );
}
