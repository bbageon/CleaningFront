import { create } from 'zustand';

const useHistoryStore = create((set) => ({
    requestCleans: [],
    setRequestCleans: (data) => set({ requestCleans: data }),

    selectedRequest: null,
    setSelectedRequest: (data) => set({ selectedRequest: data}),

    paymentStatus: '결제대기중',
    setPaymentStatus: (status) => set({ paymentStatus: status }),
}));

export default useHistoryStore;