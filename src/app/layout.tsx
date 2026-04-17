import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shia Quran Hub | The Sacred Sanctuary of Learning",
  description:
    "A modern sanctuary for spiritual growth. Connect with qualified scholars and master the Quran through tailored online sessions designed for your lifestyle.",
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
      className={`scroll-smooth ${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="bg-background text-foreground font-body antialiased min-h-full flex flex-col">
        <Header />
        <main className="flex-1 pt-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
