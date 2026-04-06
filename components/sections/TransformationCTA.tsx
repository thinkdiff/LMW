"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function TransformationCTA() {
  return (
    <section className="relative py-40 overflow-hidden">
      {/* Glow orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[var(--lucen-blue)] opacity-[0.04] blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[var(--lucen-gold)] opacity-[0.04] blur-[80px] pointer-events-none" />

      {/* Diagonal border lines */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <span className="line-accent" style={{ background: "var(--lucen-gold)" }} />
          <span className="text-label" style={{ color: "var(--lucen-gold)" }}>
            Start Your Transformation
          </span>
          <span className="line-accent" style={{ background: "var(--lucen-gold)" }} />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.9 }}
          className="text-display-xl font-display font-light text-platinum mb-6 max-w-4xl mx-auto"
        >
          Ready to operate at
          <br />
          <em className="italic text-[var(--lucen-blue)]">a different level?</em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-platinum-dim text-lg max-w-xl mx-auto mb-12"
        >
          One conversation. Every domain covered. Let's engineer what's next
          for your business.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="group relative px-10 py-5 rounded-full overflow-hidden text-obsidian font-medium text-sm tracking-wide"
            style={{ background: "var(--lucen-gold)" }}
            data-cursor-label="Let's go"
          >
            <span className="relative z-10">Start a Project</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
          </Link>

          <Link
            href="/services"
            className="px-10 py-5 rounded-full border border-white/15 text-platinum hover:border-white/30 transition-colors text-sm tracking-wide"
          >
            Explore All Services
          </Link>
        </motion.div>

        {/* Trust markers */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-8 mt-16 text-xs font-mono-custom text-platinum-dim tracking-wider"
        >
          {["No lock-in contracts", "48-hour response guarantee", "Dedicated project manager", "NDA on day one"].map((item) => (
            <span key={item} className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-[var(--lucen-gold)]" />
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
