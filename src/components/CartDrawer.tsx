import React, { useState } from 'react';
import { CartItem } from '../types';
import { CAFE_INFO } from '../data/cafeData';
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight, CheckCircle2, Bike, Store, MapPin } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) => {
  const [orderType, setOrderType] = useState<'delivery' | 'pickup' | 'dinein'>('dinein');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [address, setAddress] = useState('');
  const [tableNumber, setTableNumber] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const packagingFee = items.length > 0 && orderType !== 'dinein' ? 30 : 0;
  const deliveryFee = orderType === 'delivery' ? (subtotal > 800 ? 0 : 50) : 0;
  const grandTotal = subtotal + packagingFee + deliveryFee;

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0 || !customerName || !customerPhone) return;
    const generatedOrderNum = `BNT-${Math.floor(1000 + Math.random() * 9000)}`;
    setOrderNumber(generatedOrderNum);
    setIsSubmitted(true);
  };

  const handleFinish = () => {
    setIsSubmitted(false);
    onClearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#131211] border-l border-white/10 shadow-2xl flex flex-col text-white">
          
          {/* Header */}
          <div className="p-6 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={CAFE_INFO.logo}
                alt="Bubble N Tea Cafe Logo"
                className="w-8 h-8 rounded-full object-cover border border-white/20 shrink-0"
              />
              <div className="flex items-center gap-2">
                <h2 className="font-display text-lg font-bold">Your Order Bag</h2>
                <span className="text-xs font-mono text-zinc-400">({items.length} items)</span>
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
              aria-label="Close cart drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {!isSubmitted ? (
            <>
              {/* Items List or Empty State */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {items.length === 0 ? (
                  <div className="py-16 text-center text-zinc-400 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 mx-auto flex items-center justify-center text-zinc-500">
                      <ShoppingBag className="w-8 h-8" />
                    </div>
                    <div>
                      <p className="font-display font-bold text-white text-base">Your bag is empty</p>
                      <p className="text-xs text-zinc-400 mt-1">
                        Explore our menu of bubble teas, ramen, and Asian treats to get started.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={onClose}
                      className="inline-flex px-4 py-2 text-xs font-bold uppercase tracking-wider bg-[#e8604c] text-white rounded-lg"
                    >
                      Browse Menu
                    </button>
                  </div>
                ) : (
                  items.map((item) => (
                    <div
                      key={item.id}
                      className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex gap-3 items-start justify-between"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        referrerPolicy="no-referrer"
                        className="w-14 h-14 rounded-lg object-cover border border-white/10 shrink-0"
                      />
                      <div className="flex-1 min-w-0 pr-2">
                        <h4 className="font-display text-xs font-bold text-white truncate">
                          {item.name}
                        </h4>
                        
                        {/* Customization labels */}
                        <div className="text-[10px] text-zinc-400 mt-0.5 space-y-0.5">
                          {item.sweetness && <div>Sweetness: {item.sweetness}</div>}
                          {item.iceLevel && <div>Ice: {item.iceLevel}</div>}
                          {item.spiceLevel && <div>Spice: {item.spiceLevel}</div>}
                          {item.toppings && item.toppings.length > 0 && (
                            <div className="text-zinc-300">
                              + {item.toppings.join(', ')}
                            </div>
                          )}
                        </div>

                        <div className="text-xs font-mono font-bold text-white mt-1.5">
                          ₹{item.price * item.quantity}
                        </div>
                      </div>

                      {/* Stepper & Trash */}
                      <div className="flex flex-col items-end justify-between h-full space-y-2">
                        <button
                          type="button"
                          onClick={() => onRemoveItem(item.id)}
                          className="text-zinc-500 hover:text-red-400 transition-colors p-1"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>

                        <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded px-1 py-0.5">
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="text-zinc-400 hover:text-white"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-[11px] font-mono font-bold w-4 text-center">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="text-zinc-400 hover:text-white"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}

                {/* Order Options */}
                {items.length > 0 && (
                  <div className="pt-4 border-t border-white/10 space-y-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                        Dining Preference
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        <button
                          type="button"
                          onClick={() => setOrderType('dinein')}
                          className={`py-2 text-[11px] font-bold rounded-lg border flex flex-col items-center gap-1 ${
                            orderType === 'dinein'
                              ? 'bg-[#e8604c] text-white border-[#e8604c]'
                              : 'bg-white/5 text-zinc-400 border-white/10 hover:bg-white/10'
                          }`}
                        >
                          <Store className="w-3.5 h-3.5" />
                          <span>Dine-In</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setOrderType('pickup')}
                          className={`py-2 text-[11px] font-bold rounded-lg border flex flex-col items-center gap-1 ${
                            orderType === 'pickup'
                              ? 'bg-[#e8604c] text-white border-[#e8604c]'
                              : 'bg-white/5 text-zinc-400 border-white/10 hover:bg-white/10'
                          }`}
                        >
                          <Store className="w-3.5 h-3.5" />
                          <span>Kerbside</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setOrderType('delivery')}
                          className={`py-2 text-[11px] font-bold rounded-lg border flex flex-col items-center gap-1 ${
                            orderType === 'delivery'
                              ? 'bg-[#e8604c] text-white border-[#e8604c]'
                              : 'bg-white/5 text-zinc-400 border-white/10 hover:bg-white/10'
                          }`}
                        >
                          <Bike className="w-3.5 h-3.5" />
                          <span>Delivery</span>
                        </button>
                      </div>
                    </div>

                    {/* Customer Inputs */}
                    <div className="space-y-3 pt-2">
                      <input
                        type="text"
                        placeholder="Your Name *"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-white/15 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#e8604c]"
                      />
                      <input
                        type="tel"
                        placeholder="Phone Number *"
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-white/15 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#e8604c]"
                      />

                      {orderType === 'dinein' && (
                        <input
                          type="text"
                          placeholder="Table Number (Optional if seated)"
                          value={tableNumber}
                          onChange={(e) => setTableNumber(e.target.value)}
                          className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-white/15 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#e8604c]"
                        />
                      )}

                      {orderType === 'delivery' && (
                        <input
                          type="text"
                          placeholder="Delivery Address in Bidhannagar / Kolkata *"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-white/15 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#e8604c]"
                        />
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Order Footer & Checkout */}
              {items.length > 0 && (
                <div className="p-6 border-t border-white/10 bg-[#0f0e0e] space-y-3">
                  <div className="space-y-1.5 text-xs font-mono">
                    <div className="flex justify-between text-zinc-400">
                      <span>Subtotal</span>
                      <span className="text-white">₹{subtotal}</span>
                    </div>
                    {packagingFee > 0 && (
                      <div className="flex justify-between text-zinc-400">
                        <span>Eco Packaging</span>
                        <span className="text-white">₹{packagingFee}</span>
                      </div>
                    )}
                    {orderType === 'delivery' && (
                      <div className="flex justify-between text-zinc-400">
                        <span>Delivery Fee</span>
                        <span className="text-white">{deliveryFee === 0 ? 'FREE (Orders >₹800)' : `₹${deliveryFee}`}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-sm font-bold text-white pt-2 border-t border-white/10">
                      <span>Grand Total</span>
                      <span className="font-mono text-[#f4a261]">₹{grandTotal}</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleCheckout}
                    disabled={!customerName || !customerPhone}
                    className="w-full py-3.5 rounded-xl bg-[#e8604c] hover:bg-[#d44e3a] disabled:bg-zinc-800 disabled:text-zinc-500 text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-lg active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>PLACE ORDER NOW</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  {(!customerName || !customerPhone) && (
                    <p className="text-[10px] text-center text-amber-400 font-mono">
                      * Please enter your name and phone number above
                    </p>
                  )}
                </div>
              )}
            </>
          ) : (
            /* Order Confirmed Receipt View */
            <div className="flex-1 p-6 flex flex-col justify-between overflow-y-auto">
              <div className="py-8 text-center space-y-5">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/30">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <div>
                  <span className="hanko-stamp text-[10px] mb-2">ORDER RECEIVED</span>
                  <h3 className="font-display text-2xl font-bold text-white mt-1">
                    Thank You, {customerName}!
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1">
                    The kitchen has started crafting your order.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-zinc-900 border border-white/10 text-left text-xs font-mono space-y-2">
                  <div className="flex justify-between text-zinc-400 border-b border-white/10 pb-1.5">
                    <span>Order No:</span>
                    <span className="text-[#f4a261] font-bold">{orderNumber}</span>
                  </div>
                  <div className="flex justify-between text-zinc-400">
                    <span>Mode:</span>
                    <span className="text-white uppercase">{orderType}</span>
                  </div>
                  <div className="flex justify-between text-zinc-400">
                    <span>Items Count:</span>
                    <span className="text-white">{items.length} dishes/drinks</span>
                  </div>
                  <div className="flex justify-between text-zinc-400">
                    <span>Estimated Prep Time:</span>
                    <span className="text-emerald-400 font-bold">15–20 Mins</span>
                  </div>
                  <div className="flex justify-between text-zinc-400 pt-1.5 border-t border-white/10 font-bold">
                    <span>Total Paid (Pay on Arrival/Delivery):</span>
                    <span className="text-white">₹{grandTotal}</span>
                  </div>
                </div>

                <p className="text-[11px] text-zinc-400">
                  We will notify you at <span className="text-white font-medium">{customerPhone}</span> when your items are ready.
                </p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={handleFinish}
                  className="w-full py-3 rounded-xl bg-white text-zinc-950 font-bold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-all"
                >
                  CLOSE & BACK TO CAFE
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
