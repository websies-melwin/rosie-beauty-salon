export function AboutSection() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark-gray mb-6">
              Welcome to Rosie Beauty Salon
            </h2>
            <p className="text-lg md:text-xl font-sans text-medium-gray leading-relaxed mb-8">
              I'm passionate about helping you look and feel your best. Each treatment is designed with care and attention, using only high-quality products. My goal is to provide a relaxing, rejuvenating experience tailored to your unique beauty needs. See you soon!
            </p>
            {/* Signature Placeholder */}
            <div className="mt-8">
              <p className="font-serif italic text-2xl text-accent-gold">
                ~ Rosica
              </p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md h-96 bg-gradient-to-br from-light-yellow to-beige rounded-lg shadow-lg flex items-center justify-center">
              {/* Placeholder for Rosica's photo */}
              <p className="text-medium-gray font-sans text-center px-8">
                [Rosica's Photo]
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
