import Head from 'next/head';

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Blog – Mi Sitio Optimizado</title>
        <meta name="description" content="Artículos sobre SEO y rendimiento con Next.js." />
        <meta property="og:title" content="Blog – Mi Sitio Optimizado" />
        <meta property="og:description" content="Artículos sobre SEO y rendimiento con Next.js." />
        <meta property="og:image" content="/images/seo-image.png" />
        <meta property="og:type" content="article" />
      </Head>

      <main>
        <h1>Blog</h1>
        <p>Listado de artículos…</p>
      </main>
    </>
  );
}
