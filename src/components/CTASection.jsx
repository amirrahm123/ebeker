import { site, CONSULT_PHRASE } from '../config/site'

/* Bottom CTA. The consultation line is fixed here so pages can't drift.
   With a topic title: title + consultation line. Without: the consultation
   line alone is the heading. */
export default function CTASection({ title }) {
  return (
    <section className="cta-section">
      {title ? (
        <>
          <h2>{title}</h2>
          <p>{CONSULT_PHRASE}</p>
        </>
      ) : (
        <h2 className="cta-title-solo">{CONSULT_PHRASE}</h2>
      )}
      <div className="cta-btns">
        <a href="/#contact" className="btn-dark">פנו אלינו עכשיו ←</a>
        <a href={site.phones.office.href} className="btn-outline-dark">📞 {site.phones.office.display}</a>
      </div>
    </section>
  )
}
