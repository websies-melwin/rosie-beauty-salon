interface BookingConfirmationProps {
  bookingData: {
    service?: {
      id: string;
      name: string;
      duration: number;
      price: number;
    };
    date?: string;
    time?: string;
    clientName: string;
    clientEmail: string;
    clientPhone: string;
    specialRequests: string;
  };
  onConfirm: () => void;
  onBack: () => void;
  isSubmitting: boolean;
}

export function BookingConfirmation({
  bookingData,
  onConfirm,
  onBack,
  isSubmitting,
}: BookingConfirmationProps) {
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
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-dark-gray mb-2">
          Confirm Your Booking
        </h2>
        <p className="text-base font-sans text-medium-gray">
          Please review your booking details before confirming
        </p>
      </div>

      {/* Service Details */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-cream">
        <h3 className="text-lg font-serif font-bold text-dark-gray mb-4 pb-2 border-b border-cream">
          Service Details
        </h3>
        <div className="space-y-3">
          <div className="flex justify-between items-start">
            <span className="font-sans text-medium-gray">Service:</span>
            <span className="font-sans font-semibold text-dark-gray text-right">
              {bookingData.service?.name}
            </span>
          </div>
          <div className="flex justify-between items-start">
            <span className="font-sans text-medium-gray">Duration:</span>
            <span className="font-sans font-semibold text-dark-gray">
              {bookingData.service?.duration} minutes
            </span>
          </div>
          <div className="flex justify-between items-start">
            <span className="font-sans text-medium-gray">Price:</span>
            <span className="font-sans font-semibold text-accent-gold text-lg">
              £{bookingData.service?.price}
            </span>
          </div>
        </div>
      </div>

      {/* Appointment Details */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-cream">
        <h3 className="text-lg font-serif font-bold text-dark-gray mb-4 pb-2 border-b border-cream">
          Appointment Details
        </h3>
        <div className="space-y-3">
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

      {/* Client Details */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-cream">
        <h3 className="text-lg font-serif font-bold text-dark-gray mb-4 pb-2 border-b border-cream">
          Your Details
        </h3>
        <div className="space-y-3">
          <div className="flex justify-between items-start">
            <span className="font-sans text-medium-gray">Name:</span>
            <span className="font-sans font-semibold text-dark-gray text-right">
              {bookingData.clientName}
            </span>
          </div>
          <div className="flex justify-between items-start">
            <span className="font-sans text-medium-gray">Email:</span>
            <span className="font-sans font-semibold text-dark-gray text-right break-all">
              {bookingData.clientEmail}
            </span>
          </div>
          <div className="flex justify-between items-start">
            <span className="font-sans text-medium-gray">Phone:</span>
            <span className="font-sans font-semibold text-dark-gray">
              {bookingData.clientPhone}
            </span>
          </div>
          {bookingData.specialRequests && (
            <div className="flex flex-col gap-2 pt-2 border-t border-cream">
              <span className="font-sans text-medium-gray">Special Requests:</span>
              <span className="font-sans text-dark-gray">
                {bookingData.specialRequests}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Cash Payment Notice */}
      <div className="bg-accent-gold/10 rounded-lg p-5 border-2 border-accent-gold">
        <p className="text-base font-sans text-dark-gray font-semibold mb-2">
          💵 Cash Payment Required
        </p>
        <p className="text-sm font-sans text-dark-gray">
          Please bring <strong>£{bookingData.service?.price} in cash</strong> for your appointment. 
          We currently accept cash payments only.
        </p>
      </div>

      {/* Important Notice */}
      <div className="bg-cream rounded-lg p-4 border border-medium-gray/20">
        <p className="text-sm font-sans text-dark-gray">
          <strong>Please note:</strong> You will receive a confirmation email once your booking is confirmed. 
          If you need to cancel or reschedule, please contact us at least 24 hours in advance.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <button
          type="button"
          onClick={onBack}
          disabled={isSubmitting}
          className="flex-1 px-6 py-3 border-2 border-dark-gray text-dark-gray font-sans font-medium rounded-lg hover:bg-dark-gray hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Back
        </button>
        <button
          type="button"
          onClick={onConfirm}
          disabled={isSubmitting}
          className="flex-1 px-6 py-3 bg-accent-gold text-white font-sans font-medium rounded-lg hover:bg-accent-gold/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Processing your booking...' : 'Confirm Booking'}
        </button>
      </div>
    </div>
  );
}
