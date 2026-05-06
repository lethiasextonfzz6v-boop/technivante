import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import WorkSection from './components/WorkSection';
import ServicesSection from './components/ServicesSection';
import DifferenceSection from './components/DifferenceSection';
import TestimonialsSection from './components/TestimonialsSection';
import TeamContactSection from './components/TeamContactSection';

export default function HomePage() {
  return (
    <main className="relative bg-background overflow-x-hidden">
      {/* Noise texture overlay */}
      <div className="fixed inset-0 noise-overlay pointer-events-none z-10 opacity-60" />
      <Header />
      <HeroSection />
      <WorkSection />
      <ServicesSection />
      <DifferenceSection />
      <TestimonialsSection />
      <TeamContactSection />
      <Footer />
    </main>
  );
}