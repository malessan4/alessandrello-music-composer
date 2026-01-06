import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PlayerBar from "@/components/Audio/PlayerBar";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Matias Alessandrello - Compositor y Productor Musical",
  description: "Portafolio de Matias Alessandrello, compositor y productor musical.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="dark">
      <body className={`${inter.className} bg-neutral-950 text-neutral-200`}>
        <main className="min-h-screen pb-24">
          {/* pb-24 da espacio para que el player no tape contenido */}
          {children}
        </main>

        {/* El reproductor vive aquí, fuera del renderizado de las páginas */}
        <PlayerBar />
      </body>
    </html>
  );
}
