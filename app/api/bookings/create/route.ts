import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase/server';
import { calculateEndTime, isTimeSlotAvailable } from '@/lib/booking/time-slots';
import { CreateBookingInput, Booking } from '@/types/booking';
import { sendBookingEmails } from '@/lib/email/send-booking-emails';

export async function POST(request: NextRequest) {
  try {
    const body: CreateBookingInput = await request.json();

    // Validate required fields
    const requiredFields = [
      'service_id',
      'service_name',
      'service_category',
      'service_duration',
      'service_price',
      'booking_date',
      'booking_time',
      'client_name',
      'client_email',
      'client_phone',
    ];

    for (const field of requiredFields) {
      if (!body[field as keyof CreateBookingInput]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Fetch existing bookings for conflict check
    const { data: existingBookings, error: fetchError } = await supabaseAdmin
      .from('bookings')
      .select('*')
      .eq('booking_date', body.booking_date)
      .eq('status', 'confirmed');

    if (fetchError) {
      console.error('Error fetching bookings:', fetchError);
      return NextResponse.json(
        { error: 'Failed to check availability' },
        { status: 500 }
      );
    }

    // Check if time slot is still available
    const available = isTimeSlotAvailable(
      body.booking_date,
      body.booking_time,
      body.service_duration,
      (existingBookings as Booking[]) || []
    );

    if (!available) {
      return NextResponse.json(
        { 
          error: 'Time slot no longer available',
          code: 'SLOT_UNAVAILABLE'
        },
        { status: 409 }
      );
    }

    // Calculate end time
    const booking_end_time = calculateEndTime(
      body.booking_time,
      body.service_duration
    );

    // Create booking
    const { data: booking, error: insertError } = await supabaseAdmin
      .from('bookings')
      .insert({
        service_id: body.service_id,
        service_name: body.service_name,
        service_category: body.service_category,
        service_duration: body.service_duration,
        service_price: body.service_price,
        booking_date: body.booking_date,
        booking_time: body.booking_time,
        booking_end_time,
        client_name: body.client_name,
        client_email: body.client_email,
        client_phone: body.client_phone,
        special_requests: body.special_requests || null,
        status: 'confirmed',
      })
      .select()
      .single();

    if (insertError) {
      console.error('Error creating booking:', insertError);
      return NextResponse.json(
        { error: 'Failed to create booking' },
        { status: 500 }
      );
    }

    // Send confirmation emails
    const emailResult = await sendBookingEmails({
      client_name: booking.client_name,
      client_email: booking.client_email,
      client_phone: booking.client_phone,
      service_name: booking.service_name,
      service_price: booking.service_price,
      booking_date: booking.booking_date,
      booking_time: booking.booking_time,
      service_duration: booking.service_duration,
      special_requests: booking.special_requests || undefined,
    });

    if (!emailResult.success) {
      console.warn('Emails failed to send but booking was created:', emailResult.error);
    }

    // TODO: Create Google Calendar event (Phase 10)

    return NextResponse.json({
      success: true,
      booking_id: booking.id,
      message: 'Booking confirmed successfully',
      booking_details: booking,
      emails_sent: emailResult.success,
    });
  } catch (error) {
    console.error('Error in create booking API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
