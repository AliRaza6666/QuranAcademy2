import React from "react";
import { BookOpenText, Globe2, Landmark, Lightbulb, ShieldCheck, Users, Verified } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type ValueCard = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const values: ValueCard[] = [
  {
    title: "Purity",
    description: "Preserving the unadulterated message of the Holy Quran through rigorous scholarship.",
    icon: ShieldCheck,
  },
  {
    title: "Integrity",
    description: "Adherence to the ethical principles taught by the Ahlul Bayt (a.s).",
    icon: Landmark,
  },
  {
    title: "Inclusivity",
    description: "Creating a welcoming sanctuary for all seekers of divine knowledge.",
    icon: Users,
  },
];

function ValueIcon({ icon: Icon }: { icon: LucideIcon }) {
  return <Icon className="h-7 w-7" aria-hidden="true" />;
}

export function AboutMissionVisionSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24 ">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
        <article className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-6 sm:p-8 lg:col-span-7 lg:p-12">
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-secondary/40 transition-transform duration-700 group-hover:scale-110" />
          <div className="relative z-10">
            <div className="mb-5 inline-flex rounded-full bg-white/10 p-3 text-[#9b7e46]">
              <BookOpenText className="h-6 w-6" aria-hidden="true" />
            </div>
            <h2 className="mb-5 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
              Our Divine Mission
            </h2>
            <p className="mb-8 max-w-3xl text-sm leading-7 text-white/80 sm:text-base lg:text-lg">
              To provide an authentic, high-quality educational environment that bridges the gap between traditional spirituality and modern accessibility. We focus on literal precision and spiritual depth.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-sm font-semibold text-white shadow-sm">
                <Verified className="h-4 w-4 text-[#9b7e46]" aria-hidden="true" />
                Authentic Sources
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-sm font-semibold text-white shadow-sm">
                <Users className="h-4 w-4 text-[#9b7e46]" aria-hidden="true" />
                Expert Guidance
              </div>
            </div>
          </div>
        </article>

        <aside className="relative overflow-hidden rounded-xl bg-[#9b7e46] p-6 text-white sm:p-8 lg:col-span-5 lg:p-12">
          <div className="absolute inset-0 bg-linear-to-br from-secondary/15 to-transparent" />
          <div className="relative z-10 flex h-full flex-col justify-between">
            <div>
              <div className="mb-5 inline-flex rounded-full bg-white/20 p-3 text-white">
                <Lightbulb className="h-6 w-6" aria-hidden="true" />
              </div>
              <h2 className="mb-4 text-2xl font-bold sm:text-3xl">The Vision</h2>
              <p className="max-w-md text-sm leading-7 text-white/90 sm:text-base lg:text-lg">
                Illuminating every heart with the light of the Quran, fostering a global community rooted in the values of wisdom, justice, and compassion.
              </p>
            </div>
            <div className="mt-10">
              <div className="h-1 w-24 rounded-full bg-secondary" />
            </div>
          </div>
        </aside>

        <div className="lg:col-span-12 grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8 pt-2">
          {values.map((value) => (
            <article key={value.title} className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-6 text-center shadow-sm sm:p-8">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-[#9b7e46]">
                <ValueIcon icon={value.icon} />
              </div>
              <h3 className="mb-3 text-lg font-bold text-white sm:text-xl">{value.title}</h3>
              <p className="text-sm leading-7 text-white/70">{value.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
