"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-obsidian z-[99999] flex flex-col items-center justify-center gap-6">
      {/* Logo mark */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-16 h-16"
      >
        <div className="absolute inset-0 rounded-lg bg-[var(--service-accent)] opacity-10 animate-pulse" />
        <div className="absolute inset-[3px] rounded-md border-2 border-[var(--service-accent)] flex items-center justify-center">
          <span className="font-mono-custom text-lg font-bold text-[var(--service-accent)] tracking-tighter">LE</span>
        </div>
      </motion.div>

      {/* Progress bar */}
      <div className="w-48 h-[1px] bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: "var(--service-accent)" }}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-[11px] font-mono-custom tracking-[0.3em] uppercase text-platinum-dim"
      >
        LucenEdge
      </motion.p>
    </div>
  );
}
