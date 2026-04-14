import useRevealOnScroll from '../hooks/useRevealOnScroll'
import PageBanner from '../components/PageBanner'
import CTASection from '../components/CTASection'

const videos = [
  {
    title: 'תחקיר מותו של הנער יפתח ספיר בטיול שנתי של בית הספר בערבה',
    src: 'https://www.youtube.com/embed/N5AAJ29ir4c',
  },
  {
    title: '2.3 מיליון ש"ח פיצויים להורי הנער שנהרג בטיול שנתי',
    src: 'https://www.youtube.com/embed/8CbYTSP0Y7A',
  },
  {
    title: 'אבחון שגוי וכריתת שד מיותרת (רשלנות רפואית)',
    src: 'https://www.youtube.com/embed/JSB1z-yH85A',
  },
  {
    title: 'תביעת נזיקין נגד הרשויות בגין רשלנות מותם של אזרחים במערת המוות באכזיב',
    src: 'https://www.youtube.com/embed/-cUeFROaKK0',
  },
]

export default function MediaTV() {
  useRevealOnScroll()

  return (
    <>
      <PageBanner
        crumbs={[{ label: 'מרכז מדיה' }, { label: 'כתבות בטלוויזיה' }]}
        title="כתבות"
        accent="בטלוויזיה"
      />

      <section className="content-section">
        <div className="content-container">
          <div className="reveal" style={{ marginBottom: 32 }}>
            <p>מבחר כתבות ותחקירים בטלוויזיה המציגים תיקים מרכזיים שניהל עו״ד ערן בקר — תביעות מורכבות בתחומי הנזיקין, רשלנות רפואית וחקירת סיבות מוות.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 28 }}>
            {videos.map((v, i) => (
              <article key={i} className="reveal" style={{
                background: '#0d1b3e',
                border: '1px solid var(--color-accent)',
                borderRadius: 14,
                overflow: 'hidden',
                boxShadow: '0 4px 18px rgba(0,0,0,.15)',
                display: 'flex',
                flexDirection: 'column',
              }}>
                <iframe
                  src={v.src}
                  title={v.title}
                  width="100%"
                  height="280"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ display: 'block', border: 'none', background: '#000' }}
                />
                <div style={{ padding: '18px 22px 22px', flex: 1 }}>
                  <h3 style={{ margin: 0, fontSize: '1rem', lineHeight: 1.55, color: '#fff' }}>
                    <span style={{ color: 'var(--color-accent)' }}>▸</span> {v.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="מעוניינים להתייעץ?" subtitle="פנו אלינו לייעוץ ראשוני ללא עלות — נשמח לעזור." />
    </>
  )
}
