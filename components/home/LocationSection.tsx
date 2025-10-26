import { MapPin, Phone } from 'lucide-react';

export function LocationSection() {
  return (
    <section className="w-full bg-beige py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark-gray mb-4">
            Visit Us
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            {/* Location */}
            <div className="mb-8">
              <div className="flex items-start mb-4">
                <MapPin className="h-6 w-6 text-accent-gold mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-serif font-bold text-dark-gray mb-2">
                    Address
                  </h3>
                  <p className="text-base font-sans text-medium-gray">
                    Orchard Street, 49C<br />
                    Weston-super-Mare<br />
                    BS23 1RJ
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="mb-8">
              <div className="flex items-start mb-4">
                <Phone className="h-6 w-6 text-accent-gold mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-serif font-bold text-dark-gray mb-2">
                    Contact
                  </h3>
                  <a
                    href="tel:07414601010"
                    className="text-base font-sans text-medium-gray hover:text-accent-gold transition-colors"
                  >
                    Text me: 07414 601010
                  </a>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div>
              <h3 className="text-xl font-serif font-bold text-dark-gray mb-4">
                Business Hours
              </h3>
              <div className="space-y-2 text-base font-sans text-medium-gray">
                <div className="flex justify-between">
                  <span className="font-medium">Mon, Wed, Fri:</span>
                  <span>9 AM - 8 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Tue, Thu:</span>
                  <span>9 AM - 6 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Sat:</span>
                  <span>10 AM - 2 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Sun:</span>
                  <span className="text-accent-gold font-semibold">CLOSED</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Google Maps */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="w-full h-full min-h-[400px] bg-gradient-to-br from-beige to-light-yellow flex items-center justify-center">
              {/* Placeholder for Google Maps embed */}
              <p className="text-medium-gray font-sans text-center px-8">
                [Google Maps Embed - 49C Orchard Street, Weston-super-Mare BS23 1RJ]
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
