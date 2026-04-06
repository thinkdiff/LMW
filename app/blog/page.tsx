"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const CATEGORIES = ["All", "AI & ML", "Automation", "Software Dev", "Web & Mobile", "Accounting", "Staffing", "Strategy"];

const POSTS = [
  {
    id: "1",
    title: "How We Fine-Tuned a Foundation Model on 3 Weeks of Client Data",
    excerpt: "A technical deep-dive into our MLOps pipeline for rapid domain adaptation — from raw client data to a production-grade model serving 40,000 daily inferences.",
    category: "AI & ML",
    color: "#FFB800",
    readTime: "8 min",
    date: "Dec 18, 2024",
    featured: true,
    author: { name: "Dr. Aryan Mehta", role: "Head of ML Engineering" },
  },
  {
    id: "2",
    title: "RPA Is Dead. Long Live Intelligent Automation.",
    excerpt: "Why the next generation of process automation combines RPA with LLMs, vision models, and decision engines — and what it means for your operations.",
    category: "Automation",
    color: "#00D4C8",
    readTime: "6 min",
    date: "Dec 10, 2024",
    featured: true,
    author: { name: "Priya Sharma", role: "Automation Practice Lead" },
  },
  {
    id: "3",
    title: "The Real Cost of a 2.1-Star App: A Case Study",
    excerpt: "How a struggling e-commerce app went from 2.1 to 4.8 stars in 60 days — and what every mobile team can learn from the rebuild.",
    category: "Web & Mobile",
    color: "#7B2FFF",
    readTime: "5 min",
    date: "Nov 28, 2024",
    featured: false,
    author: { name: "Marcus Lee", role: "Mobile Practice Lead" },
  },
  {
    id: "4",
    title: "CFO-as-a-Service: What It Is and When You Actually Need It",
    excerpt: "The financial inflection points where a fractional CFO delivers 10× the value of a full-time hire — and how to know when you've crossed that line.",
    category: "Accounting",
    color: "#00C896",
    readTime: "7 min",
    date: "Nov 20, 2024",
    featured: false,
    author: { name: "Sarah Chen", role: "Head of Financial Services" },
  },
  {
    id: "5",
    title: "Microservices vs. Monolith in 2024: An Honest Assessment",
    excerpt: "After 50+ architecture decisions this year, here's our updated take on the monolith vs. microservices debate — with the actual data to back it up.",
    category: "Software Dev",
    color: "#0066FF",
    readTime: "10 min",
    date: "Nov 12, 2024",
    featured: false,
    author: { name: "James Okafor", role: "Principal Architect" },
  },
  {
    id: "6",
    title: "How to Hire 20 Engineers in 3 Weeks Without Destroying Culture",
    excerpt: "The exact playbook we used for CloudVault's emergency scale-up — from intake brief to day-one onboarding. Every step, no fluff.",
    category: "Staffing",
    color: "#FF8C42",
    readTime: "9 min",
    date: "Oct 30, 2024",
    featured: false,
    author: { name: "Elena Vasquez", role: "Talent Practice Lead" },
  },
  {
    id: "7",
    title: "Why Most AI Strategies Fail Before They Start",
    excerpt: "95% of enterprise AI initiatives stall at the proof-of-concept stage. We've autopsied dozens of them. Here's the pattern — and the fix.",
    category: "Strategy",
    color: "#C8C8FF",
    readTime: "11 min",
    date: "Oct 18, 2024",
    featured: false,
    author: { name: "Dr. Aryan Mehta", role: "Head of ML Engineering" },
  },
  {
    id: "8",
    title: "The Stack We Use to Build Sub-2s Load Time Apps in 2024",
    excerpt: "Next.js 15, React Server Components, edge functions, and a CDN strategy that consistently delivers sub-2 second LCPs — our full technical stack exposed.",
    category: "Web & Mobile",
    color: "#7B2FFF",
    readTime: "7 min",
    date: "Oct 5, 2024",
    featured: false,
    author: { name: "Neha Patel", role: "Frontend Architect" },
  },
];

