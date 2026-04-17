import React from "react";
import { ArrowRight, Mail } from "lucide-react";

export function AboutCTASection() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8 lg:pb-32">
      <div className="relative overflow-hidden rounded-xl bg-secondary/90 px-6 py-10 text-center shadow-2xl sm:px-10 sm:py-14 lg:px-16 lg:py-16">
        <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-transparent" />
        <div className="relative z-10 mx-auto max-w-3xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-secondary-foreground sm:text-4xl lg:text-5xl">
            Begin Your Own Journey
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-secondary-foreground/80 sm:text-base lg:text-lg">
            Join a community dedicated to spiritual growth and academic excellence.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
            <button className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-95 sm:px-8 sm:py-4 sm:text-base lg:px-10 lg:py-5 lg:text-lg">
              Enroll in a Course
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
            <button className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/20 bg-background px-6 py-3.5 text-sm font-bold text-primary transition-colors hover:bg-background/90 sm:px-8 sm:py-4 sm:text-base lg:px-10 lg:py-5 lg:text-lg">
              <Mail className="h-4 w-4" aria-hidden="true" />
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
