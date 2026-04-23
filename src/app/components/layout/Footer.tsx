"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Share2, Heart, Play, Music } from "lucide-react";
import { FaFacebook, FaInstagram, FaYoutube, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { useState, useEffect } from "react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setShowWhatsApp(true);
      setIsAnimating(true);
    }, 2000);

    const staticTimer = setTimeout(() => {
      setIsAnimating(false);
    }, 5000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(staticTimer);
    };
  }, []);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      // Simulate submit
      alert("Thank you for subscribing!");
      setEmail("");
    } else {
      setIsValid(false);
    }
  };

const whatsappNumber = "+9647708739184";

  return (
    <>
      <footer className="w-full mt-24 pt-16 pb-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1a2e21] to-[#111] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16">
            {/* Col 1: About */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-[#c29d59]">IMAM ALI QURAN ACADEMY</h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                Your gateway to authentic Quranic education with certified scholars. 
                Flexible online classes tailored for all ages and levels.
              </p>
            </div>

            {/* Col 2: Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-[#c29d59]">Quick Links</h3>
              <div className="grid grid-cols-2 gap-2">
                <Link href="/" className="text-gray-300 hover:text-[#c29d59] transition-colors text-sm py-1 block hover:opacity-80">Home</Link>
                <Link href="/courses" className="text-gray-300 hover:text-[#c29d59] transition-colors text-sm py-1 block hover:opacity-80">Courses</Link>
                <Link href="/about" className="text-gray-300 hover:text-[#c29d59] transition-colors text-sm py-1 block hover:opacity-80">About</Link>
                <Link href="/teachers" className="text-gray-300 hover:text-[#c29d59] transition-colors text-sm py-1 block hover:opacity-80">Teachers</Link>
                <Link href="/fees" className="text-gray-300 hover:text-[#c29d59] transition-colors text-sm py-1 block hover:opacity-80">Fees</Link>
                <Link href="/enroll" className="text-gray-300 hover:text-[#c29d59] transition-colors text-sm py-1 block hover:opacity-80">Enroll</Link>
                <Link href="/contact" className="text-gray-300 hover:text-[#c29d59] transition-colors text-sm py-1 block hover:opacity-80">Contact</Link>
              </div>
            </div>

            {/* Col 3: Contact */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-[#c29d59]">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-0.5 text-[#c29d59] flex-shrink-0" />
                  <span className="text-gray-300 text-sm">Najaf, Iraq</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#c29d59] flex-shrink-0" />
                  <a href="tel:+9647708739184" className="text-gray-300 hover:text-[#c29d59] transition-colors text-sm">+964 770 873 9184</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#c29d59] flex-shrink-0" />
                  <a href="mailto:shiaquranhub@gmail.com" className="text-gray-300 hover:text-[#c29d59] transition-colors text-sm">shiaquranhub@gmail.com</a>
                </div>
              </div>
            </div>

            {/* Col 4: Newsletter */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#c29d59]">Stay Updated</h3>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">Get the latest courses and spiritual guidance straight to your inbox.</p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setIsValid(true);
                  }}
                  placeholder="your@email.com"
                  className={`w-full px-4 py-3 rounded-xl border-2 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder-gray-400 focus:border-[#c29d59] focus:outline-none transition-all text-sm ${!isValid ? 'border-red-400 focus:border-red-400' : ''}`}
                />
                <button 
                  type="submit" 
                  className="w-full bg-[#c29d59] hover:bg-[#b8944f] text-black font-bold py-3 px-6 rounded-xl transition-all duration-300 text-sm uppercase tracking-wide shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  GO
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-12 pb-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex gap-6">
                <a href="https://wa.me/+9647708739184" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group">
                  <FaWhatsapp className="w-5 h-5 text-[#25D366] group-hover:scale-110" />
                </a>
                <a href="https://www.instagram.com/shiaquranhub" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group">
                  <FaInstagram className="w-5 h-5 text-[#c29d59] group-hover:scale-110" />
                </a>
                <a href="https://youtube.com/@shiaquranhub?si=uCu29wrnXNKNbZQM" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group">
                  <FaYoutube className="w-5 h-5 text-[#c29d59] group-hover:scale-110" />
                </a>
                <a href="https://www.tiktok.com/@shiaquranhub" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group">
                  <FaTiktok className="w-5 h-5 text-[#c29d59] group-hover:scale-110" />
                </a>
              </div>
              <p className="text-gray-400 text-sm text-center md:text-left">
                © 2026 IMAM ALI QURAN ACADEMY. ALL RIGHTS RESERVED .313 TECH SOLUTIONS.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp FAB */}
      <a
        href={`https://wa.me/${whatsappNumber.replace(/[\s+]/g, '')}`}
        className={`fixed bottom-6 right-6 w-16 h-16 bg-[#25D366] hover:bg-[#20ba5a] shadow-2xl rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 z-50 group ${
          showWhatsApp
            ? isAnimating
              ? "animate-bounce"
              : "translate-y-0 opacity-100"
            : "translate-y-32 opacity-0"
        }`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        <FaWhatsapp className="w-8 h-8 text-white" />
      </a>
    </>
  );
}

