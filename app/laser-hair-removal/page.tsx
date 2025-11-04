import { LaserHero } from '@/components/laser/LaserHero';
import { WhyItWorks } from '@/components/laser/WhyItWorks';
import { UnderstandingProcess } from '@/components/laser/UnderstandingProcess';
import { TechnologyShowcase } from '@/components/laser/TechnologyShowcase';
import { LaserCarousel } from '@/components/laser/LaserCarousel';
import { PricingWomen } from '@/components/laser/PricingWomen';
import { PricingMen } from '@/components/laser/PricingMen';
import { LaserCTA } from '@/components/laser/LaserCTA';
import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Laser Hair Removal Weston-super-Mare | Elysion-Pro Technology',
  description: 'Pain-free laser hair removal from £40. Advanced Elysion-Pro diode laser for all skin types. Permanent results for men & women. Book your consultation at Rosie Beauty Salon.',
  path: '/laser-hair-removal',
});

export default function LaserHairRemovalPage() {
  return (
    <>
      <LaserHero />
      <WhyItWorks />
      <UnderstandingProcess />
      <TechnologyShowcase />
      <LaserCarousel />
      <PricingWomen />
      <PricingMen />
      <LaserCTA />
    </>
  );
}
