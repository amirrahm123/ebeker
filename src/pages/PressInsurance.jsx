import { useState } from 'react'
import useRevealOnScroll from '../hooks/useRevealOnScroll'
import PageBanner from '../components/PageBanner'
import CTASection from '../components/CTASection'
import ZoomViewer from '../components/ZoomViewer'

const images = [
  { file: 'בית הדין לעבודה הכיר בליקוי שמיעה תאונת עבודה. שנת 2008.jpg', title: 'בית הדין לעבודה הכיר בליקוי שמיעה תאונת עבודה' },
  { file: 'בית המשפט קבע- יש קשר בין אוטם שריר הלב לעבודה. שנת 2008.jpg', title: 'בית המשפט קבע: יש קשר בין אוטם שריר הלב לעבודה' },
  { file: 'בית המשפט- מנהל השוק חלה לאחר שהותקף מילולית. שנת 2008.jpg', title: 'בית המשפט: מנהל השוק חלה לאחר שהותקף מילולית' },
  { file: 'האם התקף לב שאירע בעבודה, הוא תאונת עבודה שנת 2011.jpg', title: 'האם התקף לב שאירע בעבודה הוא תאונת עבודה' },
  { file: 'ההתרגשות בעקבות מציאת המסמך הסודי השפיעה על הלב. שנת 2011.jpg', title: 'ההתרגשות בעקבות מציאת המסמך הסודי השפיעה על הלב' },
  { file: 'הוכר כנפגע עבודה למרות שהתנדב. שנת 2009.jpg', title: 'הוכר כנפגע עבודה למרות שהתנדב' },
  { file: 'הועדה פעלה בחוסר סמכות.jpg', title: 'הועדה פעלה בחוסר סמכות' },
  { file: 'העד התנהג לא יפה, המוסד לביטוח לאומי ישלם.jpg', title: 'העד התנהג לא יפה, המוסד לביטוח לאומי ישלם' },
  { file: 'חטף התקף לב בזמן ויכוח.jpg', title: 'חטף התקף לב בזמן ויכוח' },
  { file: 'לקה באירוע מוחי בים והוכר כנפגע עבודה.jpg', title: 'לקה באירוע מוחי בים והוכר כנפגע עבודה' },
  { file: 'מס ההכנסה יחזיר 770 אלף שקלים 2011.jpg', title: 'מס ההכנסה יחזיר 770 אלף שקלים' },
  { file: 'מתקין אזעקות הוכר כנפגע במחלה מקצועית.jpg', title: 'מתקין אזעקות הוכר כנפגע במחלה מקצועית' },
  { file: 'נפגע בדרכו לטפל בתאונה אחרת, ויפוצה 2009.jpg', title: 'נפגע בדרכו לטפל בתאונה אחרת ויפוצה' },
  { file: 'נפל עליה קלסר, קיבלה מענק מהביטוח הלאומי.jpg', title: 'נפל עליה קלסר, קיבלה מענק מהביטוח הלאומי' },
  { file: 'סחב ארגזים כבדים והוכר כנפגע עבודה.jpg', title: 'סחב ארגזים כבדים והוכר כנפגע עבודה' },
  { file: 'עובד העירייה נעלב מהמנהלת ויוכר כנפגע תאונת עבודה. שנת 2009.jpg', title: 'עובד העירייה נעלב מהמנהלת ויוכר כנפגע תאונת עבודה' },
  { file: 'עובד עירייה שהוחלט להופכו למטאטא רחובות יוכר כנפגע תאונת עבודה. שנת 2009.jpg', title: 'עובד עירייה שהוחלט להופכו למטאטא רחובות יוכר כנפגע תאונת עבודה' },
  { file: 'תעוקת חזה הוכרה כפגיעה בעבודה. שנת 2011.jpg', title: 'תעוקת חזה הוכרה כפגיעה בעבודה' },
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
