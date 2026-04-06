"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Code2, Smartphone, Zap, Brain, Bot, BarChart3, Users,
  ArrowRight,
} from "lucide-react";
import { type LucideIcon } from "lucide-react";
import Link from "next/link";

const FILTERS = ["All", "Software Dev", "AI / ML", "Automation", "Web & Mobile", "Accounting", "Staffing"];

interface CaseStudy {
  title: string;
  client: string;
  industry: string;
  service: string;
  metric: string;
  color: string;
  year: string;
  icon: LucideIcon;
}

const CASE_STUDIES: CaseStudy[] = [
  { title: "Banking Platform Migration", client: "NovaPay Financial", industry: "FinTech", service: "Software Dev", metric: "40% faster", color: "#0066FF", year: "2024", icon: Code2 },
  { title: "Demand Forecasting AI", client: "LogiStream Inc.", industry: "Logistics", service: "AI / ML", metric: "94% accuracy", color: "#FFB800", year: "2024", icon: Bot },
  { title: "Document Processing Automation", client: "GlobalShip", industry: "Logistics", service: "Automation", metric: "89% automated", color: "#00D4C8", year: "2023", icon: Zap },
  { title: "Mobile Commerce Rebuild", client: "RetailEdge", industry: "E-Commerce", service: "Web & Mobile", metric: "3.2× revenue", color: "#7B2FFF", year: "2024", icon: Smartphone },
  { title: "Patient Support AI", client: "MedConsult", industry: "Healthcare", service: "AI / ML", metric: "78% resolved by AI", color: "#C8C8FF", year: "2023", icon: Brain },
  { title: "Series A Financial Prep", client: "HealthBridge", industry: "Healthcare", service: "Accounting", metric: "$4.2M raised", color: "#00C896", year: "2023", icon: BarChart3 },
  { title: "Engineering Team Scale-up", client: "CloudVault", industry: "Cloud Infra", service: "Staffing", metric: "18 hires in 21 days", color: "#FF8C42", year: "2024", icon: Users },
  { title: "Inventory Management Platform", client: "SupplySync", industry: "Manufacturing", service: "Software Dev", metric: "$1.8M saved", color: "#0066FF", year: "2023", icon: Code2 },
];

export default function WorkPage() {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? CASE_STUDIES
    : CASE_STUDIES.filter((c) => c.service === active);

  return (
    <div className="min-h-screen pt-36 pb-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="line-accent" />
          <span className="text-label">Case Studies</span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-display-xl font-display font-light text-platinum mb-4 max-w-2xl"
        >
          Proof over
          <br />
          <em className="italic text-[var(--lucen-blue)]">promises.</em>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-platinum-dim mb-14 max-w-lg"
        >
          Every project here represents a real problem, a precise solution, and
          a measurable outcome. Numbers don't lie.
        </motion.p>

        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-12">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-full text-sm border transition-all ${
                active === f
                  ? "bg-[var(--service-accent)] text-obsidian border-[var(--service-accent)]"
                  : "border-white/15 text-platinum-dim hover:border-white/30 hover:text-platinum"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((cs, i) => {
            const IconComponent = cs.icon;
            return (
              <motion.div
                key={cs.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                className="group rounded-2xl border border-white/8 bg-obsidian-light hover:bg-obsidian-mid hover:border-white/15 transition-all duration-300 p-7 cursor-pointer relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity">
                  <IconComponent size={80} strokeWidth={1} />
                </div>

                <div className="flex items-start justify-between mb-6 relative z-10">
                  <div
                    className="px-3 py-1 rounded-full text-[11px] font-mono-custom flex items-center gap-2"
                    style={{
                      background: `${cs.color}15`,
                      color: cs.color,
                      border: `1px solid ${cs.color}30`,
                    }}
                  >
                    <IconComponent size={12} strokeWidth={1.5} />
                    {cs.service}
                  </div>
                  <span className="text-xs text-platinum-dim font-mono-custom">{cs.year}</span>
                </div>

                <h2 className="font-display text-xl font-light text-platinum mb-1 group-hover:text-[var(--service-accent)] transition-colors relative z-10">
                  {cs.title}
                </h2>
                <p className="text-sm text-platinum-dim mb-6 relative z-10">
                  {cs.client} · {cs.industry}
                </p>

                <div className="flex items-end justify-between relative z-10">
                  <div
                    className="font-mono-custom text-2xl font-bold"
                    style={{ color: cs.color }}
                  >
                    {cs.metric}
                  </div>
                  <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-platinum-dim group-hover:text-[var(--service-accent)] group-hover:border-[var(--service-accent)]/30 transition-all">
                    <ArrowRight size={14} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
