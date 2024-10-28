import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useCartStore = create(persist(
    (set) => ({
        cartItems: [],
        totalPrice: 0,
        cartId: null,
        createAt: null,
        updatedAt: null,

        addToCartStore: (item) => set((state) => {
            const existingService = state.cartItems.find(i => i.service_id === item.service_id);
            const sameCompanyItems = state.cartItems.filter(i => i.company_id === item.company_id);

            if (!existingService) {
                if (sameCompanyItems.length === 0 || sameCompanyItems[0].company_id === item.company_id) {
                    const updatedCartItems = [...state.cartItems, { ...item }];
                    const updatedTotalPrice = updatedCartItems.reduce((sum, i) => sum + i.price, 0);

                    return {
                        cartItems: updatedCartItems,
                        totalPrice: updatedTotalPrice,
                    };
                }
            }
            return state;
        }),

        syncCartWithDB: (cartItemsFromDB) => set((state) => {
            const mergedCartItems = [
                ...state.cartItems.filter(item =>
                    !cartItemsFromDB.some(dbItem => dbItem.service_id === item.service_id)
                ),
                ...cartItemsFromDB,
            ];

            const updatedTotalPrice = mergedCartItems.reduce((sum, item) => sum + item.price, 0);

            return {
                cartItems: mergedCartItems,
                totalPrice: updatedTotalPrice,
            };
        }),

        setCartMetadata: ({ cart_id, total_price, created_at, updated_at }) => set(() => ({
            cartId: cart_id,
            totalPrice: total_price,
            createdAt: created_at,
            updatedAt: updated_at,
        })),

        removeFromCartStore: (service_id) => set((state) => {
            const updatedCartItems = state.cartItems.filter(i => i.service_id !== service_id);
            const updatedTotalPrice = updatedCartItems.reduce((sum, i) => sum + i.price, 0);

            return {
                cartItems: updatedCartItems,
                totalPrice: updatedTotalPrice,
            };
        }),

        clearCartStore: () => set(() => ({
            cartItems: [],
            totalPrice: 0,
            cartId: null,
            createdAt: null,
            updatedAt: null,
        })),
    }),
    {
        name: 'cart-storage',
        getStorage: () => localStorage,
    }
));


export default useCartStore;
