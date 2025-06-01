import { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { SendHorizontal } from "lucide-react";
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
    <div className="relative">
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
          className="absolute right-3 p-2 hover:bg-muted rounded-full transition-colors"
        >
          <SendHorizontal className="h-5 w-5 text-muted-foreground" />
        </button>
      </div>
      {showDropdown && filtered.length > 0 && (
        <ul className="absolute left-0 right-0 mt-2 bg-popover border border-border rounded-lg shadow-lg z-20 max-h-60 overflow-auto">
          {filtered.map((b, i) => (
            <li
              key={b.book.title}
              className={cn(
                "px-4 py-2 cursor-pointer transition-colors",
                i === highlighted
                  ? "bg-accent text-accent-foreground"
                  : "hover:bg-muted"
              )}
              onMouseDown={() => handleSelect(b)}
            >
              {b.book.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
