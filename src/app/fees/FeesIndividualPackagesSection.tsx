import React from "react";
import { CheckCircle2, XCircle } from "lucide-react";

type Props = {
  session: number;
};

type PackageItem = {
  name: string;
  price: number; // 🔥 change to number
  period: string;
  features: { label: string; included: boolean }[];
  highlight?: boolean;
  badge?: string;
  cta: string;
};

const packages: PackageItem[] = [
  {
    name: "Beginner",
    price: 30,
    period: "per month",
    features: [
      { label: "1 Day / Week", included: true },
      { label: "4 Sessions / Month", included: true },
      { label: "Family Discount", included: false },
    ],
    cta: "Enroll Now",
  },
  {
    name: "Foundation",
    price: 35,
    period: "per month",
    features: [
      { label: "2 Days / Week", included: true },
      { label: "8 Sessions / Month", included: true },
      { label: "Family Discount", included: false },
    ],
    cta: "Enroll Now",
  },
  {
    name: "Standard",
    price: 40,
    period: "per month",
    features: [
      { label: "3 Days / Week", included: true },
      { label: "12 Sessions / Month", included: true },
      { label: "Basic Progress Report", included: true },
    ],
    cta: "Enroll Now",
  },
  {
    name: "Immersive",
    price: 55,
    period: "per month",
    features: [
      { label: "5 Days / Week", included: true },
      { label: "20 Sessions / Month", included: true },
      { label: "Full Progress Analytics", included: true },
      { label: "Weekend Seminar Access", included: true },
    ],
    cta: "Select Best Value",
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
        {packages.map((item) => {
          // 🔥 MAIN LOGIC
          const finalPrice = session === 60 ? item.price * 2 : item.price;

          return (
            <article
              key={item.name}
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

              {/* 🔥 Dynamic Price */}
              <div className="mb-2 text-4xl font-extrabold">
                ${finalPrice}
              </div>

              <div className="mb-6 text-sm text-muted-foreground">
                {item.period}
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

              <button className="w-full rounded-full border border-primary py-3 font-bold">
                {item.cta}
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
}