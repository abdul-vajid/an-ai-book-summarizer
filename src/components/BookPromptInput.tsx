import { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { SendHorizontal, Book, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { BookSummary } from "@/types/book.interface";

interface BookPromptInputProps {
  books: BookSummary[];
  onSelectBook: (book: BookSummary) => void;
}

export default function BookPromptInput({ books, onSelectBook }: BookPromptInputProps) {
  const [query, setQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [highlighted, setHighlighted] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = books.filter((b) =>
    b.book.title.toLowerCase().includes(query.toLowerCase())
  );

  const showNotFound = query.length > 0 && filtered.length === 0;

  useEffect(() => {
    setHighlighted(0);
  }, [query]);

  function handleSelect(book: BookSummary) {
    setQuery(book.book.title);
    setShowDropdown(false);
    onSelectBook(book);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (!showDropdown || filtered.length === 0) return;
    if (e.key === "ArrowDown") {
      setHighlighted((h) => (h + 1) % filtered.length);
      e.preventDefault();
    } else if (e.key === "ArrowUp") {
      setHighlighted((h) => (h - 1 + filtered.length) % filtered.length);
      e.preventDefault();
    } else if (e.key === "Enter") {
      handleSelect(filtered[highlighted]);
      e.preventDefault();
    }
  }

  return (
    <div className="flex flex-col gap-2">
      {/* Suggestions Panel */}
      <AnimatePresence>
        {query.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="w-full rounded-lg bg-card border border-border shadow-lg overflow-hidden mb-2"
          >
            {showNotFound ? (
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                className="p-4 text-center"
              >
                <AlertCircle className="w-6 h-6 text-destructive mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">
                  No books found matching &quot;{query}&quot;
                </p>
              </motion.div>
            ) : (
              <ul className="max-h-60 overflow-auto py-2">
                {filtered.map((book, i) => (
                  <motion.li
                    key={book.book.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className={cn(
                      "px-4 py-2 cursor-pointer hover:bg-muted flex items-start gap-3",
                      i === highlighted && "bg-accent text-accent-foreground"
                    )}
                    onMouseDown={() => handleSelect(book)}
                  >
                    <Book className="w-5 h-5 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">{book.book.title}</p>
                      <p className="text-sm text-muted-foreground line-clamp-1">
                        {book.book.author}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Input Field */}
      <div className="relative flex items-center">
        <Input
          ref={inputRef}
          type="text"
          placeholder="Type a book title…"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setShowDropdown(true);
          }}
          onFocus={() => setShowDropdown(true)}
          onBlur={() => setTimeout(() => setShowDropdown(false), 100)}
          onKeyDown={handleKeyDown}
          className="rounded-full pr-12 pl-6 py-4 text-base shadow-lg bg-card border border-border focus:ring-2 focus:ring-primary transition"
          autoComplete="off"
        />
        <button
          onClick={() => {
            if (filtered.length > 0) {
              handleSelect(filtered[0]);
            }
          }}
          className={cn(
            "absolute right-3 p-2 rounded-full transition-colors cursor-pointer",
            filtered.length > 0
              ? "hover:bg-primary text-primary hover:text-primary-foreground"
              : "text-muted-foreground cursor-not-allowed"
          )}
          disabled={filtered.length === 0}
        >
          <SendHorizontal className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
