import type { Metadata } from "next";
import { FeesClient } from "./fees-client";

export const metadata: Metadata = {
  title: "Fees",
  description:
    "Explore transparent Quran class fees, session plans, and family offers at Shia Quran Hub.",
  alternates: {
    canonical: "/fees",
  },
};

export default function FeesPage() {
  return <FeesClient />;
}