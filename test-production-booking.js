// Test the production booking API
async function testProductionBooking() {
  console.log('=== PRODUCTION BOOKING TEST ===\n');

  const PRODUCTION_URL = 'https://rosiebeautysalon-fwxqt8n3d-websies-projects.vercel.app';

  const testBooking = {
    service_id: 'test-service-prod',
    service_name: 'Production Test Service',
    service_category: 'test',
    service_duration: 30,
    service_price: 25,
    booking_date: '2025-02-20',
    booking_time: '11:00',
    client_name: 'Production Test Client',
    client_email: 'rosiebeautyst@gmail.com', // Send to Rosie for testing
    client_phone: '07414601010',
    special_requests: 'PRODUCTION TEST - Please ignore and delete',
  };

  console.log('Booking Details:');
  console.log(JSON.stringify(testBooking, null, 2));
  console.log('\nSending to:', `${PRODUCTION_URL}/api/bookings/create`);
  console.log('⏳ Please wait...\n');

  try {
    const response = await fetch(`${PRODUCTION_URL}/api/bookings/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testBooking),
    });

    console.log('Response Status:', response.status);
    console.log('Response Status Text:', response.statusText);

    const data = await response.json();

    if (response.ok) {
      console.log('\n✅ BOOKING CREATED!\n');
      console.log('Booking ID:', data.booking_id);
      console.log('\nResults:');
      console.log('├─ Emails sent:', data.emails_sent ? '✅ YES' : '❌ NO');
      console.log('└─ Calendar created:', data.calendar_created ? '✅ YES' : '❌ NO');

      if (!data.calendar_created) {
        console.log('\n❌ CALENDAR EVENT FAILED TO CREATE!');
        console.log('\nPossible causes:');
        console.log('1. GOOGLE_PRIVATE_KEY not set correctly in Vercel');
        console.log('2. The private key has incorrect formatting (missing \\n characters)');
        console.log('3. GOOGLE_SERVICE_ACCOUNT_EMAIL is incorrect');
        console.log('4. GOOGLE_CALENDAR_ID is incorrect');
        console.log('5. Calendar has not been shared with the service account');
      } else {
        console.log('\n🎉 SUCCESS! Calendar event was created!');
        console.log('Check Rosie\'s calendar at: rosicakachova@googlemail.com');
      }

      console.log('\n📧 Check if emails were received at: rosiebeautyst@gmail.com');

    } else {
      console.log('\n❌ BOOKING FAILED\n');
      console.log('Error:', data);
    }

  } catch (error) {
    console.log('\n❌ REQUEST FAILED\n');
    console.log('Error:', error.message);
    console.log('\nThis might mean:');
    console.log('- The production URL is incorrect');
    console.log('- The API endpoint is not accessible');
    console.log('- Network connectivity issues');
  }

  console.log('\n=== TEST COMPLETE ===\n');
}

testProductionBooking();
