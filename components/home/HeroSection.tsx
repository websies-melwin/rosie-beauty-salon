import Image from 'next/image';
import { Button } from '../ui/Button';

export function HeroSection() {
  return (
    <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-background.avif"
          alt="Beauty salon facial treatment"
          fill
          priority
          className="object-cover object-center"
          quality={90}
        />
        {/* Subtle overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent" />
      </div>

      {/* Content Overlay */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-end h-full">
          <div className="text-right max-w-2xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-dark-gray mb-6">
              Elite Aesthetics Salon
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-sans text-medium-gray mb-8">
              Your Path to Radiance
            </p>
            <Button
              text="Book Now"
              size="large"
              variant="primary"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
