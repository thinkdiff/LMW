import { ServicePageLayout } from "@/components/layout/ServicePageLayout";
import { Code2, Building2, Plug, Cloud, RefreshCw, Rocket, Recycle, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Software Development — LucenEdge",
  description: "Custom software, enterprise systems, APIs, DevOps and SaaS platforms built to scale.",
};

export default function SoftwareDevPage() {
  return (
    <ServicePageLayout
      serviceId="software"
      name="Software Development"
      icon={<Code2 size={28} color="#0066FF" strokeWidth={1.5} />}
      color="#0066FF"
      colorRgb="0, 102, 255"
      tagline={`Systems built to\nlast. And scale.`}
      description="We engineer software that solves real problems at every scale — from lean startups shipping their first product to enterprises modernizing critical infrastructure. Architecture-first, performance-obsessed, and built to evolve."
      stats={[
        { value: "320+", label: "Apps shipped" },
        { value: "99.9%", label: "Uptime SLA" },
        { value: "3×", label: "Faster delivery" },
      ]}
      microServices={[
        { name: "Custom Software", icon: <Code2 size={22} color="#0066FF" strokeWidth={1.5} />, description: "Bespoke applications designed around your exact business logic, workflows, and growth trajectory." },
        { name: "Enterprise Apps", icon: <Building2 size={22} color="#0066FF" strokeWidth={1.5} />, description: "Large-scale, multi-tenant systems with SSO, RBAC, audit trails, and compliance built-in from day one." },
        { name: "API Development", icon: <Plug size={22} color="#0066FF" strokeWidth={1.5} />, description: "RESTful, GraphQL, and gRPC APIs designed for performance, versioning, and third-party extensibility." },
        { name: "Cloud-Native Apps", icon: <Cloud size={22} color="#0066FF" strokeWidth={1.5} />, description: "Microservices, containers, and serverless architectures built for AWS, GCP, or Azure from the ground up." },
        { name: "DevOps & CI/CD", icon: <RefreshCw size={22} color="#0066FF" strokeWidth={1.5} />, description: "Automated pipelines, infrastructure-as-code, and zero-downtime deployments that ship confidence." },
        { name: "SaaS Platforms", icon: <Rocket size={22} color="#0066FF" strokeWidth={1.5} />, description: "Multi-tenant SaaS products with usage-based billing, onboarding flows, and scalable data isolation." },
        { name: "Legacy Modernization", icon: <Recycle size={22} color="#0066FF" strokeWidth={1.5} />, description: "Systematic migration of legacy monoliths to modern architectures — zero downtime, full data integrity." },
        { name: "QA & Testing", icon: <CheckCircle2 size={22} color="#0066FF" strokeWidth={1.5} />, description: "Automated test suites, load testing, and QA frameworks that catch bugs before your users do." },
      ]}
      processSteps={[
        { step: "01", title: "Discovery", desc: "Deep-dive into business requirements, technical constraints, and success metrics." },
        { step: "02", title: "Architecture", desc: "System design, tech stack selection, and scalability planning before a line is written." },
        { step: "03", title: "Build", desc: "Agile sprints with weekly demos, continuous integration, and transparent progress." },
        { step: "04", title: "Deploy", desc: "Staged rollouts, monitoring setup, and performance benchmarking at launch." },
        { step: "05", title: "Scale", desc: "Ongoing optimization, feature velocity, and infrastructure scaling as you grow." },
      ]}
      caseStudy={{
        client: "NovaPay Financial",
        industry: "FinTech",
        challenge: "NovaPay needed to migrate a 12-year-old monolithic banking platform to a microservices architecture without any downtime during their peak trading hours, serving 2M+ daily active users.",
        result: "We delivered a complete architecture migration in 14 weeks using a strangler-fig pattern — zero downtime, 40% performance improvement, and 60% reduction in infrastructure costs through autoscaling.",
        metric: "40%",
      }}
    />
  );
}
