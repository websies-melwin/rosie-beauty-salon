import Link from 'next/link';
import { Tag } from 'lucide-react';

const womenServices = [
  { id: 'laser-women-upper-lip', name: 'Upper Lip', single: 40, course: 200 },
  { id: 'laser-women-chin', name: 'Chin', single: 40, course: 200 },
  { id: 'laser-women-half-face', name: 'Half Face', single: 80, course: 400 },
  { id: 'laser-women-full-face', name: 'Full Face', single: 100, course: 500 },
  { id: 'laser-women-underarm', name: 'Underarm', single: 50, course: 250 },
  { id: 'laser-women-half-arm', name: 'Half Arm', single: 80, course: 400 },
  { id: 'laser-women-full-arm', name: 'Full Arm', single: 120, course: 600 },
  { id: 'laser-women-half-legs', name: 'Half Legs', single: 90, course: 450 },
  { id: 'laser-women-full-legs', name: 'Full Legs', single: 150, course: 750 },
  { id: 'laser-women-bikini-line', name: 'Bikini Line', single: 65, course: 325 },
  { id: 'laser-women-brazilian', name: 'Brazilian', single: 85, course: 425 },
  { id: 'laser-women-hollywood', name: 'Hollywood', single: 100, course: 500 },
  { id: 'laser-women-tummy-line', name: 'Tummy Line', single: 40, course: 200 },
  { id: 'laser-women-tummy-addon', name: 'Tummy Line Add-on (to any Bikini)', single: 20, course: 100 },
  { id: 'laser-women-full-body', name: 'Full Body Package', description: 'Full Legs, Any Bikini, Underarm, Lip', single: 280, originalPrice: 340, course: 1400, isPackage: true },
  { id: 'laser-women-lip-chin', name: 'Lip & Chin Package', single: 60, course: 300, isPackage: true },
];

export function PricingWomen() {
  return (
    <section className="w-full bg-white py-16 md:py-24 relative overflow-hidden">
      {/* Subtle Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-accent-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent-gold/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="inline-flex items-center gap-2 bg-cream/60 backdrop-blur-sm px-4 py-2 rounded-full mb-4 shadow-sm">
          <Tag className="h-4 w-4 text-accent-gold" />
          <span className="text-accent-gold font-serif font-semibold text-sm">
            Women's Pricing
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark-gray mb-6">
          Pricing - Women
        </h2>
        
        <p className="text-base md:text-lg font-sans text-medium-gray leading-relaxed mb-6">
          Get rid of unwanted hair with our effective laser hair removal treatments. Our expert team uses advanced technology for smooth, lasting results. Whether you want to treat a small area or go for a full body package, we have flexible options to suit your needs. Enjoy the convenience of fewer sessions and long-term hair reduction with our professional care.
        </p>

        <div className="text-center mb-8 bg-gradient-to-r from-transparent via-accent-gold/10 to-transparent py-4 rounded-lg">
          <p className="text-base md:text-lg font-serif text-dark-gray font-semibold">
            <span className="text-accent-gold">→</span> Click on any service to book <span className="text-accent-gold">←</span>
          </p>
        </div>

        <div className="space-y-4">
          {womenServices.map((service, index) => (
            <Link 
              key={index}
              href={`/booking?service=${service.id}`}
              className={`block bg-cream/40 rounded-xl shadow-md p-4 md:p-6 hover:shadow-lg transition-shadow cursor-pointer ${service.isPackage ? 'border-2 border-accent-gold' : 'border border-accent-gold/10'}`}
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