export default function BlogPage() {
  const [active, setActive] = useState("All");

  const featured = POSTS.filter((p) => p.featured);
  const filtered = (active === "All" ? POSTS.filter((p) => !p.featured) : POSTS.filter((p) => p.category === active && !p.featured));

  return (
    <div className="min-h-screen pt-36 pb-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-3 mb-6">
          <span className="line-accent" />
          <span className="text-label">Insights & Thinking</span>
        </motion.div>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-display-xl font-display font-light text-platinum max-w-xl"
          >
            Ideas worth
            <br />
            <em className="italic text-[var(--lucen-blue)]">acting on.</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-platinum-dim max-w-sm"
          >
            Technical deep-dives, industry analysis, and hard-won lessons from 320+ projects
            across seven service domains.
          </motion.p>
        </div>

        {/* Featured posts */}
        <div className="grid lg:grid-cols-2 gap-6 mb-16">
          {featured.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.1 }}
              className="group relative rounded-3xl border border-white/8 bg-obsidian-light hover:bg-obsidian-mid overflow-hidden transition-all duration-300 cursor-pointer"
            >
              {/* Top accent bar */}
              <div className="h-1 w-0 group-hover:w-full transition-all duration-500" style={{ background: post.color }} />

              <div className="p-10">
                {/* Tags */}
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className="px-3 py-1 rounded-full text-[11px] font-mono-custom"
                    style={{ background: `${post.color}15`, color: post.color, border: `1px solid ${post.color}30` }}
                  >
                    {post.category}
                  </span>
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono-custom bg-[var(--lucen-gold)]/10 text-[var(--lucen-gold)] border border-[var(--lucen-gold)]/20">
                    Featured
                  </span>
                </div>

                <h2 className="font-display text-2xl lg:text-3xl font-light text-platinum mb-4 group-hover:text-[var(--service-accent)] transition-colors leading-tight">
                  {post.title}
                </h2>
                <p className="text-platinum-dim leading-relaxed mb-8">{post.excerpt}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center font-display text-sm font-semibold"
                      style={{ background: `${post.color}20`, color: post.color, border: `1px solid ${post.color}30` }}
                    >
                      {post.author.name[0]}
                    </div>
                    <div>
                      <p className="text-xs font-medium text-platinum">{post.author.name}</p>
                      <p className="text-[11px] text-platinum-dim">{post.author.role}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-mono-custom text-platinum-dim">{post.date}</p>
                    <p className="text-xs font-mono-custom text-platinum-dim">{post.readTime} read</p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm border transition-all ${
                active === cat
                  ? "bg-[var(--service-accent)] text-obsidian border-[var(--service-accent)]"
                  : "border-white/15 text-platinum-dim hover:border-white/30 hover:text-platinum"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Post grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 }}
              className="group rounded-2xl border border-white/8 bg-obsidian-light hover:bg-obsidian-mid hover:border-white/14 transition-all duration-300 p-7 cursor-pointer overflow-hidden"
            >
              <div
                className="h-[2px] w-8 mb-6 rounded-full transition-all duration-300 group-hover:w-16"
                style={{ background: post.color }}
              />

              <span
                className="px-3 py-1 rounded-full text-[11px] font-mono-custom mb-4 inline-block"
                style={{ background: `${post.color}12`, color: post.color, border: `1px solid ${post.color}25` }}
              >
                {post.category}
              </span>

              <h2 className="font-display text-xl font-light text-platinum mb-3 mt-3 group-hover:text-[var(--service-accent)] transition-colors leading-snug">
                {post.title}
              </h2>
              <p className="text-sm text-platinum-dim leading-relaxed mb-6 line-clamp-3">{post.excerpt}</p>

              <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                <span className="text-xs text-platinum-dim font-mono-custom">{post.author.name}</span>
                <span className="text-xs text-platinum-dim font-mono-custom">{post.readTime} read</span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 glass rounded-3xl p-10 lg:p-16 border border-white/8 text-center"
        >
          <span className="text-label block mb-4">Stay Sharp</span>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-platinum mb-4">
            Intelligence delivered weekly.
          </h2>
          <p className="text-platinum-dim mb-10 max-w-md mx-auto">
            No noise. One essay every Friday — strategy, engineering, and business intelligence
            from the LucenEdge team.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@company.com"
              className="flex-1 bg-white/5 border border-white/10 rounded-full px-6 py-3 text-sm text-platinum placeholder:text-platinum-dim/40 focus:outline-none focus:border-[var(--service-accent)] transition-colors"
            />
            <button className="px-7 py-3 rounded-full bg-[var(--service-accent)] text-obsidian font-medium text-sm whitespace-nowrap">
              Subscribe →
            </button>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
