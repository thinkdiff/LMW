import { ServicePageLayout } from "@/components/layout/ServicePageLayout";
import { Bot, Dna, Dumbbell, Tag, Rocket, Network, BarChart3, Search, MessageCircle } from "lucide-react";

export const metadata = {
  title: "AI / ML Engineering — LucenEdge",
  description: "Custom ML models, MLOps, deep learning, and production-grade machine learning systems.",
};

export default function AIMLPage() {
  return (
    <ServicePageLayout
      serviceId="ai-ml"
      name="AI / ML Engineering"
      icon={<Bot size={28} color="#FFB800" strokeWidth={1.5} />}
      color="#FFB800"
      colorRgb="255, 184, 0"
      tagline={`Models that learn.\nSystems that perform.`}
      description="Research-grade machine learning engineered for production. Our ML team brings academic rigor to business problems — custom architectures, rigorous validation, and deployment pipelines that keep models performing long after launch."
      stats={[
        { value: "120+", label: "Models in production" },
        { value: "96%", label: "Peak model accuracy" },
        { value: "12ms", label: "Avg inference latency" },
      ]}
      microServices={[
        { name: "Custom ML Models", icon: <Dna size={22} color="#FFB800" strokeWidth={1.5} />, description: "Purpose-built models trained on your data — classification, regression, clustering, and generative." },
        { name: "Model Training & Fine-tuning", icon: <Dumbbell size={22} color="#FFB800" strokeWidth={1.5} />, description: "Transfer learning and fine-tuning of foundation models (LLMs, vision transformers) on your domain." },
        { name: "Data Collection & Labeling", icon: <Tag size={22} color="#FFB800" strokeWidth={1.5} />, description: "Managed data annotation pipelines with quality control for supervised learning at any scale." },
        { name: "MLOps & Deployment", icon: <Rocket size={22} color="#FFB800" strokeWidth={1.5} />, description: "CI/CD for ML — automated retraining, model versioning, A/B testing, and drift monitoring." },
        { name: "Deep Learning", icon: <Network size={22} color="#FFB800" strokeWidth={1.5} />, description: "Neural network architectures for vision, language, audio, and tabular data problems." },
        { name: "Time Series Forecasting", icon: <BarChart3 size={22} color="#FFB800" strokeWidth={1.5} />, description: "Demand forecasting, anomaly detection, and predictive maintenance for temporal data." },
        { name: "Anomaly Detection", icon: <Search size={22} color="#FFB800" strokeWidth={1.5} />, description: "Unsupervised and semi-supervised models that flag fraud, equipment failure, and data quality issues." },
        { name: "Natural Language Understanding", icon: <MessageCircle size={22} color="#FFB800" strokeWidth={1.5} />, description: "Semantic search, document Q&A, summarization, and information extraction from unstructured text." },
      ]}
      processSteps={[
        { step: "01", title: "Problem Frame", desc: "Define the ML problem type, success metrics, and minimum viable dataset requirements." },
        { step: "02", title: "Data Prep", desc: "Data audit, feature engineering, train/val/test splitting, and augmentation strategies." },
        { step: "03", title: "Experiment", desc: "Rapid model experimentation with tracked runs, hyperparameter search, and ablation studies." },
        { step: "04", title: "Productionize", desc: "Model optimization (quantization, distillation), containerization, and inference API setup." },
        { step: "05", title: "Monitor", desc: "Data drift detection, performance monitoring, and automated retraining triggers." },
      ]}
      caseStudy={{
        client: "LogiStream Inc.",
        industry: "Logistics & Supply Chain",
        challenge: "LogiStream was over-ordering by 23% each quarter due to relying on Excel-based demand forecasting. Excess inventory was costing $2.1M annually in storage and write-offs.",
        result: "We built a gradient boosting + LSTM ensemble model trained on 4 years of their sales, weather, and events data. Forecast accuracy improved from 61% to 94%, eliminating the inventory waste.",
        metric: "94%",
      }}
    />
  );
}
