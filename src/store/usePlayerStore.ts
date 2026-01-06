import { create } from 'zustand';

interface Track {
    id: string;
    title: string;
    url: string; // La ruta al archivo mp3
    duration?: number;
}

interface PlayerState {
    isPlaying: boolean;
    currentTrack: Track | null;
    volume: number;

    // Acciones
    play: (track: Track) => void;
    pause: () => void;
    togglePlay: () => void;
    setVolume: (val: number) => void;
}

export const usePlayerStore = create<PlayerState>((set, get) => ({
    isPlaying: false,
    currentTrack: null,
    volume: 1, // 1 es 100%

    play: (track) => {
        const { currentTrack, isPlaying } = get();
        // Si ya es el mismo track, solo resumimos, si es nuevo, cambiamos
        if (currentTrack?.id === track.id) {
            set({ isPlaying: true });
        } else {
            set({ currentTrack: track, isPlaying: true });
        }
    },

    pause: () => set({ isPlaying: false }),

    togglePlay: () => set((state) => ({ isPlaying: !state.isPlaying })),

    setVolume: (val) => set({ volume: val }),
}));