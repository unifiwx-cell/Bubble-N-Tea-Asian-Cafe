import React, { useState, useEffect } from 'react';
import { ShoppingBag, Calendar, Menu as MenuIcon, X, Sparkles, MapPin } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onOpenReservation
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#hero' },
    { name: 'MENU', href: '#menu' },
    { name: 'ABOUT', href: '#about' },
    { name: 'EXPERIENCE', href: '#experience' },
    { name: 'REVIEWS', href: '#reviews' },
    { name: 'LOCATION', href: '#location' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-[#0d0c0c]/90 backdrop-blur-md border-b border-white/10 shadow-xl'
            : 'py-5 bg-gradient-to-b from-[#0d0c0c]/80 via-[#0d0c0c]/40 to-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Zone 1: Brand wordmark with official cafe logo */}
            <a
              href="#hero"
              className="flex items-center gap-3 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e8604c] rounded-md"
            >
              <img
                src={CAFE_INFO.logo}
                alt="Bubble N Tea Cafe Logo"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover border border-white/20 shadow-md group-hover:scale-105 transition-transform shrink-0"
              />
              <div className="flex flex-col">
                <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-[#f4a261] transition-colors leading-tight">
                  Bubble N Tea
                </span>
                <span className="text-[10px] font-asian tracking-widest text-zinc-400 group-hover:text-zinc-200 transition-colors">
                  {CAFE_INFO.chineseName}
                </span>
              </div>
              <span className="hidden sm:inline-block text-[10px] px-1.5 py-0.5 rounded border border-[#d94334]/60 text-[#d94334] font-asian font-bold bg-[#d94334]/10">
                喫茶
              </span>
            </a>

            {/* Zone 2: 4-6 text links with subtle hover styles */}
            <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold tracking-wider text-zinc-300">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#e8604c] hover:after:w-full after:transition-all"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Zone 3: 1-2 primary actions */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              <button
                type="button"
                onClick={onOpenCart}
                aria-label={`View order bag with ${cartCount} items`}
                className="relative flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-all active:scale-95"
              >
                <ShoppingBag className="w-4 h-4 text-[#f4a261]" />
                <span className="hidden sm:inline">Bag</span>
                {cartCount > 0 && (
                  <span className="flex items-center justify-center min-w-5 h-5 px-1 text-[11px] font-bold bg-[#e8604c] text-white rounded-full">
                    {cartCount}
                  </span>
                )}
              </button>

              <button
                type="button"
                onClick={onOpenReservation}
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold tracking-wide uppercase text-white bg-[#e8604c] hover:bg-[#d44e3a] transition-all rounded-lg shadow-md hover:shadow-[#e8604c]/20 active:scale-95 whitespace-nowrap"
              >
                <Calendar className="w-3.5 h-3.5" />
                Book a Table
              </button>

              {/* Mobile menu hamburger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle mobile menu"
                className="lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-zinc-300 hover:text-white"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile dropdown navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 px-4 pt-3 pb-6 bg-[#141312] border-b border-white/10 shadow-2xl animate-in fade-in slide-in-from-top-2">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 pb-2 mb-2 border-b border-white/5 text-xs text-zinc-400">
                <MapPin className="w-3.5 h-3.5 text-[#e8604c]" />
                <span>Sector 3, Bidhannagar, Kolkata</span>
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-semibold tracking-wider text-zinc-200 hover:bg-white/5 rounded-md transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 mt-2 border-t border-white/5">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenReservation();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#e8604c] hover:bg-[#d44e3a] rounded-lg"
                >
                  <Calendar className="w-4 h-4" />
                  Book a Table
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
