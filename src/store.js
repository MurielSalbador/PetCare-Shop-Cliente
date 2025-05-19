import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useCart = create(
  persist(
    (set) => ({
      count: 0,
      cart: [],
      addCart: (item) =>
        set((state) => {
          const existingItem = state.cart.find(
            (cartItem) => cartItem.id === item.id
          );
          if (existingItem) {
            return {
              count: state.count + 1,
              cart: state.cart.map((cartItem) =>
                cartItem.id === item.id
                  ? { ...cartItem, quantity: cartItem.quantity + 1 }
                  : cartItem
              ),
            };
          }
          return {
            count: state.count + 1,
            cart: [...state.cart, { ...item, quantity: 1 }],
          };
        }),
      removeCart: (id) =>
        set((state) => {
          const existingItem = state.cart.find((item) => item.id === id);
          if (existingItem && existingItem.quantity > 1) {
            return {
              count: state.count - 1,
              cart: state.cart.map((cartItem) =>
                cartItem.id === id
                  ? { ...cartItem, quantity: cartItem.quantity - 1 }
                  : cartItem
              ),
            };
          }
          return {
            count: state.count - 1,
            cart: state.cart.filter((item) => item.id !== id),
          };
        }),
        
        clearCart: () => set({ count: 0, cart: [] }),
    }),
    { name: 'cart-storage' }
  )
);
