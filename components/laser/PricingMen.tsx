import Link from 'next/link';
import { Tag } from 'lucide-react';

const menServices = [
  { id: 'laser-men-eyebrows', name: 'Middle of Eyebrows', single: 40, course: 200 },
  { id: 'laser-men-jawline', name: 'Jawline/Sides', single: 40, course: 200 },
  { id: 'laser-men-jawline-lip', name: 'Jawline/Sides + Lip', single: 60, course: 300 },
  { id: 'laser-men-neck', name: 'Back of the Neck', single: 60, course: 300 },
  { id: 'laser-men-underarm', name: 'Underarm', single: 50, course: 250 },
  { id: 'laser-men-half-arm', name: 'Half Arm', single: 90, course: 450 },
  { id: 'laser-men-full-arm', name: 'Full Arm', single: 150, course: 750 },
  { id: 'laser-men-hands', name: 'Hands/Fingers', single: 40, course: 200 },
  { id: 'laser-men-half-arm-hands', name: 'Half Arm + Hands/Fingers', single: 110, course: 550 },
  { id: 'laser-men-full-arm-hands', name: 'Full Arm + Hands/Fingers', single: 170, course: 850 },
  { id: 'laser-men-half-legs', name: 'Half Legs', single: 100, course: 500 },
  { id: 'laser-men-thighs', name: 'Thighs', single: 120, course: 600 },
  { id: 'laser-men-full-legs', name: 'Full Legs', single: 160, course: 800 },
  { id: 'laser-men-half-legs-fingers', name: 'Half Legs + Fingers', single: 120, course: 600 },
  { id: 'laser-men-full-legs-fingers', name: 'Full Legs + Fingers', single: 180, course: 900 },
  { id: 'laser-men-shoulders', name: 'Shoulders', single: 90, course: 450 },
  { id: 'laser-men-chest', name: 'Chest', single: 90, course: 450 },
  { id: 'laser-men-stomach', name: 'Stomach', single: 90, course: 450 },
  { id: 'laser-men-back', name: 'Back', single: 120, course: 600 },
  { id: 'laser-men-back-shoulders', name: 'Back + Shoulders', single: 180, course: 900 },
  { id: 'laser-men-chest-shoulders-stomach', name: 'Chest + Shoulders + Stomach', single: 180, course: 900 },
  { id: 'laser-men-cross', name: 'Cross', single: 60, course: 300 },
  { id: 'laser-men-full-body', name: 'Full Body Package', description: 'Full back, Shoulders, Chest, Arms', single: 300, originalPrice: 360, course: 1500, isPackage: true },
];

export function PricingMen() {
  return (
    <section className="w-full bg-beige py-16 md:py-24 relative overflow-hidden">
      {/* Subtle Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-accent-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-accent-gold/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full mb-4 shadow-sm">
          <Tag className="h-4 w-4 text-accent-gold" />
          <span className="text-accent-gold font-serif font-semibold text-sm">
            Men's Pricing
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark-gray mb-6">
          Pricing - Men
        </h2>
        
        <p className="text-base md:text-lg font-sans text-medium-gray leading-relaxed mb-6">
          Achieve smooth, hair-free skin with our specialized laser hair removal treatments for men. Our advanced technology targets unwanted hair effectively, offering long-lasting results with minimal discomfort. From facial areas to full body treatments, we provide tailored solutions to meet your grooming needs. Experience the confidence that comes with professional care and permanent hair reduction.
        </p>

        <div className="text-center mb-8 bg-gradient-to-r from-transparent via-accent-gold/10 to-transparent py-4 rounded-lg">
          <p className="text-base md:text-lg font-serif text-dark-gray font-semibold">
            <span className="text-accent-gold">→</span> Click on any service to book <span className="text-accent-gold">←</span>
          </p>
        </div>

        <div className="space-y-4">
          {menServices.map((service, index) => (
            <Link 
              key={index}
              href={`/booking?service=${service.id}`}
              className={`block bg-white rounded-xl shadow-md p-4 md:p-6 hover:shadow-lg transition-shadow cursor-pointer ${service.isPackage ? 'border-2 border-accent-gold' : 'border border-accent-gold/10'}`}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-grow">
                  <h3 className="text-lg md:text-xl font-serif font-bold text-dark-gray mb-1">
                    {service.name}
                  </h3>
                  {service.description && (
                    <p className="text-sm font-sans text-medium-gray">
                      {service.description}
                    </p>
                  )}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 md:gap-8 flex-shrink-0">
                  <div>
                    <p className="text-xs font-sans text-medium-gray mb-1">Single Session</p>
                    <p className="text-xl font-serif font-bold text-dark-gray">
                      {service.originalPrice && (
                        <span className="line-through text-medium-gray mr-2">£{service.originalPrice}</span>
                      )}
                      £{service.single}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-sans text-medium-gray mb-1">Course of 6 (Pay for 5)</p>
                    <p className="text-xl font-serif font-bold text-accent-gold">
                      £{service.course}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
