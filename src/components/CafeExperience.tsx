import React from 'react';
import { CAFE_INFO } from '../data/cafeData';
import { Sparkles, Music, Gamepad2, Users, Heart, Camera } from 'lucide-react';

export const CafeExperience: React.FC = () => {
  const highlights = [
    { label: 'K-POP & J-POP', icon: Music, desc: 'Carefully curated playlists with the latest comebacks & nostalgic classics' },
    { label: 'COZY CORNERS', icon: Heart, desc: 'Warm ambient lighting, comfortable booths, and tatami-inspired nooks' },
    { label: 'ACTION FIGURES', icon: Gamepad2, desc: 'Showcases featuring Gundam, Demon Slayer, Jujutsu Kaisen, and art toys' },
    { label: 'FRIENDLY SERVICE', icon: Users, desc: 'Staff that treats every regular like family and remembers your boba sweetness' },
  ];

  return (
    <section id="experience" className="py-24 sm:py-32 bg-[#121110] border-t border-b border-white/5 relative overflow-hidden">
      
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#e8604c]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3 text-xs tracking-widest text-[#e8604c] font-semibold uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Atmosphere & Culture</span>
            <span className="text-zinc-600">·</span>
            <span className="font-asian text-zinc-400">カフェ空間</span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase leading-none">
            COME FOR THE FOOD. <br />
            <span className="text-[#f4a261]">STAY FOR THE VIBE.</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-zinc-400 leading-relaxed">
            More than just dining. Bubble N Tea is your creative living room in Kolkata, packed with pop-culture energy, warm tea, and good friends.
          </p>
        </div>

        {/* Feature Tags Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-[#e8604c]/10 text-[#e8604c] flex items-center justify-center mb-3">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-display text-xs sm:text-sm font-bold tracking-wider uppercase text-white mb-1">
                    {item.label}
                  </h3>
                  <p className="text-[11px] text-zinc-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Lifestyle Gallery with Candid Annotations */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Main Large Interior View */}
          <div className="md:col-span-8 relative rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 shadow-xl group">
            <img
              src={CAFE_INFO.images.cafeVibe}
              alt="Cozy interior and aesthetic decorations at Bubble N Tea Cafe Kolkata"
              referrerPolicy="no-referrer"
              className="w-full h-full min-h-[380px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            {/* Handwritten-style Annotation Sticker */}
            <div className="absolute top-4 left-4 bg-zinc-950/90 backdrop-blur-md border border-white/15 px-3 py-1.5 rounded-lg shadow-lg">
              <span className="text-[11px] font-mono text-[#f4a261] flex items-center gap-1.5">
                <Camera className="w-3.5 h-3.5" />
                <span>Sector 3 Evening Hangout spot #01</span>
              </span>
            </div>

            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-[#e8604c] font-bold font-mono">
                  CAFE INTERIOR
                </p>
                <h4 className="font-display text-2xl font-bold text-white">
                  Collectible Shelves & Ambient Glow
                </h4>
                <p className="text-xs text-zinc-300 max-w-md mt-1">
                  Surround yourself with original anime figures, limited edition figurines, and warm paper lantern lights.
                </p>
              </div>
              <span className="px-3 py-1 rounded-md bg-white/10 backdrop-blur-md text-xs text-white border border-white/20 whitespace-nowrap self-start sm:self-auto">
                Open till 11:00 PM
              </span>
            </div>
          </div>

          {/* Secondary Candid Cards Column */}
          <div className="md:col-span-4 flex flex-col gap-6">
            
            <div className="relative rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 shadow-xl p-5 flex flex-col justify-between h-1/2 min-h-[180px] group">
              <img
                src={CAFE_INFO.images.cheeseCornDog}
                alt="Viral Korean mozzarella cheese corn dog"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
              
              <div className="relative z-10">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#f4a261] bg-black/50 px-2 py-0.5 rounded border border-white/10">
                  VIRAL STREET BITE
                </span>
                <h4 className="font-display text-lg font-bold text-white mt-2">
                  Mozzarella Cheese Pull
                </h4>
              </div>
              <p className="relative z-10 text-xs text-zinc-300 font-light">
                Crispy golden crust, stretchy mozzarella & spicy honey mustard.
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 shadow-xl p-5 flex flex-col justify-between h-1/2 min-h-[180px] group">
              <img
                src={CAFE_INFO.images.kpopWall}
                alt="K-pop fan wall and polaroids"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
              
              <div className="relative z-10">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#e8604c] bg-black/50 px-2 py-0.5 rounded border border-white/10">
                  FAN COMMUNITY
                </span>
                <h4 className="font-display text-lg font-bold text-white mt-2">
                  K-Pop Walls & Photocards
                </h4>
              </div>
              <p className="relative z-10 text-xs text-zinc-300 font-light">
                Polaroids, anime figures & cupsleeve comeback memories.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
