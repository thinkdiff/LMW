"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TESTIMONIALS = [
  {
    quote:
      "LucenEdge automated 73% of our back-office operations in under 8 weeks. The ROI was visible within the first month. They don't just deliver — they over-deliver.",
    author: "Sarah Mitchell",
    role: "COO, NovaPay Financial",
    service: "Automation Services",
    color: "#00D4C8",
    metric: "73% ops automated",
  },
  {
    quote:
      "The ML model they built for our demand forecasting reduced inventory waste by $2.1M annually. These are not average engineers — they are scientists who ship.",
    author: "Raj Patel",
    role: "CTO, LogiStream Inc.",
    service: "AI / ML Services",
    color: "#FFB800",
    metric: "$2.1M saved annually",
  },
  {
    quote:
      "We hired 18 engineers through LucenEdge's staffing division in 3 weeks. Every single one was a culture fit and technically exceptional. Unprecedented.",
    author: "Elena Vasquez",
    role: "VP Engineering, CloudVault",
    service: "Staffing Services",
    color: "#FF8C42",
    metric: "18 engineers in 3 weeks",
  },
  {
    quote:
      "Their CFO-as-a-Service turned our chaotic financials into a clear growth roadmap. We closed our Series A 4 months later. LucenEdge was the catalyst.",
    author: "James Okonkwo",
    role: "Founder, HealthBridge",
    service: "Accounting Services",
    color: "#00C896",
    metric: "Series A closed",
  },
];

export function TestimonialsSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[var(--service-accent)] opacity-[0.03] blur-[100px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="line-accent" />
          <span className="text-label">Client Results</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-display-lg font-display font-light text-platinum mb-20 max-w-2xl"
        >
          Results that speak
          <br />
          <em className="italic text-[var(--lucen-blue)]">louder than promises.</em>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Active testimonial */}
          <div className="relative min-h-[320px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Quote mark */}
                <div
                  className="font-display text-8xl font-bold leading-none mb-6 opacity-30"
                  style={{ color: TESTIMONIALS[active].color }}
                >
                  "
                </div>

                <p className="font-display text-2xl lg:text-3xl font-light text-platinum leading-relaxed mb-8">
                  {TESTIMONIALS[active].quote}
                </p>

                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center font-display text-lg font-semibold"
                    style={{
                      background: `${TESTIMONIALS[active].color}20`,
                      border: `2px solid ${TESTIMONIALS[active].color}40`,
                      color: TESTIMONIALS[active].color,
                    }}
                  >
                    {TESTIMONIALS[active].author[0]}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-platinum">
                      {TESTIMONIALS[active].author}
                    </p>
                    <p className="text-xs text-platinum-dim">
                      {TESTIMONIALS[active].role}
                    </p>
                  </div>
                  <div
                    className="ml-auto px-3 py-1.5 rounded-full text-[11px] font-mono-custom"
                    style={{
                      background: `${TESTIMONIALS[active].color}15`,
                      color: TESTIMONIALS[active].color,
                      border: `1px solid ${TESTIMONIALS[active].color}30`,
                    }}
                  >
                    {TESTIMONIALS[active].service}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Selector cards */}
          <div className="space-y-3">
            {TESTIMONIALS.map((t, i) => (
              <motion.button
                key={i}
                onClick={() => setActive(i)}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`w-full text-left p-5 rounded-xl border transition-all duration-300 ${
                  active === i
                    ? "border-[var(--service-accent)]/40 bg-white/4"
                    : "border-white/6 hover:border-white/12 bg-transparent"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-platinum">{t.author}</p>
                    <p className="text-xs text-platinum-dim mt-0.5">{t.role}</p>
                  </div>
                  <div
                    className="text-right"
                    style={{ color: active === i ? t.color : "#9090A8" }}
                  >
                    <p className="text-sm font-mono-custom font-medium">{t.metric}</p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
