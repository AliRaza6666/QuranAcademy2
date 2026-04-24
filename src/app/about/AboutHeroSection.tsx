import Image from "next/image";

export function AboutHeroSection() {
  return (
    <section className="relative w-full min-h-svh flex items-center overflow-hidden bg-[var(--primary)]">

      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/assets/about/abouthero.png"
          alt="About hero background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[58%_center] sm:object-center md:scale-105 opacity-90"
        />

        {/* Premium gradient overlay (instead of flat black) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)]/85 via-[var(--primary)]/45 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-10 sm:pt-32">

        {/* Badge */}
        <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--accent)]/40 text-white font-bold tracking-[0.2em] uppercase mb-6 text-xs w-fit backdrop-blur">
          Established in Faith
        </span>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-8 max-w-3xl">
          The Sacred <span className="text-[var(--accent)]">Sanctuary</span> of Knowledge
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-xl leading-relaxed">
          A digital lighthouse dedicated to preserving the purity of Quranic wisdom
          through authentic scholarship and timeless guidance.
        </p>

      </div>

    </section>
  );
}