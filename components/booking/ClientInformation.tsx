import { useState } from 'react';

interface ClientInformationProps {
  data: {
    clientName: string;
    clientEmail: string;
    clientPhone: string;
    specialRequests: string;
  };
  onSubmit: (data: any) => void;
  onBack: () => void;
}

export function ClientInformation({ data, onSubmit, onBack }: ClientInformationProps) {
  const [formData, setFormData] = useState(data);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.clientName.trim()) newErrors.clientName = 'Name is required';
    if (!formData.clientEmail.trim()) newErrors.clientEmail = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.clientEmail)) 
      newErrors.clientEmail = 'Invalid email format';
    if (!formData.clientPhone.trim()) newErrors.clientPhone = 'Phone is required';
    else if (!/^[\d\s\+\-\(\)]+$/.test(formData.clientPhone)) 
      newErrors.clientPhone = 'Invalid phone number';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      onSubmit(formData);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-serif font-bold text-dark-gray mb-6">
        Your Information
      </h2>

      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-sans font-medium text-dark-gray mb-2">
            Full Name *
          </label>
          <input
            type="text"
            value={formData.clientName}
            onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
            className={`w-full px-4 py-3 rounded-lg border-2 font-sans ${
              errors.clientName ? 'border-red-500' : 'border-beige focus:border-accent-gold'
            } outline-none transition-colors`}
            placeholder="Enter your full name"
          />
          {errors.clientName && <p className="text-red-500 text-sm mt-1">{errors.clientName}</p>}
        </div>

        <div>
          <label className="block text-sm font-sans font-medium text-dark-gray mb-2">
            Email Address *
          </label>
          <input
            type="email"
            value={formData.clientEmail}
            onChange={(e) => setFormData({ ...formData, clientEmail: e.target.value })}
            className={`w-full px-4 py-3 rounded-lg border-2 font-sans ${
              errors.clientEmail ? 'border-red-500' : 'border-beige focus:border-accent-gold'
            } outline-none transition-colors`}
            placeholder="your.email@example.com"
          />
          {errors.clientEmail && <p className="text-red-500 text-sm mt-1">{errors.clientEmail}</p>}
        </div>

        <div>
          <label className="block text-sm font-sans font-medium text-dark-gray mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            value={formData.clientPhone}
            onChange={(e) => setFormData({ ...formData, clientPhone: e.target.value })}
            className={`w-full px-4 py-3 rounded-lg border-2 font-sans ${
              errors.clientPhone ? 'border-red-500' : 'border-beige focus:border-accent-gold'
            } outline-none transition-colors`}
            placeholder="07414 601010"
          />
          {errors.clientPhone && <p className="text-red-500 text-sm mt-1">{errors.clientPhone}</p>}
        </div>

        <div>
          <label className="block text-sm font-sans font-medium text-dark-gray mb-2">
            Special Requests (Optional)
          </label>
          <textarea
            value={formData.specialRequests}
            onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
            rows={3}
            maxLength={500}
            className="w-full px-4 py-3 rounded-lg border-2 border-beige focus:border-accent-gold outline-none transition-colors font-sans"
            placeholder="Any special requests or notes..."
          />
          <p className="text-sm text-medium-gray mt-1">{formData.specialRequests.length}/500</p>
        </div>
      </div>

      <div className="flex gap-4">
        <button
          onClick={onBack}
          className="px-6 py-3 rounded-full border-2 border-dark-gray text-dark-gray font-sans font-medium hover:bg-dark-gray hover:text-white transition-colors"
        >
          Back
        </button>
        <button
          onClick={handleSubmit}
          className="flex-1 px-6 py-3 rounded-full bg-accent-gold text-white font-sans font-medium hover:bg-accent-gold/90 transition-colors"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
