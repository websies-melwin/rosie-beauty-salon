import { Button } from '../ui/Button';

export function GalleryCTA() {
  return (
    <section className="w-full bg-gradient-to-r from-accent-gold/20 via-light-yellow/30 to-accent-gold/20 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-serif font-semibold text-dark-gray mb-3">
          Ready to Transform Your Skin?
        </h2>
        <p className="text-base md:text-lg font-sans text-medium-gray mb-6">
          Join our satisfied clients and see real results
        </p>

        <Button
          text="Book Your Appointment"
          size="large"
          variant="primary"
        />
      </div>
    </section>
  );
}
