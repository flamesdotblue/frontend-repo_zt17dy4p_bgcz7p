import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import CategoryGrid from './components/CategoryGrid';
import ProductCarousel from './components/ProductCarousel';

function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar cartCount={cartCount} />
      <main className="space-y-4 pb-20">
        <HeroBanner />
        <CategoryGrid />
        <ProductCarousel onCartChange={setCartCount} />
      </main>
      {/* Sticky bottom summary */}
      {cartCount > 0 && (
        <div className="fixed inset-x-0 bottom-0 z-40">
          <div className="mx-auto max-w-7xl px-4 pb-4">
            <div className="flex items-center justify-between rounded-xl bg-gray-900 px-4 py-3 text-white shadow-xl">
              <div className="text-sm">
                <span className="font-semibold">{cartCount} item{cartCount > 1 ? 's' : ''}</span>
                <span className="ml-2 text-white/70">Ready in 10 minutes</span>
              </div>
              <button className="rounded-lg bg-lime-500 px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-lime-400">View Cart</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
