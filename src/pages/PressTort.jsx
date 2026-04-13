import { useState } from 'react'
import useRevealOnScroll from '../hooks/useRevealOnScroll'
import PageBanner from '../components/PageBanner'
import CTASection from '../components/CTASection'
import ZoomViewer from '../components/ZoomViewer'

const images = [
  '01_dcd181_04c73d6853ee4c34aa6db355bba3e575~mv2.jpg',
  '02_dcd181_304013a8411f44b2a67328cdc4c9dab6~mv2.jpg',
  '03_dcd181_93a7d41d5ed843ed9241a585cccd4ca7~mv2.jpg',
  '1.jpg',
  '1(2).jpg',
  '2.jpg',
  '3.jpg',
  '4.jpg',
  '5.jpg',
  '6.jpg',
  '7.jpg',
  '8.jpg',
  '9.jpg',
  '10.jpg',
  '11.jpg',
  '12.jpg',
  '13.jpg',
  '14.jpg',
  '15.jpg',
  '16.jpg',
  '17.jpg',
  '18.jpg',
  '19.jpg',
  '19 (2).jpg',
  '20.jpg',
  '21.jpg',
  '22.jpg',
  '23.jpg',
  '24.jpg',
  '25.jpg',
  '26.jpg',
  '27.jpg',
  '28.jpg',
  '29.jpg',
]

const BASE = '/pics/04_מהעיתונות_נזיקין_וביטוח/'

export default function PressTort() {
  useRevealOnScroll()
  const [lightbox, setLightbox] = useState(null)

  return (
    <>
      <PageBanner
        crumbs={[{ label: 'מהעיתונות', to: '#' }, { label: 'נזיקין וביטוח' }]}
        title="מהעיתונות"
        accent="נזיקין וביטוח"
      />

      <section className="content-section">
        <div className="content-container">
          <div className="press-grid reveal">
            {images.map((img, i) => (
              <div className="press-clipping" key={i} onClick={() => setLightbox(BASE + img)}>
                <div className="press-img-wrap">
                  <img src={BASE + img} alt={`כתבה בנושא נזיקין וביטוח`} loading="lazy" />
                </div>
                <div className="press-card-body">
                  <span className="press-card-tag">נזיקין וביטוח</span>
                  <div className="press-card-title">כתבה בנושא נזיקין וביטוח #{i + 1}</div>
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
