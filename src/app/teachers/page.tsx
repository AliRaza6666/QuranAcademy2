import React from "react";
import TeachersHeroSection from "./TeachersHeroSection";
import TrustSection from "./TrustSection";
import TeacherQualitiesGrid from "./TeacherQualitiesGrid";
import CTASection from "./CTASection";

const TeachersPage = () => {
  return (
    <main className="pt-12 pb-20">
      <TeachersHeroSection />
      <TrustSection />
      <TeacherQualitiesGrid />
      <CTASection />
    </main>
  );
};

export default TeachersPage;
