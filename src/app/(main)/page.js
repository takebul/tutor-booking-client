import Hero from "@/components/Hero";
import OurAllFeature from "@/components/OurAllFeature";
import Stats from "@/components/Stats";
import TutorsFeatures from "@/components/TutorsFeatures/TutorsFeatures";
import ModernSolutions from "@/components/ModernSolution";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <TutorsFeatures />
      <OurAllFeature />
      <ModernSolutions />
    </>
  );
}
