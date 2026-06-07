import VideoBackground from "@/components/landing/VideoBackground";
import GlassNavbar from "@/components/landing/GlassNavbar";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import StatsSection from "@/components/landing/StatsSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import CTASection from "@/components/landing/CTASection";
import LandingFooter from "@/components/landing/LandingFooter";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-background">
      <VideoBackground />
      <div className="relative z-10 flex flex-col min-h-screen">
        <GlassNavbar />
        <HeroSection />
      </div>
      <FeaturesSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
      <LandingFooter />
    </div>
  );
}
