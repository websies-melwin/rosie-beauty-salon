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
  title: 'Laser Hair Removal',
  description: 'Professional laser hair removal for men and women in Weston-super-Mare. Safe, effective, long-lasting results. Competitive pricing with package deals. Book consultation today.',
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
