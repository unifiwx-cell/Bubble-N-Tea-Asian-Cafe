import React from 'react';
import { ArrowDown, Sparkles, Star, ChevronRight, MapPin, Coffee, UtensilsCrossed } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';
import { FloatingBobaParticles } from './FloatingBobaParticles';

interface HeroProps {
  onExploreMenu: () => void;
  onBookTable: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu, onBookTable }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[94vh] lg:min-h-screen flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-[#0d0c0c]"
    >
      {/* 1. Full-bleed Cinematic Background Image with Measured Scrim */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={CAFE_INFO.images.heroBackdrop}
          alt="Bubble N Tea Asian Cafe luxury interior atmosphere"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover scale-105 transition-transform duration-1000 ease-out brightness-[0.42] contrast-[1.12]"
        />
        {/* Layered cinematic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0c0c] via-[#0d0c0c]/60 to-[#0d0c0c]/85" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0d0c0c]/40 to-[#0d0c0c]/90" />
      </div>

      {/* 2. Elegant Semi-Transparent Animated Boba Particles Floating in Background */}
      <FloatingBobaParticles />

      {/* 3. Asian Decorative Architectural Elements & Kumiko Lattice Accents */}
      <div className="absolute inset-0 z-[1] film-grain opacity-35 pointer-events-none" />
      
      {/* Delicate Asian Corner Frame Lines */}
      <div className="absolute top-24 left-8 w-20 h-20 border-t border-l border-white/20 hidden md:block pointer-events-none" />
      <div className="absolute top-24 right-8 w-20 h-20 border-t border-r border-white/20 hidden md:block pointer-events-none" />
      <div className="absolute bottom-16 left-8 w-20 h-20 border-b border-l border-white/20 hidden md:block pointer-events-none" />
      <div className="absolute bottom-16 right-8 w-20 h-20 border-b border-r border-white/20 hidden md:block pointer-events-none" />

      {/* Subtle Ambient Glow Orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-[#e8604c]/15 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-[#f4a261]/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Floating minimal bubbles */}
      <div className="absolute top-32 left-[12%] w-3 h-3 rounded-full bg-white/20 blur-[1px] animate-pulse pointer-events-none" />
      <div className="absolute top-44 right-[15%] w-4 h-4 rounded-full bg-[#f4a261]/25 blur-[1px] animate-bounce duration-1000 pointer-events-none" />
      <div className="absolute bottom-36 left-[18%] w-2.5 h-2.5 rounded-full bg-white/20 pointer-events-none" />

      {/* 3. Centered Monumental Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto text-center flex flex-col items-center">
        
        {/* Top Decorative Eyebrow & Official Emblem */}
        <div className="flex flex-col items-center mb-6">
          <div className="relative group mb-3">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#e8604c] to-[#f4a261] opacity-75 blur-sm group-hover:opacity-100 transition-opacity" />
            <img
              src={CAFE_INFO.logo}
              alt="Bubble N Tea Official Logo"
              className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-2 border-white/30 shadow-2xl"
            />
          </div>

          {/* Multilingual Hanko Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 text-xs font-mono text-zinc-300">
            <span className="font-asian text-sm sm:text-base tracking-widest text-[#e8604c] font-bold">
              珍珠奶茶传
            </span>
            <span className="text-zinc-600">✦</span>
            <span className="font-bengali text-sm sm:text-base text-zinc-200 font-medium">
              বাবল্ এন টি এশিয়ান ক্যাফে
            </span>
            <span className="text-zinc-600">✦</span>
            <span className="hanko-stamp text-[10px] bg-black/40 backdrop-blur-md">
              KOLKATA · BIDHANNAGAR
            </span>
          </div>
        </div>

        {/* Cafe Name at the Middle — Bold, Monumental, Editorial */}
        <div className="space-y-2 mb-6">
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-[#fbfaf8] uppercase leading-[1.02] drop-shadow-2xl">
            BUBBLE N TEA <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fbfaf8] via-[#f4a261] to-[#e8604c]">
              ASIAN CAFE
            </span>
          </h1>

          {/* Decorative Divider with Diamond */}
          <div className="flex items-center justify-center gap-3 pt-2">
            <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-white/40" />
            <span className="text-[#e8604c] text-xs">◆</span>
            <span className="text-[11px] uppercase tracking-[0.25em] font-mono text-zinc-400">
              EST. FOR GOOD TIMES
            </span>
            <span className="text-[#e8604c] text-xs">◆</span>
            <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-white/40" />
          </div>
        </div>

        {/* Narrative Description */}
        <p className="text-sm sm:text-base md:text-lg text-zinc-300 max-w-2xl leading-relaxed mb-8 font-light drop-shadow">
          A cozy Asian cafe in the heart of Kolkata where handcrafted brown sugar bubble teas, authentic Korean street bites, steaming Sichuan wontons, and Seoul-Tokyo pop-culture come together.
        </p>

        {/* Centered CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-5 mb-10">
          <button
            type="button"
            onClick={onExploreMenu}
            className="group inline-flex items-center gap-2.5 px-7 py-4 text-xs sm:text-sm font-bold tracking-wider uppercase text-[#0d0c0c] bg-white hover:bg-zinc-200 rounded-xl shadow-2xl hover:shadow-white/20 transition-all duration-200 active:scale-95 cursor-pointer"
          >
            <span>EXPLORE MENU</span>
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#e8604c]" />
          </button>

          <button
            type="button"
            onClick={onBookTable}
            className="inline-flex items-center gap-2 px-7 py-4 text-xs sm:text-sm font-bold tracking-wider uppercase text-white bg-black/60 hover:bg-black/80 border border-white/20 hover:border-white/40 backdrop-blur-md rounded-xl transition-all duration-200 active:scale-95 cursor-pointer"
          >
            <span>BOOK A TABLE</span>
          </button>
        </div>

        {/* Symmetrical Floating Highlight Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-3xl">
          
          <div className="p-3 rounded-xl bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center gap-2.5 text-xs text-zinc-300">
            <Coffee className="w-4 h-4 text-[#f4a261] shrink-0" />
            <span className="font-medium">Handcrafted Boba & Brews</span>
          </div>

          <div className="p-3 rounded-xl bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center gap-2 text-xs text-zinc-300">
            <div className="flex text-amber-400">
              <Star className="w-3.5 h-3.5 fill-current" />
            </div>
            <span className="font-bold text-white">4.7 ★</span>
            <span className="text-zinc-500">·</span>
            <span className="font-mono text-[11px] text-zinc-300">1,971 Reviews</span>
          </div>

          <div className="p-3 rounded-xl bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center gap-2.5 text-xs text-zinc-300">
            <MapPin className="w-4 h-4 text-[#e8604c] shrink-0" />
            <span className="font-medium truncate">GC Block, Sector 3, Kolkata</span>
          </div>

        </div>

      </div>

      {/* 4. Bottom Discovery Bar */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 flex items-center justify-between text-xs text-zinc-400 border-t border-white/10">
        <a
          href="#about"
          className="inline-flex items-center gap-2 hover:text-white transition-colors group cursor-pointer"
        >
          <span className="tracking-widest uppercase text-[11px] font-mono">Scroll to Discover</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#e8604c]" />
        </a>

        <div className="hidden md:flex items-center gap-4 text-[11px] font-mono tracking-wider text-zinc-400">
          <span>DINE-IN</span>
          <span>·</span>
          <span>KERBSIDE PICKUP</span>
          <span>·</span>
          <span>NO-CONTACT DELIVERY</span>
          <span>·</span>
          <span>ONLINE ORDERING</span>
        </div>
      </div>
    </section>
  );
};
