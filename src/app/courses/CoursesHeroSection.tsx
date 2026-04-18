import { BookOpen, Sparkles, Target } from "lucide-react";
import Image from "next/image";

const filters = ["All Levels", "Beginner", "Intermediate", "Advanced"];

export function CoursesHeroSection() {
  return (
    <section className="relative overflow-hidden bg-background pt-28 pb-20">

      {/* 🔥 Background Image */}
      <Image
        src="/assets/courses/hero.jpg"
        alt="Intricate Islamic geometric pattern in warm tones"
        fill
        priority
        className="object-cover object-center opacity-50"
      />

      {/* 🔥 Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />

      {/* 🔥 Pattern overlay (kept theme) */}
      <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(var(--color-accent)_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* 🔥 Decorative blobs (same theme, softer) */}
      <div className="absolute -left-32 top-16 -z-10 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute -right-24 top-0 -z-10 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

      {/* 🔥 Content */}
      <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8">

        {/* LEFT CONTENT */}
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-accent">
            Our Curriculum
          </p>

          <h1 className="font-headline text-5xl font-extrabold tracking-tight text-primary sm:text-6xl lg:text-7xl">
            Illuminate Your <span className="text-accent">Spiritual</span> Path.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-foreground/70">
            Explore carefully structured Quranic courses designed to build fluency,
            deepen understanding, and support a steady learning journey with expert guidance.
          </p>

          {/* 🔥 STATS */}
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl border border-border bg-secondary/10 backdrop-blur-md p-5 shadow-sm">
              <BookOpen className="h-5 w-5 text-accent" />
              <p className="mt-4 text-sm font-semibold text-foreground/60">
                Structured modules
              </p>
              <p className="mt-1 font-headline text-2xl font-bold text-primary">
                24+
              </p>
            </div>

            <div className="rounded-3xl border border-border bg-secondary/10 backdrop-blur-md p-5 shadow-sm">
              <Target className="h-5 w-5 text-accent" />
              <p className="mt-4 text-sm font-semibold text-foreground/60">
                Learning tracks
              </p>
              <p className="mt-1 font-headline text-2xl font-bold text-primary">
                3 Levels
              </p>
            </div>

            <div className="rounded-3xl border border-border bg-secondary/10 backdrop-blur-md p-5 shadow-sm">
              <Sparkles className="h-5 w-5 text-accent" />
              <p className="mt-4 text-sm font-semibold text-foreground/60">
                Flexible pacing
              </p>
              <p className="mt-1 font-headline text-2xl font-bold text-primary">
                Live support
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT FILTERS */}
        <div className="flex flex-wrap gap-3 lg:justify-end">
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

      </div>
    </section>
  );
}