// Test script to verify Google Calendar access
require('dotenv').config({ path: '.env.local' });
const { google } = require('googleapis');

async function testCalendarAccess() {
  console.log('=== GOOGLE CALENDAR ACCESS TEST ===\n');

  // Check environment variables
  console.log('1. ENVIRONMENT VARIABLES:');
  console.log('  Service Account Email:', process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL);
  console.log('  Calendar ID:', process.env.GOOGLE_CALENDAR_ID);
  console.log('  Private Key Present:', !!process.env.GOOGLE_PRIVATE_KEY);
  console.log('  Private Key Length:', process.env.GOOGLE_PRIVATE_KEY?.length || 0);

  if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY) {
    console.log('\n❌ Missing credentials!');
    return;
  }

  try {
    // Initialize the service account
    console.log('\n2. INITIALIZING SERVICE ACCOUNT:');
    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/calendar'],
    });

    const calendar = google.calendar({ version: 'v3', auth });
    console.log('  ✅ Service account initialized');

    // Test 1: Try to read the calendar
    console.log('\n3. TESTING CALENDAR READ ACCESS:');
    console.log('  Attempting to read calendar:', process.env.GOOGLE_CALENDAR_ID);

    try {
      const calendarInfo = await calendar.calendars.get({
        calendarId: process.env.GOOGLE_CALENDAR_ID,
      });

      console.log('  ✅ SUCCESS! Can read calendar');
      console.log('  Calendar Summary:', calendarInfo.data.summary);
      console.log('  Calendar Timezone:', calendarInfo.data.timeZone);
    } catch (error) {
      console.log('  ❌ FAILED to read calendar');
      console.log('  Error Code:', error.code);
      console.log('  Error Message:', error.message);

      if (error.code === 404) {
        console.log('\n  ⚠️  ERROR EXPLANATION:');
        console.log('  The service account does NOT have access to this calendar!');
        console.log('  This means Rosie has not shared her calendar with the service account.');
      } else if (error.code === 403) {
        console.log('\n  ⚠️  ERROR EXPLANATION:');
        console.log('  Permission denied - the service account cannot access this calendar.');
      }

      console.log('\n  📋 TO FIX THIS:');
      console.log('  1. Rosie needs to open Google Calendar: https://calendar.google.com');
      console.log('  2. Find her calendar in the left sidebar');
      console.log('  3. Click the three dots (...) next to the calendar name');
      console.log('  4. Click "Settings and sharing"');
      console.log('  5. Scroll to "Share with specific people or groups"');
      console.log('  6. Click "Add people and groups"');
      console.log('  7. Enter this email:', process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL);
      console.log('  8. Set permission to "Make changes to events"');
      console.log('  9. Click "Send"');

      return;
    }

    // Test 2: Try to create an event
    console.log('\n4. TESTING EVENT CREATION:');
    const testEvent = {
      summary: 'TEST EVENT - Please Delete',
      description: 'This is a test event created by the booking system. Please delete it.',
      start: {
        dateTime: new Date(Date.now() + 86400000).toISOString(), // Tomorrow
        timeZone: 'Europe/London',
      },
      end: {
        dateTime: new Date(Date.now() + 90000000).toISOString(), // Tomorrow + 1 hour
        timeZone: 'Europe/London',
      },
      colorId: '11', // Red color for test
    };

    try {
      const result = await calendar.events.insert({
        calendarId: process.env.GOOGLE_CALENDAR_ID,
        requestBody: testEvent,
      });

      console.log('  ✅ SUCCESS! Test event created');
      console.log('  Event ID:', result.data.id);
      console.log('  Event Link:', result.data.htmlLink);
      console.log('\n  📅 A test event has been created in the calendar.');
      console.log('  Please check the calendar and delete it.');

      // Try to delete the test event
      console.log('\n5. CLEANING UP TEST EVENT:');
      await calendar.events.delete({
        calendarId: process.env.GOOGLE_CALENDAR_ID,
        eventId: result.data.id,
      });
      console.log('  ✅ Test event deleted successfully');

    } catch (error) {
      console.log('  ❌ FAILED to create event');
      console.log('  Error Code:', error.code);
      console.log('  Error Message:', error.message);

      if (error.code === 403) {
        console.log('\n  ⚠️  The service account does not have permission to create events!');
        console.log('  Make sure the permission is set to "Make changes to events" not just "See all event details"');
      }
    }

    console.log('\n=== TEST COMPLETE ===\n');
    console.log('SUMMARY:');
    console.log('--------');
    console.log('If you see "SUCCESS" messages above, the calendar integration is working!');
    console.log('If you see "FAILED" messages, follow the instructions to share the calendar.');
    console.log('\n');

  } catch (error) {
    console.log('\n❌ UNEXPECTED ERROR:');
    console.log('  ', error.message);
  }
}

testCalendarAccess();
