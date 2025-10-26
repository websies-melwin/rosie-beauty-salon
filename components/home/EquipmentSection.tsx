export function EquipmentSection() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark-gray mb-4">
            Our Salon
          </h2>
          <h3 className="text-2xl md:text-3xl font-serif font-semibold text-accent-gold mb-6">
            Elite Equipment Advantage
          </h3>
          <p className="text-xl font-sans text-medium-gray mb-8">
            Our Commitment to Exceptional Care
          </p>
        </div>

        {/* Main Description */}
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-lg md:text-xl font-sans text-medium-gray leading-relaxed text-center">
            At Rosie Beauty Salon, we go above and beyond to deliver an unparalleled beauty experience. Each treatment is tailored to your unique needs, ensuring you leave with radiant, refreshed skin and a renewed sense of confidence.
          </p>
        </div>

        {/* Hydrafacial Highlight */}
        <div className="bg-gradient-to-r from-cream to-beige rounded-lg shadow-lg p-8 md:p-12 max-w-4xl mx-auto">
          <div className="text-center">
            {/* Icon Placeholder */}
            <div className="w-24 h-24 bg-accent-gold/20 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-accent-gold text-4xl">💧</span>
            </div>

            <h4 className="text-2xl md:text-3xl font-serif font-bold text-dark-gray mb-4">
              Hydrafacial: Cutting-Edge Skincare Technology
            </h4>
            <p className="text-base md:text-lg font-sans text-medium-gray leading-relaxed">
              We use the Hydrafacial machine, a top-of-the-line device celebrated for its powerful hydrating and rejuvenating effects. This advanced technology cleanses, exfoliates, and nourishes, offering remarkable results with no downtime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
