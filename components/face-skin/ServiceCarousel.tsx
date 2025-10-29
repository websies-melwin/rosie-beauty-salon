'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export function ServiceCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Treatment images - add more as they become available
  const images = [
    { id: 1, src: '/images/treatment-1.avif', alt: 'Professional facial treatment' },
    { id: 2, src: '/images/treatment-2.jpg', alt: 'Beauty salon treatment procedure' },
    { id: 3, src: '/images/treatment-3.png', alt: 'Advanced facial treatment' },
    { id: 4, src: '/images/treatment-4.png', alt: 'Skincare treatment session' },
    { id: 5, src: '/images/treatment-5.png', alt: 'Beauty treatment process' },
    { id: 6, src: '/images/treatment-6.png', alt: 'Facial therapy treatment' },
    { id: 7, src: '/images/treatment-7.png', alt: 'Professional skincare procedure' },
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const goToPrevious = () => {
    if (isMobile) {
      setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    } else {
      setCurrentIndex((prev) => (prev === 0 ? Math.max(0, images.length - 3) : prev - 1));
    }
  };

  const goToNext = () => {
    if (isMobile) {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    } else {
      const maxIndex = Math.max(0, images.length - 3);
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }
  };

  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Carousel Container */}
        <div className="relative">
          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6 text-dark-gray" />
          </button>

          {/* Images Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: isMobile
                  ? `translateX(-${currentIndex * 100}%)`
                  : `translateX(-${currentIndex * (100 / 3)}%)`
              }}
            >
              {images.map((image) => (
                <div
                  key={image.id}
                  className="flex-shrink-0 w-full md:w-1/3 px-2"
                >
                  <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover"
                      quality={90}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6 text-dark-gray" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({
            length: isMobile ? images.length : Math.max(1, images.length - 2)
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-accent-gold w-8'
                  : 'bg-medium-gray/30'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
