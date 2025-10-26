import { Card } from '../ui/Card';

const testimonials = [
  {
    name: 'Emma W.',
    title: 'Amazing Care',
    quote: "Rosica's salon is exceptional! My skin has never felt better, and I always leave feeling pampered and refreshed!",
  },
  {
    name: 'Laura M.',
    title: 'My Go-To Salon',
    quote: "Rosie Beauty Salon is my go-to for skincare. Rosica is knowledgeable and attentive, and my skin has improved so much!",
  },
  {
    name: 'Sophie R.',
    title: 'Great Results',
    quote: "Absolutely love Rosie Beauty Salon! Rosica makes you feel like royalty, and my skin has never looked this great!",
  },
];

export function TestimonialsSection() {
  return (
    <section className="w-full bg-beige py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark-gray mb-4">
            Hear From My Clients
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} variant="testimonial">
              <div className="text-center">
                {/* Quote Marks */}
                <div className="text-accent-gold text-6xl font-serif mb-4">
                  "
                </div>

                {/* Title */}
                <h3 className="text-xl font-serif font-bold text-dark-gray mb-2">
                  {testimonial.title}
                </h3>

                {/* Quote */}
                <p className="text-base font-sans text-medium-gray mb-6 italic">
                  {testimonial.quote}
                </p>

                {/* Name */}
                <p className="text-base font-sans font-semibold text-accent-gold">
                  - {testimonial.name}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
