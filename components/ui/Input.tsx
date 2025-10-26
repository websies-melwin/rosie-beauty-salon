import React from 'react';

interface InputProps {
  id: string;
  name: string;
  type?: 'text' | 'email' | 'tel' | 'number' | 'password';
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  label?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
}

export function Input({
  id,
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
  onBlur,
  label,
  error,
  required = false,
  disabled = false,
  className = '',
}: InputProps) {
  const baseStyles = 'w-full px-4 py-3 rounded-md border font-sans text-base text-dark-gray transition-all duration-200';

  const stateStyles = error
    ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-100'
    : 'border-gray-300 focus:border-accent-gold focus:ring-2 focus:ring-accent-gold/10';

  const disabledStyles = disabled ? 'bg-gray-100 cursor-not-allowed opacity-60' : 'bg-white';

  const combinedClasses = `${baseStyles} ${stateStyles} ${disabledStyles} ${className}`;

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={id}
          className="block mb-2 text-sm font-medium text-dark-gray"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
        disabled={disabled}
        className={combinedClasses}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}
