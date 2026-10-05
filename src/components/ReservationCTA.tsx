import React from 'react';
import { CAFE_INFO } from '../data/cafeData';
import { Calendar, ShoppingBag, Sparkles, ArrowRight } from 'lucide-react';

interface ReservationCTAProps {
  onOpenReservation: () => void;
  onOpenOrder: () => void;
}

export const ReservationCTA: React.FC<ReservationCTAProps> = ({
  onOpenReservation,
  onOpenOrder
}) => {
  return (
    <section className="relative py-28 sm:py-36 bg-[#0a0a09] overflow-hidden text-white">
      {/* Background rich food/interior layer with measured scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={CAFE_INFO.images.cafeVibe}
          alt="Bubble N Tea Cafe Kolkata ambience"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-25 filter brightness-75 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a09] via-[#0a0a09]/80 to-[#0a0a09]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Multilingual Eyebrow */}
        <div className="inline-flex items-center gap-3 mb-6 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-zinc-300">
          <span className="font-asian text-[#e8604c]">席の予約</span>
          <span>·</span>
          <span>TABLE RESERVATION & ONLINE ORDERING</span>
        </div>

        {/* Big Editorial Headline */}
        <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase leading-none mb-6">
          YOUR TABLE <br />
          <span className="text-[#e8604c]">IS WAITING.</span>
        </h2>

        {/* Supporting Narrative */}
        <p className="text-lg sm:text-2xl text-zinc-300 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
          Bring your people. Pick your drinks. Stay awhile.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <button
            type="button"
            onClick={onOpenReservation}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-[#e8604c] hover:bg-[#d44e3a] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-xl hover:shadow-[#e8604c]/25 transition-all duration-200 active:scale-95 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>RESERVE A TABLE</span>
          </button>

          <button
            type="button"
            onClick={onOpenOrder}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs sm:text-sm uppercase tracking-wider backdrop-blur-md transition-all duration-200 active:scale-95 cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4 text-[#f4a261]" />
            <span>ORDER ONLINE</span>
          </button>
        </div>

        {/* Quiet Reassurance */}
        <div className="mt-8 text-xs text-zinc-400 font-mono">
          <span>Instant reservation confirmation · Walk-ins welcome · Group bookings available</span>
        </div>

      </div>
    </section>
  );
};
