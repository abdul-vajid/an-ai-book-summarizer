import type { BookSummary } from "@/types/book.interface";

interface ChapterTreeProps {
  book: BookSummary;
}

export default function ChapterTree({ book }: ChapterTreeProps) {
  // Reverse chapters for bottom-to-top
  const chapters = [...book.chapters].reverse();

  return (
    <div className="flex flex-col items-center w-full max-w-xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-8 text-center">{book.book.title}</h2>
      <div className="flex flex-col-reverse items-center gap-0 relative w-full">
        {chapters.map((chapter, idx) => (
          <div key={chapter.title} className="flex flex-col items-center w-full">
            {/* Connector line except for bottom node */}
            {idx !== chapters.length - 1 && (
              <div className="w-1 h-8 bg-border" />
            )}
            <div className="bg-card shadow-lg rounded-xl px-6 py-4 mb-2 w-full flex flex-col items-center border border-border">
              <span className="font-semibold text-lg">{chapter.title}</span>
              {/* Optionally show nodes/summary */}
              {/* <ul className="mt-2 text-sm text-muted-foreground">
                {chapter.nodes.map((node) => (
                  <li key={node.title}>{node.title}</li>
                ))}
              </ul> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
