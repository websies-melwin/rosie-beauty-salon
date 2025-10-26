import { Button } from '../ui/Button';

export function LaserCTA() {
  return (
    <section className="w-full bg-gradient-to-r from-accent-gold/20 via-light-yellow/30 to-accent-gold/20 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-serif font-semibold text-dark-gray mb-6">
          Ready for Smooth, Hair-Free Skin?
        </h2>

        <Button
          text="Book Now"
          size="large"
          variant="primary"
        />
      </div>
    </section>
  );
}
