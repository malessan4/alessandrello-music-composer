"use client";
import { usePlayerStore } from "@/store/usePlayerStore";
import { Play } from "lucide-react";

export default function Home() {
  const { play } = usePlayerStore();

  const handlePlayDemo = () => {
    play({
      id: "1",
      title: "Demo Track: Paisaje Sonoro 01",
      // Usamos un mp3 de prueba libre de derechos
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-neutral-950 text-white p-24">
      <h1 className="text-5xl font-bold tracking-tighter mb-4 bg-gradient-to-r from-white to-neutral-500 bg-clip-text text-transparent">
        Matías Alessandrello
      </h1>
      <p className="text-neutral-400 mb-8 text-lg font-light">
        Compositor & Creative Developer
      </p>

      <button
        onClick={handlePlayDemo}
        className="flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 transition"
      >
        <Play size={18} fill="black" />
        Escuchar Demo
      </button>
    </main>
  );
}