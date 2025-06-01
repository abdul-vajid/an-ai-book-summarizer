"use client";
import { useState } from "react";
import { books, allBooks } from "@/data";
import BookPromptInput from "@/components/BookPromptInput";
import ChapterTree from "@/components/ChapterTree";
import { BookCollection } from "@/types/book.interface";

export default function TalkPage() {
  const [selectedBookKey, setSelectedBookKey] = useState<keyof BookCollection | null>(null);

  const selectedBook = selectedBookKey ? books[selectedBookKey] : null;

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <div className="flex-1 flex items-center justify-center">
        {selectedBook ? (
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
            books={allBooks}
            onSelectBook={(book) => {
              // Find key by matching title
              const key = Object.keys(books).find(
                (k) => books[k as keyof BookCollection].book.title === book.book.title
              ) as keyof BookCollection;
              setSelectedBookKey(key ?? null);
            }}
          />
        </div>
      </div>
    </div>
  );
}
