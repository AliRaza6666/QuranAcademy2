// Teachers Page - Hero Section
import React from "react";

import Image from "next/image";

const TeachersHeroSection = () => (
  <section className="relative min-h-screen flex items-start overflow-hidden pt-20 md:pt-24" aria-label="Hero">
    {/* Full background Teachers image */}
    <div className="absolute inset-0 w-full h-full -z-10">
      <Image
src="/assets/teacherpagehero.png"
        alt="Teachers hero"
        fill
        className="object-cover"
        priority
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60" />
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-start min-h-screen pb-16 sm:pb-24">
      <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent font-bold tracking-[0.2em] uppercase mb-6 font-label text-xs w-fit">
        The Guardians of Knowledge
      </span>
      <h1 className="text-5xl md:text-7xl font-extrabold text-white font-headline leading-[1.1] tracking-tight mb-8 max-w-3xl">
        Guided by the <span className="text-accent italic">Wisdom</span> of the Ages.
      </h1>
      <p className="text-xl text-white/90 font-body leading-relaxed mb-12 max-w-xl">
        Our educators are more than instructors; they are mentors dedicated to the spiritual and intellectual growth of every student, bridging traditional scholarship with modern pedagogy.
      </p>
    </div>
  </section>
);

export default TeachersHeroSection;
