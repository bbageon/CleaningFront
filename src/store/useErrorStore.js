import { create } from 'zustand';

const useErrorStore = create((set) => ({
    isModalOpen: false,
    error: {
        title: '',
        message: '',
    },
    openModal: (title, message) => set({
        isModalOpen: true,
        error: { title, message },
    }),
    closeModal: () => set({
        isModalOpen: false,
        error: { title: '', message: '' },
    }),
}));

export default useErrorStore;