import React, { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import CategoryGrid from './components/CategoryGrid';
import ProductCarousel from './components/ProductCarousel';
import CartDrawer from './components/CartDrawer';

const SAMPLE_PRODUCTS = [
  // Fruits
  { id: 1, name: 'Bananas (1 kg)', price: 49, category: 'fruits', img: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?q=80&w=600&auto=format&fit=crop' },
  { id: 2, name: 'Apples - Shimla (1 kg)', price: 139, category: 'fruits', img: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?q=80&w=600&auto=format&fit=crop' },
  { id: 3, name: 'Tomatoes (1 kg)', price: 35, category: 'fruits', img: 'https://images.unsplash.com/photo-1546470427-e2719a942d00?q=80&w=600&auto=format&fit=crop' },
  { id: 4, name: 'Spinach (250 g)', price: 25, category: 'fruits', img: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=600&auto=format&fit=crop' },
  // Dairy
  { id: 5, name: 'Whole Wheat Bread', price: 39, category: 'dairy', img: 'https://images.unsplash.com/photo-1575505586569-646b2ca898fc?q=80&w=600&auto=format&fit=crop' },
  { id: 6, name: 'Full Cream Milk (1L)', price: 62, category: 'dairy', img: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?q=80&w=600&auto=format&fit=crop' },
  { id: 7, name: 'Salted Butter (500 g)', price: 245, category: 'dairy', img: 'https://images.unsplash.com/photo-1514242879996-d7b3c2dfe4fa?q=80&w=600&auto=format&fit=crop' },
  // Snacks
  { id: 8, name: 'Potato Chips - Classic', price: 20, category: 'snacks', img: 'https://images.unsplash.com/photo-1599599810769-0ba3fd680f24?q=80&w=600&auto=format&fit=crop' },
  { id: 9, name: 'Chocolate Cookies', price: 99, category: 'snacks', img: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=600&auto=format&fit=crop' },
  { id: 10, name: 'Masala Peanuts', price: 65, category: 'snacks', img: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?q=80&w=600&auto=format&fit=crop' },
  // Beverages
  { id: 11, name: 'Coca-Cola (1.25L)', price: 75, category: 'beverages', img: 'https://images.unsplash.com/photo-1629196904982-e5cf3e935ca1?q=80&w=600&auto=format&fit=crop' },
  { id: 12, name: 'Orange Juice (1L)', price: 110, category: 'beverages', img: 'https://images.unsplash.com/photo-1542444459-db63c5212ef3?q=80&w=600&auto=format&fit=crop' },
  { id: 13, name: 'Cold Coffee Can', price: 45, category: 'beverages', img: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=600&auto=format&fit=crop' },
  // Instant
  { id: 14, name: 'Instant Noodles - Masala', price: 15, category: 'instant', img: 'https://images.unsplash.com/photo-1604908554049-1a6ec2df46d0?q=80&w=600&auto=format&fit=crop' },
  { id: 15, name: 'Oats Porridge (1 kg)', price: 179, category: 'instant', img: 'https://images.unsplash.com/photo-1517673132405-a56a62b18caf?q=80&w=600&auto=format&fit=crop' },
  // Household
  { id: 16, name: 'Dishwash Liquid (500 ml)', price: 110, category: 'household', img: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=600&auto=format&fit=crop' },
  { id: 17, name: 'Garbage Bags (Small, 30 pc)', price: 85, category: 'household', img: 'https://images.unsplash.com/photo-1592329427600-9cc9f865e6ca?q=80&w=600&auto=format&fit=crop' },
];

function App() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState();
  const [cart, setCart] = useState({}); // { [id]: { id, name, price, img, qty } }
  const [isCartOpen, setCartOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    const term = search.trim().toLowerCase();
    return SAMPLE_PRODUCTS.filter((p) => {
      const matchesCategory = activeCategory ? p.category === activeCategory : true;
      const matchesSearch = term ? p.name.toLowerCase().includes(term) : true;
      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  const addToCart = (id) => {
    const product = SAMPLE_PRODUCTS.find((p) => p.id === id);
    if (!product) return;
    setCart((prev) => {
      const next = { ...prev };
      const existing = next[id];
      next[id] = existing ? { ...existing, qty: existing.qty + 1 } : { ...product, qty: 1 };
      return next;
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => {
      const next = { ...prev };
      if (!next[id]) return prev;
      const qty = next[id].qty - 1;
      if (qty <= 0) delete next[id]; else next[id] = { ...next[id], qty };
      return next;
    });
  };

  const cartCount = useMemo(() => Object.values(cart).reduce((sum, it) => sum + it.qty, 0), [cart]);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar
        cartCount={cartCount}
        searchValue={search}
        onSearchChange={setSearch}
        onCartClick={() => setCartOpen(true)}
      />
      <main className="space-y-4 pb-24">
        <HeroBanner />
        <CategoryGrid active={activeCategory} onSelect={setActiveCategory} />
        <ProductCarousel
          title={activeCategory ? 'Top picks' : 'Popular near you'}
          products={filteredProducts}
          cart={cart}
          onAdd={addToCart}
          onRemove={removeFromCart}
        />
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
              <button onClick={() => setCartOpen(true)} className="rounded-lg bg-lime-500 px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-lime-400">View Cart</button>
            </div>
          </div>
        </div>
      )}

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cart}
        onAdd={addToCart}
        onRemove={removeFromCart}
      />
    </div>
  );
}

export default App;
