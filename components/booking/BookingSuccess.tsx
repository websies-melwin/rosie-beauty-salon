import Link from 'next/link';

interface BookingSuccessProps {
  bookingId: string;
  bookingData: {
    service?: {
      name: string;
    };
    date?: string;
    time?: string;
    clientEmail: string;
  };
  onNewBooking: () => void;
}

export function BookingSuccess({
  bookingId,
  bookingData,
  onNewBooking,
}: BookingSuccessProps) {
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

  return (
    <div className="max-w-2xl mx-auto text-center space-y-8">
      {/* Success Icon */}
      <div className="flex justify-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
          <svg
            className="w-12 h-12 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
      </div>

      {/* Success Message */}
      <div>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark-gray mb-3">
          Booking Confirmed!
        </h2>
        <p className="text-lg font-sans text-medium-gray">
          Your appointment has been successfully booked.
        </p>
      </div>

      {/* Booking Reference */}
      <div className="bg-accent-gold/10 rounded-lg p-6 border-2 border-accent-gold">
        <p className="text-sm font-sans text-medium-gray mb-2">
          Booking Reference
        </p>
        <p className="text-2xl font-mono font-bold text-dark-gray tracking-wider">
          {bookingId.toUpperCase().substring(0, 8)}
        </p>
      </div>

      {/* Booking Summary */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-cream text-left">
        <h3 className="text-lg font-serif font-bold text-dark-gray mb-4 text-center">
          Appointment Summary
        </h3>
        <div className="space-y-3">
          <div className="flex justify-between items-start">
            <span className="font-sans text-medium-gray">Service:</span>
            <span className="font-sans font-semibold text-dark-gray text-right">
              {bookingData.service?.name}
            </span>
          </div>
          <div className="flex justify-between items-start">
            <span className="font-sans text-medium-gray">Date:</span>
            <span className="font-sans font-semibold text-dark-gray text-right">
              {bookingData.date && formatDate(bookingData.date)}
            </span>
          </div>
          <div className="flex justify-between items-start">
            <span className="font-sans text-medium-gray">Time:</span>
            <span className="font-sans font-semibold text-dark-gray">
              {bookingData.time && formatTime(bookingData.time)}
            </span>
          </div>
        </div>
      </div>

      {/* Email Confirmation Notice */}
      <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
        <div className="flex items-start gap-3">
          <svg
            className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <div className="text-left">
            <p className="text-sm font-sans font-semibold text-blue-900 mb-1">
              Check your email
            </p>
            <p className="text-sm font-sans text-blue-800">
              A confirmation email has been sent to{' '}
              <span className="font-semibold">{bookingData.clientEmail}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Important Information */}
      <div className="text-left bg-gray-50 rounded-lg p-5 border border-gray-200">
        <h4 className="font-sans font-bold text-dark-gray mb-3">
          Important Information:
        </h4>
        <ul className="space-y-2 text-sm font-sans text-medium-gray">
          <li className="flex items-start gap-2">
            <span className="text-accent-gold mt-1">•</span>
            <span>Please arrive 5-10 minutes before your appointment time</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent-gold mt-1">•</span>
            <span>To cancel or reschedule, please contact us at least 24 hours in advance</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent-gold mt-1">•</span>
            <span>If you have any questions, feel free to call us at 07414 601010</span>
          </li>
        </ul>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <button
          type="button"
          onClick={onNewBooking}
          className="flex-1 px-6 py-3 bg-accent-gold text-white font-sans font-medium rounded-lg hover:bg-accent-gold/90 transition-colors"
        >
          Book Another Appointment
        </button>
        <Link
          href="/"
          className="flex-1 px-6 py-3 border-2 border-dark-gray text-dark-gray font-sans font-medium rounded-lg hover:bg-dark-gray hover:text-white transition-colors text-center"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}
