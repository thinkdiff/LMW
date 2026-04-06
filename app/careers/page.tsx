"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Brain, Globe, TrendingUp, GraduationCap, Zap, Handshake } from "lucide-react";
import { type LucideIcon } from "lucide-react";

const DEPARTMENTS = ["All", "Engineering", "AI & ML", "Design", "Automation", "Finance", "Talent", "Leadership"];

const JOBS = [
  { id: 1, title: "Senior ML Engineer", dept: "AI & ML", type: "Full-time", location: "Remote / Hybrid", color: "#FFB800", level: "Senior", desc: "Build and productionize custom ML models across NLP, computer vision, and tabular data domains. You'll own the full pipeline from experimentation to production monitoring." },
  { id: 2, title: "Full-Stack Engineer (React / Node)", dept: "Engineering", type: "Full-time", location: "Remote", color: "#0066FF", level: "Mid–Senior", desc: "Design and build scalable web applications for our clients. You'll work across the stack — Next.js frontends, Node APIs, and PostgreSQL/MongoDB data layers." },
  { id: 3, title: "RPA Developer (UiPath / Automation Anywhere)", dept: "Automation", type: "Full-time", location: "Remote / On-site", color: "#00D4C8", level: "Mid", desc: "Develop and deploy enterprise automation bots across finance, logistics, and healthcare clients. Experience with RPA platforms and process mapping required." },
  { id: 4, title: "iOS Engineer (Swift)", dept: "Engineering", type: "Full-time", location: "Remote", color: "#7B2FFF", level: "Senior", desc: "Build polished native iOS apps for clients in e-commerce, fintech, and healthcare. You care deeply about performance, accessibility, and SwiftUI best practices." },
  { id: 5, title: "Product Designer (UX/UI)", dept: "Design", type: "Full-time", location: "Remote", color: "#C8C8FF", level: "Mid–Senior", desc: "Own the design process from discovery to delivery — user research, wireframes, interactive prototypes, and design systems for web and mobile products." },
  { id: 6, title: "DevOps / Cloud Engineer", dept: "Engineering", type: "Full-time", location: "Remote", color: "#0066FF", level: "Senior", desc: "Architect and manage cloud infrastructure on AWS/GCP. Experience with Terraform, Kubernetes, CI/CD pipelines, and observability tooling required." },
  { id: 7, title: "Senior Accountant / CPA", dept: "Finance", type: "Full-time", location: "Hybrid", color: "#00C896", level: "Senior", desc: "Manage multi-client bookkeeping, financial reporting, and tax compliance engagements. CPA certification and experience with QuickBooks/Xero required." },
  { id: 8, title: "Technical Recruiter", dept: "Talent", type: "Full-time", location: "Remote", color: "#FF8C42", level: "Mid", desc: "Source, screen, and place engineers and tech professionals for our staffing clients. Strong network in software engineering talent is essential." },
  { id: 9, title: "AI Research Engineer", dept: "AI & ML", type: "Full-time", location: "Remote", color: "#FFB800", level: "Senior / Staff", desc: "Push the frontier of applied AI research. Fine-tune LLMs, design novel architectures, and publish work that represents LucenEdge's commitment to research excellence." },
  { id: 10, title: "Head of Automation Practice", dept: "Leadership", type: "Full-time", location: "Remote / Hybrid", color: "#00D4C8", level: "Director", desc: "Lead and grow our automation practice — client delivery, team management, business development, and thought leadership. 8+ years in automation required." },
];

interface ValueItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const VALUES: ValueItem[] = [
  { icon: Brain, title: "Work on the hardest problems", desc: "We pick clients whose problems are worth solving. No filler work." },
  { icon: Globe, title: "Fully remote-first", desc: "Work from anywhere. We have teammates across 15+ countries." },
  { icon: TrendingUp, title: "Equity participation", desc: "Senior hires share in the growth they create. Ownership matters." },
  { icon: GraduationCap, title: "Learning budget", desc: "$3,000/year for courses, conferences, and certifications. Use it." },
  { icon: Zap, title: "Ship fast, ship real", desc: "No bureaucracy. Your work goes into production and client hands quickly." },
  { icon: Handshake, title: "No politics", desc: "Flat structure, honest feedback, and decisions made on merit." },
];

