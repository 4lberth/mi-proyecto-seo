// src/app/page.tsx

export const metadata = {
  title: 'Mi Sitio Optimizado - Home',
  description: 'Aprende sobre optimización SEO y rendimiento en Next.js.',
  keywords: 'Next.js, SEO, optimización web',
  openGraph: {
    title: 'Mi Sitio Optimizado',
    description: 'Descubre técnicas avanzadas para mejorar tu web con Next.js.',
    images: ['/images/seo-image.png'],
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <main>
      <h1>Bienvenido a mi página optimizada</h1>
      <p>Aprende cómo mejorar el rendimiento y SEO en Next.js.</p>
    </main>
  );
}
