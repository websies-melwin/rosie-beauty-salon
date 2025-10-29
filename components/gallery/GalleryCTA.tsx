import { Button } from '../ui/Button';
import { Sparkles } from 'lucide-react';

export function GalleryCTA() {
  return (
    <section className="w-full bg-gradient-to-r from-accent-gold/20 via-light-yellow/30 to-accent-gold/20 py-16 md:py-24 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-accent-gold/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-accent-gold/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-sm">
          <Sparkles className="h-4 w-4 text-accent-gold" />
          <span className="text-accent-gold font-serif font-semibold text-sm">
            Join Our Clients
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-dark-gray mb-4">
          Ready to Transform Your Skin?
        </h2>
        <p className="text-lg md:text-xl font-sans text-medium-gray mb-8 max-w-2xl mx-auto">
          Join our satisfied clients and experience real, lasting results with our professional treatments
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
