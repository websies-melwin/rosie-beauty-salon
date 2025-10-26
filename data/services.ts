export interface Service {
  id: string;
  name: string;
  category: 'facial' | 'laser';
  subcategory?: 'women' | 'men';
  duration: number; // in minutes
  price: number;
  description: string;
}

// Face & Skin Services (8 services)
export const FACIAL_SERVICES: Service[] = [
  {
    id: 'basic-therapy',
    name: 'Basic Therapy',
    category: 'facial',
    duration: 60,
    price: 65,
    description: 'Extraction + Peeling',
  },
  {
    id: 'deluxe-therapy',
    name: 'Deluxe Therapy',
    category: 'facial',
    duration: 75,
    price: 110,
    description: 'Deep cleanse + Exfoliation + LED Light + PPT + Calming Serum',
  },
  {
    id: 'platinum-therapy',
    name: 'Platinum Therapy',
    category: 'facial',
    duration: 90,
    price: 160,
    description: 'Ultimate luxury facial with deep cleanse, extraction, LED, PPT, Derma Plane, Jade Roller, Ice Sphere',
  },
  {
    id: 'lip-therapy',
    name: 'Lip Therapy',
    category: 'facial',
    duration: 30,
    price: 35,
    description: 'Revitalize your ultimate lips',
  },
  {
    id: 'eye-contour-therapy',
    name: 'Eye Contour Therapy',
    category: 'facial',
    duration: 30,
    price: 65,
    description: 'Brighten eyes zone with a powerful, smoothing lift',
  },
  {
    id: 'lymphatic-drainage-therapy',
    name: 'Lymphatic Drainage Therapy + LED Lights',
    category: 'facial',
    duration: 45,
    price: 95,
    description: 'Lymphatic drainage therapy infused and combined with LED lights',
  },
  {
    id: 'scalp-face-nerola-therapy',
    name: 'Scalp and Face Nerola Therapy',
    category: 'facial',
    duration: 75,
    price: 95,
    description: 'Relaxation of scalp and face muscle',
  },
];

// Laser Hair Removal - Women (16 services)
export const LASER_WOMEN_SERVICES: Service[] = [
  { id: 'laser-women-upper-lip', name: 'Upper Lip', category: 'laser', subcategory: 'women', duration: 15, price: 40, description: 'Laser hair removal for upper lip area' },
  { id: 'laser-women-chin', name: 'Chin', category: 'laser', subcategory: 'women', duration: 15, price: 40, description: 'Laser hair removal for chin area' },
  { id: 'laser-women-half-face', name: 'Half Face', category: 'laser', subcategory: 'women', duration: 20, price: 80, description: 'Laser hair removal for half face' },
  { id: 'laser-women-full-face', name: 'Full Face', category: 'laser', subcategory: 'women', duration: 30, price: 100, description: 'Laser hair removal for full face' },
  { id: 'laser-women-underarm', name: 'Underarm', category: 'laser', subcategory: 'women', duration: 15, price: 50, description: 'Laser hair removal for underarm area' },
  { id: 'laser-women-half-arm', name: 'Half Arm', category: 'laser', subcategory: 'women', duration: 30, price: 80, description: 'Laser hair removal for half arm' },
  { id: 'laser-women-full-arm', name: 'Full Arm', category: 'laser', subcategory: 'women', duration: 45, price: 120, description: 'Laser hair removal for full arm' },
  { id: 'laser-women-half-legs', name: 'Half Legs', category: 'laser', subcategory: 'women', duration: 30, price: 90, description: 'Laser hair removal for half legs' },
  { id: 'laser-women-full-legs', name: 'Full Legs', category: 'laser', subcategory: 'women', duration: 60, price: 150, description: 'Laser hair removal for full legs' },
  { id: 'laser-women-bikini-line', name: 'Bikini Line', category: 'laser', subcategory: 'women', duration: 20, price: 65, description: 'Laser hair removal for bikini line' },
  { id: 'laser-women-brazilian', name: 'Brazilian', category: 'laser', subcategory: 'women', duration: 30, price: 85, description: 'Brazilian laser hair removal' },
  { id: 'laser-women-hollywood', name: 'Hollywood', category: 'laser', subcategory: 'women', duration: 40, price: 100, description: 'Hollywood laser hair removal' },
  { id: 'laser-women-tummy-line', name: 'Tummy Line', category: 'laser', subcategory: 'women', duration: 15, price: 40, description: 'Laser hair removal for tummy line' },
  { id: 'laser-women-tummy-addon', name: 'Tummy Line Add-on', category: 'laser', subcategory: 'women', duration: 10, price: 20, description: 'Add-on to any Bikini treatment' },
  { id: 'laser-women-full-body', name: 'Full Body Package', category: 'laser', subcategory: 'women', duration: 120, price: 280, description: 'Full Legs, Any Bikini, Underarm, Lip' },
  { id: 'laser-women-lip-chin', name: 'Lip & Chin Package', category: 'laser', subcategory: 'women', duration: 25, price: 60, description: 'Combined lip and chin treatment' },
];

