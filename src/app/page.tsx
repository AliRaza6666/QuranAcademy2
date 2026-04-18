import type { Metadata } from "next";
import { HeroSection } from "./components/sections/HeroSection";
import { FeaturesSection } from "./components/sections/FeaturesSection";
import { TestimonialsSection } from "./components/sections/TestimonialsSection";
import { CTASection } from "./components/sections/CTASection";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Learn Quran online with expert Shia teachers through structured, flexible classes designed for all ages and levels.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
