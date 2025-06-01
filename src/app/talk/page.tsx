"use client";
import { useState } from "react";
import BookPromptInput from "@/components/BookPromptInput";
import ChapterTree from "@/components/ChapterTree";
import type { BookSummary } from "@/types/book.interface";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import { usePostHog } from "posthog-js/react";

interface SearchResult {
  title: string;
  author: string;
}

export default function TalkPage() {
  const posthog = usePostHog();
  const [selectedBook, setSelectedBook] = useState<BookSummary | null>(null);
  const [generating, setGenerating] = useState(false);
  const [isLocked, setIsLocked] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function generateBookContent(book: SearchResult) {
    setGenerating(true);
    setError(null);

    posthog?.capture("book_generation_started", {
      title: book.title,
      author: book.author,
    });

    try {
      const response = await fetch("/api/google-ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(book),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to generate content");
      }

      const bookContent: BookSummary = await response.json();
      console.log("Generated book content:", bookContent);
      setSelectedBook(bookContent);
      setIsLocked(true);

      posthog?.capture("book_generation_completed", {
        title: book.title,
        author: book.author,
        success: true,
      });
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Failed to generate book content";
      setError(message);

      posthog?.capture("book_generation_failed", {
        title: book.title,
        author: book.author,
        error: message,
      });

      console.error("Failed to generate book content:", error);
    } finally {
      setGenerating(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <div className="flex-1 flex items-center justify-center">
        {generating ? (
          <div className="text-center space-y-4">
            <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full mx-auto"></div>
            <p className="text-xl text-muted-foreground">
              Analyzing book content...
            </p>
            <p className="text-sm text-muted-foreground/60">
              This might take a minute...
            </p>
          </div>
        ) : error ? (
          <div className="text-center text-destructive space-y-2">
            <p className="text-xl">{error}</p>
            <Button onClick={() => setError(null)}>Try Again</Button>
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
            <div className="flex flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary flex-shrink-0" />
                  <p className="font-medium truncate">
                    {selectedBook?.book?.title ?? "Book title not found!"}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground truncate pl-7 sm:pl-0">
                  by {selectedBook?.book?.author ?? "Unknown author"}
                </p>
              </div>
              <Button
                className="flex-shrink-0"
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
