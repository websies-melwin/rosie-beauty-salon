import Link from 'next/link';
import Image from 'next/image';
import { Card } from '../ui/Card';

export function GallerySection() {
  // Gallery images
  const galleryImages = Array.from({ length: 6 }, (_, i) => i + 1);

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark-gray mb-4">
            Gallery
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {galleryImages.map((num) => (
            <Card key={num} variant="gallery" hoverable>
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={`/images/gallery-${num}.avif`}
                  alt={`Gallery image ${num}`}
                  fill
                  className="object-cover"
                  quality={90}
                />
              </div>
            </Card>
          ))}
        </div>

        {/* View Full Gallery Link */}
        <div className="text-center">
          <Link
            href="/gallery"
            className="inline-block bg-accent-gold text-white px-8 py-2.5 rounded-[3rem] font-serif font-semibold text-xl hover:bg-accent-gold/90 transition-colors"
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
