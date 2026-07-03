export const WHATSAPP_NUMBER = '+6798622671';
export const WHATSAPP_DISPLAY = '+679 8622671';

export function whatsappUrl(message = 'Hi Bula Boys! I would like to enquire about a trip to Cloudbreak.') {
  return `https://wa.me/6798622671?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_URL = whatsappUrl();

export const FACEBOOK_URL = 'https://www.facebook.com/p/Bula-Boys-Surf-Fiji-61582483652896/';
export const INSTAGRAM_URL = 'https://www.instagram.com/bulaboyssurf/';

export const socialLinks = [
  { href: FACEBOOK_URL, label: 'Facebook' },
  { href: INSTAGRAM_URL, label: 'Instagram' },
] as const;

export const images = {
  heroSurf: '/images/hero-surf.webp',
  heroSurfEnhanced: '/images/hero-surf-enhanced.webp',
  heroSurfEnhancedJpg: '/images/hero-surf-enhanced.jpg',
  aboutBoat: '/images/about-boat.webp',
  boatTrip: '/images/boat-trip.webp',
  sunsetBeach: '/images/sunset-beach.webp',
  beachBoat: '/images/fb-1.webp',
  villageTour: '/images/fb-2.webp',
  conquestBoat: '/images/fb-3.webp',
  boatCrew: '/images/fb-4.webp',
  snorkelGroup: '/images/fb-5.webp',
  // Surfing (pro action shots)
  surf1: '/images/surf/surf-1.webp',
  surf2: '/images/surf/surf-2.webp',
  surf3: '/images/surf/surf-3.webp',
  surf4: '/images/surf/surf-4.webp',
  surf5: '/images/surf/surf-5.webp',
  surf6: '/images/surf/surf-6.webp',
  surfMates: '/images/surf/surf-7.webp',
  // Fishing & spearfishing
  fishTrevally: '/images/fish/fish-1.webp',
  spearfishing: '/images/fish/fish-2.webp',
  fishBeach: '/images/fish/fish-3.webp',
  fishBoat: '/images/fish/fish-4.webp',
  // Snorkelling / turtle tours
  turtle: '/images/snorkel/turtle.webp',
  // Boat trips / island hopping / Fiji lifestyle
  boatCrewGold: '/images/boat/boat-1.webp',
  boatBeachSunset: '/images/boat/boat-2.webp',
  islandApproach: '/images/boat/boat-3.webp',
  villageGroup: '/images/boat/boat-4.webp',
  fijiBitter: '/images/boat/boat-5.webp',
  boatMarina: '/images/boat/boat-6.webp',
} as const;

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/#trips', label: 'Trips' },
  { href: '/#gallery', label: 'Gallery' },
  { href: '/#faq', label: 'FAQ' },
  { href: '/#contact', label: 'Contact' },
] as const;

export const trips = [
  {
    title: 'Surf Trips',
    copy: 'Local boat trips to Cloudbreak, Cloud 9, and Seventh Heaven — some of Fiji’s most famous waves.',
    image: images.surf5,
    alt: 'Surfer deep in the barrel at Cloudbreak, Fiji',
    href: '/trips/surfing',
  },
  {
    title: 'Snorkelling & Turtle Tours',
    copy: 'Snorkel clear tropical reefs and swim with turtles alongside local guides.',
    image: images.turtle,
    alt: 'Snorkeller swimming beside a turtle over a Fiji reef',
    href: '/trips/snorkelling',
  },
  {
    title: 'Fishing & Spearfishing',
    copy: 'Relaxed line fishing and spearfishing with locals who know the water.',
    image: images.fishTrevally,
    alt: 'Guest holding a trevally on a Bula Boys fishing trip',
    href: '/trips/fishing',
  },
  {
    title: 'Boat Trips & Island Hopping',
    copy: 'Island hopping, boat charters, and the laid-back Fiji lifestyle around the Mamanucas.',
    image: images.islandApproach,
    alt: 'View from a boat approaching a tropical Fiji island',
    href: '/trips/boat-trips',
  },
] as const;

export type GalleryImage = { src: string; alt: string; size?: 'large' | 'small' };

export type TripPage = {
  slug: string;
  nav: string;
  title: string;
  tagline: string;
  hero: string;
  heroAlt: string;
  intro: string;
  highlights: string[];
  spots?: { name: string; copy: string }[];
  gallery: GalleryImage[];
  whatsappMessage: string;
};

export const tripPages: TripPage[] = [
  {
    slug: 'surfing',
    nav: 'Surfing',
    title: 'Surf Trips to Cloudbreak',
    tagline: 'World-class Fiji reef breaks, straight from Nabila Village.',
    hero: images.surf5,
    heroAlt: 'Surfer deep in the barrel at Cloudbreak, Fiji',
    intro:
      'Bula Boys run local boat trips to some of Fiji’s most famous waves. From Nabila Village it is around 30 minutes to Cloudbreak, with Cloud 9 and Seventh Heaven also close by. Our local team knows the reef, the tides, and the conditions to help you get the most out of your session.',
    highlights: [
      'Around 30 minutes to Cloudbreak',
      'Local guides who know the reef and tides',
      'Local lifeguards and ocean support available',
      'Small groups and a relaxed island pace',
    ],
    spots: [
      { name: 'Cloudbreak', copy: 'A powerful left-hand reef break and one of the best waves in the world. Best for experienced surfers.' },
      { name: 'Cloud 9', copy: 'A fun reef break in the Mamanucas, great on the right swell.' },
      { name: 'Seventh Heaven', copy: 'A scenic reef break out in the islands, perfect for a full day on the water.' },
    ],
    gallery: [
      { src: images.surf5, alt: 'Surfer deep in the barrel at Cloudbreak', size: 'large' },
      { src: images.surf3, alt: 'Surfer dropping into a big Fiji wave', size: 'large' },
      { src: images.surf1, alt: 'Surfer riding a clean wave face' },
      { src: images.surf4, alt: 'Surfer on a powerful bottom turn' },
      { src: images.surf2, alt: 'Surfer tucking into a Fiji reef break' },
      { src: images.surf6, alt: 'Surfer launching an air off the lip' },
      { src: images.surfMates, alt: 'Local guide and guest on the beach after a surf', size: 'small' },
    ],
    whatsappMessage: 'Hi Bula Boys! I would like to book a surf trip to Cloudbreak.',
  },
  {
    slug: 'snorkelling',
    nav: 'Snorkelling',
    title: 'Snorkelling & Turtle Tours',
    tagline: 'Clear tropical reefs, colourful marine life, and swimming with turtles.',
    hero: images.turtle,
    heroAlt: 'Snorkeller swimming beside a turtle over a Fiji reef',
    intro:
      'Explore Fiji’s clear, warm water with the Bula Boys team on our snorkelling and turtle tours. We take you to calm reef spots around the Mamanuca Islands where you can float over coral, spot tropical fish, and — on the right day — swim alongside turtles. Great for families, couples, and anyone who loves the ocean.',
    highlights: [
      'Snorkelling and turtle tours on clear reefs',
      'Local guides who know the best spots to swim',
      'Suitable for all ages and comfort levels',
      'Gear and safety support available',
    ],
    gallery: [
      { src: images.turtle, alt: 'Snorkeller next to a turtle on a Fiji reef', size: 'large' },
      { src: images.snorkelGroup, alt: 'Guests snorkelling together in clear Fiji water' },
      { src: images.beachBoat, alt: 'Palm-fringed beach and calm water at Nabila Village' },
      { src: images.sunsetBeach, alt: 'Tropical sunset at a Fiji beach', size: 'small' },
    ],
    whatsappMessage: 'Hi Bula Boys! I would like to book a snorkelling or turtle tour.',
  },
  {
    slug: 'fishing',
    nav: 'Fishing',
    title: 'Fishing & Spearfishing',
    tagline: 'Relaxed line fishing and spearfishing with people who know the water.',
    hero: images.fishTrevally,
    heroAlt: 'Guest holding a trevally on a Bula Boys fishing trip',
    intro:
      'Join the Bula Boys for a relaxed day of fishing in Fiji. Our local crew know the area and the best spots to drop a line or dive for a feed. Whether you are into line fishing off the boat, keen to try spearfishing on the reef, or just want a laid-back day on the ocean, we will look after you.',
    highlights: [
      'Line fishing and reef spearfishing',
      'Local knowledge of the best spots',
      'Great for beginners and keen anglers',
      'Combine with snorkelling or island hopping',
    ],
    gallery: [
      { src: images.fishTrevally, alt: 'Guest holding a trevally on the boat', size: 'large' },
      { src: images.spearfishing, alt: 'Spearfisher holding two reef fish caught in Fiji' },
      { src: images.fishBoat, alt: 'Angler with a catch on the front of the boat' },
      { src: images.fishBeach, alt: 'Local guide and guest with a catch at sunset', size: 'small' },
    ],
    whatsappMessage: 'Hi Bula Boys! I would like to book a fishing or spearfishing trip.',
  },
  {
    slug: 'boat-trips',
    nav: 'Boat Trips',
    title: 'Boat Trips & Island Hopping',
    tagline: 'Island hopping, charters, and the laid-back Fiji lifestyle.',
    hero: images.islandApproach,
    heroAlt: 'View from a boat approaching a tropical Fiji island',
    intro:
      'See the best of the Mamanuca Islands with a Bula Boys boat trip. We offer island hopping, boat charters, and visits to our local village, so you can soak up the real Fiji lifestyle — clear water, white-sand beaches, cold drinks, and warm island hospitality.',
    highlights: [
      'Island hopping around the Mamanuca Islands',
      'Boat charters built around your group',
      'Local village visits and Fiji hospitality',
      'Relaxed Fiji lifestyle on the water',
    ],
    gallery: [
      { src: images.islandApproach, alt: 'Approaching a tropical island by boat', size: 'large' },
      { src: images.boatCrewGold, alt: 'Crew enjoying the Fiji lifestyle on the boat' },
      { src: images.boatMarina, alt: 'Guests cruising past yachts and palm trees' },
      { src: images.villageGroup, alt: 'Group with a local host during a village visit' },
      { src: images.boatBeachSunset, alt: 'Crew on the beach at sunset with the boat' },
      { src: images.fijiBitter, alt: 'Fiji lifestyle — a Fiji Bitter tee on the boat', size: 'small' },
    ],
    whatsappMessage: 'Hi Bula Boys! I would like to enquire about a boat trip or island hopping.',
  },
];

export const whyBook = [
  'Local Fiji guides',
  'Based in Nabila Village',
  '30-minute trip to Cloudbreak',
  'Local lifeguards available',
  'Surf, snorkelling, and fishing options',
  'Friendly island hospitality',
  'Easy booking through WhatsApp',
] as const;

export const galleryImages: GalleryImage[] = [
  { src: images.surf5, alt: 'Surfer deep in the barrel at Cloudbreak, Fiji', size: 'large' },
  { src: images.turtle, alt: 'Snorkeller swimming beside a turtle on a Fiji reef' },
  { src: images.islandApproach, alt: 'Approaching a tropical island by boat' },
  { src: images.surf3, alt: 'Surfer dropping into a big Fiji wave' },
  { src: images.fishTrevally, alt: 'Guest holding a trevally on a fishing trip' },
  { src: images.spearfishing, alt: 'Spearfisher with a reef catch in Fiji' },
  { src: images.surf1, alt: 'Surfer riding a clean Fiji wave' },
  { src: images.boatCrewGold, alt: 'Crew enjoying the Fiji lifestyle on the boat' },
  { src: images.beachBoat, alt: 'Palm-fringed beach at Nabila Village' },
  { src: images.villageGroup, alt: 'Group with a local host during a village visit', size: 'small' },
  { src: images.surfMates, alt: 'Local guide and guest after a surf', size: 'small' },
  { src: images.sunsetBeach, alt: 'Tropical sunset at a Fiji beach', size: 'small' },
];

export const faqs = [
  {
    question: 'Where do trips leave from?',
    answer: 'Trips leave from Nabila Village in Fiji. We will confirm the exact meeting point when you book on WhatsApp.',
  },
  {
    question: 'How long does it take to get to Cloudbreak?',
    answer: 'It takes around 30 minutes by boat from Nabila Village to Cloudbreak.',
  },
  {
    question: 'How do I book?',
    answer: 'The easiest way is to message us on WhatsApp at +679 8622671. We will reply with availability and trip details.',
  },
  {
    question: 'Do you offer snorkelling and fishing?',
    answer: 'Yes. Along with surf trips, we offer snorkelling and relaxed local fishing trips in the area.',
  },
  {
    question: 'Are local lifeguards available?',
    answer: 'Yes. Local lifeguards are available to help keep your day on the water safe and enjoyable.',
  },
  {
    question: 'What should I bring?',
    answer: 'Bring sun protection, water, swimwear, a towel, and anything you need for a day on the ocean. We can advise more when you book.',
  },
  {
    question: 'What happens if the weather or surf is bad?',
    answer: 'Safety comes first. If conditions are not suitable, we will work with you to reschedule or suggest another ocean option.',
  },
  {
    question: 'Is Cloudbreak suitable for beginners?',
    answer: 'Cloudbreak is a serious reef break and is usually better for experienced surfers. Beginners are still welcome to enquire — we can talk through conditions, snorkelling, fishing, or other ocean options that may suit you better.',
  },
] as const;
