import React from "react";
import Link from "next/link";
import { CheckCircle2, XCircle } from "lucide-react";

type Props = {
  session: number;
};

type PriceRates = {
  usd: number;
  cad: number;
  aud: number;
  uk: number;
  eur: number;
};

type PackageItem = {
  name: string;
  frequency: string;
  sessions: string;
  baseRates: PriceRates;
  features: { label: string; included: boolean }[];
  highlight?: boolean;
  badge?: string;
  cta: string;
};

const packages: PackageItem[] = [
  {
    name: "1 Student Package",
    frequency: "1 Day / Week",
    sessions: "4 Days / Month",
    baseRates: { usd: 30, cad: 30, aud: 30, uk: 20, eur: 20 },
    features: [
      { label: "4 Sessions / Month", included: true },
      { label: "Weekly Live Class", included: true },
      { label: "Family Discount", included: false },
    ],
    cta: "Enroll Now",
  },
  {
    name: "1 Student Package",
    frequency: "2 Days / Week",
    sessions: "8 Days / Month",
    baseRates: { usd: 35, cad: 35, aud: 35, uk: 22, eur: 22 },
    features: [
      { label: "8 Sessions / Month", included: true },
      { label: "Progress Tracking", included: true },
      { label: "Family Discount", included: false },
    ],
    cta: "Enroll Now",
  },
  {
    name: "1 Student Package",
    frequency: "3 Days / Week",
    sessions: "12 Days / Month",
    baseRates: { usd: 40, cad: 40, aud: 45, uk: 25, eur: 25 },
    features: [
      { label: "12 Sessions / Month", included: true },
      { label: "Progress Review", included: true },
      { label: "Live Q&A", included: true },
    ],
    cta: "Enroll Now",
  },
  {
    name: "1 Student Package",
    frequency: "5 Days / Week",
    sessions: "20 Days / Month",
    baseRates: { usd: 55, cad: 55, aud: 55, uk: 35, eur: 35 },
    features: [
      { label: "20 Sessions / Month", included: true },
      { label: "Full Progress Analytics", included: true },
      { label: "Weekend Seminar Access", included: true },
    ],
    cta: "Enroll Now",
    highlight: true,
    badge: "Best Value",
  },
];

export function FeesIndividualPackagesSection({ session }: Props) {
  return (
    <section className="bg-background px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
      <div className="mx-auto mb-14 max-w-7xl text-center">
        <h2 className="mb-4 text-3xl font-extrabold text-primary sm:text-4xl lg:text-5xl">
          Individual Learning Paths
        </h2>
        <p className="mx-auto max-w-2xl text-sm text-muted-foreground">
          One-on-one sessions tailored to your pace.
        </p>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {packages.map((item, index) => {
          const multiplier = session === 60 ? 2 : 1;
          const finalRates = {
            usd: item.baseRates.usd * multiplier,
            cad: item.baseRates.cad * multiplier,
            aud: item.baseRates.aud * multiplier,
            uk: item.baseRates.uk * multiplier,
            eur: item.baseRates.eur * multiplier,
          };
          const rateTextClass = item.highlight
            ? "text-primary-foreground/90"
            : "text-muted-foreground";

          return (
            <article
              key={`${item.frequency}-${index}`}
              className={
                item.highlight
                  ? "relative rounded-xl bg-primary p-6 text-primary-foreground shadow-xl"
                  : "rounded-xl border border-border bg-secondary/10 p-6"
              }
            >
              {item.badge && (
                <div className="absolute right-0 top-0 rounded-bl-xl bg-secondary px-4 py-1 text-xs font-bold">
                  {item.badge}
                </div>
              )}

              <div className="mb-4 text-xs font-bold uppercase">
                {item.name}
              </div>

              <div className="mb-2 text-lg font-semibold">
                {item.frequency}
              </div>

              <div className="mb-4 text-sm text-muted-foreground">
                {item.sessions}
              </div>

              <div className={`mb-6 space-y-1 text-sm leading-6 ${rateTextClass}`}>
                <div>USD & CAD: ${finalRates.usd}</div>
                <div>AUD: ${finalRates.aud}</div>
                <div>UK: £{finalRates.uk}</div>
                <div>Europe: €{finalRates.eur}</div>
              </div>

              <div className="mb-6 text-sm text-muted-foreground">
                {session === 60 ? "60-minute session pricing" : "30-minute session pricing"}
              </div>

              <ul className="mb-6 space-y-2">
                {item.features.map((feature) => (
                  <li key={feature.label} className="flex items-center gap-2">
                    {feature.included ? (
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    ) : (
                      <XCircle className="h-4 w-4 text-muted-foreground" />
                    )}
                    <span>{feature.label}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/enroll"
                className="inline-flex w-full items-center justify-center rounded-full border border-primary py-3 font-bold text-center"
              >
                Enroll Now
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}