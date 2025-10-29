import Image from 'next/image';

interface BeforeAfterCardProps {
  galleryImage: string;
  altText: string;
}

export function BeforeAfterCard({ galleryImage, altText }: BeforeAfterCardProps) {
  return (
    <div className="relative bg-gray-100 rounded-lg overflow-hidden aspect-square shadow-lg hover:shadow-xl transition-shadow border border-accent-gold/10">
      <Image
        src={galleryImage}
        alt={altText}
        fill
        className="object-cover"
        quality={90}
      />
    </div>
  );
}
