import { Images } from 'lucide-react';

export function GalleryHero() {
  return (
    <section className="w-full bg-gradient-to-b from-cream via-beige to-cream py-20 md:py-32 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-accent-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent-gold/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-5 py-2.5 rounded-full mb-6 shadow-sm">
          <Images className="h-4 w-4 text-accent-gold" />
          <span className="text-accent-gold font-serif font-semibold text-sm">
            Our Results
          </span>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-dark-gray mb-8">
          Before & After Gallery
        </h1>

        <p className="text-lg md:text-xl font-sans text-medium-gray leading-relaxed max-w-3xl mx-auto">
          Discover real transformations from our satisfied clients. See the remarkable results achieved through our professional facial treatments and advanced laser hair removal services.
        </p>
      </div>
    </section>
  );
}
