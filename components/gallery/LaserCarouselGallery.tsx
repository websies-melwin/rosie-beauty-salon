'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const laserGalleryItems = [
  { id: 1, altText: 'Before and after laser hair removal on legs' },
  { id: 2, altText: 'Before and after laser hair removal on arms' },
  { id: 3, altText: 'Before and after laser hair removal on face' },
  { id: 4, altText: 'Before and after laser hair removal on back' },
];

export function LaserCarouselGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? laserGalleryItems.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === laserGalleryItems.length - 1 ? 0 : prev + 1));
  };

  const currentItem = laserGalleryItems[currentIndex];

  return (
    <section className="w-full bg-beige py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark-gray mb-12 text-center">
          Laser Hair Removal
        </h2>

        <div className="relative">
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6 text-dark-gray" />
          </button>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-2 gap-8">
              {/* Before */}
              <div className="relative bg-gradient-to-br from-beige to-cream rounded-lg aspect-square flex flex-col items-center justify-center p-6">
                <span className="absolute top-4 left-4 text-sm font-sans font-semibold text-medium-gray">
                  BEFORE
                </span>
                <p className="text-sm font-sans text-medium-gray text-center">
                  Image Coming Soon
                </p>
              </div>

              {/* After */}
              <div className="relative bg-gradient-to-br from-light-yellow to-beige rounded-lg aspect-square flex flex-col items-center justify-center p-6">
                <span className="absolute top-4 right-4 text-sm font-sans font-semibold text-accent-gold">
                  AFTER
                </span>
                <p className="text-sm font-sans text-medium-gray text-center">
                  Image Coming Soon
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6 text-dark-gray" />
          </button>
        </div>

        <div className="flex justify-center mt-6 gap-2">
          {laserGalleryItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-accent-gold w-8' : 'bg-medium-gray/30'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
