import { ServicePageLayout } from "@/components/layout/ServicePageLayout";
import { Smartphone, Apple, Bot, Target, Globe, ShoppingCart, FileText, Palette } from "lucide-react";

export const metadata = {
  title: "Web & Mobile App Development — LucenEdge",
  description: "iOS, Android, PWA, E-Commerce and UI/UX — beautiful apps users open every day.",
};

export default function WebMobilePage() {
  return (
    <ServicePageLayout
      serviceId="web-mobile"
      name="Web & Mobile Apps"
      icon={<Smartphone size={28} color="#7B2FFF" strokeWidth={1.5} />}
      color="#7B2FFF"
      colorRgb="123, 47, 255"
      tagline={`Apps users open.\nEvery single day.`}
      description="We craft digital experiences that users love, from pixel-perfect interfaces to blazing-fast backends. Whether it's a consumer app, enterprise platform, or e-commerce store — we build it to convert, retain, and delight."
      stats={[
        { value: "180+", label: "Apps launched" },
        { value: "4.8", label: "Avg App Store rating" },
        { value: "2.8s", label: "Avg load time" },
      ]}
      microServices={[
        { name: "iOS Development", icon: <Apple size={22} color="#7B2FFF" strokeWidth={1.5} />, description: "Native Swift apps optimized for Apple's ecosystem — iPhone, iPad, and Apple Watch with App Store expertise." },
        { name: "Android Development", icon: <Bot size={22} color="#7B2FFF" strokeWidth={1.5} />, description: "Kotlin-first Android apps that perform across the full fragmented device landscape." },
        { name: "React Native", icon: <Smartphone size={22} color="#7B2FFF" strokeWidth={1.5} />, description: "Single codebase, native performance — deploy to iOS and Android simultaneously with 95% code reuse." },
        { name: "Flutter", icon: <Target size={22} color="#7B2FFF" strokeWidth={1.5} />, description: "Google's UI toolkit for beautiful, natively compiled multi-platform apps from a single codebase." },
        { name: "Progressive Web Apps", icon: <Globe size={22} color="#7B2FFF" strokeWidth={1.5} />, description: "App-like experiences in the browser — offline support, push notifications, and home screen installation." },
        { name: "E-Commerce", icon: <ShoppingCart size={22} color="#7B2FFF" strokeWidth={1.5} />, description: "High-converting storefronts on Shopify, custom platforms, or headless commerce with any backend." },
        { name: "CMS Development", icon: <FileText size={22} color="#7B2FFF" strokeWidth={1.5} />, description: "Headless CMS integrations (Sanity, Contentful, Strapi) that give your team control without code." },
        { name: "UI/UX Design", icon: <Palette size={22} color="#7B2FFF" strokeWidth={1.5} />, description: "Research-driven design systems, interactive prototypes, and user testing that de-risks every build." },
      ]}
      processSteps={[
        { step: "01", title: "Research", desc: "User research, competitor analysis, and UX audit to inform every design decision." },
        { step: "02", title: "Prototype", desc: "Interactive Figma prototypes tested with real users before development starts." },
        { step: "03", title: "Develop", desc: "Component-driven development with weekly builds delivered for client review." },
        { step: "04", title: "Test", desc: "Device testing, accessibility audits, performance benchmarking, and beta programs." },
        { step: "05", title: "Launch", desc: "App Store / Play Store submission, analytics setup, and post-launch support." },
      ]}
      caseStudy={{
        client: "RetailEdge",
        industry: "E-Commerce",
        challenge: "RetailEdge's existing mobile app had a 67% cart abandonment rate and a 2.1-star App Store rating. They needed a complete rebuild that would actually convert.",
        result: "We rebuilt the app in React Native in 10 weeks. The new app hit 4.8 stars within 60 days, reduced cart abandonment to 28%, and drove a 3.2× increase in mobile revenue in the first quarter.",
        metric: "3.2×",
      }}
    />
  );
}
