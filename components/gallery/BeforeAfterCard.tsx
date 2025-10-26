interface BeforeAfterCardProps {
  beforeImage?: string;
  afterImage?: string;
  altText: string;
}

export function BeforeAfterCard({ beforeImage, afterImage, altText }: BeforeAfterCardProps) {
  return (
    <div className="relative bg-gray-100 rounded-lg overflow-hidden aspect-square shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex h-full">
        {/* Before Side */}
        <div className="flex-1 relative bg-gradient-to-br from-beige to-cream flex flex-col items-center justify-center p-4">
          <span className="absolute top-4 left-4 text-xs font-sans font-semibold text-medium-gray">
            BEFORE
          </span>
          {!beforeImage && (
            <p className="text-sm font-sans text-medium-gray text-center">
              Image Coming Soon
            </p>
          )}
        </div>

        {/* Center Divider */}
        <div className="w-0.5 bg-white" />

        {/* After Side */}
        <div className="flex-1 relative bg-gradient-to-br from-light-yellow to-beige flex flex-col items-center justify-center p-4">
          <span className="absolute top-4 right-4 text-xs font-sans font-semibold text-accent-gold">
            AFTER
          </span>
          {!afterImage && (
            <p className="text-sm font-sans text-medium-gray text-center">
              Image Coming Soon
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
