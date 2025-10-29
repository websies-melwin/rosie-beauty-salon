import Image from 'next/image';

export function AboutStory() {
  return (
    <section className="w-full bg-white py-16 md:py-24 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-accent-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-accent-gold/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Left Column - Text (60% width) */}
          <div className="lg:col-span-3">
            {/* Badges */}
            <div className="flex flex-wrap gap-3 mb-6">
              <div className="inline-flex items-center px-4 py-2 bg-cream/50 rounded-full border border-accent-gold/20">
                <span className="text-xs font-sans font-semibold text-dark-gray">Qualified Beautician</span>
              </div>
              <div className="inline-flex items-center px-4 py-2 bg-cream/50 rounded-full border border-accent-gold/20">
                <span className="text-xs font-sans font-semibold text-dark-gray">Skincare Specialist</span>
              </div>
              <div className="inline-flex items-center px-4 py-2 bg-cream/50 rounded-full border border-accent-gold/20">
                <span className="text-xs font-sans font-semibold text-dark-gray">Personalized Care</span>
              </div>
            </div>

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

            {/* Decorative Line */}
            <div className="mt-8">
              <div className="w-32 h-0.5 bg-gradient-to-r from-accent-gold to-transparent"></div>
            </div>
          </div>

          {/* Right Column - Photo (40% width) */}
          <div className="lg:col-span-2">
            <div className="w-full aspect-[3/4] relative rounded-xl shadow-xl overflow-hidden border-2 border-accent-gold/20">
              <Image
                src="/images/rosie-27.png"
                alt="Rosica Kachova - Professional Beautician"
                fill
                className="object-cover"
                quality={90}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
