import Link from 'next/link';
import { Card } from '../ui/Card';
import { Star } from 'lucide-react';

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
    <section className="w-full bg-beige py-16 md:py-24 relative overflow-hidden">
      {/* Subtle Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-accent-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent-gold/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full mb-4 shadow-sm">
            <Star className="h-4 w-4 text-accent-gold fill-accent-gold" />
            <span className="text-accent-gold font-serif font-semibold text-sm">
              Client Testimonials
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark-gray mb-4">
            Hear From My Clients
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
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

        {/* Google Reviews Link */}
        <div className="text-center">
          <Link
            href="https://www.google.com/search?sca_esv=fe33c2d79fc146ed&hl=en-VN&sxsrf=AE3TifMUujqQKmgMujvtbBUbNgdhb_xOuA:1761650124903&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E1GKnNYwZ2gEgNP6SjYCZrDmZFCesAIMCwd-qpP0Bo0WxSN5h2TNUwEBFVUfEbkEyCpeVFZquzcjS4mo7NIw1hSVUM6y-bLrMb8Z16IMXiWyg6wphA%3D%3D&q=Rosie+Beauty+Salon+Reviews&sa=X&ved=2ahUKEwi6iaeP4saQAxWqzjQHHWa-OlAQ0bkNegQIIBAE&biw=1536&bih=695&dpr=1.25"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent-gold text-white px-8 py-2.5 rounded-[3rem] font-serif font-semibold text-xl hover:bg-accent-gold/90 transition-all hover:shadow-md"
          >
            View All Google Reviews
          </Link>
        </div>
      </div>
    </section>
  );
}
