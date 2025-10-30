import { ServiceCard } from './ServiceCard';

const services = [
  {
    id: 'basic-therapy',
    name: 'Basic Therapy',
    description: 'Extraction + Peeling',
    duration: '40-75 min',
    price: 65,
  },
  {
    id: 'deluxe-therapy',
    name: 'Deluxe Therapy',
    description: 'Experience our most popular all-in-one facial therapy - dive a deep cleanse + Exfoliation + LED Light + PPT + Calming Serum',
    duration: '60-75 min',
    price: 110,
  },
  {
    id: 'platinum-therapy',
    name: 'Platinum Therapy',
    description: 'Indulge in the ultimate luxury facial experience. Enjoy a deep cleanse + Extraction + LED light + PPT + Derma Plane + Derma Planing + Jade Roller + Ice Sphere + Calming Serum',
    duration: '1.5 hr',
    price: 160,
  },
  {
    id: 'lip-therapy',
    name: 'Lip Therapy',
    description: 'Revitalize your ultimate lips',
    duration: '15-30 min',
    price: 35,
  },
  {
    id: 'eye-contour-therapy',
    name: 'Eye Contour Therapy',
    description: 'Brighten eyes zone with a powerful, smoothing lift',
    duration: '15-30 min',
    price: 65,
  },
  {
    id: 'lymphatic-drainage-therapy',
    name: 'Lymphatic Drainage Therapy + LED Lights',
    description: 'Experience the power of Lymphatic drainage therapy, which is infused and combined with LED lights',
    duration: '30-45 min',
    price: 95,
  },
  {
    id: 'scalp-face-nerola-therapy',
    name: 'Scalp and Face Nerola Therapy',
    description: 'Relaxation of scalp and face muscle',
    duration: '60-75 min',
    price: 95,
  },
  {
    id: 'laser-hair-removal-back',
    name: 'Laser Hair Removal (Back)',
    description: 'Safe and effective hair removal therapy you need to try now',
    duration: '1 hr',
    price: 'Varies',
  },
];

export function ServicesList() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark-gray mb-4">
            Ready to Transform Your Skin?
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              name={service.name}
              description={service.description}
              duration={service.duration}
              price={service.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
