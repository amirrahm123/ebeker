import { site } from '../config/site'

export default function CTASection({ title, subtitle }) {
  return (
    <section className="cta-section">
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <div className="cta-btns">
        <a href="/#contact" className="btn-dark">פנו אלינו עכשיו ←</a>
        <a href={site.phones.office.href} className="btn-outline-dark">📞 {site.phones.office.display}</a>
      </div>
    </section>
  )
}
