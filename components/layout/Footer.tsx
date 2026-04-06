"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";

const FOOTER_LINKS = {
  Services: [
    { name: "Software Development", href: "/services/software-dev" },
    { name: "Web & Mobile Apps", href: "/services/web-mobile" },
    { name: "Automation", href: "/services/automation" },
    { name: "AI Services", href: "/services/ai-services" },
    { name: "AI / ML Engineering", href: "/services/ai-ml" },
    { name: "Accounting", href: "/services/accounting" },
    { name: "Staffing", href: "/services/staffing" },
  ],
  Company: [
    { name: "About Us", href: "/about" },
    { name: "Our Work", href: "/work" },
    { name: "Industries", href: "/industries" },
    { name: "Careers", href: "/careers" },
    { name: "Blog", href: "/blog" },
  ],
  Legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ],
};

export function Footer() {
  return (
    <footer className="relative border-t border-white/6 bg-obsidian">
      {/* Top section */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 rounded-sm bg-[var(--service-accent)] opacity-20 group-hover:opacity-40 transition-opacity" />
                <div className="absolute inset-[2px] rounded-sm border border-[var(--service-accent)] flex items-center justify-center">
                  <span className="text-[10px] font-mono-custom font-bold text-[var(--service-accent)] tracking-tighter">LE</span>
                </div>
              </div>
              <span className="font-display text-xl font-semibold text-platinum">
                Lucen<span className="text-[var(--service-accent)]">Edge</span>
              </span>
            </Link>

            <p className="text-sm text-platinum-dim leading-relaxed max-w-xs mb-8">
              From code to capital, from people to intelligence — full-spectrum business
              engineering for companies that refuse to compromise.
            </p>

            <div className="flex items-center gap-4">
              {[
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Github, href: "#", label: "GitHub" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-platinum-dim hover:text-platinum hover:border-white/25 transition-all"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <p className="text-xs font-mono-custom tracking-widest uppercase text-platinum-dim mb-5">
                {category}
              </p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-platinum-dim hover:text-platinum transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-platinum-dim font-mono-custom">
            © {new Date().getFullYear()} LucenEdge. All rights reserved.
          </p>

          {/* Service color dots */}
          <div className="flex items-center gap-2">
            {["#0066FF", "#7B2FFF", "#00D4C8", "#C8C8FF", "#FFB800", "#00C896", "#FF8C42"].map((color) => (
              <div
                key={color}
                className="w-1.5 h-1.5 rounded-full opacity-60"
                style={{ background: color }}
              />
            ))}
          </div>

          <p className="text-xs text-platinum-dim font-mono-custom">
            Built with precision. Engineered to scale.
          </p>
        </div>
      </div>

      {/* Large watermark */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 font-display text-[10rem] lg:text-[16rem] font-bold text-white opacity-[0.018] select-none pointer-events-none leading-none whitespace-nowrap">
        LucenEdge
      </div>
    </footer>
  );
}