export default function CareersPage() {
  const [activeDept, setActiveDept] = useState("All");
  const [expandedJob, setExpandedJob] = useState<number | null>(null);

  const filtered = activeDept === "All" ? JOBS : JOBS.filter((j) => j.dept === activeDept);

  return (
    <div className="min-h-screen pt-36 pb-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* Hero */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-3 mb-6">
          <span className="line-accent" />
          <span className="text-label">Join LucenEdge</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-end mb-24">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-display-xl font-display font-light text-platinum mb-6"
            >
              Build the
              <br />
              <em className="italic text-[var(--lucen-blue)]">future of work.</em>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-platinum-dim leading-relaxed"
            >
              We're a team of engineers, scientists, designers, and operators who believe that
              full-spectrum excellence is possible. If you've found the usual agency work too shallow
              and the enterprise too slow — you'll fit right in.
            </motion.p>
          </div>

          {/* Open roles counter */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="glass rounded-3xl p-10 border border-white/8 text-center"
          >
            <p className="font-display text-7xl font-light text-[var(--service-accent)] mb-2">{JOBS.length}</p>
            <p className="text-platinum font-medium mb-1">Open Positions</p>
            <p className="text-sm text-platinum-dim">Across {DEPARTMENTS.length - 1} departments · All remote-friendly</p>
          </motion.div>
        </div>

        {/* Culture values */}
        <div className="mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center gap-3 mb-4">
            <span className="line-accent" />
            <span className="text-label">Life at LucenEdge</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-display-md font-display font-light text-platinum mb-12 max-w-xl">
            A place where exceptional people do exceptional work.
          </motion.h2>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {VALUES.map((v, i) => {
              const IconComponent = v.icon;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="group rounded-2xl border border-white/8 bg-obsidian-light hover:bg-obsidian-mid p-7 transition-all"
                >
                  <div className="mb-4">
                    <IconComponent size={28} className="text-[var(--service-accent)]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-lg font-light text-platinum mb-2 group-hover:text-[var(--service-accent)] transition-colors">{v.title}</h3>
                  <p className="text-sm text-platinum-dim">{v.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Job listings */}
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center gap-3 mb-4">
            <span className="line-accent" />
            <span className="text-label">Open Roles</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-display-md font-display font-light text-platinum mb-10">
            Find your fit.
          </motion.h2>

          {/* Department filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {DEPARTMENTS.map((d) => (
              <button
                key={d}
                onClick={() => setActiveDept(d)}
                className={`px-5 py-2 rounded-full text-sm border transition-all ${
                  activeDept === d
                    ? "bg-[var(--service-accent)] text-obsidian border-[var(--service-accent)]"
                    : "border-white/15 text-platinum-dim hover:border-white/30 hover:text-platinum"
                }`}
              >
                {d}
              </button>
            ))}
          </div>

          {/* Job list */}
          <div className="space-y-3">
            {filtered.map((job, i) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="rounded-2xl border border-white/8 bg-obsidian-light overflow-hidden"
              >
                {/* Job header */}
                <button
                  onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                  className="w-full text-left p-6 lg:p-8 flex items-center gap-6 group hover:bg-white/2 transition-colors"
                >
                  {/* Color indicator */}
                  <div className="w-2 h-12 rounded-full flex-shrink-0" style={{ background: job.color, opacity: 0.6 }} />

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="font-display text-xl font-light text-platinum group-hover:text-[var(--service-accent)] transition-colors">
                        {job.title}
                      </h3>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-xs font-mono-custom text-platinum-dim">
                      <span
                        className="px-2.5 py-1 rounded-full border"
                        style={{ color: job.color, borderColor: `${job.color}30`, background: `${job.color}10` }}
                      >
                        {job.dept}
                      </span>
                      <span>{job.type}</span>
                      <span>·</span>
                      <span>{job.location}</span>
                      <span>·</span>
                      <span>{job.level}</span>
                    </div>
                  </div>

                  <ChevronDown
                    size={18}
                    className={`text-platinum-dim flex-shrink-0 transition-transform duration-300 ${expandedJob === job.id ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Expanded job content */}
                <AnimatePresence>
                  {expandedJob === job.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 lg:px-14 pb-8 border-t border-white/6 pt-6">
                        <p className="text-platinum-dim leading-relaxed mb-8 max-w-3xl">{job.desc}</p>
                        <div className="flex flex-wrap gap-4">
                          <button
                            className="px-8 py-3 rounded-full font-medium text-sm text-obsidian"
                            style={{ background: job.color }}
                          >
                            Apply for This Role →
                          </button>
                          <button className="px-8 py-3 rounded-full border border-white/15 text-platinum-dim hover:border-white/30 text-sm transition-colors">
                            Share
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Spontaneous application */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 glass rounded-3xl p-10 lg:p-14 border border-white/8 flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          <div>
            <h3 className="font-display text-2xl font-light text-platinum mb-2">Don't see your role?</h3>
            <p className="text-platinum-dim max-w-lg">
              We always want to hear from exceptional people. Send us your portfolio or CV and tell us
              what you'd build if you joined — we read everything.
            </p>
          </div>
          <button className="px-8 py-4 rounded-full bg-[var(--service-accent)] text-obsidian font-medium text-sm whitespace-nowrap flex-shrink-0">
            Send an Open Application →
          </button>
        </motion.div>

      </div>
    </div>
  );
}
