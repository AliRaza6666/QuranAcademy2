import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full rounded-t-3xl mt-20 bg-primary text-accent-foreground">
      <div className="flex flex-col items-center py-16 px-8 max-w-7xl mx-auto text-center">
        <div className="text-2xl font-headline font-bold text-accent mb-8">Shia Quran Hub</div>
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <Link className="font-body text-sm tracking-wide text-primary-foreground hover:text-accent underline-offset-4 transition-all opacity-80 hover:opacity-100" href="/about">Privacy Policy</Link>
          <Link className="font-body text-sm tracking-wide text-primary-foreground hover:text-accent underline-offset-4 transition-all opacity-80 hover:opacity-100" href="/fees">Terms of Service</Link>
          <Link className="font-body text-sm tracking-wide text-primary-foreground hover:text-accent underline-offset-4 transition-all opacity-80 hover:opacity-100" href="/contact">Support</Link>
          <Link className="font-body text-sm tracking-wide text-primary-foreground hover:text-accent underline-offset-4 transition-all opacity-80 hover:opacity-100" href="/sitemap.xml">Sitemap</Link>
        </div>
        <div className="h-px w-full bg-white/10 mb-12"></div>
        <p className="font-body text-sm tracking-wide text-primary-foreground ">
          © 2024 Shia Quran Hub. The Sacred Sanctuary of Learning.
        </p>
      </div>
    </footer>
  );
}
