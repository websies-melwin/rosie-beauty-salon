'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';

const navigationLinks = [
  { href: '/', label: 'Home' },
  { href: '/face-skin', label: 'Face & Skin' },
  { href: '/laser-hair-removal', label: 'Laser Hair Removal' },
  { href: '/gallery', label: 'Before & After' },
  { href: '/about', label: 'About Me' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    // Scroll to footer
    const footer = document.querySelector('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-light-yellow shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={link.href === '#contact' ? handleContactClick : undefined}
                className={`text-base md:text-lg font-serif font-bold transition-colors ${
                  isActive(link.href)
                    ? 'text-accent-gold'
                    : 'text-dark-gray hover:text-accent-gold'
                }`}
                aria-current={isActive(link.href) ? 'page' : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Salon Name */}
          <div className="flex items-center">
            <span className="text-xl md:text-2xl font-serif font-bold text-dark-gray">
              Rosie Beauty Salon
            </span>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-dark-gray hover:text-accent-gold hover:bg-beige transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Mobile Navigation Panel */}
          <div className="fixed top-16 right-0 bottom-0 w-64 bg-light-yellow shadow-xl z-50 md:hidden overflow-y-auto">
            <nav className="flex flex-col p-6 space-y-4">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    if (link.href === '#contact') {
                      handleContactClick(e);
                    } else {
                      setMobileMenuOpen(false);
                    }
                  }}
                  className={`text-base font-serif font-medium py-2 transition-colors ${
                    isActive(link.href)
                      ? 'text-accent-gold font-semibold'
                      : 'text-dark-gray hover:text-accent-gold'
                  }`}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile Book Now Button */}
              <div className="pt-4 border-t border-beige">
                <Button text="Book Now" className="w-full" href="/booking" />
              </div>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
