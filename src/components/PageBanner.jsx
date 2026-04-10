import { Link } from 'react-router-dom'

export default function PageBanner({ crumbs = [], title, accent }) {
  return (
    <section className="page-banner" dir="rtl">
      <span className="page-banner-corner page-banner-corner-tl" aria-hidden="true" />
      <span className="page-banner-corner page-banner-corner-tr" aria-hidden="true" />
      <span className="page-banner-corner page-banner-corner-bl" aria-hidden="true" />
      <span className="page-banner-corner page-banner-corner-br" aria-hidden="true" />

      <div className="page-banner-content">
        <nav className="page-banner-breadcrumb" aria-label="breadcrumb">
          <Link to="/">דף הבית</Link>
          {crumbs.map((c, i) => (
            <span key={i}>
              <span className="sep"> / </span>
              {c.to ? <Link to={c.to}>{c.label}</Link> : <span className="current">{c.label}</span>}
            </span>
          ))}
        </nav>
        <h1 className="page-banner-title">
          {title}
          {accent && <> <span className="accent">{accent}</span></>}
        </h1>
        <div className="page-banner-divider" aria-hidden="true"></div>
      </div>
    </section>
  )
}
