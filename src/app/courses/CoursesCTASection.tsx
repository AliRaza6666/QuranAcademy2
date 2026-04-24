import { ArrowRight } from "lucide-react";

export function CoursesCTASection() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">

      {/* CTA Card */}
      <div className="relative overflow-hidden rounded-[2rem] bg-accent/20 px-6 py-20 text-center shadow-xl sm:px-10 lg:px-16">

        {/* Soft golden glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(227,196,134,0.25),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(155,126,70,0.15),transparent_40%)]" />

        {/* Light overlay for elegance (not dark anymore) */}
        <div className="absolute inset-0 bg-white/30" />

        <div className="relative z-10 mx-auto max-w-3xl">

          {/* Badge */}
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/40 text-[#9b7e46] font-bold tracking-[0.2em] uppercase mb-6 text-xs backdrop-blur">
            Begin Your Journey
          </span>

          {/* Heading */}
          <h2 className="font-headline text-3xl font-extrabold tracking-tight text-[#0a1d27] sm:text-4xl lg:text-5xl">
            Ready to Start Your Quran Learning Path?
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#0a1d27]/70 sm:text-base lg:text-lg">
            Join structured courses designed to guide you from basics to deep understanding,
            with expert support every step of the way.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

            {/* Primary */}
            <button className="inline-flex items-center justify-center gap-2 rounded-full bg-[#9b7e46] px-8 py-4 text-sm font-bold text-white transition-all hover:scale-[1.03] active:scale-95 sm:text-base lg:px-10 lg:py-5 lg:text-lg shadow-lg shadow-[#9b7e46]/20">
              Schedule Free Trial
              <ArrowRight className="h-4 w-4" />
            </button>

            {/* Secondary */}
            <button className="inline-flex items-center justify-center rounded-full border border-[#9b7e46]/40 bg-white/30 px-8 py-4 text-sm font-bold text-[#0a1d27] transition-colors hover:bg-white/50 sm:text-base lg:px-10 lg:py-5 lg:text-lg backdrop-blur">
              View All Courses
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}