import { useState } from 'react'
import useRevealOnScroll from '../hooks/useRevealOnScroll'
import PageBanner from '../components/PageBanner'
import CTASection from '../components/CTASection'
import ZoomViewer from '../components/ZoomViewer'

const images = [
  '01_dcd181_91857ce4d795424583b5dbd716ae1913~mv2.jpeg',
  '02_dcd181_d9b406e9355746968c2e1702db7fa421~mv2.jpg',
  '03_dcd181_29a834441f84489a81c9ac880e543fe2~mv2.jpg',
  '04_dcd181_f394df1abbe24bbb895404cdaf843860~mv2.jpg',
  '05_dcd181_90ad3598d57741dabd5d373b20b9a167~mv2.jpg',
  '06_dcd181_b551607ff94c43dc8e2e5a52b5383e73~mv2.jpg',
  '07_dcd181_3befdf85e2494719a21b63336a2d5859~mv2.jpg',
  '08_dcd181_6c3a513ea6dd4003b250c0fb4a7e6346~mv2.jpg',
  '09_dcd181_12cd42fc14b04764a82bf7886f314518~mv2.jpg',
  '10_dcd181_d81d9fbd6ba64dee950caeaa8a75aac1~mv2.jpg',
  '11_dcd181_917614b4d3884ab1976d5dd7ad0ac266~mv2.jpg',
  '12_dcd181_d85f064175bb495f994332ad321260ae~mv2.jpg',
  '13_dcd181_307bfe2b6c6342bd958fce0c8f987026~mv2.jpg',
  '14_dcd181_48e0ce9b4523480783c2ea48d768e0eb~mv2.jpg',
  '15_dcd181_e0b699b942984b0c98e3edb95fdcc3df~mv2.jpg',
  '16_dcd181_8b7c729239f543fdb54f2b25d0be047b~mv2.jpg',
  '17_dcd181_7f43473e711644e19b8cd974936e9b2d~mv2.jpg',
  '18_dcd181_0344c382ea7d47b0897a54bfc75320bd~mv2.jpg',
  '19_dcd181_5ca09f3890f442ce82d6c1dbe00de490~mv2.jpg',
  '20_dcd181_4d44af2c2b994aebb474b0906623d992~mv2.jpg',
  '21_dcd181_d0bfa693ef3442eea4a17581c000376d~mv2.jpg',
  '22_dcd181_c4522e531e054e1bb0acec966868c126~mv2.jpg',
  '23_dcd181_fe4dfa19d0944aeb95923fe0ed8bfaca~mv2.jpg',
  '24_dcd181_04b93bb34df4441eb533b2bdf3a95d59~mv2.jpg',
  '25_dcd181_74009429c1a94deaafd661641fd7130c~mv2.jpg',
]

const BASE = '/pics/תאונות רכב/'

export default function PressCarAccidents() {
  useRevealOnScroll()
  const [lightbox, setLightbox] = useState(null)

  return (
    <>
      <PageBanner
        crumbs={[{ label: 'מהעיתונות', to: '#' }, { label: 'תאונות רכב' }]}
        title="מהעיתונות"
        accent="תאונות רכב"
      />

      <section className="content-section">
        <div className="content-container">
          <div className="press-grid reveal">
            {images.map((img, i) => (
              <div className="press-clipping" key={i} onClick={() => setLightbox(BASE + img)}>
                <div className="press-img-wrap">
                  <img src={BASE + img} alt={`כתבה בנושא תאונות רכב`} loading="lazy" />
                </div>
                <div className="press-card-body">
                  <span className="press-card-tag">תאונות רכב</span>
                  <div className="press-card-title">כתבה בנושא תאונות רכב #{i + 1}</div>
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
