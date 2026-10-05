import React, { useState } from 'react';
import { CAFE_INFO } from '../data/cafeData';
import { Flame, Sparkles, ChefHat, CheckCircle2, ArrowRight } from 'lucide-react';

interface AsianFoodExperienceProps {
  onExploreCategory: (category: string) => void;
}

export const AsianFoodExperience: React.FC<AsianFoodExperienceProps> = ({ onExploreCategory }) => {
  const [activeStoryTab, setActiveStoryTab] = useState<'ramen' | 'wontons' | 'korean' | 'desserts'>('ramen');

  const storyDetails = {
    ramen: {
      title: '12-Hour Slow Braised Broths',
      native: 'ラーメン職人',
      description: 'Our Tonkotsu and rich fermented Miso broths simmer through the night, coaxing deep collagen richness and roasted aromatics. Paired with firm springy noodles, molten soy-marinated eggs and torched chashu.',
      image: CAFE_INFO.images.chiliWontons,
      highlight: 'Tokyo Street Comfort in Salt Lake',
      categoryKey: 'ramen'
    },
    wontons: {
      title: 'Hand-Pleated Chengdu Chili Wontons',
      native: '红油抄手',
      description: 'Delicate silky wonton wrappers pleated fresh every morning. Tossed in a blazing house blend of roasted red Sichuan chilies, sweet dark soy sauce, crispy minced garlic and crushed toasted sesame seeds.',
      image: CAFE_INFO.images.chiliWontons,
      highlight: 'Addictive Sichuan Numbing Heat',
      categoryKey: 'wontons'
    },
    korean: {
      title: 'Double-Crisp Korean Gochujang Wings',
      native: '양념 치킨',
      description: 'Double-fried for an unmistakable golden shatter-crunch, tossed in sticky fermented chili honey glaze with roasted peanuts and fresh scallion confetti.',
      image: CAFE_INFO.images.koreanWings,
      highlight: 'Seoul Night Market Perfection',
      categoryKey: 'korean-bites'
    },
    desserts: {
      title: 'Cloud-Light Japanese Soufflé Cheesecake',
      native: 'スフレチーズケーキ',
      description: 'Cotton-soft, jiggly and delicately sweet. Baked in a water bath with premium cream cheese and egg whites whipped to perfection, melting gently on the palate.',
      image: CAFE_INFO.images.hero,
      highlight: 'Airy Osaka Bakery Craftsmanship',
      categoryKey: 'desserts'
    }
  };

  const current = storyDetails[activeStoryTab];

  return (
    <section className="py-24 sm:py-32 bg-[#0d0c0c] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Screen Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Large Food Photography with Interactive Preview */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-zinc-900 border border-white/10 shadow-2xl group">
              <img
                src={current.image}
                alt={current.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute top-4 left-4">
                <span className="hanko-stamp text-xs bg-black/60 backdrop-blur-md">
                  ARTISANAL KITCHEN
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <span className="font-asian text-xs text-zinc-300 block mb-1">
                  {current.native}
                </span>
                <h4 className="font-display text-xl sm:text-2xl font-bold text-white mb-1">
                  {current.highlight}
                </h4>
                <p className="text-xs text-zinc-300">
                  Prepared fresh in our Kolkata kitchen daily
                </p>
              </div>
            </div>

            {/* Quick interactive tabs for the split screen */}
            <div className="grid grid-cols-4 gap-2 mt-4">
              {(['ramen', 'wontons', 'korean', 'desserts'] as const).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveStoryTab(tab)}
                  className={`py-2 px-1 text-[11px] font-bold uppercase tracking-wider rounded-lg transition-all text-center border ${
                    activeStoryTab === tab
                      ? 'bg-white text-zinc-950 border-white shadow-sm'
                      : 'bg-white/5 text-zinc-400 hover:text-white border-white/5'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Right Side: Editorial Narrative */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-3 text-xs tracking-widest text-[#e8604c] font-semibold uppercase">
                <ChefHat className="w-4 h-4" />
                <span>Culinary Ethos</span>
                <span className="text-zinc-600">·</span>
                <span className="font-asian text-zinc-400">味覚の旅</span>
              </div>

              <h2 className="font-display text-4xl sm:text-6xl font-black tracking-tight text-white uppercase leading-tight mb-4">
                A LITTLE TASTE <br />
                <span className="text-[#f4a261]">OF ASIA.</span>
              </h2>

              <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-light mb-6">
                Bubble N Tea brings together comforting Asian-inspired street food favorites and artisanal teas in a relaxed, aesthetic Kolkata setting.
              </p>
            </div>

            {/* Category Focus Cards */}
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-xl font-bold text-white">
                  {current.title}
                </h3>
                <span className="text-xs font-mono text-[#e8604c] uppercase tracking-wider">
                  Specialty
                </span>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {current.description}
              </p>
              
              <div className="pt-2 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => onExploreCategory(current.categoryKey)}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#f4a261] hover:text-white transition-colors group cursor-pointer"
                >
                  <span>Explore on Menu</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>

                <div className="flex items-center gap-1.5 text-xs text-zinc-500">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Dine-in & Delivery</span>
                </div>
              </div>
            </div>

            {/* Micro Details List */}
            <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-4 text-xs text-zinc-400">
              <div>
                <span className="text-white font-semibold block mb-0.5">Authentic Sourcing</span>
                <span>Imported teas from Taiwan & Japan</span>
              </div>
              <div>
                <span className="text-white font-semibold block mb-0.5">Made to Order</span>
                <span>Zero batch-premade cold beverages</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
