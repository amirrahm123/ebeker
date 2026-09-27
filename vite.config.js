import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { site } from './src/config/site.js'

/**
 * Fills index.html from src/config/site.js so the static <head> (OG defaults,
 * JSON-LD) shares one source of truth with the app. Placeholders look like
 * {{site.name}} / {{site.address.full}}; {{jsonld}} injects the LegalService block.
 */
function siteHtmlPlugin() {
  const get = (path) => path.split('.').reduce((o, k) => (o == null ? o : o[k]), { site })
  const jsonld = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: site.legalName,
    url: site.origin + '/',
    logo: site.origin + site.logo,
    image: site.origin + site.ogImage,
    telephone: site.phones.office.e164,
    faxNumber: site.phones.fax.e164,
    email: site.email,
    founder: { '@type': 'Person', name: site.founder },
    foundingDate: String(site.foundedYear),
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    sameAs: [site.facebook],
  }
  return {
    name: 'site-html',
    transformIndexHtml(html) {
      return html
        .replace(/\{\{jsonld\}\}/g, `<script type="application/ld+json">${JSON.stringify(jsonld)}</script>`)
        .replace(/\{\{([\w.]+)\}\}/g, (m, key) => {
          const v = get(key)
          if (v == null) throw new Error(`index.html: unknown placeholder ${m}`)
          return String(v)
        })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), siteHtmlPlugin()],
})
