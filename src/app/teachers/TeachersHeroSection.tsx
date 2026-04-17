// Teachers Page - Hero Section
import React from "react";

const TeachersHeroSection = () => (
  <header className="max-w-7xl mx-auto px-8 mb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
    <div className="lg:col-span-7">
      <span className="uppercase tracking-[0.2em] text-secondary font-bold text-xs mb-6 block">
        The Guardians of Knowledge
      </span>
      <h1 className="text-6xl lg:text-8xl font-headline font-extrabold tracking-tighter text-primary leading-none mb-8">
        Guided by the <span className="text-secondary italic">Wisdom</span> of the Ages.
      </h1>
      <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed">
        Our educators are more than instructors; they are mentors dedicated to the spiritual and intellectual growth of every student, bridging traditional scholarship with modern pedagogy.
      </p>
    </div>
    <div className="lg:col-span-5 relative isolate">
      <div className="aspect-square bg-primary rounded-xl overflow-hidden shadow-2xl z-0">
        <div className="absolute inset-0 sacred-pattern opacity-20 z-0"></div>
        <div className="absolute inset-0 bg-linear-to-tr from-primary via-transparent to-secondary/30 z-0"></div>
        <div className="absolute inset-0 flex items-center justify-center p-12 z-0">
          <div className="w-full h-full border border-secondary/20 rounded-full flex items-center justify-center">
            <div className="w-2/3 h-2/3 border border-secondary/40 rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-secondary text-8xl" style={{ fontVariationSettings: "'FILL' 1" }}>auto_stories</span>
            </div>
          </div>
        </div>
      </div>
      
    
      <div className="absolute -bottom-8 -left-8 bg-background p-8 rounded-xl shadow-xl max-w-[240px] z-[9999]">
        <p className="font-headline font-bold text-black italic">
          "Knowledge is a light which Allah casts into the heart of whomsoever He wills."
        </p>
      </div>
    </div>
  </header>
);

export default TeachersHeroSection;
