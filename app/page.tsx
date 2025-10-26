import { HeroSection } from '@/components/home/HeroSection';
import { PromoBanner } from '@/components/home/PromoBanner';
import { ServicesSection } from '@/components/home/ServicesSection';
import { AboutSection } from '@/components/home/AboutSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { GallerySection } from '@/components/home/GallerySection';
import { BeforeAfterSection } from '@/components/home/BeforeAfterSection';
import { EquipmentSection } from '@/components/home/EquipmentSection';
import { LocationSection } from '@/components/home/LocationSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <PromoBanner />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <GallerySection />
      <BeforeAfterSection />
      <EquipmentSection />
      <LocationSection />
    </>
  );
}
