export default function Sitemap() {
  return null;
}

export const getServerSideProps = async (ctx) => {
  const { locale } = ctx;

  ctx.res.setHeader("Content-Type", "text/xml");
  const xml = await generateSiteMap(locale);
  ctx.res.write(xml);
  ctx.res.end();

  return {
    props: {},
  };
};

async function generateSiteMap(locale) {
  let urls = [];

  try {
    const response = await fetch(
      `https://app.thisislam.net/api/menu_items/${locale}`
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch topics for locale ${locale}`);
    }
    const topics = await response.json();
    topics.data.forEach((topic) => {
      urls.push({
        loc: `https://thisislam.net/${locale}/${topic.slug}`,
        lastmod: new Date().toISOString().split("T")[0],
      });
    });
  } catch (error) {
    console.error(
      `Error fetching topics for locale ${locale}: ${error.message}`
    );
  }

  const urlEntries = urls
    .map(
      (url) => `
    <url>
      <loc>${url.loc}</loc>
      <lastmod>${url.lastmod}</lastmod>
    </url>
  `
    )
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urlEntries}
  </urlset>`;
}
