import useRevealOnScroll from '../hooks/useRevealOnScroll'
import PageBanner from '../components/PageBanner'
import CTASection from '../components/CTASection'

export default function About() {
  useRevealOnScroll()

  return (
    <>
      <PageBanner
        crumbs={[{ label: 'אודות הפירמה' }]}
        title="מעל 21 שנה של"
        accent="נחישות משפטית"
      />

      <section className="content-section">
        <div className="content-container">
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16, marginBottom: 40, borderRadius: 16, overflow: 'hidden' }}>
            <img src={`/pics/02_אודות/01_dcd181_79e9cba1842f4ad29e3aca562d164ced~mv2.jpg`} alt='עו"ד ערן בקר בפגישה עם לקוח' style={{ width: '100%', height: 250, objectFit: 'cover', borderRadius: 12 }} />
            <img src={`/pics/02_אודות/02_dcd181_264931d61f6344c4bf682d619fafef86~mv2.jpg`} alt="צוות המשרד בפגישה" style={{ width: '100%', height: 250, objectFit: 'cover', borderRadius: 12 }} />
          </div>
          <div className="reveal" dir="rtl">
            <p>ערן בקר חברת עורכי דין הינו משרד בוטיק ותיק שנוסד בשנת 2003, והינו משרד מוביל ופורץ דרך בתחומי נזיקין, רשלנות רפואית, ביטוח, תאונות דרכים, תאונות אישיות, משרד הביטחון, תאונות עבודה - ביטוח לאומי - מחלות מקצוע, חשיפה לחומרים מסוכנים בעבודה, ריאות, עור, מחלות סרטן, אירועים חריגים בעבודה, אוטם שריר הלב, אירוע מוחי, נזקי עמוד שדרה, מיקרוטראומה, ועוד.</p>
            <p>המשרד מלווה ומייעץ ללקוח החל משלב בדיקת היתכנות הגשת התביעה, דרך מיצוי ומימוש זכויותיו עוד טרם נקיטת הליכים משפטיים, תוך ניהול משא ומתן מקצועי ועיקש, וכלה בייצוגו בפני הערכאות המשפטיות.</p>
            <p>המשרד עובד בשיתוף פעולה עם אנשי מקצוע רבים בתחומי הרפואה השונים, הבטיחות, האקטואריה, ההנדסה וכיוצ"ב, באופן שהלקוח מקבל מענה לכל צרכיו המשפטיים תחת קורת גג אחת.</p>
            <p>כל מקרה מטופל אישית על פי הצרכים המיוחדים של הנפגע, תוך שמירה על רמה מקצועית בלתי מתפשרת, אמינות ודיסקרטיות, וטיפול בתיקים מורכבים ולעיתים תקדימיים.</p>
          </div>

          <h2 className="reveal" dir="rtl">ערכים וחזון</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px,1fr))', gap: 20, margin: '24px 0 40px' }} className="reveal" dir="rtl">
            <div className="info-card">
              <h3>מקצועיות</h3>
              <p>סטנדרטים מקצועיים גבוהים, מומחיות עמוקה וידע משפטי מעמיק בכל תחומי העיסוק של המשרד.</p>
            </div>
            <div className="info-card">
              <h3>נאמנות והגינות</h3>
              <p>מחויבות מלאה לאינטרס הלקוח ויחס הוגן ושקוף לאורך כל שלבי הטיפול בתיק.</p>
            </div>
            <div className="info-card">
              <h3>יעילות</h3>
              <p>טיפול מהיר, מסודר וממוקד תוצאה במיצוי מלא ומיטבי של זכויות הלקוח.</p>
            </div>
            <div className="info-card">
              <h3>ללא ניגוד עניינים</h3>
              <p>המשרד פועל עבור נפגעים בלבד ואינו מייצג חברות ביטוח או גופים מוסדיים מולם נלחמים לקוחותינו.</p>
            </div>
            <div className="info-card">
              <h3>חדשנות</h3>
              <p>שילוב של גישות משפטיות פורצות דרך וכלים מתקדמים לקידום התיק וטובת הלקוח.</p>
            </div>
          </div>

          <div className="highlight-box reveal" dir="rtl">
            <h3>דירוגים</h3>
            <p>המשרד זוכה להכרה כמשרד בוטיק מוביל ומוערך בתחומי נזיקין, רשלנות רפואית ודיני ביטוח על ידי המדריכים המשפטיים המקצועיים המוכרים: <strong>Dun's 100</strong> ו-<strong>BDI Code</strong>.</p>
          </div>

          <h2 className="reveal">תחומי התמחות</h2>
          <ul className="reveal">
            <li>תביעות נזיקין כלליות ותאונות קטלניות</li>
            <li>תאונות דרכים ותאונות עבודה</li>
            <li>רשלנות רפואית בכל תחומי הרפואה</li>
            <li>ביטוח לאומי ומימוש זכויות רפואיות</li>
            <li>נפגעי צבא וכוחות הביטחון</li>
            <li>תאונות ילדים ותלמידים</li>
            <li>תאונות במתקני ספורט ותאונות ימיות</li>
            <li>דיני ביטוח ותביעות מול חברות ביטוח</li>
            <li>חקירת סיבות מוות</li>
            <li>צוואות, ירושות וייפוי כוח מתמשך</li>
            <li>פטור ממס הכנסה לנפגעים</li>
          </ul>
        </div>
      </section>

      <CTASection title="מוכנים לשמוע את סיפורכם" subtitle="ייעוץ ראשוני ללא עלות וללא התחייבות — פנו אלינו היום." />
    </>
  )
}
