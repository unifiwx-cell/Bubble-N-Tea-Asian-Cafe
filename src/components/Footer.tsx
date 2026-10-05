import React from 'react';
import { CAFE_INFO } from '../data/cafeData';
import { Instagram, MapPin, Phone, Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#090908] text-white border-t border-white/10 pt-20 pb-12 relative overflow-hidden">
      
      {/* Decorative vertical seal stamp */}
      <div className="absolute top-10 right-10 opacity-10 pointer-events-none hidden md:block">
        <span className="font-asian text-8xl font-black writing-vertical text-white">
          珍珠奶茶传
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand & Multilingual Column */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-4">
              <img
                src={CAFE_INFO.logo}
                alt="Bubble N Tea Cafe Logo"
                className="w-14 h-14 rounded-full object-cover border-2 border-white/20 shadow-xl shrink-0"
              />
              <div className="space-y-0.5">
                <h2 className="font-display text-2xl sm:text-4xl font-black tracking-tight text-white leading-tight">
                  BUBBLE N TEA
                </h2>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-asian text-xs font-bold text-[#e8604c] tracking-widest">
                    {CAFE_INFO.chineseName}
                  </span>
                  <span className="text-zinc-600">/</span>
                  <span className="font-bengali text-xs text-zinc-300 font-medium">
                    {CAFE_INFO.bengaliName}
                  </span>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 max-w-md leading-relaxed font-light">
              Kolkata's beloved Asian café concept celebrating Taiwanese bubble tea craftsmanship, authentic Japanese-Korean street cuisine, and an immersive pop-culture soundtrack.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <span className="text-xs text-zinc-400 font-mono">@bubblentea.kolkata</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#f4a261] font-bold block mb-4">
              Explore
            </span>
            <ul className="space-y-2 text-xs font-semibold tracking-wider text-zinc-300">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">HOME</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-white transition-colors">MENU</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">ABOUT</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">EXPERIENCE</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">REVIEWS</a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">CONTACT</a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-3 space-y-3 text-xs text-zinc-400">
            <span className="text-xs font-mono uppercase tracking-widest text-[#f4a261] font-bold block mb-4">
              Kolkata Outpost
            </span>
            <p className="text-white leading-relaxed font-medium">
              GC 15, GC Block, Sector 3,<br />
              Bidhannagar, Kolkata,<br />
              West Bengal 700106
            </p>
            <p className="font-mono text-zinc-300 pt-1">
              Phone: {CAFE_INFO.phone}
            </p>
            <p className="text-zinc-400">
              Hours: 12:00 PM – 11:00 PM Daily
            </p>
          </div>

        </div>

        {/* Brand Mantra & Back to Top */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <p className="font-display text-sm sm:text-base font-bold tracking-widest text-zinc-200 uppercase">
              GOOD FOOD. GOOD VIBES. GOOD PEOPLE.
            </p>
            <p className="text-[11px] text-zinc-400 font-mono mt-1">
              © {new Date().getFullYear()} Bubble N Tea Asian Cafe. All rights reserved.
            </p>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-mono text-zinc-300 hover:text-white border border-white/10 transition-colors"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#e8604c]" />
          </button>
        </div>

      </div>
    </footer>
  );
};
