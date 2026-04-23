import { BookOpen, Sparkles, Target } from "lucide-react";
import Image from "next/image";
import React from "react";

const filters = ["All Levels", "Beginner", "Intermediate", "Advanced"];

export function CoursesHeroSection() {
  return (
    <section
      className="relative top-0 w-full min-h-[60vh] md:min-h-screen overflow-hidden"
      aria-label="Hero"
    >
      {/* Background image wrapper */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/assets/courses/courseshero.png"
          alt="Courses hero background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* High-contrast gradient overlay to ensure white text remains readable */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a1d27]/90 to-transparent -z-10" />

      {/* Content (no negative z-index so it sits above image/overlay) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-center min-h-screen pb-16 sm:pb-24 pt-24 md:pt-32">
        <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent font-bold tracking-[0.2em] uppercase mb-6 font-label text-xs w-fit">
          Our Curriculum
        </span>

        <h1 className="text-5xl md:text-7xl font-extrabold text-white font-headline leading-[1.1] tracking-tight mb-8 max-w-3xl">
          Illuminate Your <span className="text-[#9b7e46]">Spiritual</span> Path.
        </h1>

        <p className="text-xl text-white/90 font-body leading-relaxed mb-12 max-w-xl">
          Explore carefully structured Quranic courses designed to build fluency, deepen understanding, and support a steady learning journey with expert guidance.
        </p>
      </div>

      {/* RIGHT FILTERS (keep on top) */}
      <div className="flex flex-wrap gap-3 lg:justify-end absolute bottom-10 right-10 z-10">
        {filters.map((filter, index) => (
          <button
            key={filter}
            type="button"
            className={`rounded-full px-6 py-3 text-sm font-bold transition-all backdrop-blur-md ${
              index === 0
                ? "bg-primary text-white shadow-lg shadow-primary/20"
                : "bg-white/10 text-foreground/80 hover:bg-white/20"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
    </section>
  );
}
