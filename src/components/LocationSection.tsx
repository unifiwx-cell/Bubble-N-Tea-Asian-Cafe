import React, { useState } from 'react';
import { CAFE_INFO, MAPS_PHOTO_GALLERY } from '../data/cafeData';
import { MapPin, Phone, Clock, Navigation, Copy, Check, Calendar, ExternalLink, Star, Camera, X } from 'lucide-react';

interface LocationSectionProps {
  onBookTable: () => void;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ onBookTable }) => {
  const [copied, setCopied] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<typeof MAPS_PHOTO_GALLERY[0] | null>(null);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(CAFE_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="location" className="py-24 sm:py-32 bg-[#121110] border-t border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3 text-xs tracking-widest text-[#e8604c] font-semibold uppercase">
            <MapPin className="w-3.5 h-3.5" />
            <span>Exact Google Maps Location</span>
            <span className="text-zinc-600">·</span>
            <span className="font-asian text-zinc-400">アクセス</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-black tracking-tight text-white uppercase leading-none">
            FIND YOUR <br />
            <span className="text-[#f4a261]">WAY TO US</span>
          </h2>
          <p className="mt-4 text-sm text-zinc-400">
            GC 15, GC Block, Sector 3, Bidhannagar, Kolkata. Check out the live map and real cafe moments captured by diners.
          </p>
        </div>

        {/* Location Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20">
          
          {/* Left Column: Address, Hours, Contact Card */}
          <div className="lg:col-span-5 rounded-3xl bg-[#171615] border border-white/10 p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
            <div className="space-y-6">
              
              {/* Google Maps Trust Badge */}
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#e8604c]/20 text-[#e8604c] flex items-center justify-center font-bold text-xs">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">Google Maps Verified</span>
                    <div className="flex items-center gap-1.5 text-[11px] text-amber-400">
                      <Star className="w-3 h-3 fill-current" />
                      <span className="font-semibold text-white">4.7</span>
                      <span className="text-zinc-400">(1,971 reviews)</span>
                    </div>
                  </div>
                </div>

                <a
                  href={CAFE_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded bg-[#e8604c] hover:bg-[#d44e3a] text-white text-[11px] font-bold tracking-wider uppercase transition-colors"
                >
                  View
                </a>
              </div>

              {/* Address Block */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#e8604c]/10 text-[#e8604c] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-zinc-500 font-mono block mb-1">
                    Address & Coordinates
                  </span>
                  <p className="text-base font-semibold text-white leading-snug">
                    {CAFE_INFO.address}
                  </p>
                  <p className="text-xs text-zinc-400 mt-1">
                    {CAFE_INFO.landmark} (22.5801° N, 88.4118° E)
                  </p>
                </div>
              </div>

              {/* Phone Block */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#f4a261]/10 text-[#f4a261] flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-zinc-500 font-mono block mb-1">
                    Phone & WhatsApp
                  </span>
                  <a
                    href={`tel:${CAFE_INFO.phone}`}
                    className="text-base font-semibold text-white hover:text-[#e8604c] transition-colors font-mono"
                  >
                    {CAFE_INFO.phone}
                  </a>
                  <p className="text-xs text-zinc-400 mt-1">
                    Direct line for reservations, takeaways & inquiries
                  </p>
                </div>
              </div>

              {/* Hours Block */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#8a6fa0]/10 text-[#8a6fa0] flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-zinc-500 font-mono block mb-1">
                    Opening Hours
                  </span>
                  <p className="text-base font-semibold text-white">
                    {CAFE_INFO.hours}
                  </p>
                  <p className="text-xs text-emerald-400 mt-1 flex items-center gap-1.5 font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Open Everyday for Dine-in & Delivery</span>
                  </p>
                </div>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="pt-8 mt-8 border-t border-white/10 space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={CAFE_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white text-zinc-950 font-bold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-all shadow-md text-center"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#e8604c]" />
                  <span>Get Directions</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyAddress}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-xs uppercase tracking-wider transition-all"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-zinc-400" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`tel:${CAFE_INFO.phone}`}
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-200 font-semibold text-xs tracking-wider transition-all"
                >
                  <Phone className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Call Us</span>
                </a>

                <button
                  type="button"
                  onClick={onBookTable}
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#e8604c] hover:bg-[#d44e3a] text-white font-bold text-xs uppercase tracking-wider transition-all shadow"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Table</span>
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Embedded Interactive Google Map */}
          <div className="lg:col-span-7 rounded-3xl bg-[#161514] border border-white/10 overflow-hidden shadow-2xl flex flex-col">
            
            {/* Live Interactive Map Iframe */}
            <div className="relative h-80 sm:h-96 w-full bg-[#1c1b1a] overflow-hidden">
              <iframe
                title="Bubble N Tea Asian Cafe Google Maps Location"
                src={CAFE_INFO.embedMapUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(85%) contrast(120%)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />

              {/* Floating Map Anchor Pin overlay for fast link */}
              <div className="absolute top-4 left-4 z-10 bg-black/85 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/15 shadow-xl flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-[#e8604c] text-white flex items-center justify-center font-bold text-xs">
                  BNT
                </div>
                <div>
                  <p className="font-display font-bold text-xs text-white">Bubble N Tea Asian Cafe</p>
                  <p className="text-[10px] text-zinc-400">GC 15, Sector 3, Salt Lake</p>
                </div>
              </div>

              {/* Interactive Open in Maps Button */}
              <a
                href={CAFE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 z-10 inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-black/90 hover:bg-black text-xs font-semibold text-white border border-white/20 transition-all shadow-xl"
              >
                <span>Open in Google Maps App</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#f4a261]" />
              </a>
            </div>

            {/* Neighborhood & Transit Tips */}
            <div className="p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-zinc-400">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="font-bold text-white block mb-1">By Kolkata Metro</span>
                <span>Take Green Line to Karunamoyee or Central Park station, followed by a 4-minute auto/cab ride to GC Block.</span>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="font-bold text-white block mb-1">Parking & Accessibility</span>
                <span>Convenient roadside customer parking available outside GC Block. Kerbside pick-up directly to your car.</span>
              </div>
            </div>

          </div>

        </div>

        {/* CATCHING GOOGLE MAPS PHOTO REEL: Real Diner & Cafe Moments */}
        <div className="pt-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-4 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#f4a261] mb-1">
                <Camera className="w-4 h-4 text-[#e8604c]" />
                <span>FROM GOOGLE MAPS & DINER LENS</span>
              </div>
              <h3 className="font-display text-2xl sm:text-4xl font-bold text-white">
                Photos from the Café & Community
              </h3>
            </div>
            <a
              href={CAFE_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
            >
              <span>See all 1,900+ photos on Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#e8604c]" />
            </a>
          </div>

          {/* 6 Photo Grid with Catching Hover Effects */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {MAPS_PHOTO_GALLERY.map((photo) => (
              <div
                key={photo.id}
                onClick={() => setSelectedPhoto(photo)}
                className="group relative rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 aspect-[4/3] cursor-pointer shadow-lg hover:shadow-2xl hover:border-white/30 transition-all duration-300 hover:-translate-y-1"
              >
                <img
                  src={photo.image}
                  alt={photo.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-0.5 rounded bg-black/60 backdrop-blur-md text-[10px] font-mono uppercase tracking-wider text-zinc-300 border border-white/15">
                    {photo.tag}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="font-display text-base font-bold text-white group-hover:text-[#f4a261] transition-colors leading-snug">
                    {photo.title}
                  </h4>
                  <p className="text-xs text-zinc-300 mt-1 line-clamp-2 font-light">
                    {photo.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Lightbox Modal for Photo Inspection */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative max-w-3xl w-full rounded-2xl overflow-hidden bg-[#161514] border border-white/15 shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/70 hover:bg-black text-zinc-300 hover:text-white transition-colors"
              aria-label="Close photo preview"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="aspect-[16/10] w-full bg-black">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#e8604c] block mb-1">
                  {selectedPhoto.tag} · Google Maps Verified Shot
                </span>
                <h3 className="font-display text-xl font-bold text-white">
                  {selectedPhoto.title}
                </h3>
                <p className="text-xs text-zinc-400 mt-1">
                  {selectedPhoto.caption}
                </p>
              </div>
              <a
                href={CAFE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 px-4 py-2 rounded-xl bg-[#e8604c] hover:bg-[#d44e3a] text-white text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-1.5"
              >
                <span>View on Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
