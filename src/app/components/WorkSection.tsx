'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

const projects = [
{
  id: 'mit-soe',
  title: 'MIT School of Engineering',
  sub: 'Engagement & Outreach for MIT\'s Future Engineers',
  desc: 'Technivante re-developed the MIT School of Engineering main website and several related sites — built on a common, responsive, mobile-first theme with research scholar profiles, private intranet pages, and automated news import.',
  tags: ['Multi-site', 'Responsive', 'Drupal'],
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_12750b9ff-1765701309480.png",
  alt: 'MIT School of Engineering website — responsive multi-site Drupal platform for research scholars and outreach',
  span: 'col-span-2'
},
{
  id: 'hershey',
  title: "Hershey\'s World Kiosk",
  sub: 'Drupal Powered Touchscreen Experience',
  desc: 'A Drupal-based CMS managing an extensive library of memorabilia, video and audio content, with a compelling touch-enabled Flash front-end.',
  tags: ['Kiosk', 'Web Services', 'Custom Dev'],
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_17d0e9fed-1778094008231.png",
  alt: "Hershey\'s World Kiosk touchscreen interface — interactive memorabilia browser with Drupal-powered web services",
  span: 'col-span-1'
},
{
  id: 'mit-osp',
  title: 'MIT Office of Sponsored Projects',
  sub: 'Facilitating Grant Development & Award Management',
  desc: 'Streamlined grant management workflows and award tracking for one of the world\'s leading research institutions.',
  tags: ['Grant Management', 'Drupal', 'MIT'],
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_1a11040eb-1778094009303.png",
  alt: 'MIT Office of Sponsored Projects — grant development and award management platform built on Drupal',
  span: 'col-span-1'
},
{
  id: 'grand-canyon',
  title: 'Grand Canyon National Park',
  sub: 'Decoupled Drupal Interactive Trip Planner',
  desc: 'A high-resolution touch-screen kiosk helping visitors navigate the Park. Headless Drupal 7 backend, HTML5 front-end, 7 languages, custom mapping utility.',
  tags: ['Decoupled', '7 Languages', 'NPS'],
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_1b0d31e37-1767287263072.png",
  alt: 'Grand Canyon National Park interactive trip planner kiosk — decoupled Drupal with 7-language support and custom mapping',
  span: 'col-span-2'
},
{
  id: 'bloomy',
  title: 'Bloomy Controls',
  sub: 'Outstanding Product Brand & Customer Support',
  desc: 'Responsive Drupal site with exhaustive Resource Library for videos, datasheets, white papers. Custom routing sends form submissions directly to subject matter experts.',
  tags: ['Resource Library', 'CRM Integration', 'Drupal'],
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_1626e22cc-1769480862283.png",
  alt: 'Bloomy Controls responsive Drupal website — resource library with CRM integration and expert routing',
  span: 'col-span-1'
},
{
  id: 'mit-cloud',
  title: 'MIT Drupal Cloud Sites',
  sub: 'Enterprise-Wide Drupal Platform',
  desc: 'A scalable, enterprise-wide Drupal platform enabling dozens of MIT departments to run consistent, manageable websites from a single infrastructure.',
  tags: ['Enterprise', 'Cloud', 'Platform'],
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_14a5e1f41-1778094007086.png",
  alt: 'MIT Drupal Cloud Sites — enterprise-wide platform serving dozens of MIT department websites from shared infrastructure',
  span: 'col-span-1'
},
{
  id: 'mit-aeroastro',
  title: 'MIT AeroAstro',
  sub: "Relaunching America\'s oldest aerospace department",
  desc: "A complete relaunch for MIT\'s Department of Aeronautics and Astronautics — America\'s oldest and most respected university aerospace program.",
  tags: ['Relaunch', 'MIT', 'Drupal'],
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_1a4929b9e-1778094007872.png",
  alt: "MIT AeroAstro department website relaunch — America\'s oldest aerospace program with modern Drupal platform",
  span: 'col-span-1'
}];


export default function WorkSection() {
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
    <section id="work" ref={sectionRef} className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="section-reveal mb-12 md:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-12 bg-accent" />
            <span className="text-xs uppercase tracking-widest text-accent font-semibold">Our Work</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground max-w-xl leading-tight">
              Projects that{' '}
              <span className="text-gradient-blue">define the web</span>
            </h2>
            <p className="text-muted-foreground max-w-sm leading-relaxed text-sm md:text-base">
              From MIT research labs to national parks — we build Drupal solutions that scale and endure.
            </p>
          </div>
        </div>

        {/* Bento Grid */}
        {/* BENTO MAP (3-col grid):
                Row 1: [col-1..2: MIT SOE cs-2] [col-3: Hershey cs-1]
                Row 2: [col-1: MIT OSP cs-1] [col-2..3: Grand Canyon cs-2]
                Row 3: [col-1: Bloomy cs-1] [col-2: MIT Cloud cs-1] [col-3: MIT AeroAstro cs-1]
                Placed 7/7 ✓
             */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {projects?.map((project, i) =>
          <div
            key={project?.id}
            className={`stagger-child group relative rounded-2xl overflow-hidden glass-card card-glow-hover ${
            project?.id === 'mit-soe' || project?.id === 'grand-canyon' ? 'md:col-span-2' : 'md:col-span-1'}`
            }
            style={{ transitionDelay: `${i * 80}ms` }}>
            
              {/* Image */}
              <div className={`relative overflow-hidden ${
            project?.id === 'mit-soe' || project?.id === 'grand-canyon' ? 'h-56 md:h-72' : 'h-48 md:h-56'}`
            }>
                <AppImage
                src={project?.img}
                alt={project?.alt}
                fill
                className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw" />
              
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-5 md:p-6">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project?.tags?.map((tag) =>
                <span
                  key={tag}
                  className="text-xs px-2.5 py-0.5 rounded-full bg-primary/15 text-accent border border-primary/20 font-medium">
                  
                      {tag}
                    </span>
                )}
                </div>
                <h3 className="text-base md:text-lg font-bold text-foreground mb-1 group-hover:text-accent transition-colors duration-300">
                  {project?.title}
                </h3>
                <p className="text-xs text-accent/80 font-medium mb-2">{project?.sub}</p>
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">{project?.desc}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}