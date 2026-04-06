import { ServicePageLayout } from "@/components/layout/ServicePageLayout";
import { Brain, Map, MessageSquare, FileSearch, Eye, Target, TrendingUp, PenTool, Wrench } from "lucide-react";

export const metadata = {
  title: "AI Services — LucenEdge",
  description: "Business-focused AI — chatbots, NLP, computer vision, recommendation engines and AI strategy.",
};

export default function AIServicesPage() {
  return (
    <ServicePageLayout
      serviceId="ai-services"
      name="AI Services"
      icon={<Brain size={28} color="#C8C8FF" strokeWidth={1.5} />}
      color="#C8C8FF"
      colorRgb="200, 200, 255"
      tagline={`Intelligence that\ndrives decisions.`}
      description="We make AI practical for business. Not research projects — production-grade systems that answer questions, predict outcomes, automate conversations, and create advantages your competitors can't copy overnight."
      stats={[
        { value: "47", label: "AI systems live" },
        { value: "91%", label: "Avg accuracy rate" },
        { value: "14 days", label: "To first prototype" },
      ]}
      microServices={[
        { name: "AI Strategy & Consulting", icon: <Map size={22} color="#C8C8FF" strokeWidth={1.5} />, description: "Roadmapping your AI adoption — what to build, when, and how to measure business impact." },
        { name: "AI Chatbots", icon: <MessageSquare size={22} color="#C8C8FF" strokeWidth={1.5} />, description: "Context-aware conversational AI for customer service, internal ops, and lead qualification." },
        { name: "Natural Language Processing", icon: <FileSearch size={22} color="#C8C8FF" strokeWidth={1.5} />, description: "Text classification, sentiment analysis, entity extraction, and document understanding at scale." },
        { name: "Computer Vision", icon: <Eye size={22} color="#C8C8FF" strokeWidth={1.5} />, description: "Object detection, image classification, defect detection, and visual QA for any industry." },
        { name: "Recommendation Engines", icon: <Target size={22} color="#C8C8FF" strokeWidth={1.5} />, description: "Personalization systems that increase engagement, AOV, and retention across your product." },
        { name: "Predictive Analytics", icon: <TrendingUp size={22} color="#C8C8FF" strokeWidth={1.5} />, description: "Forecasting models that predict churn, demand, risk, and opportunity from your existing data." },
        { name: "AI Content Generation", icon: <PenTool size={22} color="#C8C8FF" strokeWidth={1.5} />, description: "Scalable content pipelines — product descriptions, reports, and personalized communications." },
        { name: "AI Integration", icon: <Wrench size={22} color="#C8C8FF" strokeWidth={1.5} />, description: "Embedding AI capabilities into your existing stack via API, SDK, or custom middleware layers." },
      ]}
      processSteps={[
        { step: "01", title: "Assess", desc: "AI readiness audit — data quality, use case prioritization, and ROI modeling." },
        { step: "02", title: "Prototype", desc: "14-day proof of concept with your real data to validate feasibility before full build." },
        { step: "03", title: "Train", desc: "Model development, fine-tuning, and validation against held-out test sets." },
        { step: "04", title: "Integrate", desc: "Production deployment with API wrappers, monitoring, and fallback logic." },
        { step: "05", title: "Improve", desc: "Continuous learning loops, feedback collection, and quarterly model upgrades." },
      ]}
      caseStudy={{
        client: "MedConsult Platform",
        industry: "Healthcare",
        challenge: "MedConsult's support team was handling 12,000 patient inquiries per day. Average response time was 6 hours. Patient satisfaction scores were at an all-time low.",
        result: "We built a context-aware medical AI chatbot that handles 78% of all inquiries autonomously with 94% patient satisfaction. Human agents now focus only on complex cases.",
        metric: "78%",
      }}
    />
  );
}
