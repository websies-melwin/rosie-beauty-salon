import React from 'react';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'testimonial' | 'gallery';
  className?: string;
  hoverable?: boolean;
}

export function Card({
  children,
  variant = 'default',
  className = '',
  hoverable = false,
}: CardProps) {
  const baseStyles = 'rounded-lg overflow-hidden';

  const variantStyles = {
    default: 'bg-white border border-beige p-6 shadow-md',
    testimonial: 'bg-gradient-to-br from-pink-50 to-orange-50 p-8 shadow-md',
    gallery: 'bg-gray-100 aspect-square',
  };

  const hoverStyles = hoverable
    ? 'hover:shadow-lg hover:-translate-y-1 transition-all duration-300'
    : '';

  const combinedClasses = `${baseStyles} ${variantStyles[variant]} ${hoverStyles} ${className}`;

  return <div className={combinedClasses}>{children}</div>;
}
