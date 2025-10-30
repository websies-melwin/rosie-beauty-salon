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
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-dark-gray mb-2">
          Confirm Your Booking
        </h2>
        <p className="text-base md:text-lg font-sans text-medium-gray">
          Please review your booking details before confirming
        </p>
      </div>

      {/* Service Details */}
      <div className="bg-white rounded-lg p-5 md:p-6 shadow-sm border border-cream">
        <h3 className="text-lg md:text-xl font-serif font-bold text-dark-gray mb-4 pb-2 border-b border-cream">
          Service Details
        </h3>
        <div className="space-y-3">
          <div className="flex justify-between items-start gap-4">
            <span className="font-sans text-medium-gray text-sm md:text-base">Service:</span>
            <span className="font-sans font-semibold text-dark-gray text-right text-sm md:text-base">
              {bookingData.service?.name}
            </span>
          </div>
          <div className="flex justify-between items-start gap-4">
            <span className="font-sans text-medium-gray text-sm md:text-base">Duration:</span>
            <span className="font-sans font-semibold text-dark-gray text-sm md:text-base">
              {bookingData.service?.duration} minutes
            </span>
          </div>
          <div className="flex justify-between items-start gap-4">
            <span className="font-sans text-medium-gray text-sm md:text-base">Price:</span>
            <span className="font-sans font-semibold text-accent-gold text-lg md:text-xl">
              £{bookingData.service?.price}
            </span>
          </div>
        </div>
      </div>

      {/* Appointment Details */}
      <div className="bg-white rounded-lg p-5 md:p-6 shadow-sm border border-cream">
        <h3 className="text-lg md:text-xl font-serif font-bold text-dark-gray mb-4 pb-2 border-b border-cream">
          Appointment Details
        </h3>
        <div className="space-y-3">
          <div className="flex justify-between items-start gap-4">
            <span className="font-sans text-medium-gray text-sm md:text-base">Date:</span>
            <span className="font-sans font-semibold text-dark-gray text-right text-sm md:text-base">
              {bookingData.date && formatDate(bookingData.date)}
            </span>
          </div>
          <div className="flex justify-between items-start gap-4">
            <span className="font-sans text-medium-gray text-sm md:text-base">Time:</span>
            <span className="font-sans font-semibold text-dark-gray text-sm md:text-base">
              {bookingData.time && formatTime(bookingData.time)}
            </span>
          </div>
        </div>
      </div>

      {/* Client Details */}
      <div className="bg-white rounded-lg p-5 md:p-6 shadow-sm border border-cream">
        <h3 className="text-lg md:text-xl font-serif font-bold text-dark-gray mb-4 pb-2 border-b border-cream">
          Your Details
        </h3>
        <div className="space-y-3">
          <div className="flex justify-between items-start gap-4">
            <span className="font-sans text-medium-gray text-sm md:text-base">Name:</span>
            <span className="font-sans font-semibold text-dark-gray text-right text-sm md:text-base">
              {bookingData.clientName}
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-4">
            <span className="font-sans text-medium-gray text-sm md:text-base">Email:</span>
            <span className="font-sans font-semibold text-dark-gray sm:text-right break-all text-sm md:text-base">
              {bookingData.clientEmail}
            </span>
          </div>
          <div className="flex justify-between items-start gap-4">
            <span className="font-sans text-medium-gray text-sm md:text-base">Phone:</span>
            <span className="font-sans font-semibold text-dark-gray text-sm md:text-base">
              {bookingData.clientPhone}
            </span>
          </div>
          {bookingData.specialRequests && (
            <div className="flex flex-col gap-2 pt-2 border-t border-cream">
              <span className="font-sans text-medium-gray text-sm md:text-base">Special Requests:</span>
              <span className="font-sans text-dark-gray text-sm md:text-base">
                {bookingData.specialRequests}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Important Notice */}
      <div className="bg-accent-gold/10 rounded-lg p-4 md:p-5 border border-accent-gold/30">
        <p className="text-sm md:text-base font-sans text-dark-gray">
          <strong>Please note:</strong> You will receive a confirmation email once your booking is confirmed. 
          If you need to cancel or reschedule, please contact us at least 24 hours in advance.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4">
        <button
          type="button"
          onClick={onBack}
          disabled={isSubmitting}
          className="flex-1 px-6 py-3 md:py-4 border-2 border-dark-gray text-dark-gray font-sans font-medium text-base md:text-lg rounded-lg hover:bg-dark-gray hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Back
        </button>
        <button
          type="button"
          onClick={onConfirm}
          disabled={isSubmitting}
          className="flex-1 px-6 py-3 md:py-4 bg-accent-gold text-white font-sans font-medium text-base md:text-lg rounded-lg hover:bg-accent-gold/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Processing your booking...' : 'Confirm Booking'}
        </button>
      </div>
    </div>
  );
}
