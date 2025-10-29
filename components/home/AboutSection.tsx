import Image from 'next/image';
import { Heart } from 'lucide-react';

export function AboutSection() {
  return (
    <section className="w-full bg-white py-16 md:py-24 relative overflow-hidden">
      {/* Subtle Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-accent-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent-gold/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-cream/60 backdrop-blur-sm px-4 py-2 rounded-full mb-4 shadow-sm">
              <Heart className="h-4 w-4 text-accent-gold" />
              <span className="text-accent-gold font-serif font-semibold text-sm">
                About Our Salon
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark-gray mb-6">
              Welcome to Rosie Beauty Salon
            </h2>
            <p className="text-lg md:text-xl font-sans text-medium-gray leading-relaxed mb-8">
              I'm passionate about helping you look and feel your best. Each treatment is designed with care and attention, using only high-quality products. My goal is to provide a relaxing, rejuvenating experience tailored to your unique beauty needs. See you soon!
            </p>
            {/* Signature */}
            <div className="mt-8 p-6 bg-gradient-to-r from-cream/50 to-transparent rounded-lg border-l-4 border-accent-gold">
              <p className="font-serif italic text-2xl text-accent-gold">
                ~ Rosica
              </p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md h-96 rounded-xl shadow-xl overflow-hidden border-2 border-accent-gold/20">
              <Image
                src="/images/rosica-photo.jpg"
                alt="Rosica - Salon Owner"
                fill
                className="object-cover object-center"
                quality={90}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
