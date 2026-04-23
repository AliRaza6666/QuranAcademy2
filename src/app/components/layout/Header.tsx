"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const courseLinks = [
  "Basic Qaida Reading with Tajweed",
  "Shia Quran with Tajweed Online",
  "Hifz Memorization Quran Online",
  "Quran with Translation",
  "Quran with Tafseer",
  "Nahjul Balagha",
  "Duaa & Adhkar",
  "Saheefa Sajjadia",
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/courses", label: "Courses" },
    { href: "/about", label: "About" },
    { href: "/teachers", label: "Teachers" },
    { href: "/contact", label: "Contact" },
    { href: "/fees", label: "Fees" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="mx-auto px-3 max-w-7xl w-full">
        <div className="bg-black/20 backdrop-blur-md rounded-full border border-white/10 px-8 py-4 flex justify-between items-center">
          
          {/* Logo - Image + Brand Text */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            aria-label="Shia Quran Hub Home"
          >
            <span className="block w-12 h-12 relative">
              <Image
                src="/assets/logo.png"
                alt="Shia Quran Hub Logo"
                width={48}
                height={48}
                priority
                className="w-12 h-12 object-contain drop-shadow-md transition-transform group-hover:scale-105"
              />
            </span>
            <span className="text-2xl font-serif font-bold tracking-wide text-white group-hover:text-[#c29d59] transition-colors duration-300">
              <span className="text-[#c29d59]">Shia</span> Quran Hub
            </span>
          </Link>

          {/* Desktop Navigation Links - Center */}
          <div className="hidden md:flex items-center gap-12">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              if (item.href === "/courses") {
                return (
                  <div key={item.href} className="relative group">
                    <Link
                      href={item.href}
                      className={`font-sans text-sm font-medium transition-all duration-300 relative group ${
                        isActive
                          ? "text-[#c29d59]"
                          : "text-white/80 hover:text-white"
                      }`}
                    >
                      {item.label}
                    </Link>

                    <div className="pointer-events-none absolute left-0 top-full mt-3 hidden w-64 rounded-3xl border border-white/10 bg-neutral-900/95 p-4 shadow-xl backdrop-blur-xl group-hover:block group-hover:pointer-events-auto">
                      <div className="grid gap-2">
                        {courseLinks.map((title) => (
                          <Link
                            key={title}
                            href="/courses"
                            className="block rounded-2xl px-3 py-2 text-sm text-white/80 transition hover:bg-white/5 hover:text-white"
                          >
                            {title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-sans text-sm font-medium transition-all duration-300 relative group ${
                    isActive
                      ? "text-[#c29d59]"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#c29d59] transition-all duration-300 ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* CTA Button - Right */}
          <Link
            href="/enroll"
            className="hidden md:block px-8 py-3 rounded-full font-sans font-bold text-sm text-white bg-gradient-to-r from-[#c29d59] to-[#d4af6a] hover:from-[#d4af6a] hover:to-[#e5c17b] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
          >
            Enroll Now
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-[#c29d59] transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu - Glassmorphism Dropdown */}
      {open && (
        <div className="md:hidden mx-6 mb-6">
          <div className="bg-neutral-800/90 backdrop-blur-xl rounded-3xl border border-white/10 p-6 space-y-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block py-3 px-4 rounded-lg font-sans text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "text-[#c29d59] bg-white/10"
                      : "text-white/80 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/enroll"
              onClick={() => setOpen(false)}
              className="block py-3 px-4 rounded-lg text-center bg-gradient-to-r from-[#c29d59] to-[#d4af6a] hover:from-[#d4af6a] hover:to-[#e5c17b] text-white font-sans font-bold text-sm transition-all duration-300 mt-4"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}