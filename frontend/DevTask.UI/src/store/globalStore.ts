import { create } from 'zustand';

interface GlobalState {
  isTaskModalOpen: boolean;
  selectedTaskId: string | null;
  openTaskModal: (id: string) => void;
  closeTaskModal: () => void;
}

const useGlobalStore = create<GlobalState>((set) => ({
  isTaskModalOpen: false,
  selectedTaskId: null,
  
  openTaskModal: (id: string) => {
    set({ isTaskModalOpen: true, selectedTaskId: id });
  },

  closeTaskModal: () => {
    set({ isTaskModalOpen: false, selectedTaskId: null });
  },
}));

export default useGlobalStore;