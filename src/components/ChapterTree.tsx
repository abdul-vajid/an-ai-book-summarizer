"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { ChevronRight, CircleDot, BookOpen, AlertCircle } from "lucide-react";
import type { BookSummary } from "@/types/book.interface";
import { generateChapterContent } from "@/app/actions/book.actions";

const spring = {
  type: "spring",
  stiffness: 150,
  damping: 20,
  mass: 0.5,
};

export default function ChapterTree({ book }: { book: BookSummary }) {
  const [expandedChapter, setExpandedChapter] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [chapterNodes, setChapterNodes] = useState<Record<string, any[]>>({});

  useEffect(() => {
    if (expandedChapter && !chapterNodes[expandedChapter]) {
      fetchChapterNodes(expandedChapter);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expandedChapter]);

  // Guard against invalid book data
  if (!book || !book.book || !Array.isArray(book.chapters)) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center">
        <AlertCircle className="w-12 h-12 text-destructive mb-4" />
        <h3 className="text-lg font-semibold mb-2">
          Unable to Load Book Content
        </h3>
        <p className="text-muted-foreground max-w-md">
          We encountered an issue while loading the book content. Please try
          selecting the book again.
        </p>
      </div>
    );
  }

  async function handleChapterClick(chapterTitle: string) {
    setLoading(true);
    setError(null);
    try {
      const content = await generateChapterContent(
        book.book.title,
        chapterTitle
      );
      if (content && typeof content === "object" && "error" in content) {
        throw new Error((content as { error: string }).error);
      }
      setExpandedChapter(chapterTitle);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to load chapter content"
      );
    } finally {
      setLoading(false);
    }
  }

  async function fetchChapterNodes(chapterTitle: string) {
    try {
      const res = await fetch("/api/open-ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: book.book.title,
          author: book.book.author,
          chapter: chapterTitle,
        }),
      });
      const data = await res.json();
      if (data.nodes && Array.isArray(data.nodes)) {
        setChapterNodes((prev) => ({
          ...prev,
          [chapterTitle]: data.nodes,
        }));
      }
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to load chapter nodes"
      );
    }
  }

  return (
    <LayoutGroup>
      <div className="relative w-full min-h-screen flex flex-col">
        {/* Floating Book Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="sticky top-0 z-30 w-full bg-background/80 backdrop-blur-sm border-b border-border mt-20"
        >
          <div className="max-w-5xl mx-auto px-4 py-5 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-medium">{book.book.title}</h2>
          </div>
        </motion.div>

        {/* Error State */}
        {error && (
          <div className="p-4 mb-4 bg-destructive/10 border border-destructive/20 rounded-lg mx-4">
            <div className="flex items-center gap-2 text-destructive">
              <AlertCircle className="w-4 h-4" />
              <p>{error}</p>
            </div>
          </div>
        )}

        {/* Content Area */}
        <div className="flex-1 overflow-auto pb-32">
          <div className="w-full max-w-5xl mx-auto px-4 py-8">
            <div className="relative pl-8">
              {/* Main vertical line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />

              {book.chapters?.length > 0 ? (
                book.chapters.map((chapter) => (
                  <motion.div
                    key={chapter.title}
                    layout="position"
                    transition={spring}
                    className="mb-6 relative"
                  >
                    {/* Chapter connector line */}
                    <div className="absolute -left-4 top-6 w-4 h-px bg-border" />

                    <motion.div
                      layout="position"
                      className="relative bg-card border border-border rounded-lg shadow-lg overflow-hidden"
                    >
                      <button
                        onClick={() => handleChapterClick(chapter.title)}
                        className="w-full p-4 flex items-center gap-3 hover:bg-muted/50 transition-colors"
                      >
                        <CircleDot className="w-3 h-3 text-primary flex-shrink-0" />
                        <motion.div
                          animate={{
                            rotate: expandedChapter === chapter.title ? 90 : 0,
                          }}
                          transition={spring}
                          className="flex-shrink-0"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </motion.div>
                        <span className="font-semibold">{chapter.title}</span>
                      </button>

                      <AnimatePresence mode="popLayout">
                        {expandedChapter === chapter.title && (
                          <motion.div
                            layout
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={spring}
                            className="border-t border-border"
                          >
                            <div className="relative pl-8 py-4">
                              {/* Node vertical line */}
                              <div className="absolute left-6 top-0 bottom-0 w-px bg-border/50" />

                              <div className="space-y-3">
                                {(chapterNodes[chapter.title] || chapter.nodes).map((node, nodeIdx) => (
                                  <motion.div
                                    key={node.title}
                                    layout
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                      ...spring,
                                      delay: nodeIdx * 0.1,
                                    }}
                                    className="relative"
                                  >
                                    {/* Node connector line */}
                                    <div className="absolute -left-2 top-[14px] w-2 h-px bg-border/50" />

                                    <div className="bg-muted/30 rounded-lg p-4 hover:bg-muted/40 transition-colors">
                                      <div className="flex items-center gap-2 mb-2">
                                        <div className="w-2 h-2 rounded-full bg-primary/60" />
                                        <h4 className="font-medium">{node.title}</h4>
                                      </div>
                                      <p className="text-sm text-muted-foreground ml-4">
                                        {node.summary}
                                      </p>
                                      <motion.p
                                        layout
                                        className="text-sm mt-2 text-muted-foreground/80 italic ml-4"
                                      >
                                        {node.deepDive}
                                      </motion.p>
                                    </div>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </motion.div>
                ))
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <p>No chapters found for this book.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Loading Overlay */}
        {loading && (
          <div className="absolute inset-0 bg-background/50 backdrop-blur-sm flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
              <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full" />
              <p className="text-muted-foreground">Loading chapter content...</p>
            </div>
          </div>
        )}
      </div>
    </LayoutGroup>
  );
}