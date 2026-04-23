import type { Metadata } from "next";
import { Geist, Geist_Mono, Amiri } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const amiri = Amiri({
  variable: "--font-amiri",
  subsets: ["latin", "arabic"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.shiaquranhub.com"),
  title: {
    default: "Shia Quran Hub | The Sacred Sanctuary of Learning",
    template: "%s | Shia Quran Hub",
  },
  description:
    "A modern sanctuary for spiritual growth. Connect with qualified scholars and master the Quran through tailored online sessions designed for your lifestyle.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Shia Quran Hub",
    title: "Shia Quran Hub | The Sacred Sanctuary of Learning",
    description:
      "A modern sanctuary for spiritual growth. Connect with qualified scholars and master the Quran through tailored online sessions designed for your lifestyle.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shia Quran Hub | The Sacred Sanctuary of Learning",
    description:
      "A modern sanctuary for spiritual growth. Connect with qualified scholars and master the Quran through tailored online sessions designed for your lifestyle.",
  },
};

import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${geistSans.variable} ${geistMono.variable} ${amiri.variable}`}
    >
      <body className="bg-background text-foreground font-body antialiased min-h-full flex flex-col">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
