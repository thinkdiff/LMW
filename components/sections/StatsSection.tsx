"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";

const STATS = [
  { value: 320, suffix: "+", label: "Apps Delivered", sublabel: "Web, Mobile & Enterprise" },
  { value: 47, suffix: "", label: "AI Models Deployed", sublabel: "In production globally" },
  { value: 12.4, suffix: "M+", prefix: "$", label: "Client Savings", sublabel: "Through automation & accounting" },
  { value: 180, suffix: "+", label: "Professionals Placed", sublabel: "Across 28+ countries" },
  { value: 99.9, suffix: "%", label: "Uptime Guaranteed", sublabel: "SLA-backed delivery" },
  { value: 3, suffix: "x", label: "Faster Delivery", sublabel: "vs. industry average" },
];

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 border-y border-white/5 clip-diagonal-both bg-obsidian-mid">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-white/5 rounded-2xl overflow-hidden">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-obsidian-mid p-8 flex flex-col items-center text-center group hover:bg-obsidian-light transition-colors"
            >
              <div className="font-display text-4xl lg:text-5xl font-light mb-2 text-[var(--service-accent)]">
                {stat.prefix && <span>{stat.prefix}</span>}
                {inView ? (
                  <CountUp
                    end={stat.value}
                    decimals={stat.value % 1 !== 0 ? 1 : 0}
                    duration={2.5}
                    delay={i * 0.1}
                  />
                ) : (
                  "0"
                )}
                <span>{stat.suffix}</span>
              </div>
              <p className="text-sm font-medium text-platinum mb-1">{stat.label}</p>
              <p className="text-[11px] text-platinum-dim leading-snug">{stat.sublabel}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
