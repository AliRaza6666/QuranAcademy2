import Image from "next/image";
import React from "react";

export function FeesHeroSection() {
  return (
    <section className="relative min-h-svh flex items-center overflow-hidden bg-[var(--primary)]">

      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/assets/feepagehero.png"
          alt="Fees page hero background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[62%_center] sm:object-center md:scale-105 opacity-90"
        />

        {/* Trust-focused gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)]/90 via-[var(--primary)]/55 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-center min-h-svh pt-28 pb-10 sm:pt-32">

        {/* Badge */}
        <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--accent)]/20 text-[var(--accent)] font-bold tracking-[0.2em] uppercase mb-6 text-xs w-fit backdrop-blur">
          Financial Transparency
        </span>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-8 max-w-3xl">
          Investment in <span className="text-[var(--accent)]">Sacred Knowledge</span>
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed mb-12 max-w-xl">
          We believe in sustainable excellence. Our fee structure is designed to
          honor educators while ensuring accessible Islamic education worldwide.
        </p>

        {/* Trust indicators (NEW — very important for fees page) */}
        <div className="flex flex-wrap gap-3">

          <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm">
            Transparent Pricing
          </div>

          <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm">
            No Hidden Charges
          </div>

          <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm">
            Flexible Plans
          </div>

        </div>

      </div>

    </section>
  );
}