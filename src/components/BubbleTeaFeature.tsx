import React, { useState } from 'react';
import { BUBBLE_TEA_SHOWCASE } from '../data/cafeData';
import { BubbleTeaFlavor, MenuItem } from '../types';
import { Sparkles, Plus, Check, Droplets, ChevronLeft, ChevronRight } from 'lucide-react';

interface BubbleTeaFeatureProps {
  onQuickAddFlavor: (flavor: BubbleTeaFlavor) => void;
}

export const BubbleTeaFeature: React.FC<BubbleTeaFeatureProps> = ({ onQuickAddFlavor }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [added, setAdded] = useState(false);

  const activeFlavor = BUBBLE_TEA_SHOWCASE[selectedIndex];

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % BUBBLE_TEA_SHOWCASE.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev - 1 + BUBBLE_TEA_SHOWCASE.length) % BUBBLE_TEA_SHOWCASE.length);
  };

  const handleAdd = () => {
    onQuickAddFlavor(activeFlavor);
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  };

  return (
    <section className="relative py-24 sm:py-32 bg-[#121110] border-t border-b border-white/5 overflow-hidden">
      
      {/* Floating minimal bubbles decoration */}
      <div className="absolute top-12 left-10 w-8 h-8 rounded-full border border-white/10 animate-pulse pointer-events-none" />
      <div className="absolute bottom-16 right-16 w-12 h-12 rounded-full border border-[#e8604c]/20 animate-bounce duration-1000 pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-4 h-4 rounded-full bg-white/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Floating Ingredient Labels Ribbon */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mb-8 text-xs font-mono tracking-widest text-zinc-400">
          <span className="flex items-center gap-1.5 text-zinc-200">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e8604c]" />
            TEA
          </span>
          <span className="text-zinc-600">·</span>
          <span className="flex items-center gap-1.5 text-zinc-200">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f4a261]" />
            MILK
          </span>
          <span className="text-zinc-600">·</span>
          <span className="flex items-center gap-1.5 text-zinc-200">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c88647]" />
            BOBA
          </span>
          <span className="text-zinc-600">·</span>
          <span className="flex items-center gap-1.5 text-zinc-200">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            ICE
          </span>
          <span className="text-zinc-600">·</span>
          <span className="flex items-center gap-1.5 text-zinc-200">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            FLAVOR
          </span>
        </div>

        {/* Section Headline */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase leading-none">
            SHAKE. SIP. <span className="text-[#e8604c]">REPEAT.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-400">
            Handcrafted with slow-braised brown sugar pearls, imported loose-leaf teas, and velvety cheese froth. Made to order for every sip.
          </p>
        </div>

        {/* Main Interactive Boba Showcase Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#171615] rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl relative overflow-hidden">
          
          {/* Background Ambient Tint based on flavor */}
          <div
            className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full blur-3xl opacity-20 pointer-events-none transition-colors duration-500"
            style={{ backgroundColor: activeFlavor.accentColor }}
          />

          {/* Left Column: Oversized Beverage Imagery */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-zinc-900 border border-white/10 group">
              <img
                src={activeFlavor.image}
                alt={activeFlavor.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
              
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-white border border-white/10">
                  {activeFlavor.tagline}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div>
                  <span className="font-asian text-base font-bold text-zinc-300 drop-shadow">
                    {activeFlavor.chineseName}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-zinc-400 block font-mono">FROM</span>
                  <span className="text-xl font-bold text-white font-mono tabular-nums">
                    ₹{activeFlavor.basePrice}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Flavor Profile, Tasting Notes & Quick Add */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2 text-xs font-mono text-[#f4a261]">
                <Droplets className="w-3.5 h-3.5" />
                <span>FLAVOR SPOTLIGHT #{selectedIndex + 1} OF {BUBBLE_TEA_SHOWCASE.length}</span>
              </div>

              <h3 className="font-display text-2xl sm:text-4xl font-black text-white tracking-tight mb-3">
                {activeFlavor.name}
              </h3>

              <p className="text-sm text-zinc-300 leading-relaxed mb-6 font-light">
                {activeFlavor.description}
              </p>

              {/* Tasting Notes */}
              <div className="mb-6">
                <span className="text-xs uppercase tracking-widest text-zinc-400 block mb-2.5 font-semibold">
                  Tasting Notes & Texture:
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeFlavor.flavorNotes.map((note) => (
                    <span
                      key={note}
                      className="px-2.5 py-1 text-xs rounded bg-white/5 border border-white/10 text-zinc-300"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Flavor Switcher Dots & Controls */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous bubble tea flavor"
                  className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-1.5 px-2">
                  {BUBBLE_TEA_SHOWCASE.map((f, i) => (
                    <button
                      key={f.id}
                      onClick={() => setSelectedIndex(i)}
                      aria-label={`Select flavor ${f.name}`}
                      className={`h-2 rounded-full transition-all ${
                        selectedIndex === i ? 'w-6 bg-[#e8604c]' : 'w-2 bg-white/20 hover:bg-white/40'
                      }`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next bubble tea flavor"
                  className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <button
                type="button"
                onClick={handleAdd}
                className={`inline-flex items-center gap-2 px-5 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-lg active:scale-95 ${
                  added
                    ? 'bg-emerald-600 text-white'
                    : 'bg-[#e8604c] hover:bg-[#d44e3a] text-white'
                }`}
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Added to Bag</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-4 h-4" />
                    <span>Add {activeFlavor.name} (₹{activeFlavor.basePrice})</span>
                  </>
                )}
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
