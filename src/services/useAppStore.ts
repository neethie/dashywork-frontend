import { create } from "zustand";
import { UISlice, useUISlice } from "./UISlice";
import { devtools } from "zustand/middleware";

type AppSlice = UISlice;

export const useAppStore = create<AppSlice>()(
    devtools((...a) => ({
        ...useUISlice(...a),
    }))
);
