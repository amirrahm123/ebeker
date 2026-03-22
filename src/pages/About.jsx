import { Link } from 'react-router-dom'
import useRevealOnScroll from '../hooks/useRevealOnScroll'
import Breadcrumb from '../components/Breadcrumb'
import CTASection from '../components/CTASection'

export default function About() {
  useRevealOnScroll()

  return (
    <>
      <Breadcrumb items={[{ label: 'אודות הפירמה' }]} />

      <section className="hero">
        <div className="hero-inner">
          <p className="hero-eyebrow">אודות הפירמה</p>
          <h1>מעל 21 שנה של<span className="accent">נחישות משפטית</span></h1>
          <p className="hero-sub">משרד בוטיק מוביל המתמחה במימוש זכויות נפגעי גוף — עם ניסיון, מצוינות ודיסקרטיות.</p>
          <div className="hero-btns">
            <Link to="/#contact" className="btn-teal">קבעו ייעוץ חינם &#8592;</Link>
            <a href="tel:049001056" className="btn-outline-white">&#128222; 04-9001056</a>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="content-container">
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16, marginBottom: 40, borderRadius: 16, overflow: 'hidden' }}>
            <img src={`/pics/02_אודות/01_dcd181_79e9cba1842f4ad29e3aca562d164ced~mv2.jpg`} alt='עו"ד ערן בקר בפגישה עם לקוח' style={{ width: '100%', height: 250, objectFit: 'cover', borderRadius: 12 }} />
            <img src={`/pics/02_אודות/02_dcd181_264931d61f6344c4bf682d619fafef86~mv2.jpg`} alt="צוות המשרד בפגישה" style={{ width: '100%', height: 250, objectFit: 'cover', borderRadius: 12 }} />
          </div>
          <div className="reveal">
            <p>ערן בקר - חברת עורכי דין מוכרת כמשרד בעל הבנה עמוקה של המציאות המשפטית המשתנה. כל מקרה מטופל אישית על פי הצרכים המיוחדים של הנפגע, תוך שמירה על רמה מקצועית בלתי מתפשרת, אמינות ודיסקרטיות.</p>
            <p>המשרד מלווה ומייעץ ללקוח החל משלב בדיקת היתכנות הגשת התביעה, דרך מיצוי ומימוש זכויותיו עוד טרם נקיטת הליכים משפטיים, תוך ניהול משא ומתן מקצועי ועיקש, וכלה בייצוגו בפני הערכאות המשפטיות.</p>
            <p>המשרד עובד בשיתוף פעולה עם אנשי מקצוע רבים בתחומי הרפואה השונים, הבטיחות, האקטואריה, ההנדסה וכיוצ"ב, באופן שהלקוח מקבל מענה לכל צרכיו המשפטיים תחת קורת גג אחת.</p>
            <p>מאז היווסדו בשנת 2003, המשרד מתמחה בייצוג נפגעים בתאונות, רשלנות רפואית ומימוש זכויות רפואיות, עם התמחות ייחודית בדין ורפואה, וטיפול בתיקים מורכבים ולעיתים תקדימיים.</p>
          </div>

          <div className="highlight-box reveal">
            <h3>הכרות ודירוגים</h3>
            <p>המשרד זוכה להכרה כמשרד בוטיק מוביל ומוערך בתחומי נזיקין, רשלנות רפואית ודיני ביטוח על ידי המדריכים המשפטיים המקצועיים המוכרים: <strong>Dun's 100</strong> ו-<strong>BDI Code</strong>.</p>
          </div>

          <h2 className="reveal">ערכי הפירמה</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px,1fr))', gap: 20, margin: '24px 0 40px' }} className="reveal">
            <div className="info-card">
              <h3>&#9878;&#65039; מצוינות משפטית</h3>
              <p>כל תיק מנוהל בסטנדרטים המקצועיים הגבוהים ביותר, עם הכנה יסודית ואסטרטגיה משפטית מדויקת.</p>
            </div>
            <div className="info-card">
              <h3>&#129309; ליווי אישי</h3>
              <p>כל לקוח מקבל ליווי אישי ישיר מעו"ד ערן בקר עצמו — ללא ביניים, ללא אנונימיות.</p>
            </div>
            <div className="info-card">
              <h3>&#128274; דיסקרטיות</h3>
              <p>שמירה קפדנית על פרטיות הלקוח ועל סודיות כל מידע שנמסר למשרד, בכל שלבי הטיפול.</p>
            </div>
            <div className="info-card">
              <h3>&#128170; נחישות</h3>
              <p>המשרד נלחם בנחישות למיצוי מלא של זכויות הלקוח — מול חברות ביטוח, מוסדות ורשויות.</p>
            </div>
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
            <li>ניהול סיכונים ומשברים ברפואה</li>
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
