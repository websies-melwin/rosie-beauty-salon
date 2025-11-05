import { Resend } from 'resend';

// Initialize Resend - will check at runtime, not build time
export const resend = new Resend(process.env.RESEND_API_KEY || '');

export const EMAIL_CONFIG = {
  from: process.env.EMAIL_FROM || 'bookings@rosiebeautysalon.com',
  adminEmail: process.env.ADMIN_EMAIL || 'rosiebeautyst@gmail.com',
  replyTo: process.env.EMAIL_FROM || 'bookings@rosiebeautysalon.com',
};
