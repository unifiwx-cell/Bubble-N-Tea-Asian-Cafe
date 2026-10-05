import React, { useState } from 'react';
import { X, Calendar, Clock, Users, Sparkles, CheckCircle2, MapPin, Phone, Heart } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'form' | 'confirmed'>('form');
  const [partySize, setPartySize] = useState(2);
  const [date, setDate] = useState('Today');
  const [timeSlot, setTimeSlot] = useState('06:30 PM');
  const [seating, setSeating] = useState('kpop-corner');
  const [occasion, setOccasion] = useState('Casual Hangout');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [requests, setRequests] = useState('');
  const [bookingId, setBookingId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    const randomId = `BNT-KOL-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingId(randomId);
    setStep('confirmed');
  };

  const handleReset = () => {
    setStep('form');
    setName('');
    setPhone('');
    setRequests('');
    onClose();
  };

  const timeOptions = [
    '12:30 PM', '01:30 PM', '03:00 PM', '04:30 PM',
    '06:00 PM', '07:30 PM', '08:45 PM', '09:45 PM'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg rounded-3xl bg-[#141312] border border-white/15 shadow-2xl p-6 sm:p-8 text-white max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={handleReset}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
          aria-label="Close reservation modal"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'form' ? (
          <div>
            {/* Header */}
            <div className="flex items-center gap-3.5 mb-6">
              <img
                src={CAFE_INFO.logo}
                alt="Bubble N Tea Cafe Logo"
                className="w-12 h-12 rounded-full object-cover border border-white/20 shadow-md shrink-0"
              />
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#e8604c] mb-0.5">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>TABLE RESERVATION</span>
                  <span className="text-zinc-600">·</span>
                  <span className="font-asian text-zinc-400">ご予約</span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                  Reserve at Bubble N Tea
                </h3>
                <p className="text-xs text-zinc-400">
                  GC 15, Sector 3, Salt Lake · Free cancellation
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Party Size */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                  Number of Guests
                </label>
                <div className="grid grid-cols-5 gap-2">
                  {[1, 2, 4, 6, 8].map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setPartySize(size)}
                      className={`py-2 text-xs font-bold rounded-lg border transition-all ${
                        partySize === size
                          ? 'bg-[#e8604c] text-white border-[#e8604c]'
                          : 'bg-white/5 text-zinc-300 border-white/10 hover:bg-white/10'
                      }`}
                    >
                      {size === 8 ? '8+ ppl' : `${size} ppl`}
                    </button>
                  ))}
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                    Date
                  </label>
                  <select
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900 border border-white/15 text-xs text-white focus:outline-none focus:border-[#e8604c]"
                  >
                    <option value="Today">Today (Evening)</option>
                    <option value="Tomorrow">Tomorrow</option>
                    <option value="This Friday">This Friday Night</option>
                    <option value="This Saturday">This Saturday (Weekend Vibe)</option>
                    <option value="This Sunday">This Sunday</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                    Time Slot
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900 border border-white/15 text-xs text-white focus:outline-none focus:border-[#e8604c]"
                  >
                    {timeOptions.map((time) => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Seating Vibe Preference */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                  Seating Vibe Preference
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setSeating('kpop-corner')}
                    className={`p-2.5 rounded-lg border text-left text-xs transition-all ${
                      seating === 'kpop-corner'
                        ? 'bg-[#e8604c]/20 border-[#e8604c] text-white'
                        : 'bg-white/5 border-white/10 text-zinc-400 hover:text-white'
                    }`}
                  >
                    <span className="font-bold block text-white">K-Pop Corner</span>
                    <span className="text-[10px] text-zinc-400">Near figure shelf & soundtrack</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSeating('boba-lounge')}
                    className={`p-2.5 rounded-lg border text-left text-xs transition-all ${
                      seating === 'boba-lounge'
                        ? 'bg-[#e8604c]/20 border-[#e8604c] text-white'
                        : 'bg-white/5 border-white/10 text-zinc-400 hover:text-white'
                    }`}
                  >
                    <span className="font-bold block text-white">Cozy Boba Booth</span>
                    <span className="text-[10px] text-zinc-400">Private plush seating</span>
                  </button>
                </div>
              </div>

              {/* Guest Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Ananya Sen"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900 border border-white/15 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#e8604c]"
                  >
                  </input>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 098301 23456"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900 border border-white/15 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#e8604c]"
                  >
                  </input>
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1">
                  Special Notes / Occasion (Optional)
                </label>
                <input
                  type="text"
                  value={requests}
                  onChange={(e) => setRequests(e.target.value)}
                  placeholder="e.g. Celebrating a birthday, dietary preferences, or k-pop cupsleeve"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900 border border-white/15 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#e8604c]"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#e8604c] hover:bg-[#d44e3a] text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-lg active:scale-95 cursor-pointer"
              >
                CONFIRM TABLE RESERVATION
              </button>

            </form>
          </div>
        ) : (
          /* Confirmation Success State */
          <div className="py-6 text-center space-y-6 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/30">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div>
              <span className="hanko-stamp text-xs mb-2">RESERVATION CONFIRMED</span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mt-2">
                We'll Have Your Table Ready!
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                A confirmation SMS has been prepared for <span className="text-white font-semibold">{phone}</span>.
              </p>
            </div>

            {/* Receipt Card */}
            <div className="p-5 rounded-2xl bg-zinc-900/90 border border-white/10 text-left space-y-3 font-mono text-xs">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-zinc-400">Booking ID:</span>
                <span className="text-[#f4a261] font-bold">{bookingId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Guest Name:</span>
                <span className="text-white font-semibold">{name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Date & Time:</span>
                <span className="text-white font-semibold">{date} at {timeSlot}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Party Size:</span>
                <span className="text-white font-semibold">{partySize} Guests</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Seating Area:</span>
                <span className="text-white capitalize">{seating.replace('-', ' ')}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-white/10 text-[11px] text-zinc-400">
                <span>Location:</span>
                <span>GC 15, Sector 3, Salt Lake</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={handleReset}
                className="w-full py-3 rounded-xl bg-white text-zinc-950 font-bold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-all cursor-pointer"
              >
                DONE & RETURN
              </button>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};
