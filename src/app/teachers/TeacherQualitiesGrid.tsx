// Teachers Page - Teacher Qualities Grid Section
import React from "react";
import { BadgeCheck, Languages, Mic, Monitor, HeartHandshake } from "lucide-react";

const TeacherQualitiesGrid = () => (
  <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-6 gap-6 h-auto lg:h-175">
      {/* Card 1: Large Featured - Certified Islamic Scholars */}
      <div className="md:col-span-3 md:row-span-2 bg-primary rounded-xl p-6 sm:p-8 lg:p-12 flex flex-col justify-between text-primary-foreground relative overflow-hidden group min-h-80">
        <div className="absolute inset-0 sacred-pattern opacity-10 group-hover:opacity-20 transition-opacity"></div>
        <BadgeCheck className="h-11 w-11 sm:h-12 sm:w-12 text-secondary mb-6 sm:mb-8 relative z-10" aria-hidden="true" />
        <div className="relative z-10">
          <h3 className="text-2xl sm:text-3xl font-headline font-bold mb-3 sm:mb-4 text-primary-foreground">
            Certified Islamic Scholars
          </h3>
          <p className="text-primary-foreground/80 text-base sm:text-lg max-w-sm">
            Every mentor holds verified credentials from prestigious Islamic seminaries, ensuring authentic transmission of knowledge.
          </p>
        </div>
      </div>

      {/* Card 2: Medium Vertical - Fluent in Tajweed */}
      <div className="md:col-span-3 bg-accent/10 rounded-xl p-6 sm:p-8 lg:p-10 flex flex-col justify-end group min-h-55">
        <div className="mb-auto">
          <Mic className="h-9 w-9 sm:h-10 sm:w-10 text-primary" aria-hidden="true" />
        </div>
        <h3 className="text-xl sm:text-2xl font-headline font-bold text-primary mb-2">
          Fluent in Tajweed
        </h3>
        <p className="text-muted-foreground">
          Mastery over the intricate rules of recitation, preserving the divine melody of the Holy Quran.
        </p>
      </div>

      {/* Card 3: Small Square - Multilingual Communication */}
      <div className="md:col-span-2 bg-secondary rounded-xl p-6 sm:p-8 lg:p-10 flex flex-col justify-between text-secondary-foreground min-h-50">
        <Languages className="h-9 w-9 sm:h-10 sm:w-10" aria-hidden="true" />
        <h3 className="text-lg sm:text-xl font-headline font-bold">
          Multilingual Communication
        </h3>
      </div>

      {/* Card 4: Horizontal Narrow - Patient & Student-Focused */}
      <div className="md:col-span-2 bg-accent/5 rounded-xl p-6 sm:p-8 lg:p-10 border-l-8 border-primary flex items-center gap-4 sm:gap-6 min-h-40">
        <HeartHandshake className="h-9 w-9 sm:h-10 sm:w-10 text-primary shrink-0" aria-hidden="true" />
        <div>
          <h3 className="text-base sm:text-lg font-headline font-bold text-primary">
            Patient &amp; Student-Focused
          </h3>
        </div>
      </div>

      {/* Card 5: Last Piece - Experienced in Online Teaching */}
      <div className="md:col-span-2 bg-accent/10 rounded-xl p-6 sm:p-8 lg:p-10 flex flex-col justify-center gap-3 sm:gap-4 min-h-50">
        <Monitor className="h-9 w-9 sm:h-10 sm:w-10 text-primary" aria-hidden="true" />
        <h3 className="text-lg sm:text-xl font-headline font-bold text-primary">
          Experienced in Online Teaching
        </h3>
        <p className="text-sm text-muted-foreground">
          Expertise in leveraging digital tools for an immersive classroom experience.
        </p>
      </div>
    </div>
  </section>
);

export default TeacherQualitiesGrid;
