import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const initialProducts = [
  { id: 1, name: 'Bananas (1 kg)', price: 49, img: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?q=80&w=400&auto=format&fit=crop' },
  { id: 2, name: 'Whole Wheat Bread', price: 39, img: 'https://images.unsplash.com/photo-1575505586569-646b2ca898fc?q=80&w=400&auto=format&fit=crop' },
  { id: 3, name: 'Full Cream Milk (1L)', price: 62, img: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?q=80&w=400&auto=format&fit=crop' },
  { id: 4, name: 'Potato Chips - Classic', price: 20, img: 'https://images.unsplash.com/photo-1599599810769-0ba3fd680f24?q=80&w=400&auto=format&fit=crop' },
  { id: 5, name: 'Coca-Cola (1.25L)', price: 75, img: 'https://images.unsplash.com/photo-1629196904982-e5cf3e935ca1?q=80&w=400&auto=format&fit=crop' },
  { id: 6, name: 'Farm Eggs (12 pc)', price: 89, img: 'https://images.unsplash.com/photo-1517959105821-eaf2591984b2?q=80&w=400&auto=format&fit=crop' },
];

const ProductCard = ({ product, qty, onAdd, onRemove }) => {
  return (
    <div className="min-w-[200px] max-w-[220px] rounded-2xl border border-gray-100 bg-white p-3 shadow-sm transition hover:shadow-md">
      <div className="aspect-square w-full overflow-hidden rounded-xl bg-gray-50">
        <img src={product.img} alt={product.name} className="h-full w-full object-cover" />
      </div>
      <div className="mt-3">
        <h3 className="line-clamp-2 h-10 text-sm font-semibold text-gray-900">{product.name}</h3>
        <div className="mt-1 text-sm font-bold text-gray-900">₹{product.price}</div>
        <div className="mt-3 flex items-center justify-between">
          {qty > 0 ? (
            <div className="inline-flex items-center gap-3 rounded-full border border-lime-500 bg-white px-3 py-1.5 text-sm font-medium text-gray-800">
              <button onClick={onRemove} className="rounded-full p-1 text-lime-600 hover:bg-lime-50">
                <Minus size={16} />
              </button>
              <span className="min-w-[16px] text-center">{qty}</span>
              <button onClick={onAdd} className="rounded-full p-1 text-lime-600 hover:bg-lime-50">
                <Plus size={16} />
              </button>
            </div>
          ) : (
            <button onClick={onAdd} className="rounded-full bg-lime-500 px-4 py-1.5 text-sm font-semibold text-white shadow hover:bg-lime-600">
              Add
            </button>
          )}
          <span className="text-xs text-gray-500">10 min</span>
        </div>
      </div>
    </div>
  );
};

const ProductCarousel = ({ onCartChange }) => {
  const [cart, setCart] = useState({});

  const handleAdd = (id) => {
    setCart((prev) => {
      const next = { ...prev, [id]: (prev[id] || 0) + 1 };
      onCartChange?.(Object.values(next).reduce((a, b) => a + b, 0));
      return next;
    });
  };

  const handleRemove = (id) => {
    setCart((prev) => {
      const qty = (prev[id] || 0) - 1;
      const next = { ...prev };
      if (qty <= 0) delete next[id]; else next[id] = qty;
      onCartChange?.(Object.values(next).reduce((a, b) => a + b, 0));
      return next;
    });
  };

  return (
    <section className="py-6">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-3 flex items-end justify-between">
          <h2 className="text-xl font-bold tracking-tight text-gray-900">Popular near you</h2>
          <button className="text-sm font-semibold text-lime-700 hover:text-lime-800">View more</button>
        </div>
        <div className="no-scrollbar -mx-2 flex gap-4 overflow-x-auto px-2 pb-2">
          {initialProducts.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              qty={cart[p.id] || 0}
              onAdd={() => handleAdd(p.id)}
              onRemove={() => handleRemove(p.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
