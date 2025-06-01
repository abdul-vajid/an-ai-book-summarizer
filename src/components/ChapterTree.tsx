"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, BookOpen } from "lucide-react";
import type { BookSummary } from "@/types/book.interface";
import { cn } from "@/lib/utils";

// Animation configs
const spring = {
  type: "spring",
  damping: 15,
  stiffness: 100,
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: spring,
};

export default function ChapterTree({ book }: { book: BookSummary }) {
  const [expandedChapter, setExpandedChapter] = useState<string | null>(null);
  const chapters = [...book.chapters].reverse();

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl md:text-3xl font-bold mb-8 text-center flex items-center justify-center gap-2"
      >
        <BookOpen className="w-6 h-6" />
        {book.book.title}
      </motion.h2>

      <div className="space-y-4">
        {chapters.map((chapter, idx) => (
          <motion.div
            key={chapter.title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...spring, delay: idx * 0.1 }}
            className="relative"
          >
            {/* Connector Line */}
            {idx !== chapters.length - 1 && (
              <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-border" />
            )}

            <motion.div
              className={cn(
                "relative z-10 bg-card border border-border rounded-lg shadow-lg overflow-hidden",
                expandedChapter === chapter.title && "ring-2 ring-primary"
              )}
              layout
              transition={spring}
            >
              <button
                onClick={() =>
                  setExpandedChapter(
                    expandedChapter === chapter.title ? null : chapter.title
                  )
                }
                className="w-full p-4 flex items-center gap-3 hover:bg-muted/50 transition-colors"
              >
                <motion.div
                  animate={{ rotate: expandedChapter === chapter.title ? 90 : 0 }}
                  transition={spring}
                >
                  <ChevronRight className="w-5 h-5 text-muted-foreground" />
                </motion.div>
                <span className="font-semibold text-lg">{chapter.title}</span>
              </button>

              <AnimatePresence mode="wait">
                {expandedChapter === chapter.title && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={spring}
                    className="border-t border-border"
                  >
                    <div className="p-4 space-y-3">
                      {chapter.nodes.map((node, nodeIdx) => (
                        <motion.div
                          key={node.title}
                          {...fadeInUp}
                          transition={{ ...spring, delay: nodeIdx * 0.1 }}
                          className="ml-6 p-3 bg-muted/30 rounded-md hover:bg-muted/50 transition-colors"
                        >
                          <h4 className="font-medium mb-1">{node.title}</h4>
                          <p className="text-sm text-muted-foreground">
                            {node.summary}
                          </p>
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            transition={spring}
                            className="text-sm mt-2 text-muted-foreground/80 italic"
                          >
                            {node.deepDive}
                          </motion.p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
