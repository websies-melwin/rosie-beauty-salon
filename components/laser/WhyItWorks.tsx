import { CheckCircle } from 'lucide-react';

export function WhyItWorks() {
  return (
    <section className="w-full bg-white py-16 md:py-24 relative overflow-hidden">
      {/* Subtle Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-accent-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-accent-gold/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-cream/60 backdrop-blur-sm px-4 py-2 rounded-full mb-4 shadow-sm">
            <CheckCircle className="h-4 w-4 text-accent-gold" />
            <span className="text-accent-gold font-serif font-semibold text-sm">
              The Process
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark-gray mb-4">
            Why Our Laser Hair Removal Works
          </h2>
        </div>

        <div className="space-y-4 mb-8">
          <div className="flex gap-4 bg-cream/30 rounded-lg p-4">
            <span className="flex-shrink-0 w-8 h-8 bg-accent-gold text-white rounded-full flex items-center justify-center font-sans font-bold">1</span>
            <p className="text-base md:text-lg font-sans text-medium-gray leading-relaxed">
              You'll have a consultation to discuss your needs and what you'd like to achieve.
            </p>
          </div>
          <div className="flex gap-4 bg-cream/30 rounded-lg p-4">
            <span className="flex-shrink-0 w-8 h-8 bg-accent-gold text-white rounded-full flex items-center justify-center font-sans font-bold">2</span>
            <p className="text-base md:text-lg font-sans text-medium-gray leading-relaxed">
              During treatment the applicator is placed on the skin and a pulse of light is released, which heats the hair and destroys the cells responsible for growth.
            </p>
          </div>
          <div className="flex gap-4 bg-cream/30 rounded-lg p-4">
            <span className="flex-shrink-0 w-8 h-8 bg-accent-gold text-white rounded-full flex items-center justify-center font-sans font-bold">3</span>
            <p className="text-base md:text-lg font-sans text-medium-gray leading-relaxed">
              You may feel slight discomfort but the inbuilt cooling system built into the ICE MAX technology ensures most people find the treatment tolerable.
            </p>
          </div>
          <div className="flex gap-4 bg-cream/30 rounded-lg p-4">
            <span className="flex-shrink-0 w-8 h-8 bg-accent-gold text-white rounded-full flex items-center justify-center font-sans font-bold">4</span>
            <p className="text-base md:text-lg font-sans text-medium-gray leading-relaxed">
              The process is quick taking anything from 10 minutes to 90 minutes depending on the area treated.
            </p>
          </div>
          <div className="flex gap-4 bg-cream/30 rounded-lg p-4">
            <span className="flex-shrink-0 w-8 h-8 bg-accent-gold text-white rounded-full flex items-center justify-center font-sans font-bold">5</span>
            <p className="text-base md:text-lg font-sans text-medium-gray leading-relaxed">
              You'll receive a full aftercare information before you leave so you can properly care for your skin.
            </p>
          </div>
        </div>

        <p className="text-base md:text-lg font-sans text-medium-gray leading-relaxed text-center">
          Everybody has unique hair growth patterns, so we recommend having 6-8 sessions to achieve best results for permanent hair reduction.
        </p>
      </div>
    </section>
  );
}
