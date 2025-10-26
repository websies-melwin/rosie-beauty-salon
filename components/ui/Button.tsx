import React from 'react';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export function Button({
  text,
  onClick,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  type = 'button',
  className = '',
}: ButtonProps) {
  const baseStyles = 'font-sans font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-gold focus:ring-offset-2';

  const variantStyles = {
    primary: 'border-2 border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-white disabled:opacity-50 disabled:cursor-not-allowed',
    secondary: 'border-2 border-white text-white hover:bg-white hover:text-accent-gold disabled:opacity-50 disabled:cursor-not-allowed',
  };

  const sizeStyles = {
    small: 'px-6 py-2.5 text-sm',
    medium: 'px-8 py-3 text-base',
    large: 'px-10 py-3.5 text-lg',
  };

  const combinedClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

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
