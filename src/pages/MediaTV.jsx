import useRevealOnScroll from '../hooks/useRevealOnScroll'
import PageBanner from '../components/PageBanner'
import CTASection from '../components/CTASection'

const videos = [
  { title: '2.3 מיליון ש"ח פיצויים להורי הנער שנהרג בטיול שנתי' },
  { title: 'תביעת נזיקין נגד הרשויות בגין רשלנות מותם של אזרחים במערת המוות באכזיב' },
  { title: 'תחקיר מותו של הנער יפתח ספיר בטיול שנתי של בית הספר בערבה' },
  { title: 'אבחון שגוי וכריתת שד מיותרת (רשלנות רפואית)' },
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

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 28 }}>
            {videos.map((v, i) => (
              <article key={i} className="reveal" style={{
                background: 'var(--color-card-bg)',
                border: '1px solid var(--color-card-border)',
                borderRadius: 14,
                overflow: 'hidden',
                boxShadow: '0 2px 12px rgba(0,0,0,.07)',
                display: 'flex',
                flexDirection: 'column',
              }}>
                <div style={{
                  position: 'relative',
                  paddingBottom: '56.25%',
                  background: '#1a1a1a',
                  overflow: 'hidden',
                }}>
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%)',
                  }}>
                    <div style={{
                      width: 68,
                      height: 48,
                      borderRadius: 10,
                      background: 'rgba(0,0,0,.75)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '2px solid rgba(255,255,255,.15)',
                    }}>
                      <span style={{
                        width: 0,
                        height: 0,
                        borderTop: '10px solid transparent',
                        borderBottom: '10px solid transparent',
                        borderRight: '16px solid #fff',
                        marginLeft: 4,
                      }} />
                    </div>
                  </div>
                </div>
                <div style={{ padding: '18px 20px 22px', flex: 1, display: 'flex', alignItems: 'flex-start' }}>
                  <h3 style={{ margin: 0, fontSize: '1rem', lineHeight: 1.5, color: 'var(--color-text)' }}>{v.title}</h3>
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
