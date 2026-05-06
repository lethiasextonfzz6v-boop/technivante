'use client';

import React, { useEffect, useRef } from 'react';

const differentiators = [
  {
    title: 'Certified Experience',
    desc: "We've specialized in Drupal since 2005. We're Acquia certified. Use our expertise to plot the right course and ensure future compatibility.",
    stat: '20+',
    statLabel: 'Years in Drupal',
    accent: 'from-sky-500/20 to-blue-600/10',
    border: 'border-sky-500/20',
    textAccent: 'text-sky-400',
  },
  {
    title: 'Performance & Security',
    desc: 'Rigorous adherence to Drupal best practices helps us ensure the best performance and security outcomes for every project.',
    stat: '99.9%',
    statLabel: 'Uptime SLA',
    accent: 'from-violet-500/20 to-purple-600/10',
    border: 'border-violet-500/20',
    textAccent: 'text-violet-400',
  },
  {
    title: 'Systems Integration',
    desc: 'A complete solution often means helping Drupal coexist with the rest of your environment and data — CRMs, ERPs, and beyond.',
    stat: '50+',
    statLabel: 'Integrations Built',
    accent: 'from-emerald-500/20 to-teal-600/10',
    border: 'border-emerald-500/20',
    textAccent: 'text-emerald-400',
  },
  {
    title: 'Client Empowerment',
    desc: "It\'s essential to us that you thrive. We\'ll happily transfer the knowledge and skills necessary to make your team self-sufficient.",
    stat: '100%',
    statLabel: 'Knowledge Transfer',
    accent: 'from-amber-500/20 to-orange-600/10',
    border: 'border-amber-500/20',
    textAccent: 'text-amber-400',
  },
];

export default function DifferenceSection() {
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
      { threshold: 0.08, rootMargin: '0px 0px -60px 0px' }
    );
    const els = sectionRef?.current?.querySelectorAll('.section-reveal, .stagger-child');
    els?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-28 relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(56,189,248,0.3), transparent)' }}
      />
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="section-reveal mb-12 md:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-12 bg-accent" />
            <span className="text-xs uppercase tracking-widest text-accent font-semibold">The Technivante Difference</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground max-w-lg leading-tight">
              Why clients choose{' '}
              <span className="text-gradient-blue">Technivante</span>
            </h2>
            <p className="text-muted-foreground max-w-sm leading-relaxed text-sm md:text-base">
              Two decades of Drupal specialization, certified expertise, and a commitment to your long-term success.
            </p>
          </div>
        </div>

        {/* Cards: asymmetric 2+2 layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {differentiators?.map((item, i) => (
            <div
              key={item?.title}
              className={`stagger-child group relative rounded-2xl border ${item?.border} p-7 md:p-8 bg-gradient-to-br ${item?.accent} backdrop-blur-sm hover:shadow-lg transition-all duration-500`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-5">
                <div>
                  <div className={`text-3xl font-bold ${item?.textAccent} mb-0.5`}>{item?.stat}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{item?.statLabel}</div>
                </div>
                <div className={`text-xs font-bold uppercase tracking-widest ${item?.textAccent} opacity-40`}>
                  0{i + 1}
                </div>
              </div>
              <h3 className={`text-xl font-bold text-foreground mb-3 group-hover:${item?.textAccent} transition-colors duration-300`}>
                {item?.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item?.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}