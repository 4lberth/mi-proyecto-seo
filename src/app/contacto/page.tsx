import Head from 'next/head';

export default function ContactoPage() {
  return (
    <>
      <Head>
        <title>Contacto – Mi Sitio Optimizado</title>
        <meta name="description" content="Envíanos tus preguntas sobre SEO y rendimiento." />
        <meta property="og:title" content="Contacto – Mi Sitio Optimizado" />
        <meta property="og:description" content="Envíanos tus preguntas sobre SEO y rendimiento." />
        <meta property="og:image" content="/images/seo-image.png" />
        <meta property="og:type" content="website" />
      </Head>

      <main>
        <h1>Contacto</h1>
        <p>Formulario o datos de contacto…</p>
      </main>
    </>
  );
}
