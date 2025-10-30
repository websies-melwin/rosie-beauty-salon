import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export function Button({
  text,
  onClick,
  href,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  type = 'button',
  className = '',
}: ButtonProps) {
  const baseStyles = 'font-serif font-semibold rounded-[3rem] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-gold focus:ring-offset-2';

  const variantStyles = {
    primary: 'border-2 border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-white disabled:opacity-50 disabled:cursor-not-allowed',
    secondary: 'border-2 border-white text-white hover:bg-white hover:text-accent-gold disabled:opacity-50 disabled:cursor-not-allowed',
    outline: 'border-2 border-dark-gray text-dark-gray hover:bg-dark-gray hover:text-white disabled:opacity-50 disabled:cursor-not-allowed',
  };

  const sizeStyles = {
    small: 'px-6 py-2 text-lg',
    medium: 'px-8 py-2.5 text-xl',
    large: 'px-10 py-3 text-2xl',
  };

  const combinedClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  // If href is provided, render as Link
  if (href) {
    return (
      <Link href={href} className={`inline-block ${combinedClasses}`}>
        {text}
      </Link>
    );
  }

  // Otherwise render as button
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
    >
      {text}
    </button>
  );
}
