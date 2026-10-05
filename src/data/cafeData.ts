import { MenuItem, ReviewItem, BubbleTeaFlavor } from '../types';

import heroBobaImg from '../assets/images/hero_boba_asian_cafe_1791220334304.jpg';
import bubbleTeaTrioImg from '../assets/images/bubble_tea_trio_1791220352483.jpg';
import chiliWontonsImg from '../assets/images/dish_chili_oil_wontons_1791220369503.jpg';
import koreanWingsImg from '../assets/images/dish_korean_crispy_wings_1791220383976.jpg';
import cafeVibeImg from '../assets/images/cafe_vibe_hangout_interior_1791220398550.jpg';

// Authentic images capturing the Google Maps listing vibe
import bntNeonInteriorImg from '../assets/images/bnt_real_neon_interior_1791222639242.jpg';
import bntCheeseCornDogImg from '../assets/images/bnt_cheese_corn_dog_1791222652526.jpg';
import bntJapaneseCheesecakeImg from '../assets/images/bnt_japanese_cheesecake_1791222667409.jpg';
import bntBobaCounterCupsImg from '../assets/images/bnt_boba_counter_cups_1791222677939.jpg';
import bntKpopPhotocardWallImg from '../assets/images/bnt_kpop_photocard_wall_1791222689675.jpg';
import cafeLogoImg from '../assets/logo.jpg';
import heroLuxuryBackdropImg from '../assets/images/hero_luxury_cafe_backdrop_1791223176756.jpg';

export const CAFE_INFO = {
  name: 'Bubble N Tea Asian Cafe',
  chineseName: '珍珠奶茶传',
  bengaliName: 'বাবল্ এন টি এশিয়ান ক্যাফে',
  logo: cafeLogoImg,
  category: 'Asian Cafe',
  rating: 4.7,
  reviewCount: '1,971',
  priceRange: '₹400–₹1,200',
  address: 'GC 15, GC Block, Sector 3, Bidhannagar, Kolkata, West Bengal 700106',
  landmark: 'Near Karunamoyee / GD Island, Salt Lake',
  coordinates: {
    lat: 22.5801248,
    lng: 88.4117656
  },
  phone: '062891 98859',
  hours: 'Mon – Sun: 12:00 PM – 11:00 PM',
  googleMapsUrl: 'https://www.google.com/maps/place/Bubble+N+Tea+Asian+Cafe+-+%E7%8F%8D%E7%8F%A0%E5%A5%B6%E8%8C%B6%E4%BC%A0/@22.5801248,88.4091907,17z/data=!3m1!4b1!4m6!3m5!1s0x3a02753cc2511ff3:0x4153b986d14cf103!8m2!3d22.5801248!4d88.4117656!16s%2Fg%2F11trt9nwbb?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D',
  embedMapUrl: 'https://maps.google.com/maps?q=22.5801248,88.4117656&hl=en&z=17&output=embed',
  services: [
    'Dine-in',
    'Kerbside pickup',
    'No-contact delivery',
    'Table reservation',
    'Online ordering'
  ],
  images: {
    hero: bntNeonInteriorImg,
    heroBackdrop: heroLuxuryBackdropImg,
    bubbleTeaTrio: bntBobaCounterCupsImg,
    chiliWontons: chiliWontonsImg,
    koreanWings: koreanWingsImg,
    cafeVibe: bntNeonInteriorImg,
    cheeseCornDog: bntCheeseCornDogImg,
    japaneseCheesecake: bntJapaneseCheesecakeImg,
    bobaCounter: bntBobaCounterCupsImg,
    kpopWall: bntKpopPhotocardWallImg
  }
};

