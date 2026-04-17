import React from "react";
import { CircleDot, Compass, Globe2, Sparkle } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type TimelineStep = {
  year: string;
  title: string;
  description: string;
  icon: LucideIcon;
  highlighted?: boolean;
};

const timeline: TimelineStep[] = [
  {
    year: "2018",
    title: "The First Spark",
    description:
      "Inauguration of our digital platform with a small circle of dedicated students seeking authentic Quranic exegesis.",
    icon: Sparkle,
  },
  {
    year: "2020",
    title: "Expanding Horizons",
    description:
      "Launch of advanced Tajweed and Tafsir modules, bringing together scholars from across the globe into a unified virtual campus.",
    icon: Globe2,
  },
  {
    year: "2022",
    title: "Interactive Mastery",
    description:
      "Introduction of one-on-one mentorship programs and real-time recitation analysis tools using advanced audio feedback.",
    icon: Compass,
  },
  {
    year: "2024",
    title: "The Global Sanctuary",
    description:
      "Evolving into the premier destination for Shia Quranic education, serving over 50,000 students worldwide.",
    icon: CircleDot,
    highlighted: true,
  },
];

export function AboutJourneySection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-10 lg:px-8 lg:py-16">
      <div className="mb-12 text-center sm:mb-16 lg:mb-24">
        <h2 className="text-3xl font-extrabold tracking-tight text-primary sm:text-4xl lg:text-5xl">
          Journey of Learning
        </h2>
        <div className="mx-auto mt-4 h-1.5 w-20 rounded-full bg-secondary" />
      </div>

      <div className="relative">
        <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-outline/20 md:block" />
        <div className="space-y-10 sm:space-y-12 lg:space-y-16 ">
          {timeline.map((step, index) => {
            const Icon = step.icon;
            const isLeft = index % 2 === 0;
            return (
              <div key={step.year} className="relative flex flex-col md:flex-row md:items-center md:justify-between ">
                <div className={`w-full md:w-[45%] ${isLeft ? "md:pr-10" : "md:order-2 md:pl-10"} `}>
                  <article className={`relative overflow-hidden rounded-xl border p-6 sm:p-8 lg:p-10 ${step.highlighted ? "border-primary  text-primary-foreground bg-primary" : "border-secondary/10 bg-accent/20"}`}>
                    <div className={`absolute top-0 h-full w-1 ${isLeft ? "left-0" : "right-0"} bg-secondary`} />
                    <div className="relative z-10">
                      <span className={`mb-4 inline-flex rounded-full px-3 py-1 text-xs font-bold tracking-[0.2em] ${step.highlighted ? "bg-secondary/20 text-secondary-fixed" : "bg-secondary/10 text-secondary"}`}>
                        {step.year}
                      </span>
                      <h3 className={`mb-4 text-2xl font-bold tracking-tight sm:text-3xl ${step.highlighted ? "text-primary-foreground" : "text-primary"}`}>
                        {step.title}
                      </h3>
                      <p className={`max-w-2xl text-sm leading-7 sm:text-base ${step.highlighted ? "text-primary-foreground/75" : "text-muted-foreground"}`}>
                        {step.description}
                      </p>
                    </div>
                  </article>
                </div>

                <div className="my-6 flex justify-center md:my-0 md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-secondary bg-background text-secondary shadow-sm">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </div>
                </div>

                <div className={`hidden md:block md:w-[45%] ${isLeft ? "" : "md:order-1"}`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
