import Link from 'next/link';

export function ServicesSection() {
  return (
    <section className="w-full bg-cream py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark-gray mb-4">
            What we offer
          </h2>
          <p className="text-lg md:text-xl font-sans text-medium-gray">
            We perform the following procedures:
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Services */}
          <div className="space-y-8">
            {/* Service 1: Facial */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-dark-gray mb-4">
                Facial & Skin Therapies - Uncover Perfect Skin
              </h3>
              <p className="text-base md:text-lg font-sans text-medium-gray mb-6">
                Experience comprehensive facial treatments designed to rejuvenate and restore your skin's natural radiance. From deep cleansing to advanced therapies, each treatment is tailored to your unique needs.
              </p>
              <Link
                href="/face-skin"
                className="inline-block bg-accent-gold text-white px-8 py-3 rounded-full font-sans font-medium hover:bg-accent-gold/90 transition-colors"
              >
                View All Facial Treatments
              </Link>
            </div>

            {/* Service 2: Laser */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-dark-gray mb-4">
                Laser Hair Removal & Radiant Skin Therapies
              </h3>
              <p className="text-base md:text-lg font-sans text-medium-gray mb-6">
                Achieve smooth, hair-free skin with our advanced laser hair removal services. Safe and effective for both men and women, our treatments deliver long-lasting results with minimal discomfort.
              </p>
              <Link
                href="/laser-hair-removal"
                className="inline-block bg-accent-gold text-white px-8 py-3 rounded-full font-sans font-medium hover:bg-accent-gold/90 transition-colors"
              >
                View All Laser Services
              </Link>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex items-center justify-center">
            <div className="w-full h-96 bg-gradient-to-br from-beige to-light-yellow rounded-lg shadow-lg flex items-center justify-center">
              {/* Placeholder for salon equipment/products image */}
              <p className="text-medium-gray font-sans text-center px-8">
                [Salon Equipment & Products Image]
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
