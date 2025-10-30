'use client';

import Link from 'next/link';
import { Button } from '../ui/Button';

interface ServiceCardProps {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: number | string;
  onMoreInfo: () => void;
}

export function ServiceCard({ id, name, description, duration, price, onMoreInfo }: ServiceCardProps) {
  const displayPrice = typeof price === 'number' ? `£${price}` : price;

  return (
    <div className="bg-cream/50 rounded-lg shadow-lg p-6 flex flex-col h-full hover:shadow-xl transition-shadow">
      {/* Service Name */}
      <h3 className="text-2xl font-serif font-bold text-dark-gray mb-3">
        {name}
      </h3>

      {/* Description */}
      <p className="text-base font-sans text-medium-gray leading-relaxed mb-4 flex-grow">
        {description}
      </p>

      {/* Duration and Price */}
      <div className="mb-4 space-y-1">
        <p className="text-sm font-sans text-medium-gray">
          <span className="font-medium">Duration:</span> {duration}
        </p>
        <p className="text-2xl font-serif font-bold text-accent-gold">
          {displayPrice}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <div className="flex-1">
          <Link href={`/booking?service=${id}`}>
            <Button
              text="Book Now"
              size="medium"
              variant="primary"
              className="w-full"
            />
          </Link>
        </div>
        <div className="flex-1">
          <Button
            text="More Info"
            size="medium"
            variant="outline"
            onClick={onMoreInfo}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
