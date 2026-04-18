import { useState } from 'react'
import useRevealOnScroll from '../hooks/useRevealOnScroll'
import PageBanner from '../components/PageBanner'
import CTASection from '../components/CTASection'
import ZoomViewer from '../components/ZoomViewer'

const images = [
  { file: 'לקה באירוע מוחי בים והוכר כנפגע עבודה.webp', title: 'לקה באירוע מוחי בים והוכר כנפגע עבודה' },
  { file: 'תעוקת חזה הוכרה כפגיעה בעבודה. שנת 2011.webp', title: 'תעוקת חזה הוכרה כפגיעה בעבודה' },
  { file: 'ההתרגשות בעקבות מציאת המסמך הסודי השפיעה על הלב. שנת 2011.webp', title: 'ההתרגשות בעקבות מציאת המסמך הסודי השפיעה על הלב' },
  { file: 'העד התנהג לא יפה, המוסד לביטוח לאומי ישלם.webp', title: 'העד התנהג לא יפה, המוסד לביטוח לאומי ישלם' },
  { file: 'הועדה פעלה בחוסר סמכות.webp', title: 'הועדה פעלה בחוסר סמכות' },
  { file: 'חטף התקף לב בזמן ויכוח.webp', title: 'חטף התקף לב בזמן ויכוח' },
  { file: 'האם התקף לב שאירע בעבודה, הוא תאונת עבודה שנת 2011.webp', title: 'האם התקף לב שאירע בעבודה הוא תאונת עבודה' },
  { file: 'סחב ארגזים כבדים והוכר כנפגע עבודה.webp', title: 'סחב ארגזים כבדים והוכר כנפגע עבודה' },
  { file: 'עובד העירייה נעלב מהמנהלת ויוכר כנפגע תאונת עבודה. שנת 2009.webp', title: 'עובד העירייה נעלב מהמנהלת ויוכר כנפגע תאונת עבודה' },
  { file: 'בית המשפט- מנהל השוק חלה לאחר שהותקף מילולית. שנת 2008.webp', title: 'בית המשפט: מנהל השוק חלה לאחר שהותקף מילולית' },
  { file: 'נפל עליה קלסר, קיבלה מענק מהביטוח הלאומי.webp', title: 'נפל עליה קלסר, קיבלה מענק מהביטוח הלאומי' },
  { file: 'עובד עירייה שהוחלט להופכו למטאטא רחובות יוכר כנפגע תאונת עבודה. שנת 2009.webp', title: 'עובד עירייה שהוחלט להופכו למטאטא רחובות יוכר כנפגע תאונת עבודה' },
  { file: 'בית הדין לעבודה הכיר בליקוי שמיעה תאונת עבודה. שנת 2008.webp', title: 'בית הדין לעבודה הכיר בליקוי שמיעה תאונת עבודה' },
  { file: 'מתקין אזעקות הוכר כנפגע במחלה מקצועית.webp', title: 'מתקין אזעקות הוכר כנפגע במחלה מקצועית' },
  { file: 'בית המשפט קבע- יש קשר בין אוטם שריר הלב לעבודה. שנת 2008.webp', title: 'בית המשפט קבע: יש קשר בין אוטם שריר הלב לעבודה' },
  { file: 'הוכר כנפגע עבודה למרות שהתנדב. שנת 2009.webp', title: 'הוכר כנפגע עבודה למרות שהתנדב' },
  { file: 'מס ההכנסה יחזיר 770 אלף שקלים 2011.webp', title: 'מס ההכנסה יחזיר 770 אלף שקלים' },
  { file: 'נפגע בדרכו לטפל בתאונה אחרת, ויפוצה 2009.webp', title: 'נפגע בדרכו לטפל בתאונה אחרת ויפוצה' },
]

const BASE = '/pics/05_מהעיתונות_ביטוח_לאומי/'

export default function PressInsurance() {
  useRevealOnScroll()
  const [lightbox, setLightbox] = useState(null)

  return (
    <>
      <PageBanner
        crumbs={[{ label: 'מהעיתונות', to: '#' }, { label: 'ביטוח לאומי' }]}
        title="מהעיתונות"
        accent="ביטוח לאומי"
      />

      <section className="content-section">
        <div className="content-container">
          <div className="press-grid reveal">
            {images.map((img, i) => (
              <div className="press-clipping" key={i} onClick={() => setLightbox(BASE + img.file)}>
                <div className="press-img-wrap">
                  <img src={BASE + img.file} alt={img.title} loading="lazy" />
                </div>
                <div className="press-card-body">
                  <span className="press-card-tag">ביטוח לאומי</span>
                  <div className="press-card-title">{img.title}</div>
                  <span className="press-card-link">צפה בכתבה &#8592;</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="רוצים לדבר עם עורך דין?" subtitle="ייעוץ ראשוני חינם — ללא עלות וללא התחייבות" />

      {lightbox && <ZoomViewer src={lightbox} onClose={() => setLightbox(null)} />}
    </>
  )
}
