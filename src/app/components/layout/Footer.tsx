export function Footer() {
  return (
    <footer className="w-full rounded-t-3xl mt-20 bg-primary text-accent-foreground">
      <div className="flex flex-col items-center py-16 px-8 max-w-7xl mx-auto text-center">
        <div className="text-xl font-headline font-bold text-accent mb-8">Shia Quran Hub</div>
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <a className="font-body text-sm tracking-wide text-white/60 hover:text-accent underline-offset-4 transition-all opacity-80 hover:opacity-100" href="#">Privacy Policy</a>
          <a className="font-body text-sm tracking-wide text-white/60 hover:text-accent underline-offset-4 transition-all opacity-80 hover:opacity-100" href="#">Terms of Service</a>
          <a className="font-body text-sm tracking-wide text-white/60 hover:text-accent underline-offset-4 transition-all opacity-80 hover:opacity-100" href="#">Support</a>
          <a className="font-body text-sm tracking-wide text-white/60 hover:text-accent underline-offset-4 transition-all opacity-80 hover:opacity-100" href="#">Sitemap</a>
        </div>
        <div className="h-px w-full bg-white/10 mb-12"></div>
        <p className="font-body text-sm tracking-wide text-white/60">
          © 2024 Shia Quran Hub. The Sacred Sanctuary of Learning.
        </p>
      </div>
    </footer>
  );
}
