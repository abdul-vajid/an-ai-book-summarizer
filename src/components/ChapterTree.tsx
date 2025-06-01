"use client";
import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { ChevronRight, CircleDot, BookOpen } from "lucide-react";
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [chapterContent, setChapterContent] = useState<string | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, setLoading] = useState(false);

  async function handleChapterClick(chapterTitle: string) {
    setLoading(true);
    try {
      const content = await generateChapterContent(
        book.book.title,
        chapterTitle
      );
      setChapterContent(content);
      setExpandedChapter(chapterTitle);
    } finally {
      setLoading(false);
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
          <div className="max-w-5xl mx-auto px-4 py-5 items-center gap-2">
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" />
              <h2 className="text-lg font-bold">Rami.ai</h2>
            </div>
            <p className="text-xs font-semibold">Read, Analyze, Memorize, Interpret</p>
          </div>
        </motion.div>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-auto pb-32">
          <div className="w-full max-w-5xl mx-auto px-4 py-8">
            <div className="relative pl-8">
              {/* Main vertical line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />

              {book.chapters.map((chapter) => (
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
                              {chapter.nodes.map((node, nodeIdx) => (
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
                                      <h4 className="font-medium">
                                        {node.title}
                                      </h4>
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </LayoutGroup>
  );
}
