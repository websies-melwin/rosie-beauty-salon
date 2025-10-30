import Image from 'next/image';
import { Button } from '../ui/Button';

export function HeroSection() {
  return (
    <section className="relative w-full bg-white py-6 md:py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-5 sm:px-4 md:px-6 lg:px-8">
        <div className="relative h-[60vh] min-h-[400px] md:h-[70vh] md:min-h-[450px] lg:h-[80vh] lg:min-h-[500px] rounded-lg md:rounded-xl lg:rounded-2xl overflow-hidden">
          {/* Mobile Background Image */}
          <Image
            src="/images/hero-mobile.avif"
            alt="Beauty salon facial treatment"
            fill
            priority
            className="object-cover object-center md:hidden"
            quality={90}
          />

          {/* Desktop Background Image */}
          <Image
            src="/images/hero-background.avif"
            alt="Beauty salon facial treatment"
            fill
            priority
            className="object-cover object-center hidden md:block"
            quality={90}
          />

          {/* Content Overlay */}
          <div className="relative h-full flex items-start justify-end p-4 md:p-10 lg:p-12 pt-4 md:pt-8 lg:pt-10">
            <div className="text-right max-w-xl">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold text-dark-gray mb-2 md:mb-4">
                Elite Aesthetics Salon
              </h1>
              <p className="text-sm md:text-lg lg:text-xl font-sans text-medium-gray mb-4 md:mb-6">
                Your Path to Radiance
              </p>
              <div className="flex justify-end">
                <Button text="Book Now" size="small" href="/booking" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
