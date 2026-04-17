"use client";

import React from "react";
import { ArrowRight, Stars, Users } from "lucide-react";

type Props = {
  session: number;
};

type FamilyPlan = {
  label: string;
  price: number; // 🔥 convert to number
  popular?: boolean;
};

const familyPlans: FamilyPlan[] = [
  { label: "1 Day / Week", price: 60 },
  { label: "2 Days / Week", price: 70 },
  { label: "3 Days / Week", price: 80 },
  { label: "5 Days / Week", price: 100, popular: true },
];

export function FeesFamilyOfferSection({ session }: Props) {
  return (
    <section className="bg-background px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-xl border border-border bg-card">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12">

            {/* LEFT */}
            <div className="bg-primary p-8 text-primary-foreground sm:p-12 lg:col-span-4 lg:p-16">
              <Users className="mb-6 h-10 w-10 text-secondary" />
              <h2 className="mb-5 text-3xl font-bold sm:text-4xl">
                Special Offer For Two Students
              </h2>
              <p className="mb-8 text-primary-foreground/75">
                Perfect for siblings or couples learning together.
              </p>
            </div>

            {/* RIGHT */}
            <div className="bg-secondary/20 p-6 sm:p-8 md:p-10 lg:col-span-8 lg:p-12">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">

                {familyPlans.map((plan) => {
                  // 🔥 MAIN LOGIC
                  const finalPrice =
                    session === 60 ? plan.price * 2 : plan.price;

                  return (
                    <article
                      key={plan.label}
                      className={
                        plan.popular
                          ? "cursor-pointer rounded-xl bg-secondary p-6 text-secondary-foreground shadow-lg transition-transform hover:scale-[1.02]"
                          : "group flex items-center justify-between rounded-xl border border-border bg-background p-6 transition-colors hover:bg-primary hover:text-primary-foreground"
                      }
                    >
                      <div>
                        <div className="mb-1 text-xs font-bold uppercase tracking-widest">
                          {plan.label}
                        </div>

                        {/* 🔥 Dynamic Price */}
                        <div className="text-3xl font-extrabold">
                          ${finalPrice}
                        </div>

                        {plan.popular && (
                          <div className="mt-2 inline-flex rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-bold uppercase text-white">
                            Most Popular
                          </div>
                        )}
                      </div>

                      {plan.popular ? (
                        <Stars className="h-5 w-5" />
                      ) : (
                        <ArrowRight className="h-5 w-5" />
                      )}
                    </article>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}