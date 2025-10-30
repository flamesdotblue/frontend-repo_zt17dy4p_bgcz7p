import React from 'react';
import { Clock, Star } from 'lucide-react';

const HeroBanner = () => {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-lime-100 via-emerald-100 to-teal-100">
          <div className="absolute right-0 top-0 hidden h-full w-1/2 bg-[radial-gradient(ellipse_at_center,rgba(132,204,22,0.25),transparent_60%)] md:block" />
          <div className="relative z-10 grid gap-6 p-6 md:grid-cols-2 md:p-10">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm ring-1 ring-black/5">
                <Clock size={14} className="text-lime-600" />
                Delivery in 10 minutes
              </div>
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Groceries, snacks and essentials at your doorstep
              </h1>
              <p className="max-w-prose text-sm text-gray-600 sm:text-base">
                Discover fresh produce, daily needs and gourmet picks from your neighborhood stores. No minimum order.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {["Fresh Fruits", "Dairy & Breads", "Beverages", "Household"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm ring-1 ring-black/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="absolute -left-6 -top-6 rounded-xl bg-white px-3 py-2 text-xs font-semibold text-gray-700 shadow-lg">
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star size={14} fill="currentColor" />
                    <span>4.8</span>
                  </div>
                  <div className="text-[10px] text-gray-500">1M+ happy users</div>
                </div>
                <img
                  alt="Grocery bag"
                  className="h-40 w-40 select-none rounded-xl object-cover shadow-xl sm:h-56 sm:w-56"
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=600&auto=format&fit=crop"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
