import { StateCreator } from "zustand";

export type UISlice = {
    isModalOpen: boolean;
    setModal: (type: number) => void;
    currentModal: number;
};

export const useUISlice: StateCreator<UISlice, [], [], UISlice> = (set) => ({
    isModalOpen: false,
    setModal: (type: number) => {
        if (!type) {
            set({ isModalOpen: false, currentModal: 0 });
        } else {
            set({ isModalOpen: true, currentModal: type });
        }
    },
    currentModal: 0,
});
