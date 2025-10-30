import { Booking, TimeSlot } from '@/types/booking';
import { 
  getBusinessHoursForDate, 
  timeToMinutes, 
  minutesToTime,
  BUFFER_MINUTES 
} from './business-hours';

export function generateTimeSlots(
  date: Date,
  serviceDuration: number,
  existingBookings: Booking[]
): TimeSlot[] {
  const businessHours = getBusinessHoursForDate(date);
  if (!businessHours || businessHours.closed) {
    return [];
  }

  const openMinutes = timeToMinutes(businessHours.open);
  const closeMinutes = timeToMinutes(businessHours.close);
  const totalServiceTime = serviceDuration + BUFFER_MINUTES;
  
  const slots: TimeSlot[] = [];
  
  // Generate time slots based on service duration (minimum 30 min intervals)
  const slotInterval = Math.max(serviceDuration, 30);
  for (let time = openMinutes; time < closeMinutes; time += slotInterval) {
    const slotTime = minutesToTime(time);
    const slotEndTime = time + totalServiceTime;
    
    // Check if service would end before closing time
    if (slotEndTime > closeMinutes) {
      break;
    }
    
    // Check if slot conflicts with existing bookings
    const isAvailable = !existingBookings.some(booking => {
      const bookingStart = timeToMinutes(booking.booking_time);
      const bookingEnd = timeToMinutes(booking.booking_end_time);
      
      // Check if there's any overlap
      return (
        (time >= bookingStart && time < bookingEnd) ||
        (slotEndTime > bookingStart && slotEndTime <= bookingEnd) ||
        (time <= bookingStart && slotEndTime >= bookingEnd)
      );
    });
    
    slots.push({
      time: slotTime,
      available: isAvailable,
    });
  }
  
  return slots;
}

export function calculateEndTime(startTime: string, durationMinutes: number): string {
  const startMinutes = timeToMinutes(startTime);
  const endMinutes = startMinutes + durationMinutes + BUFFER_MINUTES;
  return minutesToTime(endMinutes);
}

export function isTimeSlotAvailable(
  date: string,
  time: string,
  duration: number,
  existingBookings: Booking[]
): boolean {
  const slots = generateTimeSlots(new Date(date), duration, existingBookings);
  const slot = slots.find(s => s.time === time);
  return slot?.available ?? false;
}
