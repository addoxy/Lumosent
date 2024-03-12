import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type ViewState = {
  view: 'grid' | 'table' | 'column';
  setView: (view: 'grid' | 'table' | 'column') => void;
};

export const useView = create<ViewState>()(
  persist(
    (set) => ({
      view: 'grid',
      setView: (newView) =>
        set(() => {
          return { view: newView };
        }),
    }),
    {
      name: 'view-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
