import { BeforeAfterCard } from './BeforeAfterCard';

const facialGalleryItems = [
  { id: 1, altText: 'Before and after facial treatment showing improved skin texture' },
  { id: 2, altText: 'Before and after facial treatment showing reduced pigmentation' },
  { id: 3, altText: 'Before and after Hydrafacial showing smoother skin' },
  { id: 4, altText: 'Before and after deluxe therapy showing brighter complexion' },
  { id: 5, altText: 'Before and after facial showing reduced fine lines' },
  { id: 6, altText: 'Before and after treatment showing even skin tone' },
];

export function FacialGalleryGrid() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark-gray mb-12 text-center">
          Facial Treatments
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facialGalleryItems.map((item) => (
            <BeforeAfterCard
              key={item.id}
              altText={item.altText}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
