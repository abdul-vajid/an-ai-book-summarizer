import { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { SendHorizontal, Book, AlertCircle, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { BookSummary } from "@/types/book.interface";

interface BookPromptInputProps {
  onSelectBook: (book: SearchResult) => void;
  lockedBook?: BookSummary | null;
}

interface SearchResult {
  title: string;
  author: string;
}

function useDebouncedValue<T>(value: T, delay: number) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debounced;
}

export default function BookPromptInput({ onSelectBook }: BookPromptInputProps) {
  const [query, setQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [highlighted, setHighlighted] = useState(0);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [error, setError] = useState<string | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);
  const debouncedQuery = useDebouncedValue(query, 400);

  // Fetch from OpenLibrary for all queries
  useEffect(() => {
    setResults([]);
    setError(null);
    if (debouncedQuery.length > 2) {
      setLoading(true);
      axios
        .get("https://openlibrary.org/search.json", {
          params: { 
            q: debouncedQuery, 
            limit: 20,  // Increased limit
            fields: "title,author_name,first_publish_year,number_of_pages_median"
          },
        })
        .then((res) => {
          setResults(
            (res.data.docs || [])
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              .filter((doc: any) => doc.title && doc.author_name)
              .slice(0, 10)
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              .map((doc: any) => ({
                title: doc.title,
                author: Array.isArray(doc.author_name) ? doc.author_name[0] : "",
                year: doc.first_publish_year,
                pages: doc.number_of_pages_median
              }))
          );
        })
        .catch(() => setError("Could not fetch suggestions"))
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
      setResults([]);
    }
  }, [debouncedQuery]);

  useEffect(() => {
    setHighlighted(0);
  }, [query, results.length]);

  function handleSelect(book: SearchResult) {
    onSelectBook(book);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    const total = results.length;
    if (!showDropdown || total === 0) return;
    if (e.key === "ArrowDown") {
      setHighlighted((h) => (h + 1) % total);
      e.preventDefault();
    } else if (e.key === "ArrowUp") {
      setHighlighted((h) => (h - 1 + total) % total);
      e.preventDefault();
    } else if (e.key === "Enter") {
      handleSelect(results[highlighted]);
      e.preventDefault();
    }
  }

  const showNotFound =
    debouncedQuery.length > 2 &&
    !loading &&
    results.length === 0 &&
    !error;

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
            {loading && (
              <div className="flex items-center justify-center gap-2 p-4 text-muted-foreground">
                <Loader2 className="animate-spin w-4 h-4" />
                Searching books…
              </div>
            )}
            {results.length > 0 && (
              <ul className="max-h-60 overflow-auto py-2">
                {results.map((book, i) => (
                  <motion.li
                    key={book.title + book.author}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.03 }}
                    className={cn(
                      "px-4 py-2 cursor-pointer hover:bg-muted flex items-start gap-3",
                      i === highlighted && "bg-accent text-accent-foreground"
                    )}
                    onMouseDown={() => handleSelect(book)}
                  >
                    <Book className="w-5 h-5 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">{book.title}</p>
                      <p className="text-sm text-muted-foreground line-clamp-1">
                        {book.author}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            )}
            {error && (
              <div className="flex items-center gap-2 p-4 text-destructive">
                <AlertCircle className="w-5 h-5" />
                {error}
              </div>
            )}
            {showNotFound && (
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                className="p-4 text-center"
              >
                <AlertCircle className="w-6 h-6 text-destructive mx-auto mb-2 animate-bounce" />
                <p className="text-sm text-muted-foreground">
                  No books found matching &quot;{query}&quot;
                </p>
              </motion.div>
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
            if (results.length > 0) {
              handleSelect(results[0]);
            }
          }}
          className={cn(
            "absolute right-3 p-2 rounded-full transition-colors",
            results.length > 0
              ? "hover:bg-primary text-primary hover:text-primary-foreground"
              : "text-muted-foreground cursor-not-allowed"
          )}
          disabled={results.length === 0}
        >
          <SendHorizontal className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
