'use client';

import React, { useState, useEffect, useCallback } from 'react';
import AppImage from '@/components/ui/AppImage';

const slides = [
{
  eyebrow: 'Since 2005',
  headline: 'Expert Drupal Migrations',
  sub: 'Upgrading Drupal? Migrating from another CMS? We have you covered.'
},
{
  eyebrow: 'Decoupled Architecture',
  headline: 'Decoupled Drupal',
  sub: 'We build decoupled Drupal solutions, including touchscreen kiosks for the Grand Canyon.'
},
{
  eyebrow: 'Enterprise Grade',
  headline: 'Empowering the Enterprise',
  sub: 'If your organization relies on Drupal for mission-critical processes, you may benefit from enterprise Drupal — no matter your size.'
}];


const heroCards = [
{
  label: 'Bakery',
  title: 'MIT School of Engineering',
  sub: 'Responsive, multi-site Drupal platform',
  img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
  alt: 'Modern university engineering building with glass facade, bright natural light, clean architectural lines, airy academic environment',
  tag: 'Education'
},
{
  label: 'Center',
  title: 'Grand Canyon NPS',
  sub: 'Decoupled Drupal kiosk — 7 languages',
  img: 'https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?q=80&w=800&auto=format&fit=crop',
  alt: 'Grand Canyon panoramic vista at sunrise, warm golden light, dramatic geological formations, vast open landscape',
  tag: 'Government'
},
{
  label: 'Right',
  title: "Hershey\'s World Kiosk",
  sub: 'Touch-screen experience with custom web services',
  img: 'https://images.unsplash.com/photo-1606312619070-d48b9c7512ea?q=80&w=800&auto=format&fit=crop',
  alt: 'Interactive touchscreen display in modern retail environment, bright colorful interface, visitors engaging with digital content',
  tag: 'Retail'
}];


export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [animState, setAnimState] = useState<'idle' | 'exiting' | 'entering'>('idle');

  const goToSlide = useCallback((next: number) => {
    setAnimState('exiting');
    setTimeout(() => {
      setCurrent(next);
      setAnimState('entering');
      setTimeout(() => setAnimState('idle'), 700);
    }, 450);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      goToSlide((current + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [current, goToSlide]);

  const slide = slides[current];

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
      {/* Atmospheric background */}
      <div className="absolute inset-0 hero-glow" />
      <div className="absolute inset-0 grid-pattern" />

      {/* Ambient orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 rounded-full animate-ambient pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(21,87,176,0.2) 0%, transparent 70%)' }} />
      
      <div
        className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-72 md:h-72 rounded-full animate-ambient pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.12) 0%, transparent 70%)', animationDelay: '3s' }} />
      

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-16 md:py-24">
        {/* Text content */}
        <div className="text-center mb-14 md:mb-20">
          <div
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 mb-6 transition-all duration-500 ${
            animState === 'exiting' ? 'opacity-0 -translate-y-2' : 'opacity-100 translate-y-0'}`
            }>
            
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              {slide.eyebrow}
            </span>
          </div>

          <h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 transition-all duration-500 ${
            animState === 'exiting' ? 'opacity-0 -translate-y-4 blur-sm' :
            animState === 'entering' ? 'hero-text-slide' : 'opacity-100'}`
            }>
            
            <span className="text-gradient-subtle">{slide.headline}</span>
          </h1>

          <p
            className={`text-base md:text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed mb-10 transition-all duration-500 delay-100 ${
            animState === 'exiting' ? 'opacity-0 translate-y-2' : 'opacity-100'}`
            }>
            
            {slide.sub}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="shine-btn w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-base hover:bg-primary/90 transition-all duration-300 shadow-xl shadow-primary/20">
              
              Free Site Assessment
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#work"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-border text-foreground rounded-full font-semibold text-base hover:bg-white/10 transition-all duration-300">
              
              View Our Work
            </a>
          </div>

          {/* Slide indicators */}
          <div className="flex items-center justify-center gap-2 mt-10">
            {slides.map((_, i) =>
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`rounded-full transition-all duration-400 ${
              i === current ?
              'w-8 h-2 bg-accent' : 'w-2 h-2 bg-muted-foreground/30 hover:bg-muted-foreground/60'}`
              }
              aria-label={`Go to slide ${i + 1}`} />

            )}
          </div>
        </div>

        {/* Floating project cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto">
          {heroCards.map((card, i) =>
          <div
            key={card.title}
            className={`group relative rounded-2xl overflow-hidden glass-card card-glow-hover hero-card-enter opacity-0 ${
            i === 1 ? 'md:-mt-8 z-20' : 'z-10'}`
            }
            style={{ animationDelay: `${0.4 + i * 0.15}s`, animationFillMode: 'forwards' }}>
            
              <div className={`relative overflow-hidden ${i === 1 ? 'h-72 md:h-80' : 'h-60 md:h-64'}`}>
                <AppImage
                src={card.img}
                alt={card.alt}
                fill
                className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
                sizes="(max-width: 768px) 100vw, 33vw" />
              
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-accent/15 border border-accent/20 text-accent text-xs font-semibold backdrop-blur-sm">
                  {card.tag}
                </div>
              </div>
              <div className="p-5">
                <div className="w-8 h-px bg-accent mb-3 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                <h3 className="text-base font-semibold text-foreground mb-1">{card.title}</h3>
                <p className="text-xs text-muted-foreground font-light leading-relaxed">{card.sub}</p>
              </div>
            </div>
          )}
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mt-14 md:mt-16 pt-10 md:pt-12 border-t border-border/50">
          {[
          { val: '20+', label: 'Years of Drupal' },
          { val: 'Acquia', label: 'Certified Partner' },
          { val: 'MIT', label: 'Trusted By' },
          { val: '2005', label: 'Founded' }].
          map((badge) =>
          <div key={badge.label} className="text-center">
              <div className="text-xl md:text-2xl font-bold text-accent">{badge.val}</div>
              <div className="text-xs text-muted-foreground mt-0.5 uppercase tracking-wider">{badge.label}</div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>);

}