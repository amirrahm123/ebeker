import { useState } from 'react'
import useRevealOnScroll from '../hooks/useRevealOnScroll'
import PageBanner from '../components/PageBanner'
import CTASection from '../components/CTASection'
import ZoomViewer from '../components/ZoomViewer'

/* White posts — Facebook text-based recommendations (white background) */
const whitePosts = [
  '01_dcd181_dd4a5c2ccc8c4215809771d366445164~mv2.jpg',
  '02_dcd181_5790ab61a1ba41b3ae6ebf376396058f~mv2.jpg',
  '03_dcd181_02be190de73345cfa51199a5394bd8e8~mv2.jpg',
  '04_dcd181_88e91fab188f43e89e9b8fb1efac1acb~mv2.jpg',
  '05_dcd181_330c353ff0394f3b8506603461bb5c5a~mv2.jpg',
  '06_dcd181_5dec56545d7043c9a20f9ab3afeb078a~mv2.jpg',
  '07_dcd181_26d2968b7e0348c79d4201bdf200ce86~mv2.jpg',
  '08_dcd181_5b28225293d64c549d4adf3c46414cb5~mv2.jpg',
  '09_dcd181_7485546bce8e4dc9b8df9bb70a5e6071~mv2.jpg',
  '10_dcd181_b0250bf7d5ce4649b8c23ebc6537a30e~mv2.jpg',
  '11_dcd181_949f61a552e74d168f1c53aa0ea0a858~mv2.jpg',
  '12_dcd181_99693c81ba98494486d4be3a20986958~mv2.jpg',
  '13_dcd181_86709cd50aeb4685be4b5b5120035a5e~mv2.jpg',
  '14_dcd181_8e6eba445d32481eb66d5c8e7bd43db9~mv2.jpg',
]

/* Physical items — plaques, trophies, letters, decorative cards */
const physicalItems = [
  '15_dcd181_49512e750fec49f6a66110a670045d95~mv2.jpg',
  '16_dcd181_87ca8465dc8346ed85e95b86903c5f68~mv2.jpg',
  '17_dcd181_783aecde627c4caaacf6d0110432bf1a~mv2.jpg',
  '18_dcd181_92f7f95076564469960fddd4f1fd36c7~mv2.jpg',
  '19_dcd181_9e2b261bd64b4cf1aef4c844e0027271~mv2.jpg',
  '20_dcd181_668ebd71391f4139aae04c776d6fe32b~mv2.jpg',
  '21_dcd181_626707f388444f698ca7135b46c7df32~mv2.jpg',
  '22_dcd181_1d9a69d09da448138eececfbc91f9601~mv2.jpg',
  '23_dcd181_56847c6f168d4a97bf23f4c91c684e12~mv2.jpg',
  '24_dcd181_c62b70ae974c43ec91c1923c28bad615~mv2.jpg',
  '25_dcd181_c2db19f9339e48ef9b425069cb64d8a5~mv2.jpg',
  '26_dcd181_fed54a5f29a64c6fb87b7cb28218d551~mv2.jpg',
  '27_dcd181_36870f7098f74bb797e005f679e5f0da~mv2.jpg',
  '28_dcd181_29adc6b04e9944f298f8c23d402d664a~mv2.jpg',
  '29_dcd181_13054d8f0139444ab66c808f3730be7c~mv2.jpg',
  '30_dcd181_168fe2f51f6d4676ab09c7c84c4f056d~mv2.jpg',
  '31_dcd181_38ab6f92a8e34e27b5afa945f771b8cf~mv2.jpg',
]

const BASE = '/pics/07_ממליצים/'

export default function Recommendations() {
  useRevealOnScroll()
  const [lightbox, setLightbox] = useState(null)

  return (
    <>
      <PageBanner
        crumbs={[{ label: 'ממליצים עלינו' }]}
        title="ממליצים"
        accent="עלינו"
      />

      <section className="section">
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 className="section-title">מכתבי תודה והמלצות</h2>
            <p className="section-sub" style={{ marginTop: 16 }}>לחצו על כל המלצה להגדלה</p>
          </div>
          <div className="testimonials-grid stagger-reveal">
            <div className="testimonial-clipping reveal" style={{ cursor: 'default' }} onClick={(e) => e.stopPropagation()}>
              <video
                src="/videos/client-recommendation.mp4"
                poster="/pics/client-recommendation-thumb.jpg"
                controls
                preload="metadata"
                playsInline
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
            {whitePosts.map((img, i) => (
              <div className="testimonial-clipping reveal" key={`w${i}`} onClick={() => setLightbox(BASE + img)}>
                <img src={BASE + img} alt={`המלצת לקוח ${String(i + 1).padStart(2, '0')}`} loading="lazy" />
              </div>
            ))}
          </div>
          <div className="testimonials-grid stagger-reveal" style={{ marginTop: 0 }}>
            {physicalItems.map((img, i) => (
              <div className="testimonial-clipping reveal" key={`p${i}`} onClick={() => setLightbox(BASE + img)}>
                <img src={BASE + img} alt={`מכתב תודה ${String(i + 1).padStart(2, '0')}`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="רוצים לדבר עם עורך דין?" subtitle="ייעוץ ראשוני חינם — ללא עלות וללא התחייבות" />

      {lightbox && (
        <ZoomViewer src={lightbox} onClose={() => setLightbox(null)} />
      )}
    </>
  )
}
