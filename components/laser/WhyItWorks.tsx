import { CheckCircle } from 'lucide-react';

export function WhyItWorks() {
  return (
    <section className="w-full bg-white py-16 md:py-24 relative overflow-hidden">
      {/* Subtle Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-accent-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-accent-gold/5 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-cream/60 backdrop-blur-sm px-4 py-2 rounded-full mb-4 shadow-sm">
            <CheckCircle className="h-4 w-4 text-accent-gold" />
            <span className="text-accent-gold font-serif font-semibold text-sm">
              Important Information
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark-gray mb-4">
            What You Need to Know Before Undergoing a Procedure
          </h2>
          <p className="text-base md:text-lg font-sans text-medium-gray leading-relaxed max-w-3xl mx-auto">
            There are several important points to be aware of to ensure the high effectiveness and quality of the laser hair removal you desire.
          </p>
        </div>

        <div className="bg-cream/30 rounded-xl p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-serif font-semibold text-dark-gray mb-4">
            Hair in the Targeted Area
          </h3>
          <p className="text-base md:text-lg font-sans text-medium-gray leading-relaxed">
            For optimal results, hair in the targeted area should be shaved 24 hours before treatment. The laser targets the hair follicle beneath the skin, so surface hair must be removed while keeping the root intact. Avoid waxing, plucking, or threading for at least 4 weeks before treatment, as these methods remove the hair follicle that the laser needs to target.
          </p>
        </div>
      </div>
    </section>
  );
}
