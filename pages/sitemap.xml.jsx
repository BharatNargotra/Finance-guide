const SITE_URL = 'https://financebase.example.com'
const pages = [
  { url: '/', priority: '1.0', changefreq: 'weekly' },
  { url: '/investing-basics/', priority: '0.9', changefreq: 'monthly' },
  { url: '/stock-market/', priority: '0.9', changefreq: 'monthly' },
  { url: '/bonds-fixed-income/', priority: '0.9', changefreq: 'monthly' },
  { url: '/mutual-funds-etfs/', priority: '0.9', changefreq: 'monthly' },
  { url: '/personal-finance/', priority: '0.9', changefreq: 'monthly' },
  { url: '/retirement-planning/', priority: '0.8', changefreq: 'monthly' },
  { url: '/tax-strategies/', priority: '0.8', changefreq: 'monthly' },
  { url: '/risk-management/', priority: '0.8', changefreq: 'monthly' },
  { url: '/cryptocurrency/', priority: '0.7', changefreq: 'monthly' },
  { url: '/real-estate-investing/', priority: '0.8', changefreq: 'monthly' },
  { url: '/financial-glossary/', priority: '0.6', changefreq: 'yearly' },
]

function SitemapXML() {}
export default SitemapXML

export async function getServerSideProps({ res }) {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(p => `  <url>
    <loc>${SITE_URL}${p.url}</loc>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join('\n')}
</urlset>`
  res.setHeader('Content-Type', 'application/xml')
  res.write(sitemap)
  res.end()
  return { props: {} }
}
