import type { Metadata } from "next";
import React from "react";
import TeachersHeroSection from "./TeachersHeroSection";
import TrustSection from "./TrustSection";
import TeacherQualitiesGrid from "./TeacherQualitiesGrid";
import CTASection from "./CTASection";

export const metadata: Metadata = {
  title: "Teachers",
  description:
    "Meet qualified teachers at Shia Quran Hub dedicated to accurate recitation, Tajweed, and spiritually grounded learning.",
  alternates: {
    canonical: "/teachers",
  },
};

const TeachersPage = () => {
  return (
    <main className="pb-20">
      <TeachersHeroSection />
      <TrustSection />
      <TeacherQualitiesGrid />
      <CTASection />
    </main>
  );
};

export default TeachersPage;
