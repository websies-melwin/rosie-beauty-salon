import { Cpu } from 'lucide-react';
import Image from 'next/image';

export function TechnologyShowcase() {
  return (
    <section className="w-full bg-white py-16 md:py-24 relative overflow-hidden">
      {/* Subtle Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-accent-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-accent-gold/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-cream/60 backdrop-blur-sm px-4 py-2 rounded-full mb-4 shadow-sm">
              <Cpu className="h-4 w-4 text-accent-gold" />
              <span className="text-accent-gold font-serif font-semibold text-sm">
                Our Technology
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark-gray mb-6">
              Advanced ICE MAX Technology
            </h2>
            <p className="text-base md:text-lg font-sans text-medium-gray leading-relaxed">
              Thanks to our highly powerful ICE MAX diode laser, we offer professional, permanent hair reduction which gives amazing results. The advanced cooling system ensures comfort during treatment while delivering precise, effective results.
            </p>
          </div>

          {/* Right Column - Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-square rounded-xl shadow-lg overflow-hidden border-2 border-accent-gold/20">
              <Image
                src="/images/laser-equipment.png"
                alt="Laser hair removal equipment"
                fill
                className="object-cover"
                quality={90}
              />
            </div>
            <div className="relative aspect-square rounded-xl shadow-lg overflow-hidden border-2 border-accent-gold/20">
              <Image
                src="/images/laser-treatment.png"
                alt="Laser treatment procedure"
                fill
                className="object-cover"
                quality={90}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
