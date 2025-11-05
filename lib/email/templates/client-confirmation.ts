interface BookingDetails {
  client_name: string;
  service_name: string;
  service_price: number;
  booking_date: string;
  booking_time: string;
  service_duration: number;
  special_requests?: string;
}

export function generateClientConfirmationEmail(booking: BookingDetails): string {
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
  <title>Booking Confirmation</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background-color: #F5F1E8;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #F5F1E8; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">

          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #F4E9A3 0%, #E8DCC4 100%); padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: #2C2C2C; font-size: 32px; font-family: 'Cormorant Garamond', Georgia, serif; font-weight: 700;">
                Booking Confirmed! ✨
              </h1>
              <p style="margin: 10px 0 0 0; color: #6B6B6B; font-size: 16px;">
                We're excited to see you soon!
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding: 40px 30px;">
              <p style="margin: 0 0 20px 0; color: #2C2C2C; font-size: 16px; line-height: 1.6;">
                Hello <strong>${booking.client_name}</strong>,
              </p>

              <p style="margin: 0 0 30px 0; color: #6B6B6B; font-size: 16px; line-height: 1.6;">
                Thank you for booking with Rosie Beauty Salon! Your appointment has been confirmed. Here are your booking details:
              </p>

              <!-- Booking Details Card -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #F5F1E8; border-radius: 8px; padding: 20px; margin-bottom: 30px;">
                <tr>
                  <td style="padding: 10px 0;">
                    <strong style="color: #8B7355; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Service</strong>
                    <p style="margin: 5px 0 0 0; color: #2C2C2C; font-size: 18px; font-weight: 600;">
                      ${booking.service_name}
                    </p>
                  </td>
                </tr>

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

              <!-- Important Notice -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #FFF9E6; border-left: 4px solid #8B7355; padding: 15px 20px; margin-bottom: 30px; border-radius: 4px;">
                <tr>
                  <td>
                    <p style="margin: 0; color: #2C2C2C; font-size: 14px; line-height: 1.6;">
                      <strong>💵 Cash Payment Required</strong><br>
                      Please bring <strong>£${booking.service_price} in cash</strong> for your appointment.
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Location & Contact -->
              <h3 style="margin: 30px 0 15px 0; color: #2C2C2C; font-size: 18px; font-family: 'Cormorant Garamond', Georgia, serif;">
                Visit Us At:
              </h3>

              <p style="margin: 0 0 20px 0; color: #6B6B6B; font-size: 16px; line-height: 1.8;">
                📍 <strong>49C Orchard Street</strong><br>
                Weston-super-Mare, BS23 1RJ<br>
                📞 <a href="tel:07414601010" style="color: #8B7355; text-decoration: none;">07414 601010</a><br>
                ✉️ <a href="mailto:rosiebeautyst@gmail.com" style="color: #8B7355; text-decoration: none;">rosiebeautyst@gmail.com</a>
              </p>

              <p style="margin: 30px 0 0 0; color: #6B6B6B; font-size: 14px; line-height: 1.6;">
                <em>If you need to cancel or reschedule, please contact us at least 24 hours in advance.</em>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #F5F1E8; padding: 30px; text-align: center; border-top: 1px solid #E8DCC4;">
              <p style="margin: 0 0 10px 0; color: #6B6B6B; font-size: 14px;">
                Follow us on social media
              </p>
              <p style="margin: 0 0 15px 0;">
                <a href="https://www.instagram.com/rosiebeautyst" style="color: #8B7355; text-decoration: none; margin: 0 10px;">Instagram</a>
                <a href="https://www.facebook.com/profile.php?id=61575707164944" style="color: #8B7355; text-decoration: none; margin: 0 10px;">Facebook</a>
              </p>
              <p style="margin: 0; color: #6B6B6B; font-size: 12px;">
                © ${new Date().getFullYear()} Rosie Beauty Salon. All rights reserved.
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
