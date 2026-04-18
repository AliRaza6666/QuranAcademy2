import React from "react";
import Image from "next/image";

export function AboutHeroSection() {
  return (
    <section className="relative isolate overflow-hidden  sm:py-12 lg:py-12">
      <Image
        src="/assets/about/hero.jpg"
        alt="Intricate Islamic geometric pattern in warm tones"
        fill
        priority
        className="absolute inset-0 object-cover object-center opacity-50"
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,rgba(115,92,0,0.05)_1px,transparent_0)] bg-size-[40px_40px] opacity-50" />
      <div className="absolute left-1/2 top-1/2 h-112 w-md sm:h-160 sm:w-160 -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/5 blur-3xl" />
      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        <span className="mb-6 inline-flex rounded-full bg-secondary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.28em] text-secondary">
          Established in Faith
        </span>
        <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tighter text-primary sm:text-6xl lg:text-8xl">
          The Sacred <span className="text-secondary">Sanctuary</span> of Knowledge
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg lg:text-xl">
          A digital lighthouse dedicated to preserving the purity of Quranic wisdom through the lens of Ahlul Bayt (a.s).
        </p>
      </div>
    </section>
  );
}
