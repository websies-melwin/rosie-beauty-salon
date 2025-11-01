'use client';

import { X } from 'lucide-react';
import { useEffect } from 'react';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName: string;
  serviceDescription: string;
  packages?: string[];
  includes?: string[];
  effects?: string[];
}

export function ServiceModal({
  isOpen,
  onClose,
  serviceName,
  serviceDescription,
  packages,
  includes,
  effects,
}: ServiceModalProps) {
  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-beige px-6 py-4 flex items-center justify-between">
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-dark-gray">
            {serviceName}
          </h3>
          <button
            onClick={onClose}
            className="text-medium-gray hover:text-dark-gray transition-colors p-2 rounded-full hover:bg-beige"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-6 space-y-6">
          {/* Description */}
          <div>
            <p className="text-base text-medium-gray leading-relaxed">
              {serviceDescription}
            </p>
          </div>

          {/* Treatment */}
          {packages && packages.length > 0 && (
            <div>
              <h4 className="text-lg font-serif font-semibold text-dark-gray mb-3">
                Treatment
              </h4>
              <ul className="space-y-2">
                {packages.map((pkg, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-accent-gold mr-2">•</span>
                    <span className="text-medium-gray">{pkg}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* What's Included */}
          {includes && includes.length > 0 && (
            <div>
              <h4 className="text-lg font-serif font-semibold text-dark-gray mb-3">
                What's Included
              </h4>
              <ul className="space-y-2">
                {includes.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-accent-gold mr-2">•</span>
                    <span className="text-medium-gray">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Positive Effects */}
          {effects && effects.length > 0 && (
            <div>
              <h4 className="text-lg font-serif font-semibold text-dark-gray mb-3">
                Positive Effects
              </h4>
              <ul className="space-y-2">
                {effects.map((effect, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-accent-gold mr-2">✓</span>
                    <span className="text-medium-gray">{effect}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-beige/30 px-6 py-4 border-t border-beige">
          <button
            onClick={onClose}
            className="w-full py-3 px-6 bg-accent-gold text-white font-sans font-medium rounded-md hover:bg-accent-gold/90 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
