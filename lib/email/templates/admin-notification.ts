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

export function generateAdminNotificationEmail(booking: BookingDetails): string {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Booking Notification</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background-color: #F5F1E8;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #F5F1E8; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">

          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #8B7355 0%, #6B5645 100%); padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 32px; font-family: 'Cormorant Garamond', Georgia, serif; font-weight: 700;">
                🔔 New Booking Alert!
              </h1>
              <p style="margin: 10px 0 0 0; color: #F5F1E8; font-size: 16px;">
                You have a new appointment
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding: 40px 30px;">
              <p style="margin: 0 0 20px 0; color: #2C2C2C; font-size: 16px; line-height: 1.6;">
                Hello Rosie,
              </p>

              <p style="margin: 0 0 30px 0; color: #6B6B6B; font-size: 16px; line-height: 1.6;">
                A new booking has been made through your website. Here are the details:
              </p>

              <!-- Booking Details Card -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #F5F1E8; border-radius: 8px; padding: 20px; margin-bottom: 30px;">

                <!-- Client Info -->
                <tr>
                  <td style="padding: 10px 0;">
                    <strong style="color: #8B7355; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Client Information</strong>
                    <p style="margin: 5px 0 0 0; color: #2C2C2C; font-size: 18px; font-weight: 600;">
                      ${booking.client_name}
                    </p>
                    <p style="margin: 5px 0 0 0; color: #6B6B6B; font-size: 14px;">
                      📞 <a href="tel:${booking.client_phone}" style="color: #8B7355; text-decoration: none;">${booking.client_phone}</a><br>
                      ✉️ <a href="mailto:${booking.client_email}" style="color: #8B7355; text-decoration: none;">${booking.client_email}</a>
                    </p>
                  </td>
                </tr>

                <!-- Service -->
                <tr>
                  <td style="padding: 15px 0; border-top: 1px solid #E8DCC4;">
                    <strong style="color: #8B7355; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Service</strong>
                    <p style="margin: 5px 0 0 0; color: #2C2C2C; font-size: 18px; font-weight: 600;">
                      ${booking.service_name}
                    </p>
                  </td>
                </tr>

                <!-- Date & Time -->
                <tr>
                  <td style="padding: 15px 0; border-top: 1px solid #E8DCC4;">
                    <table width="100%">
                      <tr>
                        <td width="50%" style="padding-right: 10px;">
                          <strong style="color: #8B7355; font-size: 14px;">Date</strong>
                          <p style="margin: 5px 0 0 0; color: #2C2C2C; font-size: 16px;">
                            ${formatDate(booking.booking_date)}
                          </p>
                        </td>
                        <td width="50%" style="padding-left: 10px;">
                          <strong style="color: #8B7355; font-size: 14px;">Time</strong>
                          <p style="margin: 5px 0 0 0; color: #2C2C2C; font-size: 16px;">
                            ${formatTime(booking.booking_time)}
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Duration & Price -->
                <tr>
                  <td style="padding: 15px 0; border-top: 1px solid #E8DCC4;">
                    <table width="100%">
                      <tr>
                        <td width="50%" style="padding-right: 10px;">
                          <strong style="color: #8B7355; font-size: 14px;">Duration</strong>
                          <p style="margin: 5px 0 0 0; color: #2C2C2C; font-size: 16px;">
                            ${booking.service_duration} minutes
                          </p>
                        </td>
                        <td width="50%" style="padding-left: 10px;">
                          <strong style="color: #8B7355; font-size: 14px;">Price</strong>
                          <p style="margin: 5px 0 0 0; color: #2C2C2C; font-size: 18px; font-weight: 600;">
                            £${booking.service_price}
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                ${booking.special_requests ? `
                <tr>
                  <td style="padding: 15px 0; border-top: 1px solid #E8DCC4;">
                    <strong style="color: #8B7355; font-size: 14px;">Special Requests</strong>
                    <p style="margin: 5px 0 0 0; color: #2C2C2C; font-size: 16px;">
                      ${booking.special_requests}
                    </p>
                  </td>
                </tr>
                ` : ''}
              </table>

              <!-- Quick Actions -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 20px;">
                <tr>
                  <td align="center" style="padding: 15px 0;">
                    <table cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding: 0 5px;">
                          <a href="tel:${booking.client_phone}" style="display: inline-block; padding: 12px 24px; background-color: #8B7355; color: #ffffff; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 14px;">
                            📞 Call Client
                          </a>
                        </td>
                        <td style="padding: 0 5px;">
                          <a href="mailto:${booking.client_email}" style="display: inline-block; padding: 12px 24px; background-color: #E8DCC4; color: #2C2C2C; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 14px;">
                            ✉️ Email Client
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Reminder -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #FFF9E6; border-left: 4px solid #8B7355; padding: 15px 20px; margin-bottom: 30px; border-radius: 4px;">
                <tr>
                  <td>
                    <p style="margin: 0; color: #2C2C2C; font-size: 14px; line-height: 1.6;">
                      <strong>💵 Payment Reminder</strong><br>
                      Client has been informed to bring <strong>£${booking.service_price} in cash</strong>.
                    </p>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #F5F1E8; padding: 30px; text-align: center; border-top: 1px solid #E8DCC4;">
              <p style="margin: 0; color: #6B6B6B; font-size: 12px;">
                This is an automated notification from your booking system.<br>
                © ${new Date().getFullYear()} Rosie Beauty Salon
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}
