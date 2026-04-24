import Image from "next/image";
import React from "react";

export function CoursesHeroSection() {
  return (
    <section className="relative w-full min-h-svh overflow-hidden flex items-center bg-[var(--primary)]">

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/courses/courseshero.png"
          alt="Courses hero background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[60%_center] sm:object-center md:scale-105 opacity-90"
        />

        {/* Soft gradient overlay (better than harsh black) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)]/80 via-[var(--primary)]/40 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-10 sm:pt-32 md:pt-36">

        {/* Badge */}
        <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--accent)]/20 text-[var(--accent)] font-bold tracking-[0.2em] uppercase mb-6 text-xs backdrop-blur">
          Our Curriculum
        </span>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-8 max-w-3xl">
          Illuminate Your <span className="text-[var(--accent)]">Spiritual</span> Path.
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-xl leading-relaxed">
          Explore carefully structured Quranic courses designed to build fluency,
          deepen understanding, and support a steady learning journey with expert guidance.
        </p>

      </div>
    </section>
  );
}