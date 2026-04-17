
export function CTASection() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-32 bg-primar">
      <div className="bg-primary rounded-3xl overflow-hidden relative">
        {/* Sacred pattern overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 0l2.5 7.5L40 10l-7.5 2.5L30 20l-2.5-7.5L20 10l7.5-2.5L30 0zm0 40l2.5 7.5L40 50l-7.5 2.5L30 60l-2.5-7.5L20 50l7.5-2.5L30 40zM10 20l2.5 7.5L20 30l-7.5 2.5L10 40l-2.5-7.5L0 30l7.5-2.5L10 20zm40 0l2.5 7.5L60 30l-7.5 2.5L50 40l-2.5-7.5L40 30l7.5-2.5L50 20z\' fill=\'%23A17812\' fill-opacity=\'0.05\' fill-rule=\'evenodd\'/%3E%3C/svg%3E')",
          }}
        />
        <div className="relative z-10 p-16 md:p-24 text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold font-headline text-primary-foreground mb-8 max-w-3xl mx-auto">
            Ready to Begin Your Sacred Journey?
          </h2>
          <p className="text-primary-foreground/80 text-xl mb-12 max-w-xl mx-auto">
            Join hundreds of students currently exploring the depths of the Quran. Your first trial lesson is completely free.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/contact"
              className="bg-accent text-accent-foreground px-12 py-5 rounded-xl font-headline font-extrabold text-xl hover:bg-accent/90 transition-all text-center"
            >
              Book Free Trial
            </a>
            <a
              href="/contact"
              className="bg-transparent border-2 border-primary-foreground text-primary-foreground px-12 py-5 rounded-xl font-headline font-bold text-xl hover:bg-primary/10 transition-all text-center"
            >
              Talk to Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
