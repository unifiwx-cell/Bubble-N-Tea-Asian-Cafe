export interface MenuItem {
  id: string;
  name: string;
  nativeName?: string;
  category: 'bubble-tea' | 'ramen' | 'kimbap' | 'wontons' | 'korean-bites' | 'desserts' | 'coffee-tea';
  categoryLabel: string;
  description: string;
  price: number;
  image: string;
  popular?: boolean;
  dietary?: 'veg' | 'non-veg' | 'vegan';
  spiceLevel?: 0 | 1 | 2 | 3;
  customizable?: boolean;
}

export interface CartItem {
  id: string;
  menuItemId: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  sweetness?: string;
  iceLevel?: string;
  toppings?: string[];
  spiceLevel?: string;
  notes?: string;
}

export interface ReservationDetails {
  guestName: string;
  phone: string;
  email: string;
  partySize: number;
  date: string;
  timeSlot: string;
  seatingArea: 'kpop-corner' | 'boba-lounge' | 'tatami-booth' | 'window-counter';
  occasion: string;
  specialRequests?: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  rating: number;
  date: string;
  comment: string;
  highlight: string;
  tag: string;
}

export interface BubbleTeaFlavor {
  id: string;
  name: string;
  chineseName: string;
  description: string;
  flavorNotes: string[];
  basePrice: number;
  accentColor: string;
  image: string;
  tagline: string;
}
