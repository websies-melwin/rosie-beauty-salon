import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase/server';
import { generateTimeSlots } from '@/lib/booking/time-slots';
import { Booking } from '@/types/booking';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const date = searchParams.get('date');
    const duration = searchParams.get('duration');

    // Validate parameters
    if (!date || !duration) {
      return NextResponse.json(
        { error: 'Missing required parameters: date and duration' },
        { status: 400 }
      );
    }

    const serviceDuration = parseInt(duration, 10);
    if (isNaN(serviceDuration) || serviceDuration <= 0) {
      return NextResponse.json(
        { error: 'Invalid duration parameter' },
        { status: 400 }
      );
    }

    // Fetch existing bookings for the date
    const { data: bookings, error } = await supabaseAdmin
      .from('bookings')
      .select('*')
      .eq('booking_date', date)
      .eq('status', 'confirmed');

    if (error) {
      console.error('Error fetching bookings:', error);
      return NextResponse.json(
        { error: 'Failed to fetch bookings' },
        { status: 500 }
      );
    }

    // Generate available time slots
    const slots = generateTimeSlots(
      new Date(date),
      serviceDuration,
      (bookings as Booking[]) || []
    );

    return NextResponse.json({
      date,
      slots,
    });
  } catch (error) {
    console.error('Error in available-slots API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
