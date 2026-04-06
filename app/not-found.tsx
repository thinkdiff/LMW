"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        {/* Glitchy 404 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative mb-8"
        >
          <p className="font-display text-[10rem] lg:text-[16rem] font-bold leading-none text-white opacity-[0.04] select-none">
            404
          </p>
          <div className="absolute inset-0 flex items-center justify-center">
            <p
              className="font-display text-6xl lg:text-8xl font-light"
              style={{ color: "var(--service-accent)" }}
            >
              404
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="line-accent" style={{ marginRight: 0 }} />
            <span className="text-label">Page Not Found</span>
            <span className="line-accent" style={{ marginRight: 0 }} />
          </div>
          <h1 className="font-display text-3xl lg:text-4xl font-light text-platinum mb-4">
            You've reached the edge.
          </h1>
          <p className="text-platinum-dim mb-10 max-w-md mx-auto">
            This page doesn't exist — but everything you're looking for does.
            Let's get you back on track.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/"
              className="px-8 py-4 rounded-full bg-[var(--service-accent)] text-obsidian font-medium text-sm"
            >
              Back to Home
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 rounded-full border border-white/15 text-platinum hover:border-white/30 transition-colors text-sm"
            >
              View Services
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full border border-white/15 text-platinum hover:border-white/30 transition-colors text-sm"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
