import React, { useState } from 'react';
import { REVIEWS, CAFE_INFO } from '../data/cafeData';
import { Star, MessageSquareQuote, CheckCircle, ThumbsUp } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>('all');

  const ratingMetrics = [
    { label: '5 Stars', percent: 84 },
    { label: '4 Stars', percent: 12 },
    { label: '3 Stars', percent: 3 },
    { label: '2 Stars', percent: 1 },
    { label: '1 Star', percent: 0 },
  ];

  return (
    <section id="reviews" className="py-24 sm:py-32 bg-[#0d0c0c] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Big Scoreboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-16 pb-12 border-b border-white/10">
          
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2 mb-3 text-xs tracking-widest text-[#e8604c] font-semibold uppercase">
              <Star className="w-4 h-4 fill-[#e8604c]" />
              <span>Patron Testimonials</span>
              <span className="text-zinc-600">·</span>
              <span className="font-asian text-zinc-400">お客様の声</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-black tracking-tight text-white uppercase leading-none">
              PEOPLE LOVE <br />
              <span className="text-[#f4a261]">IT HERE.</span>
            </h2>
            <p className="mt-4 text-sm text-zinc-400 max-w-md leading-relaxed">
              Based on verified diner reviews on Google across Kolkata and visiting foodies from across India.
            </p>
          </div>

          {/* Rating Proof Block */}
          <div className="lg:col-span-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 bg-white/[0.02] p-6 sm:p-8 rounded-3xl border border-white/10">
            <div>
              <div className="flex items-baseline gap-3">
                <span className="font-display text-5xl sm:text-6xl font-black text-white tracking-tight">
                  {CAFE_INFO.rating}
                </span>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-xs text-zinc-400 mt-2 font-mono uppercase tracking-wider">
                {CAFE_INFO.reviewCount} VERIFIED REVIEWS
              </p>
              <div className="flex items-center gap-1.5 text-xs text-emerald-400 mt-2">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Top Rated Asian Cafe in Salt Lake</span>
              </div>
            </div>

            {/* Micro Breakdown Bars */}
            <div className="w-full sm:w-48 space-y-1.5">
              {ratingMetrics.map((r) => (
                <div key={r.label} className="flex items-center gap-2 text-[11px] text-zinc-400 font-mono">
                  <span className="w-12 text-right">{r.label}</span>
                  <div className="flex-1 h-1.5 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-amber-400"
                      style={{ width: `${r.percent}%` }}
                    />
                  </div>
                  <span className="w-7 text-right tabular-nums text-zinc-300">{r.percent}%</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="p-6 sm:p-8 rounded-2xl bg-[#141312] border border-white/10 flex flex-col justify-between hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div>
                {/* Header with Stars & Date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs text-zinc-500 font-mono">
                    {rev.date}
                  </span>
                </div>

                {/* Highlight Quote */}
                <h3 className="font-display text-base font-bold text-[#fbfaf8] mb-3">
                  "{rev.highlight}"
                </h3>

                {/* Main Paraphrased Comment */}
                <p className="text-sm text-zinc-300 leading-relaxed font-light mb-6">
                  {rev.comment}
                </p>
              </div>

              {/* Attribution Line */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-zinc-400">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#e8604c]/20 text-[#e8604c] flex items-center justify-center font-bold text-xs">
                    {rev.name[0]}
                  </div>
                  <span className="font-semibold text-white">{rev.name}</span>
                </div>

                <div className="flex items-center gap-1.5 text-zinc-500 font-mono text-[11px]">
                  <ThumbsUp className="w-3 h-3 text-[#f4a261]" />
                  <span>{rev.tag}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Short Customer Sentiment Themes */}
        <div className="mt-12 p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-wrap items-center justify-around gap-6 text-xs text-zinc-400 text-center">
          <div>
            <span className="block font-bold text-white text-sm mb-0.5">Delicious Food & Boba</span>
            <span>Unanimously praised boba chewiness</span>
          </div>
          <div className="hidden sm:block w-[1px] h-8 bg-white/10" />
          <div>
            <span className="block font-bold text-white text-sm mb-0.5">Aesthetic Atmosphere</span>
            <span>K-pop & J-pop energy loved by youth</span>
          </div>
          <div className="hidden sm:block w-[1px] h-8 bg-white/10" />
          <div>
            <span className="block font-bold text-white text-sm mb-0.5">Quick & Friendly Staff</span>
            <span>Prompt table service & hospitality</span>
          </div>
        </div>

      </div>
    </section>
  );
};
