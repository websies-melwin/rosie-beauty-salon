// Deep diagnosis of calendar issue
require('dotenv').config({ path: '.env.local' });
const { google } = require('googleapis');

async function diagnoseCalendar() {
  console.log('=== DEEP CALENDAR DIAGNOSIS ===\n');

  // Step 1: Check credentials
  console.log('1. CHECKING CREDENTIALS:');
  console.log('   Service Account:', process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL);
  console.log('   Calendar ID:', process.env.GOOGLE_CALENDAR_ID);
  console.log('   Private Key exists:', !!process.env.GOOGLE_PRIVATE_KEY);
  console.log('   Private Key starts with:', process.env.GOOGLE_PRIVATE_KEY?.substring(0, 30));

  // Step 2: Check if key format is correct
  console.log('\n2. CHECKING KEY FORMAT:');
  const key = process.env.GOOGLE_PRIVATE_KEY;
  if (key) {
    const hasCorrectStart = key.includes('-----BEGIN PRIVATE KEY-----');
    const hasCorrectEnd = key.includes('-----END PRIVATE KEY-----');
    const hasBackslashN = key.includes('\\n');
    const hasActualNewlines = key.includes('\n');

    console.log('   Has BEGIN marker:', hasCorrectStart ? '✅' : '❌');
    console.log('   Has END marker:', hasCorrectEnd ? '✅' : '❌');
    console.log('   Has \\n characters:', hasBackslashN ? '✅' : '❌');
    console.log('   Has actual newlines:', hasActualNewlines ? '✅' : '❌');

    if (!hasCorrectStart || !hasCorrectEnd) {
      console.log('   ❌ KEY IS MALFORMED!');
      return;
    }
  }

  // Step 3: Try to authenticate
  console.log('\n3. TESTING AUTHENTICATION:');
  try {
    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/calendar'],
    });

    // Get access token
    const tokens = await auth.getAccessToken();
    console.log('   ✅ Authentication successful!');
    console.log('   Access token obtained:', !!tokens.token);

    const calendar = google.calendar({ version: 'v3', auth });

    // Step 4: Check calendar access
    console.log('\n4. TESTING CALENDAR ACCESS:');
    try {
      const calInfo = await calendar.calendars.get({
        calendarId: process.env.GOOGLE_CALENDAR_ID,
      });
      console.log('   ✅ Can access calendar');
      console.log('   Calendar name:', calInfo.data.summary);
    } catch (error) {
      console.log('   ❌ CANNOT ACCESS CALENDAR!');
      console.log('   Error:', error.code, error.message);

      if (error.code === 404) {
        console.log('\n   💡 SOLUTION:');
        console.log('   Rosie needs to share her calendar with:');
        console.log('   ', process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL);
        console.log('\n   Steps:');
        console.log('   1. Go to calendar.google.com');
        console.log('   2. Find calendar:', process.env.GOOGLE_CALENDAR_ID);
        console.log('   3. Click Settings > Share with specific people');
        console.log('   4. Add:', process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL);
        console.log('   5. Permission: "Make changes to events"');
      }
      return;
    }

    // Step 5: Try to list recent events
    console.log('\n5. TESTING EVENT LISTING:');
    try {
      const events = await calendar.events.list({
        calendarId: process.env.GOOGLE_CALENDAR_ID,
        timeMin: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
        maxResults: 5,
        singleEvents: true,
        orderBy: 'startTime',
      });

      console.log('   ✅ Can list events');
      console.log('   Found', events.data.items?.length || 0, 'recent events');

      if (events.data.items && events.data.items.length > 0) {
        console.log('\n   Recent events:');
        events.data.items.forEach(event => {
          console.log('   -', event.summary);
        });
      }
    } catch (error) {
      console.log('   ❌ Cannot list events');
      console.log('   Error:', error.message);
    }

    // Step 6: Try to create a test event
    console.log('\n6. TESTING EVENT CREATION:');
    const testEvent = {
      summary: '[TEST] Calendar Diagnostic',
      description: 'Test event from diagnostic script. Safe to delete.',
      start: {
        dateTime: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString(),
        timeZone: 'Europe/London',
      },
      end: {
        dateTime: new Date(Date.now() + 3 * 60 * 60 * 1000).toISOString(),
        timeZone: 'Europe/London',
      },
      colorId: '11', // Red for visibility
    };

    try {
      const result = await calendar.events.insert({
        calendarId: process.env.GOOGLE_CALENDAR_ID,
        requestBody: testEvent,
      });

      console.log('   ✅ SUCCESS! Event created!');
      console.log('   Event ID:', result.data.id);
      console.log('   Event Link:', result.data.htmlLink);
      console.log('\n   📅 CHECK YOUR CALENDAR NOW!');
      console.log('   Calendar:', process.env.GOOGLE_CALENDAR_ID);
      console.log('   Look for: [TEST] Calendar Diagnostic');

      // Clean up
      console.log('\n7. CLEANING UP:');
      await calendar.events.delete({
        calendarId: process.env.GOOGLE_CALENDAR_ID,
        eventId: result.data.id,
      });
      console.log('   ✅ Test event deleted');

    } catch (error) {
      console.log('   ❌ FAILED to create event!');
      console.log('   Error Code:', error.code);
      console.log('   Error Message:', error.message);

      if (error.message.includes('attendees')) {
        console.log('\n   💡 This is the attendees error we fixed!');
      } else if (error.code === 403) {
        console.log('\n   💡 Permission denied - check calendar sharing');
      }
    }

  } catch (error) {
    console.log('   ❌ Authentication failed!');
    console.log('   Error:', error.message);
  }

  console.log('\n=== DIAGNOSIS COMPLETE ===\n');
}

diagnoseCalendar();
