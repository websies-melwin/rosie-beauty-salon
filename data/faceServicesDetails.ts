export interface ServiceDetail {
  id: string;
  description: string;
  packages: string[];
  includes: string[];
  effects: string[];
}

export const faceServicesDetails: Record<string, ServiceDetail> = {
  'basic-therapy': {
    id: 'basic-therapy',
    description: 'A comprehensive foundational treatment that combines gentle exfoliation, deep cleansing, and intensive hydration to rejuvenate your skin.',
    packages: [
      'Single Treatment - £80 (30 min)',
    ],
    includes: [
      'ACTIV-4 Serum – Gently removes dead cells, hydrates, and reduces fine lines',
      'GLYSAL Peel – Mild exfoliation and chemical peeling for skin rejuvenation',
      'BETA-HD CLEAR Serum – Clears pores and reduces blackheads',
      'ANTIOX+ Serum – Deep hydration, smooths wrinkles, fades spots, and evens skin tone',
    ],
    effects: [
      'Clearer, more radiant complexion',
      'Reduced fine lines and wrinkles',
      'Improved skin texture and tone',
      'Deep hydration and balanced skin',
    ],
  },
  'deluxe-therapy': {
    id: 'deluxe-therapy',
    description: 'Our most popular all-in-one facial therapy that builds upon the Basic Therapy with advanced LED technology and customized boosters for transformative results.',
    packages: [
      'Single Treatment - £120 (45 min)',
    ],
    includes: [
      'All steps of the Basic Therapy',
      'Customized booster for your specific skin type',
      'Red LED Light Therapy – Smooths wrinkles and promotes youthful appearance',
      'Blue LED Light Therapy – Targets acne-causing bacteria and reduces breakouts',
    ],
    effects: [
      'Improved skin texture and radiance',
      'Reduced fine lines and wrinkles',
      'Clearer, blemish-free skin',
      'Long-lasting hydration and balanced complexion',
    ],
  },
  'platinum-therapy': {
    id: 'platinum-therapy',
    description: 'The ultimate luxury facial experience featuring lymphatic drainage for detoxification, combined with all the benefits of our Deluxe Therapy and the exclusive JLO Booster.',
    packages: [
      'Single Treatment - £140 (60 min)',
    ],
    includes: [
      'Lymphatic Drainage – Removes toxins for naturally radiant skin',
      'All procedures from Deluxe Therapy',
      'Jennifer Lopez JLO Booster – Premium celebrity-grade treatment',
      'Advanced LED Light Therapy',
    ],
    effects: [
      'Detoxified and refreshed skin',
      'Enhanced natural glow and radiance',
      'Reduced puffiness and improved skin tone',
      'Youthful, smooth, and rejuvenated appearance',
    ],
  },
  'lip-therapy': {
    id: 'lip-therapy',
    description: 'Specialized treatment to hydrate and plump lips using our Cerym Perk Lip system, leaving them soft, refreshed, and beautifully enhanced. Includes a take-home booster for continued care.',
    packages: [
      'Single Treatment - £60 (30 min)',
    ],
    includes: [
      'Cerym Perk Lip treatment – Professional hydration and plumping',
      'Take-home booster for ongoing lip care',
      'Targeted hydration therapy',
    ],
    effects: [
      'Hydrated, fuller-looking lips',
      'Lasting softness and smooth texture',
      'Enhanced lip definition and color',
    ],
  },
  'eye-contour-therapy': {
    id: 'eye-contour-therapy',
    description: 'Targeted therapy for the delicate eye area using Perk Eye technology to smooth, rejuvenate, and visibly reduce crow\'s feet wrinkles. Includes a take-home booster for lasting results.',
    packages: [
      'Single Treatment - £65 (30 min)',
    ],
    includes: [
      'Perk Eye treatment – Specialized eye area rejuvenation',
      'Take-home booster for continued care',
      'Gentle exfoliation and hydration',
      'Targeted wrinkle reduction',
    ],
    effects: [
      'Reduced fine lines and crow\'s feet',
      'Brighter, more youthful eye area',
      'Decreased puffiness and dark circles',
      'Smoother, firmer skin texture',
    ],
  },
  'lymphatic-drainage-therapy': {
    id: 'lymphatic-drainage-therapy',
    description: 'Advanced therapy that removes toxins and improves circulation through lymphatic drainage, enhanced with LED light therapy for comprehensive skin rejuvenation and natural radiance.',
    packages: [
      'Single Treatment - £80 (30 min)',
    ],
    includes: [
      'Professional Lymphatic Drainage technique',
      'Red LED Light – Anti-aging and wrinkle smoothing',
      'Blue LED Light – Acne treatment and prevention',
      'Circulation enhancement therapy',
    ],
    effects: [
      'Detoxified skin with improved clarity',
      'Reduced puffiness and enhanced firmness',
      'Brightened complexion and even tone',
      'Improved collagen production for lasting results',
    ],
  },
  'scalp-face-nerola-therapy': {
    id: 'scalp-face-nerola-therapy',
    description: 'Unique therapy combining scalp and facial treatments to promote relaxation, improve circulation, and enhance both scalp health and facial radiance through specialized massage techniques.',
    packages: [
      'Single Treatment - £100 (45 min)',
    ],
    includes: [
      'Scalp massage for improved circulation and hair health',
      'Facial muscle relaxation therapy',
      'Nerola technique for deep tissue release',
      'Stress relief and tension reduction',
    ],
    effects: [
      'Enhanced scalp health and hair growth stimulation',
      'Reduced facial tension and muscle tightness',
      'Improved overall circulation',
      'Deep relaxation and stress relief',
    ],
  },
};
