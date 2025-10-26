export function AboutStory() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Left Column - Text (60% width) */}
          <div className="lg:col-span-3">
            <p className="text-lg md:text-xl font-sans text-medium-gray leading-relaxed mb-8">
              Hello! I am a qualified beautician specializing in next-generation skincare treatments to help you achieve well-maintained, fresh skin. With a deep passion for beauty and wellness, I'm dedicated to offering personalized care and effective treatments. I look forward to helping each of you reveal your natural radiance and confidence.
            </p>

            {/* Closing Message */}
            <div className="mb-6">
              <p className="text-base md:text-lg font-sans text-medium-gray mb-2">
                With Love,
              </p>
              <p className="text-xl md:text-2xl font-serif italic text-accent-gold">
                Rosica Kachova
              </p>
            </div>

            {/* Signature Placeholder */}
            <div className="w-48 h-16 bg-gradient-to-r from-beige/30 to-transparent flex items-center justify-center">
              <p className="text-sm font-sans text-medium-gray italic">
                [Signature]
              </p>
            </div>
          </div>

          {/* Right Column - Photo (40% width) */}
          <div className="lg:col-span-2">
            <div className="w-full aspect-[3/4] bg-gradient-to-br from-beige to-light-yellow rounded-lg shadow-lg flex items-center justify-center">
              <p className="text-medium-gray font-sans text-center px-8">
                [Professional photo of Rosica]
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
