// src/store/pinStore.ts
import { create } from 'zustand';
import { PinState, Pin } from '../types/PinTypes';
import { fetchPhoto, fetchCartoon } from '../services/api'; // Import the API functions

const initialState: PinState = {
  pins: [],
  loading: false,
  error: null,
};

const usePinStore = create<PinState>((set) => ({
  ...initialState,
  fetchPins: async (category: string) => {
    set({ loading: true, error: null });

    try {
      let pins: Pin[] = [];

      if (category === 'Photo' || category === 'All') {
        const photoPins = await fetchPhoto('', 'photo'); // Fetch photo pins
        pins = [...pins, ...photoPins];
      }

      if (category === 'Cartoon' || category === 'All') {
        const cartoonPins = await fetchCartoon('', 'cartoon'); // Fetch cartoon pins
        pins = [...pins, ...cartoonPins];
      }

      set({ pins, loading: false });
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'Failed to fetch pins', loading: false });
    }
  },
}));

export default usePinStore;