// Real Google Maps Diner Lens Gallery Photos
export const MAPS_PHOTO_GALLERY = [
  {
    id: 'map-01',
    title: 'Warm Neon Vibe & Anime Shelves',
    caption: 'Our signature neon backdrop and collector shelves in GC Block',
    image: bntNeonInteriorImg,
    tag: 'Interior Vibe'
  },
  {
    id: 'map-02',
    title: 'Viral Mozzarella Cheese Corn Dog',
    caption: 'Golden crispy crust with the signature stretchy cheese pull',
    image: bntCheeseCornDogImg,
    tag: 'Must-Order Bite'
  },
  {
    id: 'map-03',
    title: 'Branded Soufflé Japanese Cheesecake',
    caption: 'Melt-in-mouth cloud texture stamped hot with our mark',
    image: bntJapaneseCheesecakeImg,
    tag: 'Artisanal Dessert'
  },
  {
    id: 'map-04',
    title: 'Freshly Sealed Boba Cups',
    caption: 'Tiger brown sugar, emerald matcha and taro boba ready for takeout',
    image: bntBobaCounterCupsImg,
    tag: 'Signature Boba'
  },
  {
    id: 'map-05',
    title: 'K-Pop Fan Wall & Polaroid Corner',
    caption: 'Fandom memories, photocard trades, and cute anime decor',
    image: bntKpopPhotocardWallImg,
    tag: 'Fan Community'
  },
  {
    id: 'map-06',
    title: 'Sizzling Chengdu Chili Oil Wontons',
    caption: 'Silky wontons in fragrant house Sichuan chili oil & crisp garlic',
    image: chiliWontonsImg,
    tag: 'Comfort Food'
  }
];

