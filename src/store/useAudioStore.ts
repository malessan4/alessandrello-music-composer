import { create } from 'zustand';

interface AudioState {
    currentTrack: string | null; // URL del mp3
    isPlaying: boolean;
    trackData: { title: string; year: string } | null;
    setTrack: (url: string, data: any) => void;
    togglePlay: () => void;
}

export const useAudioStore = create<AudioState>((set) => ({
    currentTrack: null,
    isPlaying: false,
    trackData: null,
    setTrack: (url, data) => set({ currentTrack: url, trackData: data, isPlaying: true }),
    togglePlay: () => set((state) => ({ isPlaying: !state.isPlaying })),
}));