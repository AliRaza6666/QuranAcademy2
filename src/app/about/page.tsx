import type { Metadata } from "next";
import { AboutCTASection } from "./AboutCTASection";
import { AboutHeroSection } from "./AboutHeroSection";
import { AboutJourneySection } from "./AboutJourneySection";
import { AboutMissionVisionSection } from "./AboutMissionVisionSection";

export const metadata: Metadata = {
  title: "About Us | Shia Quran Hub",
  description:
    "Learn about Shia Quran Hub, our mission, values, learning journey, and commitment to authentic Quranic education.",
};

export default function AboutPage() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <AboutHeroSection />
      <AboutMissionVisionSection />
      <AboutJourneySection />
      <AboutCTASection />
    </main>
  );
}
