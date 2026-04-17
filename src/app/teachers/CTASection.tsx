// Teachers Page - Call to Action Section
import React from "react";

const CTASection = () => (
  <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 sm:mt-28 lg:mt-40">
    <div className="bg-primary rounded-2xl p-6 sm:p-10 lg:p-16 text-center relative overflow-hidden">
      {/* Decorative blurred elements */}
      <div className="absolute -top-8 -right-8 w-40 h-40 sm:w-56 sm:h-56 lg:w-64 lg:h-64 bg-secondary/15 blur-[70px] sm:blur-[90px] lg:blur-[100px] rounded-full"></div>
      <div className="absolute -bottom-16 -left-10 w-56 h-56 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-accent/20 blur-[80px] sm:blur-[100px] lg:blur-[120px] rounded-full"></div>

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline font-extrabold text-primary-foreground mb-5 sm:mb-8 tracking-tighter leading-tight">
          Ready to meet your mentor?
        </h2>
        <p className="text-primary-foreground/80 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto mb-8 sm:mb-12">
          Join hundreds of students who have found their spiritual path through our dedicated faculty.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center">
          <button className="bg-secondary text-secondary-foreground px-6 sm:px-8 lg:px-10 py-3.5 sm:py-4 lg:py-5 rounded-full font-bold hover:opacity-90 transition-all text-base sm:text-lg w-full sm:w-auto">
            Browse All Courses
          </button>
          <button className="border border-primary-foreground/30 text-primary-foreground px-6 sm:px-8 lg:px-10 py-3.5 sm:py-4 lg:py-5 rounded-full font-bold hover:bg-white/10 transition-all text-base sm:text-lg w-full sm:w-auto">
            Contact Admissions
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default CTASection;
