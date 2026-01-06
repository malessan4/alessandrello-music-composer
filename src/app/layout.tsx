import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PlayerBar from "@/components/audio/PlayerBar";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Matias Alessandrello - Compositor y Productor Musical",
  description: "Portafolio de Matias Alessandrello, compositor y productor musical.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body className={inter.className}>
        {/* Contenido principal */}
        {children}

        {/* Nuestra barra persistente */}
        <PlayerBar />
      </body>
    </html>
  );
}