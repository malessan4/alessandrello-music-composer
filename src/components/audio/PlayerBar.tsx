"use client"; // Necesario porque usa hooks y estado del navegador

import { useEffect, useRef } from "react";
import { usePlayerStore } from "@/store/usePlayerStore";
import { Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react";

export default function PlayerBar() {
    // 1. Conectamos con nuestro cerebro (Zustand)
    const { isPlaying, currentTrack, togglePlay, play, pause } = usePlayerStore();

    // 2. Referencia al elemento HTML <audio> invisible
    const audioRef = useRef<HTMLAudioElement>(null);

    // 3. Efecto: Cuando cambia el estado 'isPlaying', le damos play/pause al audio real
    useEffect(() => {
        if (isPlaying) {
            audioRef.current?.play();
        } else {
            audioRef.current?.pause();
        }
    }, [isPlaying]);

    // 4. Efecto: Cuando cambia el track, cargamos y reproducimos
    useEffect(() => {
        if (currentTrack && audioRef.current) {
            audioRef.current.src = currentTrack.url;
            audioRef.current.play();
        }
    }, [currentTrack]);

    // Si no hay track seleccionado, no mostramos la barra (o podrías mostrarla desactivada)
    if (!currentTrack) return null;

    return (
        <div className="fixed bottom-0 left-0 w-full h-20 bg-neutral-900/80 backdrop-blur-md border-t border-white/10 z-50 px-4 md:px-8 flex items-center justify-between transition-all duration-300">

            {/* SECCIÓN IZQUIERDA: Info del Track */}
            <div className="flex flex-col w-1/3">
                <span className="text-white font-medium text-sm md:text-base truncate">
                    {currentTrack.title}
                </span>
                <span className="text-neutral-400 text-xs uppercase tracking-wider">
                    Reproduciendo ahora
                </span>
            </div>

            {/* SECCIÓN CENTRAL: Controles */}
            <div className="flex items-center gap-6 w-1/3 justify-center">
                <button className="text-neutral-400 hover:text-white transition">
                    <SkipBack size={20} />
                </button>

                <button
                    onClick={togglePlay}
                    className="bg-white text-black rounded-full p-3 hover:scale-105 transition active:scale-95 shadow-lg shadow-white/10"
                >
                    {isPlaying ? <Pause size={20} fill="black" /> : <Play size={20} fill="black" className="ml-1" />}
                </button>

                <button className="text-neutral-400 hover:text-white transition">
                    <SkipForward size={20} />
                </button>
            </div>

            {/* SECCIÓN DERECHA: Volumen / Extras */}
            <div className="flex items-center justify-end gap-4 w-1/3">
                <Volume2 size={18} className="text-neutral-400" />
                <div className="w-24 h-1 bg-neutral-700 rounded-full overflow-hidden">
                    <div className="h-full w-2/3 bg-white rounded-full" /> {/* Barra de volumen fake por ahora */}
                </div>
            </div>

            {/* EL AUDIO INVISIBLE (El motor real) */}
            <audio
                ref={audioRef}
                onEnded={() => pause()} // Cuando termina, el estado vuelve a pausa
            />
        </div>
    );
}