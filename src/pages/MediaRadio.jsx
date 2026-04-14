import useRevealOnScroll from '../hooks/useRevealOnScroll'
import PageBanner from '../components/PageBanner'
import CTASection from '../components/CTASection'

const interviews = [
  {
    title: "ראיון ברדיו 104.5 FM בתכניתו של פרופ' בורונשטיין - האם הדבקות בנגיף הקורונה יכול להיות מוכר כתאונת עבודה?",
    year: 'מאי 2020',
    src: 'https://music.wixstatic.com/mp3/dcd181_08c12cdf2a6a477bbb2f4cdf793dee6e.mp3',
  },
  {
    title: "ראיון ברדיו 104.5 FM בתכניתו של פרופ' בורונשטיין - רשלנות רפואית, האמנם? פרשת אמיר פיי גוטמן - איבחון שגוי של מחלת לימפומה",
    year: '2016',
    src: 'https://music.wixstatic.com/mp3/dcd181_80620017b8ba4786a2b671a080363192.mp3',
  },
  {
    title: 'ראיון ברדיו 103 FM בתכניתו של גבי גזית - התנהלות רשלנית של רופא שלא סייע לצוות רפואי במהלך ניתוח בביה"ח פרטי',
    year: '2010',
    src: 'https://music.wixstatic.com/mp3/dcd181_8c8aefadaece4d95be0940acf235314a.mp3',
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

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {interviews.map((it, i) => (
              <article key={i} className="reveal" style={{
                background: '#0d1b3e',
                border: '1px solid var(--color-accent)',
                borderRadius: 14,
                padding: '22px 26px',
                boxShadow: '0 4px 18px rgba(0,0,0,.15)',
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  gap: 16,
                  marginBottom: 14,
                  flexWrap: 'wrap',
                }}>
                  <h3 style={{ margin: 0, color: '#fff', fontSize: '1rem', lineHeight: 1.55, flex: 1, minWidth: 0 }}>
                    <span style={{ color: 'var(--color-accent)' }}>▸</span> {it.title}
                  </h3>
                  <span style={{
                    color: 'var(--color-accent)',
                    fontWeight: 700,
                    fontSize: '0.88rem',
                    flexShrink: 0,
                  }}>{it.year}</span>
                </div>
                <audio controls preload="none" src={it.src} style={{ width: '100%', display: 'block' }}>
                  הדפדפן שלך אינו תומך בהשמעת אודיו.
                </audio>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="מעוניינים להתייעץ?" subtitle="פנו אלינו לייעוץ ראשוני ללא עלות — נשמח לעזור." />
    </>
  )
}
