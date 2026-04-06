"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  CreditCard, HeartPulse, ShoppingBag, Truck, Cloud,
  Building2, GraduationCap, Cog,
} from "lucide-react";
import { type LucideIcon } from "lucide-react";

interface IndustryDef {
  id: string;
  name: string;
  icon: LucideIcon;
  color: string;
  colorRgb: string;
  description: string;
  services: string[];
  useCases: string[];
  clients: string;
  stat: { value: string; label: string };
}

const INDUSTRIES: IndustryDef[] = [
  {
    id: "fintech",
    name: "FinTech & Finance",
    icon: CreditCard,
    color: "#0066FF",
    colorRgb: "0, 102, 255",
    description: "From neo-banks to lending platforms, we engineer the tech, intelligence, and operations that modern financial companies run on.",
    services: ["Software Development", "AI Services", "AI / ML", "Automation", "Accounting", "Web & Mobile"],
    useCases: ["Fraud detection models", "Regulatory compliance automation", "Core banking system modernization", "Real-time risk scoring", "KYC/AML workflow automation"],
    clients: "NovaPay Financial, TradeBloc, CreditEdge",
    stat: { value: "$2.4M", label: "avg client savings/yr" },
  },
  {
    id: "healthcare",
    name: "Healthcare",
    icon: HeartPulse,
    color: "#00C896",
    colorRgb: "0, 200, 150",
    description: "HIPAA-compliant systems, clinical AI, and operational automation for hospitals, clinics, and digital health companies.",
    services: ["Software Development", "AI Services", "Automation", "Web & Mobile", "Staffing"],
    useCases: ["Patient triage AI", "EHR integration platforms", "Claims processing automation", "Telemedicine app development", "Clinical documentation AI"],
    clients: "MedConsult, HealthBridge, CareSync",
    stat: { value: "99.9%", label: "HIPAA compliance rate" },
  },
  {
    id: "ecommerce",
    name: "E-Commerce & Retail",
    icon: ShoppingBag,
    color: "#7B2FFF",
    colorRgb: "123, 47, 255",
    description: "High-converting storefronts, intelligent recommendations, and supply chain automation for brands that compete on experience.",
    services: ["Web & Mobile", "AI Services", "Automation", "AI / ML", "Software Development"],
    useCases: ["Personalization engines", "Inventory forecasting", "Returns automation", "Mobile-first commerce apps", "Price optimization AI"],
    clients: "RetailEdge, FashionFirst, ShopBloc",
    stat: { value: "3.2×", label: "avg revenue uplift" },
  },
  {
    id: "logistics",
    name: "Logistics & Supply Chain",
    icon: Truck,
    color: "#00D4C8",
    colorRgb: "0, 212, 200",
    description: "Document automation, demand forecasting, and fleet intelligence systems that keep global supply chains flowing.",
    services: ["Automation", "AI / ML", "Software Development", "AI Services"],
    useCases: ["Shipment document processing", "Demand forecasting models", "Route optimization AI", "Warehouse management systems", "Supplier risk monitoring"],
    clients: "GlobalShip, LogiStream, FreightCore",
    stat: { value: "89%", label: "ops automated avg" },
  },
  {
    id: "saas",
    name: "SaaS & Technology",
    icon: Cloud,
    color: "#C8C8FF",
    colorRgb: "200, 200, 255",
    description: "Scaling engineering teams, embedding AI features, and building the infrastructure layer that modern SaaS companies stand on.",
    services: ["Software Development", "AI Services", "AI / ML", "Staffing", "Web & Mobile", "Automation"],
    useCases: ["AI feature integration", "Infrastructure scaling", "Engineering team augmentation", "MLOps pipelines", "Developer platform APIs"],
    clients: "CloudVault, SupplySync, DevOpsHub",
    stat: { value: "3×", label: "faster delivery" },
  },
  {
    id: "realestate",
    name: "Real Estate",
    icon: Building2,
    color: "#FFB800",
    colorRgb: "255, 184, 0",
    description: "PropTech platforms, automated valuations, and intelligent document processing for agencies, REITs, and prop-tech startups.",
    services: ["Software Development", "AI Services", "Automation", "Web & Mobile", "Accounting"],
    useCases: ["Automated property valuation models", "Lease document automation", "CRM & pipeline systems", "Virtual tour platforms", "Financial modelling tools"],
    clients: "PropVista, EstateHub, RentCore",
    stat: { value: "60%", label: "faster deal close" },
  },
  {
    id: "education",
    name: "Education & EdTech",
    icon: GraduationCap,
    color: "#FF8C42",
    colorRgb: "255, 140, 66",
    description: "Learning platforms, intelligent tutoring, and administrative automation for schools, universities, and EdTech companies.",
    services: ["Web & Mobile", "AI Services", "Software Development", "Automation"],
    useCases: ["Adaptive learning algorithms", "Student performance prediction", "Admissions workflow automation", "LMS platform development", "AI tutoring assistants"],
    clients: "LearnPath, EduTech Academy, SkillBridge",
    stat: { value: "42%", label: "better outcomes" },
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    icon: Cog,
    color: "#0066FF",
    colorRgb: "0, 102, 255",
    description: "Predictive maintenance AI, quality control vision systems, and ERP automation for manufacturers competing in Industry 4.0.",
    services: ["AI / ML", "Automation", "Software Development", "AI Services"],
    useCases: ["Predictive maintenance models", "Visual quality inspection AI", "ERP integration automation", "Supply chain optimization", "IoT data processing platforms"],
    clients: "PrecisionWorks, FactoryFlow, ManufactureAI",
    stat: { value: "34%", label: "downtime reduction" },
  },
];

