'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export function LaserCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const images = [
    { id: 1, alt: 'Laser treatment on legs' },
    { id: 2, alt: 'Laser device on arm' },
    { id: 3, alt: 'Face laser treatment' },
    { id: 4, alt: 'Back treatment' },
    { id: 5, alt: 'Underarm treatment' },
    { id: 6, alt: 'Bikini area treatment' },
  ];

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full bg-cream py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6 text-dark-gray" />
          </button>

          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
            >
              {images.map((image) => (
                <div key={image.id} className="flex-shrink-0 w-full md:w-1/3 px-2">
                  <div className="aspect-[4/3] bg-gradient-to-br from-beige to-light-yellow rounded-lg flex items-center justify-center">
                    <p className="text-medium-gray font-sans text-center px-4">[{image.alt}]</p>
                  </div>
                </div>
              ))}
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
          {images.map((_, index) => (
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
