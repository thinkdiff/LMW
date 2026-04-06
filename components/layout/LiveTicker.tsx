"use client";

import {
  Zap, Rocket, Bot, DollarSign, Users, Globe,
  Smartphone, Brain, BarChart3, Activity,
} from "lucide-react";
import { type LucideIcon } from "lucide-react";

interface TickerItem {
  icon: LucideIcon;
  text: string;
}

const TICKER_ITEMS: TickerItem[] = [
  { icon: Zap, text: "47 AI Models Deployed This Month" },
  { icon: Rocket, text: "320+ Web & Mobile Apps Delivered" },
  { icon: Bot, text: "2.4M+ Automation Tasks Executed Daily" },
  { icon: DollarSign, text: "$12.4M Saved Across Client Operations" },
  { icon: Users, text: "180+ Professionals Placed in 2024" },
  { icon: Globe, text: "Clients in 28+ Countries" },
  { icon: Smartphone, text: "99.9% App Uptime Guaranteed" },
  { icon: Brain, text: "ML Models Trained: 120+ and Counting" },
  { icon: BarChart3, text: "$2.4M in Client Accounting Savings" },
  { icon: Activity, text: "Average Project Delivery: 3 Weeks Faster" },
];

export function LiveTicker() {
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="relative bg-obsidian-light border-b border-white/5 overflow-hidden h-9 flex items-center z-50">
      {/* Gradient fades on edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-obsidian-light to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-obsidian-light to-transparent z-10 pointer-events-none" />

      <div className="ticker-wrap w-full">
        <div className="ticker-content">
          {doubled.map((item, i) => {
            const IconComponent = item.icon;
            return (
              <span
                key={i}
                className="inline-flex items-center gap-2 px-8 text-[11px] font-mono-custom tracking-widest text-platinum-dim"
              >
                <IconComponent size={12} className="text-[var(--service-accent)] opacity-70 flex-shrink-0" strokeWidth={1.5} />
                {item.text}
                <span className="w-1 h-1 rounded-full bg-[var(--service-accent)] opacity-60 ml-6" />
              </span>
            );
          })}
        </div>
      </div>

      {/* Live indicator */}
      <div className="absolute right-4 flex items-center gap-2 z-20">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--service-accent)] opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--service-accent)]" />
        </span>
        <span className="text-[10px] font-mono-custom tracking-widest text-[var(--service-accent)] uppercase">
          Live
        </span>
      </div>
    </div>
  );
}
