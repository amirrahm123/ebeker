import useRevealOnScroll from '../hooks/useRevealOnScroll'
import PageBanner from '../components/PageBanner'
import CTASection from '../components/CTASection'

const lectures = [
  { title: 'עו"ד ערן בקר מנחה את הפאנל המרכזי בנושא ועדות רפואיות של הביטוח הלאומי - בכנס של לשכת עורכי הדין במלון קרלטון תל אביב' },
]

export default function MediaLectures() {
  useRevealOnScroll()

  return (
    <>
      <PageBanner
        crumbs={[{ label: 'מרכז מדיה' }, { label: 'הרצאות וכנסים' }]}
        title="הרצאות"
        accent="וכנסים"
      />

      <section className="content-section">
        <div className="content-container">
          <div className="reveal" style={{ marginBottom: 32 }}>
            <p>עו״ד ערן בקר נושא הרצאות ומנחה פאנלים מקצועיים בכנסים של לשכת עורכי הדין ובפורומים מובילים בתחום הנזיקין, רשלנות רפואית וביטוח לאומי.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 28 }}>
            {lectures.map((l, i) => (
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
                  background: 'linear-gradient(135deg, #0d1b3e 0%, #1a2a5e 100%)',
                  overflow: 'hidden',
                }}>
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <span style={{ fontSize: '3.5rem' }} aria-hidden="true">🎤</span>
                  </div>
                </div>
                <div style={{ padding: '20px 22px 24px', flex: 1 }}>
                  <h3 style={{ margin: 0, fontSize: '1rem', lineHeight: 1.55, color: 'var(--color-text)' }}>{l.title}</h3>
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
