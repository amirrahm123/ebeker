import { useState } from 'react'
import { Link } from 'react-router-dom'
import useRevealOnScroll from '../hooks/useRevealOnScroll'
import Breadcrumb from '../components/Breadcrumb'
import CTASection from '../components/CTASection'
import ZoomViewer from '../components/ZoomViewer'

const images = [
  '01_dcd181_04c73d6853ee4c34aa6db355bba3e575~mv2.jpg',
  '02_dcd181_304013a8411f44b2a67328cdc4c9dab6~mv2.jpg',
  '03_dcd181_93a7d41d5ed843ed9241a585cccd4ca7~mv2.jpg',
  '04_dcd181_982a0cbb2465448ba35cede73eef1b48~mv2.jpg',
  '05_dcd181_3b92bddcd29449c6a39adccf27efd4a1~mv2.jpg',
  '06_dcd181_18274f6176374dc29a25a1310ed34714~mv2.jpg',
  '07_dcd181_5c26f459c16343ffa08060424597f737~mv2.jpg',
  '08_dcd181_4d2ab777e932460ebaed62153faa7c92~mv2.jpg',
  '09_dcd181_829a70eae9c741fe97638e7e6540e4ac~mv2.jpg',
  '10_dcd181_55e8e786aaa24dc3b4d6694312c720b7~mv2.jpg',
  '11_dcd181_50b8b0918f904f60b9c826c89d6f3968~mv2.jpg',
  '12_dcd181_cbb6104a199243b880d11add02e4ae91~mv2.jpg',
  '13_dcd181_8752e4f40d9f452bac8be75281469279~mv2.jpg',
  '14_dcd181_798e90de2325492da8d99578ac73339f~mv2.jpg',
  '15_dcd181_60e00c2d5d694b5990b65c822e0aa74a~mv2.jpg',
  '16_dcd181_81df55d6553a4c779fadc8d6f3fc91d4~mv2.jpg',
  '17_dcd181_a641737596c04059aeb306fd7f7a189b~mv2.jpg',
  '18_dcd181_c835dcccbc20473d9ca43dd52279727f~mv2.jpg',
  '19_dcd181_25eb5700c83a4f479d8d4011e936f2c1~mv2.jpg',
  '20_dcd181_9e4be357cfa449abbf63aea395c05854~mv2.jpg',
  '21_dcd181_ba332833243343678625e6b1dd2363da~mv2.jpg',
  '22_dcd181_59ddd0da65234cedbf53b652d09b3e8e~mv2.jpg',
  '23_dcd181_8066b94b0b044041a48accc6201494e5~mv2.jpg',
  '24_dcd181_cd64ace9c63e47f5b2f6c28533059c31~mv2.jpg',
  '25_dcd181_5b404bd1fce442c5b40e44735fa815ad~mv2.jpg',
]

const BASE = '/pics/04_מהעיתונות_נזיקין_וביטוח/'

export default function PressTort() {
  useRevealOnScroll()
  const [lightbox, setLightbox] = useState(null)

  return (
    <>
      <Breadcrumb items={[{ label: 'מהעיתונות', to: '#' }, { label: 'נזיקין וביטוח' }]} />

      <section className="hero">
        <div className="hero-inner">
          <p className="hero-eyebrow">מהעיתונות</p>
          <h1>מהעיתונות<span className="accent">נזיקין וביטוח</span></h1>
          <p className="hero-sub">כתבות ופרסומים בנושאי נזיקין וביטוח</p>
          <div className="hero-btns">
            <Link to="/#contact" className="btn-teal">קבעו ייעוץ חינם &#8592;</Link>
            <a href="tel:049001056" className="btn-outline-white">&#128222; 04-9001056</a>
          </div>
        </div>
      </section>

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
