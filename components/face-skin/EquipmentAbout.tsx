import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

export function EquipmentAbout() {
  const benefits = [
    '90% reduction in wrinkles',
    '94% improved skin tone',
    '97% smoother, radiant skin',
  ];

  return (
    <section className="w-full bg-beige py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* White Container */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Main Content */}
            <div>
              <div className="inline-block bg-accent-gold/10 px-4 py-2 rounded-full mb-4">
                <span className="text-accent-gold font-serif font-semibold text-sm">
                  State-of-the-Art Technology
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-dark-gray mb-6">
                About Our Equipment
              </h2>

              <p className="text-base md:text-lg font-sans text-medium-gray leading-relaxed mb-8">
                At our studio, we are dedicated to providing exceptional care by utilizing the Hydrafacial machine, a top-of-the-line device renowned for its powerful hydrating and rejuvenating effects. This advanced technology combines cleansing, exfoliation, extraction, hydration, and antioxidant protection in a single treatment, delivering remarkable results with no downtime.
              </p>

              {/* Benefits List */}
              <div className="space-y-4">
                <h3 className="text-xl font-serif font-semibold text-dark-gray mb-4">
                  Clinical Results:
                </h3>
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-accent-gold flex-shrink-0" />
                    <span className="text-base md:text-lg font-sans text-medium-gray">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Equipment Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-xs lg:max-w-sm">
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden border-2 border-accent-gold/30">
                  <Image
                    src="/images/equipment-showcase.png"
                    alt="Professional Hydrafacial MD Equipment"
                    fill
                    className="object-contain"
                    quality={90}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
