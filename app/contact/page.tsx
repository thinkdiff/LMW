"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { Zap, Lock, ClipboardList, Target, Globe } from "lucide-react";
import { type LucideIcon } from "lucide-react";

const SERVICES = [
  "Software Development", "Web & Mobile Apps", "Automation Services",
  "AI Services", "AI / ML Engineering", "Accounting Services", "Staffing Services",
  "Multiple Services",
];

const BUDGETS = ["< $10K", "$10K – $50K", "$50K – $150K", "$150K – $500K", "$500K+", "Ongoing / Retainer"];
const TIMELINES = ["ASAP", "1 – 3 months", "3 – 6 months", "6+ months", "Flexible"];

interface TrustMarker {
  icon: LucideIcon;
  text: string;
}

const TRUST_MARKERS: TrustMarker[] = [
  { icon: Zap, text: "48-hour response guarantee" },
  { icon: Lock, text: "NDA signed on day one" },
  { icon: ClipboardList, text: "No lock-in contracts" },
  { icon: Target, text: "Dedicated solution architect" },
  { icon: Globe, text: "Available across all timezones" },
];

export default function ContactPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    companyType: "", companySize: "",
    services: [] as string[],
    budget: "", timeline: "",
    name: "", email: "", phone: "", message: "",
  });

  const totalSteps = 4;

  const update = (key: string, value: string | string[]) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const toggleService = (s: string) => {
    const current = form.services;
    update("services", current.includes(s) ? current.filter((x) => x !== s) : [...current, s]);
  };

  const handleSubmit = () => {
    toast.success("Message sent! We'll reach out within 48 hours.", {
      description: "A solution architect will review your project details.",
    });
    setStep(1);
    setForm({ companyType: "", companySize: "", services: [], budget: "", timeline: "", name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen pt-36 pb-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left: info */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="line-accent" />
              <span className="text-label">Start a Project</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-display-lg font-display font-light text-platinum mb-6"
            >
              Let's build
              <br />
              <em className="italic text-[var(--service-accent)]">something exceptional.</em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-platinum-dim leading-relaxed mb-12"
            >
              Tell us about your project and a solution architect will reach out
              within 48 hours with a tailored approach — no boilerplate, no wasted meetings.
            </motion.p>

            {/* Trust markers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              {TRUST_MARKERS.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div key={item.text} className="flex items-center gap-3 text-sm text-platinum-dim">
                    <IconComponent size={16} className="text-[var(--service-accent)] flex-shrink-0" strokeWidth={1.5} />
                    <span>{item.text}</span>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Right: multi-step form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="glass rounded-3xl p-8 lg:p-10 border border-white/8"
          >
            {/* Progress */}
            <div className="flex items-center gap-2 mb-8">
              {Array.from({ length: totalSteps }).map((_, i) => (
                <div
                  key={i}
                  className="flex-1 h-1 rounded-full transition-all duration-500"
                  style={{
                    background: i < step ? "var(--service-accent)" : "rgba(255,255,255,0.1)",
                  }}
                />
              ))}
            </div>
            <p className="text-xs font-mono-custom text-platinum-dim mb-8">
              Step {step} of {totalSteps}
            </p>

            <AnimatePresence mode="wait">
              {/* Step 1: Company info */}
              {step === 1 && (
                <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <h2 className="font-display text-2xl font-light text-platinum mb-6">About your business</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="text-xs font-mono-custom tracking-widest text-platinum-dim uppercase mb-2 block">
                        Company Type
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {["Startup", "Scale-up", "Enterprise", "Agency", "Non-profit", "Other"].map((t) => (
                          <button
                            key={t}
                            onClick={() => update("companyType", t)}
                            className={`py-2.5 px-3 rounded-lg text-sm border transition-all ${
                              form.companyType === t
                                ? "border-[var(--service-accent)] bg-[var(--service-accent)]/10 text-[var(--service-accent)]"
                                : "border-white/10 text-platinum-dim hover:border-white/20"
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-mono-custom tracking-widest text-platinum-dim uppercase mb-2 block">
                        Team Size
                      </label>
                      <div className="grid grid-cols-4 gap-2">
                        {["1–10", "11–50", "51–200", "200+"].map((s) => (
                          <button
                            key={s}
                            onClick={() => update("companySize", s)}
                            className={`py-2.5 px-3 rounded-lg text-sm border transition-all ${
                              form.companySize === s
                                ? "border-[var(--service-accent)] bg-[var(--service-accent)]/10 text-[var(--service-accent)]"
                                : "border-white/10 text-platinum-dim hover:border-white/20"
                            }`}
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setStep(2)}
                    disabled={!form.companyType || !form.companySize}
                    className="mt-8 w-full py-4 rounded-full bg-[var(--service-accent)] text-obsidian font-medium text-sm disabled:opacity-30 transition-opacity"
                  >
                    Continue →
                  </button>
                </motion.div>
              )}

              {/* Step 2: Services */}
              {step === 2 && (
                <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <h2 className="font-display text-2xl font-light text-platinum mb-6">What do you need?</h2>
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {SERVICES.map((s) => (
                      <button
                        key={s}
                        onClick={() => toggleService(s)}
                        className={`py-2.5 px-3 rounded-lg text-sm border transition-all text-left ${
                          form.services.includes(s)
                            ? "border-[var(--service-accent)] bg-[var(--service-accent)]/10 text-[var(--service-accent)]"
                            : "border-white/10 text-platinum-dim hover:border-white/20"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <button onClick={() => setStep(1)} className="py-4 px-6 rounded-full border border-white/15 text-platinum-dim text-sm">← Back</button>
                    <button
                      onClick={() => setStep(3)}
                      disabled={form.services.length === 0}
                      className="flex-1 py-4 rounded-full bg-[var(--service-accent)] text-obsidian font-medium text-sm disabled:opacity-30"
                    >
                      Continue →
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Budget + Timeline */}
              {step === 3 && (
                <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <h2 className="font-display text-2xl font-light text-platinum mb-6">Scope & timeline</h2>
                  <div className="space-y-5">
                    <div>
                      <label className="text-xs font-mono-custom tracking-widest text-platinum-dim uppercase mb-2 block">Budget Range</label>
                      <div className="grid grid-cols-2 gap-2">
                        {BUDGETS.map((b) => (
                          <button
                            key={b}
                            onClick={() => update("budget", b)}
                            className={`py-2.5 px-3 rounded-lg text-sm border transition-all ${
                              form.budget === b
                                ? "border-[var(--service-accent)] bg-[var(--service-accent)]/10 text-[var(--service-accent)]"
                                : "border-white/10 text-platinum-dim hover:border-white/20"
                            }`}
                          >
                            {b}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-mono-custom tracking-widest text-platinum-dim uppercase mb-2 block">Start Timeline</label>
                      <div className="grid grid-cols-3 gap-2">
                        {TIMELINES.map((t) => (
                          <button
                            key={t}
                            onClick={() => update("timeline", t)}
                            className={`py-2.5 px-3 rounded-lg text-sm border transition-all ${
                              form.timeline === t
                                ? "border-[var(--service-accent)] bg-[var(--service-accent)]/10 text-[var(--service-accent)]"
                                : "border-white/10 text-platinum-dim hover:border-white/20"
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3 mt-8">
                    <button onClick={() => setStep(2)} className="py-4 px-6 rounded-full border border-white/15 text-platinum-dim text-sm">← Back</button>
                    <button
                      onClick={() => setStep(4)}
                      disabled={!form.budget || !form.timeline}
                      className="flex-1 py-4 rounded-full bg-[var(--service-accent)] text-obsidian font-medium text-sm disabled:opacity-30"
                    >
                      Continue →
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 4: Contact details */}
              {step === 4 && (
                <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <h2 className="font-display text-2xl font-light text-platinum mb-6">Your details</h2>
                  <div className="space-y-4">
                    {[
                      { key: "name", label: "Full Name", type: "text", placeholder: "John Smith" },
                      { key: "email", label: "Work Email", type: "email", placeholder: "john@company.com" },
                      { key: "phone", label: "Phone (optional)", type: "tel", placeholder: "+1 (555) 000-0000" },
                    ].map((field) => (
                      <div key={field.key}>
                        <label className="text-xs font-mono-custom tracking-widest text-platinum-dim uppercase mb-2 block">
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          placeholder={field.placeholder}
                          value={(form as unknown as Record<string, string>)[field.key]}
                          onChange={(e) => update(field.key, e.target.value)}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-platinum placeholder:text-platinum-dim/40 focus:outline-none focus:border-[var(--service-accent)] transition-colors"
                        />
                      </div>
                    ))}
                    <div>
                      <label className="text-xs font-mono-custom tracking-widest text-platinum-dim uppercase mb-2 block">
                        Project Brief
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Tell us about your project..."
                        value={form.message}
                        onChange={(e) => update("message", e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-platinum placeholder:text-platinum-dim/40 focus:outline-none focus:border-[var(--service-accent)] transition-colors resize-none"
                      />
                    </div>
                  </div>
                  <div className="flex gap-3 mt-6">
                    <button onClick={() => setStep(3)} className="py-4 px-6 rounded-full border border-white/15 text-platinum-dim text-sm">← Back</button>
                    <button
                      onClick={handleSubmit}
                      disabled={!form.name || !form.email}
                      className="flex-1 py-4 rounded-full bg-[var(--service-accent)] text-obsidian font-medium text-sm disabled:opacity-30"
                    >
                      Send Message →
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
