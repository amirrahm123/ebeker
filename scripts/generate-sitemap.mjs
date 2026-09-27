/**
 * Writes public/sitemap.xml and public/robots.txt from the route table.
 * Runs automatically before every build ("prebuild" in package.json), so the
 * sitemap can never go stale. Run by hand: node scripts/generate-sitemap.mjs
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { routesMeta } from '../src/routes.meta.js'
import { site } from '../src/config/site.js'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const publicDir = path.join(root, 'public')
const today = new Date().toISOString().slice(0, 10)

const urls = routesMeta
  .filter(r => r.path !== '*' && !r.noindex)
  .map(r => {
    const loc = r.path === '' ? `${site.origin}/` : `${site.origin}/${r.path}`
    const priority = (r.priority ?? 0.6).toFixed(1)
    return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${priority}</priority>\n  </url>`
  })

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`

const robots = `User-agent: *\nAllow: /\n\nSitemap: ${site.origin}/sitemap.xml\n`

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap)
fs.writeFileSync(path.join(publicDir, 'robots.txt'), robots)
console.log(`sitemap: ${urls.length} URLs → public/sitemap.xml, public/robots.txt`)
