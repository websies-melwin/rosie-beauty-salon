import { useState, useEffect } from 'react';
import { Service } from '@/data/services';
import { TimeSlot } from '@/types/booking';
import { isDateAvailableForBooking } from '@/lib/booking/business-hours';

interface DateTimeSelectionProps {
  service: Service;
  selectedDate?: string;
  selectedTime?: string;
  onSelect: (date: string, time: string) => void;
  onBack: () => void;
}

export function DateTimeSelection({ service, selectedDate, selectedTime, onSelect, onBack }: DateTimeSelectionProps) {
  const [date, setDate] = useState(selectedDate || '');
  const [time, setTime] = useState(selectedTime || '');
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([]);
  const [isLoadingSlots, setIsLoadingSlots] = useState(false);

  // Generate next 30 days
  const generateAvailableDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 0; i < 30; i++) {
      const currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);
      
      if (isDateAvailableForBooking(currentDate)) {
        dates.push(currentDate.toISOString().split('T')[0]);
      }
    }
    
    return dates;
  };

  const availableDates = generateAvailableDates();

  // Fetch time slots when date changes
  useEffect(() => {
    if (!date) return;

    const fetchTimeSlots = async () => {
      setIsLoadingSlots(true);
      try {
        const response = await fetch(
          `/api/bookings/available-slots?date=${date}&duration=${service.duration}`
        );
        const data = await response.json();
        setTimeSlots(data.slots || []);
      } catch (error) {
        console.error('Error fetching time slots:', error);
        setTimeSlots([]);
      } finally {
        setIsLoadingSlots(false);
      }
    };

    fetchTimeSlots();
  }, [date, service.duration]);

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-GB', { 
      weekday: 'short', 
      day: 'numeric', 
      month: 'short' 
    });
  };

  const canContinue = date && time;

  return (
    <div>
      <h2 className="text-2xl font-serif font-bold text-dark-gray mb-2">
        Select Date & Time
      </h2>
      <p className="text-base font-sans text-medium-gray mb-6">
        {service.name} • {service.duration} min • £{service.price}
      </p>

      {/* Date selection */}
      <div className="mb-6">
        <h3 className="text-lg font-sans font-medium text-dark-gray mb-3">Choose a Date</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 max-h-64 overflow-y-auto">
          {availableDates.map((d) => (
            <button
              key={d}
              onClick={() => { setDate(d); setTime(''); }}
              className={`p-3 rounded-lg border-2 text-sm font-sans transition-colors ${
                date === d
                  ? 'border-accent-gold bg-accent-gold/10 text-accent-gold font-medium'
                  : 'border-beige hover:border-accent-gold/50'
              }`}
            >
              {formatDate(d)}
            </button>
          ))}
        </div>
      </div>

      {/* Time selection */}
      {date && (
        <div className="mb-6">
          <h3 className="text-lg font-sans font-medium text-dark-gray mb-3">Choose a Time</h3>
          {isLoadingSlots ? (
            <p className="text-medium-gray">Loading available times...</p>
          ) : (
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 max-h-64 overflow-y-auto">
              {timeSlots.filter(slot => slot.available).map((slot) => (
                <button
                  key={slot.time}
                  onClick={() => setTime(slot.time)}
                  className={`p-2 rounded-lg border-2 text-sm font-sans transition-colors ${
                    time === slot.time
                      ? 'border-accent-gold bg-accent-gold/10 text-accent-gold font-medium'
                      : 'border-beige hover:border-accent-gold/50'
                  }`}
                >
                  {slot.time}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Actions */}
      <div className="flex gap-4">
        <button
          onClick={onBack}
          className="px-6 py-3 rounded-full border-2 border-dark-gray text-dark-gray font-sans font-medium hover:bg-dark-gray hover:text-white transition-colors"
        >
          Back
        </button>
        <button
          onClick={() => canContinue && onSelect(date, time)}
          disabled={!canContinue}
          className={`flex-1 px-6 py-3 rounded-full font-sans font-medium transition-colors ${
            canContinue
              ? 'bg-accent-gold text-white hover:bg-accent-gold/90'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
