import { HeroSection } from "@/components/sections/HeroSection";
import { OrbitalSection } from "@/components/sections/OrbitalSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { ServicesPreviewSection } from "@/components/sections/ServicesPreviewSection";
import { WhyLucenEdge } from "@/components/sections/WhyLucenEdge";
import { IndustriesMarquee } from "@/components/sections/IndustriesMarquee";
import { TransformationCTA } from "@/components/sections/TransformationCTA";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export default function HomePage() {
  return (
    <>
      {/* 1. Full-screen cinematic hero with 3D network */}
      <HeroSection />

      {/* 2. Animated stats counter */}
      <StatsSection />

      {/* 3. 3D Orbital model - the signature LucenEdge element */}
      <OrbitalSection />

      {/* 4. Services preview with hover cards */}
      <ServicesPreviewSection />

      {/* 5. Industries we serve - horizontal marquee */}
      <IndustriesMarquee />

      {/* 6. Why LucenEdge - differentiator cards */}
      <WhyLucenEdge />

      {/* 7. Testimonials */}
      <TestimonialsSection />

      {/* 8. Final transformation CTA */}
      <TransformationCTA />
    </>
  );
}
