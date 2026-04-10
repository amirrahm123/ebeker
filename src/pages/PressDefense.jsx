import { useState } from 'react'
import useRevealOnScroll from '../hooks/useRevealOnScroll'
import PageBanner from '../components/PageBanner'
import CTASection from '../components/CTASection'
import ZoomViewer from '../components/ZoomViewer'

const images = [
  '01_dcd181_fb841f1cf79a404cac7f555193af5a63~mv2.jpg',
  '02_dcd181_7f27376b889d46d097bfb7456a291a33~mv2.jpg',
  '03_dcd181_d66d7bf1791240118efafc12ace231a5~mv2.jpg',
  '04_dcd181_09897de279d24e618ed6c0b2a48e9158~mv2.jpg',
  '05_dcd181_b036fecd0d714332ba69e5f85cac7a14~mv2.jpg',
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
              <div className="press-clipping" key={i} onClick={() => setLightbox(BASE + img)}>
                <div className="press-img-wrap">
                  <img src={BASE + img} alt={`כתבה בנושא משרד הביטחון`} loading="lazy" />
                </div>
                <div className="press-card-body">
                  <span className="press-card-tag">משרד הביטחון</span>
                  <div className="press-card-title">כתבה בנושא משרד הביטחון #{i + 1}</div>
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
