import React from 'react';
import { CAFE_INFO } from '../data/cafeData';
import { Sparkles, UtensilsCrossed, Music2, HeartHandshake } from 'lucide-react';

export const BrandIntro: React.FC = () => {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#121110] border-t border-b border-white/5 overflow-hidden">
      {/* Decorative vertical Asian typography watermark strip */}
      <div className="absolute -right-6 top-1/2 -translate-y-1/2 select-none pointer-events-none opacity-5 hidden lg:block">
        <span className="font-asian text-9xl font-black writing-vertical text-white">
          珍珠奶茶传
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Eyebrow & Multilingual Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-12 pb-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <img
              src={CAFE_INFO.logo}
              alt="Bubble N Tea Emblem"
              className="w-8 h-8 rounded-full object-cover border border-white/20 shrink-0"
            />
            <span className="hanko-stamp text-xs">EST. 2023</span>
            <span className="text-xs uppercase tracking-widest text-zinc-400">
              The Bubble N Tea Manifesto
            </span>
          </div>
          <div className="flex items-center gap-3 text-xs text-zinc-400">
            <span className="font-asian text-zinc-300">東京 × 首爾 × 加爾各答</span>
            <span className="text-zinc-600">|</span>
            <span className="font-bengali text-zinc-300">একটি অনন্য এশীয় ক্যাফে অভিজ্ঞতা</span>
          </div>
        </div>

        {/* Main Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Oversized Scale Typography Play */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative">
              <span className="block font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-zinc-500 uppercase">
                THE MODERN
              </span>
              <span className="block font-display text-7xl sm:text-9xl font-black tracking-tighter text-[#fbfaf8] leading-none">
                ASIAN
              </span>
              <div className="flex items-baseline gap-4 mt-1">
                <span className="font-display text-5xl sm:text-7xl font-bold tracking-tight text-[#e8604c] italic">
                  CAFÉ
                </span>
                <span className="font-asian text-2xl text-zinc-500 font-bold">
                  喫茶店
                </span>
              </div>
            </div>

            <div className="pt-6">
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4">
                MORE THAN JUST BUBBLE TEA.
              </h3>
              <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-light">
                A cozy Asian café in the heart of Kolkata where refreshing bubble teas, comforting Asian dishes and pop-culture energy come together.
              </p>
              <p className="mt-4 text-sm text-zinc-400 leading-relaxed">
                Step inside our Salt Lake enclave and you leave the city rush behind. The aroma of freshly cooked brown sugar pearls mingles with the sizzle of spicy Sichuan wontons. Catch K-pop chart toppers and chill Tokyo lo-fi while admiring collectible figurines, sharing a hot bowl of ramen or unwinding over Vietnamese iced coffee.
              </p>
            </div>
          </div>

          {/* Right Column: 3 Curated Pillars */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            <div className="p-6 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all">
              <div className="w-10 h-10 rounded-lg bg-[#e8604c]/10 text-[#e8604c] flex items-center justify-center mb-4">
                <UtensilsCrossed className="w-5 h-5" />
              </div>
              <h4 className="font-display text-base font-bold text-white mb-2">
                Authentic Flavors
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                From slow-braised Tonkotsu broths to crisp Korean fried wings and Taiwanese hand-shaken milk teas. No shortcuts, real ingredients.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all">
              <div className="w-10 h-10 rounded-lg bg-[#f4a261]/10 text-[#f4a261] flex items-center justify-center mb-4">
                <Music2 className="w-5 h-5" />
              </div>
              <h4 className="font-display text-base font-bold text-white mb-2">
                Pop-Culture Spirit
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Curated K-pop and J-pop soundtracks, collector vinyl sleeves, and designer anime figurines create a vibrant, photogenic community vibe.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all">
              <div className="w-10 h-10 rounded-lg bg-[#8a6fa0]/10 text-[#8a6fa0] flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="font-display text-base font-bold text-white mb-2">
                Artisanal Desserts
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Melt-in-your-mouth Japanese soufflé cheesecakes, jiggly soufflé pancakes, and rich dark chocolate brownies baked fresh in small batches.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all">
              <div className="w-10 h-10 rounded-lg bg-[#5c7849]/10 text-[#5c7849] flex items-center justify-center mb-4">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h4 className="font-display text-base font-bold text-white mb-2">
                Warm Hospitality
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Attentive, friendly service where you can hang out for hours with friends, catch up over drinks, study, or celebrate milestone moments.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
