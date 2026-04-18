export function HeroSection() {
  return (
    <section
      className="relative min-h-[620px] sm:min-h-[700px] flex items-center overflow-hidden bg-gradient-to-br from-primary via-primary/80 to-accent/10"
      aria-label="Hero"
    >
      {/* Sacred SVG pattern as background overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 0l2.5 7.5L40 10l-7.5 2.5L30 20l-2.5-7.5L20 10l7.5-2.5L30 0zm0 40l2.5 7.5L40 50l-7.5 2.5L30 60l-2.5-7.5L20 50l7.5-2.5L30 40zM10 20l2.5 7.5L20 30l-7.5 2.5L10 40l-2.5-7.5L0 30l7.5-2.5L10 20zm40 0l2.5 7.5L60 30l-7.5 2.5L50 40l-2.5-7.5L40 30l7.5-2.5L50 20z\' fill=\'%23A17812\' fill-opacity=\'0.05\' fill-rule=\'evenodd\'/%3E%3C/svg%3E')",
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid md:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center py-16 sm:py-24 relative z-10">
        {/* Left: Headline, subheadline, actions */}
        <div className="text-left">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent font-bold tracking-[0.2em] uppercase mb-6 font-label text-xs">
            Spiritual Excellence
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-primary-foreground font-headline leading-[1.1] tracking-tight mb-8">
            Learn Quran with <span className="text-accent">Expert Guidance</span> from Home
          </h1>
          <p className="text-xl text-primary font-body leading-relaxed mb-12 max-w-lg">
            A modern sanctuary for spiritual growth. Connect with qualified scholars and master the Quran through tailored online sessions designed for your lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/courses"
              className="bg-accent text-accent-foreground px-10 py-5 rounded-xl font-headline font-extrabold text-lg hover:bg-accent/80 transition-all shadow-xl shadow-primary/20 text-center"
            >
              Start Learning
            </a>
            <a
              href="/courses"
              className="border border-primary/30 text-primary-foreground px-10 py-5 rounded-xl font-headline font-bold text-lg hover:bg-white/5 transition-all text-center"
            >
              Explore Courses
            </a>
          </div>
        </div>
        {/* Right: Quote card */}
        <div className="relative hidden md:flex justify-center items-center">
          <div className="w-[420px] h-[420px] bg-gradient-to-tr from-accent/20 to-transparent rounded-full absolute blur-3xl" />
          <div className="relative w-full aspect-square bg-primary rounded-xl overflow-hidden flex items-center justify-center border border-white/5">
            <div className="p-12 text-center relative z-10">
              <div className="flex justify-center mb-6">
                <svg width="80" height="80" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-accent mx-auto">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M6.05 17.95l-1.414 1.414m12.728 0l-1.414-1.414M6.05 6.05L4.636 4.636" />
                </svg>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/10">
                <p className="text-2xl font-headline italic text-primary-foreground leading-relaxed">
                  "Read, and your Lord is the Most Generous."
                </p>
                <p className="mt-4 text-accent font-bold tracking-widest uppercase text-sm">Al-Alaq 96:3</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
