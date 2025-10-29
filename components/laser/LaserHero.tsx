import { Zap } from 'lucide-react';

export function LaserHero() {
  return (
    <section className="w-full bg-gradient-to-b from-cream via-beige to-cream py-20 md:py-32 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-accent-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent-gold/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-5 py-2.5 rounded-full mb-6 shadow-sm">
          <Zap className="h-4 w-4 text-accent-gold" />
          <span className="text-accent-gold font-serif font-semibold text-sm">
            Advanced Laser Technology
          </span>
        </div>

        {/* Page Title */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-dark-gray mb-8">
          Laser Hair Removal
        </h1>

        {/* Main Description */}
        <p className="text-lg md:text-xl font-sans text-medium-gray leading-relaxed max-w-3xl mx-auto">
          Thanks to our highly powerful ICE MAX diode laser, we offer professional, permanent hair reduction with amazing results. The process involves a specific wavelength light that targets melanin in the hair follicle. The light is converted to heat, which damages the follicle enough to significantly slow down hair growth, without damaging the surrounding skin. Our advanced technology ensures safe, effective treatments with minimal discomfort, delivering long-lasting results that help you achieve smooth, hair-free skin with confidence.
        </p>
      </div>
    </section>
  );
}
