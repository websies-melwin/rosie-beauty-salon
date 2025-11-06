// Check the latest booking in the database
require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

async function checkLatestBooking() {
  console.log('=== CHECKING LATEST BOOKING ===\n');

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  );

  const { data, error } = await supabase
    .from('bookings')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(1);

  if (error) {
    console.log('❌ Error fetching booking:', error);
    return;
  }

  if (!data || data.length === 0) {
    console.log('No bookings found');
    return;
  }

  const booking = data[0];
  console.log('Latest Booking:');
  console.log('---------------');
  console.log('ID:', booking.id);
  console.log('Client:', booking.client_name);
  console.log('Email:', booking.client_email);
  console.log('Service:', booking.service_name);
  console.log('Date:', booking.booking_date);
  console.log('Time:', booking.booking_time);
  console.log('Status:', booking.status);
  console.log('Created:', booking.created_at);
  console.log('\n📅 Calendar Event ID:', booking.google_calendar_event_id || '❌ NULL (not set)');

  if (!booking.google_calendar_event_id) {
    console.log('\n⚠️  The calendar event ID was NOT saved to the database!');
    console.log('This confirms the calendar creation failed.');
  } else {
    console.log('\n✅ Calendar event ID exists - the event was created!');
  }
}

checkLatestBooking();
