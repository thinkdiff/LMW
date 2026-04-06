"use client";

import { motion } from "framer-motion";
import {
  CreditCard, HeartPulse, ShoppingBag, Truck, Building2,
  GraduationCap, Cog, Scale, Shield, Store, Cloud, Radio,
} from "lucide-react";
import { type LucideIcon } from "lucide-react";

interface Industry {
  name: string;
  icon: LucideIcon;
}

const INDUSTRIES: Industry[] = [
  { name: "FinTech", icon: CreditCard },
  { name: "Healthcare", icon: HeartPulse },
  { name: "E-Commerce", icon: ShoppingBag },
  { name: "Logistics", icon: Truck },
  { name: "Real Estate", icon: Building2 },
  { name: "Education", icon: GraduationCap },
  { name: "Manufacturing", icon: Cog },
  { name: "Legal", icon: Scale },
  { name: "Insurance", icon: Shield },
  { name: "Retail", icon: Store },
  { name: "SaaS", icon: Cloud },
  { name: "Media", icon: Radio },
];

const doubled = [...INDUSTRIES, ...INDUSTRIES];

export function IndustriesMarquee() {
  return (
    <section className="relative py-24 overflow-hidden border-y border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 mb-4"
        >
          <span className="line-accent" />
          <span className="text-label">Industries We Serve</span>
          <span className="line-accent" />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-platinum-dim"
        >
          Domain expertise across every major vertical
        </motion.p>
      </div>

      {/* Row 1 — moves left */}
      <div className="relative mb-4">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-obsidian to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-obsidian to-transparent z-10 pointer-events-none" />
        <div className="ticker-wrap">
          <div className="ticker-content gap-4">
            {doubled.map((industry, i) => {
              const IconComponent = industry.icon;
              return (
                <div
                  key={i}
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/8 bg-obsidian-light mx-2 whitespace-nowrap group hover:border-[var(--service-accent)]/40 transition-colors"
                >
                  <IconComponent size={18} className="text-platinum-dim group-hover:text-[var(--service-accent)] transition-colors" strokeWidth={1.5} />
                  <span className="text-sm text-platinum-dim group-hover:text-platinum transition-colors">
                    {industry.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Row 2 — moves right */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-obsidian to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-obsidian to-transparent z-10 pointer-events-none" />
        <div className="ticker-wrap">
          <div className="ticker-content gap-4" style={{ animationDirection: "reverse", animationDuration: "45s" }}>
            {[...doubled].reverse().map((industry, i) => {
              const IconComponent = industry.icon;
              return (
                <div
                  key={i}
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/6 bg-obsidian-mid mx-2 whitespace-nowrap group hover:border-[var(--service-accent)]/40 transition-colors"
                >
                  <IconComponent size={18} className="text-platinum-dim group-hover:text-[var(--service-accent)] transition-colors" strokeWidth={1.5} />
                  <span className="text-sm text-platinum-dim group-hover:text-platinum transition-colors">
                    {industry.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
