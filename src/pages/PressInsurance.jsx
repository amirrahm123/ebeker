import { useState } from 'react'
import useRevealOnScroll from '../hooks/useRevealOnScroll'
import PageBanner from '../components/PageBanner'
import CTASection from '../components/CTASection'
import ZoomViewer from '../components/ZoomViewer'

const images = [
  '01_dcd181_f5556a8462a5469fa41dcfe72a181f84~mv2.jpg',
  '02_dcd181_a39280f18b0040fc843753ba4d8b0437~mv2.jpg',
  '03_dcd181_d67d335f64484daf9e933049dbeabce9~mv2.jpg',
  '04_dcd181_633a8b94e173404f9c767a0102cdc048~mv2.jpg',
  '05_dcd181_1c28753e91c54dc2a50301ccaa3e2ccf~mv2.jpg',
  '06_dcd181_3707d8f05ef44267b5130f7505d0098c~mv2.jpg',
  '07_dcd181_9111a86889224e98b7f19f31312f0516~mv2.jpg',
  '08_dcd181_a1294dc64a0a42ddb6cae8027dcd10fe~mv2.jpg',
  '09_dcd181_98c91b2e1bcf4355b5bfe17d733b5a79~mv2.jpg',
  '10_dcd181_6cbcfdca4ceb4de69b2432561f21db42~mv2.jpg',
  '11_dcd181_ce960219839e4708b8569a6901de19f4~mv2.jpg',
  '12_dcd181_c64e05d3f5a442dd9f6f2189554e3861~mv2.jpg',
  '13_dcd181_312f7086d909405fbf408d39e3b7d72e~mv2.jpg',
  '14_dcd181_01f863f4f61b4ab59b35940fa8cb88ef~mv2.jpg',
  '15_dcd181_98ce75ceb1424dcebf10f811851b82bc~mv2.jpg',
  '16_dcd181_c5cfd38db56441828b295507042200c6~mv2.jpg',
  '17_dcd181_d817120f3f1346a2ba3bb0c8544a5327~mv2.jpg',
  '18_dcd181_fb950835dd49439d88756c910a1844f5~mv2.jpg',
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
              <div className="press-clipping" key={i} onClick={() => setLightbox(BASE + img)}>
                <div className="press-img-wrap">
                  <img src={BASE + img} alt={`כתבה בנושא ביטוח לאומי`} loading="lazy" />
                </div>
                <div className="press-card-body">
                  <span className="press-card-tag">ביטוח לאומי</span>
                  <div className="press-card-title">כתבה בנושא ביטוח לאומי #{i + 1}</div>
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
