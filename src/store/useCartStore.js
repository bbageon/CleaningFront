import create from 'zustand';

const useCartStore = create((set) => ({
    options: [],
    totalPrice: 0,

    addOption: (option) => set((state) => {
        const updatedOptions = [...state.options, option];
        const updateTotalPrice = updatedOptions.reduce((sum, option) => sum + option.price, 0);
        return { options: updatedOptions, totalPrice: updateTotalPrice };
    }),

    removeOption: (optionId) => set((state) => {
        const updatedOptions = state.options.filter((option) => option.id !== optionId);
        const updatedTotalPrice = updatedOptions.reduce((sum, option) => sum + option.price, 0);
        return { options: updatedOptions, totalPrice: updatedTotalPrice };
    }),

    clearCart: () => set({ options: [], totalPrice: 0 }),
}));

export default useCartStore;