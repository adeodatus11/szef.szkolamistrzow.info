const pages = [
  "",
  "baza-wiedzy/",
  "kalendarz/",
  "dokumenty/umowy/",
  "dokumenty/ubezpieczenia/",
  "dokumenty/pracodawcy/",
  "programy-nauczania/",
  "zrodla/",
  "kontakt/"
];
const lastmod = "2026-05-22";

export function GET() {
  const base = "https://szef.szkolamistrzow.info/";
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((page) => `  <url><loc>${base}${page}</loc><lastmod>${lastmod}</lastmod><changefreq>weekly</changefreq></url>`).join("\n")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
}
