import { ServicePageLayout } from "@/components/layout/ServicePageLayout";
import { Users, Monitor, Handshake, ClipboardList, Globe, Crown, Building2, Smartphone, BarChart3 } from "lucide-react";

export const metadata = {
  title: "Staffing Services — LucenEdge",
  description: "IT staff augmentation, permanent recruitment, remote teams, executive search and HR consulting.",
};

export default function StaffingPage() {
  return (
    <ServicePageLayout
      serviceId="staffing"
      name="Staffing Services"
      icon={<Users size={28} color="#FF8C42" strokeWidth={1.5} />}
      color="#FF8C42"
      colorRgb="255, 140, 66"
      tagline={`The right people.\nPrecisely when needed.`}
      description="We connect exceptional talent with ambitious companies — from individual engineers to complete offshore teams. Our talent network spans 28+ countries, with pre-vetted specialists in every technology and business domain we serve."
      stats={[
        { value: "180+", label: "Pros placed in 2024" },
        { value: "28+", label: "Countries covered" },
        { value: "3 wks", label: "Avg time-to-fill" },
      ]}
      microServices={[
        { name: "IT Staff Augmentation", icon: <Monitor size={22} color="#FF8C42" strokeWidth={1.5} />, description: "Vetted engineers, architects, and tech leads embedded in your team — weekly or project-based." },
        { name: "Permanent Recruitment", icon: <Handshake size={22} color="#FF8C42" strokeWidth={1.5} />, description: "End-to-end hiring for full-time technical and business roles with a 90-day placement guarantee." },
        { name: "Contract Staffing", icon: <ClipboardList size={22} color="#FF8C42" strokeWidth={1.5} />, description: "Flexible contract talent for project sprints, maternity cover, and scaling peaks." },
        { name: "Remote Team Building", icon: <Globe size={22} color="#FF8C42" strokeWidth={1.5} />, description: "Complete remote team assembly — engineers, PMs, designers — fully managed and integrated." },
        { name: "Executive Search", icon: <Crown size={22} color="#FF8C42" strokeWidth={1.5} />, description: "C-suite and VP-level placement with industry-specific networks and discreet search methodology." },
        { name: "Offshore Teams", icon: <Building2 size={22} color="#FF8C42" strokeWidth={1.5} />, description: "Dedicated offshore development centers in talent-rich markets with timezone-optimized overlap." },
        { name: "Freelancer Management", icon: <Smartphone size={22} color="#FF8C42" strokeWidth={1.5} />, description: "Compliant onboarding, payment, and management of independent contractors across jurisdictions." },
        { name: "HR Consulting", icon: <BarChart3 size={22} color="#FF8C42" strokeWidth={1.5} />, description: "Comp benchmarking, org design, performance frameworks, and HR policy development." },
      ]}
      processSteps={[
        { step: "01", title: "Brief", desc: "Role requirements, team culture, tech stack, and must-have vs. nice-to-have skills." },
        { step: "02", title: "Source", desc: "Active search across our talent network, job boards, and direct outreach pipelines." },
        { step: "03", title: "Vet", desc: "Technical assessments, culture fit interviews, and reference verification for every candidate." },
        { step: "04", title: "Match", desc: "Curated shortlist of 3–5 pre-vetted candidates delivered within 5 business days." },
        { step: "05", title: "Place & Support", desc: "Offer management, onboarding support, and 90-day post-placement check-ins." },
      ]}
      caseStudy={{
        client: "CloudVault",
        industry: "Cloud Infrastructure",
        challenge: "CloudVault needed to scale from 12 to 30 engineers in 6 weeks to hit their product launch deadline. Their HR team had been searching for 3 months with no results.",
        result: "We placed 18 senior engineers across frontend, backend, and DevOps in 21 days — all cultural fits who passed their internal technical bar. The product launched on time.",
        metric: "21 days",
      }}
    />
  );
}
