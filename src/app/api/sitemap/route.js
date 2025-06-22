import { NextResponse } from "next/server";

/* Dominio base: en producción lee la variable definida en Vercel */
const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://mi-proyecto-seo-gamma.vercel.app";

/* ###############  Fuente dinámica (CMS / BBDD) ################ */
async function getDynamicRoutes() {
  /* Ejemplo estático; aquí traerías tus datos reales */
  const posts = [
    { slug: "primer-post", updated: "2025-06-20" },
    { slug: "segundo-post", updated: "2025-06-21" },
  ];
  return posts.map((p) => ({
    path: `/blog/${p.slug}`,
    lastmod: p.updated,
  }));
}

/* ###############  Construcción del XML ######################## */
function buildXML(urlObjects) {
  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urlObjects
      .map(
        ({ path, lastmod }) => `<url>
          <loc>${BASE_URL}${path}</loc>
          <lastmod>${lastmod}</lastmod>
        </url>`
      )
      .join("")}
  </urlset>`;
}

/* ────────────  GET  ─────────────────────────────────────────── */
export async function GET() {
  /* Rutas fijas */
  const staticRoutes = [
    { path: "/", lastmod: new Date().toISOString() },
    { path: "/blog", lastmod: new Date().toISOString() },
    { path: "/contacto", lastmod: new Date().toISOString() },
  ];

  /* Rutas dinámicas */
  const dynamicRoutes = await getDynamicRoutes();

  /* XML final */
  const xml = buildXML([...staticRoutes, ...dynamicRoutes]);

  return new NextResponse(xml, {
    headers: { "Content-Type": "application/xml" },
  });
}

/* ────────────  HEAD  (lo primero que hace Search Console) ───── */
export async function HEAD() {
  return new NextResponse(null, {
    status: 200,
    headers: { "Content-Type": "application/xml" },
  });
}