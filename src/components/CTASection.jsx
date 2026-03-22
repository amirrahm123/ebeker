export default function CTASection({ title, subtitle }) {
  return (
    <section className="cta-section">
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <div className="cta-btns">
        <a href="/#contact" className="btn-dark">פנו אלינו עכשיו ←</a>
        <a href="tel:049001056" className="btn-outline-dark">📞 04-9001056</a>
      </div>
    </section>
  )
}
