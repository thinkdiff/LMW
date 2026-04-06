"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

interface PageTransitionProps {
  children: React.ReactNode;
}

const variants = {
  initial: {
    opacity: 0,
    y: 20,
    filter: "blur(8px)",
  },
  enter: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    filter: "blur(4px)",
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Curtain that sweeps across on page change
const curtainVariants = {
  initial: { scaleX: 0, originX: 0 },
  enter: {
    scaleX: 1,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    scaleX: 0,
    originX: 1,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: 0.1 },
  },
};

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname}>
        {/* Sweep curtain */}
        <motion.div
          className="fixed inset-0 bg-obsidian-light z-[9990] pointer-events-none"
          variants={curtainVariants}
          initial="initial"
          animate="exit"
        />

        {/* Page content fade */}
        <motion.div
          variants={variants}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