export const MENU_ITEMS: MenuItem[] = [
  // Bubble Tea
  {
    id: 'boba-01',
    name: 'Brown Sugar Tiger Boba Milk',
    nativeName: '黑糖珍珠鲜奶',
    category: 'bubble-tea',
    categoryLabel: 'Bubble Tea',
    description: 'Slow-simmered caramelized Taiwanese tapioca pearls, organic whole milk, rich brown sugar syrup marbling and salted cream mousse.',
    price: 280,
    image: bntBobaCounterCupsImg,
    popular: true,
    dietary: 'veg',
    customizable: true
  },
  {
    id: 'boba-02',
    name: 'Uji Matcha Cloud Boba',
    nativeName: '宇治抹茶奶盖',
    category: 'bubble-tea',
    categoryLabel: 'Bubble Tea',
    description: 'First-harvest Kyoto Uji matcha whisked fresh to order over sweet oat milk with chewy brown sugar pearls and velvety sea salt cheese foam.',
    price: 310,
    image: bntBobaCounterCupsImg,
    popular: true,
    dietary: 'veg',
    customizable: true
  },
  {
    id: 'boba-03',
    name: 'Royal Taro Velvet Milk Tea',
    nativeName: '香芋经典奶茶',
    category: 'bubble-tea',
    categoryLabel: 'Bubble Tea',
    description: 'Fragrant purple taro root puree blended with Assam black milk tea, finished with chewy pearls and silky herbal grass jelly.',
    price: 290,
    image: heroBobaImg,
    dietary: 'veg',
    customizable: true
  },
  {
    id: 'boba-04',
    name: 'Mango Passion Fruit Popping Tea',
    nativeName: '芒果百香果波波茶',
    category: 'bubble-tea',
    categoryLabel: 'Bubble Tea',
    description: 'Cold-brewed jasmine green tea infused with ripe Alphonso mango and passion fruit, loaded with bursting mango popping boba and aloe vera.',
    price: 270,
    image: bubbleTeaTrioImg,
    popular: true,
    dietary: 'vegan',
    customizable: true
  },

  // Korean Bites & Street Food
  {
    id: 'korean-02',
    name: 'Seoul Crispy Mozzarella Cheese Corn Dog',
    nativeName: '치즈 핫도그',
    category: 'korean-bites',
    categoryLabel: 'Korean Bites',
    description: 'Golden fried street corn dog stuffed with stretchy mozzarella cheese and chicken sausage, dusted with sugar and drizzled with spicy honey mustard.',
    price: 340,
    image: bntCheeseCornDogImg,
    popular: true,
    dietary: 'non-veg',
    customizable: false
  },
  {
    id: 'korean-01',
    name: 'Korean Spicy Gochujang Chicken Wings',
    nativeName: '양념 치킨',
    category: 'korean-bites',
    categoryLabel: 'Korean Bites',
    description: 'Double-fried ultra-crispy chicken wings coated in sticky honey gochujang glaze, crushed roasted peanuts and fresh scallions.',
    price: 480,
    image: koreanWingsImg,
    popular: true,
    dietary: 'non-veg',
    spiceLevel: 2,
    customizable: true
  },

  // Wontons & Dim Sum
  {
    id: 'wonton-01',
    name: 'Chengdu Chili Oil Wontons',
    nativeName: '红油抄手',
    category: 'wontons',
    categoryLabel: 'Wontons',
    description: 'Hand-pleated delicate wontons swimming in house-roasted Sichuan chili oil, sweet aromatic soy vinegar, toasted sesame and crispy garlic.',
    price: 390,
    image: chiliWontonsImg,
    popular: true,
    dietary: 'non-veg',
    spiceLevel: 3,
    customizable: true
  },
  {
    id: 'wonton-02',
    name: 'Truffle & Edamame Steamed Wontons',
    nativeName: '黑松露素云吞',
    category: 'wontons',
    categoryLabel: 'Wontons',
    description: 'Delicate handmade wontons filled with shiitake mushrooms, water chestnuts and edamame, drizzled with black truffle chili broth.',
    price: 370,
    image: chiliWontonsImg,
    dietary: 'vegan',
    spiceLevel: 1
  },

  // Kimbap
  {
    id: 'kimbap-01',
    name: 'Traditional Beef Bulgogi Kimbap',
    nativeName: '소불고기 김밥',
    category: 'kimbap',
    categoryLabel: 'Kimbap',
    description: 'Crisp roasted nori wrapped with seasoned sushi rice, marinated tender bulgogi, pickled yellow radish (danmuji), blanched spinach and sweet egg ribbons.',
    price: 410,
    image: chiliWontonsImg,
    popular: true,
    dietary: 'non-veg'
  },
  {
    id: 'kimbap-02',
    name: 'Crispy Tempura Veggie Kimbap',
    nativeName: '야채 튀김 김밥',
    category: 'kimbap',
    categoryLabel: 'Kimbap',
    description: 'Seasoned toasted sesame rice roll filled with crispy asparagus tempura, sweet pickled carrot, cucumber ribbons and spicy mayo drizzle.',
    price: 360,
    image: heroBobaImg,
    dietary: 'veg'
  },

  // Ramen
  {
    id: 'ramen-01',
    name: '12-Hour Rich Tonkotsu Ramen',
    nativeName: '豚骨ラーメン',
    category: 'ramen',
    categoryLabel: 'Ramen',
    description: 'Slow-simmered rich creamy pork bone broth, springy Tokyo-style noodles, tender chashu, molten ajitsuke tamago egg, nori and black garlic oil.',
    price: 540,
    image: chiliWontonsImg,
    popular: true,
    dietary: 'non-veg',
    spiceLevel: 1,
    customizable: true
  },
  {
    id: 'ramen-02',
    name: 'Hokkaido Spicy Red Miso Ramen',
    nativeName: '北海道味噌ラーメン',
    category: 'ramen',
    categoryLabel: 'Ramen',
    description: 'Deep fermented red miso and roasted chili broth with wavy noodles, sweet buttered corn, wood ear mushrooms, bok choy and chili threads.',
    price: 490,
    image: chiliWontonsImg,
    dietary: 'veg',
    spiceLevel: 2,
    customizable: true
  },

  // Desserts
  {
    id: 'dessert-01',
    name: 'Japanese Cotton Cloud Cheesecake',
    nativeName: 'スフレチーズケーキ',
    category: 'desserts',
    categoryLabel: 'Desserts',
    description: 'Ultra-light, fluffy Japanese soufflé cheesecake that melts on your tongue, stamped with our signature brand logo, served with yuzu berry compote.',
    price: 420,
    image: bntJapaneseCheesecakeImg,
    popular: true,
    dietary: 'veg'
  },
  {
    id: 'dessert-02',
    name: 'Tokyo Fluffy Soufflé Pancakes',
    nativeName: 'ふわふわスフレパンケーキ',
    category: 'desserts',
    categoryLabel: 'Desserts',
    description: 'Double stacked jiggly Japanese soufflé pancakes crowned with whipped Hokkaido butter, maple drizzle and fresh seasonal strawberries.',
    price: 440,
    image: heroBobaImg,
    dietary: 'veg'
  },
  {
    id: 'dessert-03',
    name: 'Molten Belgian Chocolate Brownie',
    nativeName: '生チョコレートブラウニー',
    category: 'desserts',
    categoryLabel: 'Desserts',
    description: 'Warm fudgy 70% dark Belgian chocolate brownie topped with Madagascar vanilla bean gelato and dark cocoa nibs.',
    price: 340,
    image: heroBobaImg,
    dietary: 'veg'
  },

  // Coffee & Tea
  {
    id: 'coffee-01',
    name: 'Authentic Vietnamese Drip Iced Coffee',
    nativeName: 'Cà phê sữa đá',
    category: 'coffee-tea',
    categoryLabel: 'Coffee & Tea',
    description: 'Traditional slow-dripped Robusta coffee brewed in a metal phin filter over sweetened condensed milk and poured over crushed ice.',
    price: 250,
    image: heroBobaImg,
    popular: true,
    dietary: 'veg'
  },
  {
    id: 'coffee-02',
    name: 'Cha Yen Bangkok Thai Milk Tea',
    nativeName: 'ชาเย็น',
    category: 'coffee-tea',
    categoryLabel: 'Coffee & Tea',
    description: 'Bold Ceylon black tea brewed with star anise and crushed cardamom, layered with sweetened condensed milk and evaporated milk foam.',
    price: 260,
    image: bntBobaCounterCupsImg,
    dietary: 'veg'
  },
  {
    id: 'coffee-03',
    name: 'Barista Velvet Cappuccino',
    nativeName: 'カプチーノ',
    category: 'coffee-tea',
    categoryLabel: 'Coffee & Tea',
    description: 'Double shot of freshly extracted house espresso blend with micro-foamed textured steamed milk and dusted Dutch cocoa.',
    price: 230,
    image: heroBobaImg,
    dietary: 'veg'
  }
];

