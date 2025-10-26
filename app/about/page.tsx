import { AboutHero } from '@/components/about/AboutHero';
import { AboutStory } from '@/components/about/AboutStory';
import { AboutCTA } from '@/components/about/AboutCTA';
import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'About Me',
  description: 'Meet Rosie, your beauty specialist in Weston-super-Mare. Passionate about helping clients achieve their beauty goals through personalized facial and laser treatments.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutCTA />
    </>
  );
}
