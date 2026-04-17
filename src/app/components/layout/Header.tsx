"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

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
        
        <Link
          href="/"
          className="text-2xl font-bold tracking-tighter text-primary font-headline"
        >
          Shia Quran Hub
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-headline tracking-tight text-sm font-semibold pb-1 transition-all duration-300
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

        <Link
          href="/courses"
          className="bg-primary text-white px-8 py-3 rounded-xl font-headline font-bold text-sm hover:bg-accent transition-all active:scale-95 duration-150"
        >
          Start Learning
        </Link>
      </nav>
    </header>
  );
}