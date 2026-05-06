import React from 'react';


const footerLinks = [
  { label: 'Our Work', href: '#work' },
  { label: 'What We Do', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-primary flex items-center justify-center shrink-0">
            <svg width="12" height="12" viewBox="0 0 18 18" fill="none" className="text-white">
              <path d="M9 2L15.5 5.75V12.25L9 16L2.5 12.25V5.75L9 2Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              <path d="M9 6L12 7.75V11.25L9 13L6 11.25V7.75L9 6Z" fill="currentColor"/>
            </svg>
          </div>
          <span className="text-sm font-semibold text-foreground">Technivante</span>
        </div>

        {/* Links */}
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {footerLinks?.map((link, i) => (
            <React.Fragment key={link?.label}>
              <a
                href={link?.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {link?.label}
              </a>
              {i < footerLinks?.length - 1 && (
                <span className="text-border text-sm hidden sm:inline">·</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Copyright */}
        <div className="flex items-center">
          <span className="text-muted-foreground text-xs">© 2026 Technivante</span>
        </div>
      </div>
    </footer>
  );
}