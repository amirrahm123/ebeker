import { site, CONSULT_PHRASE } from '../config/site'

/* Bottom CTA — boxed card on a light section, identical on every page. */
export default function CTASection() {
  return (
    <section className="cta-section">
      <div className="cta-card reveal">
        <h2 className="cta-card-heading">{CONSULT_PHRASE}</h2>
        <div className="cta-card-rule" aria-hidden="true"></div>
        <p className="cta-card-text">צרו עימנו קשר עוד היום ונשמח לסייע לכם לקבל את הפיצוי המקסימלי מהגורמים הרלוונטיים.</p>
        <div className="cta-card-btns">
          <a href="/#contact" className="cta-card-btn cta-card-btn-outline">פנו אלינו עכשיו ←</a>
          <a href={site.phones.office.href} className="cta-card-btn cta-card-btn-solid">📞 {site.phones.office.display}</a>
        </div>
      </div>
    </section>
  )
}
