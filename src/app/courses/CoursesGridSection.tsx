import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BookOpen,
  BrainCircuit,
  Heart,
  Languages,
  Mic,
  Scroll,
  Search,
  Sparkles,
} from "lucide-react";

const courses = [
  {
    level: "BEGINNER",
    icon: BookOpen,
    image: "/assets/courses/Basic Qaida Reading with Tajweed.png",
    imageAlt: "Open Quran with elegant Arabic calligraphy",
    modules: "8 Modules",
    title: "Basic Qaida Reading with Tajweed",
    description:
      "Embark on your sacred journey with foundational Qaida rules and Tajweed principles. Build confidence in Quranic recitation through guided, step-by-step learning.",
    duration: "3 Months",
    badge: "Beginner",
  },
  {
    level: "INTERMEDIATE",
    icon: Mic,
    image: "/assets/courses/Shia Quran with Tajweed Course Online.png",
    imageAlt: "Calligraphy and recitation imagery",
    modules: "16 Modules",
    title: "Shia Quran with Tajweed Course Online",
    description:
      "Master Tajweed rules in the Shia tradition with expert online mentorship. Perfect your recitation and deepen your connection to the Divine words.",
    duration: "6 Months",
    badge: "Intermediate",
  },
  {
    level: "ALL LEVELS",
    icon: BrainCircuit,
    image: "/assets/courses/Hifz Memorization Quran Online.png",
    imageAlt: "Peaceful memorization environment",
    modules: "Flexible Timeline",
    title: "Hifz Memorization Quran Online",
    description:
      "Preserve the sacred Quran in your heart through personalized memorization guidance. A flexible path tailored to your spiritual commitment and pace.",
    duration: "Custom",
    badge: "All Levels",
  },
  {
    level: "ALL LEVELS",
    icon: Languages,
    image: "/assets/courses/Quran with Translation.png",
    imageAlt: "Quran translation study setting",
    modules: "12 Modules",
    title: "Quran with Translation",
    description:
      "Explore the meanings of Quranic verses alongside recitation. Gain deeper spiritual insight and understanding through comprehensive translation studies.",
    duration: "5 Months",
    badge: "All Levels",
  },
  {
    level: "ADVANCED",
    icon: Search,
    image: "/assets/courses/Quran with Tafseer.png",
    imageAlt: "Study of Quranic commentary",
    modules: "20 Modules",
    title: "Quran with Tafseer",
    description:
      "Delve into the profound explanations and historical context of Quranic verses. A Shia-centered approach to unlocking sacred knowledge and wisdom.",
    duration: "9 Months",
    badge: "Advanced",
  },
  {
    level: "INTERMEDIATE",
    icon: Scroll,
    image: "/assets/courses/Nahjul Balagha.png",
    imageAlt: "Classical manuscript study",
    modules: "8 Modules",
    title: "Nahjul Balagha",
    description:
      "Study the eloquent sermons and letters of Imam Ali (a.s.). Strengthen your spiritual foundation with timeless wisdom and ethical teachings.",
    duration: "4 Months",
    badge: "Intermediate",
  },
  {
    level: "ALL LEVELS",
    icon: Sparkles,
    image: "/assets/courses/Duaa & Adhkar.png",
    imageAlt: "Duaa and quiet reflection",
    modules: "6 Modules",
    title: "Duaa & Adhkar",
    description:
      "Enrich your worship with powerful supplications and daily remembrances. Cultivate spiritual calm and deepen your connection to the Divine.",
    duration: "3 Months",
    badge: "All Levels",
  },
  {
    level: "ADVANCED",
    icon: Heart,
    image: "/assets/courses/Saheefa Sajjadia.png",
    imageAlt: "Sacred devotional text",
    modules: "10 Modules",
    title: "Saheefa Sajjadia",
    description:
      "Reflect on the profound supplications of Imam Zain al-Abidin (a.s.). Experience heartfelt devotion through guided study of sacred prayers.",
    duration: "5 Months",
    badge: "Advanced",
  },
];

export function CoursesGridSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">

      {/* 🔥 NEW: Section intro (fixes abrupt transition from hero) */}
      <div className="mb-16 text-center">
        <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-bold tracking-[0.2em] uppercase mb-4 text-xs">
          Explore Courses
        </span>

        <h2 className="text-4xl md:text-5xl font-extrabold text-accent font-headline mb-4">
          Structured Learning Paths for Every Stage
        </h2>

        <p className="text-foreground/70 max-w-2xl mx-auto text-lg leading-relaxed">
          Choose from carefully designed Quranic courses that guide you from
          foundational recitation to deep spiritual understanding.
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {courses.map((course) => {
          const Icon = course.icon;

          return (
            <article
  key={course.title}
  className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
>
  {/* Image */}
  <div className="relative aspect-video overflow-hidden">
    <Image
      src={course.image}
      alt={course.imageAlt}
      fill
      className="object-cover transition-transform duration-700 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-linear-to-t from-primary/65 via-primary/20 to-transparent" />

    <div className="absolute left-6 top-6 rounded-full bg-white px-3 py-1 text-xs font-bold text-primary shadow-sm backdrop-blur">
      {course.badge}
    </div>

    <div className="absolute bottom-6 left-6 right-6">
      <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/80">
        {course.level}
      </p>
    </div>
  </div>

  {/* Content */}
  <div className="flex flex-col flex-1 p-6">
    <h3 className="font-headline text-2xl font-bold text-[#0a1d27] leading-tight">
      {course.title}
    </h3>

    <div className="mt-4 flex items-center gap-3 text-sm font-semibold text-foreground/65">
      <Icon className="h-5 w-5 text-[#9b7e46]" />
      <span>{course.modules}</span>
    </div>

    <p className="mt-4 leading-7 text-foreground/70 flex-1">
      {course.description}
    </p>

    {/* Bottom section FIXED */}
    <div className="mt-6 flex items-center justify-between border-t border-border pt-6">
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-foreground/50">
          Duration
        </p>
        <p className="mt-1 font-headline text-lg font-bold text-primary">
          {course.duration}
        </p>
      </div>

      <Link
        href="/enroll"
        className="inline-flex items-center gap-2 rounded-full border border-[#9b7e46] px-5 py-3 text-sm font-bold text-[#9b7e46] bg-transparent transition-all hover:bg-[#9b7e46] hover:text-white"
      >
        Enroll Now
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  </div>
</article>
          );
        })}
      </div>
    </section>
  );
}