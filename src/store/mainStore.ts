import create from "zustand";

interface Store {
  sidebar: boolean;
  setSidebar: (state: any) => void;
  setSidebarFalse: (state: any) => void;
}

const useStore = create<Store>((set) => ({
  sidebar: false,
  setSidebar: () => set((state) => ({ sidebar: !state.sidebar })),
  setSidebarFalse: () => set((state) => ({ sidebar: false })),
}));

export default useStore;
