export async function GET() {
  const baseUrl = 'https://devnazarchuk.vercel.app';
  const routes = ['', '/about', '/experience', '/projects', '/contact'];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${routes
      .map(
        (route) => `
      <url>
        <loc>${baseUrl}${route}</loc>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
      </url>
    `
      )
      .join('')}
  </urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
} 