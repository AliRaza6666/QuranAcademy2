"use client";

import React, { useState } from "react";
import { CalendarDays, Info } from "lucide-react";

type Props = {
  onSessionChange: (value: number) => void;
};

export function FeesPolicySection({ onSessionChange }: Props) {
  const [selected, setSelected] = useState<number>(30);

  const handleClick = (value: number) => {
    setSelected(value);   // for UI highlight
    onSessionChange(value);    // send to parent
  };

  return (
    <section className="bg-muted/60 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* LEFT */}
          <div className="space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-3 text-secondary">
              <Info className="h-5 w-5" aria-hidden="true" />
              <span className="text-sm font-semibold uppercase tracking-tight">
                Policy Overview
              </span>
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Structured for Continuity
            </h2>

            <div className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg sm:space-y-6">
              <p>
                Fees are processed monthly in advance. This ensures our scholars are committed to your journey.
              </p>

              <div className="flex items-start gap-3 rounded-xl border border-border bg-background p-5 shadow-sm">
                <CalendarDays className="mt-0.5 h-5 w-5 text-secondary" />
                <p className="text-sm text-foreground/80">
                  Billing occurs on the 1st of every month.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="rounded-xl bg-secondary/10 p-6 text-center sm:p-8 lg:p-12">
            <h3 className="mb-6 text-xl font-bold text-primary sm:text-2xl">
              Select Session Duration
            </h3>

            <div className="mx-auto flex w-full max-w-md rounded-full bg-muted p-1.5">

              {/* 30 MIN */}
              <button
                onClick={() => handleClick(30)}
                className={`flex-1 rounded-full px-3 py-3 text-sm sm:px-6 sm:py-4 sm:text-base transition
                  ${
                    selected === 30
                      ? "bg-background text-primary font-bold shadow-sm"
                      : "text-muted-foreground hover:bg-background/70"
                  }`}
              >
                30 Mins Session
              </button>

              {/* 60 MIN */}
              <button
                onClick={() => handleClick(60)}
                className={`flex-1 rounded-full px-3 py-3 text-sm sm:px-6 sm:py-4 sm:text-base transition
                  ${
                    selected === 60
                      ? "bg-background text-primary font-bold shadow-sm"
                      : "text-muted-foreground hover:bg-background/70"
                  }`}
              >
                60 Mins Session
              </button>

            </div>

            <p className="mt-5 text-sm italic text-muted-foreground sm:mt-6">
              Recommended for younger students (30 mins) vs advanced learners (60 mins)
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}