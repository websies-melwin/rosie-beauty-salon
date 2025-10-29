import Image from 'next/image';
import Link from 'next/link';
import { Award } from 'lucide-react';

export function EquipmentSection() {
  return (
    <section className="w-full bg-white py-16 md:py-24 relative overflow-hidden">
      {/* Subtle Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-accent-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-accent-gold/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-cream/60 backdrop-blur-sm px-4 py-2 rounded-full mb-4 shadow-sm">
            <Award className="h-4 w-4 text-accent-gold" />
            <span className="text-accent-gold font-serif font-semibold text-sm">
              Premium Equipment
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark-gray mb-4">
            Our Salon
          </h2>
          <h3 className="text-2xl md:text-3xl font-serif font-semibold text-accent-gold mb-6">
            Elite Equipment Advantage
          </h3>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-8">
          {/* Left Column - Machine Image */}
          <div className="order-2 lg:order-1">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl border-2 border-accent-gold/20">
              <Image
                src="/images/salon-machine.png"
                alt="Professional Hydrafacial Machine"
                fill
                className="object-contain"
                quality={90}
              />
            </div>
          </div>

          {/* Right Column - Description */}
          <div className="order-1 lg:order-2">
            <h4 className="text-3xl md:text-4xl font-serif font-bold text-dark-gray mb-6">
              Hydrafacial: Cutting-Edge Skincare Technology
            </h4>
            <p className="text-lg md:text-xl font-sans text-medium-gray leading-relaxed mb-6">
              At Rosie Beauty Salon, we go above and beyond to deliver an unparalleled beauty experience. Each treatment is tailored to your unique needs, ensuring you leave with radiant, refreshed skin and a renewed sense of confidence.
            </p>
            <p className="text-base md:text-lg font-sans text-medium-gray leading-relaxed">
              We use the Hydrafacial machine, a top-of-the-line device celebrated for its powerful hydrating and rejuvenating effects. This advanced technology cleanses, exfoliates, and nourishes, offering remarkable results with no downtime.
            </p>
          </div>
        </div>

        {/* Learn More Button */}
        <div className="text-center">
          <Link
            href="/face-skin"
            className="inline-block bg-accent-gold text-white px-8 py-2.5 rounded-[3rem] font-serif font-semibold text-xl hover:bg-accent-gold/90 transition-all hover:shadow-md"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
