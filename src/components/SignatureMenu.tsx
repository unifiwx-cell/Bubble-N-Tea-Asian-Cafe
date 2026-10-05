import React, { useState } from 'react';
import { MenuItem } from '../types';
import { MENU_ITEMS } from '../data/cafeData';
import { Plus, Flame, Check, SlidersHorizontal, ArrowRight, MoveHorizontal, LayoutGrid, Pause, Play } from 'lucide-react';

interface SignatureMenuProps {
  onSelectItemForCustomize: (item: MenuItem) => void;
  onQuickAdd: (item: MenuItem) => void;
}

export const SignatureMenu: React.FC<SignatureMenuProps> = ({
  onSelectItemForCustomize,
  onQuickAdd
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'stream' | 'grid'>('stream');
  const [isPaused, setIsPaused] = useState(false);
  const [addedItemId, setAddedItemId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'ALL FAVORITES' },
    { id: 'bubble-tea', label: 'BUBBLE TEA' },
    { id: 'ramen', label: 'RAMEN' },
    { id: 'kimbap', label: 'KIMBAP' },
    { id: 'wontons', label: 'WONTONS' },
    { id: 'korean-bites', label: 'KOREAN BITES' },
    { id: 'desserts', label: 'DESSERTS' },
    { id: 'coffee-tea', label: 'COFFEE & TEA' },
  ];

  const filteredItems = activeCategory === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter((item) => item.category === activeCategory);

  // Triple the items for smooth infinite sliding
  const slideItems = [...filteredItems, ...filteredItems, ...filteredItems];

  const handleAdd = (item: MenuItem) => {
    if (item.customizable) {
      onSelectItemForCustomize(item);
    } else {
      onQuickAdd(item);
      setAddedItemId(item.id);
      setTimeout(() => setAddedItemId(null), 1400);
    }
  };

  return (
    <section id="menu" className="py-24 sm:py-32 bg-[#0d0c0c] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-2 text-xs tracking-widest text-[#e8604c] font-semibold uppercase">
              <span>Fresh Flavors Daily</span>
              <span className="text-zinc-600">·</span>
              <span className="font-asian text-zinc-400">こだわりメニュー</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-black tracking-tight text-white">
              THE GOOD STUFF
            </h2>
          </div>

          {/* View Mode Toggle: Continuous Slide vs Grid */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <div className="p-1 rounded-xl bg-white/5 border border-white/10 flex items-center gap-1">
              <button
                type="button"
                onClick={() => setViewMode('stream')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wider uppercase transition-all ${
                  viewMode === 'stream'
                    ? 'bg-[#e8604c] text-white shadow-md font-bold'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <MoveHorizontal className="w-3.5 h-3.5" />
                <span>Floating Slide</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wider uppercase transition-all ${
                  viewMode === 'grid'
                    ? 'bg-white text-zinc-950 shadow-md font-bold'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Grid View</span>
              </button>
            </div>

            {viewMode === 'stream' && (
              <button
                type="button"
                onClick={() => setIsPaused(!isPaused)}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white transition-colors"
                title={isPaused ? 'Resume sliding' : 'Pause sliding'}
                aria-label={isPaused ? 'Resume sliding motion' : 'Pause sliding motion'}
              >
                {isPaused ? <Play className="w-3.5 h-3.5 text-emerald-400" /> : <Pause className="w-3.5 h-3.5" />}
              </button>
            )}
          </div>
        </div>

        {/* Filter Segmented Control Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all duration-200 whitespace-nowrap shrink-0 ${
                activeCategory === cat.id
                  ? 'bg-white text-zinc-950 shadow-md font-bold'
                  : 'bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* VIEW 1: CONTINUOUS SLIDING & FLOATING MOTION (Left to Right) */}
      {viewMode === 'stream' ? (
        <div className="relative w-full overflow-hidden py-8">
          {/* Subtle edge masks */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#0d0c0c] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#0d0c0c] to-transparent z-10 pointer-events-none" />

          {/* Continuous Left-to-Right Animated Track with Vertical Bobbing */}
          <div
            className="animate-food-slide-ltr flex items-center gap-6 sm:gap-8"
            style={{
              animationPlayState: isPaused ? 'paused' : 'running',
              ['--food-slide-speed' as string]: '50s',
            }}
          >
            {slideItems.map((item, idx) => {
              // Alternate vertical floating oscillation speeds
              const floatClass =
                idx % 3 === 0
                  ? 'animate-food-float-1'
                  : idx % 3 === 1
                  ? 'animate-food-float-2'
                  : 'animate-food-float-3';

              return (
                <div
                  key={`${item.id}-slide-${idx}`}
                  className={`group shrink-0 w-80 sm:w-96 rounded-2xl bg-[#161514] border border-white/10 overflow-hidden hover:border-white/30 transition-all duration-300 hover:shadow-2xl ${floatClass}`}
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-900">
                    <img
                      src={item.image}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-xs">
                      <span className="text-[11px] font-medium tracking-wider uppercase text-zinc-300 drop-shadow">
                        {item.categoryLabel}
                      </span>
                      {item.popular && (
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#e8604c] text-white">
                          POPULAR
                        </span>
                      )}
                    </div>

                    {item.nativeName && (
                      <div className="absolute bottom-3 left-3 text-xs font-asian text-zinc-300 drop-shadow">
                        {item.nativeName}
                      </div>
                    )}
                  </div>

                  {/* Card Details */}
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3 mb-1.5">
                      <h3 className="font-display text-base sm:text-lg font-bold text-white group-hover:text-[#f4a261] transition-colors leading-snug truncate">
                        {item.name}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-zinc-400 mb-2.5">
                      <span className="capitalize">{item.dietary}</span>
                      {item.spiceLevel !== undefined && item.spiceLevel > 0 && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span className="flex items-center gap-1 text-[#e8604c]">
                            <Flame className="w-3 h-3 fill-current" />
                            <span>Spicy ({item.spiceLevel}/3)</span>
                          </span>
                        </>
                      )}
                    </div>

                    <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed mb-4">
                      {item.description}
                    </p>

                    <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-mono">Price</span>
                        <span className="text-base font-bold text-white font-mono tabular-nums">
                          ₹{item.price}
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleAdd(item)}
                        className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold rounded-lg transition-all active:scale-95 ${
                          addedItemId === item.id
                            ? 'bg-emerald-600 text-white'
                            : item.customizable
                            ? 'bg-white/10 hover:bg-white/20 text-white border border-white/15'
                            : 'bg-[#e8604c] hover:bg-[#d44e3a] text-white shadow-md'
                        }`}
                      >
                        {addedItemId === item.id ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Added</span>
                          </>
                        ) : item.customizable ? (
                          <>
                            <SlidersHorizontal className="w-3.5 h-3.5" />
                            <span>Customize</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5" />
                            <span>Add to Bag</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        /* VIEW 2: EDITORIAL GRID */
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group flex flex-col justify-between rounded-2xl bg-[#161514] border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div>
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-900">
                    <img
                      src={item.image}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-xs">
                      <span className="text-[11px] font-medium tracking-wider uppercase text-zinc-300 drop-shadow">
                        {item.categoryLabel}
                      </span>
                      {item.popular && (
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#e8604c] text-white">
                          POPULAR
                        </span>
                      )}
                    </div>

                    {item.nativeName && (
                      <div className="absolute bottom-3 left-3 text-xs font-asian text-zinc-300 drop-shadow">
                        {item.nativeName}
                      </div>
                    )}
                  </div>

                  <div className="p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="font-display text-lg font-bold text-white group-hover:text-[#f4a261] transition-colors leading-snug">
                        {item.name}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-zinc-400 mb-3">
                      <span className="capitalize">{item.dietary}</span>
                      {item.spiceLevel !== undefined && item.spiceLevel > 0 && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span className="flex items-center gap-1 text-[#e8604c]">
                            <Flame className="w-3 h-3 fill-current" />
                            <span>Spicy ({item.spiceLevel}/3)</span>
                          </span>
                        </>
                      )}
                      {item.customizable && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span className="text-zinc-400">Customizable</span>
                        </>
                      )}
                    </div>

                    <p className="text-xs text-zinc-400 line-clamp-3 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="p-5 sm:p-6 pt-0 border-t border-white/5 flex items-center justify-between mt-auto">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-mono">Price</span>
                    <span className="text-lg font-bold text-white font-mono tabular-nums">
                      ₹{item.price}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleAdd(item)}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold rounded-lg transition-all active:scale-95 ${
                      addedItemId === item.id
                        ? 'bg-emerald-600 text-white'
                        : item.customizable
                        ? 'bg-white/10 hover:bg-white/20 text-white border border-white/15'
                        : 'bg-[#e8604c] hover:bg-[#d44e3a] text-white shadow-md'
                    }`}
                  >
                    {addedItemId === item.id ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Added</span>
                      </>
                    ) : item.customizable ? (
                      <>
                        <SlidersHorizontal className="w-3.5 h-3.5" />
                        <span>Customize</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add to Bag</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* View Full Menu Banner Link */}
      <div className="mt-12 text-center max-w-7xl mx-auto px-4">
        <button
          type="button"
          onClick={() => {
            setActiveCategory('all');
            setViewMode('grid');
          }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 font-bold text-xs uppercase tracking-wider transition-all group cursor-pointer"
        >
          <span>VIEW FULL ALL-DAY MENU ({MENU_ITEMS.length} SPECIALTIES)</span>
          <ArrowRight className="w-4 h-4 text-[#e8604c] transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </section>
  );
};
