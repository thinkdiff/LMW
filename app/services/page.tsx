import Link from "next/link";
import {
  Code2, Smartphone, Zap, Brain, Bot, BarChart3, Users,
} from "lucide-react";
import { type LucideIcon } from "lucide-react";

export const metadata = {
  title: "Services — LucenEdge",
  description: "Full-spectrum technology and business services. Software, AI/ML, Automation, Web & Mobile, Accounting, and Staffing.",
};

interface ServiceDef {
  id: string;
  name: string;
  icon: LucideIcon;
  color: string;
  colorRgb: string;
  href: string;
  count: number;
  tagline: string;
  services: string[];
}

const SERVICES: ServiceDef[] = [
  {
    id: "software-dev",
    name: "Software Development",
    icon: Code2,
    color: "#0066FF",
    colorRgb: "0, 102, 255",
    href: "/services/software-dev",
    count: 8,
    tagline: "Precision-engineered systems at every scale",
    services: ["Custom Software", "Enterprise Apps", "API Dev", "DevOps", "SaaS", "Legacy Modernization", "Cloud-Native", "QA & Testing"],
  },
  {
    id: "web-mobile",
    name: "Web & Mobile Apps",
    icon: Smartphone,
    color: "#7B2FFF",
    colorRgb: "123, 47, 255",
    href: "/services/web-mobile",
    count: 8,
    tagline: "Experiences users open every day",
    services: ["iOS & Android", "PWA", "E-Commerce", "React Native", "Flutter", "UI/UX", "CMS Dev", "Responsive Web"],
  },
  {
    id: "automation",
    name: "Automation",
    icon: Zap,
    color: "#00D4C8",
    colorRgb: "0, 212, 200",
    href: "/services/automation",
    count: 8,
    tagline: "Eliminate every manual bottleneck",
    services: ["RPA", "BPA", "Workflow Automation", "Marketing Auto", "Data Pipelines", "Doc Automation", "API Auto", "Test Auto"],
  },
  {
    id: "ai-services",
    name: "AI Services",
    icon: Brain,
    color: "#C8C8FF",
    colorRgb: "200, 200, 255",
    href: "/services/ai-services",
    count: 8,
    tagline: "Business intelligence, amplified by AI",
    services: ["AI Strategy", "Chatbots", "NLP", "Computer Vision", "Recommendations", "Predictive Analytics", "AI Integration", "Content AI"],
  },
  {
    id: "ai-ml",
    name: "AI / ML Engineering",
    icon: Bot,
    color: "#FFB800",
    colorRgb: "255, 184, 0",
    href: "/services/ai-ml",
    count: 8,
    tagline: "Research-grade models built for production",
    services: ["Custom ML Models", "Model Training", "Data Labeling", "MLOps", "Deep Learning", "Time Series", "Anomaly Detection", "NLU"],
  },
  {
    id: "accounting",
    name: "Accounting",
    icon: BarChart3,
    color: "#00C896",
    colorRgb: "0, 200, 150",
    href: "/services/accounting",
    count: 8,
    tagline: "Financial clarity that fuels growth",
    services: ["Bookkeeping", "Financial Reporting", "Tax Planning", "Payroll", "CFO-as-Service", "Audit Support", "Cash Flow", "Consulting"],
  },
  {
    id: "staffing",
    name: "Staffing",
    icon: Users,
    color: "#FF8C42",
    colorRgb: "255, 140, 66",
    href: "/services/staffing",
    count: 8,
    tagline: "The right people, precisely when you need them",
    services: ["IT Augmentation", "Permanent Hire", "Contract Staffing", "Remote Teams", "Executive Search", "Freelancer Mgmt", "Offshore", "HR Consulting"],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      {/* Hero */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-20">
        <div className="flex items-center gap-3 mb-6">
          <span className="line-accent" />
          <span className="text-label">Our Services</span>
        </div>
        <h1 className="text-display-xl font-display font-light text-platinum mb-6 max-w-3xl">
          The complete
          <br />
          <em className="italic text-[var(--service-accent)]">business engine.</em>
        </h1>
        <p className="text-platinum-dim text-lg max-w-lg">
          Seven practice areas. Hundreds of specialists. One integrated partner that covers
          every layer of your business — from the code to the capital.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="space-y-4">
          {SERVICES.map((service, i) => {
            const IconComponent = service.icon;
            return (
              <Link
                key={service.id}
                href={service.href}
                className="group block rounded-2xl border border-white/6 hover:border-white/14 bg-obsidian-light hover:bg-obsidian-mid transition-all duration-300 overflow-hidden"
                data-cursor-label="Enter"
              >
                <div className="p-8 lg:p-10">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                    {/* Left: icon + name */}
                    <div className="flex items-center gap-5 lg:w-64 flex-shrink-0">
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110 duration-300"
                        style={{
                          background: `rgba(${service.colorRgb}, 0.12)`,
                          border: `1px solid rgba(${service.colorRgb}, 0.25)`,
                        }}
                      >
                        <IconComponent size={24} style={{ color: service.color }} strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="text-xs font-mono-custom tracking-widest text-platinum-dim mb-1">
                          0{i + 1} / 07
                        </p>
                        <h2
                          className="font-display text-xl font-light transition-colors duration-300 group-hover:text-[var(--service-accent)]"
                          style={{ color: "#E8E8F0" }}
                        >
                          {service.name}
                        </h2>
                      </div>
                    </div>

                    {/* Center: tagline */}
                    <div className="flex-1">
                      <p className="text-platinum-dim group-hover:text-platinum transition-colors">
                        {service.tagline}
                      </p>
                    </div>

                    {/* Right: micro-service tags */}
                    <div className="flex flex-wrap gap-2 lg:max-w-sm">
                      {service.services.slice(0, 5).map((s) => (
                        <span
                          key={s}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono-custom border border-white/8 text-platinum-dim"
                        >
                          {s}
                        </span>
                      ))}
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-mono-custom border border-white/8 text-platinum-dim">
                        +{service.count - 5} more
                      </span>
                    </div>

                    {/* Arrow */}
                    <div
                      className="hidden lg:flex items-center justify-center w-10 h-10 rounded-full border border-white/10 group-hover:border-[var(--service-accent)] transition-all duration-300 flex-shrink-0"
                      style={{ color: "#9090A8" }}
                    >
                      <span className="text-sm group-hover:text-[var(--service-accent)] transition-colors">→</span>
                    </div>
                  </div>
                </div>

                {/* Accent bottom line */}
                <div
                  className="h-[2px] w-0 group-hover:w-full transition-all duration-500"
                  style={{ background: `linear-gradient(to right, rgba(${service.colorRgb}, 0.6), transparent)` }}
                />
              </Link>
            );
          })}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mt-20 text-center">
        <p className="text-platinum-dim mb-6">Not sure which service fits your need?</p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[var(--service-accent)] text-obsidian font-medium text-sm"
        >
          Talk to our team →
        </Link>
      </div>
    </div>
  );
}
