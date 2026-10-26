import { business, formattedReviewCount, openingHours } from './site';

/** Proposed brand storytelling — not verified history. */
export const story = {
  heading: 'More Than Coffee. A Little Piece of Kolkata.',
  paragraphs: [
    'In Kolkata, a cup is rarely just a cup. It is an excuse to sit a little longer, to pick up a conversation where it left off, to let an afternoon unfold at its own pace.',
    'Aamar Kolkata is a neighbourhood café made for exactly that: good coffee, easy company and a comfortable corner to take a break from the everyday. Come in for a quick cup, or stay for the whole adda.',
  ],
};

export const features = [
  { icon: 'home', title: 'A neighbourhood welcome', text: 'A warm, unhurried space on Northern Avenue where regulars and first-timers are equally at home.' },
  { icon: 'coffee', title: 'Coffee & refreshments', text: 'From an everyday cup to something chilled, made for lingering over rather than rushing.' },
  { icon: 'chat', title: 'Room for adda', text: 'A comfortable place to catch up with friends, family or a good book, the Kolkata way.' },
  { icon: 'sun', title: 'A relaxed café break', text: 'A short pause in a busy day. Step in, slow down, and leave a little lighter.' },
] as const;

export const faqs = [
  { q: 'Where is Aamar Kolkata located?', a: `We are at ${business.address}. Use the "Get Directions" button to open the route in Google Maps.` },
  { q: 'How can I contact the café?', a: `Call us on ${business.phoneDisplay}. Tap the number anywhere on this page to dial directly from your phone.` },
  { q: 'Where can I see the menu?', a: 'A preview of our menu is in the Menu section above. The complete menu is coming soon; until then, call the café to ask about today’s offerings and prices.' },
  { q: 'How can I get directions?', a: 'Tap "Get Directions" in the Visit Us section to open Google Maps with our address filled in, ready for navigation from wherever you are.' },
  {
    q: 'What are the café’s opening hours?',
    a: openingHours
      ? `${openingHours}. Hours can change on holidays, so do call ahead if you are making a special trip.`
      : `Opening hours are still being confirmed for this website. Please call ${business.phoneDisplay} before you visit.`,
  },
  { q: 'How is Aamar Kolkata rated?', a: `Aamar Kolkata holds an average rating of ${business.rating} out of 5 from ${formattedReviewCount} customer reviews.` },
];
