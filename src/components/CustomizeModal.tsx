import React, { useState } from 'react';
import { MenuItem, CartItem } from '../types';
import { X, Plus, Minus, Check, Flame, Sparkles } from 'lucide-react';

interface CustomizeModalProps {
  item: MenuItem | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (cartItem: CartItem) => void;
}

export const CustomizeModal: React.FC<CustomizeModalProps> = ({
  item,
  isOpen,
  onClose,
  onAddToCart
}) => {
  if (!isOpen || !item) return null;

  const isDrink = item.category === 'bubble-tea' || item.category === 'coffee-tea';
  
  const [sweetness, setSweetness] = useState('70% (Less Sweet)');
  const [iceLevel, setIceLevel] = useState('Less Ice');
  const [selectedToppings, setSelectedToppings] = useState<string[]>(['Brown Sugar Tapioca (+₹40)']);
  const [spice, setSpice] = useState('Medium Spice');
  const [quantity, setQuantity] = useState(1);

  const drinkToppingOptions = [
    { label: 'Brown Sugar Tapioca (+₹40)', price: 40 },
    { label: 'Mango Popping Boba (+₹40)', price: 40 },
    { label: 'Sea Salt Cheese Foam (+₹50)', price: 50 },
    { label: 'Silky Grass Jelly (+₹35)', price: 35 },
  ];

  const foodAddonOptions = [
    { label: 'Extra Molten Ajitsuke Egg (+₹45)', price: 45 },
    { label: 'Crispy Fried Garlic Crisps (+₹30)', price: 30 },
    { label: 'Extra Scallions & Chili Crisp (+₹25)', price: 25 },
  ];

  const toggleTopping = (toppingLabel: string) => {
    setSelectedToppings((prev) =>
      prev.includes(toppingLabel)
        ? prev.filter((t) => t !== toppingLabel)
        : [...prev, toppingLabel]
    );
  };

  // Calculate dynamic unit price
  const activeOptions = isDrink ? drinkToppingOptions : foodAddonOptions;
  const extraPrice = selectedToppings.reduce((acc, curr) => {
    const found = activeOptions.find((o) => o.label === curr);
    return acc + (found ? found.price : 0);
  }, 0);

  const unitPrice = item.price + extraPrice;
  const totalPrice = unitPrice * quantity;

  const handleConfirm = () => {
    const newCartItem: CartItem = {
      id: `${item.id}-${Date.now()}`,
      menuItemId: item.id,
      name: item.name,
      price: unitPrice,
      quantity,
      image: item.image,
      sweetness: isDrink ? sweetness : undefined,
      iceLevel: isDrink ? iceLevel : undefined,
      toppings: selectedToppings,
      spiceLevel: !isDrink ? spice : undefined,
    };
    onAddToCart(newCartItem);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg rounded-3xl bg-[#141312] border border-white/15 shadow-2xl p-6 sm:p-8 text-white max-h-[90vh] overflow-y-auto"
        role="dialog"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
          aria-label="Close customizer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Item Header */}
        <div className="flex gap-4 items-center mb-6 pb-4 border-b border-white/10">
          <img
            src={item.image}
            alt={item.name}
            referrerPolicy="no-referrer"
            className="w-16 h-16 rounded-xl object-cover border border-white/10"
          />
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#e8604c]">
              {item.categoryLabel}
            </span>
            <h3 className="font-display text-lg font-bold text-white leading-tight">
              {item.name}
            </h3>
            <span className="text-sm font-mono text-zinc-300">Base: ₹{item.price}</span>
          </div>
        </div>

        {/* Customization Controls */}
        <div className="space-y-6">
          {isDrink ? (
            <>
              {/* Sweetness */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                  Sweetness Level
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {['100% Regular', '70% Less Sweet', '50% Half Sweet', '0% No Sugar'].map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setSweetness(s)}
                      className={`py-2 px-2 text-xs font-semibold rounded-lg border transition-all text-center ${
                        sweetness === s
                          ? 'bg-[#e8604c] text-white border-[#e8604c]'
                          : 'bg-white/5 text-zinc-400 border-white/10 hover:bg-white/10'
                      }`}
                    >
                      {s.split(' ')[0]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Ice Level */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                  Ice Level
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['Regular Ice', 'Less Ice', 'No Ice'].map((i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setIceLevel(i)}
                      className={`py-2 text-xs font-semibold rounded-lg border transition-all text-center ${
                        iceLevel === i
                          ? 'bg-cyan-600 text-white border-cyan-600'
                          : 'bg-white/5 text-zinc-400 border-white/10 hover:bg-white/10'
                      }`}
                    >
                      {i}
                    </button>
                  ))}
                </div>
              </div>

              {/* Drink Toppings */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                  Add Artisanal Toppings
                </label>
                <div className="space-y-2">
                  {drinkToppingOptions.map((opt) => {
                    const isSelected = selectedToppings.includes(opt.label);
                    return (
                      <button
                        key={opt.label}
                        type="button"
                        onClick={() => toggleTopping(opt.label)}
                        className={`w-full flex items-center justify-between p-2.5 rounded-lg border text-xs transition-all ${
                          isSelected
                            ? 'bg-white/10 border-white/30 text-white'
                            : 'bg-white/5 border-white/5 text-zinc-400 hover:text-white'
                        }`}
                      >
                        <span className="font-medium">{opt.label}</span>
                        <div className={`w-4 h-4 rounded flex items-center justify-center border ${
                          isSelected ? 'bg-[#e8604c] border-[#e8604c] text-white' : 'border-white/20'
                        }`}>
                          {isSelected && <Check className="w-3 h-3" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Food Spice Level */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                  Spice Level
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['Mild Spice', 'Medium Spice', 'Extra Spicy'].map((lvl) => (
                    <button
                      key={lvl}
                      type="button"
                      onClick={() => setSpice(lvl)}
                      className={`py-2 text-xs font-semibold rounded-lg border transition-all text-center ${
                        spice === lvl
                          ? 'bg-[#e8604c] text-white border-[#e8604c]'
                          : 'bg-white/5 text-zinc-400 border-white/10 hover:bg-white/10'
                      }`}
                    >
                      {lvl}
                    </button>
                  ))}
                </div>
              </div>

              {/* Food Add-ons */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                  Kitchen Add-ons
                </label>
                <div className="space-y-2">
                  {foodAddonOptions.map((opt) => {
                    const isSelected = selectedToppings.includes(opt.label);
                    return (
                      <button
                        key={opt.label}
                        type="button"
                        onClick={() => toggleTopping(opt.label)}
                        className={`w-full flex items-center justify-between p-2.5 rounded-lg border text-xs transition-all ${
                          isSelected
                            ? 'bg-white/10 border-white/30 text-white'
                            : 'bg-white/5 border-white/5 text-zinc-400 hover:text-white'
                        }`}
                      >
                        <span className="font-medium">{opt.label}</span>
                        <div className={`w-4 h-4 rounded flex items-center justify-center border ${
                          isSelected ? 'bg-[#e8604c] border-[#e8604c] text-white' : 'border-white/20'
                        }`}>
                          {isSelected && <Check className="w-3 h-3" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </>
          )}

          {/* Quantity Stepper */}
          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            <span className="text-xs uppercase tracking-wider text-zinc-300 font-semibold">
              Quantity
            </span>
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg p-1">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="w-7 h-7 flex items-center justify-center rounded bg-white/5 hover:bg-white/10 text-white"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="w-6 text-center font-mono font-bold text-sm">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                className="w-7 h-7 flex items-center justify-center rounded bg-white/5 hover:bg-white/10 text-white"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-8 pt-4 border-t border-white/10">
          <button
            type="button"
            onClick={handleConfirm}
            className="w-full py-3.5 rounded-xl bg-[#e8604c] hover:bg-[#d44e3a] text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-lg active:scale-95 flex items-center justify-between px-6"
          >
            <span>ADD TO ORDER BAG</span>
            <span className="font-mono text-sm">₹{totalPrice}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
