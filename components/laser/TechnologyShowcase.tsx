export function TechnologyShowcase() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark-gray mb-6">
              Advanced ICE MAX Technology
            </h2>
            <p className="text-base md:text-lg font-sans text-medium-gray leading-relaxed">
              Thanks to our highly powerful ICE MAX diode laser, we offer professional, permanent hair reduction which gives amazing results. The advanced cooling system ensures comfort during treatment while delivering precise, effective results.
            </p>
          </div>

          {/* Right Column - Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-beige to-light-yellow rounded-lg p-6 flex flex-col items-center justify-center aspect-square">
              <p className="text-medium-gray font-sans text-center mb-2">[Equipment Image]</p>
              <p className="text-accent-gold font-serif font-semibold">Get Smooth</p>
            </div>
            <div className="bg-gradient-to-br from-light-yellow to-beige rounded-lg p-6 flex flex-col items-center justify-center aspect-square">
              <p className="text-medium-gray font-sans text-center mb-2">[Treatment Image]</p>
              <p className="text-accent-gold font-serif font-semibold">Painless</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
