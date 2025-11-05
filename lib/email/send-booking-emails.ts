import { resend, EMAIL_CONFIG } from './resend';
import { generateClientConfirmationEmail } from './templates/client-confirmation';
import { generateAdminNotificationEmail } from './templates/admin-notification';

interface BookingEmailData {
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

export async function sendBookingEmails(booking: BookingEmailData) {
  try {
    // Check if API key is set at runtime
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set - emails will not be sent');
      return {
        success: false,
        error: 'RESEND_API_KEY not configured',
      };
    }
    // Send confirmation email to client
    const clientEmailResult = await resend.emails.send({
      from: `Rosie Beauty Salon <${EMAIL_CONFIG.from}>`,
      to: booking.client_email,
      subject: '✨ Booking Confirmed - Rosie Beauty Salon',
      html: generateClientConfirmationEmail(booking),
      replyTo: EMAIL_CONFIG.replyTo,
    });

    console.log('Client confirmation email sent:', clientEmailResult);

    // Send notification email to admin (Rosie)
    const adminEmailResult = await resend.emails.send({
      from: `Booking System <${EMAIL_CONFIG.from}>`,
      to: EMAIL_CONFIG.adminEmail,
      subject: `🔔 New Booking: ${booking.service_name} - ${booking.client_name}`,
      html: generateAdminNotificationEmail(booking),
      replyTo: booking.client_email, // Allow Rosie to reply directly to client
    });

    console.log('Admin notification email sent:', adminEmailResult);

    return {
      success: true,
      clientEmailId: clientEmailResult.data?.id,
      adminEmailId: adminEmailResult.data?.id,
    };
  } catch (error) {
    console.error('Error sending booking emails:', error);
    // Don't throw error - we don't want email failure to prevent booking
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}
