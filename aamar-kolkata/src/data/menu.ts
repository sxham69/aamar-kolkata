import type { Motif, Tone } from './images';

/**
 * SAMPLE MENU — every name, description and price below is a placeholder for
 * presentation only. Aamar Kolkata must confirm or replace them before launch.
 * Set `price` to null to show "Price on request" instead of a sample price.
 */
export type CategoryId = 'coffee' | 'tea' | 'cold' | 'snacks' | 'desserts';

export type MenuItem = {
  name: string;
  description: string;
  price: number | null;
  category: CategoryId;
  image: string;
  tone: Tone;
  motif: Motif;
};

export const categories: { id: CategoryId; label: string }[] = [
  { id: 'coffee', label: 'Coffee' },
  { id: 'tea', label: 'Tea' },
  { id: 'cold', label: 'Cold Beverages' },
  { id: 'snacks', label: 'Snacks' },
  { id: 'desserts', label: 'Desserts' },
];

/** Shown on every card while the menu is unconfirmed. Set to false once real items are in. */
export const menuIsSample = true;

const u = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=640&q=70`;

export const menuItems: MenuItem[] = [
  { category: 'coffee', name: 'Cappuccino', description: 'Espresso with steamed milk and a soft, velvety foam.', price: 180, image: u('1572442388796-11668a67e53d'), tone: 'terracotta', motif: 'cup' },
  { category: 'coffee', name: 'Café Latte', description: 'A mellow, milky coffee for slow afternoons.', price: 190, image: u('1541167760496-1628856ab772'), tone: 'coffee', motif: 'cup' },
  { category: 'coffee', name: 'Americano', description: 'Espresso lengthened with hot water. Clean and bold.', price: 150, image: u('1514432324607-a09d9b4aefdd'), tone: 'espresso', motif: 'cup' },
  { category: 'tea', name: 'Masala Chai', description: 'Milky tea simmered with warming spices.', price: 90, image: u('1571934811356-5cc061b6821f'), tone: 'terracotta', motif: 'chai' },
  { category: 'tea', name: 'Lemon Tea', description: 'Light black tea brightened with a squeeze of lemon.', price: 80, image: u('1556679343-c7306c1976bc'), tone: 'sage', motif: 'chai' },
  { category: 'tea', name: 'Darjeeling Tea', description: 'A delicate, fragrant cup served plain.', price: 110, image: u('1564890369478-c89ca6d9cde9'), tone: 'cream', motif: 'chai' },
  { category: 'cold', name: 'Iced Coffee', description: 'Chilled coffee over ice, smooth and refreshing.', price: 170, image: u('1461023058943-07fcbe16d735'), tone: 'coffee', motif: 'cold' },
  { category: 'cold', name: 'Cold Coffee', description: 'Blended, creamy and made for warm Kolkata days.', price: 180, image: u('1517701604599-bb29b565090c'), tone: 'cream', motif: 'cold' },
  { category: 'cold', name: 'Iced Lemon Tea', description: 'Brewed tea, citrus and plenty of ice.', price: 140, image: u('1556679343-c7306c1976bc'), tone: 'sage', motif: 'cold' },
  { category: 'snacks', name: 'Grilled Sandwich', description: 'Golden, toasted and filled with vegetables and cheese.', price: 160, image: u('1528735602780-2552fd46c7af'), tone: 'terracotta', motif: 'sandwich' },
  { category: 'snacks', name: 'Butter Croissant', description: 'Flaky layers, best with a hot cup alongside.', price: 120, image: u('1555507036-ab1f4038808a'), tone: 'cream', motif: 'pastry' },
  { category: 'snacks', name: 'Garlic Bread', description: 'Toasted bread with garlic butter and herbs.', price: 130, image: u('1509440159596-0249088772ff'), tone: 'sage', motif: 'sandwich' },
  { category: 'desserts', name: 'Chocolate Brownie', description: 'Dense, fudgy and generously chocolatey.', price: 140, image: u('1606312619070-d48b4c652a52'), tone: 'espresso', motif: 'dessert' },
  { category: 'desserts', name: 'Chocolate Cake', description: 'A rich slice for celebrating small things.', price: 160, image: u('1578985545062-69928b1d9587'), tone: 'coffee', motif: 'dessert' },
  { category: 'desserts', name: 'Cookies', description: 'Crisp edges, soft centres. Ideal with chai.', price: 90, image: u('1558961363-fa8fdf82db35'), tone: 'terracotta', motif: 'pastry' },
];
