"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown, Menu, X,
  Code2, Smartphone, Zap, Brain, Bot, BarChart3, Users,
} from "lucide-react";

const SERVICES = [
  { name: "Software Development", href: "/services/software-dev", color: "#0066FF", icon: Code2, desc: "Custom software, APIs, DevOps" },
  { name: "Web & Mobile Apps", href: "/services/web-mobile", color: "#7B2FFF", icon: Smartphone, desc: "iOS, Android, PWA, E-Commerce" },
  { name: "Automation Services", href: "/services/automation", color: "#00D4C8", icon: Zap, desc: "RPA, workflow & process automation" },
  { name: "AI Services", href: "/services/ai-services", color: "#C8C8FF", icon: Brain, desc: "Chatbots, NLP, vision, strategy" },
  { name: "AI / ML Services", href: "/services/ai-ml", color: "#FFB800", icon: Bot, desc: "Custom ML models, MLOps, deep learning" },
  { name: "Accounting Services", href: "/services/accounting", color: "#00C896", icon: BarChart3, desc: "Bookkeeping, tax, CFO-as-a-Service" },
  { name: "Staffing Services", href: "/services/staffing", color: "#FF8C42", icon: Users, desc: "IT augmentation, recruitment, remote teams" },
];

const NAV_LINKS = [
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Work", href: "/work" },
  { name: "Industries", href: "/industries" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [serviceMenuOpen, setServiceMenuOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServiceMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-9 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? "glass-strong" : "bg-transparent"
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8">
            <div className="absolute inset-0 rounded-sm bg-[var(--service-accent)] opacity-20 group-hover:opacity-40 transition-opacity" />
            <div className="absolute inset-[2px] rounded-sm border border-[var(--service-accent)] flex items-center justify-center">
              <span className="text-[10px] font-mono-custom font-bold text-[var(--service-accent)] tracking-tighter">LE</span>
            </div>
          </div>
          <span className="font-display text-xl font-semibold tracking-tight text-platinum">
            Lucen<span className="text-[var(--service-accent)]">Edge</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <div key={link.name} className="relative">
              {link.hasDropdown ? (
                <button
                  className="flex items-center gap-1 text-sm text-platinum-dim hover:text-platinum transition-colors group"
                  onMouseEnter={() => setServiceMenuOpen(true)}
                  onMouseLeave={() => setServiceMenuOpen(false)}
                >
                  {link.name}
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${serviceMenuOpen ? "rotate-180" : ""}`}
                  />

                  {/* Mega Menu */}
                  <AnimatePresence>
                    {serviceMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[680px]"
                        onMouseEnter={() => setServiceMenuOpen(true)}
                        onMouseLeave={() => setServiceMenuOpen(false)}
                      >
                        <div className="glass-strong rounded-2xl p-6 border border-white/8">
                          <p className="text-label mb-4">All Services</p>
                          <div className="grid grid-cols-2 gap-2">
                            {SERVICES.map((service) => {
                              const IconComponent = service.icon;
                              return (
                                <Link
                                  key={service.name}
                                  href={service.href}
                                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group/item"
                                >
                                  <div
                                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                                    style={{ background: `${service.color}18`, border: `1px solid ${service.color}30` }}
                                  >
                                    <IconComponent size={18} style={{ color: service.color }} strokeWidth={1.5} />
                                  </div>
                                  <div>
                                    <p className="text-sm text-platinum font-medium group-hover/item:text-[var(--service-accent)] transition-colors">
                                      {service.name}
                                    </p>
                                    <p className="text-xs text-platinum-dim mt-0.5">{service.desc}</p>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                          <div className="mt-4 pt-4 border-t border-white/6 flex items-center justify-between">
                            <Link href="/services" className="text-xs text-platinum-dim hover:text-platinum transition-colors">
                              View all services →
                            </Link>
                            <Link
                              href="/contact"
                              className="text-xs px-4 py-2 rounded-lg text-[var(--service-accent)] border border-[var(--service-accent)]/30 hover:bg-[var(--service-accent)]/10 transition-colors"
                            >
                              Get a quote
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              ) : (
                <Link
                  href={link.href}
                  className={`text-sm transition-colors ${
                    pathname === link.href ? "text-platinum" : "text-platinum-dim hover:text-platinum"
                  }`}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Link href="/contact" className="text-sm text-platinum-dim hover:text-platinum transition-colors">
            Contact
          </Link>
          <Link
            href="/contact"
            className="px-5 py-2.5 rounded-full text-sm font-medium bg-[var(--service-accent)] text-obsidian hover:opacity-90 transition-opacity"
            data-cursor-label="Start"
          >
            Start a Project
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-platinum-dim hover:text-platinum transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-strong border-t border-white/6"
          >
            <div className="max-w-[1400px] mx-auto px-6 py-6 space-y-4">
              {SERVICES.map((service) => {
                const IconComponent = service.icon;
                return (
                  <Link
                    key={service.name}
                    href={service.href}
                    className="flex items-center gap-3 py-2 text-sm text-platinum-dim hover:text-platinum transition-colors"
                  >
                    <IconComponent size={16} style={{ color: service.color }} strokeWidth={1.5} />
                    {service.name}
                  </Link>
                );
              })}
              <div className="pt-4 border-t border-white/6">
                <Link
                  href="/contact"
                  className="block w-full text-center py-3 rounded-full bg-[var(--service-accent)] text-obsidian text-sm font-medium"
                >
                  Start a Project
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
