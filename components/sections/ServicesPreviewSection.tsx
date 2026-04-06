"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Code2, Smartphone, Zap, Brain, Bot, BarChart3, Users,
} from "lucide-react";
import { type LucideIcon } from "lucide-react";

interface ServiceItem {
  id: string;
  name: string;
  shortName: string;
  icon: LucideIcon;
  color: string;
  colorRgb: string;
  href: string;
  microServices: string[];
  description: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: "software-dev",
    name: "Software Development",
    shortName: "Software Dev",
    icon: Code2,
    color: "#0066FF",
    colorRgb: "0, 102, 255",
    href: "/services/software-dev",
    microServices: ["Custom Software", "Enterprise Apps", "API Development", "DevOps & CI/CD", "SaaS Platforms", "Legacy Modernization"],
    description: "End-to-end software engineering from architecture to deployment. We build systems that scale.",
  },
  {
    id: "web-mobile",
    name: "Web & Mobile Apps",
    shortName: "Web & Mobile",
    icon: Smartphone,
    color: "#7B2FFF",
    colorRgb: "123, 47, 255",
    href: "/services/web-mobile",
    microServices: ["iOS & Android", "Progressive Web Apps", "E-Commerce", "React Native", "Flutter", "UI/UX Design"],
    description: "Beautiful, high-performance applications that users love across every platform and device.",
  },
  {
    id: "automation",
    name: "Automation Services",
    shortName: "Automation",
    icon: Zap,
    color: "#00D4C8",
    colorRgb: "0, 212, 200",
    href: "/services/automation",
    microServices: ["RPA", "Workflow Automation", "Process Automation", "Marketing Automation", "Data Pipelines", "Test Automation"],
    description: "Eliminate repetitive work. Accelerate operations. Let machines handle the mundane.",
  },
  {
    id: "ai-services",
    name: "AI Services",
    shortName: "AI Services",
    icon: Brain,
    color: "#C8C8FF",
    colorRgb: "200, 200, 255",
    href: "/services/ai-services",
    microServices: ["AI Strategy", "Chatbots & NLP", "Computer Vision", "Recommendation Engines", "Predictive Analytics", "AI Integration"],
    description: "Business-focused AI that solves real problems, drives decisions, and creates competitive moats.",
  },
  {
    id: "ai-ml",
    name: "AI / ML Engineering",
    shortName: "AI / ML",
    icon: Bot,
    color: "#FFB800",
    colorRgb: "255, 184, 0",
    href: "/services/ai-ml",
    microServices: ["Custom ML Models", "Model Training", "MLOps", "Deep Learning", "Time Series", "Anomaly Detection"],
    description: "Research-grade machine learning engineered for production. Models that learn, adapt, and perform.",
  },
  {
    id: "accounting",
    name: "Accounting Services",
    shortName: "Accounting",
    icon: BarChart3,
    color: "#00C896",
    colorRgb: "0, 200, 150",
    href: "/services/accounting",
    microServices: ["Bookkeeping", "Tax Planning", "Financial Reporting", "Payroll", "CFO-as-a-Service", "Audit Support"],
    description: "Precision financial management that gives you clarity, compliance, and confidence to grow.",
  },
  {
    id: "staffing",
    name: "Staffing Services",
    shortName: "Staffing",
    icon: Users,
    color: "#FF8C42",
    colorRgb: "255, 140, 66",
    href: "/services/staffing",
    microServices: ["IT Augmentation", "Permanent Recruitment", "Remote Teams", "Executive Search", "Offshore Teams", "HR Consulting"],
    description: "The right talent, at the right time, anywhere in the world. We build teams that build companies.",
  },
];

export function ServicesPreviewSection() {
  const [activeService, setActiveService] = useState<ServiceItem | null>(null);

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Dynamic background glow based on active service */}
      <AnimatePresence>
        {activeService && (
          <motion.div
            key={activeService.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(ellipse 60% 50% at 50% 50%, rgba(${activeService.colorRgb}, 0.05) 0%, transparent 70%)`,
            }}
          />
        )}
      </AnimatePresence>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="line-accent" />
              <span className="text-label">What We Do</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-display-lg font-display font-light text-platinum"
            >
              Seven domains.
              <br />
              <em className="italic">Infinite possibilities.</em>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-platinum-dim max-w-sm lg:text-right"
          >
            Each domain is a complete practice — with dedicated specialists, proven
            methodologies, and measurable outcomes.
          </motion.p>
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {SERVICES.map((service, i) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                onMouseEnter={() => setActiveService(service)}
                onMouseLeave={() => setActiveService(null)}
                className={`group relative rounded-2xl border transition-all duration-500 overflow-hidden cursor-pointer ${
                  i === 6 ? "md:col-span-2 lg:col-span-1 xl:col-span-2" : ""
                }`}
                style={{
                  borderColor: activeService?.id === service.id
                    ? `rgba(${service.colorRgb}, 0.4)`
                    : "rgba(255,255,255,0.06)",
                  background: activeService?.id === service.id
                    ? `rgba(${service.colorRgb}, 0.06)`
                    : "rgba(13, 13, 26, 0.4)",
                }}
              >
                {/* Inner glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse 80% 60% at 50% 100%, rgba(${service.colorRgb}, 0.12) 0%, transparent 70%)`,
                  }}
                />

                <Link href={service.href} className="block p-7">
                  {/* Icon + number */}
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 duration-300"
                      style={{
                        background: `rgba(${service.colorRgb}, 0.12)`,
                        border: `1px solid rgba(${service.colorRgb}, 0.25)`,
                      }}
                    >
                      <IconComponent size={22} style={{ color: service.color }} strokeWidth={1.5} />
                    </div>
                    <span className="text-xs font-mono-custom text-platinum-dim opacity-40">
                      0{i + 1}
                    </span>
                  </div>

                  {/* Name */}
                  <h3
                    className="font-display text-2xl font-light mb-3 transition-colors duration-300"
                    style={{ color: activeService?.id === service.id ? service.color : "#E8E8F0" }}
                  >
                    {service.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-platinum-dim leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Micro-services */}
                  <div className="flex flex-wrap gap-2">
                    {service.microServices.slice(0, 4).map((ms) => (
                      <span
                        key={ms}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono-custom transition-colors duration-300"
                        style={{
                          background: `rgba(${service.colorRgb}, 0.08)`,
                          color: activeService?.id === service.id ? service.color : "#9090A8",
                          border: `1px solid rgba(${service.colorRgb}, 0.15)`,
                        }}
                      >
                        {ms}
                      </span>
                    ))}
                    {service.microServices.length > 4 && (
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-mono-custom text-platinum-dim border border-white/8">
                        +{service.microServices.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* CTA arrow */}
                  <div
                    className="mt-6 flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300"
                    style={{ color: service.color }}
                  >
                    <span>Explore {service.shortName}</span>
                    <span>→</span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-16"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/15 text-platinum hover:border-[var(--service-accent)] hover:text-[var(--service-accent)] transition-all text-sm"
          >
            <span>View All Services & Micro-Services</span>
            <span>→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
