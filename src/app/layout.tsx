import type { Metadata } from "next";
import { Inter, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

/* ── Fuentes optimizadas ─────────────────────────────────────── */
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

/* ── Metadata global ─────────────────────────────────────────── */
export const metadata: Metadata = {
  /*  👈  Next.js usará esta base para convertir rutas relativas
          (p. ej. /images/seo-image.png) en URLs absolutas            */
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://mi-proyecto-seo-gamma.vercel.app"
  ),

  title: "Mi Sitio Optimizado",
  description: "Aprende sobre optimización SEO y rendimiento en Next.js.",
  other: {
    "google-site-verification": "94he0uiWzNrQ5l6gfVboRu_yl7UlIy_M348WfnfVhW8",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body
        className={`${inter.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
