// import Image from "next/image";

// export function HeroSection() {
//   return (
//     <section
//       className="relative min-h-screen flex items-center overflow-hidden p-0 m-0 mt-0 pt-0"
//       aria-label="Hero"
//     >
//       {/* Full background Quran image */}
//       <div className="absolute inset-0 w-full h-full -z-10">
//         <Image
// src="/assets/hero/quranwithStand.png"
//           alt="Quran on stand"
//           fill
//           sizes="100vw"
//           className="object-cover"
//           priority
//           quality={85}
//         />
//         {/* Dark overlay for readability */}
//         <div className="absolute inset-0 bg-black/60" />
//       </div>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-start min-h-screen p-0 m-0">
//         <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent font-bold tracking-[0.2em] uppercase mb-6 font-label text-xs w-fit">
//           Spiritual Excellence
//         </span>
//         <h1 className="text-5xl md:text-7xl font-extrabold text-white font-headline leading-[1.1] tracking-tight mb-8 max-w-3xl">
//           Learn Quran with <span className="text-accent">Expert Guidance</span> from Home
//         </h1>
//         <p className="text-xl text-white/90 font-body leading-relaxed mb-12 max-w-xl">
//           A modern sanctuary for spiritual growth. Connect with qualified scholars and master the Quran through tailored online sessions designed for your lifestyle.
//         </p>
//         <div className="flex flex-col sm:flex-row gap-4 mb-12">
//           <a
//             href="/courses"
//             className="bg-accent text-accent-foreground px-10 py-5 rounded-xl font-headline font-extrabold text-lg hover:bg-accent/80 transition-all shadow-xl shadow-primary/20 text-center"
//           >
//             Start Learning
//           </a>
//           <a
//             href="/courses"
//             className="border border-accent/60 text-white px-10 py-5 rounded-xl font-headline font-bold text-lg hover:bg-white/10 transition-all text-center"
//           >
//             Explore Courses
//           </a>
//         </div>
//         {/* Quote Card Overlay - responsive */}
//         <div
//           className="w-full max-w-md z-20 mt-20
//             relative
//             md:absolute md:top-72 md:right-8 md:mt-0"
//         >
//           <div className="bg-white/20 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/30 shadow-2xl">
//             <p className="text-xl md:text-3xl font-headline italic text-white leading-relaxed text-center md:text-left">
//               "Read, and your Lord is the Most Generous."
//             </p>
//             <p className="mt-4 md:mt-6 text-accent font-bold tracking-widest uppercase text-sm text-center md:text-left">AL-ALAQ 96:3</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import Image from "next/image";

export function HeroSection() {
  return (
    <section
      className="relative w-full h-screen flex items-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full -z-10">
        <Image
          src="/assets/hero/quranwithStand.png"
          alt="Quran on stand"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
          quality={80}
        />
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-start pt-24 md:pt-32">
        
        <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent font-bold tracking-[0.2em] uppercase mb-6 font-label text-xs w-fit">
          Spiritual Excellence
        </span>

        <h1 className="text-5xl md:text-7xl font-extrabold text-white font-headline leading-[1.1] tracking-tight mb-8 max-w-3xl">
          Learn Quran with <span className="text-accent">Expert Guidance</span> from Home
        </h1>

        <p className="text-xl text-white/90 font-body leading-relaxed mb-12 max-w-xl">
          A modern sanctuary for spiritual growth. Connect with qualified scholars and master the Quran through tailored online sessions designed for your lifestyle.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <a
            href="/enroll"
            className="bg-accent text-accent-foreground px-10 py-5 rounded-xl font-headline font-extrabold text-lg hover:bg-accent/80 transition-all shadow-xl shadow-primary/20 text-center"
          >
            Start Learning
          </a>
          <a
            href="/courses"
            className="border border-accent/60 text-white px-10 py-5 rounded-xl font-headline font-bold text-lg hover:bg-white/10 transition-all text-center"
          >
            Explore Courses
          </a>
        </div>

        {/* Quote Card */}
        <div className="w-full max-w-md z-20 mt-10 relative md:absolute md:top-1/2 md:-translate-y-1/2 md:right-8">
          <div className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/20 shadow-2xl">
            <p className="text-xl md:text-3xl font-headline italic text-white leading-relaxed text-center md:text-left">
              "Read, and your Lord is the Most Generous."
            </p>
            <p className="mt-4 md:mt-6 text-accent font-bold tracking-widest uppercase text-sm text-center md:text-left">
              AL-ALAQ 96:3
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}