
export function FeaturesSection() {
  return (
    <section className="py-32 px-8 max-w-7xl mx-auto">
      <div className="text-center mb-24">
        <h2 className="text-4xl md:text-5xl font-extrabold font-headline text-primary mb-6">
          Why Choose Our Sanctuary?
        </h2>
        <div className="h-1.5 w-24 bg-accent mx-auto rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
        {/* Certified Teachers */}
        <div className="md:col-span-8 bg-accent/20 rounded-3xl p-12 flex flex-col justify-between shadow-sm">
          <div>
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M6.05 17.95l-1.414 1.414m12.728 0l-1.414-1.414M6.05 6.05L4.636 4.636" />
              </svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold font-headline text-primary mb-4">Certified Teachers</h3>
            <p className="text-surface-foreground text-lg leading-relaxed max-w-md">
              Our educators are meticulously selected from renowned Islamic universities, ensuring authentic knowledge and pedagogical excellence.
            </p>
          </div>
        </div>
        {/* One-on-One Classes */}
        <div className="md:col-span-4 bg-primary text-primary-foreground rounded-3xl p-10 flex flex-col shadow-sm">
          <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center mb-6">
            <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <circle cx="12" cy="12" r="10" strokeWidth="2" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 15l4-4 4 4" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold font-headline mb-4">One-on-One Classes</h3>
          <p className="text-primary-foreground text-base leading-relaxed">
            Personalized attention that adapts to your pace, ensuring every verse is mastered with perfection.
          </p>
          <div className="mt-auto pt-10">
            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
              <div className="w-3/4 h-full bg-accent"></div>
            </div>
            <p className="text-xs mt-3 uppercase tracking-widest text-accent font-bold">Progress Focus</p>
          </div>
        </div>
        {/* Flexible Schedule */}
        <div className="md:col-span-4 bg-accent/10 rounded-3xl p-10 flex flex-col justify-center text-center shadow-sm">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <circle cx="12" cy="12" r="10" strokeWidth="2" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold font-headline text-primary mb-3">Flexible Schedule</h3>
          <p className="text-surface-foreground">Classes that fit your time zone, 24/7 access to wisdom.</p>
        </div>
        {/* Global Students */}
        <div className="md:col-span-8 bg-accent/20 rounded-3xl p-10 flex items-center gap-12 shadow-sm">
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-bold font-headline text-primary mb-4">Global Students</h3>
            <p className="text-surface-foreground text-lg">
              Join a community of 5,000+ learners from over 30 countries sharing the spiritual journey.
            </p>
          </div>
          <div className="hidden lg:block w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center">
            <svg className="w-10 h-10 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <circle cx="12" cy="12" r="10" strokeWidth="2" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 12h20" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