export const BUBBLE_TEA_SHOWCASE: BubbleTeaFlavor[] = [
  {
    id: 'tiger-brown-sugar',
    name: 'Brown Sugar Tiger Pearl',
    chineseName: '黑糖珍珠鲜奶',
    tagline: 'The Signature Classic',
    description: 'Slow-caramelized Taiwanese Muscovado syrup flamed along the glass wall, whole cold milk, and warm hand-stirred chewy tapioca pearls.',
    flavorNotes: ['Deep Molasses', 'Silky Cream', 'Chewy Tapioca', 'Warm & Cold Contrast'],
    basePrice: 280,
    accentColor: '#c88647',
    image: bntBobaCounterCupsImg
  },
  {
    id: 'uji-matcha-cheese',
    name: 'Uji Matcha Cheese Cloud',
    chineseName: '宇治抹茶芝士奶盖',
    tagline: 'Kyoto Green Craft',
    description: 'Ceremonial grade Uji green tea with natural umami, layered over creamy whole milk and crowned with thick savory Himalayan sea salt cheese froth.',
    flavorNotes: ['Earthy Umami', 'Savory Cream', 'Subtle Sweetness', 'Emerald Hue'],
    basePrice: 310,
    accentColor: '#5c7849',
    image: bntBobaCounterCupsImg
  },
  {
    id: 'royal-taro-creme',
    name: 'Royal Taro Silk & Jelly',
    chineseName: '皇家芋泥波波',
    tagline: 'Velvety Comfort',
    description: 'Real purple taro paste whipped with Assam golden black milk tea, tender boba pearls, and cooling herbal grass jelly cubes.',
    flavorNotes: ['Nutty Sweet Potato', 'Vanilla Notes', 'Silky Density', 'Herbal Refreshment'],
    basePrice: 290,
    accentColor: '#8a6fa0',
    image: heroBobaImg
  },
  {
    id: 'mango-passion-fruit',
    name: 'Mango Passion Green Tea',
    chineseName: '芒芒百香果茶',
    tagline: 'Tropical Sunrise',
    description: 'Cold-brewed jasmine green tea with real Alphonso mango pulp, tangy passion fruit seeds, and popping boba pearls that burst with sweet juice.',
    flavorNotes: ['Jasmine Florals', 'Bright Citrus', 'Popping Texture', 'Summer Crisp'],
    basePrice: 270,
    accentColor: '#e58e26',
    image: bubbleTeaTrioImg
  },
  {
    id: 'viet-salted-caramel',
    name: 'Viet Iced Coffee Boba',
    chineseName: '越南焦糖冰咖啡波波',
    tagline: 'Bold Caffeine Kick',
    description: 'Slow-dripped dark Vietnamese Robusta, condensed milk fudge, sea salt caramel swirl, and coffee-infused boba pearls.',
    flavorNotes: ['Dark Chocolate', 'Condensed Milk', 'Smoky Roast', 'Caffeine Kick'],
    basePrice: 280,
    accentColor: '#7a4b2c',
    image: heroBobaImg
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-01',
    name: 'Rohan Mukherjee',
    rating: 5,
    date: '2 weeks ago',
    comment: 'Hands down the best bubble tea in Kolkata! The Brown Sugar Tiger Boba has genuine chewy texture, not rubbery like other places. The chili oil wontons are super addictive too.',
    highlight: 'Brown Sugar Boba & Chili Wontons',
    tag: 'Verified Diner'
  },
  {
    id: 'rev-02',
    name: 'Ananya Sen',
    rating: 5,
    date: 'Last month',
    comment: 'Obsessed with the K-pop and anime aesthetic. They have NewJeans, BTS and J-pop playing, anime figurines on the shelves, and the staff is genuinely polite. The Japanese cheesecake is so fluffy!',
    highlight: 'Fluffy Japanese Cheesecake & Vibe',
    tag: 'Regular Patron'
  },
  {
    id: 'rev-03',
    name: 'Debjit Roy',
    rating: 5,
    date: '3 weeks ago',
    comment: 'The Korean fried chicken wings are so crunchy with the sweet-spicy gochujang glaze. Tonkotsu ramen broth was surprisingly rich and comforting for a rainy Kolkata evening.',
    highlight: 'Authentic Korean Wings & Ramen',
    tag: 'Food Enthusiast'
  },
  {
    id: 'rev-04',
    name: 'Priyanka Das',
    rating: 4.8,
    date: '1 month ago',
    comment: 'Super aesthetic cafe in Salt Lake Sector 3. Perfect hangout spot with friends after work. Great matcha bubble tea, clean washrooms, and quick table service.',
    highlight: 'Aesthetic Atmosphere & Quick Service',
    tag: 'Local Guide'
  }
];

export const VIBE_HIGHLIGHTS = [
  { title: 'K-Pop & J-Pop Beats', subtitle: 'Curated playlists from Seoul & Tokyo spinning all day' },
  { title: 'Anime & Art Figures', subtitle: 'Gundam, Demon Slayer, Studio Ghibli, and designer collectibles' },
  { title: 'Boba Culture Corner', subtitle: 'Taiwanese slow-simmered tapioca cooked fresh every 3 hours' },
  { title: 'Late-Night Hanging', subtitle: 'Warm amber lantern lighting, cozy booths, and board games' },
  { title: 'Kolkata × East Asia', subtitle: 'Located at GC Block, Sector 3, Salt Lake — your welcoming community hub' }
];

export const LOFI_TRACKS = [
  { title: 'Seoul Rainy Cafe (Lo-Fi)', artist: 'Bubble N Tea Beats', duration: '3:24' },
  { title: 'Tokyo Sunset Walk (City Pop Edit)', artist: 'Shibuya Soundscape', duration: '2:58' },
  { title: 'Hong Kong Tea Room (Boba Vibe)', artist: 'Kowloon Jazz Collective', duration: '3:12' }
];
