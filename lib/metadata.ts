import { Metadata } from 'next';

export const siteConfig = {
  name: 'Rosie Beauty Salon',
  description: 'Elite beauty salon in Weston-super-Mare offering professional facial treatments and laser hair removal. Hydrafacial, LED therapy & more. Book today.',
  url: 'https://rosiebeautysalon.com', // Update with actual domain
  ogImage: '/og-image.jpg', // Will add when images are provided
  links: {
    instagram: '#', // Update with actual links
    facebook: '#', // Update with actual links
  },
  contact: {
    email: 'rosiebeautyst@gmail.com',
    phone: '07414 601010',
    address: {
      street: '49C Orchard Street',
      city: 'Weston-super-Mare',
      postcode: 'BS23 1RJ',
      country: 'United Kingdom',
    },
  },
  businessHours: {
    monday: '9:00 AM - 8:00 PM',
    tuesday: '9:00 AM - 6:00 PM',
    wednesday: '9:00 AM - 8:00 PM',
    thursday: '9:00 AM - 6:00 PM',
    friday: '9:00 AM - 8:00 PM',
    saturday: '10:00 AM - 2:00 PM',
    sunday: 'CLOSED',
  },
};

export function createMetadata({
  title,
  description,
  path = '',
  ogImage,
  noIndex = false,
}: {
  title?: string;
  description?: string;
  path?: string;
  ogImage?: string;
  noIndex?: boolean;
}): Metadata {
  const pageTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} | Facial & Laser Hair Removal | Weston-super-Mare`;
  
  const pageDescription = description || siteConfig.description;
  const pageUrl = `${siteConfig.url}${path}`;
  const pageOgImage = ogImage || siteConfig.ogImage;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: [
      'beauty salon Weston-super-Mare',
      'facial treatments',
      'laser hair removal',
      'Hydrafacial',
      'North Somerset',
      'skin care',
      'LED therapy',
      'hair removal clinic',
      'beauty treatments',
      'Weston super Mare',
    ],
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    robots: noIndex ? 'noindex,nofollow' : 'index,follow',
    openGraph: {
      type: 'website',
      locale: 'en_GB',
      url: pageUrl,
      siteName: siteConfig.name,
      title: pageTitle,
      description: pageDescription,
      images: [
        {
          url: pageOgImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [pageOgImage],
    },
    alternates: {
      canonical: pageUrl,
    },
  };
}

// JSON-LD structured data for local business
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'BeautySalon',
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: siteConfig.contact.phone,
  email: siteConfig.contact.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteConfig.contact.address.street,
    addressLocality: siteConfig.contact.address.city,
    postalCode: siteConfig.contact.address.postcode,
    addressCountry: siteConfig.contact.address.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 51.3461, // Weston-super-Mare coordinates (approximate)
    longitude: -2.9770,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Wednesday', 'Friday'],
      opens: '09:00',
      closes: '20:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Tuesday', 'Thursday'],
      opens: '09:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '10:00',
      closes: '14:00',
    },
  ],
  priceRange: '££',
  image: siteConfig.ogImage,
  sameAs: [
    siteConfig.links.instagram,
    siteConfig.links.facebook,
  ],
};
