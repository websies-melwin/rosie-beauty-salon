'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export function LaserCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  const images = [
    { id: 1, src: '/images/laser-4.png', alt: 'Laser treatment session' },
    { id: 2, src: '/images/laser-7.png', alt: 'Laser treatment procedure' },
    { id: 3, src: '/images/laser-3.png', alt: 'Advanced laser treatment' },
    { id: 4, src: '/images/laser-6.png', alt: 'Professional laser therapy' },
    { id: 5, src: '/images/laser-5.png', alt: 'Laser hair removal process' },
    { id: 6, src: '/images/laser-1.png', alt: 'Professional laser treatment' },
    { id: 7, src: '/images/laser-2.png', alt: 'Laser hair removal procedure' },
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

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6 text-dark-gray" />
          </button>
        </div>

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
