'use client';

import React, { useEffect, useRef, useState } from 'react';
import AppImage from '@/components/ui/AppImage';

const team = [
{
  name: 'Andy Young',
  role: 'Founder & CEO',
  bio: 'Over 20 years of IT, software, and consulting experience. Built his first website in 1996 while studying computer science at the University of Chicago. Founded Technivante in 2005.',
  img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
  alt: 'Professional headshot of male executive, neutral background, confident expression, business attire, well-lit studio portrait',
  initials: 'AY'
},
{
  name: 'Pravin Ajaaz',
  role: 'Senior Drupal Architect',
  bio: 'Over 9 years of Drupal experience from version 5. Specializes in migrations, third-party integrations, and custom module development across education, legal, finance, and healthcare.',
  img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop',
  alt: 'Professional headshot of male software architect, neutral background, focused expression, business casual, well-lit portrait',
  initials: 'PA'
},
{
  name: 'Sevvel Sundaramoorthy',
  role: 'Project Manager',
  bio: '7+ years in Project Management with global clients. Agile expert who aligns Drupal projects with business goals, delivering on time and on budget. Bridges tech, business, and finance.',
  img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
  alt: 'Professional headshot of male project manager, neutral background, approachable expression, business casual attire, natural light',
  initials: 'SS'
},
{
  name: 'Stanly Kennady',
  role: 'Business Development',
  bio: 'Keen ability to identify client needs and translate them into tailored Drupal-based strategies. Client-centric approach with a reputation for outstanding service.',
  img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop',
  alt: 'Professional headshot of male business developer, neutral background, friendly expression, smart casual attire, well-lit portrait',
  initials: 'SK'
}];


interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  siteUrl: string;
  message: string;
  timeline: string;
  status: string;
  budget: string;
}

const initialForm: FormData = {
  name: '',
  email: '',
  phone: '',
  company: '',
  siteUrl: '',
  message: '',
  timeline: '',
  status: '',
  budget: ''
};

