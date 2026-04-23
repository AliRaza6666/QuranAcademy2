import type { Metadata } from "next";
import { EnrollCTASection } from "./EnrollCTASection";
import { EnrollMainSection } from "./EnrollMainSection";

export const metadata: Metadata = {
  title: "Enroll Now",
  description:
    "Begin your Quran learning journey with Shia Quran Hub. Enroll in personalized courses tailored to your spiritual growth.",
  alternates: {
    canonical: "/enroll",
  },
};

export default function EnrollPage() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden pt-18 md:pt-10">
      <EnrollMainSection />
      <EnrollCTASection />
    </main>
  );
}

