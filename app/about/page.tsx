"use client";

import { motion } from "framer-motion";
import {
  Sparkles, Users, Calculator, Globe, Brain, Rocket, Award,
  Focus, Zap, Eye, BarChart3,
} from "lucide-react";
import { type LucideIcon } from "lucide-react";
import Link from "next/link";

interface TimelineItem {
  year: string;
  title: string;
  desc: string;
  icon: LucideIcon;
}

const TIMELINE: TimelineItem[] = [
  { year: "2018", title: "The Spark", desc: "LucenEdge was founded with a single belief: that most businesses are underserved by specialists who can't see the whole picture.", icon: Sparkles },
  { year: "2019", title: "First 10 Clients", desc: "Rapid growth through referrals alone. Our first AI/ML project generated $400K in savings for a logistics client. Word spread fast.", icon: Users },
  { year: "2020", title: "Accounting Practice Launched", desc: "Recognizing that technical excellence alone wasn't enough — we added financial services to close the loop between tech investment and business outcomes.", icon: Calculator },
  { year: "2021", title: "Staffing Division Opens", desc: "Client demand for talent recommendations led us to build a formal staffing practice. 40 placements in year one.", icon: Award },
  { year: "2022", title: "Global Expansion", desc: "Opened delivery centers in 3 new countries. Expanded to serve clients across North America, Europe, and the Middle East.", icon: Globe },
  { year: "2023", title: "AI Practice Matures", desc: "Launched dedicated AI/ML practice with 12 PhD-level researchers. 47 production AI systems deployed across client portfolios.", icon: Brain },
  { year: "2024", title: "Full Ecosystem Live", desc: "All seven service domains fully operational. 320+ successful projects. $12.4M in documented client savings. The ecosystem is complete.", icon: Rocket },
];

interface ValueItem {
  title: string;
  desc: string;
  icon: LucideIcon;
}

const VALUES: ValueItem[] = [
  { title: "Breadth + Depth", desc: "We refuse to be generalists who know nothing or specialists who can't see beyond their domain. We master both.", icon: Focus },
  { title: "Outcome Obsession", desc: "We don't measure success in deliverables. We measure it in your metrics — revenue, savings, speed, satisfaction.", icon: BarChart3 },
  { title: "Radical Transparency", desc: "You'll always know exactly where your project stands. No spin, no surprises, no excuses.", icon: Eye },
  { title: "Long-Term Thinking", desc: "We build for longevity. The code, the models, the hires, the financial structures — all designed to compound.", icon: Zap },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-36 pb-24">
      {/* Hero */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-32">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="line-accent" />
          <span className="text-label">Our Story</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-display-xl font-display font-light text-platinum mb-8 max-w-4xl"
        >
          Built to be the last
          <br />
          <em className="italic text-[var(--lucen-blue)]">partner you'll ever need.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-platinum-dim text-xl max-w-2xl leading-relaxed"
        >
          LucenEdge was born from frustration — with fragmented agencies, specialists who couldn't
          communicate, and technology partners who left the financial and human pieces to someone else.
          We built the company we always wished existed.
        </motion.p>
      </div>

      {/* Timeline */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="line-accent" />
          <span className="text-label">The Journey</span>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--service-accent)] via-white/10 to-transparent" />

          <div className="space-y-16">
            {TIMELINE.map((item, i) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className={`relative flex gap-8 lg:gap-0 ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                >
                  {/* Content */}
                  <div className={`w-full lg:w-1/2 pl-16 lg:pl-0 ${i % 2 === 0 ? "lg:pr-16 lg:text-right" : "lg:pl-16"}`}>
                    <div className={`flex flex-col ${i % 2 === 0 ? "lg:items-end text-left lg:text-right" : "lg:items-start text-left"}`}>
                      <div className="flex items-center gap-3 mb-3">
                        {i % 2 !== 0 && <IconComponent size={20} className="text-[var(--service-accent)] opacity-60" strokeWidth={1.5} />}
                        <span className="text-label">{item.year}</span>
                        {i % 2 === 0 && <IconComponent size={20} className="text-[var(--service-accent)] opacity-60" strokeWidth={1.5} />}
                      </div>
                      <h3 className="font-display text-2xl font-light text-platinum mb-3">{item.title}</h3>
                      <p className="text-platinum-dim leading-relaxed">{item.desc}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-8 lg:left-1/2 top-1 -translate-x-1/2 w-4 h-4 rounded-full bg-[var(--service-accent)] border-2 border-obsidian" />

                  {/* Spacer for opposite side */}
                  <div className="hidden lg:block lg:w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-obsidian-mid py-24 clip-diagonal-both mb-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="line-accent" />
            <span className="text-label">What We Stand For</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-display-lg font-display font-light text-platinum mb-16 max-w-xl"
          >
            Principles that don't bend.
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((value, i) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass rounded-2xl p-8 group hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[var(--service-accent)]/10 border border-[var(--service-accent)]/30 group-hover:bg-[var(--service-accent)]/20 transition-all">
                      <IconComponent size={20} className="text-[var(--service-accent)]" strokeWidth={1.5} />
                    </div>
                    <div className="h-[1px] flex-1 bg-white/10 group-hover:bg-[var(--service-accent)]/30 transition-all" />
                  </div>
                  <h3 className="font-display text-xl font-light text-platinum mb-3 group-hover:text-[var(--service-accent)] transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-sm text-platinum-dim leading-relaxed">{value.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-display-md font-display font-light text-platinum mb-6"
        >
          Become part of the story.
        </motion.h2>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/contact" className="px-8 py-4 rounded-full bg-[var(--service-accent)] text-obsidian font-medium text-sm">
            Start a Project
          </Link>
          <Link href="/careers" className="px-8 py-4 rounded-full border border-white/15 text-platinum hover:border-white/30 transition-colors text-sm">
            Join the Team
          </Link>
        </div>
      </div>
    </div>
  );
}
