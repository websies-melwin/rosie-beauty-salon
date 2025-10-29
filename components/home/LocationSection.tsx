import { MapPin, Phone } from 'lucide-react';

export function LocationSection() {
  return (
    <section className="w-full bg-beige py-16 md:py-24 relative overflow-hidden">
      {/* Subtle Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-accent-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent-gold/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full mb-4 shadow-sm">
            <MapPin className="h-4 w-4 text-accent-gold" />
            <span className="text-accent-gold font-serif font-semibold text-sm">
              Location & Hours
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark-gray mb-4">
            Visit Us
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div className="bg-white rounded-xl shadow-xl p-8 border border-accent-gold/10">
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

          {/* Right Column - Salon Video */}
          <div className="flex items-center justify-center">
            <video
              className="h-[500px] w-auto rounded-xl shadow-xl border-2 border-accent-gold/20"
              autoPlay
              loop
              muted
              playsInline
              controls
              preload="metadata"
            >
              <source src="/videos/salon-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
