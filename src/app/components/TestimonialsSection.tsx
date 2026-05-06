'use client';

import React, { useEffect, useRef } from 'react';

const testimonials = [
  {
    quote: "The fact that I was able to figure this (and quite a few other things) out inside of 10 minutes is a real testament to the quality of the interface you guys have built for admins. It is HUGE.",
    author: 'Chad Galts',
    role: 'Director of Communications',
    org: 'MIT School of Engineering',
    initials: 'CG',
    color: 'bg-sky-500/20 text-sky-400',
  },
  {
    quote: "Andy continually impresses me with his technical knowledge of website architecture and Drupal. He consistently delivers the expected results on time and on budget. Just as important, he is extremely responsive.",
    author: 'John Craine',
    role: 'COO',
    org: 'Vida Health Communications',
    initials: 'JC',
    color: 'bg-violet-500/20 text-violet-400',
  },
  {
    quote: "I am delighted with the website and the editing features. Excellent. So user friendly. It is a powerful organizational platform.",
    author: 'Traci Hickson',
    role: 'Director of Communications',
    org: 'Future West Virginia',
    initials: 'TH',
    color: 'bg-emerald-500/20 text-emerald-400',
  },
  {
    quote: "I want to say how much we appreciate your rapid responses to all issues we present, big and small. It certainly doesn't go unnoticed and that's why we like having you as our developers.",
    author: 'Bill Litant',
    role: 'Communications Director',
    org: 'Dept. of Aeronautics and Astronautics',
    initials: 'BL',
    color: 'bg-sky-500/20 text-sky-400',
  },
  {
    quote: "Andy listened to our ideas and produced a truly phenomenal website that not only looks great but gives us the flexibility to expand as our collection grows.",
    author: 'Director',
    role: 'Director',
    org: 'Paint By Number Museum',
    initials: 'PN',
    color: 'bg-amber-500/20 text-amber-400',
  },
  {
    quote: "Technivante is a pleasure to work with. They encouraged detailed and disciplined up-front planning. Then delivered the fully functional site on-time, on budget and according to spec.",
    author: 'Steven P. Galante',
    role: 'Editor',
    org: 'CeliacToday.com',
    initials: 'SG',
    color: 'bg-rose-500/20 text-rose-400',
  },
  {
    quote: "Technivante has always delivered what it promised, on time and within budget. Estimates and scheduling were detailed and crystal clear.",
    author: 'Joan Greco',
    role: 'President',
    org: 'My Mighty Team',
    initials: 'JG',
    color: 'bg-teal-500/20 text-teal-400',
  },
  {
    quote: "Technivante has acted as our IT team for our startup for over 2 years. They quickly reworked an existing Drupal site to meet our needs, turning around enhancements efficiently and effectively.",
    author: 'Meg Wirth',
    role: 'CEO & Founder',
    org: 'Maternova',
    initials: 'MW',
    color: 'bg-fuchsia-500/20 text-fuchsia-400',
  },
  {
    quote: "You have enabled us, as a small business, to have one capable and consistent place to go for advice, planning, and action.",
    author: 'Michael Kerstein',
    role: 'Owner',
    org: 'Simons Shoes',
    initials: 'MK',
    color: 'bg-orange-500/20 text-orange-400',
  },
];

// Split testimonials into 3 columns for masonry effect
const col1 = testimonials.filter((_, i) => i % 3 === 0);
const col2 = testimonials.filter((_, i) => i % 3 === 1);
const col3 = testimonials.filter((_, i) => i % 3 === 2);

function TestimonialCard({ t, i }: { t: typeof testimonials[0]; i: number }) {
  return (
    <div
      className="stagger-child glass-card rounded-2xl p-6 hover:border-accent/20 transition-all duration-500 group mb-4 md:mb-5"
      style={{ transitionDelay: `${i * 70}ms` }}
    >
      <div className="text-4xl text-accent/20 font-serif leading-none mb-3 select-none">&ldquo;</div>
      <p className="text-sm text-foreground/80 leading-relaxed mb-5 italic">
        {t.quote}
      </p>
      <div className="flex items-center gap-3">
        <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${t.color}`}>
          {t.initials}
        </div>
        <div>
          <div className="text-sm font-semibold text-foreground">{t.author}</div>
          <div className="text-xs text-muted-foreground">{t.role}, {t.org}</div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);

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
    const els = sectionRef?.current?.querySelectorAll('.section-reveal, .stagger-child');
    els?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section id="testimonials" ref={sectionRef} className="py-20 md:py-28 relative bg-muted/20">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="section-reveal mb-12 md:mb-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-12 bg-accent" />
            <span className="text-xs uppercase tracking-widest text-accent font-semibold">Testimonials</span>
            <span className="h-px w-12 bg-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Trusted by{' '}
            <span className="text-gradient-blue">industry leaders</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed">
            From research institutions to Fortune 500 companies — our clients trust us to deliver.
          </p>
        </div>

        {/* 3-column masonry grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-4 md:gap-5 items-start">
          <div className="flex flex-col">
            {col1.map((t, i) => <TestimonialCard key={t.author + i} t={t} i={i * 3} />)}
          </div>
          <div className="flex flex-col">
            {col2.map((t, i) => <TestimonialCard key={t.author + i} t={t} i={i * 3 + 1} />)}
          </div>
          <div className="flex flex-col">
            {col3.map((t, i) => <TestimonialCard key={t.author + i} t={t} i={i * 3 + 2} />)}
          </div>
        </div>

        {/* Mobile / tablet: single column */}
        <div className="lg:hidden flex flex-col gap-4">
          {testimonials.map((t, i) => <TestimonialCard key={t.author + i} t={t} i={i} />)}
        </div>
      </div>
    </section>
  );
}