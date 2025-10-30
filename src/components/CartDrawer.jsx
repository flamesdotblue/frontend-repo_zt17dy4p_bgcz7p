import React from 'react';
import { X, Plus, Minus } from 'lucide-react';

const CartDrawer = ({ isOpen, onClose, cartItems, onAdd, onRemove }) => {
  const items = Object.values(cartItems || {});
  const subtotal = items.reduce((sum, it) => sum + it.price * it.qty, 0);
  const delivery = items.length > 0 ? 15 : 0;
  const total = subtotal + delivery;

  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? '' : 'pointer-events-none'}`} aria-hidden={!isOpen}>
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      {/* Drawer */}
      <aside
        className={`absolute right-0 top-0 h-full w-full max-w-md transform bg-white shadow-xl transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between border-b px-5 py-4">
          <h3 className="text-lg font-bold">Your Cart</h3>
          <button onClick={onClose} aria-label="Close cart" className="rounded-full p-2 hover:bg-gray-100">
            <X size={20} />
          </button>
        </div>
        <div className="flex h-[calc(100%-160px)] flex-col">
          <div className="no-scrollbar flex-1 space-y-3 overflow-y-auto px-5 py-4">
            {items.length === 0 && (
              <div className="grid h-full place-items-center text-center text-gray-500">
                Your cart is empty.
              </div>
            )}
            {items.map((item) => (
              <div key={item.id} className="flex items-center gap-3 rounded-xl border p-3">
                <img src={item.img} alt={item.name} className="h-16 w-16 rounded-lg object-cover" />
                <div className="min-w-0 flex-1">
                  <div className="truncate text-sm font-semibold">{item.name}</div>
                  <div className="mt-0.5 text-xs text-gray-500">₹{item.price} • 10 min</div>
                  <div className="mt-2 flex items-center justify-between">
                    <div className="text-sm font-bold">₹{item.price * item.qty}</div>
                    <div className="inline-flex items-center gap-3 rounded-full border border-lime-500 bg-white px-3 py-1.5 text-sm font-medium text-gray-800">
                      <button onClick={() => onRemove(item.id)} className="rounded-full p-1 text-lime-600 hover:bg-lime-50">
                        <Minus size={16} />
                      </button>
                      <span className="min-w-[16px] text-center">{item.qty}</span>
                      <button onClick={() => onAdd(item.id)} className="rounded-full p-1 text-lime-600 hover:bg-lime-50">
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Summary */}
          <div className="border-t p-5">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Delivery</span>
                <span>{delivery === 0 ? 'Free' : `₹${delivery}`}</span>
              </div>
              <div className="flex justify-between border-t pt-2 text-base font-bold">
                <span>Total</span>
                <span>₹{total}</span>
              </div>
            </div>
            <button className="mt-4 w-full rounded-lg bg-lime-500 py-2.5 text-sm font-semibold text-gray-900 hover:bg-lime-400">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default CartDrawer;
