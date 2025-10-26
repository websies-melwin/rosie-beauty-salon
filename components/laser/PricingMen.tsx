const menServices = [
  { name: 'Middle of Eyebrows', single: 40, course: 200 },
  { name: 'Jawline/Sides', single: 40, course: 200 },
  { name: 'Jawline/Sides + Lip', single: 60, course: 300 },
  { name: 'Back of the Neck', single: 60, course: 300 },
  { name: 'Underarm', single: 50, course: 250 },
  { name: 'Half Arm', single: 90, course: 450 },
  { name: 'Full Arm', single: 150, course: 750 },
  { name: 'Hands/Fingers', single: 40, course: 200 },
  { name: 'Half Arm + Hands/Fingers', single: 110, course: 550 },
  { name: 'Full Arm + Hands/Fingers', single: 170, course: 850 },
  { name: 'Half Legs', single: 100, course: 500 },
  { name: 'Thighs', single: 120, course: 600 },
  { name: 'Full Legs', single: 160, course: 800 },
  { name: 'Half Legs + Fingers', single: 120, course: 600 },
  { name: 'Full Legs + Fingers', single: 180, course: 900 },
  { name: 'Shoulders', single: 90, course: 450 },
  { name: 'Chest', single: 90, course: 450 },
  { name: 'Stomach', single: 90, course: 450 },
  { name: 'Back', single: 120, course: 600 },
  { name: 'Back + Shoulders', single: 180, course: 900 },
  { name: 'Chest + Shoulders + Stomach', single: 180, course: 900 },
  { name: 'Cross', single: 60, course: 300 },
  { name: 'Full Body Package', description: 'Full back, Shoulders, Chest, Arms', single: 300, originalPrice: 360, course: 1500, isPackage: true },
];

export function PricingMen() {
  return (
    <section className="w-full bg-beige py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark-gray mb-6">
          Pricing - Men
        </h2>
        
        <p className="text-base md:text-lg font-sans text-medium-gray leading-relaxed mb-8">
          Achieve smooth, hair-free skin with our specialized laser hair removal treatments for men. Our advanced technology targets unwanted hair effectively, offering long-lasting results with minimal discomfort. From facial areas to full body treatments, we provide tailored solutions to meet your grooming needs. Experience the confidence that comes with professional care and permanent hair reduction.
        </p>

        <div className="space-y-4">
          {menServices.map((service, index) => (
            <div 
              key={index}
              className={`bg-white rounded-lg p-4 md:p-6 ${service.isPackage ? 'border-2 border-accent-gold' : ''}`}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
