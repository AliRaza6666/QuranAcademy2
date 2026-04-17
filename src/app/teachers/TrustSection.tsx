// Teachers Page - Trust Section
import React from "react";

const TrustSection = () => (
  <section className="w-full bg-muted/60 py-14 sm:py-18 lg:py-24 mb-14 sm:mb-18 lg:mb-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-8 sm:gap-10 lg:gap-12">
      <div className="md:w-1/2">
        <h2 className="text-3xl sm:text-4xl font-headline font-bold text-primary tracking-tight mb-3 sm:mb-4">
          Uncompromising Standards.
        </h2>
      </div>
      <div className="md:w-1/2">
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed border-l-4 border-secondary pl-5 sm:pl-8">
          Our teachers are carefully selected and trained to deliver the best learning experience, ensuring that every lesson resonates with clarity and spiritual depth.
        </p>
      </div>
    </div>
  </section>
);

export default TrustSection;
