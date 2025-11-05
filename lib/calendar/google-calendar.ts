import { google } from 'googleapis';

// Initialize Google Calendar with Service Account
function getCalendarClient() {
  // Check if credentials are available
  if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY) {
    console.error('Google Calendar credentials not configured');
    return null;
  }

  try {
    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/calendar'],
    });

    return google.calendar({ version: 'v3', auth });
  } catch (error) {
    console.error('Error initializing Google Calendar client:', error);
    return null;
  }
}

interface BookingDetails {
  client_name: string;
  client_email: string;
  client_phone: string;
  service_name: string;
  service_price: number;
  booking_date: string;
  booking_time: string;
  service_duration: number;
  special_requests?: string;
}

export async function createCalendarEvent(booking: BookingDetails) {
  console.log('🗓️  Creating calendar event for:', booking.client_name);
  console.log('📧 Service account email:', process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL);
  console.log('📅 Calendar ID:', process.env.GOOGLE_CALENDAR_ID);
  console.log('🔑 Private key present:', !!process.env.GOOGLE_PRIVATE_KEY);
  
  try {
    const calendar = getCalendarClient();

    if (!calendar) {
      console.error('❌ Calendar client failed to initialize');
      return {
        success: false,
        error: 'Calendar client not initialized - credentials missing',
      };
    }
    
    console.log('✅ Calendar client initialized successfully');

    // Parse booking date and time
    const [year, month, day] = booking.booking_date.split('-').map(Number);
    const [hours, minutes] = booking.booking_time.split(':').map(Number);

    // Create start date/time
    const startDateTime = new Date(year, month - 1, day, hours, minutes);

    // Calculate end time based on service duration
    const endDateTime = new Date(startDateTime);
    endDateTime.setMinutes(endDateTime.getMinutes() + booking.service_duration);

    // Format dates for Google Calendar
    const startISO = startDateTime.toISOString();
    const endISO = endDateTime.toISOString();

    // Create event description
    const description = `
Client: ${booking.client_name}
Phone: ${booking.client_phone}
Email: ${booking.client_email}
Service: ${booking.service_name}
Price: £${booking.service_price} (Cash payment)
Duration: ${booking.service_duration} minutes
${booking.special_requests ? `\nSpecial Requests: ${booking.special_requests}` : ''}
    `.trim();

    // Create the event
    const event = {
      summary: `${booking.service_name} - ${booking.client_name}`,
      description: description,
      start: {
        dateTime: startISO,
        timeZone: 'Europe/London',
      },
      end: {
        dateTime: endISO,
        timeZone: 'Europe/London',
      },
      // Note: Service accounts cannot add attendees without Domain-Wide Delegation
      // Client email is included in the description instead
      reminders: {
        useDefault: false,
        overrides: [
          { method: 'email', minutes: 24 * 60 }, // 1 day before
          { method: 'popup', minutes: 60 }, // 1 hour before
        ],
      },
      colorId: '10', // Green color for appointments
    };

    console.log('📤 Attempting to insert event into calendar...');
    console.log('📅 Using calendar ID:', process.env.GOOGLE_CALENDAR_ID || 'primary');
    
    const response = await calendar.events.insert({
      calendarId: process.env.GOOGLE_CALENDAR_ID || 'primary',
      requestBody: event,
    });

    console.log('✅ Calendar event created successfully!');
    console.log('🎉 Event ID:', response.data.id);
    console.log('🔗 Event link:', response.data.htmlLink);

    return {
      success: true,
      eventId: response.data.id,
      eventLink: response.data.htmlLink,
    };
  } catch (error) {
    console.error('❌ Error creating calendar event:', error);
    if (error instanceof Error) {
      console.error('❌ Error message:', error.message);
      console.error('❌ Error stack:', error.stack);
    }
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}
