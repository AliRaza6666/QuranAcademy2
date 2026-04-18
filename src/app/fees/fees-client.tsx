"use client";

import { useState } from "react";
import { FeesFamilyOfferSection } from "./FeesFamilyOfferSection";
import { FeesHeroSection } from "./FeesHeroSection";
import { FeesIndividualPackagesSection } from "./FeesIndividualPackagesSection";
import { FeesPolicySection } from "./FeesPolicySection";
import { FeesSupportSection } from "./FeesSupportSection";

export function FeesClient() {
  const [session, setSession] = useState<number>(30);

  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <FeesHeroSection />

      <FeesPolicySection onSessionChange={setSession} />

      <FeesIndividualPackagesSection session={session} />

      <FeesFamilyOfferSection session={session} />

      <FeesSupportSection />
    </main>
  );
}