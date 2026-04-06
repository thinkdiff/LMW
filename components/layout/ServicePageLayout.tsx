"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { type ReactNode } from "react";

interface MicroService {
  name: string;
  description: string;
  icon: ReactNode;
}

interface ServicePageLayoutProps {
  serviceId: string;
  name: string;
  tagline: string;
  description: string;
  icon: ReactNode;
  color: string;
  colorRgb: string;
  microServices: MicroService[];
  processSteps: { step: string; title: string; desc: string }[];
  stats: { value: string; label: string }[];
  caseStudy?: {
    client: string;
    industry: string;
    challenge: string;
    result: string;
    metric: string;
  };
  tool?: React.ReactNode;
}

export function ServicePageLayout({
  serviceId,
  name,
  tagline,
  description,
  icon,
  color,
  colorRgb,
  microServices,
  processSteps,
  stats,
  caseStudy,
  tool,
}: ServicePageLayoutProps) {
  return (
    <div
      data-service={serviceId}
      className="min-h-screen"
      style={{ "--service-accent": color, "--service-accent-rgb": colorRgb } as React.CSSProperties}
    >
      {/* Hero */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        {/* Background glow */}
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[120px] opacity-10 pointer-events-none"
          style={{ background: color }}
        />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm text-platinum-dim hover:text-platinum transition-colors mb-10"
            >
              <ArrowLeft size={14} />
              All Services
            </Link>
          </motion.div>

          <div className="flex flex-col lg:flex-row lg:items-end gap-12">
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-center gap-3 mb-6"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center"
                  style={{
                    background: `rgba(${colorRgb}, 0.12)`,
                    border: `1px solid rgba(${colorRgb}, 0.3)`,
                  }}
                >
                  {icon}
                </div>
                <span className="text-label" style={{ color }}>
                  {name}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-display-xl font-display font-light text-platinum mb-6 max-w-3xl"
              >
                {tagline}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="text-platinum-dim text-lg max-w-2xl leading-relaxed"
              >
                {description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex gap-4 mt-10"
              >
                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-full font-medium text-sm text-obsidian"
                  style={{ background: color }}
                >
                  Start a {name} Project
                </Link>
                <Link
                  href="/work"
                  className="px-8 py-4 rounded-full border border-white/15 text-platinum hover:border-white/30 transition-colors text-sm"
                >
                  View Case Studies
                </Link>
              </motion.div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 lg:w-80">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="glass rounded-xl p-4 text-center"
                >
                  <p className="font-display text-2xl font-light" style={{ color }}>
                    {stat.value}
                  </p>
                  <p className="text-[11px] text-platinum-dim mt-1 leading-tight">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tool (ROI calculator, quiz, etc.) */}
      {tool && (
        <section className="py-20 bg-obsidian-mid">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            {tool}
          </div>
        </section>
      )}

      {/* Micro-services grid */}
      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="line-accent" />
            <span className="text-label">What's Included</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-display-md font-display font-light text-platinum mb-14 max-w-xl"
          >
            Every service, under one roof.
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {microServices.map((ms, i) => (
              <motion.div
                key={ms.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="group p-6 rounded-2xl border border-white/6 hover:border-white/14 bg-obsidian-light hover:bg-obsidian-mid transition-all duration-300"
              >
                <div className="mb-4">{ms.icon}</div>
                <h3
                  className="font-display text-lg font-light text-platinum mb-2 group-hover:text-[var(--service-accent)] transition-colors"
                >
                  {ms.name}
                </h3>
                <p className="text-sm text-platinum-dim leading-relaxed">{ms.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-obsidian-mid clip-diagonal-both">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="line-accent" />
            <span className="text-label">Our Process</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-display-md font-display font-light text-platinum mb-14 max-w-xl"
          >
            From brief to brilliant.
          </motion.h2>

          <div className="relative">
            {/* Connecting line */}
            <div
              className="absolute top-8 left-0 right-0 h-px hidden lg:block"
              style={{ background: `linear-gradient(to right, transparent, rgba(${colorRgb}, 0.3), transparent)` }}
            />

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative text-center lg:text-left"
                >
                  {/* Step circle */}
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center font-mono-custom text-sm font-medium mx-auto lg:mx-0 mb-4 relative z-10"
                    style={{
                      background: `rgba(${colorRgb}, 0.1)`,
                      border: `2px solid rgba(${colorRgb}, 0.4)`,
                      color,
                    }}
                  >
                    {step.step}
                  </div>
                  <h3 className="font-display text-lg font-light text-platinum mb-2">{step.title}</h3>
                  <p className="text-sm text-platinum-dim leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case study */}
      {caseStudy && (
        <section className="py-24">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-14"
            >
              <span className="line-accent" />
              <span className="text-label">Featured Case Study</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass rounded-3xl p-10 lg:p-16 border"
              style={{ borderColor: `rgba(${colorRgb}, 0.2)` }}
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-mono-custom"
                      style={{
                        background: `rgba(${colorRgb}, 0.12)`,
                        color,
                        border: `1px solid rgba(${colorRgb}, 0.25)`,
                      }}
                    >
                      {caseStudy.industry}
                    </span>
                    <span className="text-xs text-platinum-dim font-mono-custom">{caseStudy.client}</span>
                  </div>
                  <h3 className="font-display text-2xl font-light text-platinum mb-4">
                    The Challenge
                  </h3>
                  <p className="text-platinum-dim leading-relaxed mb-8">{caseStudy.challenge}</p>
                  <h3 className="font-display text-2xl font-light text-platinum mb-4">
                    The Result
                  </h3>
                  <p className="text-platinum-dim leading-relaxed">{caseStudy.result}</p>
                </div>
                <div className="text-center">
                  <div
                    className="inline-flex flex-col items-center justify-center w-56 h-56 rounded-full border-2"
                    style={{
                      borderColor: color,
                      background: `rgba(${colorRgb}, 0.06)`,
                      boxShadow: `0 0 60px rgba(${colorRgb}, 0.15)`,
                    }}
                  >
                    <span className="font-display text-5xl font-light" style={{ color }}>
                      {caseStudy.metric}
                    </span>
                    <span className="text-xs text-platinum-dim font-mono-custom mt-2 tracking-wider">
                      MEASURABLE OUTCOME
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="py-24 text-center">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-display-md font-display font-light text-platinum mb-6">
            Ready to get started?
          </h2>
          <p className="text-platinum-dim mb-10 max-w-md mx-auto">
            Tell us about your project and we'll have a solution architect reach out within 48 hours.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-medium text-sm text-obsidian"
            style={{ background: color }}
          >
            Start a Conversation →
          </Link>
        </div>
      </section>
    </div>
  );
}
