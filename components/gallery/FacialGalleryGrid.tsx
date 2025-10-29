import { BeforeAfterCard } from './BeforeAfterCard';
import { Sparkles } from 'lucide-react';

const facialGalleryItems = [
  { id: 1, galleryImage: '/images/gallery-1.avif', altText: 'Facial treatment result showing improved skin texture' },
  { id: 2, galleryImage: '/images/gallery-2.avif', altText: 'Facial treatment result showing reduced pigmentation' },
  { id: 3, galleryImage: '/images/gallery-3.avif', altText: 'Hydrafacial treatment result showing smoother skin' },
  { id: 4, galleryImage: '/images/gallery-4.avif', altText: 'Deluxe therapy result showing brighter complexion' },
  { id: 5, galleryImage: '/images/gallery-5.avif', altText: 'Facial treatment result showing reduced fine lines' },
  { id: 6, galleryImage: '/images/gallery-6.avif', altText: 'Treatment result showing even skin tone' },
];

export function FacialGalleryGrid() {
  return (
    <section className="w-full bg-white py-16 md:py-24 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-accent-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-accent-gold/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark-gray">
            Facial Treatments
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facialGalleryItems.map((item) => (
            <BeforeAfterCard
              key={item.id}
              galleryImage={item.galleryImage}
              altText={item.altText}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
