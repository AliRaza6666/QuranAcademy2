import React from "react";

export function FeesHeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" aria-label="Hero">
      {/* Full background Fees image */}
      <div
        className="absolute inset-0 w-full h-full -z-10 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/feepagehero.png')" }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/45" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-center min-h-screen pb-16 sm:pb-24 pt-24 md:pt-32">
        <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent font-bold tracking-[0.2em] uppercase mb-6 font-label text-xs w-fit">
          Financial Transparency
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white font-headline leading-[1.1] tracking-tight mb-8 max-w-3xl">
          Investment in <span className="text-accent">Sacred Knowledge</span>
        </h1>
        <p className="text-xl text-white/90 font-body leading-relaxed mb-12 max-w-xl">
          We believe in sustainable excellence. Our fee structure is designed to honor our dedicated educators while ensuring accessible, high-quality Islamic education for our community worldwide.
        </p>
      </div>
    </section>
  );
}
