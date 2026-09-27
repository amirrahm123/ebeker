import { lazy } from 'react'
import { routesMeta } from './routes.meta'

/* Every file under src/pages is a lazily-loaded route chunk. The route table
   itself (paths, titles, descriptions) lives in routes.meta.js so Node scripts
   can read it too. To add a page: add the file + one entry in routes.meta.js. */
const pages = import.meta.glob('./pages/*.jsx')

export const routes = routesMeta.map(meta => {
  const loader = pages[`./pages/${meta.page}.jsx`]
  if (!loader) throw new Error(`routes.meta.js: no page file for "${meta.page}" (expected src/pages/${meta.page}.jsx)`)
  return { ...meta, Component: lazy(loader) }
})
