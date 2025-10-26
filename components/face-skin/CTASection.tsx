import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export function CTASection() {
  return (
    <section className="w-full bg-gradient-to-r from-accent-gold/20 via-light-yellow/30 to-accent-gold/20 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Optional Tagline */}
        <h2 className="text-2xl md:text-3xl font-serif font-semibold text-dark-gray mb-6">
          Ready to Transform Your Skin?
        </h2>

        {/* CTA Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-3 border-2 border-accent-gold text-accent-gold font-sans font-medium rounded-full hover:bg-accent-gold hover:text-white transition-colors"
        >
          Explore Services
          <ArrowUpRight className="h-5 w-5" />
        </Link>
      </div>
    </section>
  );
}