export default function IndustriesPage() {
  const [selected, setSelected] = useState(INDUSTRIES[0]);

  return (
    <div className="min-h-screen pt-36 pb-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-3 mb-6">
          <span className="line-accent" />
          <span className="text-label">Industries We Serve</span>
        </motion.div>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-display-xl font-display font-light text-platinum max-w-2xl"
          >
            Deep expertise.
            <br />
            <em className="italic text-[var(--lucen-blue)]">Every vertical.</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-platinum-dim max-w-sm"
          >
            We don't just understand your technology stack — we understand your industry's
            regulatory environment, competitive dynamics, and customer expectations.
          </motion.p>
        </div>

        {/* Split layout: sidebar + detail */}
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Left: industry list */}
          <div className="lg:col-span-2 space-y-2 lg:sticky lg:top-32">
            {INDUSTRIES.map((ind, i) => {
              const IconComponent = ind.icon;
              return (
                <motion.button
                  key={ind.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setSelected(ind)}
                  className={`w-full text-left flex items-center gap-4 p-5 rounded-2xl border transition-all duration-300 ${
                    selected.id === ind.id
                      ? "border-[var(--service-accent)]/40 bg-obsidian-mid"
                      : "border-white/6 hover:border-white/12 bg-transparent hover:bg-obsidian-light/50"
                  }`}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all"
                    style={selected.id === ind.id
                      ? { background: `${ind.color}20`, border: `1px solid ${ind.color}40` }
                      : { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }
                    }
                  >
                    <IconComponent
                      size={20}
                      style={{ color: selected.id === ind.id ? ind.color : "#9090A8" }}
                      strokeWidth={1.5}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`text-sm font-medium transition-colors ${selected.id === ind.id ? "text-platinum" : "text-platinum-dim"}`}>
                      {ind.name}
                    </p>
                  </div>
                  {selected.id === ind.id && (
                    <div
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: ind.color }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Right: detail panel */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={selected.id}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="glass rounded-3xl p-8 lg:p-10 border"
                style={{ borderColor: `rgba(${selected.colorRgb}, 0.2)` }}
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{ background: `${selected.color}15`, border: `1px solid ${selected.color}30` }}
                  >
                    {(() => {
                      const SelectedIcon = selected.icon;
                      return <SelectedIcon size={26} style={{ color: selected.color }} strokeWidth={1.5} />;
                    })()}
                  </div>
                  <div>
                    <h2 className="font-display text-2xl font-light text-platinum">{selected.name}</h2>
                    <p className="text-xs font-mono-custom text-platinum-dim mt-1">{selected.clients}</p>
                  </div>
                  <div className="ml-auto text-right">
                    <p className="font-display text-3xl font-light" style={{ color: selected.color }}>
                      {selected.stat.value}
                    </p>
                    <p className="text-xs font-mono-custom text-platinum-dim mt-0.5">{selected.stat.label}</p>
                  </div>
                </div>

                <p className="text-platinum-dim leading-relaxed mb-8">{selected.description}</p>

                {/* Services used */}
                <div className="mb-8">
                  <p className="text-xs font-mono-custom tracking-widest uppercase text-platinum-dim mb-3">
                    Services Applied
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selected.services.map((s) => (
                      <span
                        key={s}
                        className="px-3 py-1.5 rounded-full text-xs font-mono-custom transition-colors"
                        style={{
                          background: `${selected.color}12`,
                          color: selected.color,
                          border: `1px solid ${selected.color}25`,
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Use cases */}
                <div className="mb-8">
                  <p className="text-xs font-mono-custom tracking-widest uppercase text-platinum-dim mb-3">
                    Common Use Cases
                  </p>
                  <ul className="space-y-2">
                    {selected.useCases.map((uc, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-platinum-dim">
                        <div
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: selected.color }}
                        />
                        {uc}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="flex flex-wrap gap-3 pt-6 border-t border-white/6">
                  <Link
                    href="/contact"
                    className="px-7 py-3 rounded-full font-medium text-sm text-obsidian"
                    style={{ background: selected.color }}
                  >
                    Start a {selected.name} Project →
                  </Link>
                  <Link
                    href="/work"
                    className="px-7 py-3 rounded-full border border-white/15 text-platinum-dim hover:border-white/30 text-sm transition-colors"
                  >
                    View Case Studies
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 rounded-3xl border border-white/8 bg-obsidian-mid p-10 lg:p-16 text-center clip-diagonal-both"
        >
          <h2 className="font-display text-3xl lg:text-4xl font-light text-platinum mb-4">
            Don't see your industry?
          </h2>
          <p className="text-platinum-dim mb-8 max-w-lg mx-auto">
            We've worked across 20+ verticals. If your problem is worth solving,
            we have the team to solve it.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[var(--service-accent)] text-obsidian font-medium text-sm"
          >
            Talk to a Specialist →
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
