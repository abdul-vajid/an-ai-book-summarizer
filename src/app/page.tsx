"use client";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { RouteTransition } from "@/components/RouteTransition";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const [showTribute, setShowTribute] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTribute(false);
    }, 3000); // Show tribute for 5 seconds

    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <RouteTransition>
      <motion.main
        className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-4 relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-4"
          variants={itemVariants}
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Rami
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.7 }}
            className="text-primary"
          >
            .ai
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-2xl mb-8 text-muted-foreground font-[var(--font-geist-mono)]"
          variants={itemVariants}
        >
          Read, Analyze, Memorize, Interpret
        </motion.p>

        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            size="lg"
            className="rounded-full shadow-lg px-8 cursor-pointer"
            onClick={() => {
              router.push("/talk");
            }}
          >
            Get Started
          </Button>
        </motion.div>

        <motion.div
          className="absolute bottom-4 text-center text-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <AnimatePresence mode="wait">
            {showTribute ? (
              <motion.p
                key="tribute"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-muted-foreground/80 max-w-md px-4 italic"
              >
                Rami.ai was born from <span className="text-red-500">love ❤️ </span> – a gift of understanding, designed to
                read deeply and think wisely, just like her.
              </motion.p>
            ) : (
              <motion.p
                key="credit"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-muted-foreground/60"
              >
                An experimental project by{" "}
                <a
                  href="https://github.com/abdul-vajid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline font-medium text-red-500"
                >
                  @vaajiee
                </a>
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.main>
    </RouteTransition>
  );
}
