import { Button } from '../ui/Button';
import { Sparkles } from 'lucide-react';

export function LaserCTA() {
  return (
    <section className="w-full bg-gradient-to-r from-accent-gold/20 via-light-yellow/30 to-accent-gold/20 py-12 md:py-16 relative overflow-hidden">
      {/* Subtle Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-accent-gold/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-accent-gold/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full mb-4 shadow-sm">
          <Sparkles className="h-4 w-4 text-accent-gold" />
          <span className="text-accent-gold font-serif font-semibold text-sm">
            Get Started
          </span>
        </div>
        
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
