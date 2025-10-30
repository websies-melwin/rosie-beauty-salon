import { BookingForm } from '@/components/booking/BookingForm';
import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Book Appointment',
  description: 'Book your facial treatment or laser hair removal appointment online. Choose your service, select a date and time that works for you. Easy online booking.',
  path: '/booking',
});

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-cream py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-dark-gray mb-4">
            Book Your Appointment
          </h1>
          <p className="text-lg md:text-xl font-sans text-medium-gray">
            Select your desired service and choose a convenient time
          </p>
        </div>

        {/* Payment Notice */}
        <div className="bg-accent-gold/10 border-2 border-accent-gold/30 rounded-lg p-4 mb-8">
          <p className="text-center text-base font-sans text-dark-gray">
            <span className="font-semibold">Payment:</span> All services are paid in person with cash only
          </p>
        </div>
        
        <BookingForm />
      </div>
    </div>
  );
}
