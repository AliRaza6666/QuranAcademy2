import type { Metadata } from "next";
import { ContactCTASection } from "./ContactCTASection";
import { ContactMainSection } from "./ContactMainSection";

export const metadata: Metadata = {
  title: "Contact | Shia Quran Hub",
  description:
    "Contact Shia Quran Hub for course inquiries, admissions support, and direct guidance from our team.",
};

export default function ContactPage() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <ContactMainSection />
      <ContactCTASection />
    </main>
  );
}