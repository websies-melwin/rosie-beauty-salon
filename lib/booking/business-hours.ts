import { BusinessHours } from '@/types/booking';

// Business hours from requirements
export const BUSINESS_HOURS: BusinessHours[] = [
  { day: 'Monday', open: '09:00', close: '20:00', closed: false },
  { day: 'Tuesday', open: '09:00', close: '18:00', closed: false },
  { day: 'Wednesday', open: '09:00', close: '20:00', closed: false },
  { day: 'Thursday', open: '09:00', close: '18:00', closed: false },
  { day: 'Friday', open: '09:00', close: '20:00', closed: false },
  { day: 'Saturday', open: '10:00', close: '14:00', closed: false },
  { day: 'Sunday', open: '00:00', close: '00:00', closed: true },
];

export const MINIMUM_BOOKING_DAYS = 2; // 2 days in advance
export const BUFFER_MINUTES = 15; // 15-minute buffer between appointments

export function getBusinessHoursForDate(date: Date): BusinessHours | null {
  const dayIndex = date.getDay(); // 0 = Sunday, 1 = Monday, etc.
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayName = dayNames[dayIndex];
  
  return BUSINESS_HOURS.find(bh => bh.day === dayName) || null;
}

export function isDateAvailableForBooking(date: Date): boolean {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const bookingDate = new Date(date);
  bookingDate.setHours(0, 0, 0, 0);
  
  // Check if date is at least MINIMUM_BOOKING_DAYS in the future
  const diffTime = bookingDate.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays < MINIMUM_BOOKING_DAYS) {
    return false;
  }
  
  // Check if the business is open on this day
  const businessHours = getBusinessHoursForDate(bookingDate);
  if (!businessHours || businessHours.closed) {
    return false;
  }
  
  return true;
}

export function timeToMinutes(time: string): number {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
}

export function minutesToTime(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
}
