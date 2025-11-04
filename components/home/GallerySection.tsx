import Link from 'next/link';
import Image from 'next/image';
import { Card } from '../ui/Card';
import { Images } from 'lucide-react';

export function GallerySection() {
  // Gallery images
  const galleryImages = Array.from({ length: 6 }, (_, i) => i + 1);

  return (
    <section className="w-full bg-white py-16 md:py-24 relative overflow-hidden">
      {/* Subtle Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-accent-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-accent-gold/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-cream/60 backdrop-blur-sm px-4 py-2 rounded-full mb-4 shadow-sm">
            <Images className="h-4 w-4 text-accent-gold" />
            <span className="text-accent-gold font-serif font-semibold text-sm">
              Our Work
            </span>
          </div>
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
                  alt={`Rosie Beauty Salon interior and treatment room ${num}`}
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
            className="inline-block bg-accent-gold text-white px-8 py-2.5 rounded-[3rem] font-serif font-semibold text-xl hover:bg-accent-gold/90 transition-all hover:shadow-md"
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
