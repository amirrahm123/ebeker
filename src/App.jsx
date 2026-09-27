import { useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Layout from './components/Layout'
import { routes } from './routes'
import { site } from './config/site'

function RouteTracker() {
  const location = useLocation()
  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', site.analytics.gaMeasurementId, {
        page_path: location.pathname + location.search,
      })
    }
  }, [location])
  return null
}

export default function App() {
  return (
    <>
      <RouteTracker />
      <Routes>
        <Route element={<Layout />}>
          {routes.map(({ path, Component }) => (
            <Route key={path} index={path === ''} path={path === '' ? undefined : path} element={<Component />} />
          ))}
          <Route path="team" element={<Navigate to="/legal-team" replace />} />
        </Route>
      </Routes>
    </>
  )
}
