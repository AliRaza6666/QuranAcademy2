import Image from "next/image";
import { BookOpen, BrainCircuit, Globe, GraduationCap, ArrowRight } from "lucide-react";

const courses = [
  {
    level: "BEGINNER",
    icon: BookOpen,
    image: "/assets/courses/quran-reading.jpg",
    imageAlt: "Open Quran with elegant Arabic calligraphy",
    modules: "24 Modules",
    title: "Quran Reading (Basic to Advanced)",
    description:
      "Master Arabic phonetics and progress to fluent recitation with a structured step-by-step path.",
    duration: "6 Months",
    badge: "Beginner",
  },
  {
    level: "INTERMEDIATE",
    icon: BrainCircuit,
    image: "/assets/courses/tajweed.jpg",
    imageAlt: "Golden geometric Islamic pattern",
    modules: "18 Modules",
    title: "Tajweed Course",
    description:
      "Perfect pronunciation through the rules of Tajweed so every letter is articulated correctly.",
    duration: "4 Months",
    badge: "Intermediate",
  },
  {
    level: "ALL LEVELS",
    icon: Globe,
    image: "/assets/courses/hifz.jpg",
    imageAlt: "Peaceful library interior representing memorization",
    modules: "Flexible Timeline",
    title: "Hifz Program",
    description:
      "A personalized memorization journey with expert tutors to help preserve the Divine words in your heart.",
    duration: "Custom",
    badge: "All Levels",
  },
  {
    level: "ADVANCED",
    icon: GraduationCap,
    image: "/assets/courses/quran-reading.jpg",
    imageAlt: "Warm light across a Quran page and study setting",
    modules: "32 Modules",
    title: "Tafsir Course",
    description:
      "Delve into meanings, historical context, and spiritual lessons of the Quranic verses through a Shia lens.",
    duration: "12 Months",
    badge: "Advanced",
  },
];

export function CoursesGridSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
      <div className="grid gap-8 md:grid-cols-2">
        {courses.map((course) => {
          const Icon = course.icon;

          return (
            <article
              key={course.title}
              className="group overflow-hidden rounded-[2rem] border border-border bg-surface shadow-sm transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-primary/65 via-primary/20 to-transparent" />
                <div className="absolute left-6 top-6 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-primary shadow-sm backdrop-blur">
                  {course.badge}
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/80">
                    {course.level}
                  </p>
                  <h3 className="mt-2 max-w-md font-headline text-2xl font-bold text-white">
                    {course.title}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 text-sm font-semibold text-foreground/65">
                  <Icon className="h-5 w-5 text-accent" />
                  <span>{course.modules}</span>
                </div>

                <p className="mt-4 leading-7 text-foreground/70">
                  {course.description}
                </p>

                <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-foreground/50">
                      Duration
                    </p>
                    <p className="mt-1 font-headline text-lg font-bold text-primary">
                      {course.duration}
                    </p>
                  </div>

                  <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-bold text-white transition-all hover:bg-primary"
                  >
                    Enroll Now
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}