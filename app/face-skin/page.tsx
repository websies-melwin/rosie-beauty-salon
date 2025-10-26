import { FaceSkinHero } from '@/components/face-skin/FaceSkinHero';
import { ServiceCarousel } from '@/components/face-skin/ServiceCarousel';
import { EquipmentAbout } from '@/components/face-skin/EquipmentAbout';
import { ServicesList } from '@/components/face-skin/ServicesList';
import { CTASection } from '@/components/face-skin/CTASection';
import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Face & Skin Treatments',
  description: 'Professional facial and skin treatments in Weston-super-Mare. Hydrafacial, LED therapy, lymphatic drainage, eye contour therapy and more. Book your treatment today.',
  path: '/face-skin',
});

export default function FaceSkinPage() {
  return (
    <>
      <FaceSkinHero />
      <ServiceCarousel />
      <EquipmentAbout />
      <ServicesList />
      <CTASection />
    </>
  );
}
