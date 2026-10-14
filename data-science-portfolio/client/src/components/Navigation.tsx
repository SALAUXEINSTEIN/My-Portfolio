/**
 * Navigation Component
 * Design: Modern Academic + Data-Driven Minimalism
 * - Clean, professional header with accent teal highlights
 * - Smooth hover transitions with underline animations
 * - Responsive mobile menu with smooth transitions
 */

import { useState } from 'react';
import { Link } from 'wouter';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'CV', href: '/cv' },
    { label: 'Projects', href: '/projects' },
    { label: 'Services', href: '/services' },
    { label: 'Training', href: '/training' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-subtle">
      <div className="container flex items-center justify-between py-4">
        {/* Logo/Brand */}
        <Link href="/">
          <a className="no-underline flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg" style={{ fontFamily: 'Playfair Display, serif' }}>AS</span>
            </div>
            <span className="hidden sm:inline font-bold text-lg text-primary group-hover:text-accent transition-smooth" style={{ fontFamily: 'Playfair Display, serif' }}>
              Ayobami Salau
            </span>
          </a>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <a className="no-underline text-foreground hover:text-accent transition-smooth font-medium text-sm">
                {item.label}
              </a>
            </Link>
          ))}
        </div>

        {/* CTA Button - Desktop */}
        <div className="hidden md:block">
          <Link href="/contact">
            <a className="no-underline">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Get in Touch
              </Button>
            </a>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-secondary rounded-lg transition-smooth"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-foreground" />
          ) : (
            <Menu className="w-6 h-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="container py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a
                  className="no-underline text-foreground hover:text-accent transition-smooth font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </Link>
            ))}
            <Link href="/contact">
              <a className="no-underline" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  Get in Touch
                </Button>
              </a>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
