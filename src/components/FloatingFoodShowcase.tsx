import React from 'react';
import { MENU_ITEMS } from '../data/cafeData';
import { MenuItem } from '../types';
import { Plus, SlidersHorizontal, Sparkles } from 'lucide-react';

interface FloatingFoodShowcaseProps {
  onSelectItemForCustomize: (item: MenuItem) => void;
  onQuickAdd: (item: MenuItem) => void;
}

export const FloatingFoodShowcase: React.FC<FloatingFoodShowcaseProps> = ({
  onSelectItemForCustomize,
  onQuickAdd,
}) => {
  // Select signature visual highlights
  const showcaseItems = MENU_ITEMS.slice(0, 8);
  // Duplicate array to achieve seamless infinite loop
  const infiniteItems = [...showcaseItems, ...showcaseItems, ...showcaseItems];

  const handleItemClick = (item: MenuItem) => {
    if (item.customizable) {
      onSelectItemForCustomize(item);
    } else {
      onQuickAdd(item);
    }
  };

  return (
    <section className="relative py-12 bg-[#0a0a09] border-t border-b border-white/10 overflow-hidden">
      
      {/* Decorative Top Eyebrow */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2.5 text-xs font-mono text-[#f4a261]">
          <span className="w-2 h-2 rounded-full bg-[#e8604c] animate-ping" />
          <span className="uppercase tracking-widest font-bold">LIVE CHEF STREAM</span>
          <span className="text-zinc-600">·</span>
          <span className="font-asian text-zinc-400">名物スライド</span>
        </div>
        <div className="text-[11px] font-mono text-zinc-500 hidden sm:block">
          Hover to pause · Click any dish to customize or add to bag
        </div>
      </div>

      {/* Outer Overflow Container */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Left & Right Gradient Shadows for seamless edge fade */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-[#0a0a09] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-[#0a0a09] to-transparent z-10 pointer-events-none" />

        {/* Continuous Left-to-Right Animated Sliding Track */}
        <div className="animate-food-slide-ltr flex items-center gap-6">
          {infiniteItems.map((item, idx) => {
            // Alternate vertical floating oscillation speeds & delays
            const floatClass =
              idx % 3 === 0
                ? 'animate-food-float-1'
                : idx % 3 === 1
                ? 'animate-food-float-2'
                : 'animate-food-float-3';

            return (
              <div
                key={`${item.id}-${idx}`}
                onClick={() => handleItemClick(item)}
                className={`group shrink-0 w-72 sm:w-80 rounded-2xl bg-[#161514] border border-white/10 p-3.5 shadow-xl hover:shadow-2xl hover:border-white/30 transition-all duration-300 cursor-pointer ${floatClass}`}
              >
                <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-zinc-900 mb-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                  
                  {/* Category Stamp */}
                  <div className="absolute top-2.5 left-2.5">
                    <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-md text-[10px] font-mono uppercase tracking-wider text-zinc-300 border border-white/10">
                      {item.categoryLabel}
                    </span>
                  </div>

                  {/* Price Tag */}
                  <div className="absolute top-2.5 right-2.5">
                    <span className="px-2 py-0.5 rounded bg-[#e8604c] text-[11px] font-mono font-bold text-white shadow">
                      ₹{item.price}
                    </span>
                  </div>

                  {item.nativeName && (
                    <div className="absolute bottom-2 left-2.5 text-[11px] font-asian text-zinc-300">
                      {item.nativeName}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="px-1">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h4 className="font-display text-sm font-bold text-white group-hover:text-[#f4a261] transition-colors truncate">
                      {item.name}
                    </h4>
                  </div>
                  <p className="text-[11px] text-zinc-400 line-clamp-1 mb-3">
                    {item.description}
                  </p>

                  <div className="pt-2 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase">
                      Tap to Order
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#e8604c] group-hover:text-[#f4a261] transition-colors">
                      {item.customizable ? (
                        <>
                          <SlidersHorizontal className="w-3 h-3" />
                          <span>Customize</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3 h-3" />
                          <span>Add to Bag</span>
                        </>
                      )}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
