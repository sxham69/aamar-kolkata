/**
 * Business details. Everything in `business` was supplied by Aamar Kolkata.
 * Fields marked EDITABLE are empty until the owner confirms them; the UI hides
 * or softens anything that is left empty.
 */
const address = '28 J, Northern Ave, Satpukur, Kolkata, West Bengal 700030';
const mapQuery = encodeURIComponent(`Aamar Kolkata, ${address}`);

export const business = {
  name: 'Aamar Kolkata',
  nameBangla: 'আমার কলকাতা',
  category: 'Café',
  phoneDisplay: '09123820184',
  phoneHref: 'tel:+919123820184',
  phoneSchema: '+91-9123820184',
  address,
  addressLines: ['28 J, Northern Ave, Satpukur', 'Kolkata, West Bengal 700030'],
  streetAddress: '28 J, Northern Ave, Satpukur',
  locality: 'Kolkata',
  region: 'West Bengal',
  postalCode: '700030',
  rating: 4.3,
  reviewCount: 1354,
} as const;

export const links = {
  /** Google Maps directions built from the supplied address (no invented coordinates). */
  directions: `https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`,
  /** Google Maps search for the business name + address. */
  mapSearch: `https://www.google.com/maps/search/?api=1&query=${mapQuery}`,
  /** Keyless embed of the same address search. */
  mapEmbed: `https://www.google.com/maps?q=${mapQuery}&output=embed`,
  /** EDITABLE: link to a complete menu (PDF, Zomato, etc.). Empty = "coming soon". */
  fullMenu: '',
  /** EDITABLE: exact Google Business Profile reviews link. Empty = map search is shown instead. */
  reviews: '',
} as const;

/** EDITABLE: opening hours, e.g. 'Daily, 9:00 AM – 10:00 PM'. Empty = "please call to confirm". */
export const openingHours = '';

/** EDITABLE: only add genuine profile URLs. Empty entries are not rendered. */
export const socials: { label: string; href: string }[] = [];

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'story', label: 'Our Story' },
  { id: 'menu', label: 'Menu' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'visit', label: 'Visit Us' },
] as const;

export const formattedReviewCount = business.reviewCount.toLocaleString('en-IN');
