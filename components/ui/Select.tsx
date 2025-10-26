import React from 'react';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  id: string;
  name: string;
  options: SelectOption[];
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  label?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
}

export function Select({
  id,
  name,
  options,
  value,
  onChange,
  label,
  error,
  required = false,
  disabled = false,
  placeholder = 'Select an option',
  className = '',
}: SelectProps) {
  const baseStyles = 'w-full px-4 py-3 rounded-md border font-sans text-base text-dark-gray transition-all duration-200 appearance-none bg-no-repeat bg-right pr-10';

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
      <div className="relative">
        <select
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          disabled={disabled}
          className={combinedClasses}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${id}-error` : undefined}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-dark-gray">
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}
