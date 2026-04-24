"use client";

import { ArrowRight, BookOpen, Users, Clock } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

// 🔥 Toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function EnrollMainSection() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    countryCode: "",
    phone: "",
    course: "",
    experience: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

//   const countryCodes = [
//     "+1 (USA)",
//     "+44 (UK)",
//     "+91 (India)",
//     "+964 (Iraq)",
//     "+971 (UAE)",
//     "+92 (Pakistan)"
//   ];
const countryCodes = [
  "+1 (USA)",
  "+1 (Canada)",
  "+44 (UK)",
  "+61 (Australia)",
  "+49 (Germany)",
  "+33 (France)",
  "+39 (Italy)",
  "+34 (Spain)",
  "+31 (Netherlands)",
  "+41 (Switzerland)",
  "+46 (Sweden)",
  "+47 (Norway)",
  "+45 (Denmark)",
  "+90 (Turkey)",
  "+971 (UAE)",
  "+966 (Saudi Arabia)",
  "+974 (Qatar)",
  "+965 (Kuwait)",
  "+964 (Iraq)",
  "+20 (Egypt)",
  "+27 (South Africa)",
  "+91 (India)",
  "+92 (Pakistan)",
  "+880 (Bangladesh)",
  "+94 (Sri Lanka)",
  "+86 (China)",
  "+81 (Japan)",
  "+82 (South Korea)",
  "+65 (Singapore)",
  "+60 (Malaysia)"
];

  const courses = ["Quran Reading", "Tajweed", "Hifz", "Islamic Studies"];
  const experienceLevels = ["Beginner", "Intermediate", "Advanced"];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!supabase) {
      toast.error("❌ Database connection not available. Please contact support.");
      setLoading(false);
      return;
    }

    const { error } = await supabase.from("enrollments").insert([
      {
        full_name: form.fullName,
        email: form.email,
        country_code: form.countryCode,
        phone: form.phone,
        course: form.course,
        experience: form.experience,
        message: form.message,
      },
    ]);

    setLoading(false);

    if (error) {
      console.error("Supabase error:", error);
      toast.error("❌ Failed to submit enrollment. Please try again.");
      return;
    }

    toast.success("✅ Enrollment request sent! We'll contact you within 24 hours.");

    setForm({
      fullName: "",
      email: "",
      countryCode: "",
      phone: "",
      course: "",
      experience: "",
      message: "",
    });
  };

  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 pt-20 lg:px-8">
      {/* 🔥 Toast container (must be here once) */}
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-20">
        {/* ================= LEFT SIDE ================= */}
        <div className="space-y-12">
          <div className="space-y-6">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-accent font-label">
              Begin Your Journey
            </span>
            <h1 className="max-w-xl font-headline text-4xl font-extrabold tracking-tight leading-[1.05] text-primary sm:text-5xl lg:text-7xl">
              Enroll with <br />
              <span className="text-accent">Purpose.</span>
            </h1>
            <p className="max-w-md text-lg leading-8 text-foreground/70">
              Take the first step towards spiritual enlightenment. Our expert instructors
              are ready to guide you through your sacred learning journey.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-5 rounded-3xl border border-border bg-secondary/15 p-8 shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white">
                <BookOpen className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h2 className="font-headline text-2xl font-bold text-primary">
                  Personalized Learning
                </h2>
                <p className="text-sm leading-7 text-foreground/65">
                  Tailored courses designed for your pace and spiritual goals.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-3xl bg-primary p-8 text-white shadow-2xl">
              <div className="relative z-10 flex flex-col gap-6">
                <div className="flex items-center justify-between gap-4">
                  <Users className="h-10 w-10 text-secondary" />
                  <span className="rounded-full bg-secondary px-4 py-1 text-xs font-bold uppercase">
                    Expert Guidance
                  </span>
                </div>

                <div>
                  <h2 className="mb-3 font-headline text-3xl font-bold">
                    Certified Instructors
                  </h2>
                  <p className="mb-6 text-sm text-white/75">
                    Learn from qualified scholars with years of teaching experience.
                  </p>

                  <div className="flex items-center gap-3 text-sm text-white/90">
                    <Clock className="h-4 w-4" />
                    <span>Flexible scheduling available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="relative overflow-hidden rounded-3xl border border-border bg-white/80 p-6 shadow-xl sm:p-10 lg:p-16">
          {/* FORM */}
          <form onSubmit={handleSubmit} className="relative z-10 space-y-7">
            <div>
              <label className="mb-3 block text-xs font-bold uppercase text-black">
                Full Name
              </label>
              <input
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                type="text"
                placeholder="Ali Raza"
                className="w-full rounded-2xl border px-5 py-4"
                required
              />
            </div>

            <div>
              <label className="mb-3 block text-xs font-bold uppercase text-black">
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

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-3 block text-xs font-bold uppercase text-black">
                  Country Code
                </label>
                <select
                  name="countryCode"
                  value={form.countryCode}
                  onChange={handleChange}
                  className="w-full rounded-2xl border px-5 py-4 bg-white"
                  required
                >
                  <option value="">Select code</option>
                  {countryCodes.map((code) => (
                    <option key={code} value={code}>
                      {code}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-3 block text-xs font-bold uppercase text-black">
                  Phone Number
                </label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  type="tel"
                  placeholder="1234567890"
                  className="w-full rounded-2xl border px-5 py-4"
                  required
                />
              </div>
            </div>

            <div>
              <label className="mb-3 block text-xs font-bold uppercase text-black">
                Course Selection
              </label>
              <select
                name="course"
                value={form.course}
                onChange={handleChange}
                className="w-full rounded-2xl border px-5 py-4 bg-white"
                required
              >
                <option value="">Select course</option>
                {courses.map((course) => (
                  <option key={course} value={course}>
                    {course}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-3 block text-xs font-bold uppercase text-black">
                Experience Level
              </label>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {experienceLevels.map((level) => (
                  <label key={level} className="flex items-center gap-2 p-3 rounded-2xl border cursor-pointer hover:bg-secondary/10 transition-colors">
                    <input
                      type="radio"
                      name="experience"
                      value={level}
                      checked={form.experience === level}
                      onChange={handleChange}
                      className="w-4 h-4 text-primary border-border focus:ring-accent"
                    />
                    <span className="text-sm font-medium">{level}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="mb-3 block text-xs font-bold uppercase text-black ">
                Additional Notes (Optional)
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                placeholder="Preferred schedule, specific goals, etc..."
                className="w-full resize-none rounded-2xl border px-5 py-4"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-primary py-5 font-bold text-white hover:bg-primary/90 transition-colors"
            >
              {loading ? "Submitting..." : "Enroll Now"}
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}