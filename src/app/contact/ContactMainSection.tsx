"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Globe2, MessageCircleMore, Send } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

// 🔥 Toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const gallery = [
  {
    src: "/assets/contact/mosque-detail.jpg",
    alt: "Minimalist architectural details of a mosque",
  },
  {
    src: "/assets/contact/calligraphy-paper.jpg",
    alt: "Close up of spiritual text on parchment with gold accents",
  },
  {
    src: "/assets/contact/window-light.jpg",
    alt: "Serene morning light filtering through geometric window screens",
  },
];

export function ContactMainSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from("contacts").insert([
      {
        name: form.name,
        email: form.email,
        message: form.message,
      },
    ]);

    setLoading(false);

    if (error) {
      toast.error("❌ Failed to send message. Please try again.");
      return;
    }

    toast.success("✅ Message sent successfully!");

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 pt-20 lg:px-8">

      {/* 🔥 Toast container (must be here once) */}
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-20">

        {/* ================= LEFT SIDE (UNCHANGED) ================= */}
        <div className="space-y-12">
          <div className="space-y-6">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-accent font-label">
              Connect with Us
            </span>
            <h1 className="max-w-xl font-headline text-5xl font-extrabold tracking-tight leading-[1.05] text-primary sm:text-6xl lg:text-7xl">
              Inquire with <br />
              <span className="text-accent">Reverence.</span>
            </h1>
            <p className="max-w-md text-lg leading-8 text-foreground/70">
              Our sanctuary is open to your questions. Whether you are beginning your
              journey or seeking advanced guidance, we are here to support your
              spiritual growth.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-5 rounded-3xl border border-border bg-secondary/15 p-8 shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white">
                <Globe2 className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h2 className="font-headline text-2xl font-bold text-primary">
                  Global Availability
                </h2>
                <p className="text-sm leading-7 text-foreground/65">
                  Providing spiritual education across all time zones, 24/7.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-3xl bg-primary p-8 text-white shadow-2xl">
              <div className="relative z-10 flex flex-col gap-6">
                <div className="flex items-center justify-between gap-4">
                  <MessageCircleMore className="h-10 w-10 text-secondary" />
                  <span className="rounded-full bg-secondary px-4 py-1 text-xs font-bold uppercase">
                    Active Now
                  </span>
                </div>

                <div>
                  <h2 className="mb-3 font-headline text-3xl font-bold">
                    Instant Connection
                  </h2>
                  <p className="mb-6 text-sm text-white/75">
                    Reach our advisors instantly via WhatsApp.
                  </p>

                  <Link
                    href="#"
                    className="inline-flex items-center gap-3 rounded-full bg-secondary px-7 py-4 font-bold"
                  >
                    <Send className="h-4 w-4" />
                    Chat on WhatsApp
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="relative overflow-hidden rounded-3xl border border-border bg-white p-6 shadow-xl sm:p-10 lg:p-16">

          {/* FORM */}
          <form onSubmit={handleSubmit} className="relative z-10 space-y-7">

            <div>
              <label className="mb-3 block text-xs font-bold uppercase text-foreground/60">
                Full Name
              </label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                type="text"
                placeholder="Ali Raza"
                className="w-full rounded-2xl border px-5 py-4"
                required
              />
            </div>

            <div>
              <label className="mb-3 block text-xs font-bold uppercase text-foreground/60">
                Email Address
              </label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                placeholder="ali@example.com"
                className="w-full rounded-2xl border px-5 py-4"
                required
              />
            </div>

            <div>
              <label className="mb-3 block text-xs font-bold uppercase text-foreground/60">
                Your Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                placeholder="How may we assist?"
                className="w-full resize-none rounded-2xl border px-5 py-4"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-primary py-5 font-bold text-white"
            >
              {loading ? "Sending..." : "Send Inquiry"}
              <ArrowRight className="h-4 w-4" />
            </button>

          </form>

          {/* GALLERY (UNCHANGED) */}
          <div className="mt-12 border-t border-border pt-10">
            <div className="grid grid-cols-3 gap-4">
              {gallery.map((item) => (
                <div
                  key={item.src}
                  className="relative h-24 overflow-hidden rounded-2xl border border-border bg-secondary/10"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover grayscale opacity-45"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}