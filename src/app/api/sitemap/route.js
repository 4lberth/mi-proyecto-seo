import { NextResponse } from "next/server";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://mi-proyecto-seo-gamma.vercel.app";

/* Demo: rutas dinámicas obtenidas de una “BBDD/CMS” */
async function getDynamicRoutes() {
  const posts = [
    { slug: "primer-post" },
    { slug: "segundo-post" },
  ];
  return posts.map((p) => `/blog/${p.slug}`);
}

export async function GET() {
  const staticRoutes = ["/", "/blog", "/contacto"];
  const dynamicRoutes = await getDynamicRoutes();
  const urls = [...staticRoutes, ...dynamicRoutes];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map((u) => `<url><loc>${BASE_URL}${u}</loc></url>`)
      .join("")}
  </urlset>`;

  return new NextResponse(xml, {
    headers: { "Content-Type": "application/xml" },
  });
}
