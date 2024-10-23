import CookieManager from 'util/CookieManager';
import { create } from 'zustand';

const cookieManager = new CookieManager();

const useAuthStore = create((set) => ({
    token: cookieManager.getCookie('token') || null,
    user_id: cookieManager.getCookie('user_id') || null,

    setToken: (token) => {
        cookieManager.setCookie('token', token);
        set({ token });
    },

    setUserId: (user_id) => {
        cookieManager.setCookie('user_id', user_id);
        set({ user_id });
    },

    removeAuth: () => {
        cookieManager.remove('token');
        cookieManager.remove('user_id');
        set({ token: null, user_id: null });
    },
}));

export default useAuthStore;