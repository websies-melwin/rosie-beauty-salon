'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Service, ALL_SERVICES } from '@/data/services';
import { CreateBookingInput } from '@/types/booking';
import { ServiceSelection } from './ServiceSelection';
import { DateTimeSelection } from './DateTimeSelection';
import { ClientInformation } from './ClientInformation';
import { BookingConfirmation } from './BookingConfirmation';
import { BookingSuccess } from './BookingSuccess';

type BookingStep = 'service' | 'datetime' | 'info' | 'confirm' | 'success';

interface BookingFormData {
  service?: Service;
  date?: string;
  time?: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  specialRequests: string;
}

export function BookingForm() {
  const searchParams = useSearchParams();
  const serviceId = searchParams.get('service');
  
  const [step, setStep] = useState<BookingStep>('service');
  const [bookingData, setBookingData] = useState<BookingFormData>({
    clientName: '',
    clientEmail: '',
    clientPhone: '',
    specialRequests: '',
  });
  const [bookingId, setBookingId] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Pre-select service from URL parameter if present
  useEffect(() => {
    if (serviceId) {
      const preselectedService = ALL_SERVICES.find(s => s.id === serviceId);
      if (preselectedService) {
        setBookingData(prev => ({ ...prev, service: preselectedService }));
        setStep('datetime');
      }
    }
  }, [serviceId]);

  // Scroll to top when step changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [step]);

  const updateData = (data: Partial<BookingFormData>) => {
    setBookingData(prev => ({ ...prev, ...data }));
  };

  const handleSubmit = async () => {
    if (!bookingData.service || !bookingData.date || !bookingData.time) return;

    setIsSubmitting(true);
    
    try {
      const payload: CreateBookingInput = {
        service_id: bookingData.service.id,
        service_name: bookingData.service.name,
        service_category: bookingData.service.category,
        service_duration: bookingData.service.duration,
        service_price: bookingData.service.price,
        booking_date: bookingData.date,
        booking_time: bookingData.time,
        client_name: bookingData.clientName,
        client_email: bookingData.clientEmail,
        client_phone: bookingData.clientPhone,
        special_requests: bookingData.specialRequests || undefined,
      };

      const response = await fetch('/api/bookings/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setBookingId(result.booking_id);
        setStep('success');
      } else {
        alert(result.error || 'Booking failed. Please try again.');
      }
    } catch (error) {
      console.error('Booking error:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
      {/* Progress indicator */}
      <div className="mb-8">
        <div className="flex justify-between items-center">
          {['Service', 'Date & Time', 'Your Info', 'Confirm'].map((label, idx) => {
            const stepNames: BookingStep[] = ['service', 'datetime', 'info', 'confirm'];
            const currentIdx = stepNames.indexOf(step);
            const isActive = idx === currentIdx;
            const isCompleted = idx < currentIdx;

            return (
              <div key={label} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div className={`flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full text-sm md:text-base font-medium ${
                    isActive ? 'bg-accent-gold text-white' : 
                    isCompleted ? 'bg-accent-gold/30 text-accent-gold' : 
                    'bg-gray-200 text-gray-500'
                  }`}>
                    {idx + 1}
                  </div>
                  <span className={`mt-2 text-xs md:text-sm font-sans text-center ${
                    isActive ? 'text-dark-gray font-semibold' : 'text-medium-gray'
                  }`}>
                    {label}
                  </span>
                </div>
                {idx < 3 && <div className="flex-1 h-0.5 bg-gray-200 mx-1 md:mx-2" />}
              </div>
            );
          })}
        </div>
      </div>

      {/* Step content */}
      {step === 'service' && (
        <ServiceSelection
          onSelect={(service) => {
            updateData({ service });
            setStep('datetime');
          }}
        />
      )}

      {step === 'datetime' && bookingData.service && (
        <DateTimeSelection
          service={bookingData.service}
          selectedDate={bookingData.date}
          selectedTime={bookingData.time}
          onSelect={(date, time) => {
            updateData({ date, time });
            setStep('info');
          }}
          onBack={() => setStep('service')}
        />
      )}

      {step === 'info' && (
        <ClientInformation
          data={bookingData}
          onSubmit={(data) => {
            updateData(data);
            setStep('confirm');
          }}
          onBack={() => setStep('datetime')}
        />
      )}

      {step === 'confirm' && bookingData.service && bookingData.date && bookingData.time && (
        <BookingConfirmation
          bookingData={bookingData as Required<BookingFormData>}
          onConfirm={handleSubmit}
          onBack={() => setStep('info')}
          isSubmitting={isSubmitting}
        />
      )}

      {step === 'success' && bookingData.service && bookingData.date && bookingData.time && (
        <BookingSuccess
          bookingId={bookingId}
          bookingData={bookingData as Required<BookingFormData>}
          onNewBooking={() => {
            setBookingData({
              clientName: '',
              clientEmail: '',
              clientPhone: '',
              specialRequests: '',
            });
            setBookingId('');
            setStep('service');
          }}
        />
      )}
    </div>
  );
}