export default function TeamContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
    );
    const els = sectionRef.current?.querySelectorAll('.section-reveal, .stagger-child');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';else
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Invalid email address';
    if (!form.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setForm(initialForm);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section ref={sectionRef} className="py-20 md:py-28 relative">
      {/* Ambient glow */}
      <div
        className="absolute bottom-0 right-0 w-96 h-96 pointer-events-none opacity-20"
        style={{ background: 'radial-gradient(circle, rgba(21,87,176,0.4) 0%, transparent 70%)' }} />
      

      <div className="max-w-7xl mx-auto px-6">
        {/* About header */}
        <div id="about" className="section-reveal mb-12 md:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-12 bg-accent" />
            <span className="text-xs uppercase tracking-widest text-accent font-semibold">About</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground max-w-xl leading-tight">
              The team behind{' '}
              <span className="text-gradient-blue">Technivante</span>
            </h2>
            <p className="text-muted-foreground max-w-sm leading-relaxed text-sm md:text-base">
              A full-service web design and development agency, specializing in Drupal since 2005.
            </p>
          </div>
        </div>

        {/* Split layout: Team left, Contact right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Team bios */}
          <div className="flex flex-col gap-5">
            {team.map((member, i) =>
            <div
              key={member.name}
              className="stagger-child group glass-card rounded-2xl p-5 flex gap-4 hover:border-accent/20 transition-all duration-500"
              style={{ transitionDelay: `${i * 80}ms` }}>
              
                <div className="relative w-14 h-14 rounded-xl overflow-hidden shrink-0">
                  <AppImage
                  src={member.img}
                  alt={member.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="56px" />
                
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="text-sm font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                      {member.name}
                    </h3>
                    <span className="text-xs text-accent/70 font-medium shrink-0">{member.role}</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{member.bio}</p>
                </div>
              </div>
            )}

            {/* Agency blurb */}
            <div className="stagger-child glass-card rounded-2xl p-6 border-accent/10" style={{ transitionDelay: '320ms' }}>
              <h3 className="text-base font-bold text-foreground mb-2">Technivante</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                A full-service web design and development agency, specializing in Drupal since 2005. We help clients of all sizes leverage open source technologies to build compelling web applications and services.
              </p>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent shrink-0">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                10880 Baur Blvd, St. Louis, MO 63132
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div id="contact" className="section-reveal">
            <div className="glass-card rounded-2xl p-7 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-1">Get in touch</h2>
              <p className="text-sm text-muted-foreground mb-7">
                Tell us about your project. We&apos;ll respond with a free assessment.
              </p>

              {submitted ?
              <div className="flex flex-col items-center justify-center py-12 gap-4 text-center">
                  <div className="w-14 h-14 rounded-full bg-accent/15 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-foreground">Message sent!</h3>
                  <p className="text-sm text-muted-foreground max-w-xs">
                    Thank you for reaching out. We&apos;ll review your project and get back to you shortly.
                  </p>
                  <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-sm text-accent underline hover:no-underline">
                  
                    Send another message
                  </button>
                </div> :

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                        Your name <span className="text-accent">*</span>
                      </label>
                      <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className={`w-full px-4 py-2.5 rounded-lg bg-input border text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring/50 transition-all ${
                      errors.name ? 'border-rose-500/60' : 'border-border'}`
                      } />
                    
                      {errors.name && <p className="mt-1 text-xs text-rose-400">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                        Email address <span className="text-accent">*</span>
                      </label>
                      <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      className={`w-full px-4 py-2.5 rounded-lg bg-input border text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring/50 transition-all ${
                      errors.email ? 'border-rose-500/60' : 'border-border'}`
                      } />
                    
                      {errors.email && <p className="mt-1 text-xs text-rose-400">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Phone + Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-muted-foreground mb-1.5">Phone number</label>
                      <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-2.5 rounded-lg bg-input border border-border text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring/50 transition-all" />
                    
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-muted-foreground mb-1.5">Company</label>
                      <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your organization"
                      className="w-full px-4 py-2.5 rounded-lg bg-input border border-border text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring/50 transition-all" />
                    
                    </div>
                  </div>

                  {/* Site URL */}
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-1.5">Site URL</label>
                    <input
                    type="url"
                    name="siteUrl"
                    value={form.siteUrl}
                    onChange={handleChange}
                    placeholder="https://yoursite.com"
                    className="w-full px-4 py-2.5 rounded-lg bg-input border border-border text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring/50 transition-all" />
                  
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                      Message <span className="text-accent">*</span>
                    </label>
                    <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Tell us about your project..."
                    className={`w-full px-4 py-2.5 rounded-lg bg-input border text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring/50 transition-all resize-none ${
                    errors.message ? 'border-rose-500/60' : 'border-border'}`
                    } />
                  
                    {errors.message && <p className="mt-1 text-xs text-rose-400">{errors.message}</p>}
                  </div>

                  {/* Selects row */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-muted-foreground mb-1.5">Timeline</label>
                      <select
                      name="timeline"
                      value={form.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg bg-input border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring/50 transition-all">
                      
                        <option value="">Select...</option>
                        <option value="0-3">0–3 months</option>
                        <option value="3-6">3–6 months</option>
                        <option value="6+">6+ months</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-muted-foreground mb-1.5">Status</label>
                      <select
                      name="status"
                      value={form.status}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg bg-input border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring/50 transition-all">
                      
                        <option value="">Select...</option>
                        <option value="planning">Planning stages</option>
                        <option value="ready">Ready to build</option>
                        <option value="launched">Already launched</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-muted-foreground mb-1.5">Budget</label>
                      <select
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg bg-input border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring/50 transition-all">
                      
                        <option value="">Select...</option>
                        <option value="under-10k">Under $10,000</option>
                        <option value="10-25k">$10,000–$25,000</option>
                        <option value="25-50k">$25,000–$50,000</option>
                        <option value="50-100k">$50,000–$100,000</option>
                        <option value="100k+">$100,000 and above</option>
                      </select>
                    </div>
                  </div>

                  {/* Submit */}
                  <button
                  type="submit"
                  className="shine-btn w-full flex items-center justify-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground rounded-full font-semibold text-sm hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/20 mt-2">
                  
                    Send message
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                    </svg>
                  </button>

                  <p className="text-xs text-muted-foreground text-center pt-1">
                    Or email us at{' '}
                    <a href="mailto:help@technivante.com" className="text-accent hover:underline">
                      help@technivante.com
                    </a>
                  </p>
                </form>
              }
            </div>
          </div>
        </div>
      </div>
    </section>);

}