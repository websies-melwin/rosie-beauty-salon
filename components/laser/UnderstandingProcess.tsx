import { TrendingUp } from 'lucide-react';

export function UnderstandingProcess() {
  return (
    <section className="w-full bg-beige py-16 md:py-24 relative overflow-hidden">
      {/* Subtle Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-accent-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent-gold/5 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full mb-4 shadow-sm">
          <TrendingUp className="h-4 w-4 text-accent-gold" />
          <span className="text-accent-gold font-serif font-semibold text-sm">
            Results & Benefits
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark-gray mb-8">
          What to Expect
        </h2>

        <div className="text-left space-y-4 text-base md:text-lg font-sans text-medium-gray leading-relaxed">
          <p>
            After a laser hair removal session with Elysion PRO, the hair root and subcutaneous part are burned and expelled to the skin's surface, mimicking growth before falling out within two weeks. Results are visible after the first session, with hair reduction improving up to 90% over multiple sessions, depending on individual characteristics.
          </p>
          <p>
            The procedure not only ensures long-lasting hair removal but also improves skin conditions, addressing issues like ingrown hairs, folliculitis, acne, and blemishes.
          </p>
          <p>
            While safe and effective for various skin types, it is not recommended during pregnancy, breastfeeding, or for individuals with eczema, dermatitis, hepatitis, tattoos, or moles. Maintenance sessions are advised annually as needed.
          </p>
        </div>
      </div>
    </section>
  );
}
