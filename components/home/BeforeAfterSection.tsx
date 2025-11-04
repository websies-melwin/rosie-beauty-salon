import Link from 'next/link';
import Image from 'next/image';
import { Sparkles } from 'lucide-react';

export function BeforeAfterSection() {
  return (
    <section className="w-full bg-cream py-16 md:py-24 relative overflow-hidden">
      {/* Subtle Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-accent-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent-gold/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full mb-4 shadow-sm">
            <Sparkles className="h-4 w-4 text-accent-gold" />
            <span className="text-accent-gold font-serif font-semibold text-sm">
              Real Results
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark-gray mb-4">
            Before and After Transformations
          </h2>
        </div>

        {/* Before/After Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Before/After Image 1 */}
          <div className="bg-white rounded-xl shadow-xl p-6 border border-accent-gold/10">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-sans font-semibold text-dark-gray mb-2 text-center">
                  BEFORE
                </p>
                <div className="relative aspect-square rounded-lg overflow-hidden">
                  <Image
                    src="/images/before-1.png"
                    alt="Before facial treatment - client skin condition"
                    fill
                    className="object-cover"
                    quality={90}
                  />
                </div>
              </div>
              <div>
                <p className="text-sm font-sans font-semibold text-accent-gold mb-2 text-center">
                  AFTER
                </p>
                <div className="relative aspect-square rounded-lg overflow-hidden">
                  <Image
                    src="/images/after-1.png"
                    alt="After facial treatment - visible skin improvement"
                    fill
                    className="object-cover"
                    quality={90}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Before/After Image 2 */}
          <div className="bg-white rounded-xl shadow-xl p-6 border border-accent-gold/10">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-sans font-semibold text-dark-gray mb-2 text-center">
                  BEFORE
                </p>
                <div className="relative aspect-square rounded-lg overflow-hidden">
                  <Image
                    src="/images/before-2.png"
                    alt="Before Hydrafacial treatment - skin texture"
                    fill
                    className="object-cover"
                    quality={90}
                  />
                </div>
              </div>
              <div>
                <p className="text-sm font-sans font-semibold text-accent-gold mb-2 text-center">
                  AFTER
                </p>
                <div className="relative aspect-square rounded-lg overflow-hidden">
                  <Image
                    src="/images/after-2.png"
                    alt="After Hydrafacial treatment - improved skin clarity"
                    fill
                    className="object-cover"
                    quality={90}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Explore Button */}
        <div className="text-center">
          <Link
            href="/gallery"
            className="inline-block bg-accent-gold text-white px-8 py-2.5 rounded-[3rem] font-serif font-semibold text-xl hover:bg-accent-gold/90 transition-all hover:shadow-md"
          >
            Explore
          </Link>
        </div>
      </div>
    </section>
  );
}