// Laser Hair Removal - Men (23 services)
export const LASER_MEN_SERVICES: Service[] = [
  { id: 'laser-men-eyebrows', name: 'Middle of Eyebrows', category: 'laser', subcategory: 'men', duration: 15, price: 40, description: 'Laser hair removal for middle of eyebrows' },
  { id: 'laser-men-jawline', name: 'Jawline/Sides', category: 'laser', subcategory: 'men', duration: 20, price: 40, description: 'Laser hair removal for jawline and sides' },
  { id: 'laser-men-jawline-lip', name: 'Jawline/Sides + Lip', category: 'laser', subcategory: 'men', duration: 30, price: 60, description: 'Combined jawline and lip treatment' },
  { id: 'laser-men-neck', name: 'Back of the Neck', category: 'laser', subcategory: 'men', duration: 20, price: 60, description: 'Laser hair removal for back of neck' },
  { id: 'laser-men-underarm', name: 'Underarm', category: 'laser', subcategory: 'men', duration: 15, price: 50, description: 'Laser hair removal for underarm area' },
  { id: 'laser-men-half-arm', name: 'Half Arm', category: 'laser', subcategory: 'men', duration: 35, price: 90, description: 'Laser hair removal for half arm' },
  { id: 'laser-men-full-arm', name: 'Full Arm', category: 'laser', subcategory: 'men', duration: 50, price: 150, description: 'Laser hair removal for full arm' },
  { id: 'laser-men-hands', name: 'Hands/Fingers', category: 'laser', subcategory: 'men', duration: 15, price: 40, description: 'Laser hair removal for hands and fingers' },
  { id: 'laser-men-half-arm-hands', name: 'Half Arm + Hands/Fingers', category: 'laser', subcategory: 'men', duration: 45, price: 110, description: 'Combined half arm and hands treatment' },
  { id: 'laser-men-full-arm-hands', name: 'Full Arm + Hands/Fingers', category: 'laser', subcategory: 'men', duration: 60, price: 170, description: 'Combined full arm and hands treatment' },
  { id: 'laser-men-half-legs', name: 'Half Legs', category: 'laser', subcategory: 'men', duration: 35, price: 100, description: 'Laser hair removal for half legs' },
  { id: 'laser-men-thighs', name: 'Thighs', category: 'laser', subcategory: 'men', duration: 40, price: 120, description: 'Laser hair removal for thighs' },
  { id: 'laser-men-full-legs', name: 'Full Legs', category: 'laser', subcategory: 'men', duration: 60, price: 160, description: 'Laser hair removal for full legs' },
  { id: 'laser-men-half-legs-fingers', name: 'Half Legs + Fingers', category: 'laser', subcategory: 'men', duration: 45, price: 120, description: 'Combined half legs and fingers treatment' },
  { id: 'laser-men-full-legs-fingers', name: 'Full Legs + Fingers', category: 'laser', subcategory: 'men', duration: 70, price: 180, description: 'Combined full legs and fingers treatment' },
  { id: 'laser-men-shoulders', name: 'Shoulders', category: 'laser', subcategory: 'men', duration: 30, price: 90, description: 'Laser hair removal for shoulders' },
  { id: 'laser-men-chest', name: 'Chest', category: 'laser', subcategory: 'men', duration: 30, price: 90, description: 'Laser hair removal for chest' },
  { id: 'laser-men-stomach', name: 'Stomach', category: 'laser', subcategory: 'men', duration: 30, price: 90, description: 'Laser hair removal for stomach' },
  { id: 'laser-men-back', name: 'Back', category: 'laser', subcategory: 'men', duration: 40, price: 120, description: 'Laser hair removal for back' },
  { id: 'laser-men-back-shoulders', name: 'Back + Shoulders', category: 'laser', subcategory: 'men', duration: 60, price: 180, description: 'Combined back and shoulders treatment' },
  { id: 'laser-men-chest-shoulders-stomach', name: 'Chest + Shoulders + Stomach', category: 'laser', subcategory: 'men', duration: 75, price: 180, description: 'Combined chest, shoulders and stomach treatment' },
  { id: 'laser-men-cross', name: 'Cross', category: 'laser', subcategory: 'men', duration: 20, price: 60, description: 'Laser hair removal for cross area' },
  { id: 'laser-men-full-body', name: 'Full Body Package', category: 'laser', subcategory: 'men', duration: 150, price: 300, description: 'Full back, Shoulders, Chest, Arms' },
];

// All services combined
export const ALL_SERVICES: Service[] = [
  ...FACIAL_SERVICES,
  ...LASER_WOMEN_SERVICES,
  ...LASER_MEN_SERVICES,
];
