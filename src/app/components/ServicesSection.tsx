'use client';

import React, { useEffect, useRef } from 'react';

const services = [
  {
    number: '01',
    title: 'Strategy',
    icon: 'orbit',
    color: 'text-sky-400',
    items: [
      'Requirements analysis & architecture',
      'Existing site review & audit',
      'Application performance monitoring',
      'Internet marketing',
      'Security best-practices',
      'Search engine optimization',
    ],
  },
  {
    number: '02',
    title: 'Design',
    icon: 'wave',
    color: 'text-violet-400',
    items: [
      'Creative direction and branding',
      'Responsive design',
      'UI / UX design',
      'Native app design',
      'Custom Drupal themes',
    ],
  },
  {
    number: '03',
    title: 'Engineering',
    icon: 'relay',
    color: 'text-emerald-400',
    items: [
      'Drupal module & feature development',
      'Drupal migrations',
      'E-commerce development',
      'Native app development',
      'Systems integration',
      'Custom web services',
      'Multi-language web applications',
    ],
  },
  {
    number: '04',
    title: 'DevOps',
    icon: 'pulse',
    color: 'text-amber-400',
    items: [
      'Managed/Enterprise hosting',
      'Drupal cloud hosting',
      'Security optimization',
      'Performance optimization',
      'Version control',
      'Continuous integration',
    ],
  },
];

function ServiceIcon({ variant, color }: { variant: string; color: string }) {
  return (
    <div
      className={`relative flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-white/5 overflow-hidden ${color}`}
    >
      {variant === 'orbit' && (
        <span className="icon-orbit absolute inset-0 flex items-center justify-center">
          <span />
        </span>
      )}
      {variant === 'wave' && (
        <span className="icon-wave absolute inset-0 flex items-center justify-center">
          <span />
        </span>
      )}
      {variant === 'relay' && (
        <span className="icon-relay absolute inset-0 flex items-center justify-center">
          <span />
        </span>
      )}
      {variant === 'pulse' && (
        <span className="icon-pulse absolute inset-0 flex items-center justify-center">
          <span />
        </span>
      )}
      <div className="w-2 h-2 rounded-full bg-current opacity-80 relative z-10" />
    </div>
  );
}

export default function ServicesSection() {
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
    const els = sectionRef.current?.querySelectorAll('.section-reveal, .stagger-child');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-20 md:py-28 relative bg-muted/30">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="section-reveal mb-12 md:mb-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-12 bg-accent" />
            <span className="text-xs uppercase tracking-widest text-accent font-semibold">What We Do</span>
            <span className="h-px w-12 bg-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Full-service{' '}
            <span className="text-gradient-blue">Drupal expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            We cultivate long-term relationships with our clients, delivering across the full spectrum of digital development.
          </p>
        </div>

        {/* 4-column services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <article
              key={service.title}
              className="stagger-child glass-card rounded-2xl p-6 hover:border-accent/20 transition-all duration-500 group"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Icon + number */}
              <div className="flex items-start justify-between mb-5">
                <ServiceIcon variant={service.icon} color={service.color} />
                <span className="text-xs font-bold text-muted-foreground/40 tracking-widest uppercase">
                  {service.number}
                </span>
              </div>

              <h3 className={`text-xl font-bold mb-4 ${service.color} transition-colors duration-300`}>
                {service.title}
              </h3>

              <ul className="space-y-2">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-accent/60 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}