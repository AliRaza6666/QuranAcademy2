import React from "react";
import {
  BookOpenText,
  Lightbulb,
  ShieldCheck,
  Users,
  Verified,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type ValueCard = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const values: ValueCard[] = [
  {
    title: "Purity",
    description:
      "Preserving the unadulterated message of the Holy Quran through rigorous scholarship.",
    icon: ShieldCheck,
  },
  {
    title: "Integrity",
    description:
      "Adherence to the ethical principles taught by the Ahlul Bayt (a.s).",
    icon: BookOpenText,
  },
  {
    title: "Inclusivity",
    description:
      "Creating a welcoming sanctuary for all seekers of divine knowledge.",
    icon: Users,
  },
];

function ValueIcon({ icon: Icon }: { icon: LucideIcon }) {
  return <Icon className="h-6 w-6" aria-hidden="true" />;
}

export function AboutMissionVisionSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-[var(--background)]">

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">

        {/* Mission */}
        <article className="relative overflow-hidden rounded-2xl bg-[var(--surface)] border border-[var(--border)] p-6 shadow-sm lg:col-span-7 lg:p-12">

          {/* soft gold glow */}
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[var(--accent)]/10 blur-3xl" />

          <div className="relative z-10">

            <div className="mb-5 inline-flex rounded-full bg-[var(--accent)]/10 p-3 text-[var(--accent)]">
              <BookOpenText className="h-6 w-6" />
            </div>

            <h2 className="mb-5 text-2xl font-bold text-[var(--primary)] sm:text-3xl lg:text-4xl">
              Our Divine Mission
            </h2>

            <p className="mb-8 max-w-3xl text-sm leading-7 text-[var(--foreground)]/70 sm:text-base lg:text-lg">
              To provide an authentic, high-quality educational environment that
              bridges traditional spirituality and modern accessibility.
            </p>

            <div className="flex flex-wrap gap-3">

              <div className="inline-flex items-center gap-2 rounded-full bg-[var(--muted)] px-4 py-2 text-sm font-semibold text-[var(--primary)]">
                <Verified className="h-4 w-4 text-[var(--accent)]" />
                Authentic Sources
              </div>

              <div className="inline-flex items-center gap-2 rounded-full bg-[var(--muted)] px-4 py-2 text-sm font-semibold text-[var(--primary)]">
                <Users className="h-4 w-4 text-[var(--accent)]" />
                Expert Guidance
              </div>

            </div>
          </div>
        </article>

        {/* Vision */}
        <aside className="relative overflow-hidden rounded-2xl bg-[var(--primary)] p-6 text-white sm:p-8 lg:col-span-5 lg:p-12">

          <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/20 to-transparent" />

          <div className="relative z-10 flex h-full flex-col justify-between">

            <div>

              <div className="mb-5 inline-flex rounded-full bg-white/10 p-3 text-[var(--accent)]">
                <Lightbulb className="h-6 w-6" />
              </div>

              <h2 className="mb-4 text-2xl font-bold sm:text-3xl text-[var(--accent)]">
                The Vision
              </h2>

              <p className="max-w-md text-sm leading-7 text-white/80 sm:text-base lg:text-lg">
                Illuminating every heart with the light of the Quran, fostering a
                global community rooted in wisdom, justice, and compassion.
              </p>

            </div>

            <div className="mt-10">
              <div className="h-1 w-24 rounded-full bg-[var(--accent)]" />
            </div>

          </div>
        </aside>

        {/* Values */}
        <div className="lg:col-span-12 grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8 pt-2">

          {values.map((value) => (
            <article
              key={value.title}
              className="rounded-2xl bg-[var(--surface)] border border-[var(--border)] p-6 text-center shadow-sm transition hover:shadow-md sm:p-8"
            >

              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--accent)]/10 text-[var(--accent)]">
                <ValueIcon icon={value.icon} />
              </div>

              <h3 className="mb-3 text-lg font-bold text-[var(--primary)] sm:text-xl">
                {value.title}
              </h3>

              <p className="text-sm leading-7 text-[var(--foreground)]/70">
                {value.description}
              </p>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}