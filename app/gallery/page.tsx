import { GalleryHero } from '@/components/gallery/GalleryHero';
import { FacialGalleryGrid } from '@/components/gallery/FacialGalleryGrid';
import { LaserCarouselGallery } from '@/components/gallery/LaserCarouselGallery';
import { GalleryCTA } from '@/components/gallery/GalleryCTA';
import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Before & After Gallery',
  description: 'View our before and after results from facial treatments and laser hair removal. Real client transformations at Rosie Beauty Salon in Weston-super-Mare.',
  path: '/gallery',
});

export default function GalleryPage() {
  return (
    <>
      <GalleryHero />
      <FacialGalleryGrid />
      <LaserCarouselGallery />
      <GalleryCTA />
    </>
  );
}
