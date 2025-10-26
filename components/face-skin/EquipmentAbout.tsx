import Link from 'next/link';
import { Button } from '../ui/Button';

export function EquipmentAbout() {
  return (
    <section className="w-full bg-beige py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Main Content (70% width on desktop) */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark-gray mb-6">
              About Our Equipment
            </h2>
            <p className="text-base md:text-lg font-sans text-medium-gray leading-relaxed">
              At our studio, we are dedicated to providing exceptional care by utilizing the Hydrafacial machine, a top-of-the-line device renowned for its powerful hydrating and rejuvenating effects. This advanced technology combines cleansing, exfoliation, extraction, hydration, and antioxidant protection in a single treatment, delivering remarkable results with no downtime. Clinical studies have demonstrated its efficacy, with 90% of users experiencing a reduction in the appearance of wrinkles, 94% noticing an improvement in skin tone and a decrease in spots, and 97% reporting smoother, softer, and more radiant skin. By integrating this state-of-the-art equipment into our practice, we ensure that our clients receive the highest standard of skincare available today.
            </p>
          </div>

          {/* Right Column - Before/After Preview (30% width on desktop) */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-serif font-bold text-dark-gray mb-4">
              Before and After Transformations
            </h3>
            
            {/* Before/After Thumbnails */}
            <div className="space-y-4 mb-6">
              {/* Thumbnail 1 */}
              <div className="aspect-video bg-gradient-to-br from-beige to-light-yellow rounded-lg flex items-center justify-center">
                <p className="text-medium-gray text-sm font-sans">
                  [Before/After 1]
                </p>
              </div>

              {/* Thumbnail 2 */}
              <div className="aspect-video bg-gradient-to-br from-light-yellow to-beige rounded-lg flex items-center justify-center">
                <p className="text-medium-gray text-sm font-sans">
                  [Before/After 2]
                </p>
              </div>

              {/* Thumbnail 3 */}
              <div className="aspect-video bg-gradient-to-br from-beige to-cream rounded-lg flex items-center justify-center">
                <p className="text-medium-gray text-sm font-sans">
                  [Before/After 3]
                </p>
              </div>
            </div>

            {/* Explore Button */}
            <Link href="/gallery">
              <Button
                text="Explore"
                size="medium"
                variant="secondary"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
