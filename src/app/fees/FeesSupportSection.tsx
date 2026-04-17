import React from "react";
import { Clock3, MessageCircle, ExternalLink, CalendarClock } from "lucide-react";

export function FeesSupportSection() {
  return (
    <section className="mb-10 px-4 py-10 sm:px-6 sm:py-15 lg:px-8 lg:py-17">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
        <article className="space-y-5 rounded-xl border border-border bg-secondary/20 p-8 text-center sm:p-10 lg:p-12">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
            <MessageCircle className="h-7 w-7" aria-hidden="true" />
          </div>
          <h3 className="text-2xl font-bold text-primary">Need Assistance?</h3>
          <p className="text-muted-foreground">
            Our support team is ready to help you choose the right plan for your needs.
          </p>
          <a href="#" className="inline-flex items-center gap-2 font-bold text-primary hover:underline">
            Contact via WhatsApp
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </article>

        <article className="space-y-5 rounded-xl border border-border bg-secondary/20 p-8 text-center sm:p-10 lg:p-12">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-secondary/15 text-secondary">
            <Clock3 className="h-7 w-7" aria-hidden="true" />
          </div>
          <h3 className="text-2xl font-bold text-primary">Academy Hours</h3>
          <p className="text-muted-foreground">
            We provide 24/7 access to education, accommodating all global time zones with ease.
          </p>
          <div className="inline-block rounded-full border border-border bg-background px-4 py-2 font-bold text-primary">
            Global Availability
          </div>
        </article>

        <article className="group relative min-h-75 overflow-hidden rounded-xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(161,120,18,0.45),transparent_40%),linear-gradient(140deg,#0a3a28_0%,#0f5038_45%,#764f0d_100%)] transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-linear-to-t from-primary/90 to-transparent" />
          <div className="relative z-10 flex h-full flex-col justify-end p-8 sm:p-10">
            <CalendarClock className="mb-4 h-8 w-8 text-secondary" aria-hidden="true" />
            <h3 className="mb-4 text-2xl font-bold text-primary-foreground">Book a Trial</h3>
            <button className="rounded-full bg-secondary py-3 font-bold text-secondary-foreground transition-colors hover:bg-secondary/90">
              Schedule Consultation
            </button>
          </div>
        </article>
      </div>
    </section>
  );
}
