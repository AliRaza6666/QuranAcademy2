import Image from "next/image";
import { GraduationCap } from "lucide-react";

export function EnrollCTASection() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
      <div className="relative overflow-hidden rounded-[2rem] bg-primary px-8 py-16 text-center shadow-2xl sm:px-10 sm:py-20 lg:px-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(161,120,18,0.22),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_26%)]" />
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/assets/contact/cta-light.jpg"
            alt="Ethereal spiritual light rays over a dark textured surface"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-2xl space-y-8">
          <h2 className="font-headline text-4xl font-bold tracking-tight text-white md:text-5xl">
            Join Our Global Community
          </h2>
          <p className="text-lg leading-8 text-white/75">
            Connect with fellow learners and scholars from around the world in our
            sacred digital sanctuary.
          </p>
          <div className="flex flex-col justify-center gap-4 pt-4 sm:flex-row">
            <button className="rounded-full bg-secondary px-8 py-4 font-headline text-lg font-bold text-secondary-foreground transition-colors hover:bg-secondary/90">
              <GraduationCap className="inline h-5 w-5 mr-2" />
              Start Learning
            </button>
            <button className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-4 font-headline text-lg font-bold text-white transition-colors hover:bg-white/10">
              Free Trial Class
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}