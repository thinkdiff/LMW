import { ServicePageLayout } from "@/components/layout/ServicePageLayout";
import { Zap, Bot, Factory, RefreshCw, Megaphone, GitBranch, FileText, Plug, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Automation Services — LucenEdge",
  description: "RPA, workflow automation, business process automation — eliminate every manual bottleneck.",
};

export default function AutomationPage() {
  return (
    <ServicePageLayout
      serviceId="automation"
      name="Automation Services"
      icon={<Zap size={28} color="#00D4C8" strokeWidth={1.5} />}
      color="#00D4C8"
      colorRgb="0, 212, 200"
      tagline={`If it's repetitive,\nit shouldn't be human.`}
      description="We map, analyze, and automate your highest-friction operations — from document processing and approvals to multi-system data flows. Our automation stack delivers measurable ROI in weeks, not quarters."
      stats={[
        { value: "2.4M+", label: "Tasks automated/day" },
        { value: "73%", label: "Avg ops reduction" },
        { value: "6 wks", label: "Avg time to ROI" },
      ]}
      microServices={[
        { name: "Robotic Process Automation", icon: <Bot size={22} color="#00D4C8" strokeWidth={1.5} />, description: "Software bots that replicate human actions across any application — no API required." },
        { name: "Business Process Automation", icon: <Factory size={22} color="#00D4C8" strokeWidth={1.5} />, description: "End-to-end process redesign and automation of complex multi-step business workflows." },
        { name: "Workflow Automation", icon: <RefreshCw size={22} color="#00D4C8" strokeWidth={1.5} />, description: "Connect your tools and teams with intelligent workflows — approvals, notifications, routing." },
        { name: "Marketing Automation", icon: <Megaphone size={22} color="#00D4C8" strokeWidth={1.5} />, description: "Lead nurturing, campaign triggers, and personalization at scale across every channel." },
        { name: "Data Pipeline Automation", icon: <GitBranch size={22} color="#00D4C8" strokeWidth={1.5} />, description: "ETL/ELT pipelines that move, transform, and load data reliably across your entire stack." },
        { name: "Document Automation", icon: <FileText size={22} color="#00D4C8" strokeWidth={1.5} />, description: "Auto-extract, classify, and process invoices, contracts, forms, and reports with AI-assisted OCR." },
        { name: "Integration Automation", icon: <Plug size={22} color="#00D4C8" strokeWidth={1.5} />, description: "API orchestration and middleware that makes your disconnected tools talk to each other seamlessly." },
        { name: "Test Automation", icon: <CheckCircle2 size={22} color="#00D4C8" strokeWidth={1.5} />, description: "Automated regression, load, and end-to-end testing suites that ship quality at speed." },
      ]}
      processSteps={[
        { step: "01", title: "Map", desc: "Process discovery workshops to identify and prioritize automation candidates by ROI potential." },
        { step: "02", title: "Design", desc: "Automation blueprint — tools selection, exception handling, and integration architecture." },
        { step: "03", title: "Build", desc: "Bot and workflow development with staged testing in a sandboxed environment." },
        { step: "04", title: "Deploy", desc: "Parallel running with human oversight before full handoff to automated systems." },
        { step: "05", title: "Monitor", desc: "24/7 bot monitoring, exception management, and continuous optimization post-launch." },
      ]}
      caseStudy={{
        client: "GlobalShip Logistics",
        industry: "Logistics",
        challenge: "GlobalShip had a 22-person team manually processing 4,000+ shipping documents per day across 6 different systems. Errors cost $180K/month in corrections and delays.",
        result: "We deployed an RPA + document AI solution in 8 weeks that automated 89% of all document processing. The team was redeployed to higher-value work, saving $2.1M annually.",
        metric: "89%",
      }}
    />
  );
}
