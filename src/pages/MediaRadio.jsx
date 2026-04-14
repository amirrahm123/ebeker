import useRevealOnScroll from '../hooks/useRevealOnScroll'
import PageBanner from '../components/PageBanner'
import CTASection from '../components/CTASection'

const interviews = [
  {
    title: "ראיון ברדיו 104.5 FM בתכניתו של פרופ' בורונשטיין - האם הדבקות בנגיף הקורונה יכול להיות מוכר כתאונת עבודה? מאי 2020",
    duration: '08:18',
  },
  {
    title: "ראיון ברדיו 104.5 FM בתכניתו של פרופ' בורונשטיין - רשלנות רפואית, האמנם? פרשת אמיר פיי גוטמן - איבחון שגוי של מחלת לימפומה 2016",
    duration: '12:08',
  },
  {
    title: 'ראיון ברדיו 103 FM בתכניתו של גבי גזית - התנהלות רשלנית של רופא שלא סייע לצוות רפואי במהלך ניתוח בביה"ח פרטי 2010',
    duration: '07:45',
  },
]

export default function MediaRadio() {
  useRevealOnScroll()

  return (
    <>
      <PageBanner
        crumbs={[{ label: 'מרכז מדיה' }, { label: 'ראיונות ברדיו' }]}
        title="ראיונות"
        accent="ברדיו"
      />

      <section className="content-section">
        <div className="content-container">
          <div className="reveal" style={{ marginBottom: 32 }}>
            <p>מבחר ראיונות רדיו עם עו״ד ערן בקר בתכניות אקטואליה ומשפט — סקירת מקרים מרכזיים, ניתוח שאלות משפטיות עדכניות והסברים לציבור הרחב.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {interviews.map((it, i) => (
              <article key={i} className="reveal" style={{
                background: '#0d1b3e',
                border: '1px solid var(--color-accent)',
                borderRadius: 14,
                padding: '20px 24px',
                display: 'flex',
                alignItems: 'center',
                gap: 20,
                boxShadow: '0 4px 18px rgba(0,0,0,.12)',
              }}>
                <button aria-label="נגן" style={{
                  width: 56,
                  height: 56,
                  borderRadius: '50%',
                  background: 'var(--color-accent)',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  flexShrink: 0,
                  boxShadow: '0 4px 14px rgba(201,168,76,.35)',
                }}>
                  <span style={{
                    width: 0,
                    height: 0,
                    borderTop: '9px solid transparent',
                    borderBottom: '9px solid transparent',
                    borderRight: '14px solid #0d1b3e',
                    marginLeft: 3,
                  }} />
                </button>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <h3 style={{ margin: 0, color: '#fff', fontSize: '0.98rem', lineHeight: 1.55 }}>{it.title}</h3>
                  <div style={{
                    marginTop: 10,
                    height: 4,
                    background: 'rgba(255,255,255,.12)',
                    borderRadius: 2,
                    position: 'relative',
                    overflow: 'hidden',
                  }}>
                    <span style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      height: '100%',
                      width: '30%',
                      background: 'var(--color-accent)',
                      borderRadius: 2,
                    }} />
                  </div>
                </div>

                <span style={{
                  color: 'var(--color-accent)',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  fontVariantNumeric: 'tabular-nums',
                  flexShrink: 0,
                }}>{it.duration}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="מעוניינים להתייעץ?" subtitle="פנו אלינו לייעוץ ראשוני ללא עלות — נשמח לעזור." />
    </>
  )
}
