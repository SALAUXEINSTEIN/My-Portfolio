/**
 * Footer Component
 * Design: Modern Academic + Data-Driven Minimalism
 * - Professional footer with links and contact info
 * - Social media links
 * - Copyright and attribution
 */

import { Mail, Linkedin, Github } from 'lucide-react';
import { Link } from 'wouter';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Navigation',
      links: [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Projects', href: '/projects' },
        { label: 'Services', href: '/services' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'CV', href: '/cv' },
        { label: 'Training', href: '/training' },
        { label: 'Contact', href: '/contact' },
      ],
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/ayobami-salau-199a33199/',
      color: 'hover:text-blue-600',
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/SALAUXEINSTEIN',
      color: 'hover:text-gray-800',
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:a.salau1996@gmail.com',
      color: 'hover:text-accent',
    },
  ];

  return (
    <footer className="bg-primary text-primary-foreground border-t border-primary/20">
      <div className="container py-16 md:py-20">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>AS</span>
              </div>
              <span className="font-bold text-lg" style={{ fontFamily: 'Playfair Display, serif' }}>Ayobami Salau</span>
            </div>
            <p className="text-primary-foreground/70 text-sm">
              AI Developer, machine learning engineer, and technical instructor in Lagos, Nigeria.
            </p>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <Link href={link.href}>
                      <a className="no-underline text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                        {link.label}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex gap-3">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline"
                    aria-label={link.label}
                  >
                    <div className={`w-9 h-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-smooth ${link.color}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/70">
            <p>
              &copy; {currentYear} Ayobami Muhammed Salau.
            </p>
            <p>
              AI development · Machine learning · Technical education
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
