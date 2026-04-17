import React from "react";

export function FeesHeroSection() {
  return (
    <section className="relative overflow-hidden bg-primary py-10 sm:py-14 lg:py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,rgba(233,195,73,0.08)_1px,transparent_0)] bg-size-[60px_60px] opacity-40" />
      <div className="absolute -right-10 -top-10 h-72 w-72 rounded-full bg-secondary/20 blur-3xl sm:h-96 sm:w-96" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="mb-5 inline-flex rounded-full bg-secondary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-secondary">
            Financial Transparency
          </span>
          <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tighter text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Investment in <span className="text-secondary">Sacred Knowledge</span>
          </h1>
          <p className="mb-8 max-w-2xl text-base leading-relaxed text-primary-foreground/75 sm:text-lg lg:text-xl">
            We believe in sustainable excellence. Our fee structure is designed to honor our dedicated educators while ensuring accessible, high-quality Islamic education for our community worldwide.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <button className="rounded-xl bg-secondary px-6 py-3.5 text-sm font-bold text-secondary-foreground transition-transform hover:scale-[1.02] sm:px-8 sm:py-4 sm:text-base lg:px-10 lg:text-lg">
              View Individual Packages
            </button>
            <button className="rounded-xl border border-primary-foreground/30 px-6 py-3.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary-foreground/10 sm:px-8 sm:py-4 sm:text-base lg:px-10 lg:text-lg">
              Special Family Offers
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
