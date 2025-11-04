import { FaceSkinHero } from '@/components/face-skin/FaceSkinHero';
import { ServiceCarousel } from '@/components/face-skin/ServiceCarousel';
import { EquipmentAbout } from '@/components/face-skin/EquipmentAbout';
import { ServicesList } from '@/components/face-skin/ServicesList';
import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Facial Treatments Weston-super-Mare | Hydrafacial & LED Therapy',
  description: 'Professional facial treatments from £60 at Rosie Beauty Salon. Hydrafacial MD, LED light therapy, lymphatic drainage, anti-aging treatments. Book online or call 07414 601010.',
  path: '/face-skin',
});

export default function FaceSkinPage() {
  return (
    <>
      <FaceSkinHero />
      <ServiceCarousel />
      <EquipmentAbout />
      <ServicesList />
    </>
  );
}
