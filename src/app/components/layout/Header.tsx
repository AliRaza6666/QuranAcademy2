"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

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
    <header className="fixed top-0 w-full z-50 bg-white/70 dark:bg-primary/90 backdrop-blur-xl border-b border-border">
      
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-6 h-20">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tighter text-primary font-headline"
        >
          Shia Quran Hub
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-headline text-sm font-semibold pb-1 transition-all duration-300
                  ${
                    isActive
                      ? "text-primary border-b-2 border-accent"
                      : "text-primary/70 hover:text-accent border-b-2 border-transparent"
                  }
                `}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop Button */}
        <Link
          href="/courses"
          className="hidden md:block bg-primary text-white px-8 py-3 rounded-xl font-headline font-bold text-sm hover:bg-accent transition-all active:scale-95 duration-150"
        >
          Start Learning
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <X className="w-7 h-7 text-primary" />
          ) : (
            <Menu className="w-7 h-7 text-primary" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-border px-6 py-6 space-y-5">
          
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`block py-2 text-base font-semibold font-headline transition
                  ${
                    isActive
                      ? "text-primary"
                      : "text-primary/70 hover:text-accent"
                  }
                `}
              >
                {item.label}
              </Link>
            );
          })}

          <Link
            href="/courses"
            onClick={() => setOpen(false)}
            className="block text-center bg-primary text-white px-6 py-3.5 rounded-xl font-bold text-sm"
          >
            Start Learning
          </Link>
        </div>
      )}
    </header>
  );
}