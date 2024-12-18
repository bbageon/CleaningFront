import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useAuthStore = create(
    persist(
        (set) => ({
            token: null,
            user_id: null,
            isAuthenticated: false,
            isEmployee : false,

            setToken: (token) => {
                set({ token, isAuthenticated: !!token });
            },

            setUserId: (user_id) => {
                set({ user_id, isAuthenticated: !!user_id });
            },

            setIsEmployee : (isEmployee) => {
                set({isEmployee})
            },

            removeAuth: () => {
                set({ token: null, user_id: null, isAuthenticated: false});
            },
        }),
        {
            name: 'auto-storage',
            getStorage: () => localStorage,
            partialize: (state) => ({ user_id: state.user_id, isAuthenticated: state.isAuthenticated, isEmployee : state.isEmployee }),
        }
    )
);

export default useAuthStore;