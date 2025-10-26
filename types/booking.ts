export interface Booking {
  id: string;
  
  // Service Information
  service_id: string;
  service_name: string;
  service_category: 'facial' | 'laser';
  service_duration: number;
  service_price: number;
  
  // Booking Time
  booking_date: string; // YYYY-MM-DD
  booking_time: string; // HH:MM
  booking_end_time: string; // HH:MM
  
  // Client Information
  client_name: string;
  client_email: string;
  client_phone: string;
  special_requests?: string;
  
  // Status & Tracking
  status: 'confirmed' | 'cancelled' | 'completed' | 'no_show';
  google_calendar_event_id?: string;
  
  // Timestamps
  created_at: string;
  updated_at: string;
}

export interface CreateBookingInput {
  service_id: string;
  service_name: string;
  service_category: 'facial' | 'laser';
  service_duration: number;
  service_price: number;
  booking_date: string;
  booking_time: string;
  client_name: string;
  client_email: string;
  client_phone: string;
  special_requests?: string;
}

export interface TimeSlot {
  time: string;
  available: boolean;
}

export interface BusinessHours {
  day: string;
  open: string;
  close: string;
  closed: boolean;
}
