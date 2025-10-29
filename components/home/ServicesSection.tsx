import Link from 'next/link';
import Image from 'next/image';
import { Sparkles } from 'lucide-react';

export function ServicesSection() {
  return (
    <section className="w-full bg-cream py-16 md:py-24 relative overflow-hidden">
      {/* Subtle Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-accent-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-accent-gold/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full mb-4 shadow-sm">
            <Sparkles className="h-4 w-4 text-accent-gold" />
            <span className="text-accent-gold font-serif font-semibold text-sm">
              Our Services
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark-gray mb-4">
            What we offer
          </h2>
          <p className="text-lg md:text-xl font-sans text-medium-gray">
            We perform the following procedures:
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Services */}
          <div className="space-y-8">
            {/* Service 1: Facial */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-accent-gold/10">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-dark-gray mb-4">
                Facial & Skin Therapies - Uncover Perfect Skin
              </h3>
              <p className="text-base md:text-lg font-sans text-medium-gray mb-6">
                Rejuvenate your skin with our comprehensive facial treatments. From deep cleansing to advanced therapies, each treatment is tailored to your unique needs.
              </p>
              <Link
                href="/face-skin"
                className="inline-block bg-accent-gold text-white px-8 py-2.5 rounded-[3rem] font-serif font-semibold text-xl hover:bg-accent-gold/90 transition-all hover:shadow-md"
              >
                View All Facial Treatments
              </Link>
            </div>

            {/* Service 2: Laser */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-accent-gold/10">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-dark-gray mb-4">
                Laser Hair Removal & Radiant Skin Therapies
              </h3>
              <p className="text-base md:text-lg font-sans text-medium-gray mb-6">
                Achieve smooth, hair-free skin with our advanced laser treatments. Safe, effective, and long-lasting results for both men and women.
              </p>
              <Link
                href="/laser-hair-removal"
                className="inline-block bg-accent-gold text-white px-8 py-2.5 rounded-[3rem] font-serif font-semibold text-xl hover:bg-accent-gold/90 transition-all hover:shadow-md"
              >
                View All Laser Services
              </Link>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex items-center justify-center">
            <div className="relative w-full h-full min-h-[600px] rounded-xl shadow-xl overflow-hidden border-2 border-accent-gold/20">
              <Image
                src="/images/salon-equipment.jpg"
                alt="Salon equipment and products"
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
