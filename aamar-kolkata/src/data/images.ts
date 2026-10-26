/**
 * Representative stock photography from Unsplash (free under the Unsplash License).
 * These are NOT photographs of Aamar Kolkata. Replace with the café's own photos:
 * drop files into /public/photos and set e.g. src: '/photos/interior.jpg'.
 */
export type Tone = 'espresso' | 'coffee' | 'terracotta' | 'sage' | 'cream';
export type Motif = 'cup' | 'chai' | 'pastry' | 'cold' | 'interior' | 'sandwich' | 'dessert' | 'beans';

export type Img = {
  src: string;
  alt: string;
  /** Colour and illustration used for the branded fallback if the photo can't load. */
  tone: Tone;
  motif: Motif;
};

const u = (id: string, w = 1200) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`;

export const images = {
  heroMain: { src: u('1501339847302-ac426a4a7cbb', 1400), alt: 'Warmly lit café interior with wooden tables', tone: 'coffee', motif: 'interior' },
  heroCup: { src: u('1509042239860-f550ce710b93', 700), alt: 'Cappuccino with latte art seen from above', tone: 'terracotta', motif: 'cup' },
  story: { src: u('1554118811-1e0d58224f24', 1200), alt: 'Friends sharing a table in a relaxed café', tone: 'sage', motif: 'interior' },
  storySmall: { src: u('1495474472287-4d71bcdd2085', 600), alt: 'A cup of coffee on a café table', tone: 'espresso', motif: 'cup' },
  finalCta: { src: u('1453614512568-c4024d13c247', 1800), alt: 'Café counter in soft evening light', tone: 'espresso', motif: 'interior' },
} satisfies Record<string, Img>;

export const gallery: Img[] = [
  { src: u('1511920170033-f8396924c348'), alt: 'Latte art in a ceramic cup', tone: 'terracotta', motif: 'cup' },
  { src: u('1521017432531-fbd92d768814'), alt: 'Café interior with pendant lights', tone: 'coffee', motif: 'interior' },
  { src: u('1555507036-ab1f4038808a'), alt: 'Freshly baked croissants', tone: 'cream', motif: 'pastry' },
  { src: u('1447933601403-0c6688de566e'), alt: 'Close-up of coffee being poured', tone: 'espresso', motif: 'beans' },
  { src: u('1578985545062-69928b1d9587'), alt: 'A slice of chocolate cake', tone: 'coffee', motif: 'dessert' },
  { src: u('1461023058943-07fcbe16d735'), alt: 'Iced coffee in a tall glass', tone: 'sage', motif: 'cold' },
  { src: u('1442512595331-e89e73853f31'), alt: 'Coffee cups and beans on a wooden table', tone: 'terracotta', motif: 'beans' },
  { src: u('1504754524776-8f4f37790ca0'), alt: 'Breakfast plate with coffee', tone: 'cream', motif: 'sandwich' },
];
