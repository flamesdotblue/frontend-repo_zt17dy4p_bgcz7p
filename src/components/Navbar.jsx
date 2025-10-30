import React from 'react';
import { ShoppingCart, User, MapPin, Search } from 'lucide-react';

const Navbar = ({ cartCount = 0, searchValue = '', onSearchChange, onCartClick }) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="rounded-md bg-lime-500 px-2 py-1 text-white shadow-sm">
            <span className="font-extrabold tracking-tight">blink</span>
            <span className="font-extrabold tracking-tight text-gray-900">it</span>
          </div>
        </div>

        {/* Location */}
        <div className="hidden items-center gap-2 rounded-lg border bg-white px-3 py-2 text-sm text-gray-700 shadow-sm sm:flex">
          <MapPin size={18} className="text-lime-600" />
          <span className="font-medium">Deliver to</span>
          <span className="truncate text-gray-600">Home • 221B Baker Street</span>
        </div>

        {/* Search */}
        <div className="relative flex-1">
          <Search size={18} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={searchValue}
            onChange={(e) => onSearchChange?.(e.target.value)}
            placeholder="Search for fruits, snacks and essentials"
            className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2.5 pl-10 pr-4 text-sm outline-none ring-lime-500 transition focus:border-lime-400 focus:bg-white focus:ring-2"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button className="hidden items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm hover:border-gray-300 sm:flex">
            <User size={18} />
            Sign in
          </button>
          <button onClick={onCartClick} className="relative flex items-center gap-2 rounded-lg bg-lime-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-lime-600">
            <ShoppingCart size={18} />
            Cart
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-gray-900 px-1 text-[11px] font-bold text-white">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
