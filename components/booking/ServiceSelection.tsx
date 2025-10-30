import { useState } from 'react';
import { Service, FACIAL_SERVICES, LASER_WOMEN_SERVICES, LASER_MEN_SERVICES } from '@/data/services';

interface ServiceSelectionProps {
  onSelect: (service: Service) => void;
}

export function ServiceSelection({ onSelect }: ServiceSelectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<'facial' | 'laser-women' | 'laser-men'>('facial');

  const getServices = () => {
    switch (selectedCategory) {
      case 'facial': return FACIAL_SERVICES;
      case 'laser-women': return LASER_WOMEN_SERVICES;
      case 'laser-men': return LASER_MEN_SERVICES;
    }
  };

  const services = getServices();

  return (
    <div>
      <h2 className="text-2xl font-serif font-bold text-dark-gray mb-6">
        Select Your Service
      </h2>

      {/* Category tabs */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setSelectedCategory('facial')}
          className={`px-4 py-2 rounded-full font-sans text-sm font-medium transition-colors ${
            selectedCategory === 'facial'
              ? 'bg-accent-gold text-white'
              : 'bg-beige text-dark-gray hover:bg-beige/80'
          }`}
        >
          Face & Skin ({FACIAL_SERVICES.length})
        </button>
        <button
          onClick={() => setSelectedCategory('laser-women')}
          className={`px-4 py-2 rounded-full font-sans text-sm font-medium transition-colors ${
            selectedCategory === 'laser-women'
              ? 'bg-accent-gold text-white'
              : 'bg-beige text-dark-gray hover:bg-beige/80'
          }`}
        >
          Laser - Women ({LASER_WOMEN_SERVICES.length})
        </button>
        <button
          onClick={() => setSelectedCategory('laser-men')}
          className={`px-4 py-2 rounded-full font-sans text-sm font-medium transition-colors ${
            selectedCategory === 'laser-men'
              ? 'bg-accent-gold text-white'
              : 'bg-beige text-dark-gray hover:bg-beige/80'
          }`}
        >
          Laser - Men ({LASER_MEN_SERVICES.length})
        </button>
      </div>

      {/* Services grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((service) => (
          <button
            key={service.id}
            onClick={() => onSelect(service)}
            className="text-left p-4 rounded-lg border-2 border-beige hover:border-accent-gold transition-colors bg-white"
          >
            <h3 className="text-lg font-serif font-bold text-dark-gray mb-1">
              {service.name}
            </h3>
            <p className="text-sm font-sans text-medium-gray mb-3 line-clamp-2">
              {service.description}
            </p>
            <div className="flex justify-between items-center text-sm font-sans">
              <span className="text-medium-gray">{service.duration} min</span>
              <span className="text-accent-gold font-bold">£{service.price}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
