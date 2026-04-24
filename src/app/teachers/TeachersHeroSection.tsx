import React from "react";
import Image from "next/image";

const TeachersHeroSection = () => (
  <section
    className="relative min-h-svh flex items-center overflow-hidden bg-[var(--primary)]"
    aria-label="Hero"
  >
    {/* Background Image */}
    <div className="absolute inset-0 w-full h-full">
      <Image
        src="/assets/teacherpagehero.png"
        alt="Teachers hero"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[64%_center] sm:object-center md:scale-105 opacity-90"
      />

      {/* Gradient overlay (more premium than black) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)]/85 via-[var(--primary)]/50 to-black/40" />
    </div>

    {/* Content */}
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-center min-h-svh pt-28 pb-10 sm:pt-32">

      {/* Badge */}
      <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--accent)]/20 text-white font-bold tracking-[0.2em] uppercase mb-6 text-xs w-fit backdrop-blur">
        The Guardians of Knowledge
      </span>

      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-8 max-w-3xl">
        Guided by the <span className="text-[var(--accent)]">Wisdom</span> of the Ages.
      </h1>

      {/* Description */}
      <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed mb-12 max-w-xl">
        Our educators are more than instructors; they are mentors dedicated to
        the spiritual and intellectual growth of every student, bridging
        traditional scholarship with modern pedagogy.
      </p>

    </div>
  </section>
);

export default TeachersHeroSection;