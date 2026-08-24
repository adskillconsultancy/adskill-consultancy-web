"use client";

import { useState, useEffect, useRef } from "react";
import { Mail, MapPin, Phone, Send, CalendarClock, MessageCircle } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/lib/useFadeIn";

function IconFacebook({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function IconInstagram({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

function IconTikTok({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v7.2c0 1.91-.65 3.8-1.85 5.25-1.21 1.48-2.92 2.45-4.8 2.78-1.87.34-3.83-.06-5.43-1.07-1.63-1.03-2.86-2.58-3.41-4.42-.55-1.85-.38-3.87.49-5.59.88-1.74 2.45-3.09 4.31-3.72 1.83-.62 3.84-.66 5.68-.07v4.12c-.5-.22-1.05-.33-1.6-.33-1.43 0-2.73.83-3.33 2.12-.6 1.3-.43 2.85.45 3.99.88 1.13 2.4 1.63 3.84 1.25 1.44-.37 2.47-1.61 2.59-3.09V.02h-1.01z"/>
    </svg>
  );
}

function IconLinkedIn({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const socials = [
  { name: "Facebook", href: "https://www.facebook.com/AdskillConsultancyINC", Icon: IconFacebook },
  { name: "Instagram", href: "https://www.instagram.com/adskillconsultancyinc/", Icon: IconInstagram },
  { name: "TikTok", href: "https://www.tiktok.com/@adskill.consultancy", Icon: IconTikTok },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/adskillconsultancyinc/posts/?feedView=all", Icon: IconLinkedIn },
];

const contactInfo = [
  { icon: MapPin, label: "Address", value: "37-13 74th Street, Floor 2<br/>Jackson Heights, NY 11372", href: "https://maps.google.com/?q=37-13+74th+Street+Jackson+Heights+NY+11372" },
  { icon: Phone, label: "Phone", value: "+1 646-772-8544", href: "tel:+16467728544" },
  { icon: MessageCircle, label: "WhatsApp", value: "+1 646-772-8544", href: "https://wa.me/16467728544" },
  { icon: Mail, label: "Email", value: "adskillconsultancyinc@gmail.com", href: "mailto:adskillconsultancyinc@gmail.com" },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSubmitted(true);
        setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        const data = await res.json();
        setErrorMsg(data.error || "Something went wrong.");
      }
    } catch (err) {
      setErrorMsg("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const heroRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let ticking = false;

    const updateScale = () => {
      if (!bgRef.current) return;
      const scrollY = window.scrollY;
      
      // Extremely eye-catching dramatic zoom IN
      // Starts at 1.0x, rapidly zooms in to 1.6x over 500px of scrolling
      const scale = 1 + Math.min(scrollY / 500, 1) * 0.6;
      
      bgRef.current.style.transform = `scale(${scale})`;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScale);
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-[#f8f9fa]">
      {/* Hero */}
      <section ref={heroRef} className="relative overflow-hidden min-h-[35vh] lg:min-h-[40vh] flex items-start pt-28 pb-12">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            ref={bgRef}
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1920&auto=format&fit=crop"
            alt="Office background"
            className="w-full h-full object-cover"
            // Snappy but smooth easing for the dramatic zoom
            style={{ transform: "scale(1)", transition: "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)" }}
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-brand-dark/80" />
        </div>

        {/* Decorative dots */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <div className="max-w-[1440px] w-full mx-auto px-6 lg:px-12 relative z-10 text-left">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-semibold mb-4 animate-float-y">Contact Us</span>
          <h1 className="text-3xl md:text-4xl lg:text-[46px] font-bold text-white leading-[1.1] mb-4">
            Let&rsquo;s Start Your <span className="text-brand-primary">Immigration</span> Journey
          </h1>
          <p className="text-base lg:text-lg text-gray-300 max-w-2xl">
            Reach out for a free consultation. Our team is ready to guide you through every step.
          </p>
        </div>
      </section>

      {/* Redesigned Contact Section */}
      <div className="relative bg-[#f8f9fa] overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-40 left-0 w-[600px] h-[600px] bg-brand-dark/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(10, 35, 66, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(10, 35, 66, 0.15) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <FadeIn>
          <section className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 py-16 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
              
              {/* Left Column: Contact Cards */}
              <div className="lg:col-span-4 flex flex-col gap-6">
                <div className="grid gap-4">
                  {contactInfo.map((item, i) => (
                    <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="group relative bg-white/70 backdrop-blur-xl rounded-2xl p-6 border border-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                      <div className="absolute top-0 left-0 w-1 h-full bg-brand-primary/20 group-hover:bg-brand-primary transition-colors duration-300" />
                      <div className="flex items-start gap-5">
                        <div className="shrink-0 w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary group-hover:scale-110 transition-transform duration-300">
                          <item.icon size={22} strokeWidth={2.5} />
                        </div>
                        <div>
                          <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">{item.label}</p>
                          <p className="text-brand-dark font-medium text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: item.value }} />
                        </div>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Social Links */}
                <div className="bg-brand-dark rounded-2xl p-6 shadow-xl relative overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-primary/20 rounded-full blur-2xl" />
                  <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-4">Follow Us</p>
                  <div className="flex items-center gap-3">
                    {socials.map((s) => (
                      <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name} className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white hover:bg-brand-primary hover:text-brand-dark hover:scale-110 transition-all duration-300 border border-white/10 hover:border-brand-primary">
                        <s.Icon size={18} />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Calendly CTA */}
                <a href="https://calendly.com/adskillconsultancyinc/30-minutes-consulation" target="_blank" rel="noopener noreferrer" className="group relative bg-gradient-to-br from-brand-primary to-brand-secondary text-brand-dark rounded-2xl p-6 text-center overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <p className="font-bold text-lg mb-1 flex items-center justify-center gap-2">
                      <CalendarClock size={20} className="animate-pulse" /> Book Consultation
                    </p>
                    <p className="text-xs font-medium opacity-80">30 Min Strategy Session via Calendly</p>
                  </div>
                </a>
              </div>

              {/* Right Column: Premium Form */}
              <div className="lg:col-span-8">
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-white shadow-xl relative">
                  {/* Form Glow */}
                  <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-brand-primary/5 rounded-full blur-3xl pointer-events-none" />
                  
                  {submitted ? (
                    <div className="flex flex-col items-center justify-center py-20 text-center animate-in fade-in zoom-in duration-500">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-green-400 to-green-500 flex items-center justify-center text-white mb-6 shadow-lg shadow-green-500/30">
                        <svg width={36} height={36} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                      </div>
                      <h3 className="text-3xl font-bold text-brand-dark mb-3">Message Sent!</h3>
                      <p className="text-gray-500 max-w-md mx-auto">Thank you for reaching out. Our immigration experts will review your details and contact you within 24 hours.</p>
                      <button onClick={() => setSubmitted(false)} className="mt-8 px-6 py-2.5 rounded-full bg-gray-100 text-brand-dark font-semibold text-sm hover:bg-gray-200 transition-colors">Send another message</button>
                    </div>
                  ) : (
                    <div className="relative z-10">
                      <div className="mb-10">
                        <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark mb-3">Send Us a Message</h2>
                        <p className="text-gray-500">Fill out the form below and our team will respond promptly.</p>
                        {errorMsg && (
                          <div className="mt-4 p-3 bg-red-50 text-red-600 rounded-lg text-sm font-medium border border-red-100">
                            {errorMsg}
                          </div>
                        )}
                      </div>
                      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-1.5">
                            <label className="text-sm font-semibold text-brand-dark ml-1">Full Name *</label>
                            <input type="text" name="name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="John Doe" className="w-full px-5 py-3.5 rounded-xl bg-gray-50/50 border border-gray-200 text-sm focus:outline-none focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 focus:bg-white transition-all placeholder:text-gray-400 font-medium" />
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-sm font-semibold text-brand-dark ml-1">Email Address *</label>
                            <input type="email" name="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" className="w-full px-5 py-3.5 rounded-xl bg-gray-50/50 border border-gray-200 text-sm focus:outline-none focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 focus:bg-white transition-all placeholder:text-gray-400 font-medium" />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-1.5">
                            <label className="text-sm font-semibold text-brand-dark ml-1">Phone Number</label>
                            <input type="tel" name="phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value.replace(/[^0-9+\-()\s]/g, '') })} placeholder="+1 (555) 000-0000" className="w-full px-5 py-3.5 rounded-xl bg-gray-50/50 border border-gray-200 text-sm focus:outline-none focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 focus:bg-white transition-all placeholder:text-gray-400 font-medium" />
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-sm font-semibold text-brand-dark ml-1">Subject</label>
                            <input type="text" name="subject" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} placeholder="How can we help?" className="w-full px-5 py-3.5 rounded-xl bg-gray-50/50 border border-gray-200 text-sm focus:outline-none focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 focus:bg-white transition-all placeholder:text-gray-400 font-medium" />
                          </div>
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-sm font-semibold text-brand-dark ml-1">Your Message *</label>
                          <textarea required name="message" rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us about your situation..." className="w-full px-5 py-4 rounded-xl bg-gray-50/50 border border-gray-200 text-sm focus:outline-none focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 focus:bg-white transition-all resize-none placeholder:text-gray-400 font-medium" />
                        </div>
                        <button type="submit" disabled={isSubmitting} className="group inline-flex items-center justify-center gap-2 bg-brand-dark text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-primary hover:text-brand-dark transition-all duration-300 shadow-lg hover:shadow-brand-primary/25 mt-2 overflow-hidden relative disabled:opacity-70 disabled:cursor-not-allowed">
                          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                          <span className="relative z-10 flex items-center gap-2">
                            {isSubmitting ? "Sending..." : "Send Message"}
                            {!isSubmitting && <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />}
                          </span>
                        </button>
                      </form>
                    </div>
                  )}
                </div>
              </div>

            </div>
          </section>
        </FadeIn>

        {/* Floating Map Section */}
        <FadeIn delay={0.2}>
          <section className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 pb-24">
            <div className="bg-white/60 backdrop-blur-xl rounded-[2rem] p-4 lg:p-6 border border-white shadow-2xl shadow-brand-dark/5">
              <div className="rounded-2xl overflow-hidden h-[400px] lg:h-[500px] relative">
                {/* Map Overlay Glow */}
                <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl pointer-events-none" />
                <iframe
                  src="https://maps.google.com/maps?q=37-13%2074th%20Street,%20Jackson%20Heights,%20NY%2011372&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="AdSkill Consultancy Location"
                  className="grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </section>
        </FadeIn>
      </div>
    </main>
  );
}
