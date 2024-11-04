import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAddressStore = create(persist(
    (set) => ({
        address: null,
        address_detail: null,
        default: false,

        setAddress: (address, address_detail) => set({
            address: address,
            address_detail: address_detail,
        }),
    }),
    {
        name: 'address-storage',
        getStorage: () => localStorage,
    }
));

export default useAddressStore;