/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MenuItem, CartItem, BubbleTeaFlavor } from './types';
import { CAFE_INFO, MENU_ITEMS } from './data/cafeData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandIntro } from './components/BrandIntro';
import { FloatingFoodShowcase } from './components/FloatingFoodShowcase';
import { SignatureMenu } from './components/SignatureMenu';
import { BubbleTeaFeature } from './components/BubbleTeaFeature';
import { AsianFoodExperience } from './components/AsianFoodExperience';
import { CafeExperience } from './components/CafeExperience';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { ReservationCTA } from './components/ReservationCTA';
import { Footer } from './components/Footer';
import { ReservationModal } from './components/ReservationModal';
import { CustomizeModal } from './components/CustomizeModal';
import { CartDrawer } from './components/CartDrawer';
import { ShoppingBag, Calendar } from 'lucide-react';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [customizingItem, setCustomizingItem] = useState<MenuItem | null>(null);

  // Cart operations
  const handleQuickAdd = (item: MenuItem) => {
    const existingIndex = cartItems.findIndex((ci) => ci.menuItemId === item.id && !ci.toppings?.length);
    if (existingIndex > -1) {
      const updated = [...cartItems];
      updated[existingIndex].quantity += 1;
      setCartItems(updated);
    } else {
      const newItem: CartItem = {
        id: `${item.id}-${Date.now()}`,
        menuItemId: item.id,
        name: item.name,
        price: item.price,
        quantity: 1,
        image: item.image,
      };
      setCartItems((prev) => [...prev, newItem]);
    }
  };

  const handleQuickAddFlavor = (flavor: BubbleTeaFlavor) => {
    const newItem: CartItem = {
      id: `${flavor.id}-${Date.now()}`,
      menuItemId: flavor.id,
      name: flavor.name,
      price: flavor.basePrice,
      quantity: 1,
      image: flavor.image,
      sweetness: '70% (Less Sweet)',
      iceLevel: 'Less Ice',
      toppings: ['Brown Sugar Tapioca Pearls'],
    };
    setCartItems((prev) => [...prev, newItem]);
  };

  const handleCustomizedAddToCart = (item: CartItem) => {
    setCartItems((prev) => [...prev, item]);
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, quantity: item.quantity + delta } : item))
        .filter((item) => item.quantity > 0)
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0d0c0c] text-[#fbfaf8] flex flex-col selection:bg-[#e8604c] selection:text-white relative">
      
      {/* Top Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenReservation={() => setIsReservationOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreMenu={() => scrollToSection('menu')}
          onBookTable={() => setIsReservationOpen(true)}
        />

        {/* Brand Manifesto Intro */}
        <BrandIntro />

        {/* Continuous Left-to-Right Floating Food Stream */}
        <FloatingFoodShowcase
          onSelectItemForCustomize={(item) => setCustomizingItem(item)}
          onQuickAdd={handleQuickAdd}
        />

        {/* Signature Menu */}
        <SignatureMenu
          onSelectItemForCustomize={(item) => setCustomizingItem(item)}
          onQuickAdd={handleQuickAdd}
        />

        {/* Dedicated Bubble Tea Showcase ("SHAKE. SIP. REPEAT.") */}
        <BubbleTeaFeature
          onQuickAddFlavor={handleQuickAddFlavor}
        />

        {/* Split Screen Asian Food Experience */}
        <AsianFoodExperience
          onExploreCategory={(cat) => {
            scrollToSection('menu');
          }}
        />

        {/* Cafe Experience & Atmosphere Gallery */}
        <CafeExperience />

        {/* Reviews Section */}
        <ReviewsSection />

        {/* Location & Directions */}
        <LocationSection
          onBookTable={() => setIsReservationOpen(true)}
        />

        {/* Reservation CTA */}
        <ReservationCTA
          onOpenReservation={() => setIsReservationOpen(true)}
          onOpenOrder={() => setIsCartOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Quick Action Bar (strictly under 15% mobile viewport height) */}
      <div className="fixed bottom-0 left-0 right-0 sm:hidden z-40 bg-[#141312]/95 backdrop-blur-md border-t border-white/10 p-3 flex items-center justify-between gap-2 shadow-2xl">
        <button
          type="button"
          onClick={() => setIsReservationOpen(true)}
          className="flex-1 py-2.5 px-3 rounded-lg bg-white/10 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5"
        >
          <Calendar className="w-3.5 h-3.5 text-[#e8604c]" />
          <span>Book Table</span>
        </button>

        <button
          type="button"
          onClick={() => setIsCartOpen(true)}
          className="flex-1 py-2.5 px-3 rounded-lg bg-[#e8604c] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md"
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          <span>Bag {totalCartCount > 0 ? `(${totalCartCount})` : ''}</span>
        </button>
      </div>

      {/* Interactive Modals & Drawers */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />

      <CustomizeModal
        item={customizingItem}
        isOpen={!!customizingItem}
        onClose={() => setCustomizingItem(null)}
        onAddToCart={handleCustomizedAddToCart}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

    </div>
  );
}
