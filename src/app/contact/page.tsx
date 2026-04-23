import type { Metadata } from "next";
import { ContactCTASection } from "./ContactCTASection";
import { ContactMainSection } from "./ContactMainSection";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Shia Quran Hub for course inquiries, admissions support, and direct guidance from our team.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden pt-18 md:pt-10">
      <ContactMainSection />
      <ContactCTASection />
    </main>
  );
}