"use client";

import { motion } from "framer-motion";
import {
  Layers, FlaskConical, Zap, Target, GitMerge, Globe,
} from "lucide-react";
import { type LucideIcon } from "lucide-react";

interface Differentiator {
  number: string;
  title: string;
  description: string;
  accent: string;
  icon: LucideIcon;
}

const DIFFERENTIATORS: Differentiator[] = [
  {
    number: "01",
    title: "Full-Spectrum Partner",
    description:
      "From day-one ideation to ongoing operations — tech, finance, people — we don't hand you off. We stay.",
    accent: "#00D4FF",
    icon: Layers,
  },
  {
    number: "02",
    title: "Research-Grade Execution",
    description:
      "Our AI/ML team publishes. Our engineers contribute to open source. We don't just use best practices — we define them.",
    accent: "#FFB800",
    icon: FlaskConical,
  },
  {
    number: "03",
    title: "Speed Without Compromise",
    description:
      "3x faster delivery backed by automation, pre-built accelerators, and a 200+ expert talent pool on standby.",
    accent: "#7B2FFF",
    icon: Zap,
  },
  {
    number: "04",
    title: "Outcome Ownership",
    description:
      "We tie our fees to your results. SLA-backed, KPI-driven, and transparent at every stage of engagement.",
    accent: "#00C896",
    icon: Target,
  },
  {
    number: "05",
    title: "Cross-Domain Intelligence",
    description:
      "An automation insight improves your accounting. An ML model enhances your staffing. Silos are our enemy.",
    accent: "#FF8C42",
    icon: GitMerge,
  },
  {
    number: "06",
    title: "Global Reach, Local Depth",
    description:
      "28+ countries served. Timezone-aware teams. Cultural fluency baked into every client engagement.",
    accent: "#C8C8FF",
    icon: Globe,
  },
];

export function WhyLucenEdge() {
  return (
    <section className="relative py-32 bg-obsidian-mid clip-diagonal-both">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="line-accent" />
              <span className="text-label">Why LucenEdge</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-display-lg font-display font-light text-platinum max-w-lg"
            >
              The sharp edge
              <br />
              <em className="italic text-[var(--lucen-gold)]">your competition fears.</em>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-platinum-dim max-w-sm"
          >
            Six reasons our clients never look elsewhere once they experience what
            full-spectrum excellence actually feels like.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden">
          {DIFFERENTIATORS.map((item, i) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative bg-obsidian-mid hover:bg-obsidian-light p-10 transition-colors duration-300 overflow-hidden"
              >
                {/* Background number */}
                <span className="absolute top-4 right-6 font-display text-8xl font-bold opacity-[0.03] text-white select-none">
                  {item.number}
                </span>

                {/* Icon + Accent Line */}
                <div className="flex flex-col items-start gap-6 mb-8">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: `${item.accent}15`,
                      border: `1px solid ${item.accent}30`,
                    }}
                  >
                    <IconComponent size={20} style={{ color: item.accent }} strokeWidth={1.5} />
                  </div>
                  <div
                    className="w-10 h-[2px] rounded-full transition-all duration-300 group-hover:w-16"
                    style={{ background: item.accent }}
                  />
                </div>

                <h3 className="font-display text-2xl font-light text-platinum mb-4 group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-platinum-dim leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
