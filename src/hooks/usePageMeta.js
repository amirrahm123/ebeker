import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { findRouteMeta } from '../routes.meta'
import { site, pageTitle } from '../config/site'

function upsertMeta(selector, attrs) {
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement('meta')
    document.head.appendChild(el)
  }
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v))
  return el
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

/**
 * Per-route <head> metadata for the SPA: title, description, canonical and
 * Open Graph tags. Titles/descriptions come from routes.meta.js, so a new page
 * gets its SEO tags by adding one entry there. Call once, from Layout.
 */
export default function usePageMeta() {
  const { pathname } = useLocation()

  useEffect(() => {
    const meta = findRouteMeta(pathname)
    const title = pageTitle(meta?.title)
    const description = meta?.description || ''
    const url = site.origin + (pathname === '/' ? '/' : pathname.replace(/\/+$/, ''))

    document.title = title
    upsertMeta('meta[name="description"]', { name: 'description', content: description })
    upsertLink('canonical', url)
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: title })
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: description })
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: url })
  }, [pathname])
}

/** Adds <meta name="robots" content="noindex"> while the calling component is mounted. */
export function useNoIndex() {
  useEffect(() => {
    const el = upsertMeta('meta[name="robots"]', { name: 'robots', content: 'noindex' })
    return () => { el.remove() }
  }, [])
}
