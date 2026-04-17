import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/70 dark:bg-primary/90 backdrop-blur-xl border-b border-border ">
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-6 h-20">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-primary font-headline">
          Shia Quran Hub
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="font-headline tracking-tight text-sm font-semibold text-primary border-b-2 border-accent pb-1">Home</Link>
          <Link href="/courses" className="font-headline tracking-tight text-sm font-semibold text-primary/70 hover:text-accent transition-colors duration-300">Courses</Link>
          <Link href="/about" className="font-headline tracking-tight text-sm font-semibold text-primary/70 hover:text-accent transition-colors duration-300">About</Link>
          <Link href="/teachers" className="font-headline tracking-tight text-sm font-semibold text-primary/70 hover:text-accent transition-colors duration-300">Teachers</Link>
          <Link href="/contact" className="font-headline tracking-tight text-sm font-semibold text-primary/70 hover:text-accent transition-colors duration-300">Contact</Link>
        </div>
        <Link href="/courses" className="bg-primary text-white px-8 py-3 rounded-xl font-headline font-bold text-sm hover:bg-accent transition-all active:scale-95 duration-150">
          Start Learning
        </Link>
      </nav>
    </header>
  );
}
