import React from 'react';
import { Plus, Minus } from 'lucide-react';

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

const ProductCarousel = ({ title = 'Popular near you', products = [], cart = {}, onAdd, onRemove }) => {
  return (
    <section className="py-6">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-3 flex items-end justify-between">
          <h2 className="text-xl font-bold tracking-tight text-gray-900">{title}</h2>
          <span className="text-sm font-semibold text-lime-700">{products.length} items</span>
        </div>
        <div className="no-scrollbar -mx-2 flex gap-4 overflow-x-auto px-2 pb-2">
          {products.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              qty={cart[p.id]?.qty || 0}
              onAdd={() => onAdd?.(p.id)}
              onRemove={() => onRemove?.(p.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
