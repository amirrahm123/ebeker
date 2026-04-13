import { useState } from 'react'
import useRevealOnScroll from '../hooks/useRevealOnScroll'
import PageBanner from '../components/PageBanner'
import CTASection from '../components/CTASection'
import ZoomViewer from '../components/ZoomViewer'

const images = [
  { file: 'בן 26 יוכר כנכה צהל. 2008.jpg', title: 'בן 26 יוכר כנכה צה"ל' },
  { file: 'חייל מילואים שנפגע במבצע עמוד ענן הוכר כנכה צהל.jpg', title: 'חייל מילואים שנפגע במבצע עמוד ענן הוכר כנכה צה"ל' },
  { file: 'כאבי הגב של העוד הוכרו כתאונת עבודה.jpg', title: 'כאבי הגב של העובד הוכרו כתאונת עבודה' },
  { file: 'קצין משטרה בכיר יוכר כנפגע של משרד הביטח.jpg', title: 'קצין משטרה בכיר יוכר כנפגע של משרד הביטחון' },
  { file: 'ראה גופות שרופות במלחמה ומבקש שיכירו בו כנכה.jpg', title: 'ראה גופות שרופות במלחמה ומבקש שיכירו בו כנכה' },
]

const BASE = '/pics/06_מהעיתונות_משרד_הביטחון/'

export default function PressDefense() {
  useRevealOnScroll()
  const [lightbox, setLightbox] = useState(null)

  return (
    <>
      <PageBanner
        crumbs={[{ label: 'מהעיתונות', to: '#' }, { label: 'משרד הביטחון' }]}
        title="מהעיתונות"
        accent="משרד הביטחון"
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
                  <span className="press-card-tag">משרד הביטחון</span>
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
