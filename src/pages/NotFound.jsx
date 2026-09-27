import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import CTASection from '../components/CTASection'
import { useNoIndex } from '../hooks/usePageMeta'

export default function NotFound() {
  useNoIndex()

  return (
    <>
      <PageBanner
        crumbs={[{ label: 'הדף לא נמצא' }]}
        title="הדף"
        accent="לא נמצא"
      />

      <section className="content-section">
        <div className="content-container" dir="rtl">
          <h2>שגיאה 404</h2>
          <p>הדף שחיפשתם אינו קיים או שהכתובת השתנתה. ייתכן שהגעתם מקישור ישן.</p>
          <p>אפשר לחזור לדף הבית, לעבור לאחד מתחומי העיסוק בתפריט, או לפנות אלינו ישירות.</p>
          <div className="cta-btns not-found-actions">
            <Link to="/" className="btn-dark">לדף הבית</Link>
            <a href="/#contact" className="btn-outline-dark">צור קשר</a>
          </div>
        </div>
      </section>

      <CTASection title="רוצים לדבר עם עורך דין?" subtitle="ייעוץ ראשוני חינם — ללא עלות וללא התחייבות" />
    </>
  )
}
