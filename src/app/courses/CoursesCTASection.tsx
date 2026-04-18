import { ArrowRight, CalendarDays } from "lucide-react";

export function CoursesCTASection() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-18 lg:px-8">
      <div className="relative overflow-hidden rounded-[2rem] bg-primary px-6 py-18 text-center shadow-2xl sm:px-10 sm:py-12 lg:px-16 lg:py-15">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(161,120,18,0.28),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_28%)]" />
        <div className="absolute inset-0 bg-linear-to-br from-white/5 via-transparent to-accent/10" />

        <div className="relative z-10 mx-auto max-w-3xl">
          
          <h2 className="font-headline text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Ready to Begin Your Journey?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/75 sm:text-base lg:text-lg">
            Join our community of students learning with guidance, structure, and
            personal support from the comfort of home.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
            <button className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-6 py-3.5 text-sm font-bold text-secondary-foreground transition-transform hover:scale-[1.02] active:scale-95 sm:px-8 sm:py-4 sm:text-base lg:px-10 lg:py-5 lg:text-lg">
              Schedule Free Trial
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
            <button className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10 sm:px-8 sm:py-4 sm:text-base lg:px-10 lg:py-5 lg:text-lg">
              View All Programs
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}