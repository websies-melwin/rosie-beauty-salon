import Link from 'next/link';
import { Button } from '../ui/Button';

export function AboutCTA() {
  return (
    <section className="w-full bg-gradient-to-r from-accent-gold/20 via-light-yellow/30 to-accent-gold/20 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-xl md:text-2xl font-serif font-semibold text-dark-gray mb-6">
          Discover Your Natural Radiance
        </h2>

        <Link href="/">
          <Button
            text="Explore Services"
            size="large"
            variant="secondary"
          />
        </Link>
      </div>
    </section>
  );
}
