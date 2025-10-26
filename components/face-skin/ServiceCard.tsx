import { Button } from '../ui/Button';

interface ServiceCardProps {
  name: string;
  description: string;
  duration: string;
  price: number | string;
}

export function ServiceCard({ name, description, duration, price }: ServiceCardProps) {
  const displayPrice = typeof price === 'number' ? `£${price}` : price;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col h-full hover:shadow-xl transition-shadow">
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

      {/* Book Now Button */}
      <Button
        text="Book Now"
        size="medium"
        variant="primary"
      />
    </div>
  );
}
