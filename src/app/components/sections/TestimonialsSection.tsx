
import Image from "next/image";

const testimonials = [
  {
    name: "Fatima Zahra",
    location: "London, UK",
    text: "The platform has changed my approach to Quranic studies. The teachers are incredibly patient and the schedule is so accommodating for a busy professional.",
    avatar: "/assets/testimonials/fatima-zahra.svg",
  },
  {
    name: "Hussain Ali",
    location: "Toronto, Canada",
    text: "Finding a Shia-specific hub with such high-end technology and qualified teachers was a blessing. My Tajweed has improved significantly in just 3 months.",
    avatar: "/assets/testimonials/hussain-ali.svg",
  },
  {
    name: "Sakina Raza",
    location: "Sydney, Australia",
    text: "Highly recommended for children. The interactive tools and gentle guidance make learning fun and spiritually engaging for my kids.",
    avatar: "/assets/testimonials/sakina-raza.svg",
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-accent/20 py-20 sm:py-24 lg:py-32 rounded-t-3xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold font-headline text-primary mb-4">Voices from Our Community</h2>
            <p className="text-surface-foreground text-base sm:text-lg">Experience the transformative power of spiritual learning through the eyes of our dedicated students.</p>
          </div>
          <div className="flex gap-4">
            <button className="w-12 h-12 rounded-full border border-accent flex items-center justify-center hover:bg-surface transition-all" aria-label="Previous testimonials">
              <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/80 transition-all" aria-label="Next testimonials">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm border border-accent/10 flex flex-col h-full">
              <div className="flex gap-1 text-accent mb-6">
                {[...Array(5)].map((_, idx) => (
                  <svg key={idx} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.97a1 1 0 00-.364-1.118L2.05 9.397c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.97z" /></svg>
                ))}
              </div>
              <p className="text-surface-foreground text-base sm:text-lg leading-relaxed italic mb-8">"{t.text}"</p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-surface overflow-hidden border border-accent/20">
                  <Image src={t.avatar} alt={t.name} width={48} height={48} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">{t.name}</h4>
                  <p className="text-sm text-surface-foreground/70">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
