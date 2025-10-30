import { Zap } from 'lucide-react';

export function LaserHero() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-cream via-beige to-cream relative overflow-hidden flex items-center justify-center">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-accent-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent-gold/5 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-20 -mt-16">
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
          Experience safe, painless, and long-lasting hair removal with our Elysion-Pro diode laser. This proven technology selectively targets melanin in hair follicles using precise laser pulses that cause thermal destruction without damaging your skin. The most modern solution that creates a pleasant sensation, our system treats all skin types year-round and can be applied to all areas of the body. Achieve smooth, hair-free skin with permanent results and improved skin health.
        </p>
      </div>
    </section>
  );
}
