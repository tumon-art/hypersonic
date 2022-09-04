import create from "zustand";

interface Store {
  sidebar: boolean;
  setSidebar: (state: any) => void;
}

const useStore = create<Store>((set) => ({
  sidebar: false,
  setSidebar: () => set((state) => ({ sidebar: !state.sidebar })),
}));

export default useStore;
