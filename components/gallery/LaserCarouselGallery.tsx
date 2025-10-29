import Image from 'next/image';
import { Zap } from 'lucide-react';

const laserGalleryItems = [
  { id: 1, src: '/images/laser-4.png', altText: 'Professional laser hair removal treatment' },
  { id: 2, src: '/images/laser-7.png', altText: 'Laser hair removal treatment procedure' },
  { id: 3, src: '/images/laser-3.png', altText: 'Advanced laser hair removal session' },
];

export function LaserCarouselGallery() {
  return (
    <section className="w-full bg-beige py-16 md:py-24 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-accent-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent-gold/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark-gray">
            Laser Hair Removal
          </h2>
        </div>

        {/* Grid of 3 Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {laserGalleryItems.map((item) => (
            <div 
              key={item.id}
              className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-accent-gold/10"
            >
              <Image
                src={item.src}
                alt={item.altText}
                fill
                className="object-cover"
                quality={90}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
