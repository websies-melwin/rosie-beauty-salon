import Link from 'next/link';

export function BeforeAfterSection() {
  return (
    <section className="w-full bg-cream py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark-gray mb-4">
            Before and After Transformations
          </h2>
        </div>

        {/* Before/After Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Before/After Image 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-sans font-semibold text-dark-gray mb-2 text-center">
                  BEFORE
                </p>
                <div className="aspect-square bg-gradient-to-br from-beige to-cream rounded-lg flex items-center justify-center">
                  <p className="text-medium-gray text-sm">
                    [Before Image]
                  </p>
                </div>
              </div>
              <div>
                <p className="text-sm font-sans font-semibold text-accent-gold mb-2 text-center">
                  AFTER
                </p>
                <div className="aspect-square bg-gradient-to-br from-light-yellow to-beige rounded-lg flex items-center justify-center">
                  <p className="text-medium-gray text-sm">
                    [After Image]
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Before/After Image 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-sans font-semibold text-dark-gray mb-2 text-center">
                  BEFORE
                </p>
                <div className="aspect-square bg-gradient-to-br from-beige to-cream rounded-lg flex items-center justify-center">
                  <p className="text-medium-gray text-sm">
                    [Before Image]
                  </p>
                </div>
              </div>
              <div>
                <p className="text-sm font-sans font-semibold text-accent-gold mb-2 text-center">
                  AFTER
                </p>
                <div className="aspect-square bg-gradient-to-br from-light-yellow to-beige rounded-lg flex items-center justify-center">
                  <p className="text-medium-gray text-sm">
                    [After Image]
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Explore Button */}
        <div className="text-center">
          <Link
            href="/gallery"
            className="inline-block bg-accent-gold text-white px-8 py-3 rounded-full font-sans font-medium hover:bg-accent-gold/90 transition-colors"
          >
            Explore
          </Link>
        </div>
      </div>
    </section>
  );
}
