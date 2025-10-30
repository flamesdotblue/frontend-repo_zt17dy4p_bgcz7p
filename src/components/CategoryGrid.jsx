import React from 'react';

const defaultCategories = [
  { key: 'fruits', name: 'Fruits & Veggies', emoji: '🥦', color: 'from-lime-100 to-emerald-100' },
  { key: 'dairy', name: 'Dairy & Breads', emoji: '🥖', color: 'from-amber-100 to-yellow-100' },
  { key: 'snacks', name: 'Snacks & Munchies', emoji: '🍪', color: 'from-rose-100 to-pink-100' },
  { key: 'beverages', name: 'Beverages', emoji: '🧃', color: 'from-sky-100 to-cyan-100' },
  { key: 'instant', name: 'Breakfast & Instant', emoji: '🍜', color: 'from-purple-100 to-fuchsia-100' },
  { key: 'household', name: 'Household', emoji: '🧽', color: 'from-slate-100 to-gray-100' },
];

const CategoryGrid = ({ categories = defaultCategories, active, onSelect }) => {
  return (
    <section className="py-6">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-3 flex items-end justify-between">
          <h2 className="text-xl font-bold tracking-tight text-gray-900">Shop by category</h2>
          <button onClick={() => onSelect?.(undefined)} className="text-sm font-semibold text-lime-700 hover:text-lime-800">Clear</button>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => onSelect?.(c.key)}
              className={`group relative overflow-hidden rounded-xl bg-gradient-to-br ${c.color} p-4 text-left shadow transition hover:shadow-md ${active === c.key ? 'ring-2 ring-lime-500' : ''}`}
            >
              <div className="text-3xl">{c.emoji}</div>
              <div className="mt-3 text-sm font-semibold text-gray-800">{c.name}</div>
              <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/40 opacity-0 transition group-hover:opacity-100" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
