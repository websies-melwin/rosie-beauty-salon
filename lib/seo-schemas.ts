import { siteConfig } from './metadata';

// FAQ Schema for better search visibility
export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What facial treatments does Rosie Beauty Salon offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We offer 7 professional facial treatments including Basic Therapy (£80), Deluxe Therapy (£120), Platinum Therapy (£140), Lip Therapy (£60), Eye Contour Therapy (£65), Lymphatic Drainage Therapy (£80), and Scalp & Face Nerola Therapy (£100). All treatments use advanced Hydrafacial technology.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer laser hair removal for both men and women?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we provide professional laser hair removal services for both men and women using the advanced Elysion-Pro diode laser. We treat all skin types year-round with prices starting from £40.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is Rosie Beauty Salon located?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Rosie Beauty Salon is located at 49C Orchard Street, Weston-super-Mare, BS23 1RJ. We serve clients from Weston-super-Mare and surrounding areas in North Somerset.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are your opening hours?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We are open Monday, Wednesday, Friday: 9:00 AM - 8:00 PM; Tuesday, Thursday: 9:00 AM - 6:00 PM; Saturday: 10:00 AM - 2:00 PM; Sunday: Closed.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to book an appointment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, appointments are required for all treatments. You can easily book online through our website or call us at 07414 601010.',
      },
    },
    {
      '@type': 'Question',
      name: 'What payment methods do you accept?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We currently accept cash payments only. Please bring the exact amount for your treatment as shown during booking confirmation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the Hydrafacial treatment suitable for sensitive skin?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Hydrafacial treatments are gentle and suitable for all skin types, including sensitive skin. We customize each treatment to your specific skin needs and concerns.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long do laser hair removal results last?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our Elysion-Pro laser provides long-lasting to permanent hair reduction. Most clients see significant reduction after 6-8 sessions, with results lasting years. Occasional maintenance sessions may be needed.',
      },
    },
  ],
};

// Breadcrumb schema generator
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// Service schema generator for individual services
export function generateServiceSchema(service: {
  name: string;
  description: string;
  price: number;
  duration: number;
  category: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.category === 'facial' ? 'Facial Treatment' : 'Laser Hair Removal',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'BeautySalon',
      name: siteConfig.name,
      address: {
        '@type': 'PostalAddress',
        streetAddress: siteConfig.contact.address.street,
        addressLocality: siteConfig.contact.address.city,
        postalCode: siteConfig.contact.address.postcode,
      },
    },
    areaServed: {
      '@type': 'City',
      name: 'Weston-super-Mare',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: service.name,
      itemListElement: [
        {
          '@type': 'Offer',
          price: service.price.toString(),
          priceCurrency: 'GBP',
          itemOffered: {
            '@type': 'Service',
            name: service.name,
            description: service.description,
          },
        },
      ],
    },
    potentialAction: {
      '@type': 'ReserveAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteConfig.url}/booking?service=${service.name.toLowerCase().replace(/ /g, '-')}`,
      },
      result: {
        '@type': 'Reservation',
        name: `Booking for ${service.name}`,
      },
    },
  };
}

// Review/Testimonial schema
export const reviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  itemReviewed: {
    '@type': 'BeautySalon',
    name: siteConfig.name,
  },
  author: {
    '@type': 'Person',
    name: 'Rosie',
  },
  reviewRating: {
    '@type': 'Rating',
    ratingValue: '5',
    bestRating: '5',
  },
  reviewBody: "I've been working with Websies for my beauty salon and couldn't be happier. They built a stunning website that showcases my services beautifully and makes it easy for clients to book online. The team understood my vision and brought it to life. Whenever I need updates, they respond quickly. My clients always comment on how professional and user-friendly the site is. Definitely worth it!",
};

// WebSite schema with search action
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteConfig.url}/#website`,
  url: siteConfig.url,
  name: siteConfig.name,
  description: siteConfig.description,
  publisher: {
    '@id': `${siteConfig.url}/#organization`,
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${siteConfig.url}/booking?search={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
  inLanguage: 'en-GB',
};

// Organization schema
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  url: siteConfig.url,
  logo: {
    '@type': 'ImageObject',
    '@id': `${siteConfig.url}/#logo`,
    url: `${siteConfig.url}/logo.jpg`,
    contentUrl: `${siteConfig.url}/logo.jpg`,
    caption: siteConfig.name,
    inLanguage: 'en-GB',
    width: '500',
    height: '500',
  },
  image: {
    '@id': `${siteConfig.url}/#logo`,
  },
  sameAs: [
    siteConfig.links.instagram,
    siteConfig.links.facebook,
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: siteConfig.contact.phone,
    contactType: 'Reservations',
    areaServed: 'GB',
    availableLanguage: 'English',
  },
};