import type { Metadata } from "next";
import { CoursesCTASection } from "./CoursesCTASection";
import { CoursesGridSection } from "./CoursesGridSection";
import { CoursesHeroSection } from "./CoursesHeroSection";

export const metadata: Metadata = {
  title: "Courses | Shia Quran Hub",
  description:
    "Explore the Quran learning tracks at Shia Quran Hub, from beginner reading to advanced study.",
};

export default function CoursesPage() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <CoursesHeroSection />
      <CoursesGridSection />
      <CoursesCTASection />
    </main>
  );
